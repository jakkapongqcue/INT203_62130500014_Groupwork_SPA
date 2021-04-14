import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import NoteCard from '@/components/NoteCard.vue'

// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.component('note-card', NoteCard)
app.use(router)
app.mount('#app')
