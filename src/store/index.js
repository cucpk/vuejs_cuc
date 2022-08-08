import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // Khai báo global state
    // count: 1,
    // todos: [
    //   { id: 1, text: 'task 1', done: true },
    //   { id: 2, text: 'task 2', done: false },
    //   { id: 3, text: 'task 3', done: true },
    //   { id: 4, text: 'task 4', done: true },
    // ]
  },
  getters: {
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done)
    // },
    // getTodoById: (state) => (index) => {
    //   return state.todos.find(todo => todo.id === index)
    // }
  },
  
  mutations: {
    // Khai báo mutations
    // increment(state, data){
    //   state.count += data.number;
    //   console.log(data.name)
    // }
  }
})

export default store