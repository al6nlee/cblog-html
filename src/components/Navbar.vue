<template>
  <nav class="navbar">
    <div class="container">
      <h1>{{ siteConfig.title }}</h1>
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">文章</a></li>
        <li><a href="#">关于</a></li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup name="Navbar">
import {reactive} from 'vue'

var siteConfig = reactive({
  title: '文斋阁',
  logo: '',
})

</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 10px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  display: flex;
}

li {
  margin: 0 15px;
}

h1 {
  color: white;
}

a {
  color: white;
  text-decoration: none;
}
</style>