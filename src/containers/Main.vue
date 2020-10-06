<template>
  <el-container style="height: 100vh;">
    <el-header class="header-nav">
      <div class="flex-justify-between ">
        <span>
          <img src="../assets/images/paic.png" alt="logo" />
        </span>
        <el-dropdown trigger="hover" class="ml-2">
          <span class="flex header-user el-dropdown-link">
            <span class="mr-2 mt-2">
              <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>
            </span>
            <span class="mr-2" style="color:white">John Doe</span>
            <span><i class="el-icon-arrow-down" style="color:white"></i></span>
          </span>
          <el-dropdown-menu slot="dropdown" class="nav-dropdown-menu">
            <el-dropdown-item icon="el-icon-user">Profile</el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button"
              >Logout</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>

    <div class="head-wrapper">
      <div class="flex-justify-between">
        <div style="margin-left:200px;">
          <h3 class="head-page-title">
            {{ pageTitle }} <span>/ {{ pageSubTitle }}</span>
          </h3>
        </div>

        <div class="flex mr-15">
          <el-input
            placeholder="Search"
            v-model="search"
            @change="globalSearchEvent"
            class="head-search-input"
          ></el-input>
          <div class="ml-2 pr-2 flex">
            <span class="head-search-text ml-2">by</span>

            <span class="ml-2">
              <el-button
                icon="el-icon-arrow-down"
                type="primary"
                circle
                size="mini"
              ></el-button>
            </span>

            <span class="head-search-text ml-2">
              Profile
            </span>
          </div>
        </div>
      </div>
    </div>

    <el-container>
      <SideBar />

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from './SideBar';

export default {
  components: {
    SideBar,
  },
  data: () => ({
    search: '',
    pageTitle: '',
    pageSubTitle: 'Profile',
  }),
  watch: {
    $route(to) {
      let nn = this.splitRouteName(to.name);
      this.pageTitle = nn[0];
      this.pageSubTitle = nn[1];
    },
  },
  created() {
    let nn = this.splitRouteName(this.$route.name);
    this.pageTitle = nn[0];
    this.pageSubTitle = nn[1];
  },
  methods: {
    splitRouteName(name) {
      let newName = name.split('-');
      return newName;
    },
    globalSearchEvent(searchValue) {
      console.log(searchValue);
      this.$eventbus.$emit('searchParam', searchValue);
    },
  },
};
</script>
