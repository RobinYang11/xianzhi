<template>
    <div>
       <homeNav></homeNav>
        <div class="container">
            <el-row>
                <el-col :span="4"><navLeft></navLeft></el-col>
                <el-col :span="20"> <nuxt-child/></el-col>
            </el-row>
        </div>
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
</style>

