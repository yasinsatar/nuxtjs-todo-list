<template>
    <div class="row">
    <TodoItem v-for="item in 5" :key="item"/>
  </div>
</template>

<script>
import TodoItem from "@/components/todo/TodoItem"
export default{
  components: {
    TodoItem
  }
}
</script>
