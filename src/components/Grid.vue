<template onload="generateGrid();">
  <div id="grid-container" :style="container_style">
    <Block 
      v-for="block in blocks"
      :id="block.id" 
      :key="block.id"
      :color="randomColor()"
    >
    </Block>
  </div>
</template>

<script>

// import anime from 'animejs';
import Block from './Block';

export default {
  
  name: 'Grid',
  data: function () {
    return {
      colors: ['#dbacac', '#a2c9aa', '#909eb4', '#b06262', '#605e5e', '#2f86ff', '#ffa490'],
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
      // Boolean to prevent overcalling processes while resizing
      resizing: false,
      // Resize timer
      resizeTimer: null
    }
  },
  components: {
    Block
  },
  computed: {
    container_style () {
      return  {
        gridTemplateRows: 'repeat(' + this.numRows + ', 1fr)',
        gridTemplateColumns: 'repeat(' + this.numCols + ', 1fr)'
      }
    },
    // block_style () {
    //   return {
    //     backgroundColor: this.randomColor()
    //   }
    // }
  },
  mounted() {
    this.generateGrid();
    // Register an event listener when the Vue component is ready
    window.addEventListener('resize', this.resizeGrid)
  },
  methods: {
    // Initial grid generation
    // Creates even square blocks according to width & height
    generateGrid: function () {

      this.setBlockSize();

      this.numCols = Math.floor(window.innerWidth / this.BLOCKIDEAL);
      this.numRows = Math.floor(window.innerHeight / this.BLOCKIDEAL);

      for (let i = 0; i < this.numRows * this.numCols; i++) {
        this.blocks.push({id: i + 1});
      }

      // The view model
      // var vm = this;

      // Animate blocks in
      setTimeout(() => {
        // for (let block of vm.gridcont.children) {
        //   block.classList.remove('mono');
        // }
        // this.animation = anime({
        //   targets: '.block',
        //   duration: 10000,
        //   backgroundColor: '#000000',
        //   delay: anime.stagger(100)
        // });   
      }, 1500);
    },
    // ---------- RESIZE ---------- //
    // Called on every resize, multiple times per resize
    resizeGrid: function () {

      // The view model
      var vm = this;

      // Runs once at start of resizing
      if (!this.resizing) {
        this.resizing = true;
        // for (let block of this.gridcont.children) {
        //   block.classList.add('mono');
        // }
      }

      // Runs once at end of resizing
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        vm.resizing = false;
        // for (let block of vm.gridcont.children) {
        //   block.classList.remove('mono');
        // }
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
        // this.setGridTemplateCols();
      }

      // Rows
      if (this.rowsNeeded !== this.numRows) {
        this.rowsNeeded > this.numRows ? 
          // Not enough rows
          this.addRows(this.rowsNeeded - this.numRows) :
          // Too many rows
          this.removeRows(this.numRows - this.rowsNeeded);

        this.numRows = this.rowsNeeded;
        // this.setGridTemplateRows();
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

      let smallest = Math.min(window.innerWidth, window.innerHeight);

      if (smallest <= 450) {
        this.BLOCKIDEAL = 75;
      }
      else if (smallest < 600) {
        this.BLOCKIDEAL = 100;
      }
      else if (smallest < 1000) {
        this.BLOCKIDEAL = 175;
      }
      else {
        this.BLOCKIDEAL = 200;
      }
    },
    // Returns random color from colors list
    randomColor: function () {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
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
</style>