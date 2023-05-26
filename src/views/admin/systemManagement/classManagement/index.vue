<script setup lang="ts">
import {
  ref,
  reactive,
  ComputedRef,
  computed,
  onMounted,
  watchEffect
} from "vue";
import { Info, useClass } from "./hook";
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
  name: "ClassList"
});

const formRef = ref();
const tableRef = ref();
const { loading, columns, dataList, onSearch, handleUpdate, handleDelete } =
  useClass();

const form = reactive({
  name: "",
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
  class: ""
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
      message: "请输入班级",
      trigger: "blur"
    }
  ]
});

const collegeList = ref([]);
const majorList = ref([]);

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
        if (item.name)
          return item.name.toString().toLowerCase().includes(form.name);
        else return false;
      })
      .filter(item => {
        if (form.status === 0 || form.status === 1)
          return item.status === form.status;
        else return true;
      });
  else return [];
});

/** 对话框关闭前的回调 */
function beforeClose(done?) {
  resetAddForm(ruleFormRef.value);
  majorList.value = [];
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

/** 新增班级 */
const addClass = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(valid => {
    if (valid) {
      const classList = [];
      if (dataList.value.length > 0) {
        dataList.value.forEach(a => {
          if (a.children && a.children.length > 0) {
            a.children.forEach(b => {
              if (b.children && b.children.length > 0) {
                b.children.forEach(c => {
                  if (c.name) classList.push(c.name);
                });
              }
            });
          }
        });
      }
      if (classList.includes(addForm.class))
        return message("新增失败，该班级已存在", {
          grouping: true,
          type: "error"
        });
      else {
        for (let i = 0; i < dataList.value.length; i++) {
          if (dataList.value[i].id === addForm.college) {
            for (let j = 0; j < dataList.value[i].children.length; j++) {
              if (dataList.value[i].children[j].id === addForm.major) {
                const id =
                  dataList.value[i].children[j].children[
                    dataList.value[i].children[j].children.length - 1
                  ].id;
                dataList.value[i].children[j].children.push({
                  id: id + 1,
                  name: addForm.class,
                  type: 3,
                  parentId: dataList.value[i].children[j].id,
                  status: 1,
                  createTime: new Date().getTime(),
                  desc: "无"
                });
                beforeClose();
                message("新增成功", {
                  grouping: true,
                  type: "success"
                });
                break;
              }
            }
            break;
          }
        }
      }
    }
  });
};
</script>

<template>
  <div class="main">
    <el-form
      ref="formRef"
      :inline="true"
      :model="form"
      class="bg-bg_color w-[99/100] pl-8 pt-4"
    >
      <el-form-item label="部门名称：" prop="name">
        <el-input
          v-model="form.name"
          placeholder="请输入部门名称"
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
      title="班级列表"
      :tableRef="tableRef?.getTableRef()"
      @refresh="onSearch"
    >
      <template #buttons>
        <el-button
          type="primary"
          :icon="useRenderIcon(AddFill)"
          @click="dialog = true"
        >
          新增班级
        </el-button>
      </template>
      <template v-slot="{ size, checkList }">
        <pure-table
          ref="tableRef"
          border
          align-whole="center"
          row-key="id"
          showOverflowTooltip
          default-expand-all
          :loading="loading"
          :size="size"
          :height="size === 'small' ? 360 : 500"
          :data="filterList"
          :columns="columns"
          :checkList="checkList"
          :header-cell-style="{
            background: 'var(--el-table-row-hover-bg-color)',
            color: 'var(--el-text-color-primary)'
          }"
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
      title="新增班级"
      width="400px"
      :destroy-on-close="true"
      :before-close="beforeClose"
    >
      <el-form
        ref="ruleFormRef"
        :model="addForm"
        :rules="formRules"
        label-width="60px"
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
          <el-input v-model="addForm.class" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary" @click="addClass(ruleFormRef)">
          新增
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>
