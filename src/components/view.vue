<template>
  <div class="login">
    <div class="side-left">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
    </div>
    <div class="main">
    </div>
    <div class="side-right">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
      <img src="../../static/img/side.png" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "login"
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
