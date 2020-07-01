<template>
  <div id="info" ref="content">
      <div id="intro">
        <h1>Hi, I'm Jon</h1>
        <h3>I’m a creative developer currently in San Diego. I love working with art and technology to share stories and build unique experiences.</h3>
        <a id="resume" target="_blank" href="https://drive.google.com/file/d/1jx0GsIA13JdBJ2InMw6bHblS1Ef3yLRh/view?usp=sharing">
          <h5 >Full resume</h5> <RightArrow/>
        </a>
      </div>
      <div id="work">
        <h6>Recent work</h6>
        <a href="https://wikn.herokuapp.com/" target="_blank">
          <h2>What I Know Now<span class="arrow">↗&#xFE0E;</span></h2>
          <!-- <h6>Vue</h6>
          <h6>Anime</h6>
          <h6>Mongodb</h6> -->
        </a>
        <a href="https://www.sosolimited.com/" target="_blank">
          <h2>Sosolimited.com<span class="arrow">↗&#xFE0E;</span></h2>
          <!-- <h6>PHP</h6> -->
        </a>
        <a href="https://miraj-web.herokuapp.com/" target="_blank">
          <h2>Miraj<span class="arrow">↗&#xFE0E;</span></h2>
          <!-- <h6>React</h6>
          <h6>Sanity.io</h6>
          <h6>Twitter API</h6> -->
        </a>
      </div>
  </div>
</template>

<script>
  import anime from 'animejs';
  import { mapState } from 'vuex';
  import RightArrow from '../assets/RightArrow';

  export default {
  name: 'Nav',
  data: function () {
    return {
      animIntro: null
    }
  },
  components: {
    RightArrow
  },
  computed: {
    ...mapState([
      'naving',
      'navOpen',
      'navCols',
      'navRows',
    ])
  },
  watch: {
    naving: function () {
      if (!this.naving && this.navOpen) {
        console.log('nav: should set nav block');
        
      }
      else if (this.naving && !this.navOpen) {
        console.log("nav: should be reset");
      }
    }
  },
  methods: {
    initIntro() {
      this.animIntro = anime({
        targets: this.$refs.content.children,
        duration: 500,
        easing: 'easeOutExpo',
        delay: anime.stagger(100),
        opacity: [0,1],
        marginLeft: [-15, 0],
        marginRight: [15, 0]
      })
    },
    handleHover() {

    }
  },
  mounted () {
    this.initIntro();
    this.animIntro.play();
  }
}
</script>

<style scoped>

  #info {
    padding: 0 10%;
  }

  .arrow {
    margin-left: 10px;
  }

  #resume>h5 {
    display: inline-block;
  }

  #intro>h1 {
    margin-bottom: 7px;
  }

  #intro>h3 {
    margin-bottom: 21px;
  }

  #work {
    margin-top: 50px;
  }

  #work>h6 {
    margin-bottom: 20px;
  }

  #resume:hover > #right {
    margin-left: 10px;
  }

  #work>a:hover>h2>.arrow {
    margin-left: 20px;
    margin-bottom: 10px
  }

  .arrow, #right {
    transition: margin 100ms
  }

  .work>a>h6 {
    display: inline-block;
    width: min-content;
    margin-right: 7px;
    margin-bottom: 6px;
    border: 1px solid;
    background-color: initial;
    border-radius: 5px;
    white-space: nowrap;
    padding: 4px 8px 4px 8px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.7px;
  }
</style>