<template>
  <div style="width:100%">
    <el-card>
      <el-table
        :data="subcriberList"
        ref="subscriberTable"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column label="MSISDN">
          <template slot-scope="props">
            <span style="color:red;">{{ props.row.msisdn }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="profileName" label="Profile" />
        <el-table-column label="Features" align="center" width="320">
          <template slot-scope="props">
            <div>
              <span
                style="margin-right:20px"
                v-for="ff in props.row.features"
                :key="ff.feature"
                >{{ ff.feature }}
                <span
                  ><i
                    class="el-icon-circle-check"
                    :style="
                      ff.status == 'active' ? 'color: green;' : 'color: red;'
                    "
                  ></i></span
              ></span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Status" align="center">
          <template>
            <span style="margin-right:20px"
              >ACT
              <span
                ><i
                  class="el-icon-circle-check"
                  style="color: green;"
                ></i></span
            ></span>
            <span style="margin-right:20px"
              >SUS
              <span
                ><i class="el-icon-circle-check" style="color: red;"></i></span
            ></span>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div style="text-align: right;" class="mt-4 mr-8" v-show="actionButtons">
      <el-button type="info" size="mini" @click="showSubscriberForm"
        >Edit</el-button
      >
      <el-button type="danger" size="mini" @click="confirmDeleteSub"
        >Delete</el-button
      >
    </div>

    <el-dialog
      :visible.sync="showEditModal"
      width="50%"
      title="Edit Subscriber"
      show-close
    >
      <el-form ref="subcriberform" :model="subcriberform" label-width="100px">
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
            <el-checkbox label="SUSPENDED (SUS)" name="type"></el-checkbox
            ><br />
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
      </el-form>
      <span slot="footer">
        <el-button
          type="primary"
          size="small"
          :loading="btnLoading"
          @click="editSubscriber"
          >Save</el-button
        >
        <el-button size="small" @click="showEditModal = false"
          >Cancel</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import subsService from '../../api/subscribers';

export default {
  name: 'subsList',
  data() {
    return {
      btnLoading: false,
      disabled: true,
      showEditModal: false,
      actionButtons: false,
      subSelected: null,
      subcriberList: [],
      subcriberform: {
        id: '',
        msisdn: '',
        password: '',
        profile: {
          id: '',
        },
        callForward: [],
        starDial: [],
        prompt: [],
        settings: [{ id: 'b9fb671b31634d3d953c46ae93974f78' }],
        notes: 'Hello !!',
        callForwardOnInactiveTime: 60,
      },
      subscribers: [
        {
          msisdn: '(972) 5555-0123',
          profileName: 'John Doe',
          status: 'active',
          callForward: 'unconditional',
          startDial: 'unknown',
          prompt: 'on-active',
        },
        {
          msisdn: '(972) 5555-0123',
          profileName: 'Doe John',
          status: 'active',
          callForward: 'on-unanswer',
          startDial: 'unknown',
          prompt: 'on-active',
        },
        {
          msisdn: '(972) 5555-0123',
          profileName: 'Mike Son',
          status: 'active',
          callForward: 'on-busy',
          startDial: 'unknown',
          prompt: 'on-active',
        },
      ],
    };
  },
  created() {
    this.getSubscriberList();
  },
  methods: {
    getSubscriberList() {
      let self = this;
      this.subscribers.map(function(sub) {
        sub.callForward =
          sub.callForward == 'unconditional'
            ? 'CFU'
            : sub.callForward == 'on-busy'
            ? 'CFB'
            : sub.callForward == 'on-unanswer'
            ? 'CFNRC'
            : sub.callForward == 'on-inactive'
            ? 'CFNRY'
            : 'none';

        sub.features = self.getFeatures(sub.callForward);
      });

      this.subcriberList = this.subscribers;
    },
    handleSelectionChange(selectedSub) {
      this.actionButtons = selectedSub.length > 0 ? true : false;
      this.subSelected = selectedSub;
    },
    editSubscriber() {
      subsService
        .updateSubscriber(this.subcriberform)
        .then(() => {
          this.btnLoading = false;
          this.successMessage('Edited subscriber successfully');
        })
        .catch((errors) => {
          console.log(errors);
          this.btnLoading = false;
          this.errorMessage('Error editing subscribers');
        });
    },
    showSubscriberForm() {
      if (this.subSelected.length > 1) {
        this.errorMessage("Can't edit when two subs are selected");
      } else {
        this.subcriberform.id = this.subSelected[0].id;
        this.subcriberform.profile.id = this.subSelected[0].profile.id;
        this.subcriberform.msisdn = this.subSelected[0].msisdn;
        this.subcriberform.notes = this.subSelected[0].notes;
        this.showEditModal = true;
      }
    },
    confirmDeleteSub() {
      let self = this;
      this.$confirm('This will permanently delete subscriber data', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          self.subSelected.map(function(sub) {
            self.deleteSub(sub);
            return sub;
          });
        })
        .catch(() => {
          this.errorMessage('Delete cancelled');
        });
    },
    deleteSub(sub) {
      var filtered = this.subscribers.filter(function(subscriber) {
        return subscriber.profileName !== sub.profileName;
      });
      this.subscribers = filtered;
      this.getSubscriberList();
      this.successMessage('Delete successful');
      this.$refs.subscriberTable.clearSelection();
    },
  },
};
</script>
