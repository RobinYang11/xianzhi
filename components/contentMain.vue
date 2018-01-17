<template>
    <div class="main hidden-md-and-down xs-lg">
        <div class="content">
            <!--logo开始-->
            <div class="logo">
                <a href="javascript:"></a>
            </div>
            <!--logo结束-->
            <!--搜索S-->
            <div class="search">
                <div class="search-bar">
                    <input type="text" class="search-input">
                    <input type="submit" class="search-btn" value="搜索">
                </div>
                <div class="search-keywords">
                    <a href="javascript:;" class="hot" target="_blank">土豆</a>
                    <a href="javascript:;" target="_blank">羊肉</a>
                    <a href="javascript:;" class="hot" target="_blank">鱼肉</a>
                    <a href="javascript:;" class="hot" target="_blank">玉米</a>
                    <a href="javascript:;" target="_blank">牛排</a>
                    <a href="javascript:;"  target="_blank">大豆</a>
                    <a href="javascript:;"  target="_blank">面粉</a>
                    <a href="javascript:;" target="_blank">小麦</a>
                    <a href="javascript:;" class="hot" target="_blank">蔬菜</a>
                </div>
            </div>
            <!--搜索E-->
            <!--购物车S-->
            <div class="shoping">
                <dl>
                    <dt>
                        <a href="javascript:;">
                            <i class="el-icon-printer"></i>
                            <b>0.0</b>
                        </a>
                    </dt>
                    <dd>
                        <div class="nr">
                            购物车中还没有商品
                        </div>
                    </dd>
                </dl>
            </div>
            <!--购物车E-->
        </div>
    </div>
</template>
<<script>
export default {
  
}
</script>

<style lang="less" scoped>
.main {
  background-color: #e0e0e0;
  .content {
    height: 80px;
    padding: 15px 0 5px 0;
    width: 1200px;
    margin: 0 auto;
    .logo {
      float: left;
      width: 323px;
      margin-right: 10px;
      a {
        display: block;
        width: 320px;
        height: 80px;
        background: url(../assets/img/logo1.png) no-repeat left top;
      }
    }
    .search {
      position: relative;
      float: left;
      width: 528px;
      margin-top: 10px;
      .search-bar {
        display: inline-block;
        .search-input {
          float: left;
          width: 425px;
          height: 26px;
          line-height: 26px;
          padding: 0 10px;
          border: 1px solid #008842;
          background: #e0e0e0;
        }
        .search-btn {
          float: left;
          display: block;
          width: 81px;
          height: 28px;
          line-height: 28px;
          padding: 0;
          border: none;
          cursor: pointer;
          color: #fff;
          font-size: 14px;
          background: #008842;
        }
      }
      .search-keywords {
        height: 30px;
        line-height: 30px;
        a {
          margin-right: 5px;
          display: inline-block;
          color: #444444;
          text-decoration: none;
          font-size: 14px;
        }
        .hot {
          color: #008842;
        }
      }
    }
    .shoping {
      z-index: 88;
      float: right;
      position: relative;
      dl {
        dt {
          width: 170px;
          height: 28px;
          padding: 6px 0;
          line-height: 28px;
          text-align: center;
          font-size: 25px;
          border: 1px solid #008842;
          background: #fff;
          cursor: pointer;
          a {
            display: block;
            color: #008842;
            i {
              display: inline-block;
              vertical-align: middle;
              width: 28px;
              height: 20px;
              margin-right: 10px;
              font-size: 12px;
              padding: 0;
            }
          }
        }
        dd {
          z-index: 88;
          display: none;
          position: absolute;
          top: 41px;
          right: 0;
          width: 380px;
          padding: 10px;
          background: #fff;
          border: 1px solid #007f4d;
          .nr {
            width: 380px;
            height: 120px;
            line-height: 120px;
            text-align: center;
          }
        }
      }
    }
    .shoping:hover {
      dd {
        display: block;
      }
    }
  }
}
</style>

