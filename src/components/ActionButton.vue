<template>
  <div id="action-button" @click="handleButtonClick" :style="button_style">
    <LeftArrow />
  </div>
</template>

<script>
// Utils
import router from "../router";

// Components
import LeftArrow from "../assets/icons/LeftArrow";

export default {
  name: "ActionButton",
  data: function () {
    return {};
  },
  computed: {
    button_style() {
      return {
        backgroundColor: "#FEFEFE",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        color: "#000000",
        padding: "15px",
        borderRadius: "25px",
        position: "fixed",
        left: "50px",
        bottom: "50px",
        display: "flex",
        cursor: "pointer",
        width: "24px",
        height: "24px",
        opacity: "0",
        zIndex: "2",
      };
    },
  },
  props: {
    tags: Array,
  },
  components: {
    LeftArrow,
  },
  methods: {
    // Main white circle button click
    // Return to the previous page
    handleButtonClick() {
      router.push({
        path: `/projects`,
      });
    },
  },
  watch: {},
  created: function () {},
  mounted: function () {
    // this.intro();
  },
};
</script>

<style>
.tags {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
}
.tags > h6 {
  opacity: 0.75;
}
</style>