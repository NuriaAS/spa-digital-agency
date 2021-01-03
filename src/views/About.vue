<template>    
    <v-container fill-height>        
        <v-layout column justify-space-between>            
           
            <v-container class="main-content-about mb-10">
                <v-row class="mb-16">
                    <v-col class="mycol  align-self-start">
                        <h2 class="display-1 font-weight-bold text-left">
                         We help clients solve business problems by fusing creativity, innovation, strategy, and craft.
                        </h2>
                    </v-col>
                    <v-col class="mycol">
                         <img :src="require('@/assets/images/about-1.jpg')">
                    </v-col>
                </v-row>
                 <v-row class="mb-16">
                    <v-col class="mycol align-self-start">
                        <p class="subtitle-1 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet ornare facilisis. Praesent nunc arcu, iaculis a elit ut, laoreet semper turpis. Integer tincidunt lacinia quam sit amet consectetur. Fusce quam orci, viverra vestibulum hendrerit sed, facilisis vitae sem. In sit amet est nunc.
                        <br>
                        Maecenas id felis id sem posuere consectetur a nec risus. Phasellus a erat rhoncus, suscipit sapien vel, pharetra nunc. Duis est libero, lobortis a posuere quis, varius vitae justo. Donec elit mauris, suscipit sagittis maximus vehicula, consequat at nunc. 
                        </p>
                    </v-col>
                    <v-col class="mycol align-self-start">
                         <p class="subtitle-1 text-left">Ut dignissim, ex sed egestas faucibus, ante nunc aliquam felis, vitae mattis lectus ligula in augue. In hac habitasse platea dictumst. Donec ac nulla nec diam euismod commodo in hendrerit magna. Aenean vel molestie turpis. Duis id dictum metus. Donec vitae scelerisque purus. 
                         <br>
                         Donec non ligula cursus, hendrerit lorem quis, eleifend ligula. Quisque egestas lectus nec condimentum elementum. Sed sagittis lobortis mollis. Suspendisse at gravida turpis, in rutrum massa. 
                         </p>
                    </v-col>
                </v-row>
                 <v-row class="mb-16">
                    <v-col class="col-big">
                        <img :src="require('@/assets/images/about-2.jpg')">
                    </v-col>

                </v-row>
            </v-container>
          
            <Footer></Footer>        
        </v-layout>    
    </v-container>
</template>

<script>

    import Footer from '@/components/Footer.vue'
    export default {    
        name: 'About',
        
        components: {
           
            Footer,
        }
    };
</script>
<style scoped>
    .container {
        padding: 12px 0 0 0;
        max-width: 100%;
    }
    .layout {
        padding-top: 20%;
        width: 100%;
        text-align: center;
        height: 100%;
    }
    .row {
            width: 90%;
            flex-direction: column;
            align-items: center;
            margin: auto;
        }
        img {
            width: 100%;
        }
       
    @media screen and (min-width: 600px) {
        .layout{
            padding-top: 10%;   
        }
        .main-content-about {
            width: 80%;
        }
        .row {
            flex-direction: row;
        }
        .mycol {
            width: 35%;
        }
        img {
            width: 60%;
        }
        .col-big {
            width: 100%;
            height: auto;
        }
   }
   @media screen and (min-width: 900px) {
        .layout{
            padding-top: 8%;   
        }
         .main-content-about {
            min-width: 60%;
        }
   }
    
  
    
</style>