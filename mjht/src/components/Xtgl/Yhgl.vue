<template>
    <div class="Gly">
      <el-main>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
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
          label="登录名">
        </el-table-column>
        <el-table-column
          prop="name"
          label="真实姓名">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="shequ"
          label="工号">
        </el-table-column>
        <el-table-column
          prop="address"
          label="角色">
        </el-table-column>
        <el-table-column
          prop="jg"
          label="状态">
          <template slot-scope="scope">
            <el-tag type="success">正常</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="cjTime"
          label="创建时间">
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
          :page-size="6"
          layout="total, sizes, prev, pager, next, jumper"
          :total="6">
        </el-pagination>
        </div>
      </el-main>

      <el-dialog title="新增人员" :visible.sync="dialogFormVisible" center>
        <el-form class="Form" :rules="rules" :model="form" ref="form">
          <el-form-item label="登录名" prop="nickName">
            <el-input v-model="form.nickName"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="角色" prop="jueS">
              <el-select v-model="form.jueS" placeholder="请选择角色">
                <el-option label="社区管理员" value="1"></el-option>
                <el-option label="街道管理员" value="2"></el-option>
                <el-option label="小区管理员" value="3"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="所属社区" prop="address">
              <el-select v-model="form.address" placeholder="请选择所属区域">
                <el-option label="留下社区" value="留下社区"></el-option>
              </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('form')">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="修改人员" :visible.sync="Xgry" center>
        <el-form class="Form" :model="form1">
          <el-form-item label="登录名" prop="nickName">
            <el-input v-model="form1.nickName"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form1.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="form1.phone"></el-input>
          </el-form-item>
          <el-form-item label="角色" prop="jueS">
              <el-select v-model="form1.jueS" placeholder="请选择角色">
                <el-option label="社区管理员" value="1"></el-option>
                <el-option label="街道管理员" value="2"></el-option>
                <el-option label="小区管理员" value="3"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form1.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password">
            <el-input v-model="form1.password"></el-input>
          </el-form-item>
          <el-form-item label="所属社区" prop="address">
              <el-select v-model="form1.addresss1" placeholder="请选择所属区域">
                <el-option label="留下社区" value="留下社区"></el-option>
              </el-select>
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
        cjTime: '2018-05-20',
        nickName: 'admin',
        name: '超级管理员',
        phone: '18868723596',
        shequ: '0',
        address: '超级管理员',
        addresss1:'',
        cjr: 20,
        shr: '姚俊健',
        state: '异常',
        jg: '海陆物业',
        tody: 1,
        cl: true
        }, 
        {
        cjTime: '2018-05-20',
        nickName: 'street',
        name: '姚俊健',
        phone: '13356986231',
        shequ: '1',
        address: '街道管理员',
        addresss1:'',
        cjr: 18,
        shr: '王虎',
        state: '异常',
        jg: '海陆物业',
        tody: 2,
        cl: true
        }, {
        cjTime: '2018-05-20',
        nickName: 'aaa',
        name: '顾超',
        phone: '18862345213',
        shequ: '2',
        address: '社区管理员',
        addresss1:'',
        cjr: 36,
        shr: '姚俊健',
        state: '异常',
        jg: '钱塘物业',
        tody: 3,
        cl: true
        }, {
        cjTime: '2018-05-20',
        nickName: 'bbb',
        name: '张喆',
        phone: '13564896234',
        shequ: '3',
        address: '小区管理员',
        addresss1:'',
        cjr: 18,
        shr: '姚俊健',
        state: '异常',
        jg: '绿城物业',
        tody: 4,
        cl: false
        },{
        cjTime: '2018-05-20',
        nickName: 'ccc',
        name: '翟媛媛',
        phone: '13569213479',
        shequ: '4',
        address: '社区管理员',
        addresss1:'',
        cjr: 16,
        shr: '姚俊健',
        state: '异常',
        jg: '海陆物业',
        tody: 5,
        cl: false
        },{
        cjTime: '2018-05-20',
        nickName: 'ddd',
        name: '董志龙',
        phone: '18665324157',
        shequ: '5',
        address: '街道管理员',
        addresss1:'',
        cjr: 18,
        shr: '姚俊健',
        state: '异常',
        jg: '钱塘物业',
        tody: 6,
        cl: true
        }
      ],
      rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          nickName: [
            { required: true, message: '请输入登录名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          jueS: [
            { required: true, message: '请选择角色', trigger: 'change' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请选择所属社区', trigger: 'change' }
          ]
        }
      }  
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
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
    padding-bottom: 18.25rem;
    background-color: #fff;
    }
    .Gly .el-form {
    height: 100px;
    line-height: 100px;
    text-align: left;
    padding-left: 40px;
    display: block;
    }
    .Form {
      height: 300px;
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