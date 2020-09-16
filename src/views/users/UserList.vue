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
      userSelected: null,
      userList: [],
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
      this.userSelected.length > 1
        ? this.errorMessage("Can't edit when two profiles are selected")
        : this.$router.push({
            query: { profile: this.userSelected },
            path: '/create-profiles',
          });
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
