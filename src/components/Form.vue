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
                  :counter="200"
                  label="Message"
                  required
                  filled
                ></v-text-field>
              </v-col>
              <v-checkbox
                label="Do you agree policy terms?"
                v-model="checkbox"
              ></v-checkbox>
              <v-progress-circular
                indeterminate
                color="primary" v-if="dataIsSent"
              ></v-progress-circular>
              <v-row class="button-alert">
                <v-btn class="mr-4" @click="submitHandler" :disabled="!validate"> submit </v-btn>
                <v-alert v-if="requestSuccess" type="success">
                  Message sent
                </v-alert>
                <v-alert v-if="requestError" type="error">
                Message Error
                </v-alert>
              </v-row>
            </v-row>
          </v-container>
        </v-form>
        
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
          dataIsSent: false,
          requestSuccess: false,  
          requestError: false,
          submit: true,
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
          const messageIsValid = this.message && this.message.length <= 200;
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
          this.dataIsSent = true;
          const self = this;
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
          .then(function() {
            self.dataIsSent = false
            self.requestSuccess = true
          })
          .catch(function(error) {
            self.dataIsSent = false
            self.requestError = true;
            console.error(error)
          })
        },
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
          this.resetForm();
        },
      }
    }
</script>
    
<style scoped>
    .layout.column > .flex {
            width: 100% !important;
    }
    .button-alert {
       padding-left: 12px !important;
    padding-right: 12px !important;
    justify-content: space-between;
    }
    .v-application .pa-5 {
    padding: 30px !important;
    }
    .v-application .mr-4 {
    margin-right: 0px !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
    }
    .col-12, .col-md-12 {
    padding: 0px;
    }
   @media screen and (min-width: 600px) {
        .layout.column > .flex {
            width: 100% !important;
        }
   }
  
</style>