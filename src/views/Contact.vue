<template>    
    <v-container fill-height>        
        <v-layout column>            
            <h1>Get in touch</h1>

            <v-row class="justify-space-between">
                <v-col class="myCol">
                    <ContactInfo></ContactInfo>
                </v-col>
                <v-col class="myCol">
                    <Form></Form>
                </v-col>
                
            </v-row>
            <Footer></Footer>        
        </v-layout>    
    </v-container>
</template>

<script>
    import Form from '@/components/Form.vue'
    import ContactInfo from '@/components/ContactInfo.vue'
    import Footer from '@/components/Footer.vue'
    export default {    
        name: 'Contact',
        components: {
            Form,
            ContactInfo,
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
        padding-top: 10%;
        width: 100%;
        text-align: center;
        height: 100%;
    }
   .layout.column {
    width: 60%;
    }
    .row {
        flex-direction: column;
    }
   @media screen and (min-width: 600px) {
        .row {
            margin-left: 10%;
            margin-right: 10%;
            flex-direction: row;
        }
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
    @media screen and (min-width: 600px) {
        .layout{
            padding-top: 10%;   
        }
   }
   @media screen and (min-width: 900px) {
        .layout{
            padding-top: 8%;   
        }
   } */
    
  
    
</style>