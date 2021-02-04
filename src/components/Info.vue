<template>
  <div id="info" ref="content">
      <div id="intro">
        <h1>Hi, I'm Jon<Notif /></h1>
        <h3>
          I’m a developer and creative originally from New England. I love working with 
          <a href="https://www.instagram.com/joco.io" target="_blank">media</a>
           and 
          <a href="https://www.github.com/jocoio" target="_blank">technology</a> 
          to share stories and build unique experiences.</h3>
        <a id="resume" target="_blank" href="https://nbviewer.jupyter.org/github/jocoio/portfolio5/blob/master/src/assets/resume.pdf">
          <h5 >Full resume</h5> <RightArrow/>
        </a>
      </div>
      <div id="work">
        <h6>Recent work</h6>
        <a href="https://www.diversitytoolkit.org/" target="_blank">
          <h2>Flux<span class="arrow">↗&#xFE0E;</span></h2>
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
        <a href="https://youtube.com/playlist?list=PLNzX5UGbEkhyzqhn7mwTSwDsAHG_3kuQ3" target="_blank">
          <h2>Music Lab<span class="arrow">↗&#xFE0E;</span></h2>
        </a>
      </div>
      <a href="https://www.linkedin.com/in/jocoio/" target="_blank" id="contact">
        <h5><Notif/> Let's connect!</h5><RightArrow/>
      </a>
  </div>
</template>

<script>
  import anime from 'animejs';
  import Notif from '../assets/icons/Notif';
  import RightArrow from '../assets/icons/RightArrow';

  export default {
  name: 'Nav',
  data: function () {
    return {
      animIntro: null
    }
  },
  components: {
    Notif,
    RightArrow
  },
  computed: {},
  watch: {
  },
  methods: {
    initIntro() {
      this.animIntro = anime.timeline()
      .add({
        targets: ['#intro', '#work'],
        duration: 600,
        delay: anime.stagger(150),
        easing: 'easeOutExpo',
        opacity: [0,1],
        translateX: [-15, 0]
      })
      .add({
        targets: ['#dot', '#contact'],
        duration: 350,
        easing: 'easeOutBack',
        opacity: [0, 1],
        translateY: [25, 0]
      }, '+=750')
    },
  },
  mounted () {
    this.initIntro();
    this.animIntro.play();
  }
}
</script>

<style scoped>

  h1 > #dot {
    padding-bottom: 20px;
    padding-left: 10px;
  }

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
    max-width: 83%;
  }

  #intro>h3>a {
    font-weight: 600;
  }

  #work {
    margin-top: 50px;
  }

  #work>h6 {
    margin-bottom: 10px;
  }

  #resume:hover > #right, #contact:hover > #right {
    margin-left: 10px;
  }

  #work>a:hover>h2>.arrow {
    margin-left: 20px;
    margin-bottom: 10px
  }

  #right {
    display: inline-block;
    padding-left: 5px;
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

  h5 > #dot {
    padding-right: 5px;
  }

  @media only screen and (max-width: 768px) {
    #intro>h3 {
      margin-bottom: 21px;
      max-width: 100%;
    }
  }
</style>