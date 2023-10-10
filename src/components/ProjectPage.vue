<template>
  <div :style="container_style">
    <!-- Header -->
    <div :style="header_style">
      <!-- Name + Tags -->
      <div>
        <h1>{{ project.name }}</h1>
        <Tags :tags="project.tags" />
      </div>
      <!-- Interactive Elements -->
      <div :style="interactives_style">
        <!-- More info button -->
        <div
          v-if="project.summary"
          id="more-info"
          @click="infoOpen = !infoOpen"
        >
          <h3 :style="{ 'white-space': 'nowrap' }">
            {{ infoOpen ? "Less info" : "More info" }}
          </h3>
          <PlusMinus :minus="infoOpen" />
        </div>
        <!-- Link -->
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          :style="{ display: 'flex', 'align-items': 'center', gap: '10px' }"
        >
          <h3>Link</h3>
          <LinkArrow />
        </a>
      </div>
    </div>

    <!-- More Info Drawer -->
    <div
      v-if="project.summary"
      :style="drawer_style"
      :class="infoOpen && 'open'"
    >
      <!-- Container -->
      <div ref="overview-container">
        <h2>Overview</h2>
        <p
          v-for="(p, idx) in project.summary"
          :key="idx"
          :style="paragraph_style"
        >
          {{ p }}
        </p>
      </div>
    </div>
    <!-- <div id="project-button" @click="handleButtonClick" :style="button_style">
      <Cross v-if="infoOpen" />
      <LeftArrow v-else />
    </div> -->
    <!-- Gallery -->
    <SmartImage :src="project.cover" style="margin-top: 35px" />
    <div v-if="project.gallery" :style="gallery_style">
      <SmartImage
        v-for="(image, idx) in project.gallery"
        :key="idx"
        :src="image.src"
        :embed="image.embed"
        :info="image.info"
        :style="{ 'grid-column': image.wide ? 'span 2' : '', }"
      />
    </div>
  </div>
</template>

<script>
// Data
import { ALL } from "../data/projects";
import { mapState } from "vuex";
import anime from "animejs";

// Components
// import Cross from "../assets/icons/Cross";
// import LeftArrow from "../assets/icons/LeftArrow";
import LinkArrow from "../assets/icons/LinkArrow";
import PlusMinus from "../assets/icons/PlusMinus";
import SmartImage from "./SmartImage";
import Tags from "./Tags.vue";

export default {
  name: "ProjectPage",
  data: function () {
    return {
      ALL,
      animIntro: null,
      infoOpen: false,
    };
  },
  computed: {
    ...mapState(["transitioning", "mobile"]),
    container_style() {
      return {
        marginBottom: "200px",
      };
    },
    header_style() {
      return {
        flexDirection: "column",
        flexFlow: "wrap",
        gap: "15px",
      };
    },
    interactives_style() {
      return {
        display: "flex",
        gap: "36px",
        alignItems: "center",
      };
    },
    // Animate more info drawer opening
    drawer_style() {
      return {
        transition: "all 500ms ease-in-out",
        overflow: "hidden",
        marginTop: "25px",
        maxHeight: this.infoOpen
          ? `${this.$refs["overview-container"].offsetHeight}px`
          : "0px",
      };
    },
    paragraph_style() {
      return {
        opacity: 0.7,
        marginTop: "10px",
        lineHeight: 1.55,
      };
    },
    gallery_style() {
      return {
        marginTop: "25px",
        display: this.mobile ? "flex" : "grid",
        flexDirection: "column",
        gridTemplateColumns: "1fr 1fr",
        gap: "25px",
      };
    },
    // Helper for shorter names in the template
    project() {
      return this.ALL[this.$route.params.slug];
    },
  },
  props: {
    num: Number,
  },
  components: {
    // Cross,
    // LeftArrow,
    LinkArrow,
    PlusMinus,
    SmartImage,
    Tags,
  },
  methods: {
    intro: function () {
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
        // TODO: move to nav somewhere?
        .add(
          {
            targets: "#action-button",
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
    transitioning: function () {
      if (!this.transitioning) {
        this.animIntro.reset();
        this.animIntro.play();
      }
    },
  },
  created: function () {},
  mounted: function () {
    document.getElementById("projects").scrollTo(0,0);
    this.intro();
  },
};
</script>

<style scoped>
#more-info {
  display: flex;
  padding: 15px 0;
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
