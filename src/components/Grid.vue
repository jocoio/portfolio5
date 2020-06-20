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

import { mapGetters } from 'vuex';
import anime from 'animejs/lib/anime.es';
import Block from './Block';

export default {
  
  name: 'Grid',
  data: function () {
    return {
      BLOCKIDEAL: 100,
      // Current num of rows and columns in grid
      numCols: 0,
      numRows: 0,
      // Placeholders that get calculated on resize
      colsNeeded: 0,
      rowsNeeded: 0,
      // Master block array
      blocks: [],
      // intro animation
      introTL: null,
      staggerTL: null,
      // Timeout for when user is done resizing
      resizeTimer: null,
      // Interval to randomly animate a grid block
      randomAnimator: null
    }
  },
  components: {
    Block
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
        clearInterval(this.randomAnimator);
      }
      else {
        this.startRandomAnimator();
      }
    },
    transitioning: function () {
      this.transitioning ? 
      this.stagger() :
      this.staggerTL.reset();
    }
  },
  computed: {
    container_style () {
      return  {
        gridTemplateRows: 'repeat(' + this.numRows + ', 1fr)',
        gridTemplateColumns: 'repeat(' + this.numCols + ', 1fr)'
      }
    },
    ...mapGetters({
      rows: 'rows',
      cols: 'cols',
      resizing: 'resizing',
      introing: 'introing',
      transitioning: 'transitioning'
    })
  },
  mounted() {
    // Create the grid
    this.generateGrid();
    
    // Run the intro
    setTimeout(() => {
      this.intro();
    }, 500);

    // Register an event listener when the Vue component is ready
    window.addEventListener('resize', this.resizeGrid)
  },
  methods: {
    stagger: function () {
      this.staggerTL = anime({
        targets: '.block',
        easing: 'easeOutExpo',
        autoplay: false,
        opacity: (el, i) => { return i !== 0 ? 0 : 1},
        duration: 400,
        delay: anime.stagger(100, {grid: [this.numCols, this.numRows], from: 0}),
        complete: () => {
          this.$store.dispatch('outroComplete');
          this.staggerTL.reset();
        }
      });

      this.staggerTL.play();
    },
    intro: function () {
      let vm = this;

      this.introTL = anime.timeline({
        targets: '.block',
        easing: 'easeOutExpo',
        
        complete: function () {
          vm.$store.commit("setIntroing", false);
          vm.$store.commit("setMode", 'solids');
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

      this.introTL.play();
    },
    // Chooses a random block child on interval and sends call to animate it
    startRandomAnimator: function () {
      let idx = 0;
      this.randomAnimator = setInterval(() => {
        idx = Math.floor(Math.random() * (this.rows * this.cols));
        if (idx > 1) this.$refs[idx][0].animate();
      }, 1000)
    },
    // Initial grid generation
    // Creates even square blocks according to width & height
    generateGrid: function () {

      this.setBlockSize();

      this.numCols = Math.floor(window.innerWidth / this.BLOCKIDEAL);
      this.numRows = Math.floor(window.innerHeight / this.BLOCKIDEAL);

      for (let i = 0; i < this.numRows * this.numCols; i++) {
        this.blocks.push({id: i + 1});
      }
    },
    // ---------- RESIZE ---------- //
    // Called on every resize, multiple times per resize
    resizeGrid: function () {

      // The view model
      var vm = this;

      // Runs once at start of resizing
      if (!this.resizing) {
        this.$store.commit('setResizing', true);
      }

      // Runs once at end of resizing
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        vm.$store.commit('setResizing', false);
        vm.reID();
      }, 500);

      this.setBlockSize();

      this.colsNeeded = Math.floor(window.innerWidth / this.BLOCKIDEAL);
      this.rowsNeeded = Math.floor(window.innerHeight / this.BLOCKIDEAL);
      
      // Columns
      if (this.colsNeeded !== this.numCols) {
        this.colsNeeded > this.numCols ? 
          // Not enough cols
          this.add((this.colsNeeded - this.numCols) * this.numRows) :
          // Too many cols
          this.remove((this.numCols - this.colsNeeded) * this.numRows);

        this.numCols = this.colsNeeded;
      }

      // Rows
      if (this.rowsNeeded !== this.numRows) {
        this.rowsNeeded > this.numRows ? 
          // Not enough rows
          this.add((this.rowsNeeded - this.numRows) * this.numCols) :
          // Too many rows
          this.remove((this.numRows - this.rowsNeeded) * this.numCols);

        this.numRows = this.rowsNeeded;
      }
    },
    // ---------- RESIZE HELPERS ---------- //
    // Add row helper
    // amt (num): number of blocks to make
    add: function (amt) {
      for (let i = 0; i < amt; i++) {
        this.blocks.push({id: (Math.random() * 1000) + i});
      }
    },
    // Remove row helper
    // amt (num): number of blocks to remove
    remove: function(amt) {
      for (let i = 0; i < amt; i++) {
        this.blocks.pop();
      }
    },
    // Reassign id numbers based on new set of blocks
    reID: function () {
      for (let i = 0; i < this.blocks.length; i++) {
        this.blocks[i].id = i + 1;
      }
    },
    // ---------- GENERAL HELPERS ---------- //
    // Sets size range for blocks based on screen width and height
    setBlockSize: function () {

      if (window.innerWidth <= 450) {
        this.BLOCKIDEAL = 75;
      }
      else if (window.innerWidth < 1440) {
        this.BLOCKIDEAL = 125;
      }
      else if (window.innerWidth < 2160) {
        this.BLOCKIDEAL = 175;
      }
      else {
        this.BLOCKIDEAL = 200;
      }
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