<template>
  <div style="width:100%">
    <v-toolbar dense flat>
      <v-toolbar-title>Profile / List</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        flat
        outlined
        clearable
        hide-details
        color="#8B222F"
        label="Search"
        prepend-inner-icon="mdi-magnify"
      id="search_bar"></v-text-field>
    </v-toolbar>

    <v-card class="mt-10">
       <v-data-table
          v-model="selected"
          item-key="name"
          show-select
          :headers="headers"
          :items="profiles"
          :items-per-page="5"
        ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import profileService from "@/api/profile"

export default {
  name: 'profileList',
  data() {
    return {
      singleSelect: true,
        selected: [],
      profileList: [],
      headers: [
          {
            text: 'Profile',
            align: 'start',
            sortable: false,
            value: 'profile',
          },
          { text: 'features', value: 'features' },
          { text: 'Subscribers', value: 'subscribers' },
        ],
        profiles: [
          {profile: 'Default', features: 'CFU', subscribers: 100},
           {profile: 'Type A', features: 'CFU', subscribers: 100},
            {profile: 'Type B', features: 'CFU', subscribers: 0},
        ]
    };
  },
  created() {
    this.getProfileList()
  },
  methods: {
    getProfileList() {
      profileService.getProfileList()
        .then((response) => {
          console.log(response)
          this.profileList = response
        })
        .catch((error) => console.log(error.error))
    }
  }
};
</script>

<style>
#search_bar {
  top: 10px;
  left: 852px;
  width: 319px;
  height: 35px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
}
</style>