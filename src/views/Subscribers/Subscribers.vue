<template>
  <div style="width:100%">
    <v-toolbar dense flat>
      <v-toolbar-title>Subscriber / List</v-toolbar-title>

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

    <el-card>
      <el-table :data="profileList" style="width: 100%">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" label="Profile"> </el-table-column>
        <el-table-column label="Features" align="center">
          <template slot-scope="props">
            <div>
              <!-- <el-button type="success" size="mini" plain
                >CFU<i class="el-icon-circle-check el-icon-right"></i
              ></el-button> -->

              <span
                style="margin-right:20px"
                v-for="ff in props.row.features"
                :key="ff.feature"
                >{{ ff.feature }}
                <span
                  ><i
                    class="el-icon-circle-check"
                    :style="
                      ff.status == 'active' ? 'color: green;' : 'color: red;'
                    "
                  ></i></span
              ></span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="subscribers" label="Subscribers" align="center">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'profileList',
  data() {
    return {
      profileList: [],
      profiles: [
        {
          name: 'Profile1',
          status: 'active',
          callForward: 'unconditional',
          startDial: 'unknown',
          prompt: 'on-active',
          subscribers: 2,
        },
        {
          name: 'Profile2',
          status: 'active',
          callForward: 'on-unanswer',
          startDial: 'unknown',
          prompt: 'on-active',
          subscribers: 2,
        },
        {
          name: 'Profile3',
          status: 'active',
          callForward: 'on-busy',
          startDial: 'unknown',
          prompt: 'on-active',
          subscribers: 100,
        },
      ],
    };
  },
  created() {
    this.getProfileList();
  },
  methods: {
    getProfileList() {
      let self = this;
      this.profiles.map(function(profile) {
        profile.callForward =
          profile.callForward == 'unconditional'
            ? 'CFU'
            : profile.callForward == 'on-busy'
            ? 'CFB'
            : profile.callForward == 'on-unanswer'
            ? 'CFNRC'
            : profile.callForward == 'on-inactive'
            ? 'CFNRY'
            : 'none';

        profile.features = self.getFeatures(profile.callForward);
      });

      this.profileList = this.profiles;
      console.log(this.profileList);
    },
  },
};

</script>

<style>
#search_bar {
  top: 10px;
  left: 852px;
  width: 31px;
  height: 35px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
}
</style>



