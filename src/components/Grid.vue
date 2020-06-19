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
      // Grid container object
      // gridcont: null,
      blocks: [],
      // Resize timer
      resizeTimer: null
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
    // Start the 
    introing: function () {
      if (!this.introing) {
        this.startRandomAnimator();
      }
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
      introing: 'introing'
    })
  },
  mounted() {
    // Create the grid
    this.generateGrid();

    // Register an event listener when the Vue component is ready
    window.addEventListener('resize', this.resizeGrid)
    
    // Run the intro
    setTimeout(() => this.intro(), 500);
  },
  methods: {
    transition: function () {
      this.$store.commit('setTransitioning', true);
    },
    intro: function () {
      let vm = this;

      let introTL = anime.timeline({
        targets: '.block',
        easing: 'easeOutExpo',
        duration: 1000,
        complete: function () {
          vm.$store.commit("setIntroing", false);
          vm.$store.commit("setMode", 'solids');
        }
      })
      .add({
        borderColor: '#FFFFFF',
        borderWidth: '1px',
        duration: 750,
        delay: anime.stagger(50)
      })
      .add({
        borderColor: 'rgba(255, 255, 255, 0)',
        borderWidth: '0px',
        duration: 750
      });

      introTL.play();
    },
    // Chooses a random block child on interval and sends call to animate it
    startRandomAnimator: function () {
      let idx = 0;
      setInterval(() => {
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
          this.addCoumns(this.colsNeeded - this.numCols) :
          // Too many cols
          this.removeColumns(this.numCols - this.colsNeeded);

        this.numCols = this.colsNeeded;
      }

      // Rows
      if (this.rowsNeeded !== this.numRows) {
        this.rowsNeeded > this.numRows ? 
          // Not enough rows
          this.addRows(this.rowsNeeded - this.numRows) :
          // Too many rows
          this.removeRows(this.numRows - this.rowsNeeded);

        this.numRows = this.rowsNeeded;
      }
    },
    // ---------- RESIZE HELPERS ---------- //
    // Add row helper
    // amount (num): number of new rows to make
    addRows: function (amount) {
      for (let i = 0; i < this.numCols * amount; i++) {
        this.blocks.push({id: (Math.random() * 1000) + i});
      }
    },
    // Add column helper
    // amount (num): number of new columns to make
    addCoumns: function(amount) {
      for (let i = 0; i < this.numRows * amount; i++) {
        this.blocks.push({id: (Math.random() * 1000) + i});
      }
    },
    // Remove row helper
    // amount (num): number of rows to remove
    removeRows: function(amount) {
      for (let i = 0; i < this.numCols * amount; i++) {
        this.blocks.pop();
      }
    },
    // Remove row helper
    // amount (num): number of columns to remove
    removeColumns: function(amount) {
      for (let i = 0; i < this.numRows * amount; i++) {
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