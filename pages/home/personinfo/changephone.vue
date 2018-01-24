<template>
    <div class="changephone">
        <div class="panel">
            <div class="panel-header">
                <div class="panel-title">
                    <h4>更改手机</h4>
                </div>
            </div>
            <div class="paner-body">
                <!--进度条开始-->
                <el-row class="step-list">
                    <el-col :span="16" :offset="4">
                        <el-steps :active="1">
                            <el-step title="" description="验证原手机号码"></el-step>
                            <el-step title="" description="绑定新手机号码"></el-step>
                            <el-step title="" description="修改成功"></el-step>
                        </el-steps>
                    </el-col>
                </el-row>
                <!--进度条结束-->
                <form class="change-service">
                    <p class="service-text">为保障你的账号安全，请先帮助我们验证你的身份！</p>
                    <el-row :gutter="20">
                        <el-col :span="4">
                            原手机号码
                        </el-col>
                        <el-col :span="5">
                            <!-- <span v-if="!number.name==''" >{{number.name}}</span> -->
                            <span>{{number.name}}</span>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="4" style="line-height:40px;">
                            验证码
                        </el-col> 
                        <el-col :span="7">
                            <el-input v-model="msg" placeholder="请输入内容"></el-input>
                        </el-col> 
                        <el-col :span="2">
                            <el-button type="success">{{msg}}</el-button>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" class="relative">
                        <el-col :span="4">&nbsp</el-col>
                        <el-col :span="20">为保障账号安全，请先对你的身份进行验</el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="4">&nbsp</el-col>
                        <el-col :span="12">
                            <el-button type="success" style="width:96%;" v-if="isshow">下一步</el-button>
                            <el-button type="success" style="width:96%;" @click="centerDialogVisible = true" v-else>下一步</el-button>
                            <el-dialog
                                
                                :visible.sync="centerDialogVisible"
                                width="30%"
                                center>
                                <span class="main"> <i class="el-icon-warning" ></i> 请先获取验证码</span>
                                <p>请先获取手机验证码，再进行下一步操作</p>
                                <span slot="footer" class="dialog-footer">
                                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                                </span>
                            </el-dialog>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="24">
                            当前号码已不用或丢失/无法收到验证码？请联系客服：<b>0951-2535-1222</b>
                        </el-col>
                    </el-row>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data:function(){
      return{
          number:{
              name:'18357875807'
          },
          msg:'获取验证码',
          centerDialogVisible: false,
          isshow:false
      }
  }
}
</script>

<style lang="less">
    .changephone{
        .panel{
            padding: 0 15px;
            min-height:455px;
            .panel-title{
                font-size: 17px;
            }
            .paner-body{
                display: inline-block;
                width: 100%;
                .step-list{
                    margin:40px auto 0;
                    .el-steps{
                        .el-step__main{
                            .el-step__description{
                                margin-top: 7px;
                                font-size: 14px;
                            }
                        }
                    }
                }
                .change-service{
                    width: 660px;
                    margin:80px auto 0;
                    padding-left:50px;
                    .service-text{
                        margin-bottom:20px;
                        color:#333;
                        font-size: 14px;
                    }
                    .el-row{
                        margin-bottom:25px;
                        .el-col{
                            color: #333;
                            font-size: 14px;
                            span{
                                color: #000;
                                font-weight: 700;
                            }
                            .el-button--success{
                                background-color:#fff;
                                color: #2ec748;
                                &:hover{
                                    background-color: #2ec748;
                                 
                                    span{
                                        color: #fff;
                                    }
                                }
                                span{
                                    color: #2ec748;
                                }
                            }

                            .el-input{
                                .el-input.is-active .el-input__inner, .el-input__inner:focus{
                                    border-color: #2ec748;
                                }
                            }
                            .el-dialog__body{
                                span.main{
                                    font-size:20px;
                                    color: #999;
                                    i{color:orange;}
                                }
                                p{
                                    margin-left:25px;
                                }
                            }
                        }

                    }
                    .el-row.relative{
                        position: relative;
                        margin-top: -20px;
                        color: #999;
                        font-size:12px;
                    }
                }
            }
        }
    }
</style>

