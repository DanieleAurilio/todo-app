import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import createTaskView from '../views/createTaskView.vue';
import updateTask from '../components/updateTask.vue';
import signupUser from '../components/signup.vue';

Vue.use(VueRouter)

const routes = [
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
