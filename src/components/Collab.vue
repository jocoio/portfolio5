<template>
    <div>
      <div id="cont">
        <Cross id="cross" />
        <component v-bind:is="curCompany" id="logo" />
      </div>
    </div>
</template>

<script>
  import anime from 'animejs';
  import { mapState } from 'vuex';
  import Cross from '../assets/icons/Cross';
  import hellomonday from '../assets/logos/hellomonday';
  import stink from '../assets/logos/stink';
  import upperquad from '../assets/logos/upperquad';
  import zero from '../assets/logos/zero';

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
    hellomonday,
    stink,
    upperquad,
    zero
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
        targets: '#cont',
        duration: 1000,
        easing: 'easeOutExpo',
        delay: anime.stagger(100),
        opacity: [0, 1],
        translateY: [15, 0]
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
    margin: auto 25px auto 0;
    height: 16px;
  }

  @media only screen and (max-width: 768px) {
    #cross {
      margin-right: 15px;
    }
  }


</style>