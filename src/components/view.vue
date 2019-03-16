<template>
  <div class="login">
    <div class="side-left">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
    </div>
    <div class="main">
      <login></login>
      <xuzhi></xuzhi>
      <news></news>
    </div>
    <div class="side-right">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import login from './login'
  import xuzhi from './xuzhi'
  import news from './news'

  export default {
    name: 'view',
    components: {
      login, xuzhi, news
    }
  }
</script>

<style>
  .login {
    display: flex;
  }

  .main {
    flex: 1;
    background-color: #DAF2FD;
  }

  .side-left, .side-right {
    flex: 0 0 175px;
    margin-top: -20px;
  }
</style>
