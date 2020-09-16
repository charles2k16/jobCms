<template>
  <div>
    <el-form
      ref="userform"
      :model="userform"
      label-width="120px"
      style="width: 50%"
    >
      <el-form-item label="Name">
        <el-input v-model="userform.name" placeholder="Enter name"></el-input>
      </el-form-item>

      <el-form-item label="User Type">
        <el-input v-model="userform.type" placeholder="user type"></el-input>
      </el-form-item>

      <el-form-item label="Password">
        <el-input
          type="password"
          v-model="userform.password"
          placeholder="*********"
        ></el-input>
        <br />
        <el-input
          class="mt-2"
          type="password"
          placeholder="*********"
          v-model="userform.password_confirm"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button size="small" type="primary" @click="onSubmit"
          >Save</el-button
        >
        <el-button size="small">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userform: {
        user: '',
        type: '',
        password: '',
        password_confirm: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
  },
};
</script>
