<template>
  <div>
    <div id="animation">测试内容</div>
  </div>
</template>

<script>
export default {
  name: 'animationCustom',
  mounted() {
    var start = null
    var element = document.getElementById('animation')
    element.style.position = 'absolute'

    function step(timestamp) {
      console.log(9999, timestamp)
      if (!start) start = timestamp
      var progress = timestamp - start
      element.style.left = Math.min(progress / 10, 200) + 'px'
      if (progress < 2000) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }
}
</script>

<style lang="scss" scoped>
#animation {
    width: 50px;
    height: 50px;
    border: 1px solid red;
}
</style>