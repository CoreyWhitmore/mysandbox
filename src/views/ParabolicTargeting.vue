<template>
  <div id="parabolic-firing-frame" class="parabolictargeting flex-grow-1 bg-light position-relative" @click="fire">
    <div id="target" class="dot position-fixed"></div>
    <div id="firing-point" class="dot position-fixed"></div>
  </div>
</template>

<script>
  export default {
    name: 'ParabolicTargeting',
    data() {
      return {
        set: false,
        fired: false,
      }
    },
    methods: {
      fire() {
        let frame = document.getElementById("parabolic-firing-frame").getBoundingClientRect()
        let height = document.getElementById("parabolic-firing-frame").clientHeight
        let width = document.getElementById("parabolic-firing-frame").clientWidth

        //Places target at position of click
        let targetYPos = window.event.clientY
        let targetXPos = window.event.clientX
        let targetXPosPercent = (targetXPos / (frame.right - frame.left) * 100) - 1
        let targetYPosPercent = (targetYPos / (frame.bottom) * 100) - 1
        document.getElementById("target").style.left = targetXPosPercent + "%"
        document.getElementById("target").style.top = targetYPosPercent + "%"

        //fires projectile at target in a ballistic arc

        //Sets projectile starting point to start
        let projectileCurrentX = parseFloat(document.getElementById("firing-point").style.left.slice(0, -1)) * width / 100
        let projectileCurrentY = parseFloat(document.getElementById("firing-point").style.top.slice(0, -1)) * height / 100

        //variables for firing math
        let xToTarget = targetXPos - projectileCurrentX
        let yToTarget = targetYPos - projectileCurrentY
        let gravity = 3
        let xSpeed = 20
        let ySpeed = 0



        while (projectileX >= targetXPos - 1 && projectileX < targetXPos + 5 && projectileY >= targetYPos - 1 && projectileY < targetYPos + 5) {
          projectileCurrentX += xSpeed
          projectileCurrentY += ySpeed
          ySpeed += gravity
          document.getElementById("projectile").style.left = projectileCurrentX + "px"
          document.getElementById("projectile").style.bottom = projectileCurrentY + "px"
        }
      }
    },
  }
</script>

<style>
  #firing-point {
    left: 0%;
    top: 97%;
    background-color: #bbb;
  }

  #target {
    left: -10%;
    top: -10%;
    background-color: rgb(255, 0, 0);
  }

  #projectile {
    left: 0%;
    top: 97%;
    background-color: rgb(68, 0, 255);
  }

  .dot {
    height: 25px;
    width: 25px;
    border-radius: 50%;
  }
</style>