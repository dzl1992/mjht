<template>
  <div class="Xqgl">
    <el-main>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="小区名">
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
        show-overflow-tooltip
        width="55">
      </el-table-column>
      <el-table-column
        prop="tody"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="name"
        label="小区名">
      </el-table-column>
      <el-table-column
        prop="cjr"
        label="总栋数">
      </el-table-column>
      <el-table-column
        prop="shequ"
        label="所属社区">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="jg"
        label="物业公司">
      </el-table-column>
      <el-table-column
        prop="cjTime"
        label="建造时间">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
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
    <el-dialog title="新增小区" :visible.sync="dialogFormVisible" center>
      <el-form class="Form" :rules="rules" :model="form" ref="form" style="height: 12.5rem">
        <el-form-item label="小区名" prop="nickName">
          <el-input v-model="form.shequ" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="总栋数"  prop="name">
          <el-input v-model="form.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="phone">
          <el-input v-model="form.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="物业公司" prop="password">
          <el-input v-model="form.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属社区" prop="address">
          <el-select v-model="form.address" placeholder="请选择所属社区">
            <el-option label="东岳社区" value="330106009001"></el-option>
            <el-option label="茶市街社区" value="330106009002"></el-option>
            <el-option label="屏峰社区" value="330106009003"></el-option>
            <el-option label="留下社区" value="330106009004"></el-option>
            <el-option label="小和山社区" value="330106009005"></el-option>
            <el-option label="横街社区" value="330106009006"></el-option>
            <el-option label="杨家牌楼社区" value="330106009007"></el-option>
            <el-option label="金鱼井社区" value="330106009008"></el-option>
            <el-option label="西穆坞社区" value="330106009009"></el-option>
            <el-option label="翰墨香林社区" value="330106009010"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="建造时间" prop="jueS">
            <el-date-picker
            v-model="form.time"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
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
      currentPage4: 1,
      tableData2: [{
      cjTime: '2001-05',
      xgTime: '2016-05-02 14:00',
      name: '西溪晴雪',
      phone: '330102010061',
      shequ: '留下社区',
      address: '天目山路西',
      cjr: 20,
      shr: '姚俊健',
      state: '异常',
      jg: '海陆物业',
      tody: 3,
      cl: true
      }, 
      {
      cjTime: '1999-03',
      xgTime: '2016-05-02 14:00',
      name: '茶市新村',
      phone: '330102010061',
      shequ: '留下社区',
      address: '留下街道5号',
      cjr: 18,
      shr: '王虎',
      state: '异常',
      jg: '海陆物业',
      tody: 5,
      cl: true
      }, {
      cjTime: '2001-09',
      xgTime: '2016-05-02 14:00',
      name: '安乐新村',
      phone: '330102010061',
      shequ: '留下社区',
      address: '留下大街55号',
      cjr: 36,
      shr: '姚俊健',
      state: '异常',
      jg: '钱塘物业',
      tody: 7,
      cl: true
      }, {
      cjTime: '2002-06',
      xgTime: '2016-05-02 14:00',
      name: '留下西苑',
      phone: '330102010061',
      shequ: '留下社区',
      address: '西溪路',
      cjr: 18,
      shr: '姚俊健',
      state: '异常',
      jg: '绿城物业',
      tody: 6,
      cl: false
      },{
      cjTime: '2001-08',
      xgTime: '2016-05-02 14:00',
      name: '钱潮花园',
      phone: '330102010061',
      shequ: '留下社区',
      address: '天目山路515号',
      cjr: 16,
      shr: '姚俊健',
      state: '异常',
      jg: '海陆物业',
      tody: 10,
      cl: false
      },{
      cjTime: '2001-05',
      xgTime: '2016-05-02 14:00',
      name: '西溪梅园',
      phone: '330102010061',
      shequ: '留下社区',
      address: '西溪路925号',
      cjr: 18,
      shr: '姚俊健',
      state: '异常',
      jg: '钱塘物业',
      tody: 8,
      cl: true
      }
    ],
    rules: {
          name: [
            { required: true, message: '请输入小区总栋数', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          nickName: [
            { required: true, message: '请输入小区名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入小区地址', trigger: 'blur' }
          ],
          jueS: [
            {  type: 'date', required: true, message: '请选择小区建造时间', trigger: 'change' }
          ],
          password: [
            { required: true, message: '请输入小区物业公司名称', trigger: 'blur' }
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
  .Xqgl .el-form {
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