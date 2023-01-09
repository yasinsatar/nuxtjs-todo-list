import Vuex from "vuex"


const createStore = () => {
  return new Vuex.Store({
    state: {
      todoList: []
    },
    mutations: {
      setTodoList(state, todoList) {
        state.todoList = todoList
      },
      addTodo(state, todo) {
        state.todoList.push(todo);
      },
      updateTodo(state, todo) {
        let findIndex = state.todoList.findIndex(t => t._id == todo._id)
        if (findIndex != -1) {
          state.todoList.splice(findIndex, 1, todo);
          //state.todoList[findIndex] = todo;
        }
      },
      deleteTodo(state, todo) {
        let findIndex = state.todoList.findIndex(t => t._id == todo._id)
        if (findIndex != -1) {
          state.todoList.splice(findIndex, 1);
        }
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        //Axios transactions...
        return context.$axios.get("/get-all")
        .then(response =>{
          vuexContext.commit("setTodoList", response.data.todoList)
        })

      },
      addTodo(vuexContext, todo) {
        //Axios transactions...
        this.$axios.post("/save", { todoText: todo })
          .then(response => {
            let newTodo = {
              _id: response.data.todo._id,
              text: todo
            }
            vuexContext.commit("addTodo", newTodo)
          })


      },
      updateTodo(vuexContext, updatedTodo) {
        //Axios transactions...
        this.$axios.put("/update", {todo: updatedTodo})
        .then(response => {
          vuexContext.commit("updateTodo", updatedTodo)
        })

      },
      deleteTodo(vuexContext, todo) {
        //Axios transactions...
        this.$axios.delete("/delete",{data: {todo: todo}})
        .then(response =>{
            vuexContext.commit("deleteTodo", todo)
        })
      },
    },
    getters: {
      getTodoList(state) {
        return state.todoList
      }
    }
  })

}

export default createStore
