<template>
  <div class="home">
    <home-hero />
    <home-invitation />
    <home-registration />
    <home-agenda />
    <partners />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from "@/components/Home/HomeHero";
import HomeInvitation from "@/components/Home/invitation/Invitation";
import HomeRegistration from "@/components/Home/invitation/Registration";
import HomeAgenda from "@/components/Home/agenda/Agenda";
import Partners from "@/components/Home/partners/Partners";

export default {
  name: "Home",
  components: {
    Partners,
    HomeAgenda,
    HomeRegistration,
    HomeInvitation,
    HomeHero
  }
};
</script>
