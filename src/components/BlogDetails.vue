<template>
    <div class="post">
        <h3>{{ post.content }}</h3>
        <div class="icons">
        <i 
            class="material-icons" 
            @click="blogStore.deletePost(post.id)">
            delete
        </i>
        <i 
            class="material-icons"
            :class="{active: post.isFav}" 
            @click="blogStore.addFav(post.id)">
            favorite
        </i>
        </div>
    </div>
</template>

<script setup>
import { useBlogStore } from '../stores/BlogStore';
    const props  = defineProps({
        post: Object
    })
    const blogStore = useBlogStore()
</script>

<style scoped>

</style>