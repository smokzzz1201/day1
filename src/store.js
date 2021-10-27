
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
   state: {
     count: 0,
     oform: "",
   },
   mutations: {
       setCount: (state, count) => state.count = count,
       setOform: (state, oform) => state.oform = oform,
   },
   getters: {
       getCount: (state) =>
       {
           return state.count
       },
       getOform: (state) =>
       {
           return state.oform
       }
   }
 })
 export default store;
