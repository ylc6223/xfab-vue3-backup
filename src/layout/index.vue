<template>
  <head-nav class="shadow-bottom" logo="益华数字" :menus="links" />
  <router-view class="main-container bg-light-gray relative z-20 top-[-60px] mb-[-60px]" />
  <ft />
</template>

<script>
import HeadNav from '@/components/HeadNav.vue'
import _Footer from '../components/_Footer.vue'

export default {
  name: 'Index',
  components: {
    HeadNav,
    ft: _Footer,
  },
  data() {
    return {
      links: [
        {
          name: 'Home',
          label: '主页',
        },
        {
          name: 'About',
          label: '简介',
        },
        {
          name: 'Product',
          label: '业务',
        },
        {
          name: 'Case',
          label: '案例',
        },
        {
          name: 'ContactUs',
          label: '联系我们',
        },
        {
          name: 'Staff',
          label: '员工',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss"></style>
