<template>
    <div>
       <homeNav></homeNav>
       <navLeft class="homebody"></navLeft>
       <nuxt-child/>
    </div>
</template>

<script>
import homeNav from '../components/homepage/homeNav.vue'
import navLeft from '../components/homepage/navLeft.vue'
export default {
  name:"home",
  data:function(){
      return{

      }
  },
  components:{homeNav,navLeft}
}
</script>


<style lang="less" scoped>
.homebody{
    width: 1200px;
    margin:20px auto;
    position: relative;
}
</style>

