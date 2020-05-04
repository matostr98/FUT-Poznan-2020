<template>
  <v-card color="primary" dark>
    <v-card-title class="primary">
      <h2 class="display-1 white--text font-weight-light">{{ title }}</h2>
    </v-card-title>
    <v-container class="white text--primary">
      <v-row v-for="(item, index) in dayAgenda" :key="index">
        <v-col cols="12" md="10">
          <h4>{{ item.time }}</h4>
          <p>{{ item.name }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "AgendaItem",
  props: {
    title: String,
    dayAgenda: []
  }
};
</script>

<style scoped></style>
