<template>
    <div>
        <div class="securitycenter">
            <h3>安全中心</h3>
            <div class="securmain">
                <div class="security-level">
                    <span>安全等级:</span>
                    <el-progress :percentage="50" status="exception"></el-progress>
                    <span class="security-text">中等</span>
                    <span class="security-level-tip">建议你设置全部安全设置，以保障个人信息及账户安全！</span> 
                </div>
                <!--登录密码开始-->
                <div class="security-type">
                    <span class="child security-type-icon">
                        <i class="el-icon-warning security-type-icon-warn"></i>
                    </span>
                    <span class="child security-name">登录密码</span>
                    <div class="child security-type-tip">
                        <p class="no-bind">您还没有设置密码</p>
                        <p class="security-type-tip-more ng-binding">设置登陆密码，使用鲜致更方便、安全。</p>
                    </div>
                    <span class="child security-type-linkcon">
                         <nuxt-link to="savepassword" class="btn-stress">设置密码</nuxt-link>
                    </span>
                </div>
                <!--登录密码结束-->
                <!--手机验证开始-->
                <div class="security-type">
                    <span class="child security-type-icon">
                        <i class="el-icon-success security-type-icon-success"></i>
                    </span>
                    <span class="child security-name" style="color:#000;">手机验证</span>
                    <div class="child security-type-tip">
                        <p class="no-bind">已绑定手机号183xxxx5807</p>
                    </div>
                    <span class="child security-type-linkcon">
                         <nuxt-link to="changephone" class="security-type-link">更改手机</nuxt-link>
                    </span>
                </div>
                <!--手机验证结束-->
                <!--邮箱激活开始-->
                <div class="security-type">
                    <span class="child security-type-icon">
                        <i class="el-icon-warning security-type-icon-warn"></i>
                    </span>
                    <span class="child security-name">邮箱激活</span>
                    <div class="child security-type-tip">
                        <p class="no-bind">您还没有绑定邮箱</p>
                        <p class="security-type-tip-more ng-binding">验证用户可快速找回密码，接受账户提醒邮件。</p>
                    </div>
                    <span class="child security-type-linkcon"> 
                        <nuxt-link to="emailbind" class="btn-stress">立即绑定</nuxt-link>
                    </span>
                </div>
                <!--邮箱激活结束-->
            </div>
        </div> 
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
    .securitycenter{
        background: white;
        padding:10px 15px;
        margin-bottom: 20px;
        h3{
            border-bottom:solid 2px #f4f4f4;
            padding: 0 10px 10px 15px;
            font-size: 17px;
            // font-weight: 700;
        }
        .securmain{
            width: 100%;
            display: inline-block;
            .security-level{
                margin-top: 12px;
                padding:15px;
                background-color: #f8f8f6;
                span{
                    font-size: 14px;
                }
                .el-progress{
                         width: 170px;
                        display: inline-block;
                        margin-left: 5px;
                    .el-progress-bar{
                        padding-right: 0;
                        .el-progress-bar__outer{
                            height: 12px!important;
                            .el-progress-bar__inner{
                                background: #409eff;
                            }
                        }
                    }
                }
                span.security-text{
                    color: rgb(148, 200, 82);
                    margin-left: 15px;
                }
                span.security-level-tip {
                    margin-left: 35px;
                    color: #ff9c00;
                }
            }
            .security-type{
                display: table;
                width: 100%;
                border-top: 1px solid #eee;
                height: 119px;
                text-align: center;
                .child{
                    display: table-cell;
                    vertical-align: middle;
                }
                .security-type-icon{
                    width: 78px;
                    font-size: 25px;
                    .security-type-icon-warn{
                        color: #ff9c00;
                    }
                    .security-type-icon-success{
                        color: #94c852;
                    }
                }
                .security-name{
                    font-size: 16px;
                    width: 70px;
                    vertical-align: middle;
                    color: #999;
                    text-align: center;
                }
                .security-type-tip{
                    padding-left: 60px;
                    text-align: left;
                    .security-type-tip-more{
                        margin-top: 8px;
                        font-size: 12px;
                        color: #999;
                    }
                    .no-bind{font-size:14px;}
                }
                .security-type-linkcon{
                    width: 176px;
                    a.btn-stress{
                        background-color: #f74342;
                        color: #fff;
                        display: inline-block;
                        padding: 8px 17px;
                        line-height: 1;
                        border: none;
                        border-radius: 2px;
                        outline: 0;
                        cursor: pointer;
                        font-size: 14px;
                        text-align: center;
                        text-decoration: none;
                        &:hover{background-color:#e62625;}
                    }
                    a.security-type-link{
                        width: 90px;
                        color: #94c852;
                        font-size: 14px;
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>
