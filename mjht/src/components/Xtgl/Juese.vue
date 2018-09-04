<template>
    <div class="juese">
      <el-main>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="角色名">
          <el-input></el-input>
          </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="success" @click="onAdd">新增</el-button>
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
          prop="nickName"
          label="角色名">
        </el-table-column>
        <el-table-column
          prop="name"
          label="描述">
        </el-table-column>
        <el-table-column
          prop="jg"
          label="状态"
          width="280">
          <template slot-scope="scope">
            <el-tag type="success">正常</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="250">
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
          :page-size="3"
          layout="total, sizes, prev, pager, next, jumper"
          :total="3">
        </el-pagination>
        </div>
      </el-main>

      <el-dialog title="新增角色" :visible.sync="dialogFormVisible" center>
        <el-form class="Form" :rules="rules" :model="form" ref="form">
          <el-form-item label="角色" prop="nickName">
            <el-input v-model="form.nickName"></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item size="mini" label="授权">
							<el-tree
							:data="data2"
							show-checkbox
							node-key="id"
							:default-expanded-keys="[1, 2, 3, 4, 41, 42, 43]"
							:default-checked-keys="[5]"
							:props="defaultProps">
						</el-tree>
					</el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="修改角色" :visible.sync="Xgry" center>
        <el-form class="Form" :model="form1">
          <el-form-item label="角色" prop="nickName">
            <el-input v-model="form1.nickName"></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="name">
            <el-input v-model="form1.name"></el-input>
          </el-form-item>
          <el-form-item size="mini" label="授权">
							<el-tree
							:data="data2"
							show-checkbox
							node-key="id"
							:default-expanded-keys="[1, 2, 3, 4, 41, 42, 43]"
							:default-checked-keys="[5]"
							:props="defaultProps">
						</el-tree>
					</el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="Xgry = false">取 消</el-button>
          <el-button type="primary" @click="Xgry = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    
  </template>  
    
  <script>  
    export default {  
    name: 'home',  
    data () {  
      return {
				data2: [{
          id: 1,
          label: '系统管理',
          children: [{
            id: 4,
            label: '管理员列表',
            children: [{
              id: 9,
              label: '查看'
            }, {
              id: 10,
              label: '新增'
            },{
              id: 11,
              label: '删除'
            },{
              id: 12,
              label: '修改'
            }]
					},{
            id: 41,
            label: '角色列表',
            children: [{
              id: 9,
              label: '查看'
            }, {
              id: 10,
              label: '新增'
            },{
              id: 11,
              label: '删除'
            },{
              id: 12,
              label: '修改'
            }]
					},{
            id: 42,
            label: '菜单列表',
            children: [{
              id: 9,
              label: '查看'
            }, {
              id: 10,
              label: '新增'
            },{
              id: 11,
              label: '删除'
            },{
              id: 12,
              label: '修改'
            }]
					},
				]
        }, {
            id: 2,
            label: '社区管理',
            children: [{
              id: 9,
              label: '查看'
            }, {
              id: 10,
              label: '新增'
            },{
              id: 11,
              label: '删除'
            },{
              id: 12,
              label: '修改'
            }]
					}, {
            id: 3,
            label: '小区管理',
            children: [{
              id: 9,
              label: '查看'
            }, {
              id: 10,
              label: '新增'
            },{
              id: 11,
              label: '删除'
            },{
              id: 12,
              label: '修改'
            }]
					},],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        Xgry: false,
        dialogFormVisible: false,
        CL: true,  
        imageUrl: '',
        value13: [],
        form: {
          nickName: '',
          name: '',
          phone: '',
          jueS: '',
          password: '',
          address: ''
        },
        form1: {},
        currentPage4: 1,
        tableData2: [{
        nickName: '街道管理员',
        name: '超级管理员',
        tody: 0,
        }, 
        {
        nickName: '一级管理员',
        name: '姚俊健',
        tody: 1,
        }, {
        nickName: '二级管理员',
        name: '顾超',
        tody: 2,
        }
      ],
      rules: {
          name: [
            { required: true, message: '请输入备注', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          nickName: [
            { required: true, message: '请输入角色', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          
        }
      }  
    },
    methods: {
      handleClick(row) {
        this.Xgry = true;
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
      onAdd() {
        this.dialogFormVisible = true;
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
    padding-bottom: 30.25rem;
    background-color: #fff;
    }
    .juese .el-form {
    height: 100px;
    line-height: 100px;
    text-align: left;
    padding-left: 40px;
    display: block;
    }
    .Form {
      height: 880px;
    }
    .Form .el-form-item {
			margin-right: 3.125rem;
			display: block;
		}
		.Form .el-form-item__content {
			width: 90%;
			float: right;
			right: 20px;
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
      margin: 40px auto;
    }
    .el-table__header-wrapper {
      line-height: 30px;
    }
    .is-leaf > div {
      text-align: center;
    }
  </style>