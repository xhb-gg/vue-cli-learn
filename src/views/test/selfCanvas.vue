<template>
  <div>
    <canvas id="self-canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'selfCanvas',
  mounted() {
    this.init()
  },
  methods: {
    init() {
      console.log(78999, document.getElementById('self-canvas'))
      var ctx = document.getElementById('self-canvas').getContext('2d')
      ctx.fillStyle = 'red'
      ctx.font = '16px Microsoft Yahei'
      ctx.fillText('Hello world', 5, 20)
      var text = ctx.measureText('Hello world')

      //   ctx.beginPath()
      //   ctx.moveTo(10, 0)
      //   ctx.lineTo(10 + Math.ceil(text.width), 0)
      //   ctx.lineWidth = 1
      //   ctx.lineCap = "round"
      //   ctx.lineTo(10 + Math.ceil(text.width), 30)
      //   ctx.lineTo(10, 30)
      //   ctx.lineTo(10, 0)
      //   ctx.stroke();
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
      function Rect(x, y, w, h) {
        return { x: x, y: y, width: w, height: h }
      }

      var rect = Rect(0, 0, Math.ceil(text.width) + 10, 30)
      var r = 15

      drawUsingArc(rect, r, ctx)

      function drawUsingArc(rect, r, ctx) {
        var path = new Path2D()

        path.moveTo(rect.x + r, rect.y)
        path.lineTo(rect.x + rect.width - r, rect.y)
        path.arc(
          rect.x + rect.width - r,
          rect.y + r,
          r,
          (Math.PI / 180) * 270,
          0,
          false
        )
        path.lineTo(rect.x + rect.width, rect.y + rect.height - r)
        path.arc(
          rect.x + rect.width - r,
          rect.y + rect.height - r,
          r,
          0,
          (Math.PI / 180) * 90,
          0,
          false
        )
        path.lineTo(rect.x + r, rect.y + rect.height)
        path.arc(
          rect.x + r,
          rect.y + rect.height - r,
          r,
          (Math.PI / 180) * 90,
          (Math.PI / 180) * 180,
          false
        )
        path.lineTo(rect.x, rect.y + r)
        path.arc(
          rect.x + r,
          rect.y + r,
          r,
          (Math.PI / 180) * 180,
          (Math.PI / 180) * 270,
          false
        )

        ctx.fill(path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#self-canvas {
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
}
</style>