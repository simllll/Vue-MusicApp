import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import Search from './components/SearchView'
import Main from './components/MainView'
import Vaves from 'vue-directive-waves'
import VueResource from 'vue-resource'

Vue.use(Vaves)
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: Main },
        { path: '/search', component: Search }
    ]
})

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})