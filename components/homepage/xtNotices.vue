<template>
    <div class="xtnotices">
        <el-radio-group v-model="tabPosition"></el-radio-group>

        <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="系统信息">
                <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                    label="日期"
                    width="180">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="通知消息"
                    width="500">
                    <template slot-scope="scope">
                        <div>{{ scope.row.name }}</div>
                    </template>
                    </el-table-column>
                    <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="互动消息" class="hdmessage">
                <el-table
                    :data="tableReset"
                    style="width: 100%">
                    <el-table-column
                    label="日期"
                    width="180">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="接受的消息"
                    width="500">
                    <template slot-scope="scope">
                        <div>{{ scope.row.name }}</div>
                    </template>
                    </el-table-column>
                    <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        type="default"
                        @click="handleReset(scope.$index, scope.row)">回复</el-button>
                    </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        tabPosition: 'left',
        tableData: [{
          date: '2016-05-02',
          name: '您的购物车商品还有三天到期请您确认支付。',
          
        }, {
          date: '2018-01-04',
          name: '快到期了',
        }, {
          date: '2016-05-01',
          name: '购物车已满请先支付',
        }, 
        {
          date: '2018-01-04',
          name: '快到期了',
        },
        {
          date: '2018-01-04',
          name: '快到期了',
        },
        {
          date: '2018-01-04',
          name: '快到期了',
        },
        {
          date: '2018-01-04',
          name: '快到期了',
        },
        {
          date: '2018-01-04',
          name: '快到期了',
        },
        {
          date: '2018-01-04',
          name: '快到期了',
        },{
          date: '2016-05-03',
          name: '王小虎'
        }],
         tableReset: [{
          date: '2017-06-02',
          name: '请问蔬菜新鲜吗？',
          
        }, {
          date: '2018-01-04',
          name: '您上次买的牛肉好不好，我现在想买请给个意见，谢谢你！',
        }, {
          date: '2018-02-01',
          name: '请问一般多久可以送货上门啊',
        }, 
        {
          date: '2018-02-07',
          name: '多谢',
        },
        {
          date: '2016-05-03',
          name: '王小虎'
        }]
      }
    },
    methods: {
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleReset(index, row) {
        console.log(index, row);
       
      }
    }
  }
</script>

<style lang="less" scoped>
    .xtnotices{
        .el-tabs{
            .el-tabs__header{

            }
            .el-tabs__content{
                .el-tab-pane{
                    .el-table{
                        .el-table__body-wrapper{
                            .el-table__body{
                                
                            }
                        }
                    }
                }   
            }
        }
    }
    .el-tab-pane.hdmessage{
        .el-tabs{
            .el-tab-pane{
                h3{
                    a{
                        color: orange;
                    }
                    span{
                        font-size: 14px;
                        color:#ddd;
                        margin-left:10px;
                    }
                }
                .maincontent{
                    width: 100%;
                    display: inline-block;
                    margin-top: 15px;
                    min-height:200px;
                }
            }
        }               
    }
</style>

