import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)

// 使用路由
import router from './router' // 引入路由
app.use(router)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

import {createPinia} from 'pinia'

const pinia = createPinia()
app.use(pinia)

// 挂载应用到 DOM
app.mount('#app')
