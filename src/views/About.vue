<template>
  <div
    id="introduction"
    class="flex w-full h-screen md:py-20 bg-fixed bg-cover bg-top bg-bottom bg-no-repeat justify-center"
    style="background-image: url('https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg')"
  >
    <div
      class="container flex justify-center items-center md:pt-4 text-center relative mx-auto text-amber-50 md:text-5xl"
    >
      <div class="row">
        <div>
          <h1 class="md:mb-4">创造价值，成就客户</h1>
          <h2 class="md:mb-16">业界领先的牙科机与智能水表制造商</h2>
          <a
            href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
            class="w-94 h-94 block relative rounded-full mx-auto play-btn"
          ></a>
        </div>
      </div>
    </div>
  </div>
  <sticky-nav :menu="navs" :content-offset-tops="offsetTops"></sticky-nav>
  <div ref="contents" class="contents">
    <section id="brief" class="relative content">
      <div class="py-24">
        <div class="max-w-screen-xl mx-auto">
          <div>
            <h3 class="text-4xl">公司简介</h3>
          </div>
          <div class="text-box">
            <h4 class="text-xl my-4">X是一家国内领先的牙科机与智能水表制造商，用创新的产品和服务推动x的进步</h4>
            <p class="desc text-base my-4 text-left leading-6">
              <br />x成立于2017年，公司位于中国广州。公司一直秉承科技向善的宗旨。我们的产品服务全国客户逾百家，助力他们与亲友联系，畅享便捷的出行、支付和娱乐生活。<br /><br />x发行多款风靡全球的电子游戏及其他优质数字内容，为全球用户带来丰富的互动娱乐体验。<br /><br />x还提供云计算、广告、金融科技等一系列企业服务，支持合作伙伴实现数字化转型，促进业务发展。<br /><br />x2004
              年于香港联合交易所上市。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="mission" class="relative content">
      <div>
        <div class="max-w-screen-xl bg-slate-50 mx-auto">
          <div class="pc mt-24 relative px-16 py-24 flex h-80 justify-between">
            <div class="mess l-mess">
              <p class="text-3xl">愿景及使命</p>
            </div>
            <div class="mess r-mess">
              <p class="text-3xl">用户为本,科技向善</p>
              <p class="desc">
                一切以用户价值为依归，将社会责任融入产品及服务之中；<br />推动科技创新与文化传承，助力各行各业升级，促进社会的可持续发展。
              </p>
            </div>
          </div>
          <div class="mobile"></div>
        </div>
      </div>
    </section>
    <section id="development" class="relative content">
      <div class="history-item py-24">
        <div class="history-header relative h-96 bg-cover text-white bg-gradient-to-r from-cyan-500 to-blue-500">
          <h3 class="text-4xl text-center pt-9 md:pt-36">发展历程</h3>
          <progress-bar />
        </div>
        <div class="history-button"></div>
        <div class="history-content"></div>
      </div>
    </section>
    <section id="structure" class="relative content">
      <h3 class="text-4xl text-center">业务架构</h3>
      <div class="h-screen bg-amber-50"></div>
    </section>
    <section id="teams" class="relative content">
      <h3 class="text-4xl text-center">管理团队</h3>
      <div class="h-screen bg-amber-50"></div>
    </section>
    <section id="culture" class="relative content">
      <h3 class="text-4xl text-center">企业文化</h3>
      <div class="h-screen bg-amber-50"></div>
    </section>
    <section id="office" class="relative content">
      <h3 class="text-4xl text-center">办公地点</h3>
      <div class="h-screen bg-amber-50"></div>
    </section>
  </div>
</template>

<script lang="ts">
import { debounce } from '../utils/index'
import StickyNav from '../components/StickyNav.vue'
import ProgressBar from '../components/ProgressBar.vue'
export default {
  components: {
    StickyNav,
    ProgressBar,
  },
  data() {
    return {
      navs: [
        {
          label: '公司简介',
          id: '#brief',
          checked: true,
        },
        {
          label: '愿景及使命',
          id: '#mission',
        },
        {
          label: '发展历程',
          id: '#development',
        },
        {
          label: '业务架构',
          id: '#structure',
        },
        {
          label: '管理团队',
          id: '#teams',
        },
        {
          label: '企业文化',
          id: '#culture',
        },
        {
          label: '办公地点',
          id: '#office',
        },
      ],
      offsetTops: {},
    }
  },
  mounted() {
    this.navs.forEach((item, index) => {
      this.offsetTops[`content${index}`] = this.$refs['contents'].children[index].offsetTop
    })
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.play-btn {
  width: 94px;
  height: 94px;
  margin: 0 auto;
  background: radial-gradient(#009961 50%, #00996166 52%);
  border-radius: 50%;
  display: block;
  overflow: hidden;
  position: relative;
}

.play-btn::before {
  content: '';
  position: absolute;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation: pulsate-btn 3s;
  animation: pulsate-btn 3s;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: steps;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(0, 153, 97, 0.7);
  top: -15%;
  left: -15%;
  background: rgba(198, 16, 0, 0);
}

.play-btn::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 100;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.play-btn:hover::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border: none;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 200;
  -webkit-animation: none;
  animation: none;
  border-radius: 0;
}

.play-btn:hover::after {
  border-left: 15px solid #009961;
  transform: scale(20);
}

a.play-btn:hover {
  color: #00cc81;
  text-decoration: none;
}

//.tab-container ul li.active-tab a:after {
//  content: ' ';
//  height: 2px;
//  width: 100%;
//  background: #0052d9;
//  position: absolute;
//  left: 0;
//  right: 0;
//  bottom: 0px;
//  //animation: expand 0.2s;
//}

//.content:nth-of-type(odd) {
//  background-color: #95a5a6;
//}
//
//.content:nth-of-type(even) {
//  background-color: #1abc9c;
//}
</style>
