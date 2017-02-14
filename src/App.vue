<template>
  <div class="viewport">
    <router-link :to="{name: this.prev}" class="arrow prev" :class="{'disabled': !this.prev}"></router-link>
    <div class="screen">
      <div id="app">
        <router-view ref="mainChild"></router-view>
      </div>
    </div>
    <router-link :to="{name: this.next}" class="arrow next" :class="{'disabled': !this.next}"></router-link>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      links: this.$root.links,
    };
  },
  computed: {
    currentIndex() {
      return this.links.indexOf(this.$route.name);
    },
    prev() {
      return this.currentIndex > 0
        ? this.links[this.currentIndex - 1]
        : undefined;
    },
    next() {
      return this.currentIndex < this.links.length - 1
        ? this.links[this.currentIndex + 1]
        : undefined;
    },
  },
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
  a {
    text-decoration: none;
    &:not(.disabled):hover {
      opacity: 1;
    }
  }
  :root {
    position: relative;
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
    &::-webkit-scrollbar {
      display:none
    }
    @media (--small-viewport) {
      width: 100%;
      height: 100%;
    }
  }
  .arrow {
    position: absolute;
    display: block;
    top: 50%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #fff;
    opacity: .7;
    &:before, &:after {
      content: '';
      position: absolute;
      display: block;
      height: 2px;
      width: 20px;
      background: #fff;
    }
    &:before {
      top: 18px;
      right: 12px;
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
      top: 32px;
      right: 12px;
    }
    &.prev {
      left: 200px;
      transform: rotate(180deg);
    }
    &.next {
      right: 200px;
    }
  }
</style>
