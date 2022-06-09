import { createApp } from 'vue'
import App from './App.vue'

import routes from './routes/routes'
import Paginate from "vuejs-paginate-next";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'


createApp(App).use(routes).use(Paginate).mount('#app')
