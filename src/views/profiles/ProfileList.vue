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
          <!-- <template slot-scope="props">
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
          </template> -->
        </el-table-column>
        <el-table-column prop="subscribers" label="Subscribers" align="center">
        </el-table-column>
      </el-table>
    </el-card>
    <div style="text-align: right;" class="mt-4 mr-8" v-show="actionButtons">
      <el-button type="info" size="mini" @click="editProfile">Edit</el-button>
      <el-button type="danger" size="mini" @click="confirmDeleteProfile"
        >Delete</el-button
      >
    </div>

    <el-dialog
      :visible.sync="showEditModal"
      width="50%"
      title="Edit Profile"
      show-close
    >
      <el-form ref="profileform" :model="profileform" label-width="100px">
        <el-form-item label="Profile name">
          <el-input v-model="profileform.name"></el-input>
        </el-form-item>

        <el-form-item label="Features">
          <el-checkbox-group v-model="profileform.type">
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

        <el-form-item label="Notes">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
            v-model="profileform.desc"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary" size="small" @click="onSubmit"
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
import profileService from '../../api/profile';

export default {
  name: 'profileList',
  data() {
    return {
      showEditModal: false,
      actionButtons: false,
      profileSelected: null,
      profileList: [],
      profileform: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
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
    // getProfileList() {
    //   let self = this;
    //   this.profiles.map(function(profile) {
    //     profile.callForward =
    //       profile.callForward == 'unconditional'
    //         ? 'CFU'
    //         : profile.callForward == 'on-busy'
    //         ? 'CFB'
    //         : profile.callForward == 'on-unanswer'
    //         ? 'CFNRC'
    //         : profile.callForward == 'on-inactive'
    //         ? 'CFNRY'
    //         : 'none';

    //     profile.features = self.getFeatures(profile.callForward);
    //   });
    //   this.profileList = this.profiles;
    // },
    getProfileList() {
      profileService
        .getProfileList()
        .then((response) => {
          this.profileList = response;
        })
        .catch((errors) => console.log(errors));
    },
    onSubmit() {
      console.log('submit!');
    },
    handleSelectionChange(selectedProfile) {
      this.actionButtons = selectedProfile.length > 0 ? true : false;
      this.profileSelected = selectedProfile;
    },
    editProfile() {
      if (this.profileSelected.length > 1) {
        this.errorMessage("Can't edit when two profiles are selected");
      } else {
        this.profileform.name = this.profileSelected[0].name;
        this.showEditModal = true;
      }
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
