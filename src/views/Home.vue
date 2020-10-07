<template>
  <div class="home">
    <home-hero />
    <home-invitation />
    <home-registration />
    <home-agenda />
    <contact />
  </div>
</template>

<script>

import HomeInvitation from "@/components/Home/invitation/Invitation";
import HomeRegistration from "@/components/Home/invitation/Registration";
import HomeAgenda from "@/components/Home/agenda/Agenda";
import Contact from "@/components/Home/contact/Contact";
import HomeHero from "@/components/Home/HomeHero";
export default {
  name: "Home",
  components: {
    HomeHero,
    Contact,
    HomeAgenda,
    HomeRegistration,
    HomeInvitation

  }
};
</script>
