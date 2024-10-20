<template>
  <div>
    <Navbar/>
    <div class="admin-container">
      <Sidebar/>
      <main class="admin-content">
        <router-view/>
      </main>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts" setup name="Manage">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Sidebar from '@/components/Sidebar.vue';
</script>

<style scoped>
.admin-container {
  display: flex;
}

.admin-content {
  flex-grow: 1;
  padding: 20px;
  min-height: 80vh;
}
</style>