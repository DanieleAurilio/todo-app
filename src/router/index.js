import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import createTaskView from '../views/createTaskView.vue';
import updateTask from '../components/updateTask.vue';
import signupUser from '../components/signup.vue';
import login from '../components/login.vue';
import home from '../components/home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/post',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/createTask',
    name: 'createTaskView',
    component: createTaskView
  },
  {
    path: '/post/:id',
    name: 'updateTask',
    component: updateTask
  },
  { 
    path: '/signup',
    name: 'signupUser',
    component: signupUser
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
