import { defineStore } from "pinia";

export const useBlogStore = defineStore('taskStore', {
    state: () => ({
        posts: [
            {id: 1, content: "今天好熱事事不順", isFav: false},
            {id: 2, content: "只要想做一件事，全宇宙都會幫你", isFav: true},
            {id: 3, content: "拜託讓我找到好工作", isFav: true} 
        ]
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
        addPost(post){
            this.posts.push(post)
        },
        deletePost(id){
            console.log(id)
            this.posts =  this.posts.filter( p => {
                return p.id !== id
            })
        },
        addFav(id){
            const post = this.posts.find(t => t.id === id)
            post.isFav = !post.isFav
        }
    }
    
}

)