<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      :mini-variant="miniVariant"
    >
      <SideBar />
    </v-navigation-drawer>

    <v-app-bar app color="brown darken-2" dark clipped-left>
      <v-app-bar-nav-icon
        @click.stop="miniVariant = !miniVariant"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        solo-inverted
        flat
        loading
        clearable
        hide-details
        label="Search"
        prepend-inner-icon="mdi-search"
      ></v-text-field>

      <v-chip class="ma-2" outlined pill>
        User Account
        <v-icon right>mdi-account-outline</v-icon>
      </v-chip>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="brown darken-2" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
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
