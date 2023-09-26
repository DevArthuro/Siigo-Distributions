import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Manage to routes 
import routes from './routes'

// Import libraries to bootstrap in the folder node_modules 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

// Manage central for components 
import {createPinia} from 'pinia'
import persistence from 'pinia-plugin-persistence'

const pinia = createPinia()

pinia.use()

const app = createApp(App)

app.use(routes)

app.mount('#app')
