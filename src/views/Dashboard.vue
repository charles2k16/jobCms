<template>
  <div>
    <v-row>
      <v-col md4>
        <JobCountCards title="Jobs Applied" totalNumber="4" bgColor="#66BB6A"/>
      </v-col>
      <v-col md4>
        <JobCountCards title="Jobs Saved" totalNumber="13" bgColor="#4FC3F7"/>
      </v-col>
      <v-col md4>
        <JobCountCards title="Available Jobs" totalNumber="189" bgColor="#5E35B1"/>
      </v-col>
    </v-row>
    <div>
      <JobsCard />
    </div>
  </div>
</template>

<script>
import JobCountCards from "../components/JobCountCards";
import JobsCard from "../components/JobsCard";

export default {
  name: "Dashboard",
  components: {
    JobCountCards, JobsCard
  },
  data () {
    return {
      showCards: true
    }
  }
}
</script>