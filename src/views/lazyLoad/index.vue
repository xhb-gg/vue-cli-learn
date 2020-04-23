<template>
  <div class="lazyload-container flex" ref="lazyLoadContainer">
    <div v-for="(img, index) in list" :key="index" class="img-item-box">
      <img :data-src="img" alt />
    </div>
  </div>
</template>

<script>
import customUtils from '@/utils/customUtil'

const list = [
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_1573467302695270110.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_15734592022036065602.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_157342860259167389.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_1573467302695270110.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_15734592022036065602.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_157342860259167389.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_1573467302695270110.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_15734592022036065602.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_157342860259167389.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_1573467302695270110.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_15734592022036065602.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_157342860259167389.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_1573467302695270110.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_15734592022036065602.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_157342860259167389.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_1573467302695270110.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_15734592022036065602.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_157342860259167389.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_1573467302695270110.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_15734592022036065602.jpg',
  'http://xfarm-monitor.oss-cn-hangzhou.aliyuncs.com/2019/11/11/W867012033432797_157342860259167389.jpg'
]

export default {
  name: 'lazyLoad',
  data() {
    return {
      list: list,
      imgNodeListCache: [],
      scrollContainer: null,
      person: {
        name: 'xuhaibin',
        age: 25
      }
    }
  },
  watch: {
    person: {
      handler() {
        console.log(999, this.person)
      },
      deep: true
    }
  },
  mounted() {
    // delete this.person.name
    // this.person.__ob__.dep.notify()
    this.imgNodeListCache = [...document.querySelectorAll('img')]
    this.scrollContainer = this.$refs.lazyLoadContainer
    this.scrollContainer.scrollTo(0, 1)
    this.scrollContainer.addEventListener(
      'scroll',
      customUtils.throttle(this.handleImgScroll, 300)
    )
  },
  methods: {
    handleImgScroll() {
      const containerHeight =
        this.scrollContainer.clientHeight + this.scrollContainer.scrollTop
      this.imgNodeListCache.forEach(img => {
        const rect = img.getBoundingClientRect()
        if (rect.top < containerHeight) {
          img.src = img.getAttribute('data-src')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.lazyload-container {
  height: 40vh;
  overflow-y: scroll;
  flex-wrap: wrap;
  .img-item-box {
    width: calc(100vw / 3);
    height: 25vh;
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }
}
</style>