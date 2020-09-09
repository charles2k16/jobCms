<template>
  <div class="sidebar">
    <v-list dense nav class="py-0">
      <v-list-item two-line :class="miniVariant && 'px-0'">
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Charles Kwabena</v-list-item-title>
          <v-list-item-subtitle>Soft. Engineer</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item-group v-model="menu" color="brown darken-2">
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: 0,
      items: [
        { title: 'Profiles', icon: 'mdi-view-dashboard' },
        { title: 'Subscribers', icon: 'mdi-card-bulleted-outline' },
        { title: 'Users', icon: 'mdi-file-account' },

        { title: 'Logout', icon: 'mdi-logout' },
      ],
    };
  },
};
</script>

<style>
.sidebar {
  border-radius: 5px;
  padding-top: 15px;
}
</style>
