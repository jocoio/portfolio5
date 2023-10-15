<template>
  <ClassicPageWrapper id="about" :num="num">
    <div :style="about_sty">
      <!-- About the studio -->
      <div>
        <SmartImage src="about/intro.png" />
        <h1>About the studio</h1>
        <h3>
          Founded in 2020, JOCO Studio is the multidisciplinary design shop of
          Jon Corbett (hi!). We work across mediums to make pretty things that
          solve problems and are fun to look at ✨
        </h3>
        <br />
        <h3>
          We use high quality design and unique experiences to elevate brands
          and excite new audiences, all at an affordable rate.
        </h3>
      </div>
      <!-- Clients + Collaborators -->
      <div id="previous">
        <div>
          <h2>Previous Clients:</h2>
          <h3>
            <ul>
              <li>Laganja Estranja</li>
              <li>Aura Mayari</li>
              <li>Marcia Marcia Marcia</li>
              <li>Drag Out the Vote</li>
              <li>Urban Justice Center</li>
              <li>IDEO CoLab</li>
            </ul>
          </h3>
        </div>
        <div>
          <h2>Previous Collaborators:</h2>
          <h3>
            <ul>
              <li>Dan Holcomb (<a href="https://www.instagram.com/dan_illustrates/" target="_blank">@dan_illustrates</a>)</li>
              <li>Sabrina Kantor (<a href="https://www.instagram.com/b.ean_shop/" target="_blank">@b.ean_shop</a>)</li>
              <li>Yasmine Hashemi (<a href="https://www.instagram.com/yasmine_hashemi/" target="_blank">@yasmine_hashemi</a>)</li>
            </ul>
          </h3>
        </div>
      </div>
      <!-- About me -->
      <div>
        <h1>About Jon</h1>
        <h3>
          Hi, I'm Jon! I'm a designer, developer, and creative based in
          Brooklyn. I've been making things for 10 years: videos, animations,
          designs, music, clothes, etc.
        </h3>
        <br />
        <h3>
          My background is in computer science and design but I love exploring
          new mediums and creative outlets. There is so much beauty and art in
          the world! Wow!
        </h3>
        <br />
        <Button
          link="https://nbviewer.jupyter.org/github/jocoio/portfolio5/blob/master/src/assets/resume.pdf"
          label="full resume"
        />
      </div>
    </div>
  </ClassicPageWrapper>
</template>

<script>
// Utils
import { mapState } from "vuex";
import anime from "animejs";

// Components
import Button from "../components/Button.vue";
import ClassicPageWrapper from "../components/ClassicPageWrapper.vue";
import SmartImage from "../components/SmartImage.vue";

export default {
  name: "About",
  data: function () {
    return {
      colors: [
        "#dbacac",
        "#a2c9aa",
        "#909eb4",
        "#b06262",
        "#605e5e",
        "#2f86ff",
        "#ffa490",
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
    about_sty() {
      return {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: "50px",
        maxWidth: "540px",
      };
    },
  },
  props: {
    num: Number,
  },
  components: {
    Button,
    ClassicPageWrapper,
    SmartImage,
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
    animate: function () {
      if (this.animated) {
        this.colorAnim.reverse();
      }
      this.colorAnim.play();
    },
    initIntro: function () {
      this.animIntro = anime({
        duration: 500,
        targets: this.$refs[this.num],
        easing: "easeInOutQuad",
        loop: false,
        autoplay: false,
        opacity: 1,
      });
    },
    // Change color on a constant interval
    changeColor: function () {
      this.color = this.randomColor();
    },
    // Returns random color from colors list
    randomColor: function () {
      return this.colors[Math.floor(Math.random() * 7)];
    },
  },

  created: function () {
    this.changeColor();
  },
  mounted: function () {
    this.initIntro();
    this.animIntro.play();
  },
};
</script>

<style>
#about h1 {
  margin-top: 30px;
  margin-bottom: 20px;
}

#previous {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

#about h2 {
  margin-bottom: 15px;
}

#about h3 {
  opacity: 0.7;
}

#about li a {
  color: rgb(255, 191, 14);
}

#about a.button {
  margin-top: 15px;
}
</style>