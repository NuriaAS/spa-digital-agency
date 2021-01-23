<template>    
    <v-container fill-height>        
        <v-layout column justify-space-between>            
           
            <v-container class="main-content-about mb-10">
                
                 <v-row column>
                    <v-col class="mycol align-self-start">
                        <p class="subtitle-1 text-left">441 Battersea Park Rd, Battersea,
                            <br>
                            London SW11 4LR, UK
                        </p>
                        <p class="subtitle-1 text-left pb-6">
                            +442054337721
                            <br>
                            info@miles.com
                        </p>
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.3074075086022!2d-0.1602754118296366!3d51.472299198720584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605a0a2e97ca9%3A0x3314ba35f2533cda!2s45%20Dagnall%20St%2C%20Battersea%2C%20London%20SW11%205AU%2C%20Reino%20Unido!5e0!3m2!1ses!2ses!4v1609786140766!5m2!1ses!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </v-col>
                    
                </v-row>
            </v-container>      
        </v-layout>    
    </v-container>
</template>

<script>

    export default {    
        name: 'ContactInfo',
        

    };
</script>
<style scoped>
     iframe {
        width: 100%;
    }
    /* .container {
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
   } */
    
  
    
</style>