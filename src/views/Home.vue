<template>
  <div class="home">
    <home-hero />
    <home-invitation />
    <home-registration />
    <home-agenda />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from "@/components/Home/HomeHero";
import HomeInvitation from "@/components/Home/invitation/Invitation";
import HomeRegistration from "@/components/Home/invitation/Registration";
import HomeAgenda from "@/components/Home/agenda/Agenda";

export default {
  name: "Home",
  components: {
    HomeAgenda,
    HomeRegistration,
    HomeInvitation,
    HomeHero
  }
};
</script>
