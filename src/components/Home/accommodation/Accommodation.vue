<template>
  <div id="accommodation">
    <v-container fluid>
      <component-title text="Zakwaterowanie" />
      <v-row justify="center" align="center">
        <v-col cols="11" lg="7" md="9">
          <v-row justify="center" align="center">
            <!--            <v-spacer />-->
            <v-col cols="12" xl="6" lg="6" md="6" sm="7">
              <v-img
                src="@/assets/accommodation/andersia.jpg"
                max-height="500"
                max-width="500"
              />
            </v-col>
            <v-col
              cols="12"
              xl="6"
              lg="6"
              md="6"
              sm="10"
              class="align-content-center"
            >
              <p class="mt-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras
                vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra
                nulla ac diam. Quisque semper justo at risus. Donec venenatis,
                turpis vel hendrerit interdum, dui ligula ultricies purus, sed
                posuere libero dui id orci.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from "@/components/general/ComponentTitle";
export default {
  name: "Accommodation",
  components: { ComponentTitle }
};
</script>

<style scoped></style>
