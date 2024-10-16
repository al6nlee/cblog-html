<template>
  <div class="blog-list">
    <div v-for="post in posts" :key="post.id" class="blog-post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.summary }}</p>
      <a href="#">Read More</a>
    </div>
  </div>
</template>

<script lang="ts" setup name="BlogList">
import {ref} from 'vue';

interface Post {
  id: number;
  title: string;
  summary: string;
}


const posts = ref<Post[]>([
  {id: 1, title: 'First Blog Post', summary: 'This is a summary of the first post.'},
  {id: 2, title: 'Second Blog Post', summary: 'This is a summary of the second post.'},
  {id: 3, title: 'Third Blog Post', summary: 'This is a summary of the third post.'},
]);

</script>

<style scoped>
.blog-list {
  margin: 20px;
}

.blog-post {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}

a {
  color: #3498db;
}
</style>