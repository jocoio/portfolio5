<template>
  <div id="grid-container" :style="container_style">
    <Block 
      class="block"
      v-bind:class="{'intro-style': introing, 'resize-style': resizing}"
      v-for="block in blocks"
      :key="block.id"
      :id="block.id"
      :ref="block.id"
    >
    </Block>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import anime from 'animejs/lib/anime.es';
import Block from './Block';
import { 
  reID,
  setBlocks,
  getRows,
  getCols,
  getNavIDs
} from '../grid';

export default {
  
  name: 'Grid',
  data: function () {
    return {
      // Grid stuff
      blocks: [],
      numCols: 0,
      numRows: 0,

      // Animation stuff
      animIntro: null,
      animTransition: null,
      animNav: null,
      
      // Timer / Interval stuff
      resizeTimer: null,
      randomAnimator: null
    }
  },
  components: {
    Block
  },
  computed: {
    ...mapState([
      'resizing',
      'introing',
      'transitioning',
      'navOpen',
      'naving'
    ]),
    container_style () {
      return  {
        gridTemplateRows: 'repeat(' + this.numRows + ', 1fr)',
        gridTemplateColumns: 'repeat(' + this.numCols + ', 1fr)'
      }
    },
  },
  watch: {
    numCols: function () {
      this.$store.commit('setCols', this.numCols);
    },
    numRows: function () {
      this.$store.commit('setRows', this.numRows);
    },
    introing: function () {
      if (!this.introing) {
        this.startRandomAnimator();
      }
    },
    resizing: function () {
      if (this.resizing) {
        anime.set('.block', {opacity: 1,});
        
        if (this.navOpen) {
          // anime.remove('.block');
          anime.set('#block_1', {width: '100%', height: '100%'})
          this.$store.commit('toggleNav');
        }

        clearInterval(this.randomAnimator);
      }
      else {
        this.startRandomAnimator();

      }
    },
    transitioning: function () {
      this.transitioning ? 
      this.initPlayTransition() :
      this.animTransition.reset();
    },
    navOpen() {
      if (this.navOpen) {
        this.initNav();
        this.animNav.play();
      }
      else {
        if (!this.resizing) {
          anime.set('#block_1', {width: '100%'})
          this.animNav.play();
        }
      } 
    },
  },
  mounted() {
    // Create the grid
    this.makeGrid();
    this.blocks = reID(this.blocks);

    // Run the intro
    setTimeout(() => {
      this.initIntro();
      this.animIntro.play();
    }, 500);

    // Register an event listener when the Vue component is ready
    window.addEventListener('resize', this.resizeGrid)

  },
  methods: {

    // ANIMATION INITIALIZATION //

    initIntro: function () {
      this.animIntro = anime.timeline({
        targets: '.block',
        easing: 'easeOutExpo',
        
        complete: () => {
          this.$store.commit("setIntroing", false);
          this.$store.commit("setMode", 'shapes');
        }
      })
      .add({
        borderColor: '#FFFFFF',
        borderWidth: '1px',
        duration: 750,
        delay: anime.stagger(130, {grid: [this.numCols, this.numRows], from: 0}),
      })
      .add({
        borderColor: 'rgba(255, 255, 255, 0)',
        borderWidth: '0px',
        duration: 750
      });
    },

    initPlayTransition: function () {
      this.animTransition = anime({
        targets: '.block',
        easing: 'easeOutExpo',
        autoplay: false,
        opacity: (el, i) => { return i !== 0 ? 0 : 1},
        duration: 250,
        delay: anime.stagger(75, {grid: [this.numCols, this.numRows], from: 0}),
        complete: () => {
          this.$store.dispatch('outroComplete');
          this.animTransition.reset();
        }
      });

      // this.animTransition.play();
    },

    initNav: function () {
      this.animNav = anime({
        targets: getNavIDs(this.numRows, this.numCols),
        easing: 'easeOutExpo',
        autoplay: false,
        opacity: (el, i) => { return i !== 0 ? 0 : 1},
        duration: 300,
        delay: anime.stagger(100, {grid: [3, this.numRows], from: 0}),
        complete: () => {
          this.animNav.reverse();
          this.handlePostNav();
          this.$store.dispatch('navComplete');
        }
      });
    },

    handlePostNav: function () {
      if (this.navOpen) {
        anime.set('#block_1', {width: '300%'});
      }
    },

    // Set the number of blocks, and row/col counts for window size
    makeGrid: function () {
      this.blocks = setBlocks(this.blocks);
      this.numCols = getCols();
      this.numRows = getRows();
    },

    // Called on every resize, multiple times per resize
    resizeGrid: function () {
      // Runs once at start of resizing
      if (!this.resizing) {
        this.$store.commit('setResizing', true);
      }

      // Runs once at end of resizing
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.$store.commit('setResizing', false);
        this.blocks = reID(this.blocks);
      }, 500);

      this.makeGrid();
    },

    // Chooses a random block child on interval and sends call to animate it
    startRandomAnimator: function () {
      let idx = 0;
      this.randomAnimator = setInterval(() => {
        idx = Math.floor(Math.random() * (this.numRows * this.numCols));
        if (idx > 1) this.$refs[idx][0].animate();
      }, 3000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #grid-container {
    display: grid;
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000000;
  }

  .block {
    border-style: solid;
    border-width: 0px;
    background-color: #000000; 
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: fit-content;
    min-height: fit-content;
  }

  .block.intro-style {
    border-color: #000000;
    border-width: 1px;
  }

  .block.resize-style {
    border-width: 1px !important;
    border: 1px solid #FFFFFF !important;
  }
</style>