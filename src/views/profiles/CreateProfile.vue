<template>
  <div class="mt-4">
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
        <br />
        <el-checkbox
          :indeterminate="promtIndeterminate"
          v-model="checkAllPrompt"
          @change="handlePromptCheckAll"
          >On Prompt</el-checkbox
        >
        <div style="margin-left: 35px;">
          <el-checkbox-group
            v-model="profileform.prompt"
            @change="promptOptionsChange"
          >
            <el-checkbox v-for="p in promptOptions" :label="p" :key="p">{{
              p
            }}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-form-item>

      <el-form-item label="Notes">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          v-model="profileform.notes"
        ></el-input>
      </el-form-item>
      <br />
    </el-form>
    <div style="text-align: right;" class="mt-4 mr-8">
      <el-button type="primary" size="small" @click="addProfile">Save</el-button>
      <el-button size="small">Cancel</el-button>
    </div>
  </div>
</template>

<script>
import profileService from "../../api/profile"

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
      checkAllPrompt: false,
      options: callforwardOptions,
      promptOptions: ['On Busy', 'On Unanswer', 'On Inactive', 'Unconditional'],
      isIndeterminate: false,
      promtIndeterminate: false,
      newProfile: null,
      profileform: {
        name: '',
        callForward: [],
        prompt: [],
        notes: '',
      },
    };
  },
  methods: {
    addProfile () {
      console.log(this.profileform)
      profileService.createProfile(this.profileform)
        .then(()=> {
          this.successMessage('Profile created successfully')
          this.$router.push("/profiles")
        })
        .catch((error) => console.log(error.message))
    },
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
    handlePromptCheckAll(val) {
      this.profileform.prompt = val ? this.promptOptions : [];
      this.promtIndeterminate = false;
      console.log(this.profileform.prompt);
    },
    promptOptionsChange(value) {
      let checkedCount = value.length;
      this.checkAllPrompt = checkedCount === this.promptOptions.length;
      this.promtIndeterminate =
        checkedCount > 0 && checkedCount < this.promptOptions.length;
    },
  },
};
</script>
