import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'

//Views -- pages
import Login from '@/views/pages/Login'
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Register from '@/views/pages/Register'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    linkActiveClass: 'open active',
    routes: [
        {
            path: '/',
            redirect: '/dashboard',
            name: 'Home',
            component: Full,
            children: [
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                }
            ]
        },
        {
            path: '/pages',
            redirect: '/pages/p404',
            name: 'Pages',
            component: {
                render (c) { return c('router-view') }
            },
            children:[
                {
                    path: 'login',
                    name: 'Login',
                    component: Login
                },
                {
                    path: '404',
                    name: 'Page404',
                    component: Page404
                },
                {
                    path: '500',
                    name: 'Page500',
                    component: Page500
                },
                {
                    path: 'register',
                    name: 'Register',
                    component: Register
                }
            ]
        }
    ]
})
