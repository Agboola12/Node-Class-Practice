import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import myObj from "./store/index";

Vue.config.productionTip = false

new Vue({

  router,
  render: h => h(App)
}).$mount('#app')
