<template>
   <div class="panel">
       <div class="panel-header">
           <div class="panel-title">
               <h4>系统通知</h4>
           </div>
       </div>
       <div class="panel-body">
           <div>
               <xtNotices></xtNotices>
           </div>
       </div>
   </div>
</template>
<script>
import xtNotices from "../../components/homepage/xtNotices"
export default {
    components:{
        xtNotices
    }
}
</script>

