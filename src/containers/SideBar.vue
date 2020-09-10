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

      <v-divider class="mb-5"></v-divider>

      <v-list-group
        v-for="item in menuItems"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.icon"
        color="#8B222F"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="subItem in item.items" :key="subItem.title" link>
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: 0,
      items: [
        { title: 'Profiles', icon: 'mdi-account-circle' },
        { title: 'Subscribers', icon: 'mdi-card-bulleted-outline' },
        { title: 'Users', icon: 'mdi-file-account' },

        { title: 'Logout', icon: 'mdi-logout' },
      ],
      menuItems: [
        {
          icon: 'mdi-account-circle',
          title: 'Profile',
          active: true,
          items: [{ title: 'Profile List' }, { title: 'Reapply' }],
        },
        {
          icon: 'mdi-account-circle',
          title: 'Subscribers',
          items: [{ title: 'List Item' }],
        },
        {
          icon: 'mdi-card-bulleted-outline',
          title: 'Users',
          items: [{ title: 'List' }],
        },
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
