import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (name) {
    if (process.env.NODE_ENV === 'development') {
        return require('../atomic/' + name + '.vue')
    } else {
        return (resolve) => {
            require('bundle?lazy!../atomic/' + name + '.vue')(resolve)
        }
    }
}

export default new VueRouter({
    routes: [
        // { path: '/', redirect: '/sections/dashboard' }, // Default
        {
            path: '/sections/:name',
            redirect: '/sections/:name/dashboard',
            name: 'sections',
            components: {
                sections: load('templates/section/home')
            },
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    components: {
                        subSections: load('templates/section/dashboard')
                    }
                },
                {
                    path: 'records',
                    name: 'records',
                    components: {
                        subSections: load('templates/section/records')
                    }
                },
                {
                    path: 'statistics',
                    name: 'statistics',
                    components: {
                        subSections: load('templates/section/statistics')
                    }
                },
                {
                    path: 'reports',
                    name: 'reports',
                    components: {
                        subSections: load('templates/section/reports')
                    }
                },
                {
                    path: 'map',
                    name: 'map',
                    components: {
                        subSections: load('templates/section/map')
                    }
                }
            ]
        }
    ]
})
