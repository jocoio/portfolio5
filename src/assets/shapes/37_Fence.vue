<template>
  <svg 
    ref="svg"
    width="100%" 
    height="100%" 
    viewBox="0 0 150 150" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg"
>
<rect width="150" height="150" :fill="pri"/>
<g>
<line x1="57.2914" y1="198.414" x2="172.198" y2="-0.610358" stroke="white" stroke-width="3"/>
<line x1="73.524" y1="207.786" x2="188.431" y2="8.76147" stroke="white" stroke-width="3"/>
<line x1="89.7565" y1="217.158" x2="204.664" y2="18.1333" stroke="white" stroke-width="3"/>
<line x1="41.0589" y1="189.043" x2="155.966" y2="-9.98224" stroke="white" stroke-width="3"/>
<line x1="24.8263" y1="179.671" x2="139.733" y2="-19.3541" stroke="white" stroke-width="3"/>
<line x1="8.59378" y1="170.299" x2="123.501" y2="-28.7259" stroke="white" stroke-width="3"/>
<line x1="-7.63876" y1="160.927" x2="107.268" y2="-38.0978" stroke="white" stroke-width="3"/>
<line x1="-23.8713" y1="151.555" x2="91.0358" y2="-47.4696" stroke="white" stroke-width="3"/>
<line x1="-40.1037" y1="142.183" x2="74.8033" y2="-56.8415" stroke="white" stroke-width="3"/>
<line x1="-56.3363" y1="132.812" x2="58.5708" y2="-66.2133" stroke="white" stroke-width="3"/>
<line x1="170.161" y1="144.775" x2="63.4034" y2="-40.1344" stroke="white" stroke-width="3"/>
<line x1="218.859" y1="116.66" x2="112.101" y2="-68.25" stroke="white" stroke-width="3"/>
<line x1="153.929" y1="154.147" x2="47.1709" y2="-30.7626" stroke="white" stroke-width="3"/>
<line x1="202.626" y1="126.031" x2="95.8685" y2="-58.8781" stroke="white" stroke-width="3"/>
<line x1="137.696" y1="163.519" x2="30.9385" y2="-21.3907" stroke="white" stroke-width="3"/>
<line x1="186.394" y1="135.403" x2="79.636" y2="-49.5063" stroke="white" stroke-width="3"/>
<line x1="121.464" y1="172.891" x2="14.7059" y2="-12.0189" stroke="white" stroke-width="3"/>
<line x1="72.7659" y1="201.006" x2="-33.9917" y2="16.0967" stroke="white" stroke-width="3"/>
<line x1="105.231" y1="182.263" x2="-1.52664" y2="-2.64704" stroke="white" stroke-width="3"/>
<line x1="56.5334" y1="210.378" x2="-50.2243" y2="25.4685" stroke="white" stroke-width="3"/>
<line x1="88.9984" y1="191.634" x2="-17.7592" y2="6.72485" stroke="white" stroke-width="3"/>
<line x1="40.3008" y1="219.75" x2="-66.4568" y2="34.8404" stroke="white" stroke-width="3"/>
</g>

</svg>
</template>

<script>
import anime from 'animejs';

export default {
  data: function () {
    return {
      animIntro: null,
      animMain: null
    }
  },
  computed: {},
  props: {
    pri: String,
    sec: String
  },
  components: {},
  methods: {
    playMain: function () {
      console.log('animating');
    },
    playIntro: function () {
      this.animIntro.play();
    },
    initIntro: function () {
      this.animIntro = anime({
        duration: 500,
        targets: this.$refs.svg,
        easing: 'easeInOutQuad',
        autoplay: false,
        opacity: [0, 1]
      }) 
    },
    initMain: function () {
      this.animMain = anime.timeline({
        targets: this.$refs.svg,
        autoplay: false,
      })
      .add({
        duration: 500,
        easing: 'easeInOutQuad',
        opacity: [1, 0]
      })
      .add({
        duration: 500,
        easing: 'easeInOutQuad',
        opacity: [0, 1]
      })
    }
  },
  watch: {},
  created: function () {},
  mounted: function () {
    this.initMain();
    this.initIntro();
  }
}
</script>

<style scoped>
</style>