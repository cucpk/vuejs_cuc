import Vue from 'vue'
import Vuex from 'vuex'
import baseLayout from './modules/baseLayout'
import home from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    baseLayout,
    home
  }
})

export default store