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
@import './style/main.css';

* { margin: 0px; padding: 0px; }
body {
  background: #383c55;
  width: 100%;
  height: 100%;
  font:12px "Open Sans", sans-serif;
}
div.screen{
  width: 320px;
  height: 560px;
  overflow: hidden;
  position: absolute;
  top: 50px;
  left: 50%;
  margin-left: -160px;
  background: #31558a;
}
</style>
