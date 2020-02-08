<template>
  <div id="main">
    <Navbar />
    <v-content id="content">
      <v-container fill-height>
        <v-row>
          <v-col md="4">
            <SideBar />
          </v-col>
          <v-col md="8">
            <div>
              <router-view></router-view>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Navbar from "./NavBar"
import SideBar from "./SideBar"

export default {
  name: "Main",
  components: {
    Navbar, SideBar
  }
}
</script>

<style scoped>
  #main {
    background-color: #F6F7FB;
  }
</style>