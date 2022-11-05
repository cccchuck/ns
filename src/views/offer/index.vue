<script setup>
import { onMounted, ref } from 'vue'
import confetti from 'canvas-confetti'
import { useRoute } from 'vue-router'

const route = useRoute()

const name = ref(route.query.name)

const fire = () => {
  var duration = 4 * 1000
  var animationEnd = Date.now() + duration
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    var particleCount = 200 * (timeLeft / duration)
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    )
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    )
  }, 250)
}

onMounted(() => {
  fire()
})
</script>

<template>
  <main class="fade-in">
    <div class="center">
      <h2>Network Security Studio</h2>
    </div>

    <div class="content">
      <h3>
        亲爱的
        <span class="username">{{ name }}</span>
        同学:
      </h3>

      <br />
      <p>🎉 恭喜你通过我们的考核，欢迎加入网络安全工作室。</p>
      <br />
      <p>🚀 希望日后你能不骄不躁，踏踏实实一步一步向前走。</p>
      <br />
      <p>🏁 这是一个阶段的终点，同时又是一个新阶段的起点。</p>

      <br />
      <br />
      <p class="writer">网络安全工作室</p>
    </div>
  </main>
</template>

<style scoped>
.center {
  margin-top: 10vh;
  padding: 2em 0;
  text-align: center;
}

.center h2 {
  color: var(--color-headline);
}

.content {
  margin-top: 2em;
  padding: 0 2em;
}

.content .username {
  color: var(--color-button);
}

.content p {
  text-indent: 2em;
  font-weight: 500;
}

.content .writer {
  text-align: right;
  font-weight: bold;
  color: var(--color-headline);
}

.form {
  margin: 0 auto;
  width: 80vw;
}

#username {
  width: 100%;
  padding: 1em 1.5em;

  color: #333;
  font-weight: bold;
  font-size: 1rem;

  border-radius: 2em;
  border: none;
  outline: none;
}

.btn {
  margin-top: 2em;
  text-align: center;
}

.btn button {
  padding: 1em 5em;
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-btn-text);
  background-color: var(--color-button);
  border: none;
  border-radius: 0.5em;
  outline: none;
}
</style>
