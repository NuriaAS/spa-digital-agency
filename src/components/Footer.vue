<template>
    <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title>
          <strong class="subheading">Get connected with us on social networks!</strong>
  
          <v-spacer></v-spacer>
          <div>
                      <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
          </div>

        </v-card-title>
  
        <v-card-text class="py-2 white--text">
          {{ new Date().getFullYear() }}<strong>, Valencia</strong> — <strong>Miles Digital</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
};
</script>

<style scoped>
    .v-card__title {
        font-size: 1rem;
        font-weight: 300;
        justify-content: center;
       
    }
     @media screen and (min-width: 600px) {
        .v-card__title {
        flex-direction: row;
        justify-content: space-around;
       
    }
   }
</style>