import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  { path: '/workers', name: 'workers', component: () => import('../views/workers/WorkersView.vue')},
  { path: '/workers/add', name: 'addWorker', component: () =>import('../views/workers/CreateWorker.vue')},
  { path: '/workers/edit:id', name: 'editWorker', component: () => import('../views/workers/EditWorker.vue')},
  { path: '/departments', name: 'departments', component: () => import('../views/departments/DepartmentView.vue')},
  { path: '/departments/add', name: 'addDepartment', component:() => import('../views/departments/createDepartment.vue')},
  { path: '/departments/edit:id', name: 'editDep', component: () => import('../views/departments/EditDepartment.vue')},
  { path: '/shops', name: 'shops', component: () => import('../views/shops/ShopsView.vue')},
  { path: '/shops/add', name: 'addShop', component: () => import('../views/shops/CreateShop.vue')},
  { path: '/shops/edit:id', name: 'editShop', component: () => import('../views/shops/EditShop.vue')},
  { path: '/journals', name: 'journals', component: () => import('../views/journals/JournalsView.vue')},
  { path: '/journals/add', name: 'addJournal', component: () => import('../views/journals/CreateJournal.vue')},
  { path: '/journals/edit:id', name: 'editJournal', component: () => import('../views/journals/EditJournal.vue')}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
