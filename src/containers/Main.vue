<template>
  <v-app id="inspire">
    <v-container fluid>
      <v-navigation-drawer
        v-model="drawer"
        app
        clipped
        :mini-variant="miniVariant"
        width="250"
      >
        <SideBar />
      </v-navigation-drawer>

      <v-app-bar app color="#8B222F" dark clipped-left>
        <v-app-bar-nav-icon
          @click.stop="miniVariant = !miniVariant"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>Paic</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-chip class="ma-2" outlined pill>
          User Account
          <v-icon right>mdi-account-outline</v-icon>
        </v-chip>
      </v-app-bar>

      <v-main>
        <v-container fluid class="fill-height">
          <router-view />
        </v-container>
      </v-main>
      <v-footer color="#8B222F" app>
        <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
import SideBar from './SideBar';

export default {
  props: {
    source: String,
  },
  components: {
    SideBar,
  },
  data: () => ({
    drawer: null,
    miniVariant: false,
  }),
};
</script>
