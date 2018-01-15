<template>
    <div class="cap-shop hidden-md-and-down xs-lg">
        <!--商品标题s-->
        <div class="floor-title">
            <h2>
                <a href="javascript:;"><i>S1</i>粮油杂货</a>
            </h2>
            <span class="keywords">
                <a href="javascript:;">有机面食</a>
                <a href="javascript:;">干货</a>
                <a href="javascript:;">果干零食</a>
            </span>
        </div>
        <!--商品标题E-->
        <!--商品内容S-->
        <div class="floor-nr">
            <div class="floor-side">
                <a href="javascript:;">
                    <img src="../assets/img/shop1.jpg" alt="">
                </a>
            </div>
            <div class="floor-main">
                <div class="col1">
                    <a href="javascript">
                        <img src="../assets/img/shop2.jpg" alt="">
                    </a>
                </div>
                <div class="col2">
                    <ul>
                        <li class="wide">
                            <a href="javascript:;">
                                <img src="../assets/img/shop3.jpg" alt="">
                            </a>
                        </li>
                        <li class="wide">
                            <a href="javascript:;">
                                <img src="../assets/img/shop4.jpg" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col3">
                    <a href="javascript:;">
                        <img src="../assets/img/shop5.jpg" alt="">
                    </a>
                </div>
                <div class="logo-list">
                    <a href="javascript:;">
                        <img src="../assets/img/list5.jpg" alt="">
                    </a>
                    <a href="javascript:;">
                        <img src="../assets/img/list6.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>
        <!--商品内容E-->
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
    .cap-shop{
        width: 1200px;
        margin: 0 auto;
       .floor-title{
               position: relative;
                height: 32px;
                line-height: 32px;
                margin-bottom: 5px;
                display: inline-block;
                width: 100%;
                h2{
                    float: left;
                    height: 32px;
                    font: bold 18px "Microsoft YaHei";
                    a{
                        color:#b84f00;
                        text-decoration: none;
                     i{
                            display: inline-block;
                            width: 31px;
                            height: 18px;
                            margin-right: 10px;
                            padding: 10px 7px 4px 7px;
                            color: #fff;
                            font: bold 14px "Microsoft YaHei";
                            vertical-align: text-bottom;
                            background: url(../assets/img/floor_icon.png) no-repeat left top;
                     }
                    }
                }
                .keywords{
                    float: right;
                    line-height: 32px;
                    a{
                        color: #444;
                        text-decoration: none;
                        outline: none;
                        font-size: 14px;   
                    }
                    a:hover{
                        text-decoration: underline;
                    }
                    a:after{
                        content: "|";
                        padding: 0 7px;
                        
                    }
                    a:last-child:after{
                        content:"";
                        padding: 0;
                    }
                }
             }
        .floor-nr{
                display: block;
            .floor-side{
                float: left;
                width: 275px;
                height: 462px;
                a{
                    display: block;
                    img{
                        border: none;
                        width: 275px;
                        height: 463px;
                    }
                }
            }
            .floor-main{
                position: relative;
                width: 923px;
                height: 461px;
                border: 1px solid #d5d5d5;
                float: left;
                .col1{
                    width: 234px;
                    height: 383px;
                    border-right: 1px solid #d5d5d5;
                    border-bottom: 1px solid #d5d5d5;
                    float: left;
                    overflow: hidden;
                }
                .col2{
                    width: 414px;
                    float: left;
                    overflow: hidden;
                    border-right:1px solid #d5d5d5;
                    .wide{
                        width: 414px;
                    }
                    li{
                        float: left;
                        overflow: hidden;
                        height: 191px;
                        border-right: 1px solid #d5d5d5;
                        border-bottom: 1px solid #d5d5d5;
                        background: #fff;
                        img{
                            width: 414px;
                            height: 191px;
                        }
                    }
                }
                .col3{
                        width: 246px;
                        height: 461px;
                        float: right;
                        overflow: hidden;
                        img{   
                            height: 461px;
                        }
                    }
                    .logo-list{
                        overflow: hidden;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 627px;
                        height: 55px;
                        padding: 11px;
                        _padding: 10px 11px;
                        border-right: 1px solid #d5d5d5;
                        background: #fff;
                        a{
                            float: left;
                            margin: 0 14px;
                        }
                    }
          
                    a{
                        display: block;
                        transition: transform .2s linear;
                    }
                    a:hover{
                        -webkit-transform:translateX(10px);
                        -moz-transform:translateX(10px);
                    }
          
          }     
      }
      }
    
</style>

