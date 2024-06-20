<template>
    <form @submit.prevent="addPost">
        <input 
        type="text"
        placeholder="輸入日記"
        v-model="newpost"
        >
        <button>送出</button>
    </form>    
</template>

<script setup>
    import {ref} from 'vue'
    import { useBlogStore } from '../stores/BlogStore'

    const newpost = ref('')
    const blogStore = useBlogStore()

    const addPost = () => {
        if(newpost.value.length > 0){
            blogStore.addPost({
                content: newpost.value,
                id: Math.floor(Math.random()*100)+'',
                isFav: false
            })
            newpost.value = ''
        }
    }
</script>