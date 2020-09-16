<template>
  <div style="width:100%">
    <el-card>
      <el-table
        :data="profileList"
        ref="profileTable"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="name" label="Profile" />
        <el-table-column label="Features" align="center">
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
        <el-table-column prop="subscribers" label="Subscribers" align="center">
        </el-table-column>
      </el-table>
    </el-card>
    <div style="text-align: center;" class="mt-4" v-show="actionButtons">
      <el-button type="info" size="mini" @click="editProfile">Edit</el-button>
      <el-button type="danger" size="mini" @click="confirmDeleteProfile"
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
      profileSelected: null,
      profileList: [],
      profiles: [
        {
          name: 'Profile1',
          status: 'active',
          callForward: 'unconditional',
          startDial: 'unknown',
          prompt: 'on-active',
          subscribers: 2,
        },
        {
          name: 'Profile2',
          status: 'active',
          callForward: 'on-unanswer',
          startDial: 'unknown',
          prompt: 'on-active',
          subscribers: 2,
        },
        {
          name: 'Profile3',
          status: 'active',
          callForward: 'on-busy',
          startDial: 'unknown',
          prompt: 'on-active',
          subscribers: 100,
        },
      ],
    };
  },
  created() {
    this.getProfileList();
  },
  methods: {
    getProfileList() {
      let self = this;
      this.profiles.map(function(profile) {
        profile.callForward =
          profile.callForward == 'unconditional'
            ? 'CFU'
            : profile.callForward == 'on-busy'
            ? 'CFB'
            : profile.callForward == 'on-unanswer'
            ? 'CFNRC'
            : profile.callForward == 'on-inactive'
            ? 'CFNRY'
            : 'none';

        profile.features = self.getFeatures(profile.callForward);
      });

      this.profileList = this.profiles;
    },
    handleSelectionChange(selectedProfile) {
      this.actionButtons = selectedProfile.length > 0 ? true : false;
      this.profileSelected = selectedProfile;
    },
    editProfile() {
      this.profileSelected.length > 1
        ? this.errorMessage("Can't edit when two profiles are selected")
        : this.$router.push({
            query: { profile: this.profileSelected },
            path: '/create-profiles',
          });
    },
    confirmDeleteProfile() {
      let self = this;
      this.$confirm('This will permanently delete profile data', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          self.profileSelected.map(function(p) {
            self.deleteProfile(p);
            return p;
          });
        })
        .catch(() => {
          this.errorMessage('Delete cancelled');
        });
    },
    deleteProfile(profile) {
      var filtered = this.profiles.filter(function(p) {
        return p.name !== profile.name;
      });
      this.profiles = filtered;
      this.getProfileList();
      this.successMessage('Delete successful');
      this.$refs.profileTable.clearSelection();
    },
  },
};
</script>
