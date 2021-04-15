import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import NoteItem from '@/components/NoteItem.vue'

// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.component('note-item', NoteItem)
app.use(router)
app.mount('#app')
