<template>
  <div class="screen">
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  body {
    background: #383c55;
    width: 100%;
    height: 100%;
    font:12px "Open Sans", sans-serif;
    box-sizing: border-box;
  }
  .screen{
    width: 320px;
    height: 560px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    background: #fff;
    box-sizing: inherit;
    @media (--small-viewport) {
      width: 100%;
      height: 100%;
    }
  }
</style>
