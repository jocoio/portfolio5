<!--- Note: this template is applied to every block in the grid --->
<!--- Which is why we only render it for 1 block via v-if --->
<template>
  <div
    id="projects"
    v-if="num === (mobile ? cols + 1 : 2)"
    :style="container_sty"
  >
    <!-- Single project if there's a slug in the URL -->
    <ProjectPage v-if="$route.params.slug" />
    <!-- Project grid otherwise -->
    <ProjectGrid v-else />
  </div>
</template>

<script>
// Utils
import { mapState } from "vuex";

// Data
import { FEATURES, ALL } from "../data/projects";

// Components
import ProjectGrid from "../components/ProjectGrid";
import ProjectPage from "../components/ProjectPage";

export default {
  name: "Projects",
  data: function() {
    return {
      FEATURES,
      ALL,
      animIntro: null,
    };
  },
  components: {
    ProjectGrid,
    ProjectPage,
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
        paddingTop: this.mobile ? "0px" : "75px",
        overflowY: "scroll",
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
    initIntro: function() {},
  },

  created: function() {},
  mounted: function() {
    // this.initIntro();
    // this.animIntro.play();
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
</style>
