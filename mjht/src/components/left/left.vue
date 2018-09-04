<template>  
	<el-container>
		<el-menu
				theme="dark"
				:default-active="$route.path"
				class="el-menu-vertical-demo"
				background-color="#263238"
				text-color="#8a979e"
				active-text-color="#fff"
				:collapse="isCollapse"
				router>
			<div class="menu_Header">
				<el-header v-show="!isCollapse" >邻里中心房屋智能管理平台</el-header>
				<el-header class="smallHeader" style="width: 4.0625rem" v-show="isCollapse">房屋</el-header>
			</div>
			<div class="menu_Cen">
				<el-menu-item index="/home">
					<i class="el-icon-menu"></i>
					<span slot="title">
						首页
					</span>
				</el-menu-item>
				<el-menu-item index="/Home/Fwgl">
					<i class="el-icon-printer"></i>
					<span slot="title">
						房屋管理
					</span>
				</el-menu-item>
				<el-menu-item index="/Home/Caiji">
					<i class="el-icon-bell"></i>
					<span slot="title">
						消防预审
					</span>
				</el-menu-item>
				<el-menu-item index="/Home/Rzdj">
					<i class="el-icon-edit-outline"></i>
					<span slot="title">
						入住登记
					</span>
				</el-menu-item>
				<el-menu-item index="/Home/Kmjl">
					<i class="el-icon-tickets"></i>
					<span slot="title">
						开门记录
					</span>
				</el-menu-item>
				<el-menu-item index="/Home/Sbgl">
					<i class="el-icon-mobile-phone"></i>
					<span slot="title">
						设备管理
					</span>
				</el-menu-item>
				<el-menu-item index="/Home/Xxtz">
					<i class="el-icon-document"></i>
					<span slot="title">
						信息通知
					</span>
				</el-menu-item>
				<el-menu-item index="/Home/Ycyj">
					<i class="el-icon-circle-close-outline"></i>
					<span slot="title">
						异常预警
					</span>
				</el-menu-item>
				<el-submenu index="3">
					<template slot="title">
						<i class="el-icon-setting"></i>
						<span v-show="!isCollapse" slot="title">
							系统管理
						</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="/Home/Xtgl/Yonghu">
							<span slot="title">社区管理</span>
						</el-menu-item>
						<el-menu-item index="/Home/Xtgl/Xqgl">
							<span slot="title">小区管理</span>
						</el-menu-item>
						<el-menu-item index="/Home/Xtgl/Yhgl">
							<span slot="title">管理员管理</span>
						</el-menu-item>
						<el-menu-item index="/Home/Xtgl/Juese">
							<span slot="title">角色管理</span>
						</el-menu-item>
						<el-menu-item index="/Home/Xtgl/Htmb">
							<span slot="title">合同模板</span>
						</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</div>
		</el-menu>

		<div class="Hed_Right">
			<div class="header">
				<span v-model="isCollapse" @click="sidebarFold">
					<img src="../../style/img/call.png" alt="">
				</span>
				<el-dropdown class="admin" @command="handleCommand">
					<span class="el-dropdown-link">
						<img src="../../style/img/admin.png" alt="">
						<span>admin</span>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="a">修改密码</el-dropdown-item>
						<el-dropdown-item command="b">退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>

			<el-scrollbar>
					<router-view></router-view>
			</el-scrollbar>
			
		</div>


	</el-container>
</template>  
  
<script>  
export default {  
  name: 'home',  
  data () {  
    return {  
      isCollapse: false  
    }  
	},
	computed: {
		// sidebarFold() {
		// 	console.log(0)
		// 	this.isCollapse = true
		// },
	},
  methods: {
		sidebarFold() {
			var that = this;
			console.log(that.isCollapse)
			this.isCollapse = !this.isCollapse
		},
		handleClick() {
			console.log(0)
			
		},
		handleCommand(command) {
			if(command == "b") {
				this.$router.push({path: '/Login'})
			} else {
				this.$message('您暂时还不能修改密码');
			}
			
		}
	}
}  
</script>  

<style>
	html {
		width: 100%;
		height: 100%;
		display: table;
	}
  body{  
  	width: 100%;
  	min-height: 100%;
    margin: 0;
  }  
  html,body,#app {height: 100%;}
  a {
  	color: #FFFFFF;
  	text-decoration: none; 
  }
  .el-container {
  	height: 100%;
		display: flex;
  }
  .is-vertical {
  	position: absolute;
  	top: 0;
  	left: 0;
  	right: 0;
  	bottom: 0;
  }
	.Hed_Right {
		display: inline-block;
		height: auto;
		flex: 1;
		position: relative;
	}
	.admin {
		display: inline-block;
		width: 8rem;
		height: auto;
		/* position: absolute; */
		right: .9375rem;
		cursor: pointer;
		font-size: 14px;
		float: right;
	}
	.admin >.el-dropdown-link > img {
		width: 36px;
		height: 36px;
		display: inline-block;
    position: absolute;
    left: 0;
    top: 12px;
	}
	.el-header {
		width: 200px;
    color: #333;
    text-align: center;
    line-height: 60px;
		flex:none;
		font-size: 18px;
		color: #fff;
		font-weight: bold;
  }
	.smallHeader {
		text-align: center;
		flex:none;
		padding: 0;
	}
  .header {
		height: 60px;
		flex:1;
		position: relative;
    padding-right: 15px;
    background-color: #fff;
		box-shadow: 0 2px 4px rgba(0,0,0,.08);
		line-height: 60px;
	}
	.header > span {
		position: absolute;
		left: 20px;
		cursor: pointer;
	}
  .el-aside {
    background-color: #263238;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    /* background-color: #E9EEF3; */
		display: inline-block;
    color: #333;
    text-align: center;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
	.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
		/* height: 100%; */
  }
	.el-menu--collapse {
    min-height: 100%;
		height: 100%;
	}
  .el-aside {
  	overflow: hidden;
  }
  .claier {
  	clear:both
  }
	.el-menu-vertical-demo {
		flex: none;
	}
	.menu_Header {
		background-color: #45c2b5;
		height: 60px;
	}
	.menu_Cen {
		background-color:#263238;
		height: 100%;
	}
	.menu_Cen .el-menu-item, .el-submenu__title {
		text-align: left;
	}
	.has-gutter {
		line-height: 1.75rem;
	}
	.block {
		margin-top: 3.75rem;
	}
</style>