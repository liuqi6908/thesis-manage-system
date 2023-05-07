<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useUserStore } from "@/store/modules/user";
import { userinfo } from "@/api/user";
import { message } from "@/utils/message";
import { $t, transformI18n } from "@/plugins/i18n";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import EditPen from "@iconify-icons/ep/edit-pen";

defineOptions({
  name: "User"
});

const loading = ref(true);
const { userNo, roles } = useUserStore();
const userInfo = ref([]);
const teacher = ref(null);

onBeforeMount(() => {
  userinfo({ userNo: userNo, role: roles[0] })
    .then(res => {
      if (res.success && res.data && res.data.length > 0) {
        userInfo.value = res.data;
        if (roles[0] === "student") {
          res.data.some(item => {
            if (item.teacherNo) {
              userinfo({ userNo: item.teacherNo, role: roles[0] }).then(res => {
                if (res.success && res.data && res.data.length > 0) {
                  teacher.value = res.data;
                }
              });
              return true;
            }
          });
        }
      } else {
        if (res.message) {
          message(res.message, {
            grouping: true,
            type: "error"
          });
        }
      }
    })
    .finally(() => {
      loading.value = false;
    });
});
</script>

<template>
  <div v-loading="loading">
    <el-card class="box-card m-4" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">用户信息</span>
          <el-button
            type="primary"
            class="float-right"
            @click="$router.push({ name: 'ChangePassword' })"
            :icon="useRenderIcon(EditPen)"
            >修改密码</el-button
          >
        </div>
      </template>
      <el-descriptions border>
        <el-descriptions-item
          :label="item.label"
          label-align="left"
          align="left"
          v-for="(item, index) in userInfo"
          :key="index"
        >
          <span style="color: var(--el-color-primary)">{{ item.field }}</span>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-card class="box-card m-4" shadow="never" v-if="roles[0] === 'student'">
      <template #header>
        <div class="card-header">
          <span class="font-medium">指导教师</span>
        </div>
      </template>
      <el-descriptions border v-if="teacher && teacher.length > 0">
        <el-descriptions-item
          :label="item.label"
          label-align="left"
          align="left"
          v-for="(item, index) in teacher"
          :key="index"
        >
          <span style="color: var(--el-color-primary)">{{ item.field }}</span>
        </el-descriptions-item>
      </el-descriptions>
      <el-empty v-else :description="transformI18n($t('status.noData'))" />
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  margin: 0 !important;
}
</style>
