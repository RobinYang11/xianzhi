<template>
    <div class="top-nav">
         <!--移动端S-->
       <div class="contanier hidden-sm-and-up">
                <!--顶部搜索S-->
                <div class="screen-top">
                    <div class="screen-search">
                        <a href="javascript:;" class="btn"></a>
                    </div>
                    <a href="javascript:;" class="screen-add">
                        银川 <i class="el-icon-arrow-down"></i>
                    </a>
                </div>
                <!--顶部搜索E-->
                <!--banner开始-->
                <div class="swip-banner">
                    <div class="banner-main">
                        <div class="banner-cn">
                            <img src="../assets/img/list4.jpg" alt="">
                        </div>
                    </div>
                </div>
                <!--banner结束-->
       </div>
        <!--移动端S-->
        <!--PC端S-->
        <div class="contanier">
            <div class="hidden-md-and-down xs-lg">
                <ul class="fl">
                    <li>欢迎光临鲜致！</li>
                    <li>
                        <div class="city-ps">
                            配送至：
                        </div> 
                        <div class="city-tt">
                            <el-col :span="24">
                                <el-dropdown>
                                    <span class="el-dropdown-link sphover">
                                        <i class="el-icon-star-on"></i>
                                        银川
                                        <i class="el-icon-arrow-down el-icon--right left"></i>
                                        <i class="el-icon-arrow-down el-icon-arrow-up right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <div class="el-posi">
                                            <el-cascader
                                            :options="options2"
                                            @active-item-change="handleItemChange"
                                            :props="props"
                                            ></el-cascader>
                                        </div>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </el-col>
                        </div>   
                    </li>
                </ul>
                <ul class="fr">
                    <li>
                        <a href="javascript:;">[登录]</a>
                    </li>
                    <li>
                        <a href="javascript:;">[注册]</a>
                    </li>
                    <li>
                        <div class="myjy">
                            <a href="javascript:;">
                                <el-col :span="24">
                                    <el-dropdown>
                                        <span class="el-dropdown-link">
                                            <i class="el-icon-star-on"></i>
                                            我的交易
                                            <i class="el-icon-arrow-down el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item>我的订单</el-dropdown-item>
                                            <el-dropdown-item>我的优惠券</el-dropdown-item>
                                            <el-dropdown-item>我的收藏</el-dropdown-item>
                                            <el-dropdown-item>我的退查询</el-dropdown-item>
                                            <el-dropdown-item>我的交易收获</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </el-col>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="myjy">
                            <a href="javascript:;">
                                <el-col :span="24">
                                    <el-dropdown>
                                        <span class="el-dropdown-link">
                                            <i class="el-icon-location"></i>
                                            历史记录
                                            <i class="el-icon-arrow-down el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item>历史记录1</el-dropdown-item>
                                            <el-dropdown-item>历史记录2</el-dropdown-item>
                                            <el-dropdown-item>历史记录3</el-dropdown-item>
                                            <el-dropdown-item>历史记录4</el-dropdown-item>
                                            <el-dropdown-item>历史记录5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </el-col>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="myjy">
                            <a href="javascript:;">
                                <i class="el-icon-sold-out"></i>
                                我的储蓄卡
                            </a>
                        </div>
                    </li>
                </ul>  
            </div>
        </div>
        <!--PC端E-->
    </div>
    
</template>

<script>
  export default {
    data() {
      return {
        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }
        ],
        props: {
          value: 'label',
          children: 'cities'
        }
      };
    },

    methods: {
      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      }
    }
  };
</script>

<style lang="less" scoped>
    .el-dropdown-menu .el-posi{
        padding: 10px;
    }
    .top-nav{
        position: relative;
        width: auto;
        z-index: 99;
        .xs-lg{
            width: 1200px;
            margin: 0 auto;
            .fl{
                float: left;
                li{
                    float: left;
                    line-height: 30px;
                    margin-right: 10px;
                    font-size: 12px;
                    color: #444;
                    .city-ps{
                        float: left;
                        height: 16px;
                        line-height: 16px;
                        margin: 7px 0;
                        cursor: pointer;
                        color: #008842;
                            }
                    .city-tt{
                        float: left;
                        color: #008842;
                            .el-dropdown{
                                font-size:12px;
                            }
                            .sphover{
                                color: #008842;
                                padding: 0.2em;
                                i.left{
                                    display: inline-block;
                                }
                                i.right{
                                    display: none;
                                }
                            }
                            .sphover:hover{
                                color:#fff;
                                background-color: #008842;
                                i.left{
                                    display: none;
                                }
                                i.right{
                                    display: inline-block;
                                }
                            } 
                       }
                    }
                }
            .fr{
                float: right;
                li{
                    position: relative;
                    float: left;
                    line-height: 30px;
                    padding: 0 10px;
                    text-align: center;
                    font-size: 12px;
                    a{
                        color: #444;
                        text-decoration: none;
                        outline: none;
                        font-size: 12px;

                    }
                    .myjy{
                        float: left;
                        overflow: hidden;
                        height: 30px;
                        a{
                            display: block;
                            float: left;
                            height: 30px;
                            line-height: 30px;
                            height: 16px;
                            line-height: 16px;
                            padding: 7px 10px 7px 5px;
                            cursor: pointer;
                            z-index: 100;
                            border: solid #f7f9f8;
                            border-width: 0 1px;
                            position: relative;
                            color: #008842;
                            .el-dropdown-link{
                                color: #008842;
                                font-size: 12px;
                            }     
                        }
                    }
                   }
                }
        }
    }
    /*移动小屏幕S*/
    .screen-top{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2.24rem;
        padding: .17rem .32rem .17rem 3.2rem;
        box-sizing: border-box;
        background: linear-gradient(to right, #36db84 , #0eb27b);
        z-index: 100;
        .screen-search{
            position: relative;
            width: 100%;
            height: 1.5rem;
            padding: 0 .4rem 0 .86rem;
            margin-top: .2em;
            border-radius: .45rem;
            box-sizing: border-box;
            background: rgba(255,255,255,.2);
            .btn{
                position: absolute;
                left: .28rem;
                top: 0rem;
                width: 1.5rem;
                height: 1.5rem;
                background: url(//img05.yiguoimg.com/e/web/161222/01856/102912/search.png) no-repeat;
                background-size: 100% 100%;
                            }
            }
            .screen-add{
                position: absolute;
                left: .3em;
                top: .75rem;
                width: 2.8rem;
                height: .6rem;
                line-height: .64rem;
                font-size: .42rem;
                color: #fff;
                text-align: center;
                text-decoration: none;
            }
       }
    .swip-banner{
        width: 100%;
        overflow: hidden;
        position: relative;
        .banner-main{
            width:100%;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            overflow: hidden;
            height: 15em;
            top: 2.24em;
            display: inline-block;
            .banner-cn{
                margin: .8em; 
                width: 100%;
                height: 100%;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: .8em;
                }
            }
        }
    }

   

</style>





