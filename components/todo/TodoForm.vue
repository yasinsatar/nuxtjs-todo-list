<template>
  <div class="row">
    <div class="col-md-8 col-xs-12 offset-md-2  mt-5 d-flex">
      <input v-model="todoText" ref="todoTextInput" type="text" class="form-control form-control-lg mr-1"
        :class="{ 'is-invalid': isInvalid }">
      <button @click="addTodo" class="btn btn-outline-dark">Add</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoText: "",
      isInvalid: false,
    }
  },
  methods: {
    addTodo() {
      if (this.todoText !== "") {
        this.isInvalid = false;
        this.$emit("addTodoEvent", this.todoText)
        this.todoText = "";
        this.$nextTick(() => this.$refs.todoTextInput.focus())
      } else {
        this.isInvalid = true;
      }
    }
  }
}
</script>
