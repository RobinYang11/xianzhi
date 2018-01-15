<template>
    <div class="footer hidden-md-and-down xs-lg">
        <div class="wrap">
            <dl class="col1">
                <dt>新手指南</dt>
                <dd>
                    <p>
                        <a href="javascript:;">账户注册</a>  
                    </p>
                    <p>
                        <a href="javascript:;">购物流程</a>
                    </p>
                    <p>
                        <a href="javascript:;">订购方式</a>
                    </p>
                    <p>
                        <a href="javascript:;">有弊说明</a>
                    </p>
                    <p>
                        <a href="javascript:;">会员等级</a>
                    </p>
                </dd>
            </dl>
            <dl class="col2">
                <dt>付款方式</dt>
                <dd>
                    <p>
                        <a href="javascript:;">支付方式</a>
                        /
                        <a href="javascript:;">发票说明</a>
                    </p>
                    <p>
                        <a href="javascript:;">充值说明</a>
                        /
                        <a href="javascript:;">储值卡说明</a>
                    </p>
                    <p>
                        <a href="javascript:;">优惠代码</a>
                        /
                        <a href="javascript:;">礼品卡说明</a>
                    </p>
                    <p>
                       <a href="javascript:;">卡券购买章程</a>
                    </p>
                </dd>
            </dl>
            <dl class="col3">
                <dt>配送方式</dt>
                <dd>
                  
                    <p>
                        <a href="javascript:;">配送运费</a>
                    </p>
                    <p>
                        <a href="javascript:;">配送范围</a>
                    </p>
                    <p>
                        <a href="javascript:;">配送时间</a>
                    </p>
                </dd>
            </dl>
            <dl class="col4">
                <dt>售后服务</dt>
                <dd>
                    <p>
                        <a href="javascript:;">常见问题</a>
                    </p>
                    <p>
                        <a href="javascript:;">极速退款</a>
                    </p>
                    <p>
                       <a href="javascript:;">投诉与建议</a>
                    </p>
                 
                </dd>
            </dl>
            <dl class="col5">
                <dt>关于我们</dt>
                <dd>
                    <p>
                       <a href="javascript:;">公司介绍</a>
                    </p>
                    <p>
                        <a href="javascript:;">业务合作</a>
                    </p>
                    <p>
                        <a href="javascript:;">诚信举报</a>
                    </p>
                    <p>
                       <a href="javascript:;">人才招聘</a>
                    </p>
                    <p>
                        <a href="javascript:;">友情链接</a>
                    </p>
                </dd>
            </dl>
            <div class="service">
                <span>客服热线 400-000-7788 企业采购或团购，请转2号键咨询</span>
                <span>周一至周日 9:00-21:00</span>
            </div> 
            <div class="cop">
                <p>所有图片均受著作权保护，未经许可任何单位与个人不得使用、复制、转载、摘编，违者必究法律责任。</p>
                <p><a href="javascript:;">沪ICP备09008015号 Copyright © 2005-2018 上海易果电子商务有限公司版权所有 </a></p>
                <p class="authe">
                    <a href="javascript:;">
                        <img src="../assets/img/fot1.png" alt="">
                    </a>
                    <a href="javascript:;">
                        <img src="../assets/img/fot2.png" alt="" width="40" height="50">
                    </a>
                    <a href="javascript:;">
                        <img src="../assets/img/fot3.gif" alt="">
                    </a>
                    <a href="javascript:;">
                        <img src="../assets/img/fot4.png" alt="">
                        <span>沪公网安备 31010502000002号</span>
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
    .footer{
        zoom: 1;
        clear: both;
        position: relative;
        padding-bottom: 20px;
        border-top: 0px solid #e0e0e0;
        .wrap{
            width: 1200px;
            margin: 50px auto 0;
            dl{
                width: 190px;
                float: left;
                margin-left: 50px;
                display: inline;
                dt{
                    height: 23px;
                    line-height: 23px;
                    background: url(../assets/img/footer_icon.png) no-repeat;
                    font-size: 14px;
                    text-indent: 40px;
                    }
                 
                dd{
                    border-left: 1px dashed #A8A8A8;
                    padding-left: 20px;
                    height: 110px;
                    min-height: 110px;
                    margin: 15px 0 0 13px;
                    a{
                        color: #575556;
                        line-height: 22px;
                        font-size: 12px;
                     }
                     a:hover{
                         color: #008842;
                         text-decoration: underline;
                     }
                    }
                }
               .col1 dt{
                       background-position: 0 0;
               }
               .col2 dt{
                       background-position: 0 -23px;
               }
               .col3 dt{
                       background-position: 0 -46px;
               }
               .col4 dt{
                       background-position: 0 -69px;
               }
               .col5 dt{
                       background-position: 0 -92px;
               }
            .service{
                clear: both;
                text-align: center;
                padding: 60px 0 20px;
                color: #008842;
                font-size: 14px;
                span{
                        display: inline-block;
                         padding: 0 10px;
                         }
                 }
            .cop{
                clear: both;
                color: #717171;
                text-align: center;
                line-height: 22px;
                font-size: 13px;
                 a{
                    color: #717171;
                    font-size: 12px;
                 }
                .authe a{
                        display: inline-block;
                        position: relative;
                        margin: 0 10px;
                        zoom: 1;
                        vertical-align: middle;
                     }
            }
          } 

      }
</style>

