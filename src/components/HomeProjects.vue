<template>
  <v-container app fluid class="intro-container">
    <v-layout row wrap fill-height>
      <v-flex xs12 sm12 md10 class="ma-auto intro-text">
        
        <v-parallax
          dark
          src="https://source.unsplash.com/TRCJ-87Yoh0/1000x500g"
        >
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="display-1 font-weight-thin mb-4">Vuetify</h1>
              <h4 class="subheading">Build your application today!</h4>
            </v-col>
          </v-row>
        </v-parallax>
        
        
        <v-parallax
          dark
          src="https://source.unsplash.com/xB4ExGcUai0/1000x500g"
        >
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="display-1 font-weight-thin mb-4">Vuetify</h1>
              <h4 class="subheading">Build your application today!</h4>
            </v-col>
          </v-row>
        </v-parallax>
        
      </v-flex>

      <v-flex xs12 sm12 md10 class="ma-auto intro-text">
        
        <v-parallax class="img-paral-background"
          dark
          src="https://source.unsplash.com/qI7USKbZY_A/1000x500g"
        >
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="display-1 font-weight-thin mb-4">Vuetify</h1>
              <h4 class="subheading">Build your application today!</h4>
            </v-col>
          </v-row>
        </v-parallax>
        
        
        <v-parallax class="img-paral-background"
          dark
          src="https://source.unsplash.com/HJp9_5eNvVw/1000x500g"
        >
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="display-1 font-weight-thin mb-4">Vuetify</h1>
              <h4 class="subheading">Build your application today!</h4>
            </v-col>
          </v-row>
        </v-parallax>
        
      </v-flex>
      <v-flex xs12 sm12 md10 class="ma-auto intro-text">
        
        <v-parallax class="img-paral-background"
          dark
          src="https://source.unsplash.com/SoSi2iBqpdo/1000x500g"
          
        >
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="display-1 font-weight-thin mb-4">Vuetify</h1>
              <h4 class="subheading">Build your application today!</h4>
            </v-col>
          </v-row>
        </v-parallax>
        
        
        <v-parallax
          dark
          src="https://source.unsplash.com/LqZJf4ukqz0/1000x500g"
        >
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="display-1 font-weight-thin mb-4">Vuetify</h1>
              <h4 class="subheading">Build your application today!</h4>
            </v-col>
          </v-row>
        </v-parallax>
        
      </v-flex>
    </v-layout>
    
  </v-container>
</template>

<script>
export default {
  name: "HomeProjects",
};
</script>

<style scoped>
    h1, h4 {
        color: black;
    }
    .intro-text {
        display: flex;
        justify-content: space-around;
        
    }
    .v-parallax {
        width: 45%;
        height: 400px !important;
        margin-bottom: 5%;
    }
     .img-paral-background .v-parallax__image {
        background: rgba(255, 255, 255, 0.3);
    }
</style>