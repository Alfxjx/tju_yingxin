<template>
  <div class="home">
    <div class="flex-side"></div>
    <div class="image-wrapper">
      <img src="../../static/img/head.png" width="100%" alt="">
      <div class="welcome">
        <img class="logo" src="../../static/img/logo.png" width="157px" height="137px" alt="">
        <div class="title-wrapper">
          <span class="title">{{title}}</span>
          <span class="sub-title">{{subTitle}}</span>
        </div>
      </div>
      <div class="cover"></div>
      <!--<div class="line">-->
        <!--<img src="../../static/img/line1.png" width="416" height="163" alt="">-->
      <!--</div>-->
    </div>
    <div class="flex-side"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "home",
    data() {
      return {
        title: '欢迎来到天津大学！',
        subTitle: 'Welcome to Tianjin University'
      }
    }
  }
</script>
<style>
  .home{
    display: flex;
  }
  .flex-side{
    flex: 0 0 132px
  }
  .image-wrapper {
    flex: 1;
    position: relative;
    width: 100%;
    padding: 120px 0px 0px 0px;
  }

  .welcome {
    position: absolute;
    bottom: 45px;
    left: 27px;
    margin-left: 50px;
    z-index: 10;
  }

  .logo {
    position: absolute;
    bottom: -15px;
  }

  .title-wrapper {
    display: inline-block;
    margin-left: 167px;
    padding-top: 20px;
    vertical-align: center;
  }

  .title {
    display: block;
    color: #FEC210;
    line-height: 54px;
    font-size: 44px;
    vertical-align: top;
    font-family: negreta, arial, sans-serif;
  }

  .sub-title {
    display: block;
    margin-top: 10px;
    color: #fff;
    line-height: 33px;
    font-size: 25px;
    vertical-align: top;
    font-family: "Arial Narrow", sans-serif;
  }

  .line {
    display: inline-block;
    position: absolute;
    right: 44px;
    bottom: 0px;
  }

  .cover {
    position: absolute;
    bottom: 0px;
    left: 0px;
    margin-left: 44px;
    margin-right: 44px;
    filter: opacity(50%);
    background: linear-gradient(#fff, #DCF2FD);
    width: 1512px;
    height: 183px;
  }

</style>
