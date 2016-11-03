import Vue from 'vue'
import router from './router/index'
import store from './vuex'
import Tekoa from './atomic/tekoa'

new Vue({
    router,
    store,
    render: h => h(Tekoa)
}).$mount('#app-tekoa')
