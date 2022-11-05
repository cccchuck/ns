<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const name = ref(route.query.name)
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
      <p>😭 很遗憾您并没有通过我们本次的考核。</p>
      <br />
      <p>💪 不过这并不代表我们对您能力的否定。</p>
      <br />
      <p>🚀 如果您觉得本次发挥失常，我们为您单独准备了一场面试，祝君好运！</p>

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
