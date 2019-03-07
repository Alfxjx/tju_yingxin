<template>
  <div id="app">
    <tab></tab>
    <home></home>
    <login></login>
    <boot></boot>
  </div>
</template>
<script type="text/ecmascript-6">
  import tab from './components/tab'
  import home from './components/home'
  import login from './components/view'
  import boot from './components/boot'

  export default {
    components: {
      tab, home, login, boot
    }
  }
</script>
<style>
  #app {
    width: 100%;
  }
</style>
