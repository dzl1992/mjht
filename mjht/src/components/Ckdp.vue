<template>
	<div class="content">
		<Left></Left>
		<el-main>
			<div class="top">  
				<span class="DpImg">
					<img :src="'http://192.168.6.160:8090/common/file/'+form.shopfrontPic" alt="暂无图片"/>
				</span>
				<span class="DpNr">
					<img :src="getImg()"/>
					<div class="name">
						{{form.name}}
					</div>
					<div class="li">
						电话：{{form.telephone}}
					</div>
					<div class="li">
						地址：{{form.address}}
					</div>
					<div class="li">
						房间数量：{{form.roomCount}}
					</div>
					<div class="li">
						营业时间：{{form.openingTime}} - {{form.closingTime}}
					</div>
					<div class="li">
						创建时间：{{form.createTime}}
					</div>
				</span>
			</div>
			<div class="foot">
				<div class="foot_tit">
					<span class="ImgSpan">
						<img src="../assets/Xq.png"/>
					</span>
					<span class="dpxq">
						店铺详情
					</span>
				</div>
				<div class="foot_center"v-html='form.detail'>
					
				</div>
			</div>
		</el-main>
	</div>
		
	
</template>  
  
<script>  
export default {  
  name: 'home',  
  data () {  
    return {  
    	form: {}
      }
  },
  created(){
    	this.form = this.$route.query.routeParams;
    },
  methods: {
     getImg: function () {
            return  require('../assets/'+this.form.status+'.png');
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
    background-color: #E9EEF3;
    margin: 0;
  }  
  html,body,#app {height: 100%;}
  .el-container {
  	height: 100%;
  }
  .content {
  	width: 100%;
  	height: 100%;
  }
.center {
	width: 100%;
	height: 100%;
}
.el-main {
	width: 100%;
	height: 100%;
	padding-top: 60px;
	padding-left: 200px;
}
.top {
	width: 40%;
	height: 240px;
	background-color: #FFFFFF;
	margin: 0 auto;
}
.foot {
	margin-top: 50px;
	width: 100%;
	height: auto;
}
.DpImg {
	width: 60%;
	height: 100%;
	display: inline-block;
	float: left;
}
.DpImg > img {
	width: 100%;
	height: 100%;
}
.DpNr {
	width: 32%;
	height: 100%;
	display: inline-block;
	float: right;
	margin-left: 8%;
	position: relative;
}
.DpNr > img {
	position: absolute;
	top: 0;
	right: 0;
}
.name {
	width: 100%;
	height: 50px;
	text-align: left;
	line-height: 50px;
	font-size: 28px;
	font-weight: bold;
	margin-top: 20px;
	margin-bottom: 10px;
}
.li {
	width: 100%;
	height: 20px;
	text-align: left;
	line-height: 20px;
	font-size: 16px;
	color: #999;
	margin-bottom: 6px;
}
.foot_tit {
	width: 40%;
	height: 40px;
	margin: 0 auto;
	text-align: left;
}
.dpxq {
	display: inline-block;
	font-size: 18px;
	font-weight: bold;
	width: 80px;
	height: 40px;
	line-height: 30px;
	float: left;
	margin-left: 10px;
}
.ImgSpan{
	display: inline-block;
	width: 20px;
	height: 40px;
	line-height: 40px;
	float: left;
}
.foot_center {
	width: 40%;
	height: auto;
	margin: 0 auto;
	text-align: left;
	background-color: #FFFFFF;
}
.foot_center > p {
	padding-left: 50px;
}
.foot_center img {
	width: 50%;
	height: 50%;
}
</style>