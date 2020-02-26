<template>
  <span>
    <v-app-bar app color="transparent" dark hide-on-scroll flat>
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
          >{{ item.title }}</v-btn
        >
      </div>
    </v-app-bar>

    <v-app-bar app color="blue darken-4" dark inverted-scroll>
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
        <v-btn text class="hidden-sm-and-down" elevation="0">{{
          item.title
        }}</v-btn>
      </div>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      appTitle: "Meal Prep",
      drawer: false,
      items: [
        { title: "Zaproszenie" },
        { title: "Rejestracja" },
        { title: "Harmonogram" },
        { title: "Kontakt" },
        { title: "Zakwaterowanie" },
        { title: "Partnerzy" }
      ]
    };
  }
};
</script>

<style scoped></style>
