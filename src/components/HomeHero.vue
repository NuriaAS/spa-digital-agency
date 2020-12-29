<template>
  <v-container fluid fill-height class="intro-container light-blue accent-3" style="max-height: 100vh;">
    <v-layout justify-center align-center column pa-5>
      <v-flex xs12 sm12 md8 class="ma-auto intro-text">
        <div class="display-2 font-weight-black">
          We create world-class digital
        </div>
        <div class="display-2 font-weight-black text-left mb-3">
          products, web design, and branding.
        </div>
        <v-btn outlined color="black" class="mt-5 cta-button font-weight-bold" to="/contact">
          CONTACT
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeHero",
};
</script>

<style scoped>
.intro-container {
  background: url("~@/assets/images/hero-img.jpg");
  background-position: center;
  background-size: cover;
  padding: 0;
}

.intro-img {
  height: 100vh;
  text-align: center;
}
.intro-image img {
  width: 100%;
}

.intro-text {
  height: 100vh;
  padding: 20% 10%;
}
.p-text {
  text-transform: uppercase;

  height: 100%;
}

.v-application p {
  margin-bottom: 0px;
}
.d-flex {
  justify-content: space-around;
}

</style>