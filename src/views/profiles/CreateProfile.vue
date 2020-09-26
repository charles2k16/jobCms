<template>
  <div>
    <el-form
      ref="profileform"
      :model="profileform"
      label-width="120px"
      style="width: 60%"
    >
      <el-form-item label="Profile name">
        <el-input v-model="profileform.name"></el-input>
      </el-form-item>

      <el-form-item label="Features">
        <br />

        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          >Call Forwarding</el-checkbox
        >
        <div style="margin-left: 35px;">
          <el-checkbox-group
            v-model="profileform.callForward"
            @change="handlecheckedOptionsChange"
          >
            <el-checkbox v-for="cf in options" :label="cf" :key="cf">{{
              cf
            }}</el-checkbox>
          </el-checkbox-group>
        </div>

        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          >On Prompt</el-checkbox
        >
        <div style="margin-left: 35px;">
          <el-checkbox-group
            v-model="profileform.callForward"
            @change="handlecheckedOptionsChange"
          >
            <el-checkbox v-for="cf in options" :label="cf" :key="cf">{{
              cf
            }}</el-checkbox>
          </el-checkbox-group>
        </div>
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
const callforwardOptions = [
  'On Busy',
  'On Unanswer',
  'On Inactive',
  'Unconditional',
];
export default {
  data() {
    return {
      checkAll: false,
      checkedOptions: ['On Unanswer'],
      options: callforwardOptions,
      isIndeterminate: false,
      newProfile: null,
      profileform: {
        name: '',
        callForward: [],
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
  methods: {
    onSubmit() {},
    handleCheckAllChange(val) {
      this.profileform.callForward = val ? callforwardOptions : [];
      this.isIndeterminate = false;
      console.log(this.profileform.callForward);
    },
    handlecheckedOptionsChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.options.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.options.length;
    },
  },
};
</script>
