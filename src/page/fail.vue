<template>
  <div class="fail">
    <div class="upper">
      <div class="card">
        <div class="head">
          <img class="fail-logo" width="100px" height="100px" src="../../static/img/fail-logo.png" alt="">
          <p class="fail-title">未查询到该生信息!</p>
        </div>
        <div class="reason">
          <ul>
            <li id="reason-title">可能原因如下：</li>
            <li class="content">考生录取失败；</li>
            <li class="content">
              登录入口未刷新，请刷新页面，重新
              <router-link to="/query">登录</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bot">
      <div class="bot-head">
        <span id="bot-head-content1">如有其它问题，请致电</span><span id="bot-head-content2">天津大学招生办：022-xxxxxxxx</span>
      </div>
      <div class="bot-main">
        <div class="links">
          <span class="links-title">相关网站</span>
          <ul class="link-ul">
            <li class="link-item" v-for="(link,index) in links" :key="index">
              {{link.name}}
            </li>
          </ul>
        </div>
        <div class="qrcode">
          <img class="qr-pic" src="../../static/img/qrcode.JPG" width="135px" height="138px" alt="">
          <p class="qr-desc">天津大学招生办官方微信</p>
        </div>
      </div>
      <div class="bot-bot">
        <div class="bot-bot-placeholder"></div>
        <div class="bot-wrapper">
          <ul>
            <li class="bot-info" id="first-info">地址：天津市南开区卫津路92号 | 邮编：300072</li>
            <li class="bot-info">天津大学信息与网络中心制作 津ICP备05004358号 津教备0316号</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'fail',
    data () {
      return {
        links: [
          {name: '天津大学', link: '#'},
          {name: '迎新网', link: '#'},
          {name: '天津大学办公网', link: '#'},
          {name: '招生网', link: '#'}
        ]
      }
    }
  }
</script>

<style scoped>
  .fail {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .upper {
    flex: 1;
    height: 565px;
    background-color: rgb(53, 180, 235);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 906px;
    height: 441px;
    background-color: white;
    box-shadow: 5px 5px 5px rgba(121, 121, 121, 0.5);
  }

  .head {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: rgb(128, 212, 249);
    margin-top: 54px;
    width: 832px;
    height: 206px;
  }

  .fail-logo {
    margin: 50px 30px 50px 0;
  }

  .fail-title {
    line-height: 100px;
    font-size: 50px;
    vertical-align: center;
    color: rgb(0, 75, 135);
  }

  #reason-title {
    color: rgb(0, 75, 135);
    font-size: 25px;
    margin-top: 23px;
    margin-bottom: 10px;
  }

  .content {
    list-style: none;
    font-size: 16px;
  }

  .bot {
    flex: 1;
    height: 720px;
    background-color: rgb(51, 51, 51);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bot-head {
    flex: 1;
    height: 67px;
    padding-top: 44px;
    display: flex;
    justify-content: center;
  }

  #bot-head-content1 {
    color: white;
    font-size: 20px;
  }

  #bot-head-content2 {
    color: rgb(255, 166, 0);
    font-weight: 500;
    font-size: 20px;
  }

  .bot-main {
    flex: 7;
    width: 46%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .links-title {
    color: white;
    font-size: 28px;
    line-height: 30px;
  }

  .link-ul {
    padding-left: 0px;
    margin-top: 30px;
  }

  .link-item {
    list-style: none;
    color: rgb(212, 212, 212);
    font-size: 20px;
  }

  .qrcode {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .qr-desc {
    color: rgb(212, 212, 212);
    font-size: 20px;
  }

  .bot-bot {
    flex: 2;
    width: 85%;
    display: flex;
    flex-direction: row;
    border-top: 2px solid rgb(212, 212, 212);
  }

  .bot-bot-placeholder {
    flex: 2;
  }

  .bot-wrapper {
    flex: 8;
  }

  .bot-info {
    list-style: none;
    color: rgb(212, 212, 212);
    font-size: 18px;
  }

  #first-info {
    margin-top: 37px;
  }
</style>
