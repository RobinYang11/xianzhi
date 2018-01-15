<template>
   <div class="foor-vav hidden-md-and-down xs-lg">
       <div class="wrap">
           <ul>
               <li class="s1">
                   <b>全球精选</b>
                   <span>一站式生鲜购物方案</span>
               </li>
               <li class="s2">
                   <b>多仓直发</b>
                   <span>特有次日达配送服务</span>
               </li>
               <li class="s3">
                   <b>源头直采</b>
                   <span>精选正宗品质好食材</span>
               </li>
               <li class="s4">
                   <b>天天底价</b>
                   <span>会员专属优惠购不停</span>
               </li>
           </ul>
       </div>
   </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
    .foor-vav{
        background: #e0e0e0;
        margin-top: 50px;
        padding: 30px 0;
        display: inline-block;
        width: 100%;
        .wrap{
            width: 1200px;
            margin:0 auto;
            ul{
                display: block;
                li{
                    float: left;
                    width: 190px;
                    height: 42px;
                    margin-left: 55px;
                    padding-left: 55px;
                    background: url(../assets/img/serv_icon.png) no-repeat left top;
                    b{
                        display: block;
                        padding-left: 15px;
                        color: #007f4d;
                        font: normal 18px/25px "Microsoft YaHei";
                        border-left: 1px solid #a6a6a6;
                    }
                    span{
                        display: block;
                        padding-left: 15px;
                        border-left: 1px solid #a6a6a6;
                        font-size: 14px;
                    } 
                }
            }
                .s1{
                    background-position: 0 0;
                }
                .s2{
                    background-position: 0 -42px;
                }
                .s3{
                    background-position: 0 -84px;
                }
                .s4{
                     background-position: 0 -126px;
                }
         }
    }
</style>

