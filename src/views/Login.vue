<template>
  <div class="login">
    <div class="login_form">
      <div style="text-align:center; background:#8B222F;">
        <router-link to="/">
          <img
            src="../assets/images/paic.png"
            alt="logo"
            style="width:180px;"
          />
        </router-link>
      </div>

      <el-form :model="loginForm" ref="loginForm" status-icon :rules="rules">
        <el-form-item prop="email" class="my-3">
          <el-input
            v-model="loginForm.email"
            placeholder="yourname@email.com"
            clearable
            prefix-icon="el-icon-eleme"
          />
        </el-form-item>
        <el-form-item prop="password" class="my-3">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="**********"
            clearable
            prefix-icon="el-icon-date"
          />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="full-width"
          type="primary"
          :loading="btnLoading"
          @click="signIn"
          icon="el-icon-mouse"
        >
          Sign In</el-button
        >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnLoading: false,
      loginForm: {
        email: '',
        password: '',
      },
      rules: {
        email: [
          {
            required: true,
            type: 'email',
            message: 'Please enter valid email',
            trigger: ['blur', 'change'],
          },
          { min: 5, message: 'Length should be 5 or more', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Please enter password', trigger: 'blur' },
          {
            min: 6,
            message: 'Length should be 6 or more characters',
            trigger: 'change',
          },
        ],
      },
    };
  },
  methods: {
    signIn() {
      this.btnLoading = true;
    },
  },
};
</script>
