<template>
  <div class="error-wrapper" :style="{height:this.currentHeight}">
    <div class="error">
      <span class="error-title">抱歉，您访问的页面失联啦!</span>
      <h2 class="subtitle">小天正在努力找回……</h2>
      <p class="links">
        <router-link to="/index">返回首页</router-link>
        或
        <span class="refresh" @click="refresh(from)">刷新一下</span>
      </p>
      <img class="error-img" src="../../static/img/404.png" width="525px" height="400px" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'error',
    data () {
      return {
        currentHeight: 0,
        // props
        from: '/index'
      }
    },
    beforeMount () {
      let h = document.documentElement.clientHeight || document.body.clientHeight
      this.currentHeight = h - 8 + 'px'
    },
    methods: {
      refresh (link) {
        this.$router.push(link)
      }
    }
  }
</script>

<style scoped>
  .error-wrapper {
    background-color: rgb(186, 233, 253);
    margin: -8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .error-title {
    font-size: 57px;
  }

  .subtitle {
    font-size: 40px;
    font-family: Arial, sans-serif;
    font-weight: 300;
    color: rgb(107, 107, 107);
  }

  .links {
    font-size: 28px;
  }

  .links a {
    color: rgb(255, 166, 0);
  }

  .refresh {
    text-decoration: underline;
    color: rgb(255, 166, 0);
  }

  .error-img {
    padding-left: 370px;
  }
</style>
