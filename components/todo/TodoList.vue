<template>
    <div class="row">
    <TodoItem
    v-for="item in todoList"
    :key="item._id"
    :todo="item"
    @deleteTodoEvent="$emit('deleteTodoEvent',$event)"
    @updateTodoEvent="$emit('updateTodoEvent',$event)"
    />
  </div>
</template>

<script>
import TodoItem from "@/components/todo/TodoItem"
export default{
  components: {
    TodoItem
  },
  props:{
    todoList: {
      type: Array,
      required:true,
    }
  }
}
</script>
