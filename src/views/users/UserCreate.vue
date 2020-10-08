<template>
  <div class="create-user-wrapper">
    <el-form
      ref="userform"
      :model="userform"
      label-width="120px"
      label-position="top"
      style="width: 40%"
    >
      <el-form-item label="Name">
        <el-input v-model="userform.user" placeholder="Enter name"></el-input>
      </el-form-item>

      <el-form-item label="Password">
        <el-input
          type="password"
          v-model="userform.password"
          placeholder="*********"
        ></el-input>
      </el-form-item>
      <div style="text-align: right;">
        <el-button size="small" type="primary" @click="saveUser"
          >Save</el-button
        >
        <el-button size="small">Cancel</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import userService from '../../api/users';

export default {
  data() {
    return {
      userform: {
        user: '',
        password: '',
        status: false,
      },
    };
  },
  methods: {
    saveUser() {
      userService
        .createUser(this.userform)
        .then(() => {
          this.successMessage('User created successfully');
          this.$router.push('/users');
        })
        .catch((error) => console.log(error.message));
    },
  },
};
</script>
