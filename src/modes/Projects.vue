<!--- Note: this template is applied to every block in the grid --->
<!--- Which is why we only render it for 1 block via v-if --->
<template>
  <ClassicPageWrapper id="projects" :num="num">
    <!-- Single project if there's a slug in the URL -->
    <ProjectPage v-if="$route.params.slug" />
    <!-- Project grid otherwise -->
    <ProjectsGrid v-else />
  </ClassicPageWrapper>
</template>

<script>
// Utils
import { mapState } from "vuex";

// Data
import { FEATURES, ALL } from "../data/projects";

// Components
import ClassicPageWrapper from "../components/ClassicPageWrapper.vue";
import ProjectsGrid from "../components/ProjectsGrid";
import ProjectPage from "../components/ProjectPage";

export default {
  name: "Projects",
  data: function () {
    return {
      FEATURES,
      ALL,
      animIntro: null,
    };
  },
  components: {
    ClassicPageWrapper,
    ProjectsGrid,
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
        display: "flex",
        justifyContent: "center",
      };
    },
    wrapper_sty() {
      return {
        maxWidth: "1200px",
        height: "min-content",
      };
    },
  },
  props: {
    num: Number,
  },
  watch: {
    transitioning: function () {
      if (!this.transitioning) {
        this.animIntro.reset();
        this.animIntro.play();
      }
    },
  },
  methods: {
    initIntro: function () {},
  },

  created: function () {},
  mounted: function () {
    // this.initIntro();
    // this.animIntro.play();
  },
};
</script>

<style>
/* ----- Common ----- */
.project-art {
  display: block;
  height: 350px;
  cursor: pointer;
  transition: all 125ms;
}
.project-art:hover {
  border-radius: 15px;
}
</style>
