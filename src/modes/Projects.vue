<template>
  <div v-if="num === 2" id="projects" :style="width_sty">
    <!-- Featured Projects -->
    <div id="featured">
      <h1 ref="featured-header">Featured</h1>

      <div
        class="featured-project"
        v-for="(project, idx) in FEATURES"
        :key="idx"
      >
        <a
          :href="`/projects/${project.slug}`"
          class="project-art"
          :style="{ backgroundColor: colors[idx] }"
        />
        <h2>{{ project.name }}</h2>
        <div class="tags">
          <h6 v-for="(tag, idx) in project.tags" :key="idx">
            {{ tag }}
          </h6>
        </div>
      </div>
    </div>
    <!-- All -->
    <div id="all">
      <h2>All</h2>
      <div id="projects-all">
        <div v-for="(color, idx) in colors" :key="idx" class="">
          <div class="project-art" :style="{ backgroundColor: color }" />
          <h3>Project</h3>
          <div class="tags">
            <h6>Tag</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import anime from "animejs";

import { FEATURES } from "../data/projects";

export default {
  name: "Projects",
  data: function() {
    return {
      FEATURES,
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
      // Has this solid animated already
      animated: false,
      animIntro: null,
      colorAnim: null,
    };
  },
  computed: {
    ...mapState(["contentWidth", "transitioning"]),
    color_style() {
      return {
        backgroundColor: this.color,
      };
    },
    width_sty() {
      return {
        position: "absolute",
        zIndex: 1,
        width: this.contentWidth + "px",
      };
    },
  },
  props: {
    num: Number,
  },
  components: {},
  watch: {
    transitioning: function() {
      if (!this.transitioning) {
        this.animIntro.reset();
        this.animIntro.play();
      }
    },
  },
  methods: {
    animate: function() {
      if (this.animated) {
        this.colorAnim.reverse();
      }
    },
    initIntro: function() {
      // Projects page intro
      this.animIntro = anime
        .timeline({
          // complete: () => {
          // this.$store.commit("setIntrod", true);
          // this.$store.commit("setMode", this.mode ? this.mode : 'home');
          // setTimeout(this.startRandomAnimator(), 1000);
          // }
        })
        .add(
          {
            targets: this.$refs["featured-header"],
            opacity: 1,
            translateY: [25, 0],
            duration: 500,
            easing: "easeOutCirc",
          },
          0
        )
        .add(
          {
            targets: ".featured-project",
            opacity: 1,
            translateY: [25, 0],
            duration: 600,
            delay: anime.stagger(250),
            easing: "easeOutCirc",
          },
          100
        )
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
    initColor: function() {
      this.colorAnim = anime({
        duration: 500,
        targets: this.$refs[this.num],
        easing: "easeInOutQuad",
        loop: false,
        autoplay: false,
        backgroundColor: this.color,
        complete: () => (this.animated = true),
      });
    },
    // Change color on a constant interval
    // changeColor: function() {
    //   this.color = this.randomColor();
    // },
    // Returns random color from colors list
    randomColor: function() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },
  },

  created: function() {
    // this.changeColor();
  },
  mounted: function() {
    // Initial color
    // this.$refs[this.num].style.backgroundColor = this.randomColor();

    this.initIntro();
    // this.initColor();

    this.animIntro.play();
  },
};
</script>

<style>
/* ----- Styling ----- */
.project-art {
  display: block;
  height: 300px;
  transition: all 125ms;
}
.project-art:hover {
  border-radius: 15px;
}
.tags {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  gap: 15px;
}
.tags > h6 {
  opacity: 0.75;
}
/* ----- Featured projects ----- */
#featured > h1 {
  margin-top: 52px;
  font-weight: 100;
  opacity: 0;
  color: #fefefe;
}
/* ----- Featured Project ----- */
.featured-project {
  margin-top: 32px;
  margin-bottom: 40px;
  opacity: 0;
}

.featured-project > h2 {
  font-weight: 300;
  margin: 15px 0;
  color: #fefefe;
}

#projects {
  outline: 0px solid white;
  overflow-y: scroll;
  padding: 35px 0;
}

/* ----- All projects ----- */
#all > h2 {
  font-weight: 300;
  margin-bottom: 15px;
}

#projects-all {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
}
#projects-all h3 {
  margin-top: 15px;
}

.solid {
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
