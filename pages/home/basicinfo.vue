<template>
   <div class="basicinfo">
       <div class="panel">
           <div class="panel-header">
               <div class="panel-title">
                   <h4>基本信息</h4>
               </div>
           </div>
           <div class="panel-body">
                <el-row :gutter="30">
                    <el-col :span="8">
                        <div class="userimg"> 
                            <img :src="imgpath" alt="">
                            <div class="md" >
                                <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="fileList">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                </el-upload>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <el-row>
                            <el-col :span="8">用户名称</el-col>
                            <el-col :span="8">{{userinfo.username}}</el-col>
                            <el-col  class="added" :span="8"><a href="#" @click="userNameVisible = true">[修改]</a></el-col>
                        </el-row>
                         <el-row>
                            <el-col :span="8">手机号</el-col>
                            <el-col :span="8">{{userinfo.tel}}</el-col>
                            <el-col  class="added" :span="8"><a href="#">[修改]</a></el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">性别</el-col>
                            <el-col :span="8">{{userinfo.sex}}</el-col>
                            <el-col class="added" :span="8"><a href="#" @click="ueserSexVisible = true">[修改]</a></el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">生日</el-col>
                            <el-col :span="8">{{userinfo.birth}}</el-col>
                            <el-col class="added" v-if="!userinfo.birth==''" :span="8"><a href="#" @click="userBirthVisible = true">[修改]</a></el-col>
                            <el-col class="unadded" v-else :span="8"  ><a href="#"  @click="userBirthVisible = true">[未添加]</a></el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-dialog 
                        :visible.sync="userNameVisible"
                         width="20%">
                            <el-form >
                                <el-form-item label="用户名称" :label-width="formLabelWidth">
                                    <el-input v-model="userinfo.username" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="userNameVisible = false">取 消</el-button>
                                <el-button type="primary" @click="userNameVisible = false">确 定</el-button>
                            </div>
                        </el-dialog>

                        <el-dialog 
                        :visible.sync="ueserSexVisible"
                         width="20%">
                            <el-form >
                                <el-form-item label="用户名称" :label-width="formLabelWidth">
                                    <el-input v-model="userinfo.sex" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="ueserSexVisible = false">取 消</el-button>
                                <el-button type="primary" @click="ueserSexVisible = false">确 定</el-button>
                            </div>
                        </el-dialog>

                         <el-dialog 
                        :visible.sync="userBirthVisible"
                         width="20%">
                            <el-form >
                                <el-form-item label="用户名称" :label-width="formLabelWidth">
                                    <el-input v-model="userinfo.birth" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="userBirthVisible = false">取 消</el-button>
                                <el-button type="primary" @click="userBirthVisible = false">确 定</el-button>
                            </div>
                        </el-dialog>

                        
                    </el-col>
                </el-row>
           </div>
       </div>
   </div>
</template>
<script>
export default {
    data:function()
    {
        return{
            userinfo:{
                username:'robin',
                tel:"15595469543",
                sex:'boy',
                birth:""
            },
            imgpath:"/jj.jpg",
            userNameVisible: false,
            ueserSexVisible:false,
            userBirthVisible:false,
            formLabelWidth: '100px',
            fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        }
    } ,
    methods: { 
        
         
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        }
    }
}
</script>
<style lang="less" >
    
    .basicinfo{
        .panel{
            .panel-body{
                .userimg {
                    .md{
                        display:none;
                    }
                    &:hover{
                        .md{
                            display: block;
                        }
                    }
                    img
                    {   
                       box-shadow: 0 1px 6px rgba(202, 191, 191, 0.87);
                        overflow: hidden;
                        border-radius: 50%;
                        width: 50%;
                      
                    }
                }
                .el-row{
                    .el-col:nth-child(2){
                        font-size: 14px;
                        color:#515151;
                        .added{
                            a{
                                color:rgb(55, 170, 55);
                                
                            }
                        }
                        .unadded{
                            a{
                                color:red;
                            }
                        }
                        .el-row{
                            margin: 20px 0;
                            .el-col{
                                // margin: 10px;
                            }
                        }
                    }
                   
                }
            }
        }
    }
</style>

