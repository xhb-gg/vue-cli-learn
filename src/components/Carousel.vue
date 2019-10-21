<template>
    <div class="my-carousel-container">
        <div class="my-carousel-wrapper" ref="carouselBox">
            <ul class="my-carousel-box flex">
                <li v-for="(img, index) in imgList" :key="index" class="my-carousel-item">
                    <img :src="img.url" alt="" class="my-carousel-item-img">
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      imgList: [
        {
          url:
            'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1570533776&di=dce01197359c33044bcf5b9c638d9021&src=http://b-ssl.duitang.com/uploads/item/201210/24/20121024114700_5JveU.jpeg'
        },
        {
          url: 'http://3.img.265g.com/img4/201305/201305091417188076.jpg'
        },
        {
          url:
            'http://pic59.nipic.com/file/20150129/14041019_214201036000_2.jpg'
        }
      ],
      itemWidth:
        document.body.clientWidth || document.documentElement.clientWidth
    }
  },
  mounted() {
    this.$refs.carouselBox.style.width = `${this.itemWidth *
      this.imgList.length}px`
    setTimeout(() => {
      this.$refs.carouselBox.style.transform = `translate3d(-${this.itemWidth}px, 0, 0)`
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.my-carousel-container {
  overflow: hidden;
  .my-carousel-wrapper {
    // transition: all 2.5s;
    .my-carousel-box {
      .my-carousel-item {
        width: 100%;
        .my-carousel-item-img {
          width: 100vw;
          height: 400px;
          display: block;
          object-fit: cover;
        }
      }
    }
  }
}
</style>