<template>
  <div class="home">
    <home-hero />
    <home-invitation />
    <home-registration />
    <about />
    <home-agenda />
    <accommodation />
    <contact />
  </div>
</template>

<script>
import HomeInvitation from "@/components/Home/invitation/Invitation";
import HomeRegistration from "@/components/Home/invitation/Registration";
import HomeAgenda from "@/components/Home/agenda/Agenda";
import Accommodation from "@/components/Home/accommodation/Accommodation";
import Contact from "@/components/Home/contact/Contact";
import HomeHero from "@/components/Home/HomeHero";
import About from "@/components/Home/about/About";

export default {
  name: "Home",
  components: {
    HomeHero,
    Contact,
    About,
    HomeAgenda,
    HomeRegistration,
    HomeInvitation,
    Accommodation
  }
};
</script>
