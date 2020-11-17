import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDmLEpV8JvRs90TDwXkqcZuBE0L56HiouQ",
  authDomain: "clase05-10.firebaseapp.com",
  databaseURL: "https://clase05-10.firebaseio.com",
  projectId: "clase05-10",
  storageBucket: "clase05-10.appspot.com",
  messagingSenderId: "896690830399",
  appId: "1:896690830399:web:d16b052ed3db66656acc8a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
