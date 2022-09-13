import { createApp } from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'
// SwiperClass.use([/* swiper modules... */])
import './style.css'
import './index.css'
import './assets/fonts/iconfont/iconfont.css'
import App from './App.vue'
import router from './router'

createApp(App).use(VueAwesomeSwiper).use(router).mount('#app')
