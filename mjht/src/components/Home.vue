<template>  
	<div class="center">
		<Left></Left>
	</div>
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
  html,body,#app {height: 100%;}
  .el-container {
		width: 100%;
  	height: 100%;
  }
.center {
	width: 100%;
	height: 100%;
}
.cell {
	text-align: center;
}
.el-form {
	display: inline-block;
}

</style>