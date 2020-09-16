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
        <el-table-column prop="profileName" label="Name" />
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
      <el-button type="info" size="mini" @click="editSubscriber"
        >Edit</el-button
      >
      <el-button type="danger" size="mini" @click="confirmDeleteSub"
        >Delete</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'profileList',
  data() {
    return {
      actionButtons: false,
      subSelected: null,
      subcriberList: [],
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
      this.subSelected.length > 1
        ? this.errorMessage("Can't edit when two subs are selected")
        : this.$router.push({
            query: { subscriber: this.subSelected },
            path: '/create-subscribers',
          });
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
