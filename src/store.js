
import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
   state: {
     count: 0,
     oform: "",
     user: null
   },
   mutations: {
       setCount: (state, count) => state.count = count,
       setOform: (state, oform) => state.oform = oform,
       setUser: (state, user) => state.user = user,
   },
   getters: {
       getCount: (state) =>
       {
           return state.count
       },
       getOform: (state) =>
       {
           return state.oform
       },
       getUser: (state) =>
       {
           return state.user
       }
   }
 })
 export default store;
