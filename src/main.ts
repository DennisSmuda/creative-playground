import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { Home, TestDoodle, TestP5 } from './pages'
import './style.css'
import 'css-doodle'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/testp5', component: TestP5 },
    { path: '/testdoodle', component: TestDoodle },
  ],
})

const app = createApp(App)

app.use(router)
app.mount('#app')
