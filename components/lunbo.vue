<template>
    <div class="banner hidden-md-and-down xs-lg">
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="(item,index) in banner" :key="index">
               <div class="img-item animated zoomIn">
                    <!--<img :src="item.img[0]" alt="">-->
                    <img src="../assets/img/banner04.jpg" alt="">
                </div>
                <div class="img-item animated fadeIn ">
                    <!--<img :src="item.img[1]" alt="">-->
                    <img src="../assets/img/banner02.jpg" alt="">
                </div>
                <div class="img-item animated zoomIn" >
                    <!--<img :src="item.img[2]" alt="">-->
                    <img src="../assets/img/banner03.jpg" alt="">
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
  data:function(){
    return {
        banner:[
                {
                    img:[
                        "assets/img/banner01.png",
                        "assets/img/banner02.png",
                        "assets/img/banner03.png",  
                    ]
                }, {
                    img:[
                        "assets/img/banner01.png",
                        "assets/img/banner02.png",
                        "assets/img/banner03.png", 
                    ]
                },
                    {
                    img:[
                        "assets/img/banner01.png",
                        "assets/img/banner02.png",
                        "assets/img/banner03.png", 
                    ]
                },
                    {
                    img:[
                        "assets/img/banner01.png",
                        "assets/img/banner02.png",
                        "assets/img/banner03.png", 
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
   .el-carousel, .el-carousel__item{
       height: 500px;
   }
    .item-title{
        background-color:#c8cad3;
         div{
             padding:30px;
         }
         p{
             color:#565656;
         }      
    }
    .banner{
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 500px;
        top: -38px;
    }
</style>
