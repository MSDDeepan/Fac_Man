import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from '../components/LoginComponent.vue'
import UserComponent from '../components/UserComponent.vue';
Vue.use(VueRouter)


let routes = [
    {
      path: '/',
      name: 'LoginComponent',
      component: LoginComponent
    },
    {
      path: '/User',
      name: 'UserComponent',
      component:UserComponent 
    }
  ]
  
  const RouterConfig = new VueRouter(
    {
      mode: "history",
      routes
  
    }
  )
  
 export default RouterConfig; 
