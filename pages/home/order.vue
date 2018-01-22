<template>
   <div class="right-main">
      <!--中间内容开始-->
       <div class="user-info">
           <div class="m-info">
              <div class="info-bar">
                  <div class="baseinfo">
                      <a href="#" class="a">
                        <img src="../../assets/img/logo.png" alt="">
                      </a>
                      <div class="s-name">
                          <a href="javascript:;">
                            (zgzygf)
                          </a>
                      </div>
                  </div>

              </div>
              <ul class="ul-info">
                  <li>
                    <a href="#">我的收货地址</a>
                  </li>
                  <li>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                          我的优惠信息<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>红包:-</el-dropdown-item>
                          <el-dropdown-item>鲜致优惠券</el-dropdown-item>
                          <el-dropdown-item>店铺优惠券</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                  </li>
                  <li>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                          历史交易记录<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>已付款:-</el-dropdown-item>
                          <el-dropdown-item>未付款:-</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                  </li>
              </ul>
           </div>
       </div>
       <!--中间内容结束-->
       <!--最右边内容开始-->
        <div class="aside">订单中心</div>
       <!--最右边内容结束-->
   </div>
</template>

<script>
export default {
  name:"rigmain",
}
</script>

<style lang="less" scoped>
    .right-main{
      width: 1200px;
      margin-left: 150px;
      position: relative;
      margin:0 auto;
      .user-info{
        margin-left:10px;
        width: 726px;
        float: left;
        .m-info{
            border: 1px solid #e4eaee;
            margin-bottom: 23px;
            font-size: 12px;
            color: #4b4b4b;
            z-index: 3;
            .info-bar{
              vertical-align: middle;
              color: #546d7e;
              padding:5px 0;
              position: relative;
              font-size: 12px;
              background: #f5f8fa;
              line-height: 23px;
              display: inline-block;
              width: 39%;
              .baseinfo{
                float: left;
                .a{
                    float: left;
                    display: block;
                    width: 52px;
                    height: 52px;
                    margin-right: 13px;
                    margin-left: 12px;
                    position: relative;
                    border: 2px solid #FFF;
                    border-radius: 50%;
                    overflow: hidden;
                    img{
                      border-radius: 50%;
                      width: 100%;
                      height: 100%;
                    }
                  }
                .s-name{
                  margin-top: 6px;
                  display: block;
                  color:#000;
                  float: left;
                  a{
                    text-decoration: none;
                    outline: 0;
                    cursor: pointer;
                    display: inline;
                    color: #546d7e;
                  }
                }
              }
            }
          .ul-info{
            float: right;
            width: 61%;
            margin-right: -1px;
            margin-top: 9px;
            li{
              width: 33%;
              display: inline;
              float: left;
              height:40px;
              line-height: 40px;
              .el-dropdown{margin-top:10px;}
              a{
                  zoom: 1;
                  cursor: pointer;
                  z-index: 2;
                  display: block;
                  padding: 10px 0;
                  color: #546d7e;
                  text-align: center;
                  text-decoration: none;
                  &:hover{ color: #2ec748; text-decoration: underline;}
              }
            }
          }
        }
      }
      .aside{
        width: 300px;
        float: right;
        margin-left: 10px;
      }
    }
</style>

