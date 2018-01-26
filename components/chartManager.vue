<template>
   <div class="chartManager">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部商品" name="first">
            <el-table
              :data=datas
              ref="multipleTable"
                @selection-change="handleSelectionChange"
              style="width: 100%">
              <el-table-column
                type="selection"
                label="全部选择"
                width="60"
                >
              
              </el-table-column>
              <el-table-column
                label="产品详情"
                width="360" align="center">
                <template slot-scope="scope">
                    <div class="shop-cel">
                        <div class="cel-img">
                          <img :src="scope.row.imgsrc" alt="" srcset="">
                          <div class="bgimg">
                              <div class="bgzxs">
                                 <a href="#">找相似</a>
                              </div>
                          </div>
                        </div>
                        <div class="shop-replay">
                          {{scope.row.name}}
                          <p class="thu"><span>{{scope.row.tipnumber}}</span>{{scope.row.tip}}</p>
                          <p class="yb"> <i class="el-icon-setting"></i> 选延保</p>
                        </div>
                    </div>
                </template>
              </el-table-column>
              <el-table-column label="单价" align="center">
                <template slot-scope="scope">
                    <div class="cel-price">
                      ￥{{scope.row.price}}
                      <div class="p">
                          <span>{{scope.row.lixi}}</span>
                      </div>
                    </div>
                </template>
              </el-table-column>
              <el-table-column label="数量" align="center">
                <template slot-scope="scope">
                    <div class="cel-number">
                        <el-input-number size="mini" v-model="scope.row.amount"></el-input-number>
                        <p>{{scope.row.own}}</p>
                    </div>
                </template>
              </el-table-column>
              <el-table-column label="小计" align="center">
                <template slot-scope="scope">
                   
                    <div class="cel-price">
                      ￥ {{scope.row.amount*scope.row.price}}
                      <p>{{scope.row.kg}}</p>
                    </div>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <div class="cel-made">
                        <ul>
                          <li><a href="#">删除</a></li>
                          <li><a href="#">移动到我的关注</a></li>
                          <li><a href="#">添加到我的关注</a></li>
                        </ul>
                    </div>
                </template>
              </el-table-column>
            </el-table>
            <div class="toPay">
                <el-row>
                    <el-col :span="12">
                        <dl>
                          <dd><a href="#"><button @click="toggleSelection(datas)" class="success">全选/反选</button></el-checkbox></a></dd>
                          <dd><a href="#"><button @click="toggleSelection()" class="default"> 全部取消</button></a></dd>
                          <dd><a href="#">删除选中的商品</a></dd>
                          <dd><a href="#">移到我的关注</a></dd>
                          <dd><a href="#">清除下柜商品</a></dd>
                          
                        </dl>
                    </el-col>
                    <el-col :span="8">
                      <span>已选中商品</span><b>{{getselectedSize}}</b><span>件</span>
                      <span>总价</span><b>￥{{getTotalMoney}}</b>
                    </el-col>
                    <el-col :span="4">
                      <button class="danger"> 去结算</button>
                    </el-col>
                </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane label="水果类" name="second">
             水果商品购物车
          </el-tab-pane>
        </el-tabs> 
   </div>
