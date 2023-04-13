<template>
  <div class="app">
    <Navbar />
    <div class="d-flex">
      <MenuBar />
      <Dashboard />
      <!-- <SelectTopic /> -->
      <!-- <Instruction /> -->
      <!-- <AnswerQuestion /> -->
    </div>
    <!-- <Login /> -->
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
import MenuBar from '@/components/menuBar/MenuBar.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import SelectTopic from '@/components/selectTopic/SelectTopic.vue'
import Instruction from '@/components/instruction/Instruction.vue'
import AnswerQuestion from '@/components/answerQuestion/AnswerQuestion.vue'
import Login from '@/components/login/Login.vue'


export default {
  components: {
    Navbar,
    MenuBar,
    Dashboard,
    SelectTopic,
    Instruction,
    AnswerQuestion,
    Login
  },
}
</script>

<style scoped>
.app {
  background: #fbf9f9;
  backdrop-filter: blur(30px);
  max-width: 1440px;
  max-height: 1024px;
  margin: 0 auto;
}
</style>
