<template>
  <div class="wrapper">
    <div class="deng-wrapper">
      <div class="deng">
        <span class="deng-item">登</span>
        <span class="deng-item"><img src="../../static/img/fullShield.png" alt=""></span>
      </div>
    </div>
    <div class="login">
      <div class="hint-wrapper">
        <div class="login-hint">
          <h2>新生</h2>
          <h2>登录</h2>
        </div>
      </div>
      <div class="list-wrapper">
        <ul class="login-list">
          <li class="login-item">
            <span class="login-text">本科生</span>
            <span><img src="../../static/img/smallShield.png" height="50px" alt=""></span>
          </li>
          <li class="login-item">
            <span class="login-text">研究生</span>
            <span><img src="../../static/img/smallShield.png" height="50px" alt=""></span>
          </li>
          <li class="login-item">
            <span class="login-text">高职生</span>
            <span><img src="../../static/img/smallShield.png" height="50px" alt=""></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="form">
      <input class="username" type="text" placeholder="用户名" v-model="userName">
      <input class="password" type="password" placeholder="密码" v-model="userPassword">
      <button class="login-button" @click="login">登录</button>
    </div>
    <div class="danmu">
      <div class="flow"></div>
      <div class="ctrl">
        <input class="danmu-input" type="text" placeholder="登录发送弹幕">
        <button class="send">发送</button>
      </div>
    </div>
    <!--<img src="../../static/img/door.png" alt="">-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'login',
    data () {
      return {
        userName: '',
        userPassword: ''
      }
    },
    methods: {
      login () {
        console.log('login')
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    position: relative;
    height: 521px;
    margin-right: 50px;
    background-image: url("../../static/img/door.png");
    background-position: right;
    background-size: 1145px 521px;
    background-repeat: no-repeat;
  }

  .hint-wrapper {
    background-color: #426A94;
    height: 330px;
    box-shadow: 5px 5px 3px #aaaaaa;
    margin-left: 94px;
    margin-top: 20px;
  }

  .login-hint {
    display: block;
    background-color: white;
    margin: 50px 130px 112px 35px;
    padding: 12px 19px;
    box-shadow: 3px 3px 2px #aaaaaa;
  }

  .login-hint h2 {
    font-weight: normal;
    font-size: 61px;
    margin: 0px;
  }

  .deng-wrapper {
    position: absolute;
    left: 58px;
    top: 165px;
  }

  .deng {
    position: relative;
    background-color: #FEC210;
    width: 150px;
    height: 150px;
    box-shadow: 5px 5px 5px #797979;
  }

  .deng-item:first-child {
    position: absolute;
    font-size: 61px;
    right: 10px;
    top: 0px;
  }

  .deng-item:last-child {
    position: absolute;
    bottom: 0px;
    left: 5px;
  }

  .login {
    display: flex;
  }

  .list-wrapper {
    justify-content: center;
  }

  .login-list {
    display: block;
    margin-top: 117px;
    padding: 0px;
    margin-left: -60px;
  }

  .login-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    list-style: none;
    height: 50px;
    padding: 5px 15px;
    background-color: white;
    box-shadow: 5px 5px 5px #797979;
  }

  .login-text {
    font-size: 27px;
    line-height: 50px;
    vertical-align: center;
    margin-bottom: 10px;
    margin-right: 20px;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 55px;
    padding-top: 0px;
  }

  .username {
    margin-bottom: 10px;
    background-color: #2A2A2A;
    width: 235px;
    border: 1px solid black;
    border-radius: 25px;
    line-height: 45px;
    text-align: center;
  }

  .username::-webkit-input-placeholder {
    color: white;
    font-size: 18px;
  }

  .password {
    margin-bottom: 10px;
    background-color: #2A2A2A;
    width: 235px;
    border: 1px solid black;
    border-radius: 25px;
    line-height: 45px;
    text-align: center;
    color: white;
    font-size: 18px;
  }

  .password::-webkit-input-placeholder {
    color: white;
    font-size: 18px;
  }

  .login-button {
    background-color: #2A2A2A;
    width: 235px;
    border: 1px solid black;
    border-radius: 25px;
    line-height: 45px;
    text-align: center;
    font-size: 18px;
    color: white;
  }

  .danmu {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 20px;
    right: 24px;
  }

  .danmu-input {
    width: 234px;
    height: 30px;
    border-radius: 15px;
    color: white;
    background-color: #2A2A2A;
    opacity: 0.21;
  }

  .danmu-input::-webkit-input-placeholder {
    text-align: center;
    color: white;
  }

  .send {
    width: 73px;
    height: 30px;
    border-radius: 15px;
    background-color: #2A2A2A;
    opacity: 0.21;
    color: white;
  }

  .flow {
    flex: 9;
  }

  .ctrl {
    flex: 1;
  }
</style>
