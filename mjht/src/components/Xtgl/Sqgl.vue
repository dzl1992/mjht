<template>
	<div class="Sqgl">
		<el-main>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="社区名">
				<el-input></el-input>
				</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">查询</el-button>
			</el-form-item>
		</el-form>
		<el-table
			:data="tableData2"
			style="width: 92%;"
			border>
			<el-table-column
				type="selection"
				width="55">
			</el-table-column>
			<el-table-column
				prop="tody"
				label="ID">
			</el-table-column>
			<el-table-column
				prop="phone"
				label="社区编码">
			</el-table-column>
			<el-table-column
				prop="shequ"
				label="社区名">
			</el-table-column>
			<el-table-column
				prop="address"
				label="所属街道">
			</el-table-column>
			<el-table-column
				prop="jg"
				label="所属城市">
			</el-table-column>
			<el-table-column
				label="操作">
				<template slot-scope="scope">
					<el-button  @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
					<el-button  @click="cancleClick(scope.row)" type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage4"
				:page-sizes="[10, 20, 30, 40]"
				:page-size="10"
				layout="total, sizes, prev, pager, next, jumper"
				:total="6">
			</el-pagination>
			</div>
		</el-main>
		<el-dialog title="修改社区" :visible.sync="dialogFormVisible" center>
			<el-form class="Form" :model="form1">
				<el-form-item label="社区名">
					<el-input v-model="form1.shequ" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="社区编码">
					<el-input v-model="form1.phone" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="所属街道" >
					<el-select v-model="form1.address" placeholder="请选择活动区域">
						<el-option label="330102010" value="330102010"></el-option>
						<el-option label="330102011" value="330102011"></el-option>
						<el-option label="330102012" value="330102011"></el-option>
						<el-option label="330102013" value="330102013"></el-option>
						<el-option label="330102014" value="330102014"></el-option>
						<el-option label="330102015" value="330102015"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>
	</div>
	
</template>  
	
<script>  
	export default {  
	name: 'home',  
	data () {  
		return {
			visible2: false,
			dialogFormVisible: false,
			CL: true,  
			imageUrl: '',
			value13: [],
			form: {
			name: '',
			region: '',
			type: [],
			},
			form1: {},
			currentPage4: 4,
			tableData2: [{
			cjTime: '2016-05-02 10:35',
			xgTime: '2016-05-02 14:00',
			name: '王凯',
			phone: '330106009001',
			shequ: '东岳社区',
			address: '330106009',
			cjr: '朱强',
			shr: '姚俊健',
			state: '异常',
			jg: '3301',
			tody: 0,
			cl: true
			}, 
			{
			cjTime: '2016-05-02 10:35',
			xgTime: '2016-05-02 14:00',
			name: '朱强',
			phone: '330106009007',
			shequ: '杨家牌楼社区',
			address: '330106009',
			cjr: '周龙',
			shr: '王虎',
			state: '异常',
			jg: '3301',
			tody: 1,
			cl: true
			}, {
			cjTime: '2016-05-02 10:35',
			xgTime: '2016-05-02 14:00',
			name: '姚俊健',
			phone: '330106009008',
			shequ: '金鱼井社区',
			address: '330106009',
			cjr: '赵强',
			shr: '姚俊健',
			state: '异常',
			jg: '3301',
			tody: 2,
			cl: true
			}, {
			cjTime: '2016-05-02 10:35',
			xgTime: '2016-05-02 14:00',
			name: '李树生',
			phone: '330106009004',
			shequ: '留下社区',
			address: '330106009',
			cjr: '朱强',
			shr: '姚俊健',
			state: '异常',
			jg: '3301',
			tody: 3,
			cl: false
			},{
			cjTime: '2016-05-02 10:35',
			xgTime: '2016-05-02 14:00',
			name: '中鹏',
			phone: '330106009003',
			shequ: '屏峰社区',
			address: '330106009',
			cjr: '朱强',
			shr: '姚俊健',
			state: '异常',
			jg: '3301',
			tody: 4,
			cl: false
			},{
			cjTime: '2016-05-02 10:35',
			xgTime: '2016-05-02 14:00',
			name: '成飞',
			phone: '330106009006',
			shequ: '横街社区',
			address: '330106009',
			cjr: '朱强',
			shr: '姚俊健',
			state: '异常',
			jg: '3301',
			tody: 5,
			cl: true
			}
		]
		}  
	},
	methods: {
		handleClick(row) {
			this.dialogFormVisible = true;
			this.form1 = row
		},
		cancleClick() {
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});          
			});
		},
		handleSizeChange(val) {
		console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
		console.log(`当前页: ${val}`);
		},
		onSubmit() {
		console.log('submit!');
		}
	}
}  
</script>  

<style scoped>
	.el-main {
	width: 100%;
	height: 100%;
	margin-top: 1.125rem;
	padding-top: 0;
	padding-bottom: 18.25rem;
	background-color: #fff;
	}
	.Sqgl .el-form {
	height: 100px;
	line-height: 100px;
	text-align: left;
	padding-left: 40px;
  display: block;
	}
	.Form .el-form-item {
		margin-right: 3.125rem;
	}
	.el-form-item {
	display: inline-block;
	}
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
	.el-table .warning-row {
		background: oldlace;
	}
	
	.el-table .success-row {
		background: #f0f9eb;
	}
	.el-table--enable-row-transition {
		background-color: #E9EEF3;
		margin: 20px auto;
	}
	.el-table__header-wrapper {
		line-height: 30px;
	}
	.is-leaf > div {
		text-align: center;
	}
</style>