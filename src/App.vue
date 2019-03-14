<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import index from './page/index'

  export default {
    components: {
      index
    }
  }
</script>
<style>
  #app {
    width: 100%;
  }
</style>
