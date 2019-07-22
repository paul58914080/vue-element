import Vue from 'vue'
import CreateTodoElement from './components/CreateTodoElement.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(CreateTodoElement),
}).$mount('#create-todo-element')
