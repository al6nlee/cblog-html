import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'


const router = createRouter({
    history: createWebHistory(),  // 路由的工作模式
    routes: [                     // 路由规则
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
    ]
})

export default router;