<template>
   <div class="emailbind">
       <div class="panel">
           <div class="panel-header">
               <div class="panel-title">
                   <h4>绑定邮箱</h4>
               </div>
           </div>
           <div class="paner-body">
               <form class="email-service">
                   <el-row :gutter="20">
                       <el-col :span="14">
                           鲜致提示您：为了保障你的账户安全，请及时绑定邮箱！
                       </el-col>
                   </el-row>
                   <el-row :gutter="20">
                       <el-col :span="3">
                           邮箱地址
                       </el-col>
                       <el-col :span="10">
                          <el-input  placeholder="请输入绑定邮箱"></el-input> 
                       </el-col>
                   </el-row>
                    <el-row :gutter="20" style="position:relative;">
                       <el-col :span="3">
                           验证码
                       </el-col>
                       <el-col :span="5">
                          <el-input  placeholder="请输入内容"></el-input> 
                       </el-col>
                       <el-col :span="4">
                          <el-button type="success">获取验证码</el-button>
                       </el-col>
                       <p>为保障账号安全，请先对你的身份进行验</p>
                    </el-row>
                    <el-row :gutter="20" style="margin-top:20px;">
                        <el-col :span="3">&nbsp</el-col>
                        <el-col :span="10">
                            <el-button type="success" style="width:96%;">下一步</el-button>
                        </el-col>
                    </el-row>
               </form>
               <p class="bindemail-tip">
                   <b>没有收到验证邮件？</b>
                   <br>
                   1. 您的邮箱系统可能会误将激活邮件识别为垃圾邮件，请到垃圾邮件目录找找。
                   <br>
                   2. 您可以在60s后重新获取验证码
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
    .emailbind{
        .panel{
            padding: 0 15px 20px;
            min-height:455px;
            .panel-title{
                font-size: 17px;
            }
            .paner-body{
                display:inline-block;
                width: 100%;
                .email-service{
                    width: 660px;
                    margin:80px auto 0;
                    .el-row{
                        p{ position:absolute; bottom:0px; font-size:12px; margin-left:95px;}
                        .el-col{
                            font-size: 14px;
                            color: #333;
                            margin-bottom: 20px;
                            line-height: 40px;
                             .el-button--success{
                                background-color:#fff;
                                color: #2ec748;
                                &:hover{
                                    background-color: #2ec748;
                                    color: #fff;
                                    span{
                                        color: #fff;
                                    }
                                }
                                span{
                                    color: #2ec748;
                                }
                            }
                        }
                    }                  
                }
                .bindemail-tip{
                    width: 660px;
                    margin: 20px auto 0;
                    padding: 0 0 0 50px;
                    color: #999;
                    line-height: 2;
                    font-size: 14px;
                }
            }
        }

    }
</style>
