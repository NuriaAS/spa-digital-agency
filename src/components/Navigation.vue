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
            <v-btn text class="hidden-sm-and-down" to="/Work">work</v-btn>
            <v-btn text class="hidden-sm-and-down" to="/About">about</v-btn>
            <v-btn text class="hidden-sm-and-down" to="/Contact">Contact</v-btn>
            <v-app-bar-nav-icon class="hidden-md-and-up" color="black" @click="drawer = !drawer">
            </v-app-bar-nav-icon>
    </v-toolbar>
    
     <v-navigation-drawer app v-model="drawer" dark color="black" disable-resize-watcher right>
         <v-list  class="ma-2">
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index" class="text-h5" :to="item.url">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"  class="mb-4"></v-divider>
                </template>
            </v-list>
             <pre>{{$data.items}}</pre>
    </v-navigation-drawer>
  </span>
  
</template>

<script>
    export default {
    name: "Navigation",
    data() {
        return {
            appTitle: 'Miles Digital',
            drawer: false,
            items: [
                { title: 'Home', url: '/' },
                { title: 'Work', url: '/work' },
                { title: 'About', url: '/about' },
                { title: 'Contact', url: '/contact' },
            ]
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
    font-size: 2rem;
    font-weight: 700;
    color: black;    
    text-decoration: none;
    }
    
</style>