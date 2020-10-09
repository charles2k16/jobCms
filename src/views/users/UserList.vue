<template>
  <div style="width:100%">
    <el-card>
      <el-table
        :data="users"
        ref="usersTable"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="user" label="User" />
        <el-table-column label="Status" prop="status">
          <template slot-scope="props">
            <el-tag
              :type="props.status !== true ? 'success' : 'info'"
              size="mini"
              >Active</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column prop="dateCreated" label="Created"> </el-table-column>
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
      width="30%"
      title="Edit User"
      show-close
    >
      <el-form ref="userform" :model="userform" label-position="left">
        <el-form-item label="Name">
          <el-input v-model="userform.user" disabled></el-input>
        </el-form-item>

        <el-form-item label="Password">
          <el-input
            type="password"
            v-model="userform.password"
            placeholder="*********"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button size="small" type="primary" @click="editUser"
            >Save</el-button
          >
          <el-button size="small">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import userService from '../../api/users';

export default {
  name: 'profileList',
  data() {
    return {
      showEditModal: false,
      actionButtons: false,
      userSelected: null,
      userform: {
        id: '',
        user: '',
        password: '',
        status: false,
      },
      users: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      userService
        .getAllUsers()
        .then((response) => {
          this.users = response;
        })
        .catch((errors) => console.log(errors));
    },
    handleSelectionChange(selectedProfile) {
      this.actionButtons = selectedProfile.length > 0 ? true : false;
      this.userSelected = selectedProfile;
    },
    editUser() {
      userService
        .updateUser(this.userform)
        .then(() => {
          this.successMessage('User updated succesfully');
          this.showEditModal = false;
          this.$refs.usersTable.clearSelection();
        })
        .catch((errors) => console.log(errors));
    },
    editProfile() {
      if (this.userSelected.length > 1) {
        this.errorMessage("Can't edit when two users are selected");
      } else {
        this.userform.user = this.userSelected[0].user;
        this.userform.password = this.userSelected[0].password;
        this.showEditModal = true;
      }
    },
    confirmDeleteProfile() {
      this.$confirm('This will permanently delete profile data', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          console.log('deleted');
        })
        .catch(() => {
          this.errorMessage('Delete cancelled');
        });
    },
  },
};
</script>
