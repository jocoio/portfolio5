<template>
  <div id="modes" ref="modes">
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
        targets: this.$refs.modes,
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
  #modes {
    position: absolute;
    text-align: left;
    bottom: 8%;
    left: 8%;
    overflow: scroll;
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

  #work>a>h2 {
    width: fit-content;
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