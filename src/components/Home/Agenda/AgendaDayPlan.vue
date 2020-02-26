<template>
  <v-expansion-panels flat popout accordion>
    <v-expansion-panel v-for="(item, i) in agenda" :key="i">
      <v-expansion-panel-header>{{ item.event }}</v-expansion-panel-header>
      <v-expansion-panel-content>{{
        item.description
      }}</v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "AgendaDayPlan",
  props: {
    agenda: []
  }
};
</script>

<style scoped></style>
