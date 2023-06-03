<template>
  <!-- Featured Projects -->
  <div>
    <div id="featured">
      <h1 ref="featured-header">Featured</h1>
      <div
        class="featured-project"
        v-for="(project, key, idx) in FEATURES"
        :key="idx"
      >
        <img
          @click="handleClick(key)"
          class="project-art"
          :src="url(project.cover)"
        />
        <h2 @click="handleClick(key)">{{ project.name }}</h2>
        <Tags :tags="project.tags" />
      </div>
    </div>
    <!-- All -->
    <div id="all" :style="all_sty">
      <h2>All</h2>
      <div v-for="(project, key, idx) in OTHER" :key="idx" class="">
        <img
          @click="handleClick(key)"
          class="project-art"
          :src="url(project.cover)"
        />
        <h3>{{ project.name }}</h3>
        <div class="tags">
          <h6 v-for="(tag, idx) in project.tags" :key="idx">
            {{ tag }}
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Utils
import router from "../router";

// Data
import { FEATURES, OTHER } from "../data/projects";
import { mapState } from "vuex";
import anime from "animejs";

// Components
import Tags from "./Tags.vue";

export default {
  name: "ProjectGrid",
  data: function () {
    return {
      FEATURES,
      OTHER,
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
      animIntro: null,
    };
  },
  computed: {
    ...mapState(["transitioning", "mobile"]),
    container_style() {
      return {
        marginBottom: "200px",
      };
    },
    all_sty() {
      return {
        display: this.mobile ? "flex" : "grid",
        flexDirection: "column",
        gridTemplateColumns: "1fr 1fr",
        gap: "35px",
        marginBottom: "200px",
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
    Tags,
  },
  methods: {
    // TODO: Make importable service
    url(slug) {
      var images = require.context("../assets/projects", true, /\.png$/);
      return images("./" + slug);
    },
    handleClick(slug) {
      router.push({
        path: `/projects/${slug}`,
      });
    },
    intro: function () {
      // Projects page intro
      this.animIntro = anime
        .timeline({
          easing: "easeInOutQuad",
          loop: false,
          autoplay: false,
        })
        // Featured section header
        .add(
          {
            targets: this.$refs["featured-header"],
            opacity: [0, 1],
            translateY: [25, 0],
            duration: 500,
            easing: "easeOutCirc",
          },
          0
        )
        // Featured projects
        .add(
          {
            targets: ".featured-project",
            opacity: [0, 1],
            translateY: [25, 0],
            duration: 600,
            delay: anime.stagger(250),
            easing: "easeOutCirc",
          },
          100
        )
        // Project tags
        .add(
          {
            targets: ".tags > h6",
            opacity: [0, 0.75],
            translateY: [5, 0],
            duration: 500,
            delay: anime.stagger(150),
            easing: "easeOutCirc",
          },
          350
        );
      this.animIntro.play();
    },
  },
  watch: {
    transitioning: function () {
      if (!this.transitioning) {
        this.animIntro.reset();
        this.animIntro.play();
      }
    },
  },
  created: function () {},
  mounted: function () {
    this.intro();
  },
};
</script>

<style >
/* ----- Featured Project ----- */
.featured-project {
  margin-top: 32px;
  margin-bottom: 64px;
}

.featured-project > h2 {
  margin: 15px 0;
  color: #fefefe;
}

/* ----- All projects ----- */
#all > h2 {
  grid-column: span 2;
}

#all h3 {
  margin-top: 20px;
}
</style>
