<template>
  <section id="hero" class="w-full py-[60px] h-[80vh] bg-nav-color">
    <div class="container pt-16 px-3 mx-auto">
      <div class="flex">
        <div data-aos="fade-up" data-aos-delay="200" class="flex-1 flex flex-col justify-center">
          <h1 class="text-5xl text-white mb-2.5">业界领先的牙科机综合服务解决方案</h1>
          <h2 class="text-2xl text-gray-400 mb-12">我们是一个拥有丰富行业经验与高质量交付能力的团队</h2>
          <div class="flex">
            <button
              class="px-7 py-2.5 font-semibold text-xl bg-cyan-500 hover:bg-blue-400 transition text-white rounded-full shadow-sm"
            >
              开始了解
            </button>
            <a class="text-white text-xl ml-5 flex items-center" href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
              ><i class="iconfont icon-playcircle text-3xl"></i><span>观看视频</span></a
            >
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" class="flex-1">
          <img src="@/assets/images/hero-img.png" class="animated w-4/5 mx-auto" alt="" />
        </div>
      </div>
    </div>
  </section>

  <section id="clients" class="py-3 bg-[#f3f5fa]">
    <div class="container mx-auto">
      <div class="flex justify-center" data-aos="zoom-in">
        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img
            src="@/assets/images/clients/client-1.png"
            class="transition iduration-[400] nline-block py-4 grayscale hover:grayscale-0 hover:scale-110 max-w-[45%]"
            alt=""
          />
        </div>

        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img
            src="@/assets/images/clients/client-2.png"
            class="transition iduration-[400] nline-block py-4 grayscale hover:grayscale-0 hover:scale-110 max-w-[45%]"
            alt=""
          />
        </div>

        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img
            src="@/assets/images/clients/client-3.png"
            class="transition iduration-[400] nline-block py-4 grayscale hover:grayscale-0 hover:scale-110 max-w-[45%]"
            alt=""
          />
        </div>

        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img
            src="@/assets/images/clients/client-4.png"
            class="transition iduration-[400] nline-block py-4 grayscale hover:grayscale-0 hover:scale-110 max-w-[45%]"
            alt=""
          />
        </div>

        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img
            src="@/assets/images/clients/client-5.png"
            class="transition iduration-[400] nline-block py-4 grayscale hover:grayscale-0 hover:scale-110 max-w-[45%]"
            alt=""
          />
        </div>

        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img
            src="@/assets/images/clients/client-6.png"
            class="transition duration-[400] inline-block py-4 grayscale hover:grayscale-0 hover:scale-110 max-w-[45%]"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <!-- 关于我们 -->
  <section id="about">
    <div data-aos="fade-up" class="container mx-auto py-20">
      <div class="section-title mb-20">
        <h2>关于我们</h2>
      </div>
      <div data-aos="fade-right" class="px-16 mb-8">
        <p>益华数字科技有限公司成立于2017年，公司位于中国广州。</p>
        <p>
          我们是国内领先的牙科设备综合服务商，用创新的产品和服务推动牙科事业的进步
          <br />
          我们一直秉承科技向善的宗旨。我们的产品服务全国客户逾百家，助力国内数字化口腔的发展，畅享便捷的工作和高效生产。
          <br />
          公司推出多款服务全国的牙科设备，为客户带来优秀的使用体验。
          <br />
          益华数字还提供XXXX等一系列服务，支持合作伙伴实现数字化转型，促进业务发展。
        </p>
      </div>
      <div class="text-center text-white">
        <button class="mx-auto rounded-lg shadow px-4 py-2 bg-sky-500 transition hover:-translate-y-2.5">
          了解更多
        </button>
      </div>
    </div>
  </section>
  <!-- 选择我们 -->
  <section id="select_our">
    <div class="container mx-auto py-20" data-aos="fade-up">
      <div class="section-title mb-20">
        <h2>为什么选择我们</h2>
      </div>
      <p class="px-16 mb-16">经验丰富、快速响应、勇于开拓进取的专业团队 强大的资源整合能力 一体化的综合服务能力</p>
      <div class="px-16 mb-8">
        <ul class="grid grid-cols-3 gap-10">
          <li
            v-for="(advantage, index) in advantages"
            :key="advantage.label"
            data-aos="zoom-in"
            :data-aos-delay="(index + 1) * 100"
            class="transition md:hover:scale-105 bg-white dark:bg-slate-800 rounded-lg py-[35px] px-[40px] ring-1 ring-slate-900/5 shadow-sm border"
          >
            <div class="flex items-center">
              <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg mr-[15px]">
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </span>
              <h3 class="text-slate-900 dark:text-white text-base font-medium tracking-tight">
                {{ advantage.label }}
              </h3>
            </div>
            <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              {{ advantage.text }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!--产品展示-->
  <section id="product">
    <div class="container mx-auto py-20" data-aos="fade-up">
      <div class="section-title mb-20">
        <h2>我们的产品</h2>
      </div>
      <portfoli />
    </div>
  </section>
  <!-- 团队介绍-->
  <section id="teams">
    <div class="container mx-auto py-20" data-aos="fade-up">
      <div class="section-title mb-20">
        <h2>团队介绍</h2>
      </div>
      <ul class="flex flex-col md:flex-row">
        <li v-for="item in 4" class="flex-1 mx-4" data-aos="fade-down" :data-aos-delay="item * 200">
          <div
            class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="flex justify-end px-4 pt-4"></div>
            <div class="flex flex-col items-center pb-10">
              <img
                class="mb-3 w-24 h-24 rounded-full shadow-lg"
                src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQJQplaMUss55rn0S_tHQH4jSdwf7eMLqPkK8TpKTfMJdLe3lqCwSHuJwHdiRbM-4S1"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
              <div class="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >Message</a
                >
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <!-- 服务案例 -->
  <section id="case">
    <div class="container mx-auto py-20">
      <div class="section-title mb-20">
        <h2>服务案例</h2>
      </div>
      <div>
        <ul class="grid md:grid-cols-6 gap-4">
          <li class="w-full mb-8"><img class="w-full" src="@/assets/images/brand.png" alt="" /></li>
          <li class="w-full mb-8"><img class="w-full" src="@/assets/images/brand.png" alt="" /></li>
          <li class="w-full mb-8"><img class="w-full" src="@/assets/images/brand.png" alt="" /></li>
          <li class="w-full mb-8"><img class="w-full" src="@/assets/images/brand.png" alt="" /></li>
          <li class="w-full mb-8"><img class="w-full" src="@/assets/images/brand.png" alt="" /></li>
          <li class="w-full mb-8"><img class="w-full" src="@/assets/images/brand.png" alt="" /></li>
          <li class="w-full mb-8"><img class="w-full" src="@/assets/images/brand.png" alt="" /></li>
          <li class="w-full mb-8"><img class="w-full" src="@/assets/images/brand.png" alt="" /></li>
          <li class="w-full mb-8"><img class="w-full" src="@/assets/images/brand.png" alt="" /></li>
          <li class="w-full mb-8"><img class="w-full" src="@/assets/images/brand.png" alt="" /></li>
          <li class="w-full mb-8"><img class="w-full" src="@/assets/images/brand.png" alt="" /></li>
          <li class="w-full mb-8"><img class="w-full" src="@/assets/images/brand.png" alt="" /></li>
        </ul>
      </div>
    </div>
  </section>
  <!-- 联系我们 -->
  <section id="contactus">
    <div class="container mx-auto py-20">
      <h2 class="mb-4 md:mb-16 section-title">联系我们</h2>
      <div class="block md:grid md:grid-cols-2">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md" data-aos="fade-right" data-aos-delay="300">
          <form>
            <div class="form-group mb-6">
              <input
                id="exampleInput7"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="名字"
              />
            </div>
            <div class="form-group mb-6">
              <input
                id="exampleInput8"
                type="tel"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="电话"
              />
            </div>
            <div class="form-group mb-6">
              <input
                id="exampleInput8"
                type="email"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="邮箱"
              />
            </div>
            <div class="form-group mb-6">
              <textarea
                id="exampleFormControlTextarea13"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                rows="3"
                placeholder="备注信息"
              ></textarea>
            </div>
            <div class="form-group form-check text-center mb-6">
              <input
                id="exampleCheck87"
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                checked
              />
              <label class="form-check-label inline-block text-gray-800" for="exampleCheck87"
                >Send me a copy of this message</label
              >
            </div>
            <button
              type="submit"
              class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
        <map-container data-aos="fade-left" data-aos-delay="500" />
        <ul class="mt-8 text-base">
          <li class="py-4 flex items-center group">
            <i
              class="mr-4 text-3xl rounded-full w-11 h-11 bg-[#e7f5fb] flex justify-center items-center group-hover:text-white group-hover:bg-[#47b2e4] transition text-[#47b2e4] iconfont icon-localtion"
            ></i>
            <span>公司地址:</span>
            <address class="inline-block">广州市番禺区大石街宝江路深蓝工业园4#2层</address>
          </li>
          <li class="py-4 flex items-center group">
            <i
              class="mr-4 text-3xl rounded-full w-11 h-11 bg-[#e7f5fb] flex justify-center items-center group-hover:text-white group-hover:bg-[#47b2e4] transition text-[#47b2e4] iconfont icon-telephone"
            ></i>
            <span>电话:020-3918-2710</span>
          </li>
          <li class="py-4 flex items-center group">
            <i
              class="mr-4 text-3xl rounded-full w-11 h-11 bg-[#e7f5fb] flex justify-center items-center group-hover:text-white group-hover:bg-[#47b2e4] transition text-[#47b2e4] iconfont icon-email"
            ></i>
            <span>邮箱:3d@zeer.com.cn</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card.vue'
import Portfoli from '../components/Portfoli.vue'
import { Listbox } from '@headlessui/vue'
import MapContainer from '../components/MapContainer.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineComponent({
  title: 'Parallax',
  url: import.meta.url,
  components: {
    Listbox,
    Card,
    MapContainer,
    Portfoli,
  },
  data() {
    return {
      advantages: [
        {
          label: '丰富的行业经验',
          text: '拥有多年的专业化积淀和方案解决经验，助力小微企业实现数字化。',
        },
        {
          label: '专业的服务团队',
          text: '具有专业的服务团队，团队成员具备专业素质，丰富经验，能够根据客户的不同需求，提供全面专业的服务。具有专业的服务团队，团队成员具备专业素质，丰富经验，能够根据客户的不同需求，提供全面专业的服务。',
        },
        {
          label: '严格的质量管理',
          text: '完善的内部质量控制对资金的支付、数据的制作及业务报告的生成和传递都制定了独立的内部监管流程。',
        },
        {
          label: '完善的系统平台',
          text: '依托先进的IT管理系统，通过系统平台对客户的主数据进行实时的跟踪和监控，数据运行安全稳定、业务报表可以实现灵活设定，对客户需求及时反馈等方面具有卓越优势。',
        },
        {
          label: '良好的市场口碑',
          text: '以高水准的服务质量和专业的服务精神赢得客户的广泛赞誉，定期对客户进行业务走访及满意度调查，及时收集客户需求反馈，努力提升服务质量，打造具有专业化经验的客户服务团队。',
        },
        {
          label: '众多的合作伙伴',
          text: '与境外合作资源形成了无缝隙的流程合作模式, 能够安排团组与境外各级政府、企业、机构、大学等座谈交流、培训学习、展览会议等活动, 提供专业的团组接待保障服务。。',
        },
      ],
    }
  },
  mounted() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      mirror: false,
    })
  },
})
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';
@import './style.scss';

.swiper {
  @include swiper-wrapper();

  ::v-deep(.swiper-slide) {
    @include swiper-slide();
  }
}

/*顶部图片动画*/
@-webkit-keyframes up-down {
  0% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(-10px);
  }
}

@keyframes up-down {
  0% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(-10px);
  }
}

#hero .animated {
  animation: up-down 2s ease-in-out infinite alternate-reverse both;
}
</style>
