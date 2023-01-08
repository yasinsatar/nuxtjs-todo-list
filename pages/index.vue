<template>
<div class="container main-container pt-5">
  <h3 class="text-center">Express.js with To-Do App | Nuxt.js</h3>
  <TodoForm @addTodoEvent="addTodo($event)" />
  <h3 class="text-center mt-5 mb-3">To-Do list</h3>
  <Alert v-if="todoList.length === 0" />
  <TodoList
   @deleteTodoEvent="deleteTodo($event)"
   :todoList="todoList" v-else  />

  <!-- <UpdateTodo /> -->
  </div>
</template>

<script>
import TodoForm from '@/components/todo/TodoForm.vue'
import TodoList from '@/components/todo/TodoList.vue'
import UpdateTodo from '@/components/todo/UpdateTodo.vue'
import Alert from '@/components/Alert.vue'

export default {
 components:{
  TodoForm,
  TodoList,
  UpdateTodo,
  Alert,
 },
 data(){
  return{

  }
 },
 methods:{
  addTodo(todo){
    this.$store.dispatch("addTodo", todo)
  },
  deleteTodo(todo){
    this.$store.dispatch("deleteTodo",todo)
  }
 },
 computed:{
  todoList(){
  return this.$store.getters.getTodoList
 }
 }
}
</script>

<style>


</style>
