<template>
   <div>
        <el-table
        :data=datas
        style="width: 100%">
        <el-table-column
          type="selection"
          width="180">
         
        </el-table-column>
        <el-table-column
          label="产品详情"
          width="180">
          <template slot-scope="scope">
              <div>
                  <img :src="scope.row.imgsrc" alt="" srcset="">
              </div>
          </template>
        </el-table-column>
        <el-table-column label="单价">
          <template slot-scope="scope">
              {{scope.row.price}}
          </template>
        </el-table-column>
         <el-table-column label="数量">
          <template slot-scope="scope">
            <div class="amount-calculator">
                <a href="#">-</a>
                <input type="text">
                <a href="#">+</a>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="总金额">
          <template slot-scope="scope">
              {{scope.row.total}}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
               <div>
                  <ul>
                    <li><a href="#">删除</a></li>
                    <li><a href="#">移动到我的关注</a></li>
                  </ul>
               </div>
          </template>
        </el-table-column>
      </el-table>
   </div>
</template>
<script>
  export default {
      name:"chartManager",
      data:function(){
        return {
            datas:[
              {
                imgsrc:'/biao.jpg',
                price:333,
                amount:22,
                total:this.amount*this.amount,

              }
            ]
        }
      }
  }
</script>

<style lang="less" scoped>
    .amount-calculator{
      display: flex;
      input,a{
        height: 20px !important;
      }
      input{
        width: 30px;
      }
      a{
        // width: 10px;
        display: inline-block;
        border:1px solid gray;
        padding: 1px 10px;
   
      }
    }
</style>


