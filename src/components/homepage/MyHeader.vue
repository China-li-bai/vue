<template>
    <div class="header-wrapper">
        <h3 class="header-title">HHHH后台管理系统</h3>
        <i class="header-icon el-icon-s-unfold"></i>
        <el-dropdown class="header-info" trigger="click">
      <span class="el-dropdown-link">
        我的主页<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus"><span class="tou"></span>个人设置</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">个人信息</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">注销</el-dropdown-item>
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

    </div>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style lang="less" scoped>
.header-wrapper{
    width: 100%;
    height: 70px;
    line-height: 70px;
    background: #7bbfff;
    color: #fff;
    .header-title{
        padding: 0 10px;
        float: left;
        background: linear-gradient(120deg, #7bbfff ,#8cff2b);
    }
    .header-icon{
        line-height:70px;
        font-size: 24px;
         color: #fff;
        float: left;
    }
    .header-info{
        color: #fff;
        cursor: pointer;
        padding: 0 10px;
        float: right;
        .tou{
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 1px solid #000;
        }
    }
}
</style>