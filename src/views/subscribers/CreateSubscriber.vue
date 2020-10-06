<template>
  <div>
    <el-form
      ref="subcriberform"
      :model="subcriberform"
      label-width="120px"
      style="width: 70%"
    >
      <el-form-item label="MSISDN">
        <el-input v-model="subcriberform.msisdn"></el-input>
      </el-form-item>

      <el-form-item label="Profile">
        <el-select
          v-model="subcriberform.profileName"
          multiple
          filterable
          remote
          reserve-keyword
          placeholder="Search a profile name"
          :remote-method="searchProfileName"
          :loading="loading"
          style="width: 100%"
        >
          <el-option
            v-for="p in searchOptions"
            :key="p.name"
            :label="p.name"
            :value="p.name"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Features">
        <br />

        <!-- Status -->
        <span>Status</span>

        <div style="margin-left: 35px;">
          <el-checkbox-group v-model="subcriberform.status">
            <el-checkbox label="active"></el-checkbox>
            <el-checkbox label="suspended"></el-checkbox>
            <el-checkbox label="canceled"></el-checkbox>
            <el-checkbox label="do-not-disturb"></el-checkbox>

            <el-dropdown class="ml-3">
              <span class="el-dropdown-link">
                <b
                  >block-calls <i class="el-icon-arrow-down el-icon--right"></i
                ></b>
              </span>
              <el-dropdown-menu slot="dropdown" class="status-dropdown">
                <el-dropdown-item>
                  <el-checkbox
                    label="inbound"
                    v-model="subcriberform.status"
                  ></el-checkbox>
                  <el-checkbox
                    label="outbound"
                    v-model="subcriberform.status"
                  ></el-checkbox>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
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
            <el-checkbox v-for="sd in starDialOptions" :label="sd" :key="sd">{{
              sd
            }}</el-checkbox>
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
          >On Prompt</el-checkbox
        >
        <div style="margin-left: 35px;">
          <el-checkbox-group
            v-model="subcriberform.prompts"
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
      checkAll: false,
      checkAllPrompt: false,
      checkAllStarDial: false,
      checkAllOutgoing: false,
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
      outIndeterminate: false,
      searchOptions: [],
      profiles: [
        {
          name: 'Profile1',
          subscribers: 2,
        },
        {
          name: 'Profile2',
          subscribers: 2,
        },
        {
          name: 'Profile3',
          subscribers: 100,
        },
      ],
      loading: false,
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
    onSubmit() {
      console.log('submit!');
    },
    searchProfileName(query) {
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
      } else if (type == 'on-prompt') {
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
  },
};
</script>
