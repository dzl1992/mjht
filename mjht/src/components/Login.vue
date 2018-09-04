<template>
	<div class="content">
    <div class="C_left"><h3 class="tit_name">邻里中心房屋智能管理平台</h3></div>
		<el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px" class="demo-ruleForm login-container">  
      <div class="login_form">
          <h3 class="title">管理员登录</h3>  
          <el-form-item prop="username">  
            <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>  
          </el-form-item>  
          <el-form-item prop="pwd">  
            <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>  
          </el-form-item>  
          <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>  -->
          <el-form-item style="width:100%;margin-top: 6.25rem">  
            <el-button type="primary" style="width:100%;height: 3.125rem;font-weight: bold;
            font-size: 20px;" @click.native.prevent="handleLogin" :loading="logining" >登 录</el-button>  
          </el-form-item>
      </div>   
		</el-form> 
	</div>
		
	 
</template>  
  
<script>  
//import {requestLogin} from '../api/api';
//import {login} from '../api/api'; 
//var qs=require('qs');
  //import NProgress from 'nprogress'  
  export default {  
    data() {  
      return {  
        logining: false,  
        account: {  
          username: '',  
          pwd: ''  
        },  
        rules: {  
          username: [  
            {required: true, message: '请输入账号', trigger: 'blur'},  
            //{ validator: validaePass }  
          ],  
          pwd: [  
            {required: true, message: '请输入密码', trigger: 'blur'},  
            //{ validator: validaePass2 }  
          ]  
        },  
        checked: true  
      };  
    },  
    methods: {  
      handleLogin: function() { 
      	var _this = this;
        this.$refs.AccountFrom.validate((valid) => {  
          if (valid) {  
            this.logining = false;  
            //NProgress.start();  
            var loginParams = { 'loginName': this.account.username, 'password': this.account.pwd }; 
            if(loginParams.loginName == "admin" && loginParams.password == "123456") {
              this.$router.push({path: '/home'});
            } else {
              this.$message.error('登录信息错误了哦！');
            }
            
            // this.axios({
		        // url:"admin/login",
		        // method:'post',
		        // data:loginParams
            // })
            // .then((data) => {
            //   console.log(data.data.state)
            //         if (data.data.state == 1000) {
            //           // 登录成功，把用户信息保存在sessionStorage中  
            //           sessionStorage.setItem('name', loginParams.loginName);
            //           sessionStorage.setItem('pwd', loginParams.password);
            //           this.$router.push({path: '/home'});
            //         }
                    
            // })
            // .catch(function(err){
            //     console.log("失败");
            //     console.log(err)
            // })  

          } else {  
            console.log('提交失败');  
            return false;  
          }  
        });  
      }  
    }  
  }  
  
</script>  
  
  
<style>  
	html {
		width: 100%;
		height: 100%;
	}
  body{  
  	width: 100%;
  	min-height: 100%;
    margin: 0;
  }  
  .content {
  	width: 100%;
    height: 100%;
    position: relative;
  }
  .C_left {
    width: 70%;
    height: 100%;
    background-image: url(../style/img/bj.jpg);
    position: absolute;
    left: 0;
    line-height: 25rem
  }
  .login-container{  
    position: absolute;
    right: 0;
    display: inline-block;
    width: 30%;
    height: 100%;
    background-color: #fff;
  }  
  .login_form {
    width: 64%;
    height: auto;
    margin: 120px auto;
  }
  .tit_name {
    font-size: 50px;
    color: #fff;
  }
  .title {
    margin-bottom: 6rem;
    font-size: 28px;
  }
  .el-form-item {
    margin-bottom: 3.125rem;
  }
</style>  