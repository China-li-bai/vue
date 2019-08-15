<template>
    <div>
        <!--头部-->
        <my-header></my-header>
        <!--左侧菜单-->
        <side-menu></side-menu>
        <!--中间变化的内容-->
       <my-content></my-content>
    </div>
</template>

<script>

    import SideMenu from "./SideMenu";
    import MyHeader from "./MyHeader";
    import MyContent from "./MyContent";

    export default {
        name: "HomePage",
        components: {MyContent, MyHeader, SideMenu}
    }
</script>

<style scoped>

</style>