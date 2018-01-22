<template>
    <div class="content">
        <div class="main">
            <div class="main-nr">
                <!--登录盒子S-->
                <div class="dl-box">
                        <form action="">
                            <h3>登录中心</h3>
                            <el-row>
                                <el-col :span="24">
                                        <el-input  placeholder="请输入手机账号"></el-input>  
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="24">
                                        <el-input  placeholder="请输入密码" type="password"></el-input>  
                                </el-col>
                            </el-row>
                            <div class="linep">
                                <el-checkbox v-model="checked">记住我的状态</el-checkbox>
                                <p class="mm">忘记密码？<a href="javascript:;">找回密码</a></p>
                            </div>
                            <div class="login-btn btn-green">立即登录</div>
                            <!--二维码-->
                            <div class="ewm">
                                <div class="pho">
                                    <img src="../assets/img/ewm.jpg" alt="二维码">
                                </div>
                                <p>扫一扫关注鲜致商城微信号</p>
                            </div>
                            <!--二维码-->
                        </form>
                </div>
                <!--登录盒子E--> 
            </div>
            <!--商品入驻S-->
            <shopEnter></shopEnter>
            <!--商品入驻E-->
        </div>
    </div>
</template>
<script>
import shopEnter from "./shopEnter";
export default {
  name: "Logindl",
  data:function(){
      return{
          checked:false
      }
  },
  components:{
      shopEnter
  }
};
</script>
<style lang="less" scoped>
.content {
  background-color: #f0edf1;
  width: 100%;
  display: block;
  z-index: 0;
  .main {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    margin-bottom: -300px;
    .main-nr {
      position: relative;
      background-color: #ffffff;
      margin: 0 auto;
      width: 548px;
      top: -360px;
      .dl-box {
        display: block;
        padding: 20px;
        p {
          font-size: 14px;
          color: #444444;
          text-align: right;
          a {
            color: #f5c27f;
          }
        }
        form {
          width: 340px;
          margin: 30px auto 10px;
          h3 {
            color: #7b7d7d;
            text-align: center;
            font-weight: normal;
          }
          .input {
            width: 100%;
            margin-top: 30px;
            height: 40px;
            line-height: 40px;
            border: 1px solid #ddd;
            display: inline-flex;
            border-radius: 3px;
            input {
              width: 100%;
              border: none;
              height: 100%;
              padding: 0px 10px;
              font-size: 16px;
            }
          }
          .linep {
            display: block;
            line-height: 20px;
            margin-top: 40px;
            width: 100%;
            font-size: 14px;
            color: #444444;
            .mm {
              float: right;
              display: inline;
              a {
                color: #2ec748;
              }
            }
          }
          .login-btn {
            display: inline-block;
            padding: 8px 12px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: normal;
            line-height: 1.428557143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            cursor: pointer;
            border: 1px solid transparent;
            border-radius: 4px;
          }
          .btn-green {
            background-color: #2ec748;
            color: #fff;
            width: 100%;
            margin-top: 20px;
            letter-spacing: 2px;
          }
          .btn-green:hover {
            background-color: #008822;
          }
          .ewm {
            width: 100%;
            overflow: hidden;
            text-align: center;
            .pho {
              width: 150px;
              height: 150px;
              display: inline-block;
              margin: 20px auto;
              img {
                width: 100%;
                height: 100%;
              }
            }
            p {
              font-size: 14px;
              color: #444444;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>


