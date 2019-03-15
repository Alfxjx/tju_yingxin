<template>
  <div class="success">
    <div class="upper">
      <div class="card1-wrapper">
        <div class="card1">
          <img class="card1-logo" src="../../static/img/tick.png" width="100px" height="100px" alt="">
          <p class="card1-title">查询成功!</p>
        </div>
      </div>
      <div class="card2-wrapper">
        <div class="subtitle-wrapper">
          <div class="subtitle">
            <ul>
              <li v-for="(word,index) in words" :key="index">{{word}}</li>
            </ul>
          </div>
        </div>
        <div class="card2">
          <table class="info-table">
            <tr>
              <td>考生号</td>
              <td>姓名</td>
              <td>录取专业</td>
              <td>所在学院</td>
            </tr>
            <tr>
              <td>{{studentInfo.id}}</td>
              <td>{{studentInfo.name}}</td>
              <td>{{studentInfo.subjectName}}</td>
              <td>{{studentInfo.collegeName}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="bot">
      <div class="more-wrapper">
        <div class="more" @click="showMore">
          <triDown></triDown>
          <p class="more-title">下拉了解更多迎新信息!</p>
        </div>
      </div>
      <div class="bot-bot">
        <p>地址：天津市南开区卫津路92号 | 邮编：300072</p>
        <p>天津大学信息与网络中心制作 津ICP备05004358号 津教备0316号</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import triDown from '../components/triDown'

  export default {
    name: 'success',
    data () {
      return {
        words: ['学', '生', '信', '息'],
        studentInfo: {
          id: '1234556',
          name: '张三',
          subjectName: '化工工程',
          collegeName: '化工学院',
          friends: ['王二', '陈清扬'],
          counselor: '高丽张'
        }
      }
    },
    methods: {
      showMore () {
        console.log('more')
      }
    },
    components: {
      triDown
    }
  }
</script>

<style scoped>
  .success {
    display: flex;
    margin: -8px;
    width: 100%;
    flex-direction: column;
  }

  .upper {
    background-color: rgb(53, 180, 235);
    height: 940px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card1-wrapper {
    background-color: white;
    width: 906px;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 77px 0 48px 0;
  }

  .card1 {
    background-color: rgb(53, 180, 235);
    width: 832px;
    height: 256px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .card1-logo {
    margin-right: 16px;
  }

  .card1-title {
    margin-left: 16px;
    line-height: 100px;
    font-size: 70px;
    color: rgb(25, 75, 125);
  }

  .card2-wrapper {
    position: relative;
    background-color: white;
    width: 906px;
    height: 357px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .subtitle-wrapper {
    width: 906px;
    position: absolute;
    top: -10px;
    left: 0px;
  }

  .subtitle {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .subtitle ul {
    padding-left: 0px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .subtitle ul li {
    list-style: none;
    font-size: 30px;
    color: rgb(0, 75, 135);
    border: 1px solid white;
    border-radius: 50%;
    background-color: white;
    padding: 4px 6px;
    margin-right: 40px;
  }

  .card2 {
    background-color: rgb(53, 180, 235);
    width: 832px;
    height: 286px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info-table {
    background-color: white;
    border: 2px solid rgb(25, 75, 125);
    border-collapse: collapse;
    overflow: scroll;
  }

  .info-table tr:first-child {
    font-size: 30px;
    height: 78px;
  }

  .info-table tr:first-child td {
    padding: 21px 40px;
  }

  .info-table tr:last-child td {
    text-align: center;
  }

  .info-table tr:last-child {
    font-size: 25px;
    height: 112px;
  }

  .info-table td {
    border: 2px solid rgb(25, 75, 125);
    color: rgb(0, 75, 135);
  }

  .bot {
    background-color: rgb(42, 42, 42);
    height: 456px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .more-wrapper {
    flex: 9;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }

  .more {
    width: 750px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .more-title {
    font-size: 38px;
    line-height: 40px;
    color: rgb(255, 166, 0);
    margin-top: 31px;
    margin-right: 0px;
  }

  .bot-bot {
    flex: 1;
    border-top: 1px solid rgb(221, 219, 219);
  }

  .bot-bot p {
    color: rgb(121, 121, 121);
    font-size: 18px;
    margin: 0px 0px 10px 20px;
  }

  .bot-bot p:first-child {
    margin-top: 22px;
  }

  .bot-bot p:last-child {
    margin-bottom: 35px;
  }
</style>
