<template>
  <div class="page-home">
    <!-- <button @click="handleToast">测试</button> -->
    <div class="load-container">
      <div class="boxLoading"></div>
    </div>
    <div class="load-container">
      <svg
        id="load"
        x="0px"
        y="0px"
        viewBox="0 0 150 150"
      >
        <circle
          id="loading-inner"
          cx="75"
          cy="75"
          r="60"
        />
      </svg>
    </div>

    <div class="hollow-circles">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {},
  methods: {
    handleToast() {
      this.$toast()
    }
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  .load-container {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    .boxLoading {
      width: 50px;
      height: 50px;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      &:before {
        content: '';
        width: 50px;
        height: 5px;
        background: #000;
        opacity: 0.1;
        position: absolute;
        top: 59px;
        left: 0;
        border-radius: 50%;
        animation: shadow 0.5s linear infinite;
      }
      &:after {
        content: '';
        width: 50px;
        height: 50px;
        background: #00adb5;
        animation: animate 0.5s linear infinite;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 3px;
      }
    }
  }
  #load {
    width: 75px;
    animation: loading 3s linear infinite;
    #loading-inner {
      stroke: {
        dashoffset: 0;
        dasharray: 300;
        width: 10;
        miterlimit: 10;
        linecap: round;
      }
      animation: loading-circle 2s linear infinite;
      stroke: #00adb5;
      fill: transparent;
    }
  }
  .hollow-circles {
    width: 100px;
    height: 320px;
    position: relative;
    background: #00adb5;
    margin-right: 20px;
  }
  .hollow-circles::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 10px;
    top: 0;
    right: -10px;
    background-image: linear-gradient(
        to bottom,
        #00adb5 10px,
        transparent 10px,
        transparent
      ),
      radial-gradient(20px circle at 10px 20px, transparent 10px, #00adb5 10px);
    background-size: 10px 30px;
  }

  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes loading-circle {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -600;
    }
  }

  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes loading-circle {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -600;
    }
  }

  @keyframes animate {
    17% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(9px) rotate(22.5deg);
    }
    50% {
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
    75% {
      transform: translateY(9px) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }

  @keyframes shadow {
    0%,
    100% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1);
    }
  }
}
</style>

