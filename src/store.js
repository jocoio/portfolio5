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
    // Nav transition
    naving: false,


    // ----- NAVIGATION ----- //

    // # of rows nav will take up
    navRows: 3,
    // # of cols nav will take up
    navCols: 3,
    // Width of the nav
    // --> needs to be manually calculated for browser support
    navWidth: 0,
    // Is the nav open
    navOpen: false

  },
  getters: {},
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
    setNaving (state, bool) {
      state.naving = bool;
    },
    // ----- NAVIGATION ----- //
    setNavOpen (state, bool) {
      state.navOpen = bool;
    },
    toggleNav (state) {
      state.navOpen = !state.navOpen;
    },
    setNavWidth(state, width) {
      state.navWidth = width;
    }
  },
  actions : {
    // One time page intro done
    introComplete (context) {
      context.commit('setIntroing', false);
    },
    // Grid-wide transition done
    outroComplete (context) {
      context.commit('setMode', context.state.modes[Math.floor(Math.random() * 3)]);
      context.commit('setTransitioning', false);
    },
    // Nav transition done 
    navComplete (context) {
      context.commit('setNaving', false);
    },
    // Change nav state
    changeNav (context) {
      context.commit('setNaving', true);
      context.commit('toggleNav');
    },
  }
})