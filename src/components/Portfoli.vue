<template>
  <div class="w-full">
    <ul class="flex mx-auto justify-center mb-20 filter-btns" data-aos="fade-up" data-aos-delay="100">
      <li
        v-for="(item, index) in menus"
        :key="item"
        :data-filter="item.selector"
        class="filter-btn rounded-xl px-4 py-2"
        :class="{ 'bg-nav-color text-white': curIndex === index }"
        @click="checked(index, $event)"
      >
        {{ item.label }}
      </li>
    </ul>
    <div class="portfolio-container w-full relative" data-aos="fade-up" data-aos-delay="200">
      <div
        v-for="(images, index) in imagesSource"
        :key="images"
        class="portfolio-item group"
        :class="[images.deviceSeries]"
      >
        <div class="portfolio-img overflow-hidden">
          <img
            :src="'/src/assets/images/portfolio/portfolio-' + (index + 1) + '.jpg'"
            class="w-full h-auto object-cover group-hover:scale-110 transition ease-in duration-300"
            alt=""
          />
        </div>
        <div class="portfolio-info group-hover:opacity-100">
          <h4 class="text-white text-lg font-semibold">{{ images.label }}</h4>
          <p class="text-white text-sm">{{ images.text }}</p>
          <a href="#" class="portfolio-lightbox preview-link" title="App 1"><i class="iconfont icon-plus"></i></a>
          <a href="#" class="details-link" title="More Details"><i class="iconfont icon-link"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'

export default {
  name: 'Portfoli',
  data() {
    return {
      //默认选中选项
      curIndex: 0,
      //菜单
      menus: [
        {
          selector: '*',
          label: '全部',
        },
        {
          selector: '.h',
          label: '种植机',
        },
        {
          selector: '.x',
          label: '切削机',
        },
        {
          selector: '.z',
          label: '干湿一体机',
        },
        {
          selector: '.auto',
          label: '自动换盘机',
        },
      ],
      //图片资源
      imagesSource: [
        {
          deviceSeries: 'h',
          model: '',
          label: '金属五轴种植机',
          text: '金属五轴种植机',
          url: '@/assets/images/portfolio/portfolio-1.jpg',
          features: '',
        },
        {
          deviceSeries: 'h',
          model: '',
          label: '金属五轴种植机',
          text: '金属五轴种植机',
          url: '@/assets/images/portfolio/portfolio-2.jpg',
          features: '',
        },
        {
          deviceSeries: 'x',
          model: '',
          label: '金属五轴种植机',
          text: '金属五轴种植机',
          url: '@/assets/images/portfolio/portfolio-3.jpg',
          features: '',
        },
        {
          deviceSeries: 'x',
          model: '',
          label: '金属五轴种植机',
          text: '金属五轴种植机',
          url: '@/assets/images/portfolio/portfolio-4.jpg',
          features: '',
        },
        {
          deviceSeries: 'z',
          model: '',
          label: '金属五轴种植机',
          text: '金属五轴种植机',
          url: '@/assets/images/portfolio/portfolio-5.jpg',
          features: '',
        },
        {
          deviceSeries: 'z',
          model: '',
          label: '金属五轴种植机',
          text: '金属五轴种植机',
          url: '@/assets/images/portfolio/portfolio-6.jpg',
          features: '',
        },
        {
          deviceSeries: 'h',
          model: '',
          label: '金属五轴种植机',
          text: '金属五轴种植机',
          url: '@/assets/images/portfolio/portfolio-7.jpg',
          features: '',
        },
        {
          deviceSeries: 'h',
          model: '',
          label: '金属五轴种植机',
          text: '金属五轴种植机',
          url: '@/assets/images/portfolio/portfolio-8.jpg',
          features: '',
        },
        {
          deviceSeries: 'auto',
          label: '金属五轴种植机',
          text: '金属五轴种植机',
          url: '@/assets/images/portfolio/portfolio-9.jpg',
          featuares: '',
        },
      ],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      var grid = document.querySelector('.portfolio-container')
      var iso
      imagesLoaded(grid, () => {
        iso = new Isotope('.portfolio-container', {
          itemSelector: '.portfolio-item',
          masonry: {
            columnWidth: '.portfolio-item',
          },
        })
      })
      const filterBtns = document.querySelector('.filter-btns')
      filterBtns.addEventListener('click', function (e) {
        let { target } = e
        const filterOption = target.getAttribute('data-filter')
        if (filterOption) {
          document.querySelectorAll('.filter-btn.active').forEach((btn) => {
            btn.classList.remove('active')
          })
          target.classList.add('active')
          iso.arrange({ filter: filterOption })
          iso.layout()
        }
      })
    },
    checked(checkedIndex, e) {
      this.curIndex = checkedIndex
    },
  },
}
</script>

<style scoped lang="scss"></style>
