<template>
  <div id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-2 font-weight-bold mt-7">Koordynatorzy</h1>
        </v-col>
      </v-row>

      <v-row class="mt-10" align="start" justify="center">
        <coordinator-card
          :title="bartosz.title"
          :text="bartosz.text"
          :avatar="bartosz.avatar"
        />
        <coordinator-card
          :title="coordinator.title"
          :text="coordinator.text"
          :avatar="coordinator.avatar"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CoordinatorCard from "@/components/Home/contact/CoordinatorCard";

export default {
  name: "Contact",
  components: { CoordinatorCard },
  data() {
    return {
      bartosz: {
        title: "Bartosz Cieślewicz",
        text: {
          email: "bartek123@somemail.com",
          phone: "+48 213 769 666",
          faculty: "WIiT"
        },
        avatar: "Bartek_C.jpg"
      },
      coordinator: {
        title: "Bartosz Cieślewicz",
        text: {
          email: "bartek123@somemail.com",
          phone: "+48 213 769 666",
          faculty: "WIiT"
        },
        avatar: "Bartek_C.jpg"
      }
    };
  }
};
</script>

<style scoped></style>
