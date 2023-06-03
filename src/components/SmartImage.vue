<!-- Image with loading placeholder (outline & animation) -->
<template>
  <div id="container">
    <!-- Loading placeholder -->
    <div id="placeholder" />
    <!-- Image -->
    <img :src="url(src)" ref="photo" />
  </div>
</template>

<script>
// Animation
import anime from "animejs";

export default {
  name: "SmartImage",
  data: function () {
    return {
      // What should happen when the component first mounts
      animIntro: null,
      // What should happen once the assets loads
      animLoaded: null,
    };
  },
  computed: {},
  props: {
    tags: Array,
    src: String,
  },
  components: {},
  methods: {
    // TODO: Make importable service
    url(slug) {
      var images = require.context("../assets/projects", true, /\.png$/);
      return images("./" + slug);
    },
    initAnims() {
      // Intro
      this.animIntro = anime
        .timeline({
          easing: "easeInOutQuad",
          loop: false,
          autoplay: false,
        })
        .add({
          targets: "#container",
          opacity: [0, 0.75],
          duration: 500,
          easing: "easeOutCirc",
        });
      // Loaded
      this.animLoaded = anime
        .timeline({
          easing: "easeInOutQuad",
          loop: false,
          autoplay: false,
        })
        // Asset
        .add({
          targets: this.$refs.photo,
          opacity: [0, 1],
          duration: 300,
          easing: "easeOutCirc",
        }, 0)
        .add({
          targets: "#container",
          outlineColor: "#000000",
          opacity: 1,
          duration: 300,
          easing: "easeOutCirc",
        }, 0);
    },
  },
  watch: {},
  created: function () {},
  mounted: function () {
    // Initialize both anims, play intro one
    this.initAnims();
    this.animIntro.play();
    // Transition the asset in
    this.$refs.photo.onload = () => {
      setTimeout(() => {
        this.animLoaded.play();
      }, 500);
    };
  },
};
</script>

<style>
#container {
  outline: 0.5px solid white;
  height: 100%;
  width: 100%;
}
</style>
