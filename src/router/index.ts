import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/components/login/Login.vue'
import Register from '@/components/registration/Registration.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import Navbar from '@/components/navbar/Navbar.vue'
import MenuBar from '@/components/menuBar/MenuBar.vue'
import SelectTopic from '@/components/selectTopic/SelectTopic.vue'
import Instruction from '@/components/instruction/Instruction.vue'
import AnswerQuestion from '@/components/answerQuestion/AnswerQuestion.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    components: { default: Dashboard, navbar: Navbar, menuBar: MenuBar },
  },
  { path: '/login', name: 'Login', components: { default: Login } },
  { path: '/register', name: 'Register', components: { default: Register } },
  {
    path: '/selectTopic',
    name: 'SelectTopic',
    components: { default: SelectTopic, navbar: Navbar, menuBar: MenuBar },
  },
  {
    path: '/instruction',
    name: 'Instruction',
    components: { default: Instruction, navbar: Navbar, menuBar: MenuBar }
  }, 
  {
    path: '/answerQuestion',
    name: 'AnswerQuestion',
    components: { default: AnswerQuestion, navbar: Navbar, menuBar: MenuBar }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
