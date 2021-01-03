<template>
  <v-container
    fluid
    fill-height
    class="intro-container accent-3"
    style="max-height: 100vh"
  >
    <v-layout justify-center column pa-5>
      <div class="title my-3 text-left pl-3"> 
                  Want to discuss a project? Send us a message               
            </div>
      <v-flex xs12 sm12 md12>
        <v-form v-model="valid" 
        ref="form"
        @submit="saveContactMessage"
        method="post"
        lazy-validation>
          <v-container>
            <v-row class="flex-column">
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  required
                  filled
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  required
                  filled
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  filled
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  v-model="message"
                  :rules="messageRules"
                  label="Message"
                  required
                  filled
                ></v-text-field>
              </v-col>
              <v-btn class="mr-4" @click="saveContactMessage"> submit </v-btn>
            </v-row>
          </v-container>
        </v-form>
        <p>Name is: {{ firstname }}</p>
        <pre>{{$data}}</pre>
      </v-flex>
    </v-layout>
  </v-container>
  
</template>

<script>
    export default {
      name: "Form",
      data: function () {
        return {
          firstname: null,
          lastname: null,
          email: null,
          message: null,
        }
      },
      methods: {
        saveContactMessage: function (e) {
          e.preventDefault()
          const messagesRef = this.$firebaseDatabase.collection('message')
          messagesRef.add(
            {
              firstname: this.firstname,
              lastname: this.lastname,
              email: this.email,
              message: this.message,
              time: new Date(),
            },
          )
          this.firstname= ''
          this.lastname= ''
          this.email = ''
          this.message = ''
          this.submitted = true
          this.snackbar = false
        },
      }
    }
</script>
    
<style scoped>
    .layout.column > .flex {
            width: 100% !important;
    }
   @media screen and (min-width: 600px) {
        .layout.column > .flex {
            width: 100% !important;
        }
   }
   @media screen and (min-width: 900px) {
        /* .layout.column > .flex {
            width: 40% !important;
        } */
   }
</style>