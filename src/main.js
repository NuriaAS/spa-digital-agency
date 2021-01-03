import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import { firebase } from '@firebase/app'
require('firebase/firestore')
require('firebase/app')

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA3w5hxAte6GD8EcSnc7Qeg7T2imidwT1s",
  authDomain: "digital-agency-form.firebaseapp.com",
  projectId: "digital-agency-form",
  storageBucket: "digital-agency-form.appspot.com",
  messagingSenderId: "972655223740",
  appId: "1:972655223740:web:db1c94b0eba29abd0701b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebaseDatabase = firebase.default.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

  