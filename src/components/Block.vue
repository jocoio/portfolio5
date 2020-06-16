<template>
  <div class="block"></div>
</template>

<script>
export default {
  name: 'Grid',
  data: function () {
    return {
    }
  },
  props: {
    color: String
  }
}
</script>

<style>
  .block {
    /* text-align: center; */
    transition: border-color 500ms, background-color 250ms;
    border: 0.5px solid #000000;
    box-sizing: border-box;
  }

  .mono {
    background-color: #FFFFFF !important;
    border: 0.5px solid black !important;
  }
</style>