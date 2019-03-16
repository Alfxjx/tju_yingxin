<template>
  <div class="news-wrapper">
    <h2 class="news-title">迎新快讯</h2>
    <div class="left">
      <div class="yellow"></div>
      <div class="blue"></div>
      <img class="school" src="../../static/img/school.JPG" width="336" height="236" alt="">
    </div>
    <div class="news-main">
      <div class="news-list">
        <div class="wrapper">
          <ul>
            <li>MORE>></li>
            <li v-for="(item,index) in newslist.slice(0,14)" :key="index">
              <span class="news-name">{{item.name}}</span>
              <span class="news-time">[{{item.time}}]</span>
            </li>
          </ul>
        </div>
      </div>
      <img class="side-img" src="../../static/img/sqff.png" width="163" height="379" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'news',
    data () {
      return {
        newslist: [
          {name: '天津大学校园卡使用手册（新生版）', link: '#', time: '2018-10-19'},
          {name: '天津大学2018级本科生报到须知——报到注册 ', link: '#', time: '2018-10-19'},
          {name: '天津大学2018级本科生报到须知——入学考试及主修科目等信息 ', link: '#', time: '2018-10-19'},
          {name: '天津大学2018级本科生报到须知——户口迁移', link: '#', time: '2018-10-19'},
          {name: '天津大学2018级本科生报到须知——党团关系及档案', link: '#', time: '2018-10-19'},
          {name: '天津大学2018级本科生报到须知——收费项目及交费方式', link: '#', time: '2018-10-19'},
          {name: '天津大学2018级本科生报到须知——公寓管理', link: '#', time: '2018-10-19'},
          {name: '天津大学校园卡使用手册（新生版）', link: '#', time: '2018-10-19'},
          {name: '天津大学2018级本科生报到须知——报到注册 ', link: '#', time: '2018-10-19'},
          {name: '天津大学2018级本科生报到须知——入学考试及主修科目等信息 ', link: '#', time: '2018-10-19'},
          {name: '天津大学2018级本科生报到须知——户口迁移', link: '#', time: '2018-10-19'},
          {name: '天津大学2018级本科生报到须知——党团关系及档案', link: '#', time: '2018-10-19'},
          {name: '天津大学2018级本科生报到须知——收费项目及交费方式', link: '#', time: '2018-10-19'},
          {name: '天津大学2018级本科生报到须知——公寓管理', link: '#', time: '2018-10-19'}
        ]
      }
    }
  }
</script>

<style scoped>
  .news-wrapper {
    display: flex;
    flex-direction: row;
    position: relative;
  }

  .left {
    position: relative;
    width: 340px;
    height: 640px;
  }

  .news-title {
    position: absolute;
    top: 21px;
    left: 202px;
    margin: 0px;
    z-index: 10;
    width: 274px;
    text-align: center;
    background-color: white;
    box-shadow: 5px 5px 5px rgba(121, 121, 121, 0.5);
    line-height: 88px;
    font-size: 61px;
    font-weight: 400;
    color: rgb(85, 85, 85);
  }

  .yellow {
    position: absolute;
    top: 0px;
    left: 121px;
    z-index: 5;
    background-color: rgb(254, 194, 16);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
    width: 150px;
    height: 150px;
  }

  .blue {
    position: absolute;
    top: 78px;
    left: 88px;
    background-color: rgb(66, 106, 148);
    box-shadow: 5px 5px 5px rgba(121, 121, 121, 0.5);
    width: 315px;
    height: 218px;
  }

  .school {
    position: absolute;
    bottom: 0px;
    left: 0px;
  }

  .news-main {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-right: 99px;
    width: 1077px;
    height: 546px;
    background-color: white;
    box-shadow: 5px 5px 5px rgba(121, 121, 121, 0.5);
  }

  .news-list {
    margin-left: 100px;
  }

  .side-img {
    margin: 52px 50px 0px 50px;
  }

  .wrapper ul {
    margin-top: 107px;
    width: 714px;
    height: 476px;
    padding: 0px;
    display: flex;
    flex-direction: column;
  }

  .wrapper ul li {
    display: flex;
    justify-content: space-between;
  }

  .wrapper ul li:first-child {
    justify-content: flex-end;
    margin-bottom: 5px;
  }

  .news-name, .news-time {
    font-size: 18px;
    line-height: 26px;
  }

  .news-time {
    color: rgb(121, 121, 121);
  }
</style>
