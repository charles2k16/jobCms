<template>
  <div>
    <el-form
      ref="subcriberform"
      :model="subcriberform"
      label-width="120px"
      style="width: 70%"
    >
      <el-form-item label="Msisdn">
        <el-input
          type="number"
          v-model="sub.msisdn"
          placeholder="enter your msisdn"
        />
      </el-form-item>
      <el-form-item label="Profile">
        <el-select
          v-model="sub.profile.id"
          filterable
          remote
          reserve-keyword
          placeholder="Search a profile name"
          :remote-method="searchProfile"
          :loading="loading"
          style="width: 100%"
        >
          <el-option
            v-for="p in searchOptions"
            :key="p.id"
            :label="p.name"
            :value="p.id"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Features">
        <br />

        <!-- Status -->
        <span>Status</span>
        <div style="margin-left: 35px;">
          <el-checkbox-group v-model="subcriberform.status" :max="1">
            <el-checkbox label="active"></el-checkbox>
            <el-checkbox label="suspended"></el-checkbox>
            <el-checkbox label="do-not-disturb"></el-checkbox>
            <el-checkbox label="block-inbound-calls"></el-checkbox>
            <el-checkbox label="block-outbound-calls"></el-checkbox>
            <el-checkbox label="cancelled"></el-checkbox>
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
            v-model="subcriberform.starDial"
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
            v-model="subcriberform.callForward"
            @change="checkOptionChange($event, 'call-forward')"
          >
            <el-checkbox
              v-for="cf in options"
              :label="cf"
              :key="cf"
              style="display:block;"
              >{{ getOption(cf, 0) }}:
              <input type="number" :placeholder="getOption(cf, 1)"
            /></el-checkbox>
          </el-checkbox-group>
        </div>

        <!-- Prompt Options -->
        <el-checkbox
          :indeterminate="promtIndeterminate"
          v-model="checkAllPrompt"
          @change="checkAllOptions($event, 'prompt')"
          >Prompt</el-checkbox
        >
        <div style="margin-left: 35px;">
          <el-checkbox-group
            v-model="subcriberform.prompts"
            @change="checkOptionChange($event, 'prompt')"
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
            v-model="subcriberform.outgoingCall"
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
      </el-form-item>

      <el-form-item label="Notes">
        <el-input
          type="textarea"
          v-model="sub.notes"
          :autosize="{ minRows: 2, maxRows: 4 }"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          size="small"
          type="primary"
          :loading="btnLoading"
          @click="createSubscriber"
          >Save</el-button
        >
        <el-button size="small">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import subsService from '../../api/subscribers';

export default {
  data() {
    return {
      btnLoading: false,
      checkAll: true,
      checkAllPrompt: false,
      checkAllStarDial: false,
      checkAllOutgoing: false,
      options: [
        'unconditional: msisdn-on-busy',
        'on-busy: msisdn-on-busy',
        'no-answer: msisdn-no-answer',
        'on-inactive: msisdn-on-active',
      ],
      promptOptions: ['on-busy', 'no-answer', 'on-inactive'],
      starDialOptions: ['unknown-origin-dial', 'active'],
      outgoingOptions: ['unknown-origin-dial'],
      isIndeterminate: false,
      promtIndeterminate: false,
      sdIndeterminate: false,
      outIndeterminate: false,
      searchOptions: [],
      profiles: [
        {
          name: 'Profile1',
          subscribers: 2,
          id: '8282ddhdhdhd',
        },
        {
          name: 'Profile2',
          subscribers: 2,
          id: '635egdddddhdd',
        },
        {
          name: 'Profile3',
          subscribers: 100,
          id: 'hdgdgd5dgdgdgdg',
        },
      ],
      loading: false,
      sub: {
        msisdn: '',
        password: '',
        profile: {
          id: '',
        },
        settings: [{ id: '' }],
        notes: '',
        callForwardOnInactiveTime: 60,
      },

      subcriberform: {
        msisdn: '',
        profileName: '',
        status: [],
        blockcalls: '',
        callForward: [],
        prompts: [],
        starDial: [],
        outgoingCall: [],
        timeOuts: [],
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
  methods: {
    createSubscriber() {
      // console.log(this.sub);
      this.btnLoading = true;
      subsService
        .createSubscriber(this.sub)
        .then(() => {
          this.btnLoading = false;
          this.successMessage('Subscriber created successfully');
          this.$router.push('/subscribers');
        })
        .catch((errors) => {
          console.log(errors);
          this.btnLoading = false;
          this.errorMessage('Error creating subscribers');
        });
    },
    searchProfile(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.searchOptions = this.profiles.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.searchOptions = [];
      }
    },
    checkAllOptions(val, type) {
      if (type == 'star-dial') {
        this.subcriberform.starDial = val ? this.starDialOptions : [];
        this.sdIndeterminate = false;
      } else if (type == 'call-forward') {
        this.subcriberform.callForward = val ? this.options : [];
        this.isIndeterminate = false;
      } else if (type == 'prompt') {
        this.subcriberform.prompts = val ? this.promptOptions : [];
        this.promtIndeterminate = false;
      } else if (type == 'out-going') {
        this.subcriberform.outgoingCall = val ? this.outgoingOptions : [];
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
      } else if (type == 'on-prompt') {
        this.checkAllPrompt = checkedCount === this.promptOptions.length;
        this.promtIndeterminate =
          checkedCount > 0 && checkedCount < this.promptOptions.length;
      } else if (type == 'out-going') {
        this.checkAllOutgoing = checkedCount === this.outgoingOptions.length;
        this.outIndeterminate =
          checkedCount > 0 && checkedCount < this.outgoingOptions.length;
      } else if (type == 'status') {
        console.log(this.subcriberform.status);
      }
    },
    getOption(options, param) {
      let op = options.split(':');
      return op[param];
    },
  },
};
</script>
