<template>
  <div>
    <Navbar/>
    <main class="main-content">
      <BlogList/>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Navbar from '@/components/Navbar.vue';
import BlogList from '@/components/BlogList.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Navbar,
    BlogList,
    Footer,
  },
});
</script>

<style scoped>
.main-content {
  padding: 20px;
  min-height: 80vh;
}
</style>