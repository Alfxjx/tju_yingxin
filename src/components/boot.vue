<template>
  <div class="boot">
    <div class="cover"></div>
    <!--<img src="../../static/img/boot.png" width="100%" height="100%" alt="">-->
    <div class="link one">
      <span class="title">相关网站</span>
      <ul>
        <li class="link-li" v-for="(usualItem, index) in usuals" :key="index">
          <a class="link-item" :href="usualItem.link">{{usualItem.name}}</a>
        </li>
      </ul>
    </div>
    <div class="link two">
      <span class="title">融入天大</span>
      <ul>
        <li class="link-li" v-for="(associationItem, index) in associations" :key="index">
          <a class="link-item" :href="associationItem.link">{{associationItem.name}}</a>
        </li>
      </ul>
    </div>
    <img class="qrcode" src="../../static/img/qrcode.JPG" width="129px" height="129px" alt="">
    <img class="shield" src="../../static/img/shield.png" width="120" height="156" alt="">
    <div class="bottom">
      <ul>
        <li>地址：天津市南开区卫津路92号 | 邮编：300072</li>
        <li>天津大学信息与网络中心制作 津ICP备05004358号 津教备0316号</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'boot',
    data () {
      return {
        usuals: [
          {name: '天津大学', link: '#'},
          {name: '招生网', link: '#'},
          {name: '天津大学办公网', link: '#'},
          {name: '迎新网', link: '#'}
        ],
        associations: [
          {name: '天津大学学生会', link: '#'},
          {name: '天外天', link: '#'},
          {name: '求实BBS', link: '#'}
        ]
      }
    }
  }
</script>

<style scoped>
  .boot {
    display: flex;
    position: relative;
    width: 100%;
    height: 671px;
    margin: 0px;
    background: #000;
    background-image: url("../../static/img/boot.png");
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .cover {
    position: absolute;
    left: 0px;
    top: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    background: rgba(42, 42, 42, 0.9);

  }

  ul {
    padding-left: 0px;
  }

  li {
    list-style: none;
  }

  li a {
    text-decoration: none;
  }

  .link {
    display: inline-block;
    z-index: 20;
  }

  .link-li {
    width: 150px;
    margin: 0px;
  }

  .one {
    margin-top: 188px;
    margin-left: 345px;
    margin-right: 80px;
  }

  .two {
    margin-top: 188px;
    margin-right: 380px;
  }

  .qrcode {
    margin-top: 208px;
    margin-right: 100px;
    z-index: 20;
  }

  .shield {
    margin-top: 195px;
    z-index: 20;
  }

  .title {
    font-family: Arial, sans-serif;
    line-height: 28px;
    font-size: 28px;
    color: white;
    width: 150px;
    margin-right: 0px;
  }

  .link-item {
    color: #AAAAAA;
    font-family: "Arial Narrow", sans-serif;
    font-weight: 500;
    line-height: 31px;
    font-size: 21px;
    vertical-align: top;
  }

  .bottom {
    position: absolute;
    padding-left: 170px;
    padding-right: 170px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 144px;
  }

  .bottom li {
    font-family: 'pingfang';
    font-size: 36px;
    color: #D4D4D4;
    line-height: 26px;
  }

  .bottom li:first-child {
    border-top: 4px solid #fff;
    margin-top: 5px;
    width: 1521px;
    padding-top: 9px;
  }
</style>
