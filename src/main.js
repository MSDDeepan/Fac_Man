import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import RouterConfig from '../src/js/router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(Vuex)
Vue.use(BootstrapVue)
// Vue.use(RouterConfig)



new Vue({
  render: h => h(App),
  RouterConfig
  
}).$mount('#app')
