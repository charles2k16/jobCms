<template>
  <el-aside width="200px" style="background-color: #808387">
    <el-menu
      :default-openeds="['1']"
      style="background-color: #808387"
      default-active="1-1"
      unique-opened
    >
      <el-submenu index="1">
        <template slot="title"
          ><i class="el-icon-s-custom" style="color:#b19fa2;"></i
          ><span class="sidebar-menu-title">Profiles</span>
        </template>
        <el-menu-item-group>
          <router-link to="/profiles">
            <el-menu-item index="1-1">List</el-menu-item>
          </router-link>
          <router-link to="/create-profiles">
            <el-menu-item index="1-2">Create</el-menu-item>
          </router-link>
          <router-link to="/reapply">
            <el-menu-item index="1-3">Reapply</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-success" style="color: #b19fa2"></i>
          <span class="sidebar-menu-title">Subscribers</span>
        </template>
        <el-menu-item-group>
          <router-link to="/subcribers">
            <el-menu-item index="2-1">List</el-menu-item>
          </router-link>
          <router-link to="/create-subscribers">
            <el-menu-item index="2-2">Create</el-menu-item>
          </router-link>
          <router-link to="/subcriber-apply">
            <el-menu-item index="2-3">Apply Profile</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"
          ><i class="el-icon-user-solid" style="color: #b19fa2"></i>
          <span class="sidebar-menu-title">Users</span></template
        >
        <el-menu-item-group>
          <router-link to="/users">
            <el-menu-item index="3-1">List</el-menu-item>
          </router-link>
          <router-link to="/ceate-user">
            <el-menu-item index="3-2">Create</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
