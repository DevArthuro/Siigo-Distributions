import {createRouter, createWebHistory} from 'vue-router';
import dashboard from '../views/DashBoard.vue';
import wathchMaps from '../views/WhatchSpecifictMap.vue'

const routes = [
    {
        path: '/',
        name: 'DashBoard',
        component: dashboard
    },
    {
        path: '/ver-mapas/',
        name: 'Watch-Maps',
        component: wathchMaps
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;