<template>
  <div class="bg-green">
           <!--logo及联系方式S-->
            <div class="wrap">
                <ul class="fl">
                    <li>
                        <a href="javascript:;" class="img"></a>
                    </li>  
                    <li style="line-height:75px;">
                        <a href="javascript:;" class="txt">
                            欢迎登录鲜致品牌管理后台
                        </a>
                    </li>
                </ul>
                <ul class="fr">
                    <li>
                        <div class="cont">
                            <div class="photo"></div>
                            <div class="p">
                                <p>
                                    <b class="rx">联系热线</b>
                                    0951-5822-306
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
           <!--logo及联系方式E-->
       </div>  
</template>
<script>
export default {
  name:'topdl',
}
</script>
<style lang="less" scoped>
 .login{
        width: 100%;
        overflow: hidden;
        position: relative;
        .bg-green{
           background-color: #2ec748;
           width: 100%;
           height: 450px; 
           .wrap{
               width: 1200px;
               margin: 0 auto;
               ul{
                   padding: 10px 0 0 0;
                   color: #ffffff;
                   li{
                       float: left;
                       margin-right: 10px;
                       .img{
                            display: block;
                            width: 98px;
                            height: 85px;
                            background: url(/_nuxt/img/logo1.6d3c317.png) no-repeat left top;
                            background-size: 105%
                       }
                       a{
                           font-size: 14px;
                           color: #ffffff;
                           line-height: 60px;
                           text-decoration: none;
                           
                       }
                       .txt:before{
                           content:"|";
                           padding: 0 7px;
                       }
                       .cont{
                           display: inline-block;
                           .photo{
                               display: block;
                               float: left;
                               width: 50px;
                               height: 55px;
                               background:url() no-repeat left top;
                           }
                           .p{
                               float: left;
                               display: block;
                               p{
                                   font-size: 22px;
                                   height: 45px;
                                   padding: 5px;
                                   .rx{
                                   font-size: 14px;
                                   display: block;
                                   }
                               }
                           }
                       }
                   }
               }
           }
        }
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
                    margin-top: 20px;
                    text-align: center;
                    .bt-title{
                        position: absolute;
                        top:-20px;
                        left: 50%;
                        margin-left: -100px;
                        width: 200px;
                        height: 40px;
                        display: inline-block;
                        z-index: 88;
                        background:green;
                        color:#fff;
                        }
                    .contanier{
                        width: 100%;
                        display:block;
                        padding: 20px 0;
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
    }
</style>
