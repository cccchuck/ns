<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')

const offerList = [
  '焦立冬',
  '文莹洁',
  '姜浩文',
  '马一恒',
  '金亿聚',
  '刘艺博',
  '孙睿志',
  '阮孟田',
  '张广哲',
  '孙超然',
  '周红杰',
  '李嘉谣',
  '荣浩屹',
  '宣萱',
  '韩昂轩',
  '王飞燕',
  '丁梦全',
  '曹淇俊',
  '吴欲',
  '周红杰',
  '时文霞',
  '乔涵',
  '徐祉涵',
  '王鸿森',
  '王燕',
  '张佳惠',
  '李净霞',
  '高果果',
  '曹钰婕',
  '张国壮',
  '秦箫',
  '甘缇',
  '王乐媛',
  '刘家辉',
  '赵越',
  '郭明灿',
  '余盼',
  '裴浩凯',
  '李采蓉',
  '李文娟',
  '林晓敏',
]

const handleSearch = () => {
  if (offerList.indexOf(username.value) > -1) {
    router.push({ path: '/offer', query: { name: username.value } })
  } else {
    router.push({ path: '/failure', query: { name: username.value } })
  }
}
</script>

<template>
  <main class="fade-in">
    <div class="center">
      <h2>Network Security Studio</h2>
      <h2>录取名单查询</h2>
    </div>

    <div class="content">
      <div class="form">
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="请在此输入你的名字"
        />
      </div>

      <div class="btn">
        <button @click="handleSearch"><span>查询</span></button>
      </div>
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

.center h2 + h2 {
  margin-top: 1em;
}

.content {
  margin-top: 2em;
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
