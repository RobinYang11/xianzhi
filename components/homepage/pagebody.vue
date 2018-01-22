<template>
   <div class="pagebody">
       <div class="wrap">
           <div class="nr">
               <div class="main-wrap">
                   <rigmain></rigmain>
               </div>
           </div>
           <section class="col-left">
              <navlist></navlist>
           </section>
       </div>
       
   </div>
</template>

<script>
import navlist from './navlist'
import rigmain from './rigmain'
export default {
  name:"pagebody",
  data:function(){
      return{

      }
  },
  components:{
      navlist,
      rigmain
  }
}
</script>

<style lang="less" scoped>
.pagebody{
    width: 1200px;
    margin:0 auto;
    .wrap{
        position: relative;
        width: 100%;
        clear: both;
        .nr{
            float: left;
            width: 100%;
            padding-top: 25px;
            padding-bottom: 40px;
            background-color: #fff;
            .main-wrap{
                position: relative;
                margin-left: 150px;
            }
        }
        .col-left{
            width: 140px;
            overflow: hidden;
            float: left;
            margin-left: -100%;
            min-height: 1px;
            padding-top: 25px;
        }
    }
}
</style>
