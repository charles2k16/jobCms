<template>
  <div>
    <el-form
      ref="subcriberform"
      :model="subcriberform"
      label-width="120px"
      style="width: 50%"
    >
      <el-form-item label="MSISDN">
        <el-input
          v-model="subcriberform.msisdn"
          :disabled="disabled"
        ></el-input>
      </el-form-item>

      <el-form-item label="Profile name">
        <el-input
          v-model="subcriberform.profileName"
          :disabled="disabled"
        ></el-input>
      </el-form-item>

      <el-form-item label="Features">
        <el-checkbox-group v-model="subcriberform.type">
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

      <el-form-item label="Settings">
        <el-checkbox-group v-model="subcriberform.type">
          <el-checkbox label="ACTIVE (ACT)" name="type"></el-checkbox><br />
          <el-checkbox label="SUSPENDED (SUS)" name="type"></el-checkbox><br />
          <el-checkbox
            label="DETACHED SUBSCRIBERS (DTS)"
            name="type"
          ></el-checkbox
          ><br />
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="Notes">
        <el-input
          type="textarea"
          v-model="subcriberform.desc"
          :autosize="{ minRows: 2, maxRows: 4 }"
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
      newSubscriber: null,
      subcriberform: {
        msisdn: '',
        profileName: '',
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
    onSubmit() {
      console.log('submit!');
    },
  },
};
</script>
