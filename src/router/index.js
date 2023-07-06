import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contactme',
    name: 'contactme',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/projectsandtestimonials',
    name: 'projectsandtestimonials',
    component: () => import('../views/ProjectsandTestimonialView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/ResumeView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
