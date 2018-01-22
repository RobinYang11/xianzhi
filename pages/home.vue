<template>
    <div class="home">
        <homeNav></homeNav>
        <div class="container">
            <el-row>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
            </el-row>
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
    .home{
        .container{
            .el-row{
                .el-breadcrumb{
                    font-size: 12px;
                    margin: 20px 0;
                }
            }
        }
    }
</style>

