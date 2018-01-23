<template>
   <div class="save-passworld">
       <div class="panel">
           <div class="panel-header">
               <div class="panel-title">
                   <h4>设置密码</h4>
               </div>
           </div>
           <div class="paner-body">
                <p class="strong-tip">
                    鲜致提示你：使用大小写字母、数字与标点符号的组合，可以大幅提升帐号安全！
                </p>
                <el-row>
                    <el-col :span="12">
                        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="密码" prop="pass">
                                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码" prop="checkPass">
                                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="success" @click="submitForm('ruleForm2')">提交</el-button>
                                <el-button @click="resetForm('ruleForm2')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row> 
           </div>
       </div>
   </div>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less">
    .save-passworld{
        .panel{
            padding: 0 15px;
            min-height:455px;
            .panel-title{
                font-size: 17px;
            }
            .paner-body{ 
                display: inline-block;
                width: 100%; 
                .strong-tip{ margin:30px 15px; color: #999; font-size: 14px;}
                .el-form{
                    .el-form-item{
                        .el-form-item__content{
                            .el-button{
                                width: 48.5%;
                            }
                            .el-input{
                                .el-input.is-active .el-input__inner, .el-input__inner:focus{
                                    border-color: #2ec748;
                                }
                            }
                            .el-button:focus, .el-button:hover, .el-button:active {
                                color: #2ec748;
                                border-color: #c6e2ff;
                                background-color: #ecf5ff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

