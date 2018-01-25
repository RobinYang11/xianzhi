<template>
   <div>
        <el-table
        :data=datas
         ref="multipleTable"
          @selection-change="handleSelectionChange"
        style="width: 100%">
        <el-table-column
          type="selection"
          label="全部选择"
          width="30"
          >
         
        </el-table-column>
        <el-table-column
          label="产品详情"
          width="180">
          <template slot-scope="scope">
              <div>
                  <img :src="scope.row.imgsrc" alt="" srcset="">
                  {{scope.row.name}}
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
              <div>
                   <el-input-number size="mini" v-model="scope.row.amount"></el-input-number>
              </div>
          </template>
        </el-table-column>
        <el-table-column label="总金额">
          <template slot-scope="scope">
              {{scope.row.amount*scope.row.price}}
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
      <div class="toPay">
          <el-row>
              <el-col :span="12">
                  <dl>
                    <dd><a href="#"><button @click="toggleSelection(datas)">全选/反选</button></el-checkbox></a></dd>
                    <dd><a href="#"><button @click="toggleSelection()"> 全部取消</button></a></dd>
                    <dd><a href="#">删除选中的商品</a></dd>
                    <dd><a href="#">移到我的关注</a></dd>
                    <dd><a href="#">清除下柜商品</a></dd>
                    
                  </dl>
              </el-col>
              <el-col :span="8">
                 <span>已选中商品</span>{{getselectedSize}}
                 <span>总价</span>{{getTotalMoney}}
              </el-col>
              <el-col :span="4">
                <button> 去结算</button>
              </el-col>
          </el-row>
      </div>
   </div>
</template>
<script>

  export default {
      name:"chartManager",
      data:function(){
        return {
            multipleSelection:[],
            datas:[
              {
                name:'瑞士名表',
                imgsrc:'/biao.jpg',
                price:2,
                amount:2,
              },
               {
                 name:'瑞士名表',
                imgsrc:'/biao.jpg',
                price:2,
                amount:2,
              },
               {
                 name:'瑞士名表',
                imgsrc:'/biao.jpg',
                price:2,
                amount:2,
              },
               {
                 name:'瑞士名表',
                imgsrc:'/biao.jpg',
                price:2,
                amount:2,
              }, 
            ]
        }
      },
      components:{
      
      },
      computed:{
        getselectedSize(){
          return this.multipleSelection.length;
        },
        getTotal(){
           let total=0;
           this.datas.forEach((i)=>{
             total+=(i.price*i.amount);
           })
          
           return total;
        },
        getTotalMoney(){
          let total=0;
          this.multipleSelection.forEach((i)=>{
              total+=(i.price*i.amount) ; 
          })
          return total;
        }
      },
      methods:{
        handleSelectionChange(val) {
          this.multipleSelection = val;
       
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
  }
</script>
<style lang="less" scoped>
  .toPay{
    background-color: white;
    .el-row{
      :nth-child(1){
         dd{
           float: left;
           margin-right: 10px;
           a{
             font-size: 12px;

           }
         }
      }
    }
  }
</style>




