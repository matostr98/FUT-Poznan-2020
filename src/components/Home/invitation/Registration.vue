<template>
  <div id="registration">
    <v-parallax dark src="@/assets/invitation/wtch.jpg" height="350">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-btn
            rounded
            x-large
            elevation="10"
            height="75"
            width="325"
            color="primary"
            class="font-weight-bold display-1"
            href=""
            target="_blank"
          >
            Rejestracja
            <v-icon class="ml-5" size="40" right
              >fas fa-long-arrow-alt-right</v-icon
            >
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Registration"
};
</script>

<style scoped></style>
