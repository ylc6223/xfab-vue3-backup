import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from '@/views/Home.vue'
import About from '../views/About.vue'
import Product from '../views/ProductLine.vue'
import ServiceCase from '../views/ServiceCase.vue'
import ContactUs from '../views/ContactUs.vue'
import StaffChannel from '../views/StaffChannel.vue'

const routes = [
  {
    path: '/',
    name: Layout,
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
      {
        path: 'product',
        name: 'Product',
        component: Product,
      },
      {
        path: 'case',
        name: 'Case',
        component: ServiceCase,
      },
      {
        path: 'contact',
        name: 'ContactUs',
        component: ContactUs,
      },
      {
        path: 'staff',
        name: 'Staff',
        component: StaffChannel,
      },
    ],
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
  // scrollBehavior() {
  //   return { top: 0 }
  // }
  // scrollBehavior(to, from, savedPosition) {
  //     if (savedPosition) {
  //         return savedPosition
  //     } else {
  //         return { top: 0 }
  //     }
  // }
})

export default router
