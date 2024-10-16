import {createApp} from 'vue'
import App from './App.vue'
import router from './router' // 引入路由

const app = createApp(App)

// 使用路由
app.use(router)

// 挂载应用到 DOM
app.mount('#app')
