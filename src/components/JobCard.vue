<template>
  <v-card class="mx-auto job-card">
    <v-row>
      <v-col md="4" lg="4" sm="12" xs="12">
        <v-img
          sm="12"
          xs="12"
          @click="job.location_file ? (dialog = !dialog) : null"
          class="white--text job-card-image-header"
          :src="job.location_file"
          height="200px"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          ><v-icon
            x-large
            color="#fff"
            class="no-image-icon"
            v-if="job.location_file == null"
          >
            mdi-image-off
          </v-icon>
          <v-card-title class="job-card-title">{{
            job.service_name
          }}</v-card-title></v-img
        >
      </v-col>
      <v-col md="7" lg="7" sm="12" xs="12">
        <v-row>
          <v-card-text class="pt-0">
            <v-row>
              <div class="text--primary mx-2"><b>Job Number</b></div>
              <div class="text--primary mx-1">{{ job.job_id }}</div>
            </v-row>
            <v-row>
              <div class="text--primary mx-2"><b>Job Title</b></div>
              <div class="text--primary mx-1">{{ job.job_title }}</div>
            </v-row>
            <v-row>
              <div class="text--primary mx-2"><b>Service Date/Time</b></div>
              <div class="text--primary mx-1">{{ job.request_date }}</div>
            </v-row>
            <v-row class="inline">
              <div class="text--primary mx-2"><b>Service Location</b></div>
              <div class="text--primary mx-1">
                <a
                  target="blank"
                  :href="'https://www.google.com/maps/place/' + job.location"
                >
                  {{ job.location }}
                </a>
              </div>
            </v-row>
          </v-card-text>
        </v-row>
      </v-col>
      <v-col md="1" lg="1" sm="12" xs="12" class="btn-favorite">
        <div class="text-right">
          <v-btn class="mx-2" fab dark small color="pink">
            <v-icon dark>
              mdi-heart
            </v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      <v-btn text @click="show = !show">
        Additional Details
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <v-alert border="left" colored-border color="#00BCD4" elevation="2">
            <div>
              <h4>Job Descrpition</h4>
              <p>
                {{ job.job_description }}
              </p>
            </div>
          </v-alert>

          <v-alert border="left" colored-border color="#00BCD4" elevation="2">
            <div>
              <h4>Additional Notes</h4>
              <p>
                {{ job.addtional_notes }}
              </p>
            </div>
          </v-alert>

          <v-alert border="left" colored-border color="#00BCD4" elevation="2">
            <div>
              <h4>Supplied Materials</h4>
              <p>
                {{ job.materials_description }}
              </p>
            </div>
          </v-alert>
        </v-card-text>
      </div>
    </v-expand-transition>
    <v-divider></v-divider>
    <template>
      <div class="text-right">
        <slot name="available_jobs"></slot>
        <slot name="accepted_job"></slot>
        <slot name="history_list"></slot>
        <slot name="favourite_list"></slot>
      </div>
    </template>
    <v-dialog content-class="show-image-dialog" v-model="dialog">
      <v-card>
        <v-img v-bind:src="job.location_file" contain></v-img>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: 'JobCard',
  props: {
    job: {
      type: Object,
      required: true,
    },
    // mode: {
    //   type: String,
    //   required: true,
    // },
    // role_id: {
    //   type: Number,
    //   required: true,
    // },
  },

  data: () => ({
    show: false,
    dialog: false,
  }),
};
</script>

<style lang="scss" scoped>
/* @import '../../../../sass/_variables.scss'; */

a {
  display: inline;
}

.job-card {
  /* padding: 0; */
  /* border: none; */

  .job-card-image-header {
    background-color: #18b0b7;
    /* position: relative; */

    .no-image-icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.show-image-dialog {
  max-width: 40% !important;
}

@media (max-width: 960px) {
  .show-image-dialog {
    max-width: 90% !important;
  }
}

@media only screen and (max-width: 600px) {
  .col-sm-12 {
    flex: 0 0 100%;
    width: 100%;
    max-width: 100%;
  }
}
</style>
