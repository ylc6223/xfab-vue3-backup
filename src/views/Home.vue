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
  <!-- 累计合作数量 -->
  <section id="stats" class="py-3 bg-[#f3f5fa]">
    <div
      class="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4"
      data-aos="zoom-in"
    >
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r">
          <h6 class="text-2xl font-bold lg:text-3xl xl:text-4xl">144K</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">Downloads</p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-2xl font-bold lg:text-3xl xl:text-4xl">12.9K</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">Subscribers</p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-2xl font-bold lg:text-3xl xl:text-4xl">48.3K</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">Users</p>
        </div>
        <div class="text-center">
          <h6 class="text-2xl font-bold lg:text-3xl xl:text-4xl">24.5K</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">Cookies</p>
        </div>
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
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div data-aos="fade-down" :data-aos-delay="100">
            <div
              class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                class="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div
                class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
              >
                <p class="mb-1 text-lg font-bold text-gray-100">Oliver Aguilerra</p>
                <p class="mb-4 text-xs text-gray-100">Product Manager</p>
                <p class="mb-4 text-xs tracking-wide text-gray-400">
                  Vincent Van Gogh’s most popular painting, The Starry Night.
                </p>
                <div class="flex items-center justify-center space-x-3">
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                      ></path>
                    </svg>
                  </a>
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" :data-aos-delay="200">
            <div
              class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                class="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div
                class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
              >
                <p class="mb-1 text-lg font-bold text-gray-100">Marta Clermont</p>
                <p class="mb-4 text-xs text-gray-100">Design Team Lead</p>
                <p class="mb-4 text-xs tracking-wide text-gray-400">
                  Amet I love liquorice jujubes pudding croissant I love pudding.
                </p>
                <div class="flex items-center justify-center space-x-3">
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                      ></path>
                    </svg>
                  </a>
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" :data-aos-delay="300">
            <div
              class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                class="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div
                class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
              >
                <p class="mb-1 text-lg font-bold text-gray-100">Anthony Geek</p>
                <p class="mb-4 text-xs text-gray-100">CTO, Lorem Inc.</p>
                <p class="mb-4 text-xs tracking-wide text-gray-400">
                  Apple pie macaroon toffee jujubes pie tart cookie caramels.
                </p>
                <div class="flex items-center justify-center space-x-3">
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                      ></path>
                    </svg>
                  </a>
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" :data-aos-delay="400">
            <div
              class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                class="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div
                class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
              >
                <p class="mb-1 text-lg font-bold text-gray-100">Alice Melbourne</p>
                <p class="mb-4 text-xs text-gray-100">Human Resources</p>
                <p class="mb-4 text-xs tracking-wide text-gray-400">
                  Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.
                </p>
                <div class="flex items-center justify-center space-x-3">
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                      ></path>
                    </svg>
                  </a>
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" :data-aos-delay="500">
            <div
              class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                class="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt="Person"
              />
              <div
                class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
              >
                <p class="mb-1 text-lg font-bold text-gray-100">Martin Garix</p>
                <p class="mb-4 text-xs text-gray-100">Good guy</p>
                <p class="mb-4 text-xs tracking-wide text-gray-400">
                  Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.
                </p>
                <div class="flex items-center justify-center space-x-3">
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                      ></path>
                    </svg>
                  </a>
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" :data-aos-delay="600">
            <div
              class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                class="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div
                class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
              >
                <p class="mb-1 text-lg font-bold text-gray-100">Andrew Larkin</p>
                <p class="mb-4 text-xs text-gray-100">Backend Developer</p>
                <p class="mb-4 text-xs tracking-wide text-gray-400">
                  Moonfish, steelhead, lamprey southern flounder tadpole fish bigeye.
                </p>
                <div class="flex items-center justify-center space-x-3">
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                      ></path>
                    </svg>
                  </a>
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" :data-aos-delay="700">
            <div
              class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                class="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div
                class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
              >
                <p class="mb-1 text-lg font-bold text-gray-100">Sophie Denmo</p>
                <p class="mb-4 text-xs text-gray-100">Designer</p>
                <p class="mb-4 text-xs tracking-wide text-gray-400">
                  Veggies sunt bona vobis, proinde vos postulo esse magis grape pea.
                </p>
                <div class="flex items-center justify-center space-x-3">
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                      ></path>
                    </svg>
                  </a>
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" :data-aos-delay="800">
            <div
              class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                class="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div
                class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
              >
                <p class="mb-1 text-lg font-bold text-gray-100">Benedict Caro</p>
                <p class="mb-4 text-xs text-gray-100">Frontend Developer</p>
                <p class="mb-4 text-xs tracking-wide text-gray-400">
                  I love cheese, especially airedale queso. Cheese and biscuits halloumi.
                </p>
                <div class="flex items-center justify-center space-x-3">
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                      ></path>
                    </svg>
                  </a>
                  <a href="/" class="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                        d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 服务案例 -->
  <section id="case">
    <div class="container mx-auto py-20">
      <div class="section-title mb-20">
        <h2>服务案例</h2>
      </div>
      <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <svg
            class="h-12 text-gray-500 fill-current dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 266 100"
          >
            <path fill="none" d="M0 0h266v100H0z"></path>
            <path
              d="M140.021 49.597c-1.784 0-3.07.585-4.374 1.181v13.486c1.249.119 1.965.119 3.15.119 4.282 0 4.869-1.961 4.869-4.699v-6.441c0-2.022-.671-3.646-3.645-3.646zm-28.438-.736c-2.971 0-3.649 1.631-3.649 3.651v1.135h7.294v-1.135c0-2.02-.678-3.651-3.645-3.651zm-55.09 14.037c0 1.598.754 2.428 2.418 2.428 1.785 0 2.842-.582 4.145-1.18v-3.199h-3.903c-1.848 0-2.66.344-2.66 1.951zm111.191-13.301c-2.976 0-4.007 1.624-4.007 3.646v7.379c0 2.027 1.031 3.656 4.007 3.656 2.968 0 4.007-1.629 4.007-3.656v-7.379c-.001-2.022-1.04-3.646-4.007-3.646zM41.909 71.172h-8.748V49.998H28.79v-7.296h4.372V38.32c0-5.953 2.467-9.492 9.479-9.492h5.838v7.298H44.83c-2.73 0-2.91 1.02-2.91 2.923l-.011 3.652h6.61l-.773 7.296h-5.837v21.175zm29.897.055h-7.291l-.315-1.844c-3.329 1.844-6.3 2.143-8.26 2.143-5.347 0-8.193-3.572-8.193-8.512 0-5.828 3.321-7.908 9.262-7.908h6.047v-1.26c0-2.975-.341-3.848-4.916-3.848h-7.48l.731-7.296h8.176c10.038 0 12.239 3.171 12.239 11.203v17.322zm24.793-20.694c-4.537-.778-5.84-.949-8.023-.949-3.921 0-5.106.865-5.106 4.195v6.299c0 3.33 1.185 4.199 5.106 4.199 2.183 0 3.486-.174 8.023-.955v7.117c-3.974.891-6.563 1.125-8.751 1.125-9.392 0-13.125-4.939-13.125-12.074v-5.111c0-7.141 3.733-12.089 13.125-12.089 2.188 0 4.777.235 8.751 1.13v7.113zm27.376 8.957h-16.042v.588c0 3.33 1.186 4.199 5.106 4.199 3.524 0 5.675-.174 10.204-.955v7.117c-4.368.891-6.644 1.125-10.929 1.125-9.393 0-13.128-4.939-13.128-12.074v-5.844c0-6.243 2.771-11.356 12.396-11.356s12.393 5.054 12.393 11.356v5.844zm28.437.135c0 6.896-1.971 11.926-13.911 11.926-4.312 0-6.841-.379-11.6-1.111V31.02l8.745-1.459V43.35c1.89-.702 4.336-1.059 6.562-1.059 8.746 0 10.203 3.921 10.203 10.222v7.112zm28.033.15c0 5.949-2.456 11.719-12.732 11.719-10.281 0-12.783-5.77-12.783-11.719v-5.744c0-5.952 2.502-11.723 12.783-11.723 10.276 0 12.732 5.771 12.732 11.723v5.744zm28.014 0c0 5.949-2.459 11.719-12.733 11.719-10.281 0-12.783-5.77-12.783-11.719v-5.744c0-5.952 2.502-11.723 12.783-11.723 10.274 0 12.733 5.771 12.733 11.723v5.744zm28.749 11.397h-9.479l-8.017-13.383v13.383h-8.748V31.019l8.748-1.459v25.849l8.017-12.707h9.479l-8.752 13.867 8.752 14.603zm-41.512-21.575c-2.971 0-4.002 1.624-4.002 3.646v7.379c0 2.027 1.031 3.656 4.002 3.656 2.967 0 4.017-1.629 4.017-3.656v-7.379c0-2.022-1.05-3.646-4.017-3.646zm46.505 16.581c1.473 0 2.646 1.201 2.646 2.701 0 1.523-1.174 2.711-2.657 2.711-1.476 0-2.673-1.188-2.673-2.711 0-1.5 1.197-2.701 2.673-2.701h.011zm-.011.42c-1.187 0-2.158 1.021-2.158 2.281 0 1.283.972 2.291 2.169 2.291 1.198.012 2.155-1.008 2.155-2.279s-.957-2.293-2.155-2.293h-.011zm-.503 3.853h-.48v-3.014c.252-.035.492-.07.852-.07.456 0 .754.096.937.227.177.133.272.336.272.623 0 .398-.262.637-.585.734v.023c.263.049.442.287.503.73.07.469.143.648.19.746h-.503c-.071-.098-.144-.373-.204-.77-.07-.383-.264-.527-.648-.527h-.333v1.298zm0-1.668h.348c.394 0 .729-.145.729-.518 0-.264-.19-.527-.729-.527-.157 0-.266.012-.348.023v1.022z"
            ></path>
          </svg>
        </div>

        <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <svg
            class="h-10 text-gray-500 fill-current dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 316 60"
          >
            <g transform="translate(9.259 4.552) scale(.4941)">
              <path
                d="M52.1 102.1V82.5c20.8 0 36.8-20.6 28.9-42.4-3-8.1-9.4-14.6-17.5-17.5-21.8-7.9-42.4 8.1-42.4 28.9H1.5c0-33.1 32-58.9 66.7-48.1 15.2 4.7 27.2 16.8 31.9 31.9 10.8 34.8-14.9 66.8-48 66.8z"
              ></path>
              <path d="M32.6 63h19.5v19.5H32.6zm-15 34.5v-15h15v15h-15zM5 70h12.6v12.5H5z" fill-rule="evenodd"></path>
              <path
                d="M181.5 30.2c-5.8-4-13-6.1-21.4-6.1h-18.3v58.1h18.3c8.4 0 15.6-2.1 21.4-6.4 3.2-2.2 5.7-5.4 7.4-9.3s2.6-8.5 2.6-13.7c0-5.1-.9-9.7-2.6-13.6-1.7-3.8-4.2-6.9-7.4-9zm-29 3.8h5.8c6.4 0 11.7 1.3 15.7 3.7 4.4 2.7 6.7 7.8 6.7 15.1 0 7.6-2.3 12.9-6.7 15.8-3.8 2.5-9.1 3.8-15.6 3.8h-5.8V34z"
              ></path>
              <use xlink:href="#A"></use>
              <path
                d="M199 41.3h10.3v41H199zm47.8 3.4c-3.1-2.8-6.6-4.4-10.3-4.4-5.7 0-10.4 2-14.1 5.8s-5.5 8.8-5.5 14.7c0 5.8 1.8 10.7 5.5 14.7 3.7 3.8 8.4 5.8 14.1 5.8 4 0 7.4-1.1 10.2-3.3v1c0 3.4-.9 6-2.7 7.9-1.8 1.8-4.3 2.7-7.4 2.7-4.8 0-7.7-1.9-11.4-6.8l-7 6.7.2.3c1.5 2.1 3.8 4.2 6.9 6.2s6.9 3 11.5 3c6.1 0 11.1-1.9 14.7-5.6 3.7-3.7 5.5-8.7 5.5-14.9V41.3h-10.1v3.4zm-2.7 24.2c-1.8 2-4.1 3-7.1 3s-5.3-1-7-3c-1.8-2-2.7-4.7-2.7-8s.9-6.1 2.7-8.1 4.1-3.1 7-3.1c3 0 5.3 1 7.1 3.1 1.8 2 2.7 4.8 2.7 8.1s-1 6-2.7 8zm21.6-27.6H276v41h-10.3z"
              ></path>
              <use xlink:href="#A" x="66.7"></use>
              <path
                d="M298.6 30.3h-10.1v11.1h-5.9v9.4h5.9v17c0 5.3 1.1 9.1 3.2 11.3s5.8 3.3 11.1 3.3c1.7 0 3.4-.1 5-.2h.5v-9.4l-3.5.2c-2.5 0-4.1-.4-4.9-1.3s-1.2-2.7-1.2-5.4V50.7h9.6v-9.4h-9.6v-11zm57.9-6.2h10.3v58.1h-10.3zm114.4 43.5c-1.8 2.1-3.7 3.9-5.2 4.8-1.4.9-3.2 1.4-5.3 1.4-3 0-5.5-1.1-7.5-3.4s-3-5.2-3-8.7 1-6.4 2.9-8.6c2-2.3 4.4-3.4 7.4-3.4 3.3 0 6.8 2.1 9.8 5.6l6.8-6.5c-4.4-5.8-10.1-8.5-16.9-8.5-5.7 0-10.6 2.1-14.6 6.1s-6 9.2-6 15.3 2 11.2 6 15.3 8.9 6.1 14.6 6.1c7.5 0 13.5-3.2 17.5-9.1l-6.5-6.4zM513.2 47c-1.5-2-3.5-3.7-5.9-4.9-2.5-1.2-5.3-1.8-8.5-1.8-5.8 0-10.5 2.1-14 6.3-3.4 4.2-5.2 9.3-5.2 15.4 0 6.2 1.9 11.3 5.7 15.3 3.7 3.9 8.8 5.9 14.9 5.9 6.9 0 12.7-2.8 16.9-8.4l.2-.3-6.7-6.5c-.6.8-1.5 1.6-2.3 2.4-1 1-2 1.7-3 2.2-1.5.8-3.3 1.1-5.2 1.1-2.9 0-5.2-.8-7-2.5-1.7-1.5-2.7-3.6-2.9-6.2h27.3l.1-3.8c0-2.7-.4-5.2-1.1-7.6-.7-2.3-1.8-4.5-3.3-6.6zm-22.5 9.7c.5-2 1.4-3.6 2.7-4.9 1.4-1.4 3.2-2.1 5.4-2.1 2.5 0 4.4.7 5.7 2.1 1.2 1.3 1.9 2.9 2.1 4.8h-15.9zm62.1-12.3c-3.1-2.7-7.4-4-12.8-4-3.4 0-6.6.8-9.5 2.2-2.7 1.4-5.3 3.6-7 6.6l.1.1 6.6 6.3c2.7-4.3 5.7-5.8 9.7-5.8 2.2 0 3.9.6 5.3 1.7s2 2.6 2 4.4v2c-2.6-.8-5.1-1.2-7.6-1.2-5.1 0-9.3 1.2-12.4 3.6s-4.7 5.9-4.7 10.2c0 3.8 1.3 7 4 9.3 2.7 2.2 6 3.4 9.9 3.4s7.6-1.6 10.9-4.3v3.4h10.1V55.9c.2-4.9-1.4-8.8-4.6-11.5zm-18.3 22.2c1.2-.8 2.8-1.2 4.9-1.2 2.5 0 5.1.5 7.8 1.5v4C545 73 542 74 538.3 74c-1.8 0-3.2-.4-4.1-1.2s-1.4-1.7-1.4-3 .6-2.4 1.7-3.2zm62.7-21.4c-2.9-3.2-6.9-4.8-12-4.8-4.1 0-7.4 1.2-9.9 3.5v-2.5h-10.1v41h10.3V59.7c0-3.1.7-5.6 2.2-7.3 1.5-1.8 3.4-2.6 6.1-2.6 2.3 0 4.1.8 5.4 2.3 1.3 1.6 2 3.7 2 6.4v23.7h10.3V58.5c0-5.6-1.4-10.1-4.3-13.3zm-253.6-.8c-3.1-2.7-7.4-4-12.8-4-3.4 0-6.6.8-9.5 2.2-2.7 1.4-5.3 3.6-7 6.6l.1.1 6.6 6.3c2.7-4.3 5.7-5.8 9.7-5.8 2.2 0 3.9.6 5.3 1.7s2 2.6 2 4.4v2c-2.6-.8-5.1-1.2-7.6-1.2-5.1 0-9.3 1.2-12.4 3.6s-4.7 5.9-4.7 10.2c0 3.8 1.3 7 4 9.3 2.7 2.2 6 3.4 9.9 3.4s7.6-1.6 10.9-4.3v3.4h10.1V55.9c.1-4.9-1.5-8.8-4.6-11.5zm-18.3 22.2c1.2-.8 2.8-1.2 4.9-1.2 2.5 0 5.1.5 7.8 1.5v4c-2.2 2.1-5.2 3.1-8.9 3.1-1.8 0-3.2-.4-4.1-1.2s-1.4-1.7-1.4-3 .5-2.4 1.7-3.2zm78.9 16.5c-16.5 0-30-13.4-30-30s13.4-30 30-30c16.5 0 30 13.4 30 30s-13.5 30-30 30zm0-49.3c-10.7 0-19.4 8.7-19.4 19.4s8.7 19.4 19.4 19.4 19.4-8.7 19.4-19.4-8.7-19.4-19.4-19.4z"
              ></path>
            </g>
            <defs>
              <path
                d="M204.3 23.4c-1.8 0-3.3.6-4.5 1.8s-1.9 2.7-1.9 4.4c0 1.8.6 3.3 1.9 4.5 1.2 1.2 2.7 1.9 4.5 1.9s3.3-.6 4.5-1.9c1.2-1.2 1.9-2.8 1.9-4.5 0-1.8-.6-3.3-1.9-4.4-1.2-1.2-2.8-1.8-4.5-1.8z"
              ></path>
            </defs>
          </svg>
        </div>

        <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <svg
            class="h-8 mt-2 text-gray-500 fill-current dark:text-gray-300"
            viewBox="0 0 398 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill-rule="nonzero">
              <path
                d="M247.292 94.106C224.124 111.016 190.526 120 161.608 120c-40.544 0-77.046-14.822-104.673-39.476-2.164-1.936-.235-4.583 2.369-3.082 29.806 17.15 66.66 27.475 104.731 27.475 25.677 0 53.906-5.271 79.884-16.163 3.923-1.646 7.21 2.545 3.373 5.352"
              ></path>
              <path
                d="M256.533 82.534c-2.965-3.771-19.551-1.787-27.003-.897-2.254.277-2.605-1.692-.57-3.122 13.233-9.265 34.922-6.587 37.447-3.487 2.54 3.13-.666 24.802-13.073 35.147-1.91 1.59-3.718.744-2.877-1.357 2.782-6.952 9.04-22.505 6.076-26.284zM230.05 13.058V4.063c.015-1.378 1.04-2.29 2.291-2.283l40.493-.007c1.295 0 2.335.94 2.335 2.268v7.726c-.015 1.29-1.113 2.983-3.053 5.668l-20.97 29.843c7.78-.182 16.022.985 23.093 4.939 1.596.897 2.027 2.217 2.152 3.516v9.607c0 1.32-1.457 2.86-2.987 2.057-12.458-6.507-29-7.214-42.776.08-1.405.745-2.884-.765-2.884-2.086v-9.133c0-1.459.03-3.961 1.508-6.186l24.302-34.738h-21.162c-1.295 0-2.327-.927-2.342-2.276zM82.354 69.294H70.042c-1.171-.08-2.108-.956-2.203-2.072l.014-63.006c0-1.262 1.062-2.268 2.38-2.268L81.71 1.94c1.2.059 2.159.963 2.232 2.116v8.221h.234C87.163 4.326 92.8.613 100.39.613c7.708 0 12.539 3.713 15.98 11.664C119.361 4.326 126.14.613 133.393.613c5.175 0 10.804 2.123 14.251 6.893 3.916 5.311 3.111 12.993 3.111 19.755l-.015 39.764c0 1.255-1.061 2.262-2.379 2.262h-12.304c-1.23-.08-2.203-1.05-2.203-2.262l-.007-33.41c0-2.648.234-9.28-.344-11.796-.923-4.246-3.675-5.435-7.24-5.435-2.986 0-6.09 1.985-7.356 5.165-1.266 3.188-1.15 8.484-1.15 12.066v33.403c0 1.255-1.06 2.262-2.378 2.262h-12.297c-1.237-.08-2.21-1.051-2.21-2.262l-.015-33.41c0-7.025 1.142-17.362-7.59-17.362-8.858 0-8.506 10.074-8.506 17.362l-.007 33.403c-.022 1.276-1.084 2.283-2.401 2.283zm227.788-55.82c-9.084 0-9.662 12.328-9.662 20.017s-.117 24.131 9.545 24.131c9.545 0 10.006-13.262 10.006-21.345 0-5.303-.234-11.664-1.845-16.705-1.383-4.377-4.143-6.098-8.044-6.098zM310.025.613c18.284 0 28.173 15.647 28.173 35.533 0 19.222-10.92 34.468-28.173 34.468-17.933 0-27.712-15.647-27.712-35.132C282.305 15.86 292.2.612 310.025.612zm51.882 68.681h-12.275c-1.23-.08-2.211-1.05-2.211-2.261l-.015-63.028c.103-1.16 1.12-2.057 2.365-2.057l11.426-.008c1.076.059 1.961.788 2.188 1.766v9.636h.234c3.448-8.622 8.279-12.73 16.785-12.73 5.519 0 10.92 1.992 14.375 7.427C398 13.072 398 21.556 398 27.662v39.64c-.14 1.117-1.142 1.985-2.364 1.985h-12.349c-1.141-.073-2.064-.912-2.188-1.984V33.097c0-6.894.805-16.968-7.708-16.968-2.993 0-5.753 1.984-7.13 5.033-1.72 3.845-1.953 7.69-1.953 11.935v33.928c-.03 1.262-1.091 2.27-2.401 2.27zm-151.715-.16c-.813.73-1.991.78-2.913.284-4.092-3.385-4.824-4.953-7.064-8.177-6.756 6.864-11.543 8.921-20.305 8.921-10.372 0-18.438-6.376-18.438-19.134 0-9.965 5.424-16.742 13.139-20.061 6.683-2.925 16.023-3.458 23.167-4.253v-1.598c0-2.925.234-6.375-1.5-8.9-1.501-2.26-4.378-3.195-6.918-3.195-4.692 0-8.871 2.4-9.904 7.375-.212 1.11-1.024 2.204-2.137 2.262l-11.938-1.291c-1.01-.234-2.13-1.029-1.838-2.568C166.288 4.362 179.37 0 191.087 0c5.995 0 13.827 1.59 18.556 6.113 5.995 5.58 5.416 13.021 5.416 21.126v19.127c0 5.756 2.401 8.28 4.648 11.373.79 1.116.967 2.444-.036 3.26-2.518 2.102-6.983 5.968-9.443 8.15l-.036-.015zm-12.414-29.931v-2.656c-8.908 0-18.322 1.897-18.322 12.35 0 5.319 2.767 8.908 7.488 8.908 3.455 0 6.566-2.123 8.528-5.58 2.423-4.254 2.306-8.237 2.306-13.022zM48.72 69.133c-.813.73-1.991.781-2.913.285-4.092-3.385-4.824-4.953-7.064-8.177-6.763 6.864-11.55 8.921-20.305 8.921C8.06 70.162 0 63.786 0 51.028c0-9.965 5.417-16.742 13.139-20.061 6.683-2.925 16.015-3.458 23.16-4.253v-1.598c0-2.925.233-6.375-1.501-8.9-1.5-2.26-4.377-3.195-6.91-3.195-4.7 0-8.879 2.4-9.904 7.375-.212 1.11-1.024 2.204-2.137 2.262L3.91 21.367c-1.01-.234-2.13-1.029-1.845-2.568C4.81 4.362 17.89.007 29.615.007c5.995 0 13.827 1.59 18.556 6.113 5.995 5.581 5.416 13.022 5.416 21.126v19.128c0 5.755 2.401 8.28 4.648 11.372.79 1.116.967 2.444-.036 3.261-2.518 2.101-6.99 5.967-9.45 8.148l-.03-.021zm-12.422-29.93v-2.656c-8.908 0-18.32 1.897-18.32 12.35 0 5.319 2.766 8.908 7.487 8.908 3.462 0 6.573-2.123 8.528-5.58 2.422-4.254 2.305-8.237 2.305-13.022z"
              ></path>
            </g>
          </svg>
        </div>

        <div class="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
          <svg
            class="h-5 mt-1 text-gray-500 fill-current dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 278.7 36.3"
          >
            <g>
              <path
                class="st0"
                d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6m6.2-7.1h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3m-27.5 29c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2m-61.6.1h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.7h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1"
              ></path>
            </g>
          </svg>
        </div>

        <div class="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
          <svg
            class="h-8 text-gray-500 fill-current dark:text-gray-300"
            viewBox="0 0 2270 546"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill-rule="evenodd">
              <path
                d="M888.413 394.397l-31.127 144.717h-71.593L903.977 14.642h84.81l111.28 524.472h-72.371l-30.35-144.717H888.413zm100.373-58.364l-24.124-125.3c-7.003-35.797-14.007-82.463-19.441-119.828h-3.126c-5.434 38.13-13.242 86.365-20.22 119.827l-24.902 125.301h91.813zM1373.34.648v441.205c0 28.806 1.556 70.828 3.1 97.274h-63.02l-4.67-45.9h-2.334c-12.451 26.445-41.244 52.138-79.362 52.138-70.037 0-112.837-76.275-112.837-193.755 0-133.848 56.794-196.881 116.728-196.881 30.336 0 54.46 14.02 67.689 42.8h1.556V.648h73.15zm-73.163 304.258c0-6.991 0-15.551-.778-23.359-3.89-34.227-23.345-63.798-49.79-63.798-45.927 0-61.477 63.798-61.477 133.848 0 77.818 20.232 132.278 59.142 132.278 16.342 0 38.118-8.56 50.569-53.681 1.556-6.226 2.334-15.577 2.334-24.111V304.906zm247.399 240.446c-75.471 0-129.957-64.59-129.957-194.52 0-137.752 64.576-196.116 133.835-196.116 74.705 0 128.387 66.924 128.387 194.546 0 150.19-73.927 196.09-131.5 196.09h-.765zm2.321-57.573c45.122 0 55.251-80.153 55.251-137.726 0-56.82-10.116-137.739-56.794-137.739-48.26 0-57.586 80.919-57.586 137.74 0 63.02 10.895 137.725 58.364 137.725h.765zM1723.938.648h73.137V203.74h1.556c19.455-34.227 45.913-49.025 79.375-49.025 64.577 0 105.055 73.15 105.055 189.099 0 135.391-55.25 201.537-117.506 201.537-37.353 0-58.364-20.246-74.719-53.708h-3.086l-3.904 47.47h-63.02c1.556-25.668 3.112-68.468 3.112-97.274V.648zm73.137 404.618c0 8.586.778 17.146 3.113 23.358 11.66 45.926 34.24 55.251 49.012 55.251 43.579 0 59.92-57.572 59.92-135.391 0-72.371-17.106-130.735-60.698-130.735-24.124 0-43.578 28.793-49.025 56.03-1.557 7.781-2.335 17.91-2.335 25.68v105.807h.013zm293.92-40.453c.779 97.273 42.788 121.384 87.145 121.384 26.458 0 49.025-6.213 65.367-14.007l10.895 52.916c-22.568 11.673-56.808 17.912-90.27 17.912-94.925 0-144.73-71.594-144.73-188.321 0-123.732 56.795-199.994 135.392-199.994s115.172 75.484 115.172 170.435c0 18.664-.792 30.35-1.557 40.453l-177.413-.778zm109.712-52.126c.778-66.924-22.567-102.707-51.347-102.707-38.144 0-55.264 55.251-57.586 102.707h108.933z"
                fill-rule="nonzero"
              ></path>
              <path
                d="M373.462 16.043h218.501v523.07L373.462 16.044zm-153.926 0H.88v523.07l218.657-523.07zm76.976 192.77l139.218 330.3H344.5l-41.633-105.197H200.964l95.548-225.103z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </section>
  <!-- 联系我们 -->
  <section id="contactus">
    <div class="container mx-auto py-20">
      <h2 class="mb-4 md:mb-16 section-title">联系我们</h2>
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          <map-container />
          <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">地址</h2>
              <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">邮箱</h2>
              <a class="text-indigo-500 leading-relaxed">example@email.com</a>
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">电话</h2>
              <p class="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div
            class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
          >
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">合作洽谈</h2>
            <div class="relative mb-4">
              <label for="tel" class="leading-7 text-sm text-gray-600">联系方式</label>
              <input
                id="tel"
                type="tel"
                name="tel"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">电子邮箱</label>
              <input
                id="email"
                type="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">备注信息</label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              发送
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  </section>
  <!-- 新闻动态 -->
  <section id="news">
    <div class="container mx-auto py-20">
      <h2 class="mb-4 md:mb-16 section-title">新闻资讯</h2>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div class="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article"
              ><img
                src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                class="object-cover w-full h-64 rounded"
                alt=""
            /></a>
            <div class="py-5">
              <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">13 Jul 2020</p>
              <a
                href="/"
                aria-label="Article"
                class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                ><p class="text-2xl font-bold leading-5">Diving to the deep</p></a
              >
              <p class="mb-4 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.
              </p>
              <div class="flex space-x-4">
                <a
                  href="/"
                  aria-label="Likes"
                  class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div class="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline points="6 23 1 23 1 12 6 12" fill="none" stroke-miterlimit="10"></polyline>
                      <path
                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold">7.4K</p>
                </a>
                <a
                  href="/"
                  aria-label="Comments"
                  class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div class="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                        fill="none"
                        stroke-miterlimit="10"
                      ></polyline>
                      <polygon
                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                      ></polygon>
                    </svg>
                  </div>
                  <p class="font-semibold">81</p>
                </a>
              </div>
            </div>
          </div>
          <div class="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article"
              ><img
                src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                class="object-cover w-full h-64 rounded"
                alt=""
            /></a>
            <div class="py-5">
              <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">4 Nov 2020</p>
              <a
                href="/"
                aria-label="Article"
                class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                ><p class="text-2xl font-bold leading-5">Conquer the World</p></a
              >
              <p class="mb-4 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.
              </p>
              <div class="flex space-x-4">
                <a
                  href="/"
                  aria-label="Likes"
                  class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div class="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline points="6 23 1 23 1 12 6 12" fill="none" stroke-miterlimit="10"></polyline>
                      <path
                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold">7.4K</p>
                </a>
                <a
                  href="/"
                  aria-label="Comments"
                  class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div class="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                        fill="none"
                        stroke-miterlimit="10"
                      ></polyline>
                      <polygon
                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                      ></polygon>
                    </svg>
                  </div>
                  <p class="font-semibold">81</p>
                </a>
              </div>
            </div>
          </div>
          <div class="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article"
              ><img
                src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                class="object-cover w-full h-64 rounded"
                alt=""
            /></a>
            <div class="py-5">
              <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">28 Dec 2020</p>
              <a
                href="/"
                aria-label="Article"
                class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                ><p class="text-2xl font-bold leading-5">Explore the beautiful</p></a
              >
              <p class="mb-4 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.
              </p>
              <div class="flex space-x-4">
                <a
                  href="/"
                  aria-label="Likes"
                  class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div class="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline points="6 23 1 23 1 12 6 12" fill="none" stroke-miterlimit="10"></polyline>
                      <path
                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold">7.4K</p>
                </a>
                <a
                  href="/"
                  aria-label="Comments"
                  class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div class="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                        fill="none"
                        stroke-miterlimit="10"
                      ></polyline>
                      <polygon
                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                      ></polygon>
                    </svg>
                  </div>
                  <p class="font-semibold">81</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  -->
  <section>
    <div class="bg-gray-50">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
          <span class="block">Ready to dive in?</span>
          <span class="block text-indigo-600">Start your free trial today.</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
