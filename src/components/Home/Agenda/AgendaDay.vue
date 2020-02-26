<template>
  <v-timeline-item color="blue accent-3" fill-dot>
    <v-card>
      <v-card-title class="blue accent-3">
        <h2 class="display-1 white--text font-weight-light">{{ title }}</h2>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col cols="12">
            <agenda-day-plan :agenda="dayAgenda" />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-timeline-item>
</template>

<script>
import AgendaDayPlan from "@/components/Home/Agenda/AgendaDayPlan";
export default {
  name: "AgendaDay",
  components: { AgendaDayPlan },
  props: {
    title: String,
    dayAgenda: []
  }
};
</script>

<style scoped></style>
