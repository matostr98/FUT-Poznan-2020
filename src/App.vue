<template>
  <v-app>
    <navbar />
    <v-content>
      <router-view />
    </v-content>
    <fut-footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import FutFooter from "./components/FutFooter";

export default {
  name: "App",

  components: {
    FutFooter,
    Navbar
  },

  data: () => ({
    //
  })
};
</script>
