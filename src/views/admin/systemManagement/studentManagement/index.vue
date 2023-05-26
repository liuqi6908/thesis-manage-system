<script setup lang="ts">
import {
  ref,
  reactive,
  ComputedRef,
  computed,
  onMounted,
  watchEffect
} from "vue";
import tree from "./tree.vue";
import { Info, useStudent } from "./hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { classList } from "@/api/admin/system";
import type { FormInstance } from "element-plus";
import { message } from "@/utils/message";

import Delete from "@iconify-icons/ep/delete";
import EditPen from "@iconify-icons/ep/edit-pen";
import Refresh from "@iconify-icons/ep/refresh";
import AddFill from "@iconify-icons/ri/add-circle-line";

defineOptions({
  name: "StudentManagement"
});

const formRef = ref();
const {
  loading,
  loadingConfig,
  columns,
  dataList,
  pagination,
  onSearch,
  handleUpdate,
  handleDelete,
  handleSizeChange,
  handleCurrentChange
} = useStudent();

const form = reactive({
  username: "",
  userNo: "",
  status: null
});

const resetForm = formEl => {
  if (!formEl) return;
  formEl.resetFields();
};

const dialog = ref(false);

const addForm = reactive({
  college: null,
  major: null,
  class: null,
  username: "",
  userNo: "",
  gender: "",
  phone: "",
  email: ""
});
const ruleFormRef = ref<FormInstance>();
const formRules = reactive({
  college: [
    {
      required: true,
      message: "请选择学院",
      trigger: "change"
    }
  ],
  major: [
    {
      required: true,
      message: "请选择专业",
      trigger: "change"
    }
  ],
  class: [
    {
      required: true,
      message: "请选择班级",
      trigger: "change"
    }
  ],
  username: [
    {
      required: true,
      message: "请输入姓名",
      trigger: "blur"
    }
  ],
  userNo: [
    {
      required: true,
      message: "请输入学号",
      trigger: "blur"
    }
  ],
  gender: [
    {
      required: true,
      message: "请选择性别",
      trigger: "change"
    }
  ],
  phone: [
    {
      required: true,
      message: "请输入手机号",
      trigger: "blur"
    }
  ],
  email: [
    {
      required: true,
      message: "请输入电子邮箱",
      trigger: "blur"
    }
  ]
});

const collegeList = ref([]);
const majorList = ref([]);
const classArr = ref([]);

onMounted(() => {
  classList({ type: 1 }).then(res => {
    if (res.success) {
      collegeList.value = res.data;
    }
  });
});

/** 过滤列表 */
const filterList: ComputedRef<Info[]> = computed(() => {
  if (dataList.value)
    return dataList.value
      .filter(item => {
        if (item.username)
          return item.username.toString().toLowerCase().includes(form.username);
        else return false;
      })
      .filter(item => {
        if (item.userNo)
          return item.userNo.toString().toLowerCase().includes(form.userNo);
        else return false;
      })
      .filter(item => {
        if (form.status === 0 || form.status === 1)
          return item.status === form.status;
        else return true;
      });
  else return [];
});

// 添加一个观察器，监视 filteredList 属性的变化
watchEffect(() => {
  pagination.total = filterList.value.length;
});

/** 对话框关闭前的回调 */
function beforeClose(done?) {
  resetAddForm(ruleFormRef.value);
  majorList.value = [];
  classArr.value = [];
  if (done) done();
  else dialog.value = false;
}

const resetAddForm = formEl => {
  if (!formEl) return;
  formEl.resetFields();
};

/** 根据学院获取专业 */
watchEffect(() => {
  addForm.major = null;
  if (addForm.college)
    classList({ type: 2, id: addForm.college }).then(res => {
      if (res.success) {
        majorList.value = res.data;
      }
    });
});

/** 根据专业获取班级 */
watchEffect(() => {
  addForm.class = null;
  if (addForm.major)
    classList({ type: 3, id: addForm.major }).then(res => {
      if (res.success) {
        classArr.value = res.data;
      }
    });
});

/** 新增学生 */
const addStudent = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(valid => {
    if (valid) {
      if (dataList.value.map(item => item.userNo).includes(addForm.userNo))
        return message("新增失败，该学生已存在", {
          grouping: true,
          type: "error"
        });
      else {
        const i = collegeList.value.map(a => a.id).indexOf(addForm.college);
        const j = majorList.value.map(a => a.id).indexOf(addForm.major);
        const k = classArr.value.map(a => a.id).indexOf(addForm.class);
        dataList.value.push({
          id: Math.max(...dataList.value.map(item => item.id)) + 1,
          username: addForm.username,
          userNo: addForm.userNo,
          gender: addForm.gender,
          college: collegeList.value[i].name,
          major: majorList.value[j].name,
          class: classArr.value[k].name,
          phone: addForm.phone,
          email: addForm.email,
          status: 1,
          createTime: new Date().getTime()
        });
        beforeClose();
        message("新增成功", {
          grouping: true,
          type: "success"
        });
      }
    }
  });
};
</script>

