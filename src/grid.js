"use strict";

// ---------- RESIZE HELPERS ---------- //

export function setBlocks (blocks) {

  let blocksNeeded = getCols() * getRows();

  // Not enough blocks
  if (blocksNeeded > blocks.length) {
    blocks = add(blocks, blocksNeeded - blocks.length);
  }
  // Too many blocks
  else if (blocks.length > blocksNeeded) {
    blocks = remove(blocks, blocks.length - blocksNeeded);
  }

  return blocks;
}

function add (blocks, amt) {
  for (let i = 0; i < amt; i++) {
    blocks.push({id: (Math.random() * 1000) + i});
  }
  return blocks;
}

function remove (blocks, amt) {
  for (let i = 0; i < amt; i++) {
    blocks.pop();
  }
  return blocks;
}


// ---------- GENERAL HELPERS ---------- //

// Reassign id numbers based on new set of blocks
export function reID (blocks) {
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].id = i + 1;
  }
  return blocks;
}

// Sets size range for blocks based on screen width and height
export function getBlockIdeal () {

  let width = window.innerWidth;

  if (width <= 450) {
    return 100;
  }
  else if (width < 1024) {
    return 125;
  }
  else if (width < 1440) {
    return 150;
  }
  else {
    return 200;
  }
}

export function getNavIDs (rows, cols) {
  let ids = [];
  for(let i = 0; i < rows * cols; i++) {
    if (i % cols < 3) {
      ids.push('#block_' + (i + 1))
    }
  }
  return ids;
}

export function getNavWidth () {
  if (window.innerWidth < 480) {
    return window.innerWidth;
  }
  else {
    return Math.floor(window.innerWidth * 3 / getCols())
  } 
}

// Gets number of columns needed based on current width
export function getCols () { 
  return Math.floor(window.innerWidth / getBlockIdeal());
}

// Gets number of rows needed based on current height
export function getRows () { 
  return Math.floor(window.innerHeight / getBlockIdeal());
}