<template>
  <div class="nav-heade hidden-md-and-down xs-lg">
      <div class="warp">
          <div class="catalogs">
              <el-radio-group v-model="isCollapse">
                  <el-radio-button :label="false"  class="success-btn">全部商品分类<i class="el-icon-arrow-down"></i></el-radio-button>
                  <!--<el-radio-button :label="true">收起</el-radio-button>-->
              </el-radio-group>
              <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span slot="title">禽类制品</span>
                    </template>
                    <el-menu-item-group>
                      <span slot="title">禽类蛋品</span>
                      <el-menu-item index="1-1">鸡蛋</el-menu-item>
                      <el-menu-item index="1-2">鸭蛋</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="肉制品">
                      <el-menu-item index="1-3">禽类肉质</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <span slot="title">鸵鸟肉</span>
                      <el-menu-item index="1-4-1">野鸡肉</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span slot="title">粮油杂货</span>
                    </template>
                    <el-menu-item-group>
                      <span slot="title">豆类制品</span>
                      <el-menu-item index="1-1">大豆</el-menu-item>
                      <el-menu-item index="1-2">豌豆</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">方便速食</span>
                  </el-menu-item>
                </el-menu>

          </div>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="less" >
   
    .nav-heade{
      height: 38px;
      z-index: 88;
      position: relative;
      .warp{
        width: 1200px;
        height: 38px;
        margin:0 auto;
        .catalogs{
          float: left;
          height: 100%;
          line-height: 38px;
          position: relative;
          color: #fff;
          margin-top: -1px;
           .success-btn .el-radio-button__inner{
              text-align: center;
              background-color: #008822 !important;
              color: #ffffff;
              width: 215px;
              border: 1px solid #008822;
            }
            .el-radio-group{
              width: 215px;
              .el-radio-button{
                width: 215px;
              }
            }
          }
        }
        .el-menu-vertical-demo:not(.el-menu--collapse) {
          width: 215px;
          min-height: 400px;
         
        }      
        .el-menu{
          border-right: 0px;
          width: 215px;
          background-color: #fff;
          background-color: rgba(255, 255, 255, 0.5)
        }
  }
</style>


