<template>
  <div id="accommodation">
    <v-container fluid>
      <component-title text="Zakwaterowanie" />
      <v-row justify="center" align="center">
        <v-col cols="12" lg="7" md="9">
          <v-row justify="center">
            <v-col cols="6">
              <v-img
                src="@/assets/accommodation/andersia.jpg"
                max-height="500"
                max-width="500"
              />
            </v-col>
            <v-col cols="5" class="align-content-center">
<!--              <blockquote class="blockquote text-h5 black&#45;&#45;text">-->
<!--                {{ quote }}-->
<!--              </blockquote>-->
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
  components: {ComponentTitle}
};
</script>

<style scoped></style>
