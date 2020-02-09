<template>
  <div>
    <v-row>
      <v-col md4>
        <JobsCards title="Jobs Applied" totalNumber="4" bgColor="#66BB6A"/>
      </v-col>
      <v-col md4>
        <JobsCards title="Jobs Saved" totalNumber="13" bgColor="#4FC3F7"/>
      </v-col>
      <v-col md4>
        <JobsCards title="Available Jobs" totalNumber="189" bgColor="#5E35B1"/>
      </v-col>
    </v-row>

    <div>
      <v-card outlined class="mt-5">
        <v-card-actions>
          <v-card-title>Latest Experience</v-card-title>
          <v-spacer></v-spacer>
          <v-btn text x-small>Update Information</v-btn>
        </v-card-actions>
        <div>
          <v-row>
            <v-col>
              <h5>mach 2017 - Nov</h5>
              <h6>1 year 5 Month</h6>
            </v-col>
            <v-col>
              <h6>1 year 5 Month</h6>
              <h3>UX DESIGNER</h3>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import JobsCards from "../components/JobCards";

export default {
  name: "Dashboard",
  components: {
    JobsCards
  },
  data () {
    return {
      showCards: true
    }
  }
}
</script>