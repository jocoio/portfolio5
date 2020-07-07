<template>
  <div id="info" ref="content">
      <div id="intro">
        <h1>Hi, I'm Jon</h1>
        <h3>
          I’m a developer and creative currently in San Diego. I love working with 
          <a href="https://www.instagram.com/joco.io" target="_blank">media</a>
           and 
          <a href="https://www.github.com/jocoio" target="_blank">technology</a> 
          to share stories and build unique experiences.</h3>
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
        <a href="https://miraj-web.herokuapp.com/" target="_blank">
          <h2>Miraj<span class="arrow">↗&#xFE0E;</span></h2>
          <!-- <h6>React</h6>
          <h6>Sanity.io</h6>
          <h6>Twitter API</h6> -->
        </a>
        <a href="https://youtu.be/x537ydNKKtE" target="_blank">
          <h2>Video Reel<span class="arrow">↗&#xFE0E;</span></h2>
        </a>
      </div>
      <a href="mailto:joco.hello@gmail.com" target="_blank" id="contact">
        <h5 >Let's work together?</h5> <RightArrow/>
      </a>
  </div>
</template>

<script>
  import anime from 'animejs';
  import RightArrow from '../assets/icons/RightArrow';

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
  computed: {},
  watch: {
  },
  methods: {
    initIntro() {
      this.animIntro = anime({
        targets: this.$refs.content.children,
        duration: 500,
        easing: 'easeOutExpo',
        delay: anime.stagger(100),
        opacity: [0,1],
        translateX: [-15, 0]
      })
    },
  },
  mounted () {
    this.initIntro();
    this.animIntro.play();
  }
}
</script>

<style scoped>

  .arrow {
    margin-left: 10px;
  }

  #resume>h5, #contact>h5 {
    display: inline-block;
  }

  #intro>h1 {
    margin-bottom: 7px;
  }

  #intro>h3 {
    margin-bottom: 21px;
    max-width: 85%;
  }

  #intro>h3>a {
    font-weight: 600;
  }

  #work {
    margin-top: 50px;
  }

  #work>h6 {
    margin-bottom: 20px;
  }

  #resume:hover > #right, #contact:hover > #right {
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

  #contact {
    position: fixed;
    bottom: 50px;
  }
</style>