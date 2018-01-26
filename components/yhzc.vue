<template>
    <div class="topnav">
       <div class="dlbg container">
           <div class="contmain">
               <!--左边S-->
               <p>
                   <em>Hi&nbsp,&nbsp草原狼2013</em>
                   <a href="javascript:;">积分<span>565</span></a>
                   <a href="javascript:;">消息<span>22</span></a>
                   <a href="javascript:;">退出</a>
                   <nuxt-link to="login">免费注册</nuxt-link>
               </p>
               <!--左边E-->
               <!--右边S-->
                <el-menu class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1">
                        <i class="icon icon-ve-gerenzhongxin"></i>
                        <nuxt-link to="home/" style="text-decoration:none;">个人中心</nuxt-link>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">商家中心</template>
                        <el-menu-item index="2-1">去入驻</el-menu-item>
                        <el-menu-item index="2-1">进入商城</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3">
                        <i class="icon icon-ve-gouwuche" style="margin-right:3px;"></i>
                        <a >购物车<b>0</b>件</a>
                    </el-menu-item>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="icon icon-ve-shoucang"></i>
                            <a>收藏夹</a>
                        </template>
                        <el-menu-item index="4-1">收藏的宝贝</el-menu-item>
                        <el-menu-item index="4-2">收藏的店铺</el-menu-item>
                    </el-submenu>
                </el-menu>
               <!--右边E-->
           </div>
       </div>
   </div>
</template>
<script>
export default {
  name:'yhzc',
}
</script>
<style lang="less">
.topnav{
        background-color: #f2f2f2;
        width: 100%;
        z-index: 9999;
        border-bottom: 1px solid #e5e5e5;
        height: 32px;
        .dlbg{
            margin:0 auto;
            .contmain{
                width: 100%;
                height: 32px;
                position: relative;
                p{
                    display:inline-block;
                    height: 32px;
                    font-size: 12px; 
                    em{ font-style: normal; color: #999; line-height: 32px;   &:hover{color:#2ec748;}}
                    a{ 
                        color: #999; text-decoration: none; padding:0 12px;
                        &:last-child{ padding-left: 10px;}
                        &:hover{color:#2ec748;}
                        span{margin:0 4px; color:#444; &:hover{ color: #2ec748;}}
                        }  
                    }
                  .el-menu--horizontal{
                     height: 32px;
                     position: absolute;
                     right: 0;
                     top:0;
                     background-color: #f2f2f2;
                     border-bottom: none;
                     font-size: 12px;
                     .el-menu-item{
                         float: left;
                         height: 32px;
                         line-height: 32px;
                         border-bottom: none;
                         font-size: 12px;
                         padding:0 10px;
                         i{ color:#008822;}
                         &:hover{color:#2ec748;  b{color:#2ec748}}
                         b{ margin:0 5px; font-weight:bold; color:#000;}
                     }
                     .el-submenu{
                         height: 32px;
                         position: relative;
                         .el-submenu__title{
                             height: 32px;
                             line-height: 32px;
                             i{ color:#008822;}
                             &:hover{color:#2ec748;text-decoration:underline;}
                            }
                        .el-menu{
                            top:32px;
                            .el-menu-item{
                                min-width:100%; 
                                &:hover{color:#2ec748; }
                                
                            }
                        }
                     }
                 } 
            }
        }
    }
</style>

