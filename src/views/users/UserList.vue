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
        <el-table-column label="User Type" prop="type"> </el-table-column>
        <el-table-column prop="login" label="login"> </el-table-column>
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
          <el-input v-model="userform.user" placeholder="Enter name"></el-input>
        </el-form-item>

        <el-form-item label="User Type">
          <el-input v-model="userform.type" placeholder="user type"></el-input>
        </el-form-item>

        <el-form-item label="Password">
          <el-input
            type="password"
            v-model="userform.password"
            placeholder="*********"
          ></el-input>
          <br />
          <el-input
            class="mt-2"
            type="password"
            placeholder="*********"
            v-model="userform.password_confirm"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button size="small" type="primary" @click="onSubmit"
            >Save</el-button
          >
          <el-button size="small">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'profileList',
  data() {
    return {
      showEditModal: false,
      actionButtons: false,
      userSelected: null,
      userList: [],
      userform: {
        user: '',
        type: '',
        password: '',
        password_confirm: '',
      },
      users: [
        {
          user: 'Adams',
          type: 'editor',
          login: '31/08/2020',
        },
        {
          user: 'Johnson',
          type: 'admin',
          login: '31/08/2020',
        },
        {
          user: 'Charles',
          type: 'Super Admin',
          login: '31/08/2020',
        },
      ],
    };
  },
  methods: {
    handleSelectionChange(selectedProfile) {
      this.actionButtons = selectedProfile.length > 0 ? true : false;
      this.userSelected = selectedProfile;
    },
    editProfile() {
      if (this.userSelected.length > 1) {
        this.errorMessage("Can't edit when two users are selected");
      } else {
        this.userform.user = this.userSelected[0].user;
        this.userform.type = this.userSelected[0].type;
        this.userform.password = this.userSelected[0].password;
        this.userform.password_confirm = this.userSelected[0].password_confirm;
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
