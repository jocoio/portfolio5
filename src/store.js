import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {   

    // ----- GRID ----- //

    // Number of rows
    rows: 0,
    // Number of cols
    cols: 0,


    // ----- MODES ----- // 

    // Global grid mode
    mode: 'intro',
    // Array of available grid modes
    modes: ['solids', 'mono', 'shapes'],


    // ----- ANIMATION FLAGS ----- //

    // Initial intro animation
    introing: true,
    // Window resizing?
    resizing: false,
    // Mode transition
    transitioning: false,


    // ----- NAVIGATION ----- //

    navOpen: false

  },
  getters: {
    // ----- GRID ----- //
    rows(state) {
      return state.rows;
    },
    cols(state) {
      return state.cols;
    },
    // ----- MODE ----- //
    mode(state) {
      return state.mode;
    },
    // ----- ANIMATION FLAGS ----- //
    introing(state) {
      return state.introing;
    },
    resizing(state) {
      return state.resizing;
    },
    transitioning(state) {
      return state.transitioning;
    },
    // ----- NAVIGATION ----- //
    navOpen(state) {
      return state.navOpen;
    }
  },
  mutations: {
    // ----- GRID ----- //
    setRows (state, rows) {
      state.rows = rows;
    },
    setCols (state, cols) {
      state.cols = cols;
    }, 
    // ----- MODE ----- //
    setMode (state, mode) {
      state.mode = mode;
    },
    // ----- ANIMATION FLAGS ----- //
    setIntroing (state, bool) {
      state.introing = bool;
    },
    setResizing (state, bool) {
      state.resizing = bool;
    },
    setTransitioning (state, bool) {
      state.transitioning = bool
    },
    // ----- NAVIGATION ----- //
    setNavOpen (state, bool) {
      state.navOpen = bool;
    }
  },
  actions : {
    // One time page intro done
    introComplete(context) {
      context.commit('setIntroing', false);
    },
    // Grid-wide transition done
    outroComplete(context) {
      context.commit('setMode', context.state.modes[Math.floor(Math.random() * 3)]);
      context.commit('setTransitioning', false);
    }
  }
})