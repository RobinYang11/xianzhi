<template>
    <div class="homeNav">
        <article>
            <!--logo开始-->
            <div class="mylogo">
                <a href="#">
                    <img src="../../assets/img/logo1.png" alt="鲜致logo">
                </a>
            </div>
            <!--logo结束-->
            <div class="maynav">
                <!--导航条数开始-->
                <ul>
                    <li class="active">
                        <a href="#">首页</a>
                        <i class="bt-arrow"></i>
                    </li>
                    <li class="navhover">
                        <a href="javascript:;">
                            账户设置 
                            <i class="el-icon-caret-bottom"></i>
                        </a>
                        <i class="bt-arrow"></i>
                        <div class="zh-nav-sub">
                            <div class="nav-sub-arrow"></div>
                            <dl>
                                <dt>安全设置</dt>
                                <dd>
                                    <p>
                                        <a href="#">修改登录密码</a>
                                    </p>
                                    <p>
                                        <a href="#">手机绑定</a>
                                    </p>
                                    <p>
                                        <a href="#">密保问题设置</a>
                                    </p>
                                    <p>
                                        <a href="#">其他</a>
                                    </p>
                                </dd>
                            </dl>
                            <dl>
                                <dt style="color:#ea746b;">个人资料</dt>
                                <dd>
                                    <p>
                                        <a href="#">收获地址</a>
                                    </p>
                                    <p>
                                        <a href="#">修改头像，昵称</a>
                                    </p>
                                    <p>
                                        <a href="#">消息提醒设置</a>
                                    </p>
                                </dd>
                            </dl>
                            <dl>
                                <dt style="color:#398ee8;">账号绑定</dt>
                                <dd>
                                    <p>
                                        <a href="#">支付宝绑定</a>
                                    </p>
                                    <p>
                                        <a href="#">微信绑定</a>
                                    </p>
                                    <p>
                                        <a href="#">解除绑定</a>
                                    </p>
                                </dd>
                            </dl>
                        </div>
                    </li>
                    <li>
                        <a href="#">消息</a>
                        <i class="bt-arrow"></i>
                    </li>
                </ul>
                <!--导航条数结束-->
                <!--搜索开始-->
                <div class="search">
                    <form action="">
                        <div class="search-bar">
                            <input type="text" class="search-input">
                            <input type="submit" value="搜索" class="search-btn">
                        </div>
                    </form>
                </div>
                <!--搜索结束-->
            </div>
        </article>
    </div>
</template>

<script>
export default {
  name:"homeNav",
  data:function(){
      return{

      }
  },
}
</script>

<style lang="less">
.homeNav{
    height: 36px;
    background-color: #008822;
    padding: 12px 0;
    position: relative;
    z-index: 1;
    border-bottom: 1px solid #ddd;
    article{
        display: block;
        width: 1200px;
        margin:0 auto;
        .mylogo{
            float: left;
            position: relative;
            overflow: hidden;
            width: 16%;
            a{
                width: 140px;
                height: 36px;
                display: inline-block;
                img{width: 60%; height: 122%;}
            }
        }
        .maynav{
            float: right;
            display: block;
            width: 84%;
            ul{
                display: inline-block;
                float: left;
                li{
                    position: relative;
                    float: left;
                    cursor: pointer;
                    z-index: 1;
                    height: 50px;
                    font: 400 14px/36px tahoma;
                    a{
                        text-decoration: none;
                        display: block;
                        text-align: center;
                        padding: 0 25px;
                        color: #fff; 
                    }   
                }
                .active{
                    position: relative;
                    float: left;
                    .bt-arrow{
                        border-style: solid;
                        border-width: 6px;
                        font-size: 0;
                        height: 0;
                        line-height: 0;
                        position: absolute;
                        width: 0;
                        border-color: #008822 #008822 #fff;
                        left: 50%;
                        margin-left: -6px;
                        box-shadow: 0 1px 0 #fff;
                        bottom: 2px;
                    }
                }
                .navhover{
                    position: relative;
                    &:hover{
                        .zh-nav-sub{ display: block; z-index: 6666;}
                    }
                    .zh-nav-sub{
                        cursor: default;
                        position: absolute;
                        z-index: 3;
                        border: 1px solid #e1e1e1;
                        border-top: 0 none;
                        padding: 18px 0;
                        top: 40px;
                        left: -190px;
                        background: #fff;
                        width: 470px;
                        box-shadow: 0 1px 2px #ddd;
                        display:none;
                        .nav-sub-arrow{
                            border-style: solid;
                            border-width: 6px;
                            font-size: 0;
                            height: 0;
                            line-height: 0;
                            position: absolute;
                            width: 0;
                            border-color: transparent transparent #fff;
                            // border-color: #008822 #008822 #fff;
                            left: 50%;
                            top: -12px;
                            margin-left: -6px;
                            box-shadow: 0 1px 0 #fff;
                            bottom: 2px;
                        }
                        dl{
                            width: 33%;
                            float: left;
                            dt{
                                color: #008822;
                                font-size: 16px;
                                padding-left:38px;
                            }
                            dd{
                                display: block;
                                a{
                                    display: block;
                                    text-decoration: none;
                                    height: 32px;
                                    font-size: 13px;
                                    font-weight: 400;
                                    line-height: 32px;
                                    padding: 0;
                                    padding-left: 38px;
                                    color: #000;
                                    text-align: left;
                                    &:hover{ color:#2ec748;}
                                }
                            }
                        }
                    }
                }
            }
            .search{
                display: block;
                float: right;
                .search-bar{
                    position: relative;
                    background: #fff;
                    height: 27px;
                    margin-top: 4px;
                    .search-input{
                        float: left;
                        width: 245px;
                        height: 27px;
                        line-height: 27px;
                        padding: 0 10px;
                        border: 1px solid #008842;
                        background: #fff;
                    }
                    .search-btn{
                        float: left;
                        display: block;
                        width: 81px;
                        height: 28px;
                        line-height: 28px;
                        padding: 0;
                        border: none;
                        cursor: pointer;
                        color: #fff;;
                        font-size: 14px;
                        background: #2ec748;
                        &:hover{ background: #2ec740; color:#fff;}
                    }
                }
            }
        }
    }
}
</style>

