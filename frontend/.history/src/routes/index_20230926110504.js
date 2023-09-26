import {createRouter, createWebHistory} from 'vue-router'
import dashboard from '../views/DashBoard.vue'

const routes = [
    {
        path: '/',
        name: 'DashBoard',
        component: dashboard
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;