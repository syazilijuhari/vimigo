import CustomerList from '../components/CustomerList'
import CustomerAdd from '../components/CustomerAdd'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'CustomerList',
        path: '/',
        component: CustomerList
    },

    {
        name: 'CustomerAdd',
        path: '/add',
        component: CustomerAdd
    },

    {
        name: 'ContactEdit',
        path: '/edit/:id',
        component: CustomerAdd
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;