<template>
  <div class="main">
    <tree class="w-[17%] h-full min-w-[150px]" />
    <div class="flex-1 h-full overflow-auto ml-[15px]">
      <el-form
        ref="formRef"
        :inline="true"
        :model="form"
        class="bg-bg_color w-[99/100] pl-8 pt-4"
      >
        <el-form-item label="姓名：" prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入姓名"
            clearable
            class="!w-[200px]"
          />
        </el-form-item>
        <el-form-item label="学号：" prop="userNo">
          <el-input
            v-model="form.userNo"
            placeholder="请输入学号"
            clearable
            class="!w-[200px]"
          />
        </el-form-item>
        <el-form-item label="状态：" prop="status">
          <el-select
            v-model="form.status"
            placeholder="请选择状态"
            clearable
            class="!w-[180px]"
          >
            <el-option label="启用" :value="1" />
            <el-option label="禁用" :value="0" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button :icon="useRenderIcon(Refresh)" @click="resetForm(formRef)">
            重置
          </el-button>
        </el-form-item>
      </el-form>

      <PureTableBar
        title="学生列表"
        @refresh="onSearch"
        class="overflow-hidden"
      >
        <template #buttons>
          <el-button
            type="primary"
            :icon="useRenderIcon(AddFill)"
            @click="dialog = true"
          >
            新增学生
          </el-button>
        </template>
        <template v-slot="{ size, checkList }">
          <pure-table
            border
            align-whole="center"
            showOverflowTooltip
            :loading="loading"
            :loading-config="loadingConfig"
            :size="size"
            :height="size === 'small' ? 360 : 500"
            :data="
              filterList.slice(
                (pagination.currentPage - 1) * pagination.pageSize,
                pagination.currentPage * pagination.pageSize
              )
            "
            :columns="columns"
            :checkList="checkList"
            :pagination="pagination"
            :paginationSmall="size === 'small' ? true : false"
            :header-cell-style="{
              background: 'var(--el-table-row-hover-bg-color)',
              color: 'var(--el-text-color-primary)'
            }"
            @page-size-change="handleSizeChange"
            @page-current-change="handleCurrentChange"
          >
            <template #operation="{ row }">
              <el-button
                class="reset-margin"
                link
                type="primary"
                :size="size"
                :icon="useRenderIcon(EditPen)"
                @click="handleUpdate(row)"
              >
                修改
              </el-button>
              <el-popconfirm title="是否确认删除?" @confirm="handleDelete(row)">
                <template #reference>
                  <el-button
                    class="reset-margin"
                    link
                    type="danger"
                    :size="size"
                    :icon="useRenderIcon(Delete)"
                  >
                    删除
                  </el-button>
                </template>
              </el-popconfirm>
            </template>
          </pure-table>
        </template>
      </PureTableBar>

      <el-dialog
        v-model="dialog"
        title="新增学生"
        width="500px"
        :destroy-on-close="true"
        :before-close="beforeClose"
      >
        <el-form
          ref="ruleFormRef"
          :model="addForm"
          :rules="formRules"
          label-width="100px"
          status-icon
        >
          <el-form-item label="学院" prop="college">
            <el-select
              v-model="addForm.college"
              placeholder="请选择学院"
              class="w-full"
            >
              <el-option
                v-for="item in collegeList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="专业" prop="major">
            <el-select
              v-model="addForm.major"
              placeholder="请选择专业"
              class="w-full"
            >
              <el-option
                v-for="item in majorList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="班级" prop="class">
            <el-select
              v-model="addForm.class"
              placeholder="请选择班级"
              class="w-full"
            >
              <el-option
                v-for="item in classArr"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="姓名" prop="username">
            <el-input v-model="addForm.username" />
          </el-form-item>
          <el-form-item label="学号" prop="userNo">
            <el-input v-model="addForm.userNo" />
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="addForm.gender">
              <el-radio label="男" />
              <el-radio label="女" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="addForm.phone" />
          </el-form-item>
          <el-form-item label="电子邮箱" prop="email">
            <el-input v-model="addForm.email" />
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button type="primary" @click="addStudent(ruleFormRef)">
            添加
          </el-button>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}

.main {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 !important;
  padding: 24px 24px 10px;

  :deep(.el-pagination) {
    overflow-x: auto;
  }
}
</style>
