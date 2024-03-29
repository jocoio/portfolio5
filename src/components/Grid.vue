<template>
  <div id="grid-container" :style="container_style" ref="grid">
    <Block
      class="block"
      v-bind:class="{ 'intro-style': !introd, 'resize-style': resizing }"
      v-for="block in blocks"
      :key="block.id"
      :id="block.id"
      :ref="block.id"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import anime from "animejs/lib/anime.es";
import Block from "./Block";
import {
  reID,
  setBlocks,
  getRows,
  getCols,
  getNavIDs,
  calculateNavWidth,
  calculateContentWidth,
} from "../grid";

export default {
  name: "Grid",
  data: function () {
    return {
      // Grid stuff
      blocks: [],

      // Animation stuff
      animIntro: null,
      animTransition: null,
      // Animation that's played to clear 3 columns for the nav
      animNav: null,

      // Timer / Interval stuff
      resizeTimer: null,
      randomAnimator: null,
    };
  },
  props: {
    mode: String,
  },
  components: {
    Block,
  },
  computed: {
    ...mapState([
      "rows",
      "cols",
      "resizing",
      "introd",
      "transitioning",
      "naving",
      "navOpen",
    ]),
    container_style() {
      return {
        gridTemplateRows: "repeat(" + this.rows + ", 1fr)",
        gridTemplateColumns: "repeat(" + this.cols + ", 1fr)",
      };
    },
  },
  watch: {
    resizing: function () {
      if (this.resizing) {
        clearInterval(this.randomAnimator);
        this.resetGrid();
      } else {
        this.$store.dispatch("initColors");
        if (this.mode === "home") {
          this.startRandomAnimator();
        }
      }
    },
    // Switching from one mode to another
    transitioning: function () {
      if (this.transitioning) {
        this.playTransition();
        this.clearRandomAnimator();
      } else {
        this.$store.dispatch("initColors");
        this.animTransition.reset();
        if (this.mode === "home") {
          this.restartRandomAnimator();
        }
      }
    },
    navOpen() {
      // Should be opened
      if (this.navOpen) {
        this.initNav();
        this.animNav.play();
      }
      // Should be closed
      else {
        if (!this.resizing && this.naving) {
          this.animNav.play();
        }
      }
    },
    mode() {
      this.$store.dispatch("changeMode", this.mode);
      if (this.mode === "letter") {
        this.$store.commit("setCurCompany", this.$route.name);
      } else {
        this.$store.commit("setCurCompany", "");
      }
    },
  },
  created() {},
  mounted() {
    // Create the grid
    this.makeGrid();
    this.blocks = reID(this.blocks);
    this.$store.commit("setNavWidth", calculateNavWidth());
    this.$store.commit("setContentWidth", calculateContentWidth());
    this.$store.commit("setMobile", this.cols < 5);

    // Animation intro
    setTimeout(() => {
      this.initIntro();
      this.animIntro.play();
    }, 500);

    // Letter mode initing
    if (this.mode === "letter") {
      this.$store.commit("setCurCompany", this.$route.name);
      setTimeout(() => {
        this.$store.dispatch("changeNav");
      }, 5000);
    }

    // Shapes, Photo mode initing
    this.$store.dispatch("initShapes");
    this.$store.dispatch("shuffleShapes");
    this.$store.dispatch("initPhotos");
    this.$store.dispatch("shufflePhotos");
    this.$store.dispatch("initColors");

    // Resizer & Random Animator
    window.addEventListener("resize", this.resizeGrid);
    window.addEventListener("blur", this.clearRandomAnimator);
    window.addEventListener("focus", this.restartRandomAnimator);
  },
  beforeDestroy() {
    clearInterval(this.randomAnimator);
  },
  methods: {
    // ANIMATION INITIALIZATION //
    initIntro: function () {
      this.animIntro = anime
        .timeline({
          targets: ".block",
          easing: "easeOutExpo",

          complete: () => {
            this.$store.commit("setIntrod", true);
            this.$store.commit("setMode", this.mode ? this.mode : "home");
            if (this.mode === "home") {
              setTimeout(this.startRandomAnimator(), 1000);
            }
          },
        })
        .add({
          outlineColor: "#FFFFFF",
          outlineWidth: "1px",
          duration: 750,
          delay: anime.stagger(100, {
            grid: [this.cols, this.rows],
            from: 0,
          }),
        })
        .add({
          outlineColor: "rgba(255, 255, 255, 0)",
          outlineWidth: "0px",
          duration: 750,
        });
    },

    initNav: function () {
      // Different Nav transition behavior for projects (& eventually about)
      if (this.mode === "projects" || this.mode === "about") {
        this.animNav = anime
          .timeline({
            targets: ["#projects", "#about"],
            easing: "easeInOutExpo",
            autoplay: false,
            complete: () => {
              this.animNav.reverse();
              this.$store.dispatch("navComplete");
            },
            translateX: 300,
            opacity: 0.25,
            pointerEvents: "none",
            duration: 800,
          })
          .add({
            targets: "#action-button",
            opacity: 0.25,
          });
      }
      // Default Nav behavior
      else {
        // Make 3 rows of blocks 0 opacity
        this.animNav = anime({
          targets: getNavIDs(this.rows, this.cols),
          easing: "easeOutExpo",
          autoplay: false,
          opacity: [
            1,
            (el, i) => {
              return i !== 0 ? 0 : 1;
            },
          ],
          duration: 300,
          delay: anime.stagger(100, { grid: [3, this.rows], from: 0 }),
          complete: () => {
            this.animNav.reverse();
            this.$store.dispatch("navComplete");
          },
        });
      }
    },

    playTransition: function () {
      this.animTransition = anime({
        targets: ".block",
        easing: "easeOutExpo",
        autoplay: false,
        opacity: (el, i) => {
          return i !== 0 ? 0 : 1;
        },
        duration: 250,
        delay: anime.stagger(75, { grid: [this.cols, this.rows], from: 0 }),
        complete: () => {
          this.$store.dispatch("outroComplete");
          this.resetGrid();
        },
      });

      this.animTransition.play();
    },

    // Reset the grid blocks from any animated state
    resetGrid() {
      anime.remove(".block");
      anime.set(".block", { opacity: 1 });
      this.$store.commit("setNavOpen", false);
      if (this.mode === "home" || this.mode === "letter") {
        this.$store.dispatch("shuffleShapes");
      } else if (this.mode === "photos") {
        this.$store.dispatch("shufflePhotos");
      }
    },

    // Set the number of blocks, and row/col counts for window size
    makeGrid: function () {
      this.$refs.grid.style.height = window.innerHeight + "px";
      this.blocks = setBlocks(this.blocks);
      this.$store.commit("setCols", getCols());
      this.$store.commit("setRows", getRows());
    },

    // Called on every resize, multiple times per resize
    resizeGrid: function () {
      // Runs once at start of resizing
      if (!this.resizing) {
        this.$store.commit("setResizing", true);
      }

      // Runs once at end of resizing
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.$store.commit("setResizing", false);
        this.$store.commit("setNavWidth", calculateNavWidth());
        this.$store.commit("setContentWidth", calculateContentWidth());
        this.$store.commit("setMobile", this.cols < 5);
        this.blocks = reID(this.blocks);
      }, 500);

      this.makeGrid();
    },

    // Chooses a random block child on interval and sends call to animate it
    startRandomAnimator: function () {
      let idx = 0;
      this.randomAnimator = setInterval(() => {
        idx = Math.floor(Math.random() * (this.rows * this.cols));
        if (idx > 1) this.$refs[idx][0].animate();
      }, 3000);
    },
    clearRandomAnimator: function () {
      clearInterval(this.randomAnimator);
    },
    restartRandomAnimator: function () {
      if (this.introd && this.mode === "home") {
        this.startRandomAnimator();
      }
    },
  },
};
</script>

<style>
#grid-container {
  display: grid;
  background-color: #000000;
}

.block {
  outline-style: solid;
  outline-width: 0px;
  background-color: #000000;
  display: flex;
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  width: 100%;
}

.block.intro-style {
  outline-color: #000000;
  outline-width: 1px;
}

.block.resize-style {
  outline-width: 1px !important;
  outline: 1px solid #ffffff !important;
}
</style>
