<template>
  <v-app-bar app>
      <div class="d-flex align-center">
        <v-img alt="Logo" contain class="mr-2"
          src="../assets/images/logo.png"
          transition="scale-transition"
          width="150"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn text small>Find Jobs</v-btn>
      <v-btn text small>Career Tips</v-btn>
      <v-chip class="ma-2" color="primary" outlined pill>
        User Account
        <v-icon right>mdi-account-outline</v-icon>
      </v-chip>
      <v-menu open-on-hover top offset-y>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" icon dark v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data () {
    return {
      items: [
        { title: "Logout"},
        { title: "Profile" },
      ]
    }
  }
}
</script>