<template>
  <div class="login">
    <div class="side-left"></div>
    <div class="main">
      <login class="login-component"></login>
      <xuzhi></xuzhi>
      <news></news>
    </div>
    <div class="side-right"></div>
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
    width: 80%;
  }

  .main {
    flex: 1;
    background-color: #DAF2FD;
  }

  .login-component {
    z-index: 20;
  }

  .side-left, .side-right {
    flex: 0 0 10%;
    background-image: url("../../static/img/side.png");
  }
</style>
