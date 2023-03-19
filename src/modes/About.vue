<template>
  <div v-if="num == 2" id="intro">
    <h1>Hi, I'm Jon!</h1>
    <h3>
      I’m a designer + developer based in Brooklyn. I love working with
      <a href="https://www.instagram.com/joco.io" target="_blank">media</a>
      and
      <a href="https://www.github.com/jocoio" target="_blank">technology</a>
      to share stories and build unique experiences.
    </h3>
    <a
      id="resume"
      target="_blank"
      href="https://nbviewer.jupyter.org/github/jocoio/portfolio5/blob/master/src/assets/resume.pdf"
    >
      <h6>Full resume <RightArrow /></h6>
    </a>
  </div>

  <div v-else class="solid" :id="num" :ref="num" />
</template>

<script>
import { mapState } from "vuex";
import anime from "animejs";

export default {
  name: "About",
  data: function () {
    return {
      colors: [
        "#dbacac",
        "#a2c9aa",
        "#909eb4",
        "#b06262",
        "#605e5e",
        "#2f86ff",
        "#ffa490",
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
      return this.colors[Math.floor(Math.random() * 7)];
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
}
</style>