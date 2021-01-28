<template>
  <span>
   
    <v-toolbar app flat  class="navigation" color="white">
            <router-link to="/">
                <v-toolbar-title to="/">
                        {{ appTitle }}
                </v-toolbar-title>
           </router-link>
            <v-spacer></v-spacer>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-btn text to="/About">about</v-btn>
            <v-btn text to="/Contact">Contact</v-btn>
            
    </v-toolbar>
    
  </span>
  
</template>

<script>
    export default {
    name: "Navigation",
    data() {
        return {
            appTitle: 'Miles Digital',
        }
    }

    };
</script>
    
<style scoped>

    .navigation {
        position: fixed;
        width: 100%;
        z-index: 2;
    }
    
    .navigation-layout {
         border-color: 1px solid black !important;
    }

    a {    
        color: black;    
        text-decoration: none;
    }
    .v-list {
    padding: 10px 18px;
    }
    .v-toolbar__title {
    font-size: 1.3rem;
    font-weight: 700;
    color: black;    
    text-decoration: none;
    }
    @media screen and (min-width: 600px) {
       .v-toolbar__title {
        font-size: 2rem;
        }
   }
    
</style>