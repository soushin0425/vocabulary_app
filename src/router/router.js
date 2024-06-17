import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import Project from '../pages/ProjectPage.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: Home,
        },
        {
            path: '/list/:project_id',
            name: 'list',
            component: Project,
            props: true
            
        }
    ]
})