import { defineStore } from "pinia";

export const useBlogStore = defineStore('taskStore', {
    state: () => ({
        posts: [],
        loading: false
    }),
    getters: {
        favs(){
            return this.posts.filter( p => p.isFav)
        },
        favCount(){
            return this.posts.reduce((s,c) => {
                return c.isFav? s+1: s
            }, 0)
        },
        totalCount(state){
            return state.posts.length
        }
    },
    actions: {
        async fetchPosts() {
            this.loading = true
            const data = await fetch('http://localhost:3000/posts').then( res => res.json())
            this.posts = data
            this.loading = false
        },
        async addPost(post){
            this.posts.unshift(post)
            const res = await fetch('http://localhost:3000/posts', {
                method: 'POST',
                body: JSON.stringify(post),
                headers: {'Content-Type': 'application/json'}
            })

            if(res.error){
                console.log(res.error)
            }
        },
        async deletePost(id) {
            this.posts = this.posts.filter(p => {
              return p.id !== id
            })
      
            const res = await fetch('http://localhost:3000/posts/' + id, {
              method: 'DELETE',
            })
      
            if (res.error) {
              console.log(res.error)
            }
          },
        async addFav(id){
            const post = this.posts.find(t => t.id === id)
            post.isFav = !post.isFav

            const res = await fetch('http://localhost:3000/posts/' + id, {
                method: 'PATCH',
                body: JSON.stringify({isFav: post.isFav}),
                headers: {'Content-Type': 'application/json'}
            })

            if(res.error){
                console.log(res.error)
            }
        }
    } 
}

)