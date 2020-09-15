<template>
  <div>
      <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="MSISDN">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      
      <el-form-item label="Profile name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    
      <el-form-item label="Features">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="CALL FORWARD UNCONDITIONAL (CFU)" name="type"></el-checkbox><br />
          <el-checkbox label="CALL FORWARD UNREACHABLE (CFNRC)" name="type"></el-checkbox><br />
          <el-checkbox label="CALL FORWARD ON BUSY (CFB)" name="type"></el-checkbox><br />
          <el-checkbox label="CALL FORWARD ON NO REPLY (CFNRY)" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="Settings">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="ACTIVE (ACT)" name="type"></el-checkbox><br />
          <el-checkbox label="SUSPENDED (SUS)" name="type"></el-checkbox><br />
          <el-checkbox label="DETACHED SUBSCRIBERS (DTS)" name="type"></el-checkbox><br />
        </el-checkbox-group>
      </el-form-item>
      
      <el-form-item label="Notes">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Save</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>