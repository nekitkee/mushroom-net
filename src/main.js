//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap2/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'

//require('@/assets/bootstrap2/css/bootstrap.css')


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.use(Vuesax)


// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import KProgress from 'k-progress';
Vue.component('k-progress', KProgress);

import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
