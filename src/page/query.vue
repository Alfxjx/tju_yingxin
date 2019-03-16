<template>
  <div class="query">
    <div class="head">
      <img src="../../static/img/query-logo.png" width="100%" height="668px" alt="">
    </div>
    <div class="main">
      <div class="login">
        <div class="login-title">
          <img class="logo" src="../../static/img/logo.png" width="154px" height="127px" alt="">
          <h1 class="title">本科生录取查询入口</h1>
        </div>
        <div class="input-location">
          <div class="city-list" v-show="isShowList">
            <ul class="choose-city">
              <li class="city-item" v-for="(city,index) in cities" :key="index" @click="chooseCity(index)">
                <input type="radio" name="city" @click="chooseCity(index)">
                {{city.name}}
              </li>
            </ul>
          </div>
          <p class="hint-province">省份</p>
          <input class="input-pro" type="text" placeholder="选择省份" v-model="location" @click="showList">
          <button class="choose" @click="showList">
            <img src="../../static/img/down2.png" width="50px" height="28px" alt="">
          </button>
        </div>
        <div class="input-number">
          <p class="hint-num">考生号</p>
          <input class="input-num" type="text" placeholder="请输入高考准考证号" v-model="stuNum">
        </div>
        <div class="btnLogin">
          <button class="btnQuery" @click="query">查询</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'query',
    data () {
      return {
        location: '',
        stuNum: '',
        isShowList: false,
        isExist: true,
        noRes: true,
        cities: [
          {name: '北京'},
          {name: '天津'},
          {name: '河北'},
          {name: '北京'},
          {name: '天津'},
          {name: '北京'},
          {name: '天津'},
          {name: '北京'},
          {name: '天津'},
          {name: '北京'},
          {name: '天津'},
          {name: '北京'},
          {name: '天津'}
        ]
      }
    },
    methods: {
      showList () {
        this.isShowList = !this.isShowList
      },
      chooseCity (index) {
        this.location = this.cities[index].name
        this.isShowList = false
      },
      query () {
        if (this.isExist) {
          this.$router.push('/error')
        } else {
          this.$router.push('/fail')
        }
      }
    }
  }
</script>

<style scoped>
  .query {
    margin: -8px;
  }

  .main {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 1240px;
    background-image: url("../../static/img/side.png");
  }

  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: -100px;
    width: 1512px;
    height: 926px;
    background: linear-gradient(rgba(254, 254, 255, 0.7), #DEF4FD, #DCF3FE);
  }

  .login-title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 76px;
  }

  .logo {
    margin-right: 50px;
  }

  .title {
    font-size: 53px;
    color: rgb(254, 194, 16);
  }

  .input-location {
    display: flex;
    position: relative;
    flex-direction: row;
    margin-bottom: 42px;
  }

  .city-list {
    background-color: #f3f5f7 !important;
    width: 404px;
    height: 200px;
    overflow: scroll;
    position: absolute;
    top: 111px;
    left: 240px;
    background-color: white;
    z-index: 10;
  }

  .city-item {
    line-height: 40px;
    font-size: 24px;
  }

  .hint-province {
    margin: 0px 23px 0 0;
    width: 217px;
    line-height: 105px;
    font-size: 50px;
    text-align: center;
    color: white;
    background-color: rgb(0, 75, 135);
  }

  .input-pro {
    width: 400px;
    height: 105px;
  }

  .input-pro::-webkit-input-placeholder {
    text-align: center;
    color: rgb(170, 170, 170);
    font-size: 50px;
  }

  .choose {
    width: 140px;
    color: white;
    background-color: rgb(0, 75, 135);
  }

  .input-number {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
  }

  .hint-num {
    margin: 0px 23px 0 0;
    width: 217px;
    line-height: 105px;
    font-size: 45px;
    text-align: center;
    color: white;
    background-color: rgb(0, 75, 135);
  }

  .input-num {
    width: 540px;
    height: 106px;
  }

  .input-num::-webkit-input-placeholder {
    text-align: center;
    color: rgb(170, 170, 170);
    font-size: 45px;
  }

  .btnQuery {
    width: 210px;
    height: 106px;
    font-size: 45px;
    color: white;
    background-color: rgb(0, 75, 135);
  }

  .choose-city {
    list-style: none;
  }
</style>
