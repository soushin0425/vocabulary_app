import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
//import Project from './components/project_page/ProjectPage.vue'
import Project from './ProjectPage.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: Home,
        },
        {
            path: '/list/:project',
            name: 'list',
            component: Project,
            props: true
            
        }
    ]
})