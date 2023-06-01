<!--- Note: this template is applied to every block in the grid --->
<template>
  <div v-if="num === (mobile ? cols + 1 : 2)" :style="container_sty">
    <IndividualProject v-if="$route.params.slug" />
    <!-- Featured Projects -->
    <div v-else id="projects">
      <div id="featured" :style="featured_sty">
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
        <div v-for="(project, idx) in ALL" :key="idx" class="">
          <div class="project-art" :style="{ backgroundColor: colors[idx] }" />
          <h3>{{ project.name }}</h3>
          <div class="tags">
            <h6 v-for="(tag, idx) in project.tags" :key="idx">
              {{ tag }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Utils
import { mapState } from "vuex";
import anime from "animejs";
import router from "../router";

// Data
import { FEATURES, ALL } from "../data/projects";

// Components
import IndividualProject from "../components/Project.vue";
import Tags from "../components/Tags.vue";

export default {
  name: "Projects",
  data: function() {
    return {
      FEATURES,
      ALL,
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
  components: {
    IndividualProject,
    Tags,
  },
  computed: {
    ...mapState(["contentWidth", "transitioning", "mobile", "cols", "navOpen"]),
    container_sty() {
      return {
        position: "absolute",
        zIndex: 1,
        width: this.contentWidth * 0.9 + "px",
        padding: "0 " + this.contentWidth * 0.05 + "px",
        pointerEvents: this.navOpen ? "none" : "auto",
        marginTop: this.mobile ? "0px" : "75px",
        overflowY: "scroll",
      };
    },
    featured_sty() {
      return {

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
  },
  props: {
    num: Number,
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
    url(slug) {
      var images = require.context("../assets/projects", true, /\.png$/);
      return images("./" + slug);
    },
    handleClick(slug) {
      router.push({
        path: `/projects/${slug}`,
      });
    },
    initIntro: function() {
      // Projects page intro
      this.animIntro = anime
        .timeline({})
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
    },
  },

  created: function() {},
  mounted: function() {
    this.initIntro();
    this.animIntro.play();
  },
};
</script>

<style>
/* ----- Common ----- */
.project-art {
  display: block;
  height: 300px;
  cursor: pointer;
  transition: all 125ms;
}
.project-art:hover {
  border-radius: 15px;
}

/* ----- Featured projects ----- */
#featured > h1 {
  font-weight: 100;
}
/* ----- Featured Project ----- */
.featured-project {
  margin-top: 32px;
  margin-bottom: 64px;
}

.featured-project > h2 {
  font-weight: 300;
  margin: 15px 0;
  color: #fefefe;
}

/* ----- All projects ----- */
#all > h2 {
  font-weight: 300;
  grid-column: span 2;
}

#all h3 {
  margin-top: 20px;
}

.solid {
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
