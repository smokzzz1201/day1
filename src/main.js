import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './components/App.vue'
import Students from './components/Students.vue'
import StudentsInfo from './components/StudentsInfo.vue'

const routes = [
    { path: '/', component: Students},
    { path: '/student-info/:id', component: StudentsInfo, props: true},
]

const router = new VueRouter({

    routes
})

    Vue.use(VueAxios, axios)
    Vue.use(VueRouter)
    

new Vue({
   render: h => h(App),
   el: '#app',
   router
})

