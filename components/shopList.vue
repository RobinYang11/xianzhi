<template>
   <div class="shopList hidden-md-and-down xs-lg">
       <ul>
           <li>
               <a href="javascript:;">
                   <img src="../assets/img/list1.jpg" alt="新品专区">
                   <p>
                       <b>新品专区</b>
                       探访源头产地 臻选当令时鲜
                   </p>
               </a>
           </li>
           <li>
               <a href="javascript:;">
                   <img src="../assets/img/list2.jpg" alt="新品专区">
                   <p>
                       <b>母婴专场</b>
                       从妈咪孕味到宝贝食尚 我们用心 让您安心
                   </p>
               </a>
           </li>
           <li>
               <a href="javascript:;">
                   <img src="../assets/img/list3.jpg" alt="新品专区">
                   <p>
                       <b>银行专区</b>
                       银行卡专享 超值购实惠
                   </p>
               </a>
           </li>
           <li>
               <a href="javascript:;">
                   <img src="../assets/img/list4.jpg" alt="新品专区">
                   <p>
                       <b>菜谱专栏</b>
                       大厨私房菜 餐桌新食尚
                   </p>
               </a>
           </li>
       </ul>
   </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
    .shopList{
        width: 1200px;
        margin: 20px auto;
        ul{
            zoom: 1;
            margin-left: -12px;
            margin-top: 10px;
            padding-top: 7px;
            li{
                position: relative;
                overflow: hidden;
                float: left;
                display: inline;
                width: 290px;
                height: 290px;
                margin: 0 0 10px 13px;
                box-shadow: 0 25px 35px rgba(165,165,189,.3);
                 margin-bottom: 40px;
                 transition: all .3s ease-in-out;

                a{
                    color: #444;
                    text-decoration: none;
                    outline: none;
                    img{
                        width: 290px;
                    }
                    p{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        width: 270px;
                        height: 57px;
                        line-height: 25px;
                        margin: 10px;
                        color: #575757;
                        text-align: center;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        background: rgba(255, 255, 255, 0.9);
                        b{
                            display: block;
                            font: bold 22px "Microsoft YaHei";
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                }
            }
            li:hover{
                 transform: scale(1.1)
            }
       }
    }
</style>

