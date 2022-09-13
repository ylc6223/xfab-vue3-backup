<template>
  <div ref="navbar" class="nav-bar-fill relative border-b-stone-100 border-b md:h-14">
    <div
      class="nav-bar-wrap relative bg-light-gray w-full h-7 md:h-14"
      :style="{
        position: navBarFixed ? 'fixed' : 'relative',
        top: top + 'px',
        zIndex: 100,
      }"
    >
      <ul
        class="nav-bar absolute w-screen md:w-auto md:left-1/2 md:-translate-x-2/4 mx-auto h-full whitespace-nowrap overflow-x-auto"
      >
        <li
          v-for="(item, index) in navMenu"
          :key="item.value"
          class="relative cursor-pointer inline-block px-8 md:px-0 md:mr-16 h-full"
          :class="{ active: index == curIndex }"
          :style="item.checked ? isActive : notActive"
        >
          <a class="block h-full flex justify-center items-center" @click.prevent="selectNav(item, index, $event)">
            {{ item.label }}</a
          >
        </li>
        <div class="line absolute"></div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StickyNav',
  props: {
    // 导航栏选项
    menu: {
      required: true,
      type: Array,
      default() {
        // 传值格式：{label: '', checked: false}
        return []
      },
    },
    // 未固定前的导航栏高度
    height: {
      type: [Number, String],
      default: 56,
    },
    // 未固定前的导航栏宽度
    width: {
      type: [Number, String],
      default: '100%',
    },
    needFixed: {
      // 是否需要固定导航栏（吸顶）
      type: Boolean,
      default: true,
    },
    top: {
      // 固定之后的top值
      type: [Number, String],
      default: 0,
    },
    right: {
      // 固定之后的right值
      type: [Number, String],
      default: 'auto',
    },
    left: {
      // 固定之后的left值
      type: [Number, String],
      default: 'auto',
    },
    bottom: {
      // 固定之后的bottom值
      type: [Number, String],
      default: 'auto',
    },
    color: {
      // 导航被激活的颜色
      type: String,
      default: '#387af6',
    },
    stickyTop: {
      // 利用sticky实现后的top值
      type: [Number, String],
      default: 0,
    },
    stickyLeft: {
      // 利用sticky实现后的left值
      type: [Number, String],
      default: 0,
    },
    stickyRight: {
      // 利用sticky实现后的right值
      type: [Number, String],
      default: 0,
    },
    stickyBottom: {
      // 利用sticky实现后的bottom值
      type: [Number, String],
      default: 0,
    },
    useSticky: {
      // 在浏览器支持的情况下，是否采用sticky形式
      type: Boolean,
      default: true,
    },
    useAnimation: {
      // 是否启用滚动过渡动画
      type: Boolean,
      default: true,
    },
    //需导航内容的各个offsetTop
    contentOffsetTops: {
      type: Object,
      default: function () {
        return {}
      },
      required: true,
    },
  },
  data() {
    return {
      navBarFixed: false, // 导航栏是否被固定了
      canUseSticky: false, //浏览器是否支持sticky
      notActive: {
        color: 'inherit',
      },
      navMenu: [],
      curIndex: 0,
      target: null,
    }
  },
  computed: {
    // 采用sticky方式固定的，如果没设置stickyTop，默认采用top
    navStickyTop() {
      const value = this.stickyTop ? this.stickyTop : this.top
      return this.createValue(value)
    },
    navStickyLeft() {
      const value = this.stickyLeft ? this.stickyLeft : this.left
      return this.createValue(value)
    },
    navStickyRight() {
      const value = this.stickyRight ? this.stickyRight : this.right
      return this.createValue(value)
    },
    navStickyBottom() {
      const value = this.stickyBottom ? this.stickyBottom : this.bottom
      return this.createValue(value)
    },
    isActive() {
      return {
        color: this.color,
      }
    },
  },
  watch: {
    //监听导航栏菜单的变化
    menu: {
      handler(newValue) {
        this.navMenu = newValue.map((item) => {
          return {
            label: item.label,
            checked: item.checked || false,
          }
        })
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    //判断浏览器环境是否支持sticky,如支持则启用
    this.canUseSticky = this.useSticky && this.validateSticky()
    //对浏览器不支持sticky属性做兼容性处理
    this.navHeight = document.querySelector('.nav-bar-wrap').scrollHeight
    window.addEventListener('scroll', this.handleScroll)
    //默认激活第一项
    this.setLinePosition()
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleScroll() {
      //获取页面滚动条的高度
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let offsetTop = this.getOffsetTop(this.$refs.navbar)
      this.navBarFixed = scrollTop >= offsetTop

      // 滚动条到达底部就选中最后一个导航...

      // 滚动条到达底部就选中最后一个导航
      if (scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        console.log(scrollTop + document.body.clientHeight)
        this.curIndex = this.navMenu.length - 1
        return
      }
      // 以下都为依据滚动自动选择对应导航
      for (let i = 0; i < this.navMenu.length - 1; i++) {
        if (
          scrollTop >= this.contentOffsetTops[`content${i}`] &&
          scrollTop < this.contentOffsetTops[`content${i + 1}`]
        ) {
          this.curIndex = i
          return
        }
      }
      if (scrollTop >= this.contentOffsetTops[`content${this.navMenu.length}`]) {
        this.curIndex = this.navMenu.length - 1
        return
      }
      this.curIndex = 0
    },
    handleResize() {},
    //获取当前元素的offsetTop
    getOffsetTop(obj) {
      let offsetTop = 0
      while (obj != window.document.body && obj != null) {
        offsetTop += obj.offsetTop
        obj = obj.offsetParent
      }
      return offsetTop
    },
    //对传入的值做类型做类型转换
    createValue(value) {
      return typeof value === 'number' ? `${value}px` : value
    },
    /*
     * 点击标题跳转到对应内容
     * */
    async selectNav(navItem, index, e) {
      this.curIndex = index
      this.scrollTo(index)
      this.setLinePosition(e.target)
    },
    scrollTo(index) {
      window.scrollTo({
        top: this.contentOffsetTops[`content${index}`],
        behavior: 'smooth',
      })
    },
    setLinePosition(element) {
      const line = document.querySelector('.line')
      if (!element) {
        const initLeft = document.querySelector('.nav-bar-fill .nav-bar').firstElementChild.offsetLeft
        const initWidth = document.querySelector('.nav-bar-fill .nav-bar').firstElementChild.offsetWidth
        line.style.width = `${initWidth}px`
        line.style.height = `2px`
        line.style.left = `${initLeft}px`
        line.style.bottom = `0`
        line.style.backgroundColor = this.color
        line.style.transform = 'none'
        return
      }
      //获取a标签的位置
      const width = element.getBoundingClientRect().width
      const left = element.parentNode.offsetLeft
      //下划线的位置跟随a标签
      line.style.width = `${width}px`
      line.style.height = `2px`
      line.style.left = `${left}px`
      line.style.bottom = `0`
      line.style.backgroundColor = this.color
      line.style.transform = 'none'
    },
    /**
     * 检查浏览器是否支持sticky
     */
    isSupportSticky() {
      var prefix = ['-o-', '-ms-', '-moz-', '-webkit-', '']
      var prefixValue = []
      for (var i = 0; i < prefix.length; i++) {
        prefixValue.push(prefix[i] + 'sticky')
      }
      var element = document.createElement('div')
      var eleStyle = element.style
      for (var j = 0; j < prefixValue.length; j++) {
        eleStyle.position = prefixValue[j]
      }
      return eleStyle.position
    },
    /**
     * 检查浏览器是否有支持的sticky值，没有返回false，有就使用sticky实现固定
     */
    validateSticky() {
      const supportStickyValue = this.isSupportSticky()
      if (supportStickyValue) {
        const navBarBox = document.querySelector('.nav-bar-fill .nav-bar-wrap')
        navBarBox.style.position = supportStickyValue
        navBarBox.style.top = this.navStickyTop
        navBarBox.style.left = this.navStickyLeft
        navBarBox.style.right = this.navStickyRight
        navBarBox.style.bottom = this.navStickyBottom
        return true
      }
      return false
    },
  },
}
</script>

<style scoped lang="scss">
.line {
  z-index: 1;
  transition: all 0.35s ease-in-out;
}
</style>
