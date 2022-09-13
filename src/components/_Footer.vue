<template>
  <div class="w-full h-[auto] md:h-120 bg-light-gray">
    <div class="flex flex-col w-full h-[auto] xl:h-120 md:w-[96%] lg:w-[96%] xl:w-[1200px] mx-auto">
      <div class="text-xl">
        <div
          class="flex h-[1.375rem] md:h-[3.4375rem] box-content pt-[41px] md:pt-[33px] mb-[18px] md:mb-[40px] md:border-b"
        >
          <h3 class="ml-8 mr-[21px] md:mr-8 md:ml-0 text-base md:text-2xl">关注我们</h3>
          <ul class="flex">
            <li class="iconfont icon-weibo text-3xl inline-block mr-[23px] md:mr-[28px]">
              <a href="https://weibo.com/tencent" class="block w-full" target="_blank" />
            </li>
            <li class="iconfont icon-weixin text-3xl inline-block mr-[23px] md:mr-[28px]">
              <a href="https://weibo.com/tencent" class="block w-full" target="_blank" />
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row text-start">
        <div class="w-full lg:w-1/6">
          <div>
            <h3 class="text-base md:text-2xl ml-8 md:ml-0 mr-[21px] md:mr-8 mb-4 lg:mb-8">加入我们</h3>
            <ul class="hidden lg:block">
              <li><a href="#" class="block mb-4">社会招聘</a></li>
            </ul>
          </div>
        </div>
        <div class="w-full lg:w-1/6">
          <div>
            <h3 class="text-base md:text-2xl ml-8 md:ml-0 mr-[21px] md:mr-8 mb-4 lg:mb-8">联系我们</h3>
            <ul class="hidden lg:block">
              <li><a href="#" class="block mb-4">客户服务</a></li>
              <li><a href="#" class="block mb-4">合作洽谈</a></li>
            </ul>
          </div>
        </div>
        <div class="w-full lg:w-1/6">
          <div>
            <h3 class="text-base md:text-2xl ml-8 md:ml-0 mr-[21px] md:mr-8 mb-4 lg:mb-8">法律信息</h3>
            <ul class="hidden lg:block">
              <li><a href="#" class="block mb-4">服务协议</a></li>
              <li><a href="#" class="block mb-4">隐私政策</a></li>
              <li><a href="#" class="block mb-4">知识产权</a></li>
            </ul>
          </div>
        </div>
        <div class="logo md:w-3/6">
          <img class="hidden md:block" src="@/assets/images/brand.png" alt="" />
        </div>
      </div>
      <div class="mt-6 ml-8 md:mx-0 pb-[29px] md:pb-0">
        <ul class="links flex text-[12px] md:text-base">
          <li class="hidden lg:block mr-[20px]"><a href="#">法律声明</a></li>
          <li class="hidden lg:block mr-[20px]"><a href="#">阳光准则</a></li>
          <li class="hidden lg:block mr-[20px]"><a href="#">网站地图</a></li>
          <li class="hidden md:block mr-[20px]"><a href="#">粤网文【2017】232-11112号</a></li>
          <li class="hidden md:block mr-[20px]"><a href="#">粤公网安备 44111112号</a></li>
        </ul>
        <p class="copyright text-[12px] md:text-base text-start mt-[12px]">
          <a href="http://beian.miit.gov.cn/" class="block md:hidden"
            >粤网文【2017】1234-1444号<span>粤A2-211119</span></a
          ><a class="block md:hidden" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502008569"
            >粤公网安备 44444444444号</a
          >Copyright © 2017 - 2022 XFAB. All Rights Reserved. <br class="md:hidden" />XFAB 版权所有
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="scss"></style>
