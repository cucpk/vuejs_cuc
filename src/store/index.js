import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    carts: [
      {
        id: 1,
        name: 'iPhone 12 Pro Max Chính Hãng',
        image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
        price: 32990000,
        quantity: 566,
      },
      {
        id: 2,
        name: 'iPhone 12 Chính Hãng (VN/A)',
        image: '',
        price: 21790000,
        quantity: 123,
      },
      {
        id: 3,
        name: 'iPhone 11 Chính hãng',
        image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
        price: 16690000,
        quantity: 0,
      },
      {
        id: 4,
        name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
        image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
        price: 12190000,
        quantity: 1023,
      },
      {
        id: 5,
        name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
        image: '',
        price: 26500000,
        quantity: 6,
      }
    ]
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