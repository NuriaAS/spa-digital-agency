<template>    
    <v-container fill-height>        
        <v-layout column justify-end>            
            <h1>Get in touch</h1>
            <div class="title my-3"> 
                  Want to discuss a project? Send us a message               
            </div>
            <Form></Form>
            <Footer></Footer>        
        </v-layout>    
    </v-container>
</template>

<script>
    import Form from '@/components/Form.vue'
    import Footer from '@/components/Footer.vue'
    export default {    
        name: 'Contact',
        components: {
            Form,
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
    @media screen and (min-width: 600px) {
        .layout{
            padding-top: 10%;   
        }
   }
   @media screen and (min-width: 900px) {
        .layout{
            padding-top: 8%;   
        }
   }
    
  
    
</style>