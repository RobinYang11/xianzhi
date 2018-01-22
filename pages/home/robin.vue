<template>
    <div>
        <div class="panel">
            <div class="panel-header">
                <div class="panel-title">
                    <h4> 手机号注册</h4>
                </div>
            </div>
            <div class="panel-body">
                <el-steps  >
                    <el-step title="步骤 1"></el-step>
                    <el-step title="步骤 2"></el-step>
                    <el-step title="步骤 3"></el-step>
                </el-steps>

                
            </div>
        </div>
         <div class="panel">
          
            <div class="panel-body">
                <el-tabs>
                    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                </el-tabs>
                <div>
                    <el-progress type="circle" :percentage="0"></el-progress>
                    <el-progress type="circle" :percentage="25"></el-progress>
                    <el-progress type="circle" :percentage="100" status="success"></el-progress>
                    <el-progress type="circle" :percentage="50" status="exception"></el-progress>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}

</script>

<style lang="less" scoped>
    .robin{
        background-color: white;
        :nth-child(1){
            height: 30px;
            
        }
        :nth-child(2){
            height:100%;
        }
        
    }
</style>

