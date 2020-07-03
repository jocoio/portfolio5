<template>
  <div id="nav">
      <Logo v-if="activeIcon === 'logo'" @click.native="toggleNav"/>  
      <div id="navContent" v-if="open" :style="width_sty">
        <Modes id="modes" v-if="open" :style="block_sty"/>
        <Info />
      </div>
  </div>
</template>

<script>
  // import anime from 'animejs';
  import { mapState, mapGetters } from 'vuex';
  import Info from './Info';
  import Logo from '../assets/icons/Logo';
  import Modes from './Modes';

  export default {
  name: 'Nav',
  data: function () {
    return {
      activeIcon: 'logo',
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
      'navWidth'
    ]),
    ...mapGetters([
      'blockWidth',
      'blockHeight'
    ]),
    open () {
      return this.navOpen & !this.naving
    },
    open_sty () {
      return {
        width: '100%',
        height: '100%',
      }
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
  watch: {},
  methods: {
    toggleNav: function () {
      this.$store.dispatch('changeNav');
    }
  },
  mounted () {
  }
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