<template>
  <div id="nav">
      <Logo @click.native="togNav"/>  
      <div id="navContent" ref="content" v-if="open" :style="width_sty">
        <Modes id="modes" v-if="open" :style="block_sty"/>
        <Info />
      </div>
  </div>
</template>

<script>
  import anime from 'animejs';
  import { mapState, mapGetters } from 'vuex';
  import Info from './Info';
  import Logo from '../assets/icons/Logo';
  import Modes from './Modes';

  export default {
  name: 'Nav',
  data: function () {
    return {
      animOutro: null
    }
  },
  components: {
    Info,
    Logo,
    Modes
  },
  computed: {
    ...mapState([
      'naving',
      'navOpen',
      'navWidth',
      'introing',
      'transitioning',
      'naving'
    ]),
    ...mapGetters([
      'blockWidth',
      'blockHeight'
    ]),
    open () {
      return this.navOpen & !this.naving
    },
    width_sty () {
      return {
        width: this.navWidth + 'px',
      }
    },
    block_sty () {
      return {
        width: this.blockWidth + 'px',
        height: this.blockHeight + 'px',
        top: '-' + this.blockHeight + 'px'
      }
    }
  },
  watch: {
    naving () {
      // We are naving but want to close
      if (this.naving && !this.navOpen) {
        this.playOutro();
      }
    },
    transitioning () {
      if (this.transitioning) {
        this.playOutro();
      }
    }
  },
  methods: {
    togNav () {
      if (!this.introing && !this.naving) {
        this.$store.dispatch('changeNav');
      }
    },
    playOutro () {
      this.animOutro = anime({
        duration: 250,
        targets: this.$refs.content,
        easing: 'easeInExpo',
        opacity: [1, 0],
      })

      this.animOutro.play();
    }
  },
  mounted () {}
}
</script>

<style scoped>

  #navButtons {
    width: 100%;
    height: 100%;
  }

  #modes {
    position: absolute;
    top: 0;
    right: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  #navContent {
    position: absolute;
    text-align: left;
    z-index: 1;
  }

  .icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    opacity: 1;
  }

  .icon>svg {
    height: 30%;
  }

  @media only screen and (max-width: 768px) {
    #navContent {
      margin-top: 0px;
    }
  }
</style>