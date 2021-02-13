import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';


Vue.config.productionTip = false
Vue.use(Vuesax)

import KProgress from 'k-progress';
Vue.component('k-progress', KProgress);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
