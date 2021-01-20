<template>
  <div class="restore-margin">
    <Navbar />
    <v-container>
      <template>
        <v-card>
          <v-tabs centered v-model="tab">
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#tab-available_jobs">Available Jobs</v-tab>
            <v-tab href="#tab-accepted_job">Accepted</v-tab>
            <v-tab href="#tab-favourite_list">Favourites</v-tab>
            <v-tab href="#tab-history_list">History</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="(value, name) in jobs"
              :key="name"
              :value="'tab-' + name"
            >
              <div :key="key" v-for="(obj, key) in value">
                <v-card flat>
                  <JobCard v-bind:job="obj" class="my-2">
                    <template v-slot:[name]>
                      <template v-if="name === 'available_jobs'">
                        <v-btn class="ma-2" color="success" :block="block">
                          Claim Job
                        </v-btn>

                        <v-btn class="ma-2" color="success" :block="block">
                          Propose New Time
                        </v-btn>

                        <v-btn class="ma-2" color="success" :block="block">
                          Report this job
                        </v-btn>
                      </template>

                      <template v-else-if="name === 'accepted_job'">
                        <v-btn
                          class="ma-2 float-left"
                          color="success"
                          :block="block"
                        >
                          Chat
                        </v-btn>

                        <v-btn class="ma-2" color="success" :block="block">
                          Job Status
                        </v-btn>

                        <v-btn class="ma-2" color="success" :block="block">
                          Cancel job
                        </v-btn></template
                      >

                      <template v-else-if="name === 'favourite_list'">
                        <v-btn class="ma-2" color="success" :block="block">
                          Report this Job
                        </v-btn>
                      </template>

                      <template v-else-if="name === 'history_list'">
                        <v-btn
                          class="ma-2 float-left"
                          color="success"
                          :block="block"
                        >
                          Chat
                        </v-btn>
                        <v-btn class="ma-2" color="success" :block="block">
                          View Invoice
                        </v-btn>
                        <v-btn class="ma-2" color="success" :block="block">
                          Completed
                        </v-btn>
                      </template>
                    </template>
                  </JobCard>
                </v-card>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </template>

      <br />
    </v-container>
  </div>
</template>

<script>
//servicePro-request-job.blade > target page
import Navbar from './ProDashboardNav';
import JobCard from './JobCard';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    JobCard,
  },
  data() {
    return {
      tab: null,
      jobs: [],
    };
  },
  async created() {
    await axios
      .get('servicePro-request-job')
      .then((res) => ((this.jobs = res.data), console.log(this.jobs)))
      .catch((err) => console.log(err));
  },
  computed: {
    block() {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
          return true;
        case 'xs':
          return true;
        default:
          return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.restore-margin {
  position: relative;
  top: -100px;
}

@media only screen and (max-width: 600px) {
  .restore-margin {
    top: -60px;
  }
}

@media only screen and (max-width: 768px) {
  .restore-margin {
    top: -60px;
  }
}

@media (min-width: 768px) and (max-width: 960px) {
  .restore-margin {
    top: -60px;
  }
}
</style>
