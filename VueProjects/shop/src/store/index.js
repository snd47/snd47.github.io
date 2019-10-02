import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Shop from './Shop'

// import shop from './users'
// import shop from './auth'

export default new Vuex.Store({
    modules: {
        Shop
        // users,
        // auth
        
    },
    state: {

    },
    mutations: {
        getPosts() {
            
        }
    }
})