</template>
<script>
export default {
  name: "chartManager",
  data: function() {
    return {
      multipleSelection: [],
      activeName: "first",
      datas: [
        {
          name: "瑞士名表12555sdfsadf3sa564df654s65df",
          tipnumber:"2",
          tip:"超出两天不支持退换",
          lixi:"白条三期免息",
          own:"有货",
          kg:"100",
          imgsrc: "/biao.jpg",
          price: 1025,
          amount: 10
        },
        {
          name: "新鲜肥美的鸡肉，产自银川本地，全部放养的，我们追求绿色食品",
          tipnumber:"1",
          tip:"超出一天不支持退换",
          lixi:"白条二期免息",
          own:"无货货",
          kg:"6kg",
          imgsrc: "/jj.jpg",
          price: 2,
          amount: 2
        },
        {
          name: "产自内蒙古草原的牛奶，补钙好新鲜，适用各个阶段的人群",
          tipnumber:"3",
          tip:"超出三小时不支持退换",
          lixi:"促销",
          own:"有货",
          kg:"4kg",
          imgsrc: "/nn.jpg",
          price: 1025,
          amount: 6
        },
        {
          name: "绿色食品，从这里开始",
          tipnumber:"0",
          tip:"此商品不支持退换",
          lixi:"暂无活动",
          own:"有货",
          kg:"200",
          imgsrc: "/ym.jpg",
          price: 2,
          amount: 2
        }
      ]
    };
  },
  components: {},
  computed: {
    getselectedSize() {
      return this.multipleSelection.length;
    },
    getTotal() {
      let total = 0;
      this.datas.forEach(i => {
        total += i.price * i.amount;
      });

      return total;
    },
    getTotalMoney() {
      let total = 0;
      this.multipleSelection.forEach(i => {
        total += i.price * i.amount;
      });
      return total;
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    }
  }
};
</script>
<style lang="less">
.chartManager {
  background-color: #fff;
  padding: 10px 20px;
  .el-tabs {
    .el-tabs__header {
      margin: 0;
      .el-tabs__active-bar {
        background-color: #2ec748;
      }
      .el-tabs__item.is-active {
        color: #2ec748;
      }
    }
    .el-tabs__content {
      .el-tab-pane{
        .el-table{
          .el-table__body-wrapper{
            .el-table__body{
              .el-table__row{
                .cell{
                  .shop-cel{
                    width: 100%;
                    .cel-img{
                      width: 80px;
                      height: 80px;
                      position: relative;
                      display: block;
                      float: left;
                      margin-right:8px;
                      border-radius: 3px; 
                      &:hover{
                        .bgimg{ display: block;}
                      }
                      img{
                        width: 80px;
                        height: 80px;
                      }
                      .bgimg{
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 80px;
                        height: 80px;
                        background-color: rgba(0, 0, 0, .5);
                        display: none;
                        color: #fff;
                        .bgzxs{
                          position: absolute;
                          bottom: 3px;
                          width: 90%;
                          background-color: #000;
                          margin: 0 5%;
                          height: 25px;
                          line-height: 25px;
                          text-align: center;
                          a{
                            color: #fff;
                          }
                          &:hover{
                            background-color: #f00;
                          }
                        }
                      }
                    }   
                    .shop-replay{
                      display: block;
                      height: auto;
                      text-align: left;
                      &:hover{
                        color: #2ec748;
                      }
                      p.thu{
                        color: #6485cb;
                        span{
                          width: 12px;
                          height: 12px;
                          background-color: #6485cb;
                          border-radius: 4px;
                          color: #fff;
                          padding: 2px 6px;
                          margin-right: 5px;
                        }
                      }
                      p.yb{
                        color: #999;
                        i{
                          color: #f00;
                          font-size: 16px;
                        }
                      }
                    }
                  }
                  .cel-price{
                     color: #000;
                     width: 160px;
                     text-align: center;
                     font-weight: 700;
                     .p{
                       color:red;
                       margin: 0 auto;
                       span{
                        width: auto;
                        border: 1px solid #eee;
                        background-color: #fff;
                        text-align: center;
                        padding: 2px 5px;
                        font-weight: normal;
                       }
                     }
                     p{
                       color: #999;
                       font-weight: normal;
                     }

                  }
                  .cel-number{
                    text-align: center;
                    color: 12px;
                  }
                  .cel-made{
                    ul{
                      li{
                        a{
                          color: #333;
                          font-size: 12px;
                          &:hover{color: #2ec748;}
                        }
                      }
                    }
                  }
                }
              }
            }
          } 
        }
        //底部开始
        .toPay {
          padding: 10px 0 0 0;
          background-color: white;
          .el-row {
            :nth-child(1) {
              dd {
                float: left;
                margin-right: 10px;
                a {
                  font-size: 12px;
                  color: #333;
                  &:hover{ color: #2ec748;}
                  button.success{
                    background-color: #fff;
                    color: #2ec748;
                    border: 1px solid #2ec748;
                    padding: 2px 8px;
                  }
                  button.default{
                    background-color: #999;
                    color: #fff;
                    border: 1px solid #eee;
                    padding: 2px 8px;
                  }
                }
              }
            }
            .el-col{
              span{
                font-size: 14px;
              }
              b{
                font-size: 16px;
                font-weight: 700;
                color: #f00;
                margin: 0 5px;
              }
              .danger{
                background-color: #f00;
                color: #fff;
                padding: 10px 15px;
                border: 1px solid #f00; 
                float: right;
                font-size: 16px;
                font-weight: 600;
              } 
            }
          }
        }
        //底部结束
      }
    }
  }
}
</style>




