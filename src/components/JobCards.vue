<template>
  <div>
    <v-card shaped :color="bgColor" flat>
      <v-card-title class="white--text">{{title}}</v-card-title>
      <v-card-actions class="mt-n6">
        <v-card-subtitle id="dash" class="mt-n6 ml-3"></v-card-subtitle>
        <v-spacer></v-spacer>
        <span class="white--text display-2 mt-n6 mr-4 font-weight-black">
          {{totalNumber}}
        </span>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "JobsCard",
  props: [
    "title", "totalNumber", "bgColor"
  ],
  data () {
    return {

    }
  }
}
</script>

<style>
  #dash {
    border-bottom: 4px solid rgb(140, 144, 146);
    border-radius: 5px;
    width: 50px;
  }
</style>