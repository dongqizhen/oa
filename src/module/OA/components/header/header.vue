<template>
  <div id="header">
    <span class="back"
      ><img src="../../../../assets/images/back.png" alt=""
    /></span>
    <h2>
      {{ name }}
    </h2>
    <span class="quit"></span>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {},
    props: {
      name: ""
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../../../static/scss/_commonScss";
  #header {
    height: $header-height;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .back,
    .quit {
      display: flex;
      align-items: center;
      height: 100%;
      width: 44px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    h2 {
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #222222;
      display: flex;
      flex: 1;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  }
</style>