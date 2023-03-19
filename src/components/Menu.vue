<template>
  <div id="menu">
    <div id="pages">
      <div
        class="page"
        v-bind:class="{ active: active(0) }"
        @click="handleClick(0)"
      >
        <h1>Home</h1>
      </div>
      <div
        class="page disabled"
        v-bind:class="{ active: active(1) }"
        @click="handleClick(1)"
      >
        <h1>About</h1>
        <h6>Coming soon</h6>
      </div>
      <div
        class="page disabled"
        v-bind:class="{ active: active(2) }"
        @click="handleClick(2)"
      >
        <h1>Projects</h1>
        <h6>Coming soon</h6>
      </div>
      <div
        class="page"
        v-bind:class="{ active: active(3) }"
        @click="handleClick(3)"
      >
        <h1>Photos</h1>
      </div>
    </div>
    <!-- Socials -->
    <div id="socials">
      <a href="https://www.etsy.com/shop/JOCOStudioDesigns" target="_blank">
        <h6>Etsy<span class="arrow">↗&#xFE0E;</span></h6>
      </a>
      <a href="https://www.instagram.com/joco.io" target="_blank">
        <h6>Instagram<span class="arrow">↗&#xFE0E;</span></h6>
      </a>
      <!-- <a
        target="_blank"
        href="https://nbviewer.jupyter.org/github/jocoio/portfolio5/blob/master/src/assets/resume.pdf"
      >
        <h6>Resume</h6>
      </a> -->
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import { mapState } from "vuex";
import router from "../router";
// Components
export default {
  name: "Menu",
  data: function () {
    return {
      animIntro: null,
    };
  },
  components: {},
  computed: {
    ...mapState(["mode", "modes", "naving"]),
  },
  watch: {},
  methods: {
    active(idx) {
      return this.modes[idx] === this.mode;
    },
    handleClick(idx) {
      if (!this.active(idx)) {
        router.push({ name: this.modes[idx] });
      }
    },
    initIntro() {
      this.animIntro = anime
        .timeline()
        .add(
          {
            targets: [".page", "#socials > a"],
            duration: 1000,
            easing: "easeOutExpo",
            delay: anime.stagger(150),
            opacity: [0, 1],
            translateY: [15, 0],
          },
          0
        );
    },
  },
  mounted() {
    this.initIntro();
    this.animIntro.play();
  },
};
</script>

<style scoped>
/* Menu Wrapper */
#menu {
  padding: 0 10%;
}
#menu .page {
  width: max-content;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  /* opacity: 0; */
}
#menu .page > h1 {
  pointer-events: none;
  transition: transform 150ms;
}
#menu .page > h6 {
  pointer-events: none;
  padding-top: 10px;
  opacity: 0.4;

}
#menu .page.disabled {
  pointer-events: none;
}
#menu .page.disabled h1 {
  opacity: 0.4;
  
}
#menu .page:hover h1 {
  transform: translateX(10px);
}
/* Active Page */
#menu .page.active > h1 {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: black;
  text-decoration: line-through;
  transform: none;
}
#socials {
  margin-top: 48px;
  display: flex;
  gap: 10px;
  align-items: center;
}
#socials h6 {
  padding: 10px 15px;
  border-radius: 20px;
  color: black;
  background-color: white;
}
#socials h6 .arrow {
  margin-left: 5px;
  color: inherit;
}
</style>