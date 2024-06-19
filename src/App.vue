<template>
  <main>
    <header>
      <h1>Blog</h1>
    </header>
      <nav class="filter">
        <button @click="filter = 'all'">All tasks</button>
        <button @click="filter = 'favs'">Fav tasks</button>
      </nav>
      <!-- all -->
      <div class="post-list" v-if="filter === 'all'">
        <p>You have {{ blogStore.totalCount }} blog posts.</p>
        <div v-for="post in blogStore.posts" :key="post.id">
          <BlogDetails :post="post" />
        </div>
      </div>
      <!-- favs -->
      <div class="post-list" v-if="filter === 'favs'">
        <p>You have {{ blogStore.favCount }} fav blog posts.</p>
        <div v-for="post in blogStore.favs" :key="post.id">
          <BlogDetails :post="post" />
        </div>
      </div>
  </main>
</template>

<script setup>
import { useBlogStore } from './stores/BlogStore';
import BlogDetails from './components/BlogDetails.vue'
import { ref } from 'vue'

const blogStore = useBlogStore()
const filter = ref('all')

</script>

<style scoped>

</style>
