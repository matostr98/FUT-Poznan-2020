<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" class="display-2 font-weight-bold text-center"
        >Harmonogram</v-col
      >
      <v-col cols="11" md="10" H>
        <v-timeline
          align-top
          class="mt-5"
          :dense="$vuetify.breakpoint.smAndDown"
        >
          <agenda-day title="Czwartek" :day-agenda="thursday" />
          <agenda-day title="Piątek" :day-agenda="friday" />
          <agenda-day title="Sobota" :day-agenda="saturday" />
          <agenda-day title="Niedziela" :day-agenda="sunday" />
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AgendaDay from "@/components/Home/Agenda/AgendaDay";
export default {
  name: "HomeAgenda",
  components: { AgendaDay },
  data() {
    return {
      thursday: [
        {
          event: "14:00-17:00 - Kwaterowanie",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        },
        {
          event: "19:00 - Mistrzostwa FUT w Matrixa",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        },
        {
          event: "21:00 - Integracja uczestników",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        }
      ],
      friday: [
        {
          event: "Śniadanie - 06:30-09:30",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        },
        {
          event: "Zwiedzanie Fortów Poznańskich - 10:00",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        },
        {
          event: "Kwaterowanie - 12:00-16:00",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        },
        {
          event: "Obiad - 15:00",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        },
        {
          event: "Gala Otwarcia - 17:00",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        },
        {
          event: "Rada Starszych - 18:30",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        },
        {
          event: "Grill z SSPP - 21:00",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        }
      ],
      saturday: [
        {
          event: "06:30-09:00 - Śniadanie",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        },
        {
          event: "09:30-15:30 - Panele szkoleniowe",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        },
        {
          event: "16:00 - Obiad",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        },
        {
          event: "17:00 - Sesja Robocza",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        },
        {
          event: "20:00 - Kolacja",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        },
        {
          event: "21:00 - Bal Nadwarciański",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        }
      ],
      sunday: [
        {
          event: "Śniadanie - 06:30-10:00",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        },
        {
          event: "Wykwaterowanie - 10:00-12:00",
          description:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
        }
      ]
    };
  }
};
</script>

<style scoped></style>
