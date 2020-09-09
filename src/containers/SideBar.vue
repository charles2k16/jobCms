<template>
  <div class="sidebar">
    <div class="profile text-center">
      <v-avatar size="80">
        <img src="../assets/images/profile.png" alt="profile"
        >
      </v-avatar>
      <div class="mt-4">
        <h4 class="font-weight-black"></h4>
        <p class="font-weight-light"></p>
      </div>
    </div>

    <div class="menu">
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="menu" color="primary">
          <v-list-item v-for="(item, i) in menuItems" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      menu: 0,
      menuItems: [
        { text: "Profiles", icon: "mdi-view-dashboard" },
        { text: "Subscribers", icon: "mdi-card-bulleted-outline" },
        { text: "Users", icon: "mdi-file-account" },

        { text: "Logout", icon: "mdi-logout" },
      ],
    }
  }
}
</script>

<style>
  .sidebar {
    background-color: #FFFFFF;
    border: 1px solid rgb(238, 237, 237);
    border-radius: 5px;
    padding-top: 15px;
  }
</style>