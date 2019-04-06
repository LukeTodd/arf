import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Login from './views/Login.vue'
// @ts-ignore
import ELanding from './views/EmployeeViews/ELanding.vue'
// @ts-ignore
import Incidents from './views/EmployeeViews/Incidents.vue'
// @ts-ignore
import Owners from './views/EmployeeViews/Owners.vue'
// @ts-ignore
import Profile from './views/EmployeeViews/Profile.vue'
// @ts-ignore
import Registration from './views/EmployeeViews/Registration.vue'
// @ts-ignore
import Billing from './views/EmployeeViews/Billing.vue'
// @ts-ignore
import Invoice from './views/EmployeeViews/Invoice.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: "*",
      redirect: '/'
    },
    {
      path: '/ELanding',
      name: 'ELanding',
      component: ELanding
    },
    {
      path: '/Incidents',
      name: 'Incidents',
      component: Incidents
    },
    {
      path: '/Owners',
      name: 'Owners',
      component: Owners
    },
    {
      path: '/Profile/:id',
      name: 'Profile',
      props: true,
      component: Profile
    },
    {
      path: '/Registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/Billing',
      name: 'Billing',
      component: Billing
    },
    {
      path: '/Invoice/:id',
      name: 'Invoice',
      component: Invoice
    }
  ]
})