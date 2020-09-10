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
      ></v-text-field>
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
