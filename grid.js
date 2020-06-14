"use strict";

var BLOCKIDEAL = 100;

const colors = [
  '#dbacac',
  '#a2c9aa',
  '#909eb4',
  '#b06262',
  '#605e5e',
  '#2f86ff',
  '#ffa490'
]

// Current num of rows and columns in grid
var numCols = 0;
var numRows = 0;

// Placeholders that get calculated on resize
var colsNeeded = 0;
var rowsNeeded = 0;

// Grid container object
var gridcont = null;
var resizing = false;

// Resize timer
var resizeTimer;

// Initial grid generation
// Creates even square blocks according to width & height
function generateGrid () {

  gridcont = document.getElementById('grid-container');

  setBlockSize();

  numCols = Math.floor(window.innerWidth / BLOCKIDEAL);
  numRows = Math.floor(window.innerHeight / BLOCKIDEAL);

  setGridTemplateCols();
  setGridTemplateRows();

  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      let divy = createDivy();
      divy.id = (numCols * r) + c + 1;
      gridcont.appendChild(divy);
    }
  }

  // Animate blocks in
  setTimeout(function() {
    for (let block of gridcont.children) {
      block.classList.remove('mono');
    }
  }, 1500);
}

// ---------- RESIZE ---------- //

// Called on every resize, multiple times per resize
function resizeGrid () {

  // Runs once at start of resizing
  if (!resizing) {
    resizing = true;
    for (let block of gridcont.children) {
      block.classList.add('mono');
    }
  }

  // Runs once at end of resizing
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    resizing = false;
    for (let block of gridcont.children) {
      block.classList.remove('mono');
    }
    reID();
  }, 500);

  setBlockSize();

  colsNeeded = Math.floor(window.innerWidth / BLOCKIDEAL);
  rowsNeeded = Math.floor(window.innerHeight / BLOCKIDEAL);
  
  // Columns
  if (colsNeeded !== numCols) {
    colsNeeded > numCols ? 
      // Not enough cols
      addCoumns(colsNeeded - numCols) :
      // Too many cols
      removeColumns(numCols - colsNeeded);

    numCols = colsNeeded;
    setGridTemplateCols();
  }

  // Rows
  if (rowsNeeded !== numRows) {
    rowsNeeded > numRows ? 
      // Not enough rows
      addRows(rowsNeeded - numRows) :
      // Too many rows
      removeRows(numRows - rowsNeeded);

    numRows = rowsNeeded;
    setGridTemplateRows();
  }
}

// ---------- RESIZE HELPERS ---------- //

// Add row helper
// amount (num): number of new rows to make
function addRows(amount) {
  for (let i = 0; i < numCols * amount; i++) {
    gridcont.appendChild(createDivy());
  }
}

// Add column helper
// amount (num): number of new columns to make
function addCoumns(amount) {
  for (let i = 0; i < numRows * amount; i++) {
    gridcont.appendChild(createDivy());
  }
}

// Remove row helper
// amount (num): number of rows to remove
function removeRows(amount) {
  for (let i = 0; i < numCols * amount; i++) {
    gridcont.removeChild(gridcont.children[0]);
  }
}

// Remove row helper
// amount (num): number of columns to remove
function removeColumns(amount) {
  for (let i = 0; i < numRows * amount; i++) {
    gridcont.removeChild(gridcont.children[0]);
  }
}

// Reassign id numbers based on new set of blocks
function reID() {
  let idx = 0;
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      idx = (numCols * r) + c;
      gridcont.children[idx].id = idx + 1;
    }
  }
}

// ---------- GENERAL HELPERS ---------- //

// Generates new block div
function createDivy() {
  let divy = document.createElement('div');
  divy.classList.add('block');
  divy.classList.add('mono');
  divy.style.width = '100%';
  divy.style.height = '100%';
  divy.style.backgroundColor = randomColor();
  return divy;
}

// Update CSS grid row layout
function setGridTemplateRows () {
  gridcont.style.gridTemplateRows = 'repeat(' + numRows + ', 1fr)';
}

// Update CSS grid column layout 
function setGridTemplateCols () {
  gridcont.style.gridTemplateColumns = 'repeat(' + numCols + ', 1fr)';
}

// Sets size range for blocks based on screen width and height
function setBlockSize () {

  let smallest = Math.min(window.innerWidth, window.innerHeight);
  console.log(smallest);

  if (smallest <= 450) {
    BLOCKIDEAL = 50;
  }
  else if (smallest < 600) {
    BLOCKIDEAL = 100;
  }
  else if (smallest < 1000) {
    BLOCKIDEAL = 175;
  }
  else {
    BLOCKIDEAL = 200;
  }
}

// Returns random color from colors list
function randomColor () {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Hookup to call resizeGrid on resize
window.onresize = resizeGrid;