<template>
   <div class="login hidden-md-and-down">
       <!--上背景色S-->
       <div>
           <topdl></topdl>
       </div>
       <!--上背景色E-->
       <!--登录中心s-->
        <div class="content">
            <div class="main">
                <p class="top-position">
                    品牌还未入驻？
                    <a href="javascript:;" v-on:click="test()"><span>{{clickName}}</span></a>  
                </p>

                <div v-if="isShowLogin">
                    <Logindl></Logindl>
                </div>
                <div v-if="!isShowLogin">
                    <Loginzc></Loginzc>
                </div>
            </div>
        </div> 
        <!--登录中心s-->
   </div>
</template>

<script>
import topdl from './topdl'
import Logindl from './Logindl'
import Loginzc from './Loginzc'
export default {
    name:"Login",
    data:function()
    {
        return {
            //设定初始状态为隐藏
            isShowLogin:false,
            //设定初始点字段
            clickName:"点击注册",
        }
    },
    components:{
        Logindl,Loginzc,topdl
    },
    methods:{
        test:function()
        {
           this.isShowLogin=!this.isShowLogin;
           if(this.isShowLogin)
           {
               this.clickName="点击注册"
           }
           else
           {
               this.clickName="点击登录"
           }

        }
    }    
}
</script>

<style lang="less" scoped>
    .top-position{
        position: relative;
        top: -330px;
        left: 700px;
        width: 240px;
        text-align: left;
        z-index: 99;
        font-size: 14px;
        a{
            text-decoration: none;
        }
        span{
            color: #f5c27f;
            text-decoration: none;
        }
    }
    .content{
            background-color: #f0edf1;
            width: 100%;
            display: block;
            z-index: 0;
            .main{
                position: relative;
                width: 1200px;
                margin:0 auto;
                margin-bottom: -300px;
            }
    }
</style>

