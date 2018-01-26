<template>
   <div>
     <div class="container">
          <chartNav></chartNav>
          <chartManager></chartManager>
     </div>
   </div>
</template>
<script>
import chartNav from "../components/chartNav"
import chartManager from "../components/chartManager"
export default {
  components:{
      chartManager,chartNav
  }
}
</script>
