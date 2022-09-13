<template>
  <div class="scroll-nav">
    <div
      class="nav-bar-wrap relative bg-light-gray w-full h-7 md:h-14"
      :style="{
        position: navBarFixed ? 'fixed' : 'relative',
        top: navBarFixed ? navTop : 0,
        right: navBarFixed ? navRight : 0,
        left: navBarFixed ? navLeft : 0,
        bottom: navBarFixed ? navBottom : 0,
        width: navBarFixed ? navFixedWidth : navWidth,
        height: navBarFixed ? navFixedHeight : '100%',
      }"
    >
      <ul
        class="nav-bar absolute w-screen md:w-auto md:left-1/2 md:-translate-x-2/4 mx-auto h-full whitespace-nowrap overflow-x-auto"
      >
        <li
          v-for="(item, index) in navMenu"
          :key="item.value"
          class="relative cursor-pointer inline-block px-8 md:px-0 md:mr-16 h-full"
          :class="{ active: item.checked }"
          :style="item.checked ? isActive : notActive"
        >
          <a class="block h-full flex justify-center items-center" @click.prevent="selectNav(item, index)">
            {{ item.label }}</a
          >
        </li>
        <!--        <div class="line absolute"></div>-->
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ScrollNav',
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
    // 滚动条所在区域的名字（可类名id名等元素标识）
    relativeName: {
      type: String,
      default: 'html',
    },
    // 对滚动条滚动的高度做运算的值，由于滚动区域的offsetParent可能跟导航栏的offsetParent不一样，会存在差值
    // 所以判断导航栏是否达到固定条件是，需要对滚动区域的scrollTop结合该值做运算
    extraFixed: {
      type: Number,
      default: 0,
    },
    // 用来对滚动时哪个导航需要被激活，做额外的偏差值运算判断
    // 在不吸顶(无fixed)的情况下，导航指定的内容只要滚动到滚动容器顶部(scrollContainer.scrollTop=content.offsetTop)就算到了该内容了的导航了，即滚动了【内容的offsetTop】的距离
    // 但是吸顶之后，只要滚动到吸顶导航栏底部就算到了指定导航内容了，所以相当于只要滚动【内容的offsetTop - 吸顶导航栏的高度】的距离就会到达临界值,这里少走了一段距离即吸顶导航栏的高度
    // 转换成公式来理解，c代表导航内容的offsetTop，s代表滚动的距离，吸顶导航栏高度为h。只要滚动距离大于等于上面说的临界值，即肯定到达了对应导航。
    // 因此公式： s >= c - h， 即 s + h >= c 时(滚动距离加导航栏高度>=内容offsetTop)，到达条件成立，因此滚动容器的scrollTop都要加上h，才是拿来判断的值
    // 当然上面说的只是一般的情况，还有滚动容器不是导航对应内容的offsetParent的情况，则需要加减【其他偏差值】，如padding等，
    // 所以这里的extraScroll就是表示这些【其他偏差值】，一般情况是跟上面的extraFixed等值的，这里我没有沿用extraFixed是因为，
    // 提供更多可能性给用户，有些用户可能不恰好就是用临界情况来区分内容落到哪个导航上，所以提供该值，让可以根据实际情况进行传值。
    // 但是不设置该值时，会默认沿用extraFixed的值
    extraScroll: {
      type: Number,
      default: 0,
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
    fixedWidth: {
      // 导航栏固定后的宽度
      type: [Number, String],
      default: 0,
    },
    fixedHeight: {
      // 导航栏固定后的高度
      type: [Number, String],
      default: 0,
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
  },
  data() {
    return {
      offsetTops: {
        // 记录导航栏和导航内容的offsetTop
        navBar: 0,
      },
      navBarFixed: false, // 导航栏是否被固定了
      scrollContainer: null, // 滚动条所在容器 html
      fixedHeightPx: 0, // 导航栏固定后的实际高度px值
      canUseSticky: false, //浏览器是否支持sticky
      notActive: {
        color: 'inherit',
      },
      navMenu: [],
    }
  },
  computed: {
    // 主要是未固定前的导航栏的高度
    navHeight() {
      return this.createValue(this.height)
    },
    // 主要是未固定前的导航栏的宽度
    navWidth() {
      return this.createValue(this.width)
    },
    // 导航栏固定后的高度，如果没有设置指定高度，那么默认是用未固定前的导航栏height
    navFixedHeight() {
      const height = this.fixedHeight ? this.fixedHeight : this.height
      return this.createValue(height)
    },
    // 导航栏固定之后的宽度，如果没有设置指定宽度，那么默认是用未固定前的导航栏width
    navFixedWidth() {
      const width = this.fixedWidth ? this.fixedWidth : this.width
      return this.createValue(width)
    },
    navTop() {
      return this.createValue(this.top)
    },
    navLeft() {
      return this.createValue(this.left)
    },
    navBottom() {
      return this.createValue(this.bottom)
    },
    navRight() {
      return this.createValue(this.right)
    },
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
    // 根据是否需要导航栏固定的条件下，区分生成滚动导航的偏差值，如果没设置extraScroll，默认用extraFixed
    scrollDeviation() {
      const extra = this.extraScroll ? this.extraScroll : this.extraFixed
      return this.needFixed ? this.fixedHeightPx + extra : extra
    },
    // 根据传入的props来计算绑定滚动事件的对象
    scrollTarget() {
      return this.relativeName.toLowerCase() === 'html' ? window : this.scrollContainer
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
    //1.计算实际的导航栏固定后的高度
    // this.calcFixedHeightPx()
    //2.判断浏览器环境是否支持sticky,如支持则启用
    // this.canUseSticky = this.useSticky && this.validateSticky()
    //3.重新调整尺寸
    this.hanldeResize()
    //4.获取滚动容器 当前props传入的是html也就是window
    this.scrollContainer = document.querySelector(this.relativeName)
    //5.监听滚动容器的scroll事件和指定事件回调
    this.scrollTarget.addEventListener('scroll', this.handleScroll)
    //6.当浏览器大小发生变化时，重新计算各个offsetTop
    window.addEventListener('resize', this.hanldeResize)
  },
  beforeUnmount() {
    this.scrollTarget.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.hanldeResize)
  },
  methods: {
    //将数值转换成像素单位字符串
    createValue(value) {
      return typeof value === 'number' ? `${value}px` : value
    },
    /*
     * 点击标题跳转到对应内容
     * */
    async selectNav(navItem, index) {
      // 获取对应的滚动距离，先前已计算好
      const scrollDistance = this.offsetTops[`content${index}`] - this.scrollDeviation
      if (this.useAnimation && this.scrollContainer.scrollTo) {
        // 如果支持scrollTo，则用其做动画效果过度
        // 由于过度切换会触发onscroll事件，如果不屏蔽之前的绑定监听，那么导航栏就会出现激活状态根据滚动过程也有一个切换动画效果，感觉不好看，所以我选择不要这个效果
        this.scrollTarget.removeEventListener('scroll', this.handleScroll)
        // 过渡滚动动画完成后，就要启用之前屏蔽掉的滚动监听事件
        const scrollHandler = () => {
          if (this.scrollContainer.scrollTop === scrollDistance) {
            this.scrollTarget.addEventListener('scroll', this.handleScroll)
            this.scrollTarget.removeEventListener('scroll', scrollHandler)
          }
        }
        this.scrollTarget.addEventListener('scroll', scrollHandler)
        this.scrollContainer.scrollTo({ top: scrollDistance, behavior: 'smooth' })
      } else {
        // 不支持，只能直接切换了
        this.scrollContainer.scrollTop = scrollDistance
      }
      await this.$nextTick()
      this.resetNavSelect()
      navItem.checked = true
    },
    /*
     *  离开导航所属内容时取消选中状态
     * */
    resetNavSelect() {
      this.navMenu.forEach((item) => {
        item.checked = false
      })
    },
    /**
     * 监听页面滚动
     */
    handleScroll() {
      //top=滚动容器中被卷去的高度
      const top = this.scrollContainer.scrollTop
      // 这是用来判断目前滚动在于哪个导航上的值，对滚动容器scrollTop做了偏差值处理
      const fixedBaseTop = top + this.scrollDeviation //滚动容器scrollTop+偏差值
      const menuLength = this.navMenu.length
      if (this.needFixed && !this.canUseSticky) {
        // 开启吸顶且当前浏览器不支持sticky 条件是s>=c-h
        if (top + this.extraFixed >= this.offsetTops.navBar) {
          console.log('触发了')
          this.navBarFixed = true
        }
        // 这是控制导航栏吸顶 - 取消吸顶
        if (top + this.extraFixed < this.offsetTops.navBar) {
          this.navBarFixed = false
        }
      }
      // TODO
      this.resetNavSelect()
      // 滚动条到达底部就选中最后一个导航
      if (top + this.scrollContainer.clientHeight >= this.scrollContainer.scrollHeight) {
        this.navMenu[menuLength - 1].checked = true
        return
      }
      // 以下都为依据滚动自动选择对应导航
      for (let i = 0; i < menuLength - 1; i++) {
        if (fixedBaseTop >= this.offsetTops[`content${i}`] && fixedBaseTop < this.offsetTops[`content${i + 1}`]) {
          this.navMenu[i].checked = true
          return
        }
      }
      if (fixedBaseTop >= this.offsetTops[`content${menuLength - 1}`]) {
        this.navMenu[menuLength - 1].checked = true
        return
      }
      this.navMenu[0].checked = true
      // TODO
    },
    /**
     * 计算页面的各个offsetTop，主要供父组件使用，用于当父组件内容发生高度变化时，重新计算offsetTop值
     */
    calcTop(recalNav) {
      this.$nextTick(() => {
        //重新计算导航栏的位置
        recalNav && (this.offsetTops.navBar = document.querySelector('.scroll-nav .nav-bar-wrap').offsetTop)
        console.log('navBar sticky offsetTop', this.offsetTops.navBar)
        this.navMenu.forEach((item, index) => {
          //重新计算默认插槽内元素的offsetTop
          this.offsetTops[`content${index}`] =
            this.$slots.default()[index].el.offsetTop || this.$slots.default[index].elm.offsetTop
          console.log(this.offsetTops[`content${index}`])
        })
      })
    },
    hanldeResize() {
      //对元素的offsetTop进行求值
      this.calcTop(true)
    },
    /**
     * 计算实际的导航栏固定后的高度，值是px时的值。
     * 主要是针对用户传进来的高度是字符串的形式，如百分比等情况。因为组件要用实际的高度px值来做一些运算
     */
    calcFixedHeightPx() {
      const div = document.createElement('div')
      div.style.position = 'fixed'
      div.style.height = this.navFixedHeight
      document.body.appendChild(div)
      this.fixedHeightPx = div.offsetHeight
      document.body.removeChild(div)
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
        const navBarWrap = document.querySelector('.scroll-nav .nav-bar-wrap')
        navBarWrap.style.position = supportStickyValue
        navBarWrap.style.top = this.navStickyTop
        navBarWrap.style.left = this.navStickyLeft
        navBarWrap.style.right = this.navStickyRight
        navBarWrap.style.bottom = this.navStickyBottom
        return true
      }
      return false
    },
  },
}
</script>

<style scoped lang="scss">
.nav-bar-wrap ul li.active a:after {
  content: ' ';
  height: 2px;
  width: 100%;
  background: #0052d9;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  //animation: expand 0.2s;
}

.line {
  border-bottom: 2px solid transparent;
  z-index: 1;
  transform: translateX(-60px);
  transition: all 0.35s ease-in-out;
}
</style>
