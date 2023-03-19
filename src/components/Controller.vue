<template>
  <div>
    <div id="cont" ref="modes">
      <div
        class="mode"
        v-bind:class="{ active: active(0) }"
        @click="handleClick(0)"
      >
        <h6>Home</h6>
      </div>
      <div
        class="mode"
        v-bind:class="{ active: active(1) }"
        @click="handleClick(1)"
      >
        <h6>Photos</h6>
      </div>
      <div
        class="mode"
        v-bind:class="{ active: active(2) }"
        @click="handleClick(2)"
      >
        <h6>Work</h6>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import { mapState } from "vuex";
import router from "../router";

export default {
  data: function() {
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
      this.animIntro = anime({
        targets: this.$refs.modes,
        duration: 2000,
        easing: "easeOutExpo",
        delay: anime.stagger(100),
        opacity: [0, 1],
      });
    },
  },
  mounted() {
    this.initIntro();
    this.animIntro.play();
  },
};
</script>

<style scoped>
.mode:not(.active) {
  cursor: pointer;
}

#cont {
  display: flex;
  gap: 6px;
}

#cont > .mode {
  opacity: 0.5;
  transition: opacity 150ms;
}

#cont > .mode:hover {
  opacity: 1;
}

#cont > .mode.active {
  opacity: 1;
  pointer-events: none;
}

.mode {
  padding: 10px 12px;
  border-radius: 20px;
  background-color: #ffffff;
  transition: opacity 150ms translateY 5000ms;
  display: flex;
  align-items: center;
}

.mode > h6 {
  color: #161616;
  margin: 0;
  font-size: 0.75em;
  cursor: pointer;
}
</style>
