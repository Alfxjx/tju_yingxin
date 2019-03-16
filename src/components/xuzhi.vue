<template>
  <div class="xuzhi">
    <div class="swiper" @mouseenter="_stop" @mouseleave="_begin">
      <!--<img src="../../static/img/swiper.png" width="806" height="658" alt="">-->
      <ul class="dot">
        <li
          class="dot-li"
          v-for="(picItem, index) in piclist"
          :key="index"
          :class="{active:currentIndex===index}"
          @click="changePic"
        >·
        </li>
      </ul>
      <ul class="core-swiper">
        <transition-group name="swipe">
          <li v-for="(picItem, index) in piclist" :key="index" v-show="index===currentIndex" class="core-list">
            <img :src="picItem.src" width="806" height="658" alt="">
          </li>
        </transition-group>
      </ul>
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
        piclist: [
          {name: '1', src: '../../static/img/swiper.png'},
          {name: '2', src: '../../static/img/door.png'},
          {name: '3', src: '../../static/img/swiper.png'}
        ],
        currentIndex: 0,
        swiperTimer: null,
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
    mounted () {
      this._begin()
    },
    methods: {
      listWidth (index) {
        return this.list[index].name.length > 4 ? '246px' : '150px'
      },
      changePic (e) {
        this.currentIndex = parseInt(e.target.dataset.index)
      },
      _begin () {
        this.swiperTimer = setInterval(this.autoplay, 4000)
      },
      _stop () {
        clearInterval(this.swiperTimer)
      },
      autoplay () {
        this.currentIndex++
        if (this.currentIndex >= this.piclist.length) {
          this.currentIndex = 0
        }
      }
    }
  }
</script>

<style scoped>
  .xuzhi {
    padding-left: 35px;
    margin-top: -64px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
  }

  .swiper {
    position: relative;
  }

  .core-list {
    position: absolute;
    top: 0;
    left: 0;
  }

  .dot {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: -30px;
    left: 10px;
    z-index: 10;
    margin-left: 20px;
  }

  .dot-li {
    line-height: 20px;
    font-weight: 700;
    font-size: 50px;
    margin-left: 10px;
    color: white;
  }

  .swiper ul {
    padding: 0px;
  }

  .swiper ul li {
    list-style: none;
  }

  .swipe-enter-active, .swipe-leave-active {
    transition: all 1s;
  }

  .list {
    background-color: rgba(247, 201, 62, 0.96);
    margin-left: 650px;
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
    z-index: 7;
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
