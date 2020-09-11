<template>
  <div style="width:100%">
    <v-toolbar dense flat>
      <v-toolbar-title>Subscribers / Create</v-toolbar-title>

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
      <h5>Put table here</h5>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {};
  },
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