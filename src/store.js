import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'underscore';

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
    modes: ['shapes', 'photos'],
    // Next mode to load
    next: 0,

    // ----- ANIMATION FLAGS ----- //

    // Initial intro animation
    introd: false,
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
    navOpen: false,

    // ----- SHAPES MODE ----- //
    // Array of ints representing available photos
    // Will be shuffled
    shapes: [],
    // Number of available photos
    numShapes: 56,


    // ----- PHOTO MODE ----- //

    // Array of ints representing available photos
    // Will be shuffled
    photos: [],
    // Number of available photos
    numPhotos: 100
  },
  getters: {
    blockWidth (state) {
      return Math.floor(window.innerWidth / state.cols);
    },
    blockHeight (state) {
      return Math.floor(window.innerHeight / state.rows);
    },
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
    setNext(state, next) {
      state.next = next;
    },
    // ----- ANIMATION FLAGS ----- //
    setIntrod (state, bool) {
      state.introd = bool;
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
    },
    // ----- SHAPES MODE ----- //
    setShapes (state, arr) {
      state.shapes = arr;
    },
    // ----- PHOTO MODE ----- //
    setPhotos (state, arr) {
      state.photos = arr;
    }
  },
  actions : {
    // One time page intro done
    introComplete (context) {
      context.commit('setIntrod', true);
    },
    // Grid-wide transition done
    outroComplete (context) {
      context.commit('setMode', context.state.next);
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
    changeMode (context, mode) {
      context.commit('setTransitioning', true);
      context.commit('setNext', mode);
    },
    // ----- SHAPES MODE ----- //
    initShapes({ commit, state }) {
      let arr = [];
      for (let i = 0; i < state.numShapes; i++) {
        arr.push(i);
      }
      commit('setShapes', arr);
    },
    shuffleShapes ({ commit, state }) {
      let arr = _.shuffle(state.shapes);
      commit('setShapes', arr);
    },
    // ----- PHOTO MODE ----- //
    initPhotos({ commit, state }) {
      let arr = [];
      for (let i = 0; i < state.numPhotos; i++) {
        arr.push(i);
      }
      commit('setPhotos', arr);
    },
    shufflePhotos ({ commit, state }) {
      let arr = _.shuffle(state.photos);
      commit('setPhotos', arr);
    }
  }
})