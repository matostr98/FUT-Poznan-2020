<template>
  <!--    <v-navigation-drawer-->
  <!--      v-model="drawer"-->
  <!--      class="brown lighten-2"-->
  <!--      dark-->
  <!--      disable-resize-watcher-->
  <!--    >-->
  <!--      <v-list>-->
  <!--        <template v-for="(item, index) in items">-->
  <!--          <v-list-tile :key="index">-->
  <!--            <v-list-tile-content>-->
  <!--              {{ item.title }}-->
  <!--            </v-list-tile-content>-->
  <!--          </v-list-tile>-->
  <!--          <v-divider :key="`divider-${index}`"></v-divider>-->
  <!--        </template>-->
  <!--      </v-list>-->
  <!--    </v-navigation-drawer>-->
  <v-app-bar app color="primary" dark flat>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-spacer class=" hidden-md-and-up"></v-spacer>
    <div class="d-flex align-center">
      <v-img
        alt="Fut-name"
        contain
        min-width="100"
        src="@/assets/FUT_white.png"
        width="200"
      />
    </div>
    <v-spacer />
    <div v-for="(item, index) in items" :key="index">
      <v-btn
        text
        class="hidden-sm-and-down"
        elevation="0"
        @click="$vuetify.goTo(item.id)"
        >{{ item.title }}</v-btn
      >
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      appTitle: "FUT Poznan",
      drawer: false,
      items: [
        { title: "Zaproszenie", id: "#invitation" },
        { title: "Rejestracja", id: "#registration" },
        { title: "Harmonogram", id: "#agenda" },
        { title: "Kontakt", id: "" },
        { title: "Zakwaterowanie", id: "" },
        { title: "Partnerzy", id: "" }
      ]
    };
  }
};
</script>

<style scoped></style>
