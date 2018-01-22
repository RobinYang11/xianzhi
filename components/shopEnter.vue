<template>
    <div>
         <div class="caption">
            <!--title-->
            <div class="bt-title">
                入驻商家
            </div>
            <!--title-->
            <div class="contanier">
                <ul>
                    <li>
                        <div class="img">
                            <a href="javascript:;">
                                <img src="../assets/img/list1.jpg" alt="">
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="img">
                            <a href="javascript:;">
                                <img src="../assets/img/list1.jpg" alt="">
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="img">
                            <a href="javascript:;">
                                <img src="../assets/img/list1.jpg" alt="">
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="img">
                            <a href="javascript:;">
                                <img src="../assets/img/list1.jpg" alt="">
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="img">
                            <a href="javascript:;">
                                <img src="../assets/img/list1.jpg" alt="">
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="img">
                            <a href="javascript:;">
                                <img src="../assets/img/list1.jpg" alt="">
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "shopEnter"
};
</script>
<style lang="less" scoped>
.caption {
  position: relative;
  background-color: #ffffff;
  margin: 0 auto;
  width: 548px;
  top: -360px;
  margin-top: 30px;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0px 3px 31px 2px rgba(7, 17, 27, .06);
  .bt-title {
    position: absolute;
    top: -20px;
    left: 50%;
    margin-left: -274px;
    width: 548px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    display: inline-block;
    z-index: 88;
    background: url(../assets/img/bg_title.png);
    color: #fff;
  }
  .contanier {
    width: 100%;
    display: block;
    padding: 20px 0;
    border-radius: 3px;
    box-shadow: 0px 3px 31px 2px rgba(7, 17, 27, 0.06);
    ul {
      width: 100%;
      display: inline-block;
      li {
        display: block;
        float: left;
        width: 33.33%;
        height: 80px;
        margin: 10px 0;
        .img {
          width: 85%;
          height: 100%;
          border: 1px solid #ddd;
          padding: 5px 7px;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>

