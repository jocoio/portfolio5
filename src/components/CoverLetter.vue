<template>
  <div ref="letter" id="letter">
    <h1 >Hey y'all!</h1>
    <h3>I’m Jon, a developer, creative, and big fan of your work. You have an incredible attention to detail that shines through every experience you make. It inspires me constantly to push my creative output, most recently with this site here.</h3>
    <h3>If anyone is free to talk about what a path to {{companies[curCompany].name}} could look like, or more generally how to break into this caliber of studio, I’d really appreciate it.</h3>
    <h3>Thanks in advance for your time,</h3>
    <h3>Jon</h3>
    <div id="home" @click="goHome">
        <LeftArrow/><h5>Home</h5>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
import { mapState } from 'vuex';
import router from '../router';
import LeftArrow from '../assets/icons/LeftArrow';

export default {
  name: "Nav",
  data: function() {
    return {
      animIntro: null,
    };
  }, 
  components: {
    LeftArrow
  },
  computed: {
    ...mapState([
      'companies',
      'curCompany'
    ])
  },
  watch: {
  },
  methods: {
    goHome () {
      router.push({name: 'home'});
    },
    initIntro () {
      this.animIntro = anime.timeline().add({
        targets: this.$refs.letter.children,
        duration: 500,
        delay: anime.stagger(200),
        easing: "easeOutExpo",
        opacity: [0, 1],
        translateY: [15, 0]
      });
    }
  },
  mounted() { 
    this.initIntro();
    this.animIntro.play();
  }
};
</script>

<style scoped>

  #letter > h1 {
    margin-bottom: 21px;
  }

  #letter > h3 {
    margin-bottom: 21px;
  }

  #letter > h3 > a {
    font-weight: 600;
  }

  #home:hover > #left {
    margin-right: 10px;
  }

  #home > h5 {
    display: inline-block;
  }

  #left {
    transition: margin 100ms;
    display: inline-block;
    padding-right: 10px;
  }

  #home {
    cursor: pointer;
    position: fixed;
    bottom: 50px;
  }

  @media only screen and (max-height: 650px) {
    #letter>h1 {
      font-size: 1.5rem;
    }

    #letter>h3 {
      font-size: 1.1rem;
      line-height: 1.4rem
    }
  }
</style>