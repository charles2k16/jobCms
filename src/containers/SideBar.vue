<template>
 
  <div class="sidebar">

    <v-list dense nav class="py-0">
      <v-list-item two-line :class="miniVariant && 'px-0'">
        <v-list-item-content>
         
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

        <v-divider class="mb-5"></v-divider>

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

    <div class="logoutButton" style="width:100%">
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="white">mdi-account</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="white--text">Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
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
          items: [{ title: ' List' }, { title: 'Create' }, { title: 'Reapply' }],
        },
        {
          icon: 'mdi-account-circle',
          title: 'Subscribers',
          items: [{ title: 'List' }, { title: 'Create' }, { title: 'Apply online' }],
        },
        {
          icon: 'mdi-card-bulleted-outline',
          title: 'Users',
          items: [{ title: 'List' }, { title: 'Create' }],
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
.logoutButton {
  background: #8b222f;
  position: absolute;
  bottom: 0;
  margin-bottom: 2px;
}

</style>
