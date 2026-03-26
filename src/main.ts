import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { Home, MouseBalls, ScalingCircles, TestDoodle, WavingCircles } from './pages'
import './style.css'
import 'css-doodle'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/waving-circles', component: WavingCircles },
    { path: '/scaling-circles', component: ScalingCircles },
    { path: '/testdoodle', component: TestDoodle },
    { path: '/mouse-balls', component: MouseBalls },
  ],
})

const app = createApp(App)

app.use(router)
app.mount('#app')
