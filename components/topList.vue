<template>
   <div>
        <div v-if="logined">
         <yhdl></yhdl>
        </div>
        <div v-else>
        <yhzc></yhzc>
        </div>
   </div>
</template>

<script>
import yhdl from './yhdl.vue'
import yhzc from './yhzc.vue'
export default {
  name:'topList',
  data:function(){
      return{
          logined:true,
          name:"用户名",
      }
  },
  components:{ yhdl,yhzc}
}
</script>

<style lang="less" scoped>

</style>
