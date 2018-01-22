<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      鲜致测试页面
    </h1>
    <h2 class="info" v-if="name === 'client'">
      挂屁
    </h2>
    <nuxt-link class="button" to="/">
      返回首页
    </nuxt-link>
  </section>
</template>
<script>
  import axios from 'axios'
  export default {
    asyncData ({ req }) {
     
      return {
        name: req ? 'server' : 'client'
      }
    },
    head () {
      return {
        title: `About Page (${this.name}-side)`
      }
    }
  }
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
