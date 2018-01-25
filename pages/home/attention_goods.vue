<template>
    <div>
        <div class="panel">
            <div class="panel-body">
                <attengooodsNav></attengooodsNav>
            </div> 
        </div>

        <div class="panel">
            <div class="panel-body">
                 <div class="attengooodsContent">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="全部商品" name="first">
                                <div v-for="i in 30">
                                    <allShop ></allShop>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="降价(0)" name="second">
                                <allShop></allShop>
                            </el-tab-pane>
                            <el-tab-pane label="满减(0)" name="third">
                                <allShop></allShop>
                                <allShop></allShop>
                            </el-tab-pane>
                            <el-tab-pane label="赠品" name="fourth">
                                <allShop></allShop>
                            </el-tab-pane>
                            <el-tab-pane label="优惠券" name="five">
                                <allShop></allShop>
                            </el-tab-pane>
                        </el-tabs>
                </div> 
            </div> 
        </div>
    </div>
</template>

<script>
import attengooodsNav from "../../components/homepage/attengooodsNav.vue"
import allShop from "../../components/homepage/allShop.vue"
export default {
    data:function(){
        return{
            activeName: "first",
        }
    },
     methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
    components:{
        attengooodsNav,
        allShop
    }
}
</script>
<style lang="less" >
.attengooodsContent {
  .el-tabs {
    .el-tabs__nav-scroll {
      .el-tabs__nav {
        .el-tabs__active-bar {
          background-color: #2ec748;
        }
        .el-tabs__item.is-active {
          background-color: #2ec748;
          color: #fff;
          &:hover {
            color: #fff;
          }
        }
        .el-tabs__item {
          height: 32px;
          line-height: 32px;
          padding: 0 15px;
          &:hover {
            color: #2ec748;
          }
        }
      }
    }
  }
}
</style>



