<template>
  <div class="xuzhi">
    <div class="swiper">
      <img src="../../static/img/swiper.png" width="806" height="658" alt="">
    </div>
    <div class="list">
      <div class="list-wrapper">
        <ul class="link-list">
          <li class="link-list-item" v-for="(item,index) in list.slice(0,4)" :key="index"
              :style="{width:listWidth(index)}">
            <a :href="item.link">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="title">
      <div class="title-wrapper">
        <h2 class="title-font">报道</h2>
        <h2 class="title-font">须知</h2>
      </div>
      <ul class="list-inline">
        <li class="list-inline-item" v-for="(item,index) in list.slice(4,6)" :key="index"
            :style="{width:listWidth(index)}">
          <a :href="item.link">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'xuzhi',
    data () {
      return {
        list: [
          {name: '入校行程', link: '#'},
          {name: '先找学院', link: '#'},
          {name: '缴费', link: '#'},
          {name: '党团关系及档案', link: '#'},
          {name: '一卡通', link: '#'},
          {name: '绿色通道', link: '#'}
        ]
      }
    },
    methods: {
      listWidth (index) {
        return this.list[index].name.length > 4 ? '246px' : '150px'
      }
    }
  }
</script>

<style scoped>
  .xuzhi {
    padding-left: 35px;
    margin-top: -64px;
    display: flex;
    flex-direction: row;
  }

  .swiper {

  }

  .list {
    background-color: rgba(247, 201, 62, 0.96);
    margin-left: -157px;
    margin-top: 60px;
    z-index: 10;
    height: 542px;
    width: 264px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    box-shadow: 5px 5px 5px rgba(121, 121, 121, 0.5);
  }

  .link-list {
    padding: 0px;
  }

  .link-list-item {
    margin-bottom: 11px;
    margin-left: 79px;
    padding-left: 5px;
    list-style: none;
    background-color: white;
    line-height: 50px;
    box-shadow: 5px 5px 5px rgba(121, 121, 121, 0.5);
  }

  .link-list-item a {
    text-decoration: none;
    color: black;
    font-size: 27px;
  }

  .title {
    background-color: rgb(66, 106, 148);
    width: 484px;
    height: 376px;
    margin-top: 228px;
    box-shadow: 5px 5px 5px rgba(121, 121, 121, 0.5);
  }

  .title-wrapper {
    background-color: white;
    box-shadow: 5px 5px 5px rgba(121, 121, 121, 0.5);
    margin-top: 64px;
    margin-left: -5px;
    width: 135px;
    height: 150px;
  }

  .title-font {
    text-align: left;
    font-size: 60px;
    font-weight: 400;
    color: rgb(51, 51, 51);
    margin: 0px 0 0 -4px;
    line-height: 75px;
  }

  .list-inline {
    margin-top: 89px;
  }

  .list-inline-item {
    display: inline-block;
    list-style: none;
    background-color: white;
    padding-left: 5px;
    margin-right: 30px;
    line-height: 50px;
    box-shadow: 5px 5px 5px rgba(121, 121, 121, 0.5);
  }

  .list-inline-item:first-child {
    margin-left: 30px;
  }

  .list-inline-item a {
    text-decoration: none;
    color: black;
    font-size: 27px;
  }
</style>
