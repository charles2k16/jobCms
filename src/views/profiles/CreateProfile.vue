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

      <el-form-item label="Status">
        <el-select v-model="profileform.status">
          <el-option v-for="s in profileStatus" :key="s" :label="s" :value="s">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Features">
        <br />

        <!-- start Dial -->
        <el-checkbox
          :indeterminate="sdIndeterminate"
          v-model="checkAllStarDial"
          @change="handleStarDialCheck"
          >Star Dial</el-checkbox
        >
        <div style="margin-left: 35px;">
          <el-checkbox-group
            v-model="profileform.starDial"
            @change="starDialOptionsChange"
          >
            <el-checkbox v-for="sd in starDialOptions" :label="sd" :key="sd">{{
              sd
            }}</el-checkbox>
          </el-checkbox-group>
        </div>

        <!-- Call forwarding -->
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

        <!-- Prompt Options -->
        <el-checkbox
          :indeterminate="promtIndeterminate"
          v-model="checkAllPrompt"
          @change="handlePromptCheckAll"
          >On Prompt</el-checkbox
        >
        <div style="margin-left: 35px;">
          <el-checkbox-group
            v-model="profileform.prompts"
            @change="promptOptionsChange"
          >
            <el-checkbox v-for="p in promptOptions" :label="p" :key="p">{{
              p
            }}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-form-item>
      <br /><br /><br /><br />
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
      <el-button type="primary" size="small" @click="addProfile"
        >Save</el-button
      >
      <el-button size="small">Cancel</el-button>
    </div>
  </div>
</template>

<script>
import profileService from '../../api/profile';

export default {
  data() {
    return {
      checkAll: false,
      checkAllPrompt: false,
      checkAllStarDial: false,
      options: ['on-busy', 'no-answer', 'unconditional', 'on-inactive'],
      profileStatus: [
        'active',
        'suspended',
        'canceled',
        'do-not-disturb',
        'block-calls',
      ],
      promptOptions: ['on-busy', 'no-answer', 'on-inactive'],
      starDialOptions: ['unknown-origin-deal', 'call-forward'],
      outgoingOptions: ['unknown-origin-deal'],
      isIndeterminate: false,
      promtIndeterminate: false,
      sdIndeterminate: false,
      newProfile: null,
      profileform: {
        name: '',
        status: '',
        callForward: [],
        prompts: [],
        starDial: [],
        outgoingCall: [],
        timeOuts: 'dial-call-timeout',
        notes: '',
      },
    };
  },
  methods: {
    addProfile() {
      profileService
        .createProfile(this.profileform)
        .then(() => {
          this.successMessage('Profile created successfully');
          this.$router.push('/profiles');
        })
        .catch((error) => console.log(error.message));
    },
    handleCheckAllChange(value) {
      this.profileform.callForward = value ? this.options : [];
      this.isIndeterminate = false;
    },
    handlecheckedOptionsChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.options.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.options.length;
    },
    handlePromptCheckAll(val) {
      this.profileform.prompts = val ? this.promptOptions : [];
      this.promtIndeterminate = false;
    },
    promptOptionsChange(value) {
      let checkedCount = value.length;
      this.checkAllPrompt = checkedCount === this.promptOptions.length;
      this.promtIndeterminate =
        checkedCount > 0 && checkedCount < this.promptOptions.length;
    },
    handleStarDialCheck(val) {
      this.profileform.starDial = val ? this.starDialOptions : [];
      this.sdIndeterminate = false;
    },
    starDialOptionsChange(value) {
      let checkedCount = value.length;
      this.checkAllStarDial = checkedCount === this.starDialOptions.length;
      this.sdIndeterminate =
        checkedCount > 0 && checkedCount < this.starDialOptions.length;
    },
  },
};
</script>
