<template>
  <div id="index">
    <tab></tab>
    <div class="home-wrapper">
      <home></home>
    </div>
    <login-view></login-view>
    <boot></boot>
  </div>
</template>
<script type="text/ecmascript-6">
  import tab from '../components/tab'
  import home from '../components/home'
  import loginView from '../components/view'
  import boot from '../components/boot'

  export default {
    components: {
      tab, home, loginView, boot
    }
  }
</script>
<style scoped>
  #index {
    width: 100%;
  }

  .home-wrapper {
    width: 1860px;
    margin-top: 125px;
    display: flex;
    justify-content: center;
  }
</style>
