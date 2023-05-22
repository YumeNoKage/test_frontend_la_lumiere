import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// styles bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// global components
import Loading from '@/components/Loading/Loading.vue'
import Navigation from '@/components/Navigation/Navigation.vue'

const app = createApp(App)

app.component('Loading', Loading)
app.component('Navigation', Navigation)

app.use(store)
app.use(router)
app.mount('#app')
