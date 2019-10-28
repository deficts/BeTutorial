// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import firebsae from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBOQe7xSjY9txzQCDzC9Y9joRBY9T9CC6w",
    authDomain: "betutorial-48e65.firebaseapp.com",
    databaseURL: "https://betutorial-48e65.firebaseio.com",
    projectId: "betutorial-48e65",
    storageBucket: "betutorial-48e65.appspot.com",
    messagingSenderId: "795967344088",
    appId: "1:795967344088:web:664499f836638e3703f6ad"
};

firebase.initializeApp(firebaseConfig)

Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
