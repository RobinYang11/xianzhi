<template>
   <div class="allshop">
       <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
                <img :src="products.imgsrc" class="image">
                <div style="padding: 14px;">
                    <div class="spanmf">
                        <span>{{products.name}}</span>
                        <span class="span">
                          <strong>￥{{products.price}}</strong>/千克
                        </span>
                    </div>
                    <div class="bottom clearfix">
                        <time class="time">{{ products.currentDate }}</time>
                        <el-button type="text" class="button"><i class="icon icon-ve-gouwuche"></i>加入购物车</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
   </div>
</template>
<script>
export default {
  data() {
    return {
      products:{
          imgsrc:'/jj.jpg',
          name:'优质鸡肉', 
          // currentDate: new Date(),
          currentDate: '2018-01-02',
          price:'25.00'
      }
    };
  }
};
</script>
<style lang="less" scoped>
.allshop {
  .time {
    font-size: 13px;
    color: #999;
  }
  .spanmf{
    color: #333;
    width: 100%;
    font-size: 0.2em;
    height: 26px;
    line-height: 26px;
    span{
      float: left;
      width: 50%;
      font-size: 1.2em;
    }
    span.span{
      float: right;
      width: 50%;
      text-align: right;
      strong{ color: #f00;}
    }
  }
  .bottom {
    margin-top: 5px;
    line-height: 12px;
    .button{
      color: #999;
      &:hover{color: #2ec748; i.icon{color:#2ec748;}}
      i.icon{ color: #999; margin-right:5px;}
    }
  }
  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
}
</style>

