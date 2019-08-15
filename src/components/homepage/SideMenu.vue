<template>

    <el-menu
            default-active="onActivePath"
            class="side-menu-wrapper"
            :router="true"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-submenu
                index="1"
                v-for="item in menuData">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.title}}</span>
            </template>
            <el-menu-item  v-for="subitem in item.children" :index="subitem.index">{{subitem.title}}</el-menu-item>
            </el-submenu>


    </el-menu>
</template>

<script>
    export default {
        name: "SideMenu",
        data(){
            return{
                menuData:[{
                    title:'系统管理',
                    children:[
                        {title:'部门管理',index:'/department'},
                        {title:'员工管理',index:'/employees'},
                        {title:'权利管理'},
                        {title:'角色管理'},
                        ]
                }]
            }
        },
        computed:{
            onActivePath(){
                return this.$route.path
            }
        }

    }
</script>

<style lang="less" scoped>
    .side-menu-wrapper {
        width: 237px;
        position: absolute;
        top: 70px;
        left: 0;
        bottom: 0;

    }
</style>