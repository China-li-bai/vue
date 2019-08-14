<template>
    <div class="login-wrapper">

        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="login-content">
            <h3>后台管理</h3>
            <el-form-item  prop="username">
                <el-input type="text" placeholder="请输入账号" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item  prop="pass">
                <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="login()">提交</el-button>

            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                ruleForm:{},
                rules: {
                    username: [
                        {   required:true,
                            message:'请输入账号',
                            trigger: 'blur' }
                    ],
                    pass: [
                        {   required:true,
                            message:'请输入密码',
                            trigger: 'blur' }
                    ],


                }
            }
        },
        methods:{
                login(){}
        }
    }
</script>

<style lang="less" scoped>
.login-wrapper{


    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
   .login-content{
       width: 320px;
       height: 240px;
       h3{
           padding: 10px 0;
       }
   }
}
</style>