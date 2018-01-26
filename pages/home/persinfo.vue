<template>
   <div >个人消 息 
       <ul v-for="i in 6">
           <li v-for="n in names">{{n.name}}11</li>
       </ul>

   </div>
</template>

<script>
export default {
   data:function(){
       return{
           names:[
           {name:"我的消息"},
           {name:"互动消息"},
           {name:"接受消息"}
       ]
       }
   }
}
</script>

