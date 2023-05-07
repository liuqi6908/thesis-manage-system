<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, reactive } from "vue";
import Motion from "./utils/motion";
import { message } from "@/utils/message";
import { updateRules } from "./utils/rule";
import type { FormInstance } from "element-plus";
import { $t, transformI18n } from "@/plugins/i18n";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Lock from "@iconify-icons/ri/lock-fill";

defineOptions({
  name: "ChangePassword"
});

const loading = ref(false);
const { t } = useI18n();

const ruleForm = reactive({
  oldPassword: "",
  newPassword: "",
  repeatPassword: ""
});
const ruleFormRef = ref<FormInstance>();

const repeatPasswordRule = [
  {
    validator: (rule, value, callback) => {
      if (value === "") {
        callback(new Error(transformI18n($t("login.passwordSureReg"))));
      } else if (ruleForm.newPassword !== value) {
        callback(new Error(transformI18n($t("login.passwordDifferentReg"))));
      } else {
        callback();
      }
    },
    trigger: "blur"
  }
];

/** 修改密码 */
const onUpdate = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  loading.value = true;
  await formEl.validate((valid, fields) => {
    if (valid) {
      setTimeout(() => {
        message(transformI18n($t("login.passwordUpdateReg")), {
          type: "success"
        });
        resetForm(formEl);
        loading.value = false;
      }, 2000);
    } else {
      loading.value = false;
      return fields;
    }
  });
};

/** 重置表单 */
const resetForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <div>
    <el-card class="box-card m-4" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">修改密码</span>
        </div>
      </template>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="updateRules"
        size="large"
        class="max-w-xs m-auto"
      >
        <Motion>
          <el-form-item prop="oldPassword">
            <el-input
              clearable
              show-password
              v-model="ruleForm.oldPassword"
              :placeholder="t('login.oldPassword')"
              :prefix-icon="useRenderIcon(Lock)"
            />
          </el-form-item>
        </Motion>

        <Motion :delay="50">
          <el-form-item prop="newPassword">
            <el-input
              clearable
              show-password
              v-model="ruleForm.newPassword"
              :placeholder="t('login.newPassword')"
              :prefix-icon="useRenderIcon(Lock)"
            />
          </el-form-item>
        </Motion>

        <Motion :delay="100">
          <el-form-item :rules="repeatPasswordRule" prop="repeatPassword">
            <el-input
              clearable
              show-password
              v-model="ruleForm.repeatPassword"
              :placeholder="t('login.sure')"
              :prefix-icon="useRenderIcon(Lock)"
            />
          </el-form-item>
        </Motion>

        <Motion :delay="150">
          <el-form-item>
            <el-button
              class="w-full"
              size="default"
              type="primary"
              :loading="loading"
              @click="onUpdate(ruleFormRef)"
            >
              {{ t("login.definite") }}
            </el-button>
          </el-form-item>
        </Motion>

        <Motion :delay="200">
          <el-form-item>
            <el-button
              class="w-full"
              size="default"
              @click="resetForm(ruleFormRef)"
            >
              {{ t("login.reset") }}
            </el-button>
          </el-form-item>
        </Motion>
      </el-form>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  margin: 0 !important;
}
</style>
