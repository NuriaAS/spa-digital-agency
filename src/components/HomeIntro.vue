<template>
  <v-container app fluid class="intro-container">
    <v-layout row wrap fill-height>
      <v-flex xs12 sm12 md6 class="ma-auto intro-text">
        
        <div class="display-1 font-weight-bold text-left">
          Miles Digital is your best choice <br />to run your bussines online
        </div>
      
      </v-flex>
      
    </v-layout>
    
  </v-container>
</template>

<script>
export default {
  name: "HomeIntro",
  data () {
    return {
      items: [
        {
          src: "https://source.unsplash.com/mr0Dp231IEw/1000x300",
        },
        {
          src: "https://source.unsplash.com/CFxUHNJedQA/1000x300",
        },
        {
          src: "https://source.unsplash.com/VoEocAfaWG8/1000x300",
        },
        {
          src: "https://source.unsplash.com/fjlPN312GYw/1600x400",
        },
      ],
    }
  },
};
</script>

<style scoped>
.intro-container {
  width: 90%;
}
.intro-text {
 
  padding: 15% 0;
}
.p-text {
  text-transform: uppercase;
  padding: 60% 10%;
  height: 100%;
}

.v-application p {
  margin-bottom: 0px;
}
.d-flex {
  justify-content: space-around;
}
.cta-button:hover {
  background: white;
  color: black !important;
  border: none;
}
</style>