<template>
  <div class="tab">
    <ul class="list">
      <li class="list-item" v-for="(listItem, index) in list" :key="index">
        {{listItem}}
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'tab',
    data () {
      return {
        list: ['网站首页', '报道服务', '天大风采', '学在天大', '家在天大', '新生答疑']
      }
    }
  }
</script>

<style scoped>
  @import "../common/font/font.css";

  .tab {
    width: 1860px;
    height: 51px;
    background: linear-gradient(#D6DDEB, #879DBC);
  }

  .list {
    padding-left: 0;
    margin: -8px;
  }

  .list-item {
    display: inline-block;
    padding-right: 5px;
    list-style: none;
    font-size: 40px;
    line-height: 50px;
    vertical-align: top;
    color: white;
    font-family: 'pingfang', Arial, sans-serif;
    background: linear-gradient(#B8C3DC, #7490BA);
  }

  .list-item:after {
    content: '|';
    color: grey;
  }

  .list-item:first-child {
    padding-left: 5px;
  }

  .list-item:last-child:after {
    content: '';
  }
</style>
