import { defineStore } from "pinia";

export const useBlogStore = defineStore('taskStore', {
    state: () => ({
        posts: [
            {id: 1, content: "今天好熱事事不順", isFav: false},
            {id: 2, content: "只要想做一件事，全宇宙都會幫你", isFav: true} 
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
    }
    
}

)