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
      <div class="header">
        <h2>All</h2>
        <!-- Tag Filters -->
        <div class="filter-container">
          <div
            v-for="(tag, idx) in TAGS"
            :key="idx"
            class="filter-tag"
            v-bind:class="{ active: activeTags[tag] }"
            @click="toggleFilter(tag)"
          >
            {{ tag }}
          </div>
        </div>
      </div>
      <div v-for="(project, key, idx) in filteredOthers" :key="idx">
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
import { TAGS, FEATURES, OTHER, ALL } from "../data/projects";
import { mapState } from "vuex";
import anime from "animejs";

// Components
import Tags from "./Tags.vue";

export default {
  name: "ProjectsGrid",
  data() {
    return {
      TAGS,
      FEATURES,
      OTHER,
      ALL,
      animIntro: null,
      activeTags: this.intitializeActiveTags(),
      numTagsActive: 0,
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
    filteredOthers() {
      if (this.numTagsActive === 0) return ALL;
      else {
        return Object.keys(ALL).reduce((r, e) => {
          // For every tag in the project
          ALL[e].tags.forEach((tag) => {
            // if the tag is true in active tags
            if (this.activeTags[tag]) {
              r[e] = ALL[e];
            }
          });

          return r;
        }, {});
      }
    },
  },
  props: {
    num: Number,
  },
  components: {
    Tags,
  },
  methods: {
    intitializeActiveTags() {
      let returnObject = {};
      TAGS.map((tag) => {
        returnObject[tag] = false;
      });
      return returnObject;
    },
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
    // Turn a tag on or off
    toggleFilter(tag) {
      if (this.activeTags[tag] !== undefined) {
        // Increment or decrement how many tags are active
        // If the tag is true it has been switched on
        this.numTagsActive = this.activeTags[tag]
          ? this.numTagsActive - 1
          : this.numTagsActive + 1;
        // Set the flag in activeTags
        this.activeTags[tag] = !this.activeTags[tag];
      }
    },
    intro: function() {
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
        // .add(
        //   {
        //     targets: ".tags > h6",
        //     opacity: [0, 0.75],
        //     translateY: [5, 0],
        //     duration: 500,
        //     delay: anime.stagger(150),
        //     easing: "easeOutCirc",
        //   },
        //   350
        // );
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
    document.getElementById("projects").scrollTo(0, 0);
    this.intro();
  },
};
</script>

<style>
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
#all .header {
  grid-column: span 2;
}

#all h3 {
  margin-top: 20px;
}

#all .filter-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 30px;
  padding-bottom: 15px;
}

#all .filter-tag {
  cursor: pointer;
  color: #fefefe;
  border: 1px solid #fefefe;
  padding: 8px 12px;
  opacity: 0.55;
  border-radius: 20px;
  transition: all 150ms;
  user-select: none;
  font-size: 14px;
}
#all .filter-tag.active {
  background-color: #fefefe;
  color: #161616;
  opacity: 1;
}
</style>
