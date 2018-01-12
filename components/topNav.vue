<template>
    <div class="top-nav">
       <div class="contanier">
            <div class="hidden-sm-and-up">
                小屏幕
            </div>
            <el-button> hello</el-button>
            <div class="hidden-lg-and-down xs-lg">
                <ul class="fl">
                    <li>欢迎光临鲜致！</li>
                    <li>
                        <div class="city-ps">
                            配送至：
                        </div> 
                        <div class="city-tt">
                            银川
                        </div>   
                    </li>
                </ul>
                <ul class="fr">
                    <li>asf</li>
                    <li>sadf</li>
                    <li>sdf</li>
                </ul>
            </div>
       </div>
    </div>
    
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
    .top-nav{
        position: relative;
        width: auto;
        height:30px;
        background: #f7f8f9;
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
                    .city-ps{
                        float: left;
                        height: 16px;
                        line-height: 16px;
                        margin: 7px 0;
                        cursor: pointer;
                            }
                    .city-tt{
                        float: left;
                            }
                    }
                }
            .fr{
                float: right;
                li{
                    position: relative;
                    float: right;
                    line-height: 30px;
                    padding: 0 10px;
                    text-align: center;
                   }
                }
        }
    }
</style>





