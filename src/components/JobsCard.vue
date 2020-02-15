<template>
  <div>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64" color="primary"></v-progress-circular>
    </v-overlay>
    <v-card outlined class="mt-5" v-for="job in jobs" :key="job.id">
      <v-card-actions>
        <v-card-title>Latest Jobs</v-card-title>
        <v-spacer></v-spacer>
        <v-btn text small>
          Apply
          <v-icon small right>mdi-check-circle-outline</v-icon> 
        </v-btn>
      </v-card-actions>
      <v-card-text class="mt-n9">
        <v-row>
          <v-col md="3">
            <div>
              <h5 style="display: inline-block;">{{job.created_at | moment("dddd, MMMM Do") }}</h5><span id="roundDot" class="ml-4"></span>
              <h4>1 year 2months</h4>
            </div>
          </v-col>
          <v-col md="9">
            <div>
              <h5>{{job.company}}</h5>
              <h3>{{job.title}}</h3>
              <div class="d-flex justify-between">
                <span class="mr-4"><v-icon small color="yellow darken-1">mdi-map-marker</v-icon></span>
                <span>{{job.location}}</span>
              </div>
              <div class="d-flex justify-between">
                <span class="mr-4"><v-icon small color="green">mdi-cash-usd-outline</v-icon></span>
                <span>USD - 60,000</span>
              </div>
              <div class="d-flex justify-between">
                <span class="mr-4"><v-icon small color="error">mdi-desktop-classic</v-icon></span>
                <span>
                  <v-chip class="ma-2" x-small label>Javascript</v-chip>
                  <v-chip class="ma-2" x-small label>Node Js</v-chip>
                  <v-chip class="ma-2" x-small label>Vue</v-chip>
                </span>
              </div>
              <div class="d-flex justify-between">
                <span class="mr-4"><v-icon small color="indigo darken-1">mdi-comment-outline</v-icon></span>
                <span v-html="job.description"></span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Vue from "vue"
import jobService from "../api/jobs";
Vue.use(require('vue-moment'));

export default {
  name: "JobsCard",
  data () {
    return {
      jobs: [],
      overlay: false,
    }
  },
  created () {
    this.getRecentJobs()
  },
  methods: {
    getRecentJobs () {
      this.overlay = true
      jobService.getJobs()
        .then((response) => {
          this.jobs = response
          this.overlay = false
        }).catch((errors) => {
          console.log(errors)
        })
    }
  }
}
</script>

<style scoped>
  #roundDot {
    height: 10px;
    width: 10px;
    background-color: rgb(83, 65, 240);
    border-radius: 50%;
    display: inline-block;
  }
</style>