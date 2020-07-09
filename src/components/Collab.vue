<template>
    <div id="cont" ref="modes" >
      <Cross id="cross" />
      <component v-bind:is="curCompany" id="logo" />
    </div>
</template>

<script>
  import anime from 'animejs';
  import { mapState } from 'vuex';
  import Cross from '../assets/icons/Cross';
  import hellomonday from '../assets/logos/hellomonday';

  export default {
  data: function () {
    return {
      animIntro: null,
    }
  },
  props: {
    company: Object
  },
  components: {
    Cross,
    hellomonday
  },
  computed: {
    ...mapState([
      'curCompany'
    ])
  },
  watch: {
  },
  methods: {
    initIntro () {
      this.animIntro = anime({
        targets: this.$refs.modes,
        duration: 2000,
        easing: 'easeOutExpo',
        delay: anime.stagger(100),
        opacity: [0, 1]
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

  #cont {
    display: flex;
    margin-left: -10%;
  }

  #cross {
    margin: auto 0;
    height: 16px;
  }

  #logo {
    margin-left: 10%;
  }

</style>