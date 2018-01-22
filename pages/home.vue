<template>
    <div>
       <homeNav></homeNav>
       <pagebody></pagebody>
    </div>
</template>

<script>
import homeNav from '../components/homepage/homeNav.vue'
import pagebody from '../components/homepage/pagebody.vue'
export default {
  name:"home",
  data:function(){
      return{

      }
  },
  components:{homeNav,pagebody}
}
</script>


<style lang="less" scoped>
</style>

