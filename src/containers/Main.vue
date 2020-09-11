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
        <v-toolbar-title>

        <router-link to="/">
         <v-img src="../assets/images/paic.png"></v-img>
        </router-link>
            
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-chip class="ma-2" outlined pill>
          <v-img src="../assets/images/person.svg"></v-img>
          <!-- <v-icon right>mdi-account-outline</v-icon> -->
        </v-chip>
      </v-app-bar>

      <v-main>
        <v-container fluid class="fill-height">
          <router-view />
        </v-container>
      </v-main>
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
