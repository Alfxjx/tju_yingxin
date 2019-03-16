<template>
  <div class="home">
    <img src="../../static/img/head.png" width="1594px" height="600px" alt="">
    <div class="welcome">
      <img class="logo" src="../../static/img/logo.png" width="157px" height="137px" alt="">
      <div class="title-wrapper">
        <span class="title">{{title}}</span>
        <span class="subtitle">{{subTitle}}</span>
      </div>
    </div>
    <div class="cover"></div>
    <!--<div class="line">-->
    <!--<img src="../../static/img/line1.png" width="416" height="163" alt="">-->
    <!--</div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'home',
    data () {
      return {
        title: '欢迎来到天津大学！',
        subTitle: 'Welcome to Tianjin University'
      }
    }
  }
</script>
<style scoped>

  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .welcome {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: absolute;
    left: 55px;
    bottom: 30px;
    z-index: 10;
  }

  .logo {
    margin-right: 30px;
  }

  .title-wrapper {
    display: flex;
    height: 137px;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    line-height: 54px;
    font-size: 44px;
    color: rgb(254, 194, 16);
  }

  .subtitle {
    color: #fff;
    line-height: 33px;
    font-size: 25px;
  }

  .cover {
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(220, 242, 253, 0.5));
    width: 1512px;
    height: 183px;
    position: absolute;
    left: 55px;
    bottom: 0;
  }
</style>
