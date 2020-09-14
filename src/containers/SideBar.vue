<template>
  <div class="sidebar">
    <v-list dense nav class="py-0">
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

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          link
          router
          :to="subItem.route"
          active-class="active"
        >
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
      menuItems: [
        {
          icon: 'mdi-account-circle',
          title: 'Profile',
          active: true,
          items: [
            { title: ' List', route: '/profiles' },
            { title: 'Create', route: '/create-profiles' },
            { title: 'Reapply', route: '/reapply'},
          ],
        },
        {
          icon: 'mdi-account-circle',
          title: 'Subscribers',
          items: [
            { title: 'List', route: '/subscribers-list' },
            { title: 'Create', route: '/create-subscriber' },
            { title: 'Apply Profile', route: '/apply-profile' },
          ],
        },
        {
          icon: 'mdi-card-bulleted-outline',
          title: 'Users',
          items: [{ title: 'List', route: '/users-list' }, { title: 'Create', route: '/create-user' }],
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
  /* top: 705px;
  left: -1px;
  width: 308px;
  height: 63px;
  background: var(--unnamed-color-8b222f) 0% 0% no-repeat padding-box;
  border: 1px solid var(--unnamed-color-ffffff);
  background: #8B222F 0% 0% no-repeat padding-box;
  border: 1px solid #FFFFFF;
  opacity: 1; */
}
.v-list-group__items {
  background: white;
}
.active {
  background: #ca5c69;
  border-radius: none;
}
.active .v-list-item__content .v-list-item__title {
  color: whitesmoke;
}
</style>
