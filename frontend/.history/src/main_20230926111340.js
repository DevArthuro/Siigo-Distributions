import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Manage to routes 
import routes from './routes'

// Import libraries to bootstrap in the folder node_modules 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'


const app = createApp(App)

app.use(routes)

app.mount('#app')
