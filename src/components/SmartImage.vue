<!-- Image with loading placeholder (outline & animation) -->
<template>
  <div class="asset">
    <div id="asset-container">
      <!-- Loading placeholder -->
      <div id="placeholder" />
      <!-- Embed Video -->
      <iframe
        v-if="embed"
        width="100%"
        height="550"
        :src="src"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; picture-in-picture;"
      />
      <!-- Image -->
      <img v-else :src="url(src)" ref="photo" />
    </div>
    <div id="asset-info" v-if="info">
      <p>{{ info }}</p>
    </div>
  </div>
</template>

<script>
// Animation
import anime from "animejs";

export default {
  name: "SmartImage",
  data: function() {
    return {
      // What should happen when the component first mounts
      animIntro: null,
      // What should happen once the assets loads
      animLoaded: null,
    };
  },
  computed: {},
  props: {
    src: String,
    embed: {
      type: Boolean,
      default: false,
    },
    info: String,
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
          targets: "#asset-container",
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
        .add(
          {
            targets: this.$refs.photo,
            opacity: [0, 1],
            duration: 300,
            easing: "easeOutCirc",
          },
          0
        )
        .add(
          {
            targets: "#asset-container",
            outlineColor: "#000000",
            opacity: 1,
            duration: 300,
            easing: "easeOutCirc",
          },
          0
        );
    },
  },
  watch: {},
  created: function() {},
  mounted: function() {
    // Initialize both anims, play intro one
    this.initAnims();
    this.animIntro.play();
    // Transition the asset in
    if (!this.embed) {
      this.$refs.photo.onload = () => {
        setTimeout(() => {
          this.animLoaded.play();
        }, 500);
      };
    }
  },
};
</script>

<style>
.asset {
  height: min-content;
}

#asset-container {
  outline: 0.5px solid white;
  height: 100%;
  width: 100%;
}
#asset-container img {
  min-height: 300px;
}
#asset-info {
  opacity: 0.65;
  max-width: 750px;
  padding: 16px 0px;
  position: relative;
  line-height: 1.4rem;
  z-index: 0;
}
</style>
