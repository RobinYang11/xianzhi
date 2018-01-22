<template>
   <div>
        <div class="navlist">
         <el-col :span="24">
            <h5>全部功能</h5>
                <el-menu class="el-menu-vertical-demo">
                    <!--个人信息S-->
                    <el-menu-item index="1">
                        <span slot="title">
                            <nuxt-link to="#">个人信息</nuxt-link>
                        </span>
                    </el-menu-item>
                    <!--个人信息E-->
                    <!--订单中心S-->
                    <el-submenu index="2">
                        <template slot="title">
                            <span>订单中心</span>
                        </template>
                        <!-- <el-submenu>
                            <template slot="title">我的订单</template>
                            <el-menu-item>查找，删除</el-menu-item>
                        </el-submenu> -->
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">我的订单</nuxt-link>
                            </template>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">评论</nuxt-link>
                            </template>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">常购商品</nuxt-link>
                            </template>
                        </el-menu-item-group>
                    </el-submenu>
                    <!--订单中心E-->
                    <!--个人消息S-->
                    <el-submenu index="3">
                        <template slot="title">
                            <span>个人消息</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">系统通知</nuxt-link>
                            </template>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">消息设置</nuxt-link>
                            </template>
                        </el-menu-item-group>
                    </el-submenu>
                    <!--个人消息E-->
                    <!--关注中心S-->
                    <el-submenu index="4">
                        <template slot="title">
                            <span>关注中心</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">商品</nuxt-link>
                            </template>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">浏览历史</nuxt-link>
                            </template>
                        </el-menu-item-group>
                    </el-submenu>
                    <!--关注中心E-->
                    <!--客户服务S-->
                    <el-submenu index="5">
                        <template slot="title">
                            <span>客户服务</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">意见与建议</nuxt-link>
                            </template>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">举报中心</nuxt-link>
                            </template>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">发票信息</nuxt-link>
                            </template>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">退换货</nuxt-link>
                            </template>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">电话客服</nuxt-link>
                            </template>
                        </el-menu-item-group>
                    </el-submenu>
                    <!--客户服务E-->
                    <!--安全中心S-->
                    <el-submenu index="6">
                        <template slot="title">
                            <span>安全中心</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">密码修改</nuxt-link>
                            </template>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">手机修改</nuxt-link>
                            </template>
                        </el-menu-item-group>
                    </el-submenu>
                    <!--安全中心E-->
                    <!--收货地址S-->
                    <el-menu-item index="7">
                        <span slot="title">
                            <nuxt-link to="#">收货地址</nuxt-link>
                        </span>
                    </el-menu-item>
                    <!--收货地址E-->
                    <!--账户升级S-->
                    <el-submenu index="8">
                        <template slot="title">
                            <span>账户升级</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">升级成为大客户</nuxt-link>
                            </template>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="#">资质审核</nuxt-link>
                            </template>
                        </el-menu-item-group>
                    </el-submenu>
                    <!--账户升级E-->
                </el-menu>
            </el-col>
   </div>
   </div>
</template>

<script>
export default {
  name:"navLeft",
  data:function(){
      return{

      }
  },
}
</script>

<style lang="less">
.navlist{
    width: 140px;
    .el-col{
        width: 100%;
        display: block;
        h5{
            color: #444;
            margin-bottom:15px;
        }
        .el-menu{
            position: relative;
            .el-submenu__title,.el-menu-item{
                height:29px;
                line-height: 29px;
                padding: 0;
                padding-left:0!important;
                font-size: 13px;
                color:#444;
                &:hover{ color:#2ec748;}
                a{
                    text-decoration: none;
                    color: #444;
                    &:hover{color: #2ec748;}
                }
            }
            .el-menu-item-group__title{
                padding-left:15px!important;
                font-size: 13px;
                a{
                    color: #909399;
                    text-decoration: none;
                    &:hover{color:#2ec748;}
                } 
            }
            .el-menu-item.is-active{
                color:#2ec748;
            }
        }
    }
}
</style>
