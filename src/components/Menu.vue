<template>
  <div id="menu">
    <div id="pages">
      <!-- Home -->
      <div
        class="page"
        v-bind:class="{ active: active(0) }"
        @click="handleClick(0)"
      >
        <h1>Home</h1>
      </div>
      <!-- About -->
      <div
        class="page"
        v-bind:class="{ active: active(1) }"
        @click="handleClick(1)"
      >
        <h1>About</h1>
      </div>
      <!-- Work -->
      <div
        class="page"
        v-bind:class="{ active: active(2) }"
        @click="handleClick(2)"
      >
        <h1>Work</h1>
        <!-- <h6>WIP</h6> -->
      </div>
      <!-- Photos -->
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
      <!-- <a href="https://www.etsy.com/shop/JOCOStudioDesigns" target="_blank">
        <h6>Etsy</h6>
      </a> -->
      <Button link="https://www.instagram.com/joco.io" label="insta" />
      <Button link="https://nbviewer.jupyter.org/github/jocoio/portfolio5/blob/master/src/assets/resume.pdf" label="resume" />
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import { mapState } from "vuex";
import router from "../router";

// Components
import Button from "./Button.vue";

export default {
  name: "Menu",
  data: function () {
    return {
      animIntro: null,
    };
  },
  components: {
    Button,
  },
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
      this.animIntro = anime.timeline().add(
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
}
#menu .page > h1,
#menu .page > h6 {
  pointer-events: none;
  transition: transform 150ms;
  font-weight: 300;
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
#menu .page:hover h6 {
  transform: translateX(10px);
}
/* Active Page */
#menu .page.active > h1 {
  text-decoration: line-through;
  transform: none;
  font-weight: 300;
  pointer-events: none;
  opacity: 0.25;
  cursor: not-allowed;
}
#socials {
  margin-top: 48px;
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
