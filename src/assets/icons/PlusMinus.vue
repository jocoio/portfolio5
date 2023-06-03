<template>
  <div class="icon" id="">
    <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        :style="bar_style"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.72317 18.8738L8.72316 0L10.1507 7.58643e-07L10.1508 18.8739L8.72317 18.8738Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.8739 10.1507L3.37175e-05 10.1507L0 8.72316L18.8739 8.72313L18.8739 10.1507Z"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "PlusMinus",
  data: function () {
    return {};
  },
  props: {
    minus: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    bar_style() {
      return {
        transform: `rotate(${this.minus ? "270deg": "0deg"})`,
        transformOrigin: "center",
        transition: "all 450ms ease-out",
      };
    },
  },
};
</script>

<style>
.icon {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
