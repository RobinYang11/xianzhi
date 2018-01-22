<template>
  <div>
    <topList/>
    <nuxt/>
    <!-- <my-footer/> -->
    <MyFooter/>
  </div>
</template>

<script>
import topList from '../components/topList.vue'
import MyFooter from '../components/footBoot.vue'
export default {
  components: {
    topList,MyFooter
  }
}
</script>

<style>
</style>
