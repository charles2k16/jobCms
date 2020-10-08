<template>
  <div class="mt-4">
    <el-form
      ref="profileform"
      :model="profileform"
      label-width="120px"
      style="width: 70%"
    >
      <el-form-item label="Profile name">
        <el-input v-model="profileform.name"></el-input>
      </el-form-item>

      <el-form-item label="Features">
        <br />

        <!-- Status -->
        <span>Status</span>
        <div style="margin-left: 35px;">
          <el-checkbox-group v-model="profileform.status" :max="1">
            <el-checkbox label="active"></el-checkbox>
            <el-checkbox label="suspended"></el-checkbox>
            <el-checkbox label="canceled"></el-checkbox>
            <el-checkbox label="do-not-disturb"></el-checkbox>
            <el-checkbox label="block-inbound-calls"></el-checkbox>
            <el-checkbox label="block-outbound-calls"></el-checkbox>
          </el-checkbox-group>
        </div>

        <!-- start Dial -->
        <el-checkbox
          :indeterminate="sdIndeterminate"
          v-model="checkAllStarDial"
          @change="checkAllOptions($event, 'star-dial')"
          >Star Dial</el-checkbox
        >
        <div style="margin-left: 35px;">
          <el-checkbox-group
            v-model="profileform.starDial"
            @change="checkOptionChange($event, 'star-dial')"
          >
            <el-checkbox label="unknown-origin-dial"></el-checkbox>
            <span style="margin-left:10px">
              callforward:
              <el-checkbox label="active">
                active <input type="number" placeholder="enter regex number"
              /></el-checkbox>
            </span>
          </el-checkbox-group>
        </div>

        <!-- Call forwarding -->
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="checkAllOptions($event, 'call-forward')"
          >Call Forwarding</el-checkbox
        >
        <div style="margin-left: 35px;">
          <el-checkbox-group
            v-model="profileform.callForward"
            @change="checkOptionChange($event, 'call-forward')"
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
          @change="checkAllOptions($event, 'on-prompt')"
          >Prompt</el-checkbox
        >
        <div style="margin-left: 35px;">
          <el-checkbox-group
            v-model="profileform.prompts"
            @change="checkOptionChange($event, 'on-prompt')"
          >
            <el-checkbox v-for="p in promptOptions" :label="p" :key="p">{{
              p
            }}</el-checkbox>
          </el-checkbox-group>
        </div>

        <!-- Outgioing calls -->
        <el-checkbox
          :indeterminate="outIndeterminate"
          v-model="checkAllOutgoing"
          @change="checkAllOptions($event, 'out-going')"
          >Out-going Call</el-checkbox
        >
        <div style="margin-left: 35px;">
          <el-checkbox-group
            v-model="profileform.outgoingCall"
            @change="checkOptionChange($event, 'out-going')"
          >
            <el-checkbox
              v-for="outgoing in outgoingOptions"
              :label="outgoing"
              :key="outgoing"
              >{{ outgoing }}</el-checkbox
            >
          </el-checkbox-group>
        </div>

        <!-- Timeouts -->
        <el-checkbox
          :indeterminate="timeoutIndeterminate"
          v-model="checkAllTimeouts"
          @change="checkAllOptions($event, 'time-out')"
          >Timeout</el-checkbox
        >
        <div style="margin-left: 35px;">
          <el-checkbox-group
            v-model="profileform.timeOuts"
            @change="checkOptionChange($event, 'time-out')"
          >
            <el-checkbox
              v-for="out in timeoutOptions"
              :label="out"
              :key="out"
              >{{ out }}</el-checkbox
            >
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
      checkAllOutgoing: false,
      checkAllTimeouts: false,
      options: ['on-busy', 'no-answer', 'unconditional', 'on-inactive'],
      profileStatus: [
        'active',
        'suspended',
        'canceled',
        'do-not-disturb',
        'block-calls',
      ],
      promptOptions: ['on-busy', 'no-answer', 'on-inactive'],
      starDialOptions: ['unknown-origin-dial', 'call-forward'],
      outgoingOptions: ['unknown-origin-dial'],
      timeoutOptions: ['dial-call-timeout'],
      isIndeterminate: false,
      promtIndeterminate: false,
      sdIndeterminate: false,
      outIndeterminate: false,
      timeoutIndeterminate: false,
      profileform: {
        name: '',
        settings: [{ id: 'a675509d4af14931b6e375f7a377eb79' }],
        callForward: [{ id: '5fce9b8c1f034c67a2de41d85a4d35b7' }],
        prompts: [{ id: '8ed63d5910f74e568d06950719c1271d' }],
        starDial: [{ id: '75d47f43a0894a85a0e801e6666d77cd' }],
        outgoingCall: [],
        timeOuts: [],
        notes: '',
        callForwardOnInactiveTime: 60,
      },
    };
  },
  methods: {
    addProfile() {
      console.log(this.profileform);
      profileService
        .createProfile(this.profileform)
        .then(() => {
          this.successMessage('Profile created successfully');
          this.$router.push('/profiles');
        })
        .catch((error) => console.log(error.message));
    },
    checkAllOptions(val, type) {
      if (type == 'star-dial') {
        this.profileform.starDial = val ? this.starDialOptions : [];
        this.sdIndeterminate = false;
      } else if (type == 'call-forward') {
        this.profileform.callForward = val ? this.options : [];
        this.isIndeterminate = false;
      } else if (type == 'prompt') {
        this.profileform.prompts = val ? this.promptOptions : [];
        this.promtIndeterminate = false;
      } else if (type == 'out-going') {
        this.profileform.outgoingCall = val ? this.outgoingOptions : [];
        this.outIndeterminate = false;
      }
    },
    checkOptionChange(value, type) {
      let checkedCount = value.length;

      if (type == 'star-dial') {
        this.checkAllStarDial = checkedCount === this.starDialOptions.length;
        this.sdIndeterminate =
          checkedCount > 0 && checkedCount < this.starDialOptions.length;
      } else if (type == 'call-forward') {
        this.checkAll = checkedCount === this.options.length;
        this.isIndeterminate =
          checkedCount > 0 && checkedCount < this.options.length;
      } else if (type == 'prompt') {
        this.checkAllPrompt = checkedCount === this.promptOptions.length;
        this.promtIndeterminate =
          checkedCount > 0 && checkedCount < this.promptOptions.length;
      } else if (type == 'out-going') {
        this.checkAllOutgoing = checkedCount === this.outgoingOptions.length;
        this.outIndeterminate =
          checkedCount > 0 && checkedCount < this.outgoingOptions.length;
      } else if (type == 'status') {
        console.log(this.profileform.status);
      }
    },
  },
};
</script>
