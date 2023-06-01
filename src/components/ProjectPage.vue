<template>
  <div :style="container_style">
    <!-- Header -->
    <div :style="header_style">
      <div>
        <h1>{{ project.name }}</h1>
        <Tags :tags="project.tags" />
      </div>
      <div v-if="project.summary" id="more-info" @click="infoOpen = !infoOpen">
        <h3 :style="{ 'white-space': 'nowrap' }">More info</h3>
        <Plus />
      </div>
    </div>

    <!-- Summary -->
    <div v-if="project.summary && infoOpen">
      <h2>Overview</h2>
      <p v-for="(p, idx) in project.summary" :key="idx" :style="summary_style">
        {{ p }}
      </p>
    </div>
    <div id="project-button" @click="handleButtonClick" :style="button_style">
      <Cross v-if="infoOpen" />
      <LeftArrow v-else />
    </div>
    <!-- Gallery -->
    <div :style="gallery_style">
      <img :src="url(project.cover)" />
    </div>
  </div>
</template>

<script>
// Utils
import router from "../router";

// Data
import { FEATURES, ALL } from "../data/projects";
import { mapState } from "vuex";
import anime from "animejs";

// Components
import Cross from "../assets/icons/Cross";
import LeftArrow from "../assets/icons/LeftArrow";
import Plus from "../assets/icons/Plus";
import Tags from "./Tags.vue";

export default {
  name: "ProjectPage",
  data: function() {
    return {
      FEATURES,
      ALL,
      animIntro: null,
      infoOpen: false,
    };
  },
  computed: {
    ...mapState(["transitioning"]),
    container_style() {
      return {
        marginBottom: "200px",
      };
    },
    header_style() {
      return {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexFlow: "wrap",
        gap: "45px",
      };
    },
    button_style() {
      return {
        backgroundColor: "#FEFEFE",
        color: "#000000",
        padding: "15px",
        borderRadius: "25px",
        position: "fixed",
        left: "50px",
        bottom: "50px",
        display: "flex",
        cursor: "pointer",
        width: "24px",
        height: "24px",
      };
    },
    summary_style() {
      return {
        opacity: 0.7,
        marginTop: "10px",
        lineHeight: 1.55,
      };
    },
    gallery_style() {
      return {
        marginTop: "50px",
      };
    },
    // Helper for shorter names in the template
    project() {
      return this.FEATURES[this.$route.params.slug];
    },
  },
  props: {
    num: Number,
  },
  components: {
    Cross,
    LeftArrow,
    Plus,
    Tags,
  },
  methods: {
    // TODO: Make importable service
    url(slug) {
      var images = require.context("../assets/projects", true, /\.png$/);
      return images("./" + slug);
    },
    // Main white circle button click
    handleButtonClick() {
      if (this.infoOpen) {
        this.infoOpen = !this.infoOpen;
      } else {
        router.push({
          path: `/projects`,
        });
      }
    },
    intro: function() {
      this.animIntro = anime
        .timeline({
          easing: "easeInOutQuad",
          loop: false,
          autoplay: false,
        })
        // Name
        .add(
          {
            targets: "h1",
            opacity: [0, 1],
            translateY: [25, 0],
            duration: 500,
            easing: "easeOutCirc",
          },
          0
        )
        // Tags
        .add(
          {
            targets: ".tags > h6",
            opacity: [0, 0.7],
            translateY: [25, 0],
            duration: 500,
            easing: "easeOutCirc",
            delay: anime.stagger(150),
          },
          300
        )
        // Control button
        .add(
          {
            targets: "#project-button",
            opacity: [0, 1],
            translateY: [25, 0],
            duration: 500,
            easing: "easeOutCirc",
          },
          900
        );
      this.animIntro.play();
    },
  },
  watch: {
    transitioning: function() {
      if (!this.transitioning) {
        this.animIntro.reset();
        this.animIntro.play();
      }
    },
  },
  created: function() {},
  mounted: function() {
    this.intro();
  },
};
</script>

<style scoped>
#more-info {
  display: flex;
  color: white;
  gap: 10px;
  align-items: center;
  cursor: pointer;
}
#more-info > .icon {
  width: 15px;
  height: 15px;
}
</style>
