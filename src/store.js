import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {   
    // Number of rows
    rows: 0,
    // Number of cols
    cols: 0,
    // Global grid mode
    mode: 'intro',
    // Window resizing?
    resizing: false,
    // Initial intro animation
    introing: true,
    // Large scale transitions
    transitioning: false
  },
  getters: {
    rows(state) {
      return state.rows;
    },
    cols(state) {
      return state.cols;
    },
    mode(state) {
      return state.mode;
    },
    resizing(state) {
      return state.resizing;
    },
    introing(state) {
      return state.introing;
    },
    transitioning(state) {
      return state.transitioning;
    }
    
  },
  mutations: {
    setRows (state, rows) {
      state.rows = rows;
    },
    setCols (state, cols) {
      state.cols = cols;
    }, 
    setMode (state, mode) {
      state.mode = mode;
    },
    setResizing (state, bool) {
      state.resizing = bool;
    },
    setIntroing (state, bool) {
      state.introing = bool;
    },
    setTransitioning (state, bool) {
      state.transitioning = bool
    }
  },
  actions : {
    outroComplete(context) {
      context.commit('setMode', 'mono')
    }
  }
})