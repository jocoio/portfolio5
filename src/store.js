import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {    
    // Global grid mode
    mode: 'intro',
    // Pause toggle for micro animation cycles
    paused: false,
    // Window resizing?
    resizing: false,
    // Large scale transitions
    transitioning: false

  },
  getters: {
    mode(state) {
      return state.mode
    },
    paused(state) {
      return state.paused;
    },
    resizing(state) {
      return state.resizing;
    },
    transitioning(state) {
      return state.transitioning;
    }
  },
  mutations: {
    setMode (state, mode) {
      state.mode = mode;
    },
    togglePaused (state) {
      state.paused = state.paused ? false : true;
    },
    setResizing (state, bool) {
      state.resizing = bool;
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