<template>
    <!--pc端-->
    <el-container>
        <el-header class="pd0">
            <topNav></topNav>
        </el-header>
        <el-main>
            <contentMain></contentMain>
            <navHeade></navHeade>
            <lunbo></lunbo>
            <shopList></shopList>
            <capga></capga>
            <servFt></servFt>
        </el-main>
        <el-footer>
            <footBoot></footBoot>
        </el-footer>
    </el-container>
    <!--pc端-->
</template>
<script>
    import topNav from '../components/topNav.vue'
    import contentMain from '../components/contentMain.vue'
    import lunbo from '../components/lunbo.vue'
    import navHeade from '../components/navHeade.vue'
    import shopList from '../components/shopList.vue'
    import capga from '../components/capga.vue'
    import servFt from '../components/servFt.vue'
    import footBoot from '../components/footBoot.vue'
    export default {
        name:'test',
        components:{
            topNav,
            contentMain,
            lunbo,
            navHeade,
            shopList,
            capga,
            servFt,
            footBoot
        }
    }
</script>
<<style lang="less" scoped>
    .pd0{
        padding:0;
    }
    .el-header{
        height:30px!important;
    }
    .el-main{
        padding:0;
    }
    .el-footer{
        z-index:5;
    }
</style>
