<template>
  <div v-if="num === 2">
    <div id="projects">
      <div id="featured">
        <h1>Recent work</h1>
        <a href="https://www.laganjaestranja.com" target="_blank">
          <h2>LaganjaEstranja.com<span class="arrow">↗&#xFE0E;</span></h2>
          <div class="tags">
            <Tag label="Coding" />
            <Tag label="Freelance" />
            <Tag label="Squarespace" />
          </div>
        </a>
        <a
          href="https://youtube.com/playlist?list=PLNzX5UGbEkhyzqhn7mwTSwDsAHG_3kuQ3"
          target="_blank"
        >
          <h2>Music Lab<span class="arrow">↗&#xFE0E;</span></h2>
          <div class="tags">
            <Tag label="Music Theory" />
            <Tag label="Production" />
            <Tag label="Animation" />
          </div>
        </a>
        <a href="https://fueled.com/" target="_blank">
          <h2>Fueled.com<span class="arrow">↗&#xFE0E;</span></h2>
          <div class="tags">
            <Tag label="UI/UX Design" />
            <Tag label="Coding" />
            <Tag label="Vue" />
          </div>
        </a>
      </div>
      <div id="feed">
        <h1>Projets Feed</h1>
      </div>
    </div>
  </div>
  <div v-else class="solid" :id="num" :ref="num">Coming Soon</div>
</template>

<script>
import { mapState } from "vuex";
// import anime from "animejs";

// Components
import Tag from "../components/Tag";

export default {
  name: "Work",
  data: function() {
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
  components: {
    Tag,
  },
  watch: {
    transitioning: function() {
      if (!this.transitioning) {
        this.animIntro.reset();
        this.animIntro.play();
      }
    },
  },
  methods: {
    // animate: function() {
    //   if (this.animated) {
    //     this.colorAnim.reverse();
    //   }
    //   this.colorAnim.play();
    // },
    // initIntro: function() {
    //   this.animIntro = anime({
    //     duration: 500,
    //     targets: this.$refs[this.num],
    //     easing: "easeInOutQuad",
    //     loop: false,
    //     autoplay: false,
    //     opacity: 1,
    //   });
    // },
    // initColor: function() {
    //   this.colorAnim = anime({
    //     duration: 500,
    //     targets: this.$refs[this.num],
    //     easing: "easeInOutQuad",
    //     loop: false,
    //     autoplay: false,
    //     backgroundColor: this.color,
    //     complete: () => (this.animated = true),
    //   });
    // },
    // Change color on a constant interval
    // changeColor: function() {
    //   this.color = this.randomColor();
    // },
    // Returns random color from colors list
    // randomColor: function() {
    //   return this.colors[Math.floor(Math.random() * this.colors.length)];
    // },
  },

  created: function() {
    // this.changeColor();
  },
  mounted: function() {
    // Initial color
    // this.$refs[this.num].style.backgroundColor = this.randomColor();
    // this.initIntro();
    // this.initColor();
    // this.animIntro.play();
  },
};
</script>

<style>

#projects {
  position: absolute;
  width: 400px;
  height: 100vh;
  background-color: darkblue;
  overflow-y: scroll;
  padding: 5%;
}
</style>
