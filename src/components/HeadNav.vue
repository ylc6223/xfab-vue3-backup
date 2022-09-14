<template>
  <nav class="w-screen fixed z-30 transition-all text-2xl bg-nav-color text-white" :class="{ active: sidebarState }">
    <div class="nav-bar flex items-center justify-between container mx-auto h-[60px]">
      <!--   移动端开关   -->
      <i class="sidebarTrigger ml-4 block md:hidden iconfont icon-ic_side" @click="sidebarOpen"></i>
      <!--   PC下logo   -->
      <span class="logo ml-4">
        <img
          v-show="!isActive"
          src="../assets/logo-white.svg"
          class="hidden md:inline-block w-10 inline-block mr-4"
          alt="益华数字"
        />
        <img
          v-show="isActive"
          src="../assets/logo.svg"
          class="hidden md:inline-block w-10 inline-block mr-4"
          alt="益华数字"
        />
        <router-link :to="{ name: 'Home' }" class="hidden lg:inline-block align-middle">{{ logo }}</router-link>
      </span>
      <!--  菜单    -->
      <div class="menu">
        <div class="logo-toggle w-full relative mb-5 block md:hidden">
          <span class="logo pl-[10px]"
            ><a href="#">
              <img
                v-show="!isActive"
                src="../assets/logo-white.svg"
                class="md:inline-block w-10 inline-block mr-4"
                alt="益华数字"
              />
              <img
                v-show="isActive"
                src="../assets/logo.svg"
                class="md:inline-block w-10 inline-block mr-4"
                alt="益华数字"
              /> </a
          ></span>
          <i ref="siderbarClose" class="absolute right-0 iconfont icon-cancel" @click="siderbarClose"></i>
        </div>

        <!--    菜单列表    -->
        <ul class="nav-links md:flex">
          <li v-for="link in menus" :key="link.name" class="mx-[5px] mb-10 md:mb-0">
            <router-link class="relative text-white no-underline p-[10px]" :to="{ name: link.name }"
              >{{ link.label }}
            </router-link>
          </li>
        </ul>
      </div>
      <!--   工具栏   -->
      <div class="toolbox mr-4 flex items-center">
        <div class="dark-light" :class="{ active: isActive }" @click="modeToggle">
          <i class="iconfont icon-moon"></i>
          <i class="iconfont icon-sun"></i>
        </div>

        <div class="search-box relative">
          <div class="searchToggle" :class="{ active: searchActive }" @click="searchToggle">
            <i class="iconfont icon-cancel"></i>
            <i class="iconfont icon-fenxiang"></i>
          </div>
          <div class="search-field" :class="{ hidden: !searchActive }">
            <input type="text" placeholder="Search..." />
            <i class="iconfont icon-fenxiang"></i>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<!--<script lang="ts" setup></script>-->
<script>
export default {
  name: 'HeadNav',
  props: {
    menus: {
      type: Array,
      required: true,
    },
    logo: {
      type: String,
      required: true,
      default: 'Logo',
    },
  },
  data() {
    return {
      isActive: false, //true表示开启夜间模式
      searchActive: false,
      body: null,
      sidebarState: false, //侧边栏状态
    }
  },
  mounted() {
    this.body = document.querySelector('body')
    this.body.classList.add('text-slate-500', 'dark:text-slate-400', 'bg-white', 'dark:bg-slate-900')
    let getMode = localStorage.getItem('mode')
    if (getMode && getMode === 'dark-mode') {
      this.body.classList.add('dark')
    }
    this.body.addEventListener('click', (e) => {
      let clickedElm = e.target

      if (!clickedElm.classList.contains('sidebarTrigger') && !clickedElm.classList.contains('menu')) {
        this.sidebarState = false
      }
    })
  },
  methods: {
    modeToggle() {
      this.isActive = !this.isActive
      this.body.classList.toggle('dark')
      if (!this.body.classList.contains('dark')) {
        localStorage.setItem('mode', 'light-mode')
      } else {
        localStorage.setItem('mode', 'dark-mode')
      }
    },
    searchToggle() {
      this.searchActive = !this.searchActive
    },
    sidebarOpen() {
      this.sidebarState = true
    },
    siderbarClose() {
      this.sidebarState = false
    },
  },
}
</script>
