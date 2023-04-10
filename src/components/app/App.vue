<template>
  <div class="app">
    <Navbar />
    <div class="d-flex">
      <MenuBar />
      <!-- <Dashboard /> -->
      <SelectTopic />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
import MenuBar from '@/components/menuBar/MenuBar.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import SelectTopic from '@/components/selectTopic/SelectTopic.vue'

export default {
  components: {
    Navbar,
    MenuBar,
    Dashboard,
    SelectTopic,
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
