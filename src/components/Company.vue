<template>
  <div>
    <div id="cont" ref="modes">
      <Cross id="cross" />
      <HelloMonday id="logo"/>
    </div>
  </div>
</template>

<script>
  import anime from 'animejs';
  import { mapState } from 'vuex';
  import router from '../router';
  import Cross from '../assets/icons/Cross';
  import HelloMonday from '../assets/logos/HelloMonday';

  export default {
  data: function () {
    return {
      animIntro: null
    }
  },
  components: {
    Cross,
    HelloMonday
  },
  computed: {
    ...mapState([
      'mode',
      'modes',
      'naving',
    ]),
  },
  watch: {},
  methods: {
    active (idx) {
      return this.modes[idx] === this.mode;
    },
    handleClick (idx) {
      if (!this.active(idx)) {
        router.push({ name: this.modes[idx] });
      }
    },
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