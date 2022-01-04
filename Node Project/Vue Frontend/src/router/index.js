import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import adminNav from '../Admin/adminNav.vue'
import allAcct from '../Admin/allAcct.vue'
import  Feedback from '../Admin/Feedback.vue'
import newAcct from '../Admin/newAcct.vue'
import allStaff from '../Admin/allStaff.vue'
import userNav from '../Users/userNav.vue'
import accountState from '../Users/accountState.vue'
import userNotice from '../Users/userNotice.vue'
import userProfile from '../Users/userProfile.vue'
import userTransfer from '../Users/userTransfer.vue'
import userSignup from '../Users/userSignup.vue'
import chat from '../views/chat.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adminNav',
    name: 'adminNav',
    component: adminNav
  },
  {
    path: '/allAcct',
    name: 'allAcct',
    component: allAcct
  },
  {
    path: '/Feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/newAcct',
    name: 'newAcct',
    component: newAcct
  },
  {
    path: '/allStaff',
    name: 'allStaff',
    component: allStaff
  },
  {
    path: '/userNav',
    name: 'userNav',
    component: userNav
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: userProfile
  },
  // {
  //   path: '/userHome',
  //   name: 'userHome',
  //   component: userHome
  // },
  {
    path: '/accountState',
    name: 'accountState',
    component: accountState
  },
  {
    path: '/userNotice',
    name: 'userNotice',
    component: userNotice
  },
  {
    path: '/userTransfer',
    name: 'userTransfer',
    component: userTransfer
  },
  {
    path: '/userSignup',
    name: 'userSignup',
    component: userSignup
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
