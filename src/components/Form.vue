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
        <v-form  
        ref="form"
        method="post"
        lazy-validation>
          <v-container>
            <v-row class="flex-column">
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="firstname"
                  :rules="[rules.required]"
                  label="First name"
                  required
                  filled
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  v-model="lastname"
                  :rules="[rules.required]"
                  label="Last name"
                  required
                  filled
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  v-model="email"
                  :rules="[rules.required, rules.email]"
                  label="E-mail"
                  required
                  filled
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  v-model="message"
                  :rules="[rules.required, rules.message, rules.counter]"
                  :counter="100"
                  label="Message"
                  required
                  filled
                ></v-text-field>
              </v-col>
              <v-checkbox
                label="Do you agree policy terms?"
                v-model="checkbox"
                
              ></v-checkbox>
              <v-btn class="mr-4" @click="submitHandler" :disabled="!validate"> submit </v-btn>
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
          checkbox: false,
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          rules: {
            required: value => !!value || 'Required',
            counter: value => value.length <= 100 || 'Max 100 characters',
            email: value => {
              return this.pattern.test(value) || 'Invalid e-mail.'
            },
          }
        }
      },
      computed: {
        validate() {
          const messageIsValid = this.message && this.message.length <= 100;
          const emailIsValid = this.email && this.pattern.test(this.email);
          if(this.lastname && this.firstname && emailIsValid && messageIsValid && this.checkbox) {
            return true;
          }else {
            return false;
          }
        }
      },
      methods: {
        sendData () {
          const messagesRef = this.$firebaseDatabase.collection('message');
          messagesRef.add(
            {
              firstname: this.firstname,
              lastname: this.lastname,
              email: this.email,
              message: this.message,
              time: new Date(),
            },
          )
        resetForm () {
          this.firstname = ''
          this.lastname = ''
          this.email = ''
          this.message = ''
          this.checkbox = false
          this.submitted = true
          this.snackbar = false

          this.$refs.form.reset()
        },
        submitHandler (event) {
          event.preventDefault();
          this.sendData();
          // SET SPINNER
          // STOP SPINNER
          // DISPLAY MESSAGE
          this.resetForm();
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