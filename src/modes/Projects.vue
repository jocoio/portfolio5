<template>
  <div v-if="false">
    <div id="work">
      <h6>Recent work</h6>
      <a href="https//laganjaestranja.com" target="_blank">
        <h2>LaganjaEstranja.com<span class="arrow">↗&#xFE0E;</span></h2>
        <h6>Coding</h6>
        <h6>Freelance</h6>
        <h6>Squarespace</h6>
      </a>
      <a
        href="https://youtube.com/playlist?list=PLNzX5UGbEkhyzqhn7mwTSwDsAHG_3kuQ3"
        target="_blank"
      >
        <h2>Music Lab<span class="arrow">↗&#xFE0E;</span></h2>
        <h6>Music Theory</h6>
        <h6>Production</h6>
        <h6>Animation</h6>
      </a>
      <a href="https://fueled.com/" target="_blank">
        <h2>Fueled.com<span class="arrow">↗&#xFE0E;</span></h2>
        <h6>UI/UX Design</h6>
        <h6>Coding</h6>
        <h6>Vue</h6>
      </a>
    </div>
  </div>
  <div v-else class="solid" :id="num" :ref="num">Coming Soon</div>
</template>

<script>
import { mapState } from "vuex";
import anime from "animejs";

export default {
  name: "Work",
  data: function () {
    return {
      colors: [
        "#DD6E42",
        "#FFBF46",
        "#648381",
        "#8ACB88",
        "#01295F",
        "#463F3A",
        "#BC4B51",
        "#453750",
        "#E94F37",
        "#FCA311",
      ],
      color: "#FFFFFF",
      // Has this solid animated already
      animated: false,
      animIntro: null,
      colorAnim: null,
    };
  },
  computed: {
    ...mapState(["transitioning"]),
    color_style() {
      return {
        backgroundColor: this.color,
      };
    },
  },
  props: {
    num: Number,
  },
  components: {},
  watch: {
    transitioning: function () {
      if (!this.transitioning) {
        this.animIntro.reset();
        this.animIntro.play();
      }
    },
  },
  methods: {
    animate: function () {
      if (this.animated) {
        this.colorAnim.reverse();
      }
      this.colorAnim.play();
    },
    initIntro: function () {
      this.animIntro = anime({
        duration: 500,
        targets: this.$refs[this.num],
        easing: "easeInOutQuad",
        loop: false,
        autoplay: false,
        opacity: 1,
      });
    },
    initColor: function () {
      this.colorAnim = anime({
        duration: 500,
        targets: this.$refs[this.num],
        easing: "easeInOutQuad",
        loop: false,
        autoplay: false,
        backgroundColor: this.color,
        complete: () => (this.animated = true),
      });
    },
    // Change color on a constant interval
    changeColor: function () {
      this.color = this.randomColor();
    },
    // Returns random color from colors list
    randomColor: function () {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },
  },

  created: function () {
    this.changeColor();
  },
  mounted: function () {
    // Initial color
    this.$refs[this.num].style.backgroundColor = this.randomColor();

    this.initIntro();
    this.initColor();

    this.animIntro.play();
  },
};
</script>

<style>
.solid {
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>