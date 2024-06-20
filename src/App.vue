<template>
  <main>
    <header>
      <h1>Blog</h1>
    </header>
    <div class="new-post-form">
      <AddPost />
    </div>
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>
    <div class="loading" v-if="loading">Loading...</div>
    <!-- all -->
    <div class="post-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} blog posts.</p>
      <div v-for="post in posts" :key="post.id">
        <BlogDetails :post="post" />
      </div>
    </div>
    <!-- favs -->
    <div class="post-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} fav blog posts.</p>
      <div v-for="post in favs" :key="post.id">
        <BlogDetails :post="post" />
      </div>
    </div>
    <div class="filter">
      <button @click="blogStore.$reset">Reset to 0 post</button>
    </div>
  </main>
  
</template>

<script setup>
import { useBlogStore } from './stores/BlogStore';
import BlogDetails from './components/BlogDetails.vue'
import AddPost from './components/AddPost.vue'
import { ref } from 'vue'
import { storeToRefs } from 'pinia';

const blogStore = useBlogStore()
const filter = ref('all')
const {totalCount, posts, favCount, favs, loading  } = storeToRefs(blogStore)

//fetch posts
blogStore.fetchPosts()

</script>

<style scoped>

</style>
