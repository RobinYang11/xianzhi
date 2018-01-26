<template>
   <div class="chartnav">
       <el-row>
           <el-col :span="17">
               <div class="logo">
                   <a href="#" class="photo">
                       <img :src="imgSrc" alt="">
                   </a>
               </div>
           </el-col>
           <el-col :span="7" class="posi-input">
                <el-input placeholder="请输入内容" v-model="input" class="input-with-select"> 
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>

           </el-col>
       </el-row>
   </div>
</template>
<script>
export default {
  name:"chartNav",
  data:function(){
      return{
          imgSrc:"/logo1.png",
          input:"请输入搜索内容"
      }
  }
  }
</script>
<style lang="less" scoped>
    .chartnav{
        .logo{
            float: left;
            position: relative;
            width: 277px;
            padding: 0;
            height: 50px;
            margin:15px 0 10px;
            a.photo{
                display: block;
                margin-top: 2px;
                width: 134px;
                height: 42px;
                img{
                    width: 150%;
                    //height: 100%; 
                }
            }
        }
        .posi-input{
            height: 50px;
            margin:20px 0 10px;
            padding-right: 5px;
        }
    }
</style>

