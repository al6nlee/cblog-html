import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Manage from "@/views/manage/Manage.vue";
import UserManagement from "@/views/manage/UserManagement.vue";
import RoleManagement from "@/views/manage/RoleManagement.vue";


const router = createRouter({
    history: createWebHistory(),  // 路由的工作模式
    routes: [                     // 路由规则
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/manage',
            component: Manage,
            children: [
                {
                    path: 'auth/user',
                    name: 'UserManagement',
                    component: UserManagement,
                },
                {
                    path: 'auth/role',
                    name: 'RoleManagement',
                    component: RoleManagement,
                },
            ],
        }
    ]
})

export default router;