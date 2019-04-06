<template>
  <div class="query">
    <!--<div class="head">-->
    <!--<img src="../../static/img/query-logo.png" width="100%" height="668px" alt="">-->
    <!--</div>-->
    <div class="main" :style="{height:calHeight}">
      <div class="login">
        <div class="login-title">
          <img class="logo" src="../../static/img/logo.png" width="75px" height="63px" alt="">
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
            <img src="../../static/img/down2.png" width="20px" height="20px" alt="">
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
    <boot></boot>
  </div>
</template>

<script type="text/ecmascript-6">
  import boot from '../components/boot'

  export default {
    name: 'query',
    data () {
      return {
        calheight: '',
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
    created () {
      this.calHeight = window.innerHeight || `700px`
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
    },
    components: {
      boot
    }
  }
</script>

<style scoped>
  .query {
    margin: -8px;
  }

  .main {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 700px;
    background-image: url("../../static/img/query-logo.png");
    background-size: 100% 100%;
  }

  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    margin-left: 100px;
    width: 400px;
    height: 300px;
    background: linear-gradient(rgba(254, 254, 255, 0.7), #DEF4FD, #DCF3FE);
  }

  .login-title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .logo {
    margin-right: 15px;
  }

  .title {
    font-size: 22px;
    color: rgb(254, 194, 16);
  }

  .input-location {
    display: flex;
    position: relative;
    flex-direction: row;
    margin-bottom: 22px;
  }

  .city-list {
    background-color: #f3f5f7;
    width: 175px;
    height: 150px;
    overflow: scroll;
    position: absolute;
    top: 35px;
    left: 75px;
    z-index: 10;
  }

  .city-item {
    line-height: 20px;
    font-size: 16px;
  }

  .hint-province {
    margin: 0px 13px 0 0;
    width: 60px;
    line-height: 30px;
    font-size: 18px;
    text-align: center;
    color: white;
    background-color: rgb(0, 75, 135);
  }

  .input-pro {
    width: 170px;
    height: 30px;
  }

  .input-pro::-webkit-input-placeholder {
    text-align: center;
    color: rgb(170, 170, 170);
    font-size: 16px;
  }

  .choose {
    width: 40px;
    color: white;
    background-color: rgb(0, 75, 135);
  }

  .input-number {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }

  .hint-num {
    margin: 0px 5px 0 0;
    width: 70px;
    line-height: 30px;
    font-size: 18px;
    text-align: center;
    vertical-align: center;
    color: white;
    background-color: rgb(0, 75, 135);
  }

  .input-num {
    width: 210px;
    height: 30px;
  }

  .input-num::-webkit-input-placeholder {
    text-align: center;
    color: rgb(170, 170, 170);
    font-size: 16px;
  }

  .btnQuery {
    width: 70px;
    height: 30px;
    font-size: 16px;
    color: white;
    box-shadow: 5px 5px 5px rgba(121, 121, 121, 0.5);
    background-color: rgb(0, 75, 135);
  }

  .choose-city {
    list-style: none;
    padding-left: 10px;
  }
</style>
