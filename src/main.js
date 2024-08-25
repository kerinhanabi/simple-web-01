import { createApp } from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import FoodItem from './components/FoodItem.vue'
import TodoItem from './components/TodoItem.vue'

const app = createApp(App)
app.component('todo-item', TodoItem)
app.component('food-item', FoodItem)
app.mount('#app')

//createApp(App).mount('#app')
=======

createApp(App).mount('#app')
>>>>>>> 44c470e (simple-web-01 2nd commit)
