import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../about/about.vue'
import Chat from '../views/chat.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 
  {
    path: '/about',
    name: 'about',
    component: About
  },
 
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  }
]



export default router
