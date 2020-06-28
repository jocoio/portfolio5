<template>
  <div class="info" ref="content">
      <h1>Hi, I'm Jon</h1>
      <h3 id="intro">I’m creative developer working with art and technology to share stories and build unique experiences.</h3>
  </div>
</template>

<script>
  import anime from 'animejs';
  import { mapState } from 'vuex';

  export default {
  name: 'Nav',
  data: function () {
    return {
      animIntro: null
    }
  },
  components: {},
  computed: {
    ...mapState([
      'naving',
      'navOpen',
      'navCols',
      'navRows',
    ]),
    size_style () {
      return {
        width: (100 * this.navCols) + '%',
        height: (100 * this.navRows) + '%'
      }
    }
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
    }
  },
  mounted () {
    this.initIntro();
    this.animIntro.play();
  }
}
</script>

<style scoped>
  .info {
    
    padding: 0 2rem;
    text-align: left;
    overflow: scroll;
  }

  #intro {
    max-width: 300px;
  }
</style>