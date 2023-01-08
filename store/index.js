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
        let findIndex = state.todoList.findIndex(t => t.id == todo.id)
        if (findIndex != -1) {
          state.todoList.splice(findIndex, 1, todo);
          //state.todoList[findIndex] = todo;
        }
      },
      deleteTodo(state, todo) {
        let findIndex = state.todoList.findIndex(t => t.id == todo.id)
        if (findIndex != -1) {
          state.todoList.splice(findIndex, 1);
        }
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        //Axios transactions...
        vuexContext.commit("setTodoList", [])
      },
      addTodo(vuexContext, todo) {
        //Axios transactions...
        vuexContext.commit("addTodo", todo)
      },
      updateTodo(vuexContext, todo) {
        //Axios transactions...
        vuexContext.commit("updateTodo", todo)
      },
      deleteTodo(vuexContext, todo) {
        //Axios transactions...
        vuexContext.commit("deleteTodo", todo)
      },
    },
    getters: {
      getTodoList(state){
        return state.todoList
      }
    }
  })

}

export default createStore
