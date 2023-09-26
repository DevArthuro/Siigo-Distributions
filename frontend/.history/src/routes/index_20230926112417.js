import {createRouter, createWebHistory} from 'vue-router';
import dashboard from '../views/DashBoard.vue';

const routes = [
    {
        path: '/',
        name: 'DashBoard',
        component: dashboard
    },
    {
        path: '/ver-mapas/',
        name: 'Watch-Maps',
        component: 
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;