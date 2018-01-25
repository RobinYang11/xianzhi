<template>
   <div>
        
        <div class="panel">
            <div class="panel-header">
                <div class="panel-title">
                    <h5 class="title">全部功能</h5>
                </div>
            </div>
            <div class="panel-body  navleft">
                <el-menu class="el-menu-vertical-demo" :default-openeds="openeds">
                    <!--个人中心S-->
                    <el-submenu index="1">
                        <template slot="title">
                            <span>个人中心</span>
                        </template>       
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="basicinfo">基本信息</nuxt-link>
                            </template>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="addressmade">地址管理</nuxt-link>
                            </template>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="securitycenter">安全中心</nuxt-link>
                            </template>
                        </el-menu-item-group>
                    </el-submenu>
                    <!--个人中心E-->
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
                                <nuxt-link to="OD_myorder">我的订单</nuxt-link>
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
                                <nuxt-link to="MS_notices">系统通知</nuxt-link>
                            </template>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">
                                <nuxt-link to="tMS_settings">消息设置</nuxt-link>
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
                    <!--账户升级S-->
                    <el-submenu index="6">
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
            </div>
        </div>
   </div>
</template>

<script>
export default {
  name:"navLeft",
  data:function(){
      return{
        openeds: ['2'],
        uniqueOpened: false
      }
  },
}
</script>

<style lang="less">
    .panel-body.navleft{
        padding-top: 0px;
        .el-menu{
            border-right: 0;
            position: relative;
            .el-submenu__title,.el-menu-item{
                height:36px;
                line-height: 36px;
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
    .panel-title{
        h5.title{
            font-size: 20px;
            padding-bottom: 0;
            color: #333;
        }
    }
</style>
