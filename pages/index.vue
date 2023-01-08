<template>
<div class="container main-container pt-5">
  <h3 class="text-center">Express.js ile ToDo App | Nuxt.js</h3>
  <TodoForm @addTodoEvent="addTodo($event)" />
  <h3 class="text-center mt-5 mb-3">Yapılacaklar Listesi</h3>
  <TodoList :todoList="todoList" />
  <!-- <UpdateTodo /> -->
  </div>
</template>

<script>
import TodoForm from '@/components/todo/TodoForm.vue'
import TodoList from '@/components/todo/TodoList.vue'
import UpdateTodo from '@/components/todo/UpdateTodo.vue'

export default {
 components:{
  TodoForm,
  TodoList,
  UpdateTodo
 },
 data(){
  return{

  }
 },
 methods:{
  addTodo(todo){
   return this.$store.dispatch("addTodo", todo)
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
