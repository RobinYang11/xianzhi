<template>
    <div class="content">
            <div class="main">
                <div class="main-nr">
                    <!--登录盒子S-->
                    <div class="dl-box">
                      
                            <form action="">
                                <h3>注册中心</h3>
                                <el-row :gutter="20">
                                    <el-col :span="16">
                                           <el-input  placeholder="请输入手机账号"></el-input>  
                                    </el-col>
                                    <el-col :span="8">{{msg[0]}}</el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="16">
                                           <el-input  placeholder="请输入密码"></el-input>  
                                    </el-col>
                                    <el-col :span="8">{{msg[1]}}</el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="16">
                                           <el-input  placeholder="请输入验证码"></el-input>  
                                    </el-col>
                                    <el-col :span="8">{{msg[2]}}</el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="16">
                                           <el-input  placeholder="请再次输入密码"></el-input>  
                                    </el-col>
                                    <el-col :span="8">{{msg[3]}}</el-col>
                                </el-row>
                                <div class="linep">
                                    <input type="checkbox" name="" id="">记住我的状态
                                    <p class="mm">忘记密码？<a href="javascript:;">找回密码</a></p>
                                </div>
                                <div class="login-btn btn-green">立即登录</div>
                                <!--二维码-->
                                <div class="ewm">
                                    <div class="pho">
                                        <img src="../assets/img/ewm.jpg" alt="二维码">
                                    </div>
                                    <p>扫一扫关注鲜致商城微信号</p>
                                </div>
                                <!--二维码-->
                            </form>
                    </div>
                    <!--登录盒子E--> 
                </div>
                <!--商品入驻S-->
                    <div class="caption">
                        <!--title-->
                        <div class="bt-title">
                            入驻商家
                        </div>
                        <!--title-->
                        <div class="contanier">
                            <ul>
                                <li>
                                    <div class="img">
                                        <a href="javascript:;">
                                            <img src="../assets/img/list1.jpg" alt="">
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="img">
                                        <a href="javascript:;">
                                            <img src="../assets/img/list1.jpg" alt="">
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="img">
                                        <a href="javascript:;">
                                            <img src="../assets/img/list1.jpg" alt="">
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="img">
                                        <a href="javascript:;">
                                            <img src="../assets/img/list1.jpg" alt="">
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="img">
                                        <a href="javascript:;">
                                            <img src="../assets/img/list1.jpg" alt="">
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="img">
                                        <a href="javascript:;">
                                            <img src="../assets/img/list1.jpg" alt="">
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--商品入驻E-->
            </div>
    </div>
</template>
<script>
export default {
   name:"Loginzc",
   data:function()
   {
       return{
           msg:[
               '手机格式错误',
                '输入密码',
                '验证码错误',
                '再次输入密码'

           ]
       }
   }
}
</script>
<style lang="less">
          .content{
            background-color: #f0edf1;
            width: 100%;
            display: block;
            z-index: 0;
            .main{
                position: relative;
                width: 1200px;
                margin:0 auto;
                margin-bottom: -300px;
                .main-nr{
                    position: relative;
                    background-color: #ffffff;
                    margin: 0 auto;
                    width: 548px;
                    top: -360px;
                    border-radius: 3px;
                    box-shadow: 0px 3px 31px 2px rgba(7, 17, 27, .06);
                    .dl-box{
                        display: block;
                        padding: 20px;
                        p{
                            font-size: 14px;
                            color: #444444;
                            text-align: right;
                            a{
                                color: #f5c27f;
                            }
                        }
                        form{
                            width: 340px;
                            margin:30px auto 10px;
                            .el-row{
                                margin-top:20px;
                                &:first-child{
                                    margin-top:30px;
                                }
                                    .el-col{
                                        border-radius: 3px;
                                        font-size: 16px;
                                        line-height: 40px;
                                        color: #f5c27f;
                                        .el-input__inner:focus{
                                            border-color: #2ec748;
                                            outline: 0;
                                        } 
                                    }
                                }
                            h3{
                                color: #7b7d7d;
                                text-align: center;
                                font-weight: normal;
                            }
                            .input{
                                width: 100%;
                                margin-top: 30px;
                                height: 40px;
                                line-height: 40px;
                                border: 1px solid #ddd;
                                display:inline-flex;
                                border-radius: 3px;
                                input{
                                    width: 100%;
                                    border: none;
                                    height: 100%;
                                    padding: 0px 10px;
                                    font-size: 16px;
                                }   
                            }
                             .linep{
                                    display: block;
                                    line-height: 20px;
                                    margin-top: 40px;
                                    width: 100%;
                                    font-size: 14px;
                                    color: #444444;
                                    .mm{
                                        float: right;
                                        display: inline;
                                        a{
                                            color: #2ec748;
                                            
                                        }
                                    }
                                }  
                            .login-btn{
                                display:inline-block;
                                padding:8px 12px;
                                margin-bottom: 0;
                                font-size: 14px;
                                font-weight: normal;
                                line-height: 1.428557143;
                                text-align: center;
                                white-space: nowrap;
                                vertical-align: middle;
                                cursor: pointer;
                                border:1px solid transparent;
                                border-radius: 4px;
                            }
                            .btn-green{
                                background-color: #2ec748;
                                color: #fff;
                                width: 100%;
                                margin-top: 20px;
                                letter-spacing: 2px;
                            }
                            .btn-green:hover{
                                background-color: #008822;
                            }
                        .ewm{
                            width: 100%;
                            overflow: hidden;
                            text-align: center;
                            .pho{
                                width: 150px;
                                height: 150px;
                                display: inline-block;
                                margin:20px auto;
                                img{
                                    width: 100%;
                                    height: 100%;
                                    }
                                } 
                            p{
                                font-size: 14px;
                                color: #444444;
                                text-align: center;
                            }
                            }
                       }     
                    }
                }
                .caption{
                    position: relative;
                    background-color: #ffffff;
                    margin: 0 auto;
                    width: 548px;
                    top: -360px;
                    margin-top: 30px;
                    text-align: center;
                    .bt-title{
                            position: absolute;
                            top: -20px;
                            left: 50%;
                            margin-left: -274px;
                            width: 548px;
                            height: 40px;
                            line-height: 40px;
                            font-size: 16px;
                            display: inline-block;
                            z-index: 88;
                            background: url(/_nuxt/img/bg_title.42646e9.png);
                            color: #fff;
                        }
                    .contanier{
                        width: 100%;
                        display:block;
                        padding: 20px 0;
                        border-radius: 3px;
                        box-shadow: 0px 3px 31px 2px rgba(7, 17, 27, .06);
                        ul{
                            width: 100%;
                            display: inline-block;
                            li{
                                display: block;
                                float: left;
                                width: 33.33%;
                                height: 80px;
                                margin:10px 0;
                                .img{
                                    width: 85%;
                                    height: 100%;
                                    border: 1px solid #ddd;
                                    padding: 5px 7px;
                                    margin:0 auto;
                                    img{
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                            }
                           }
                        }
                    }
            }
        }
</style>


