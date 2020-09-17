<template>
  <div>
    <el-form
      ref="profileform"
      :model="profileform"
      label-width="120px"
      style="width: 50%"
    >
      <el-form-item label="Profile name">
        <el-input v-model="profileform.name" :disabled="disabled"></el-input>
      </el-form-item>

      <el-form-item label="Features">
        <el-checkbox-group v-model="profileform.type">
          <el-checkbox
            label="CALL FORWARD UNCONDITIONAL (CFU)"
            name="type"
          ></el-checkbox
          ><br />
          <el-checkbox
            label="CALL FORWARD UNREACHABLE (CFNRC)"
            name="type"
          ></el-checkbox
          ><br />
          <el-checkbox
            label="CALL FORWARD ON BUSY (CFB)"
            name="type"
          ></el-checkbox
          ><br />
          <el-checkbox
            label="CALL FORWARD ON NO REPLY (CFNRY)"
            name="type"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="Notes">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          v-model="profileform.desc"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="onSubmit"
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
      newProfile: null,
      profileform: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
