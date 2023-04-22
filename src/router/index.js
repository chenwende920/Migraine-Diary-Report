import { createRouter, createWebHashHistory } from 'vue-router'
import ReportView from '../views/ReportView.vue'

const routes = [
  {
    path: '/',
    name: 'report',
    component: ReportView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
