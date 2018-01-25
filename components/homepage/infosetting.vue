<template>
    <div class="infosetting">
        <p>最近接受的消息</p>
        <el-row>
            <el-col :span="6">
                <div class="list-img">
                    <img src="../../assets/img/logo.png" alt="">
                    <span>鲜致物流</span>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="content">
                    当订单发货、派件、签收时候的消息通知
                </div>
            </el-col>
            <el-col :span="4">
                <div class="content">
                    <el-switch
                        style="display: block"
                        v-model="value3"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        active-text="开"
                        inactive-text="关">
                    </el-switch> 
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <div class="list-img">
                    <img src="../../assets/img/logo.png" alt="">
                    <span>鲜致物流</span>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="content">
                    你的鲜致商户等级变化时，会告诉你随着等级变化所拥有的特权
                </div>
            </el-col>
            <el-col :span="4">
                <div class="content">
                    <el-switch
                        style="display: block"
                        v-model="value4"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        active-text="开"
                        inactive-text="关">
                    </el-switch> 
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
      return {
        value3: false,
        value4: true
      }
    }
}
</script>

<style lang="less">
    .infosetting{
        margin-top: -10px;
        padding:0 15px 20px;
        min-height:270px;
        p{
            font-size: 16px;
            color: #000;
            margin-top:20px;
            border-left: 2px solid #f00;
            padding-left:10px;
            line-height: 16px;
        }
        .el-row{
            margin-top: 20px;
            .el-col{
                .list-img{
                    height: 40px;
                    line-height: 40px;
                    position: relative;
                    overflow: hidden;
                    img{ width: 40px; height: 40px; display: inline-block; float: left;}
                    span{ width: 110px; height: 40px; color: #555; font-weight:700; float: left; margin-left: 15px; font-size: 16px; }
                }
                .content{
                    color: #999;
                    font-size: 14px;
                    line-height: 40px;    
                }
                .el-switch{
                    margin-top: 10px;
                    .el-switch__label.is-active{
                        color:#2ec748;
                    }
                }
            }
        }
    }
</style>
