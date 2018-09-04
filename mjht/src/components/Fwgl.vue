<template>
  <el-main>
      <el-form ref="form" :model="form" style="text-align: left;" label-width="52px">
          <el-form-item>
              <el-select v-model="provinceValue" @change="choseCity" clearable placeholder="请选择省">
                  <el-option
                  v-for="item in province"
                  :key="item.value"
                  :label="item.title"
                  :value="item.value">
                  </el-option>
              </el-select> 
              <el-select v-model="CityValue"  @change="choseBlock" clearable placeholder="请选择市">
                  <el-option
                  v-for="item in city"
                  :key="item.value"
                  :label="item.title"
                  :value="item.value">
                  </el-option>
              </el-select>
                <el-select v-model="blockValue"  clearable placeholder="请选择区">
                  <el-option
                  v-for="item in block"
                  :key="item.value"
                  :label="item.title"
                  :value="item.value">
                  </el-option>
              </el-select>
          </el-form-item> 
          <el-form-item>
        <el-button type="primary" @click="ChaXun" >查询</el-button>
        <el-button type="success" @click="onAdd" style="margin-left:60px">新增</el-button>
    </el-form-item>
  </el-form>
      <el-table :data="tableData" style="width: 94%;margin: .625rem auto" border>
          <el-table-column
              prop="title"
              label="地址">
          </el-table-column>
          <el-table-column
              prop="departType"
              label="户型">
          </el-table-column>
          <el-table-column
              prop="payType"
              label="支付方式">
          </el-table-column>
          <el-table-column
              prop="towards"
              label="朝向">
          </el-table-column>
          <el-table-column
              prop="floorArea"
              label="面积">
          </el-table-column>
          <el-table-column
              prop="bathroomType"
              label="卫浴">
          </el-table-column>
          <el-table-column
              prop="id"
              label="房屋编号">
          </el-table-column>
          <el-table-column
              prop="status.title"
              label="状态">
          </el-table-column>
          <el-table-column
              prop="rent"
              label="租金">
          </el-table-column>
          <el-table-column
              label="操作">
              <template slot-scope="scope">
                  <el-button icon="el-icon-edit" type="text" @click="jump(scope.row)">查看
                      <!-- <router-link to="HouseXQ" style="color: #409EFF;">查看</router-link> -->
                  </el-button>
        </template>
          </el-table-column>
      </el-table>
      <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount">
      </el-pagination>

      <!-- 新增房屋 -->
    <el-dialog title="新增房屋" :close-on-click-modal="false" :visible.sync="dialogFormVisible" center>
            <el-form class="Form" :rules="rules" :model="addPersonForm" ref="addPersonForm">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="addPersonForm.name"></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="phone">
                <el-input v-model="addPersonForm.phone"></el-input>
              </el-form-item>
              <el-form-item label="身份证" prop="IdCard">
                <el-input v-model="addPersonForm.IdCard"></el-input>
              </el-form-item>
              <el-form-item label="房屋地址" prop="houseAdress">
                <el-input v-model="addPersonForm.houseAdress"></el-input>
              </el-form-item>
              <el-form-item label="社区" prop="community">
                <el-select style="width:202px" v-model="addPersonForm.community" placeholder="请选择社区">
                  <el-option label="屏峰社区" value="屏峰社区"></el-option>
                  <el-option label="杨家牌楼社区" value="杨家牌楼社区"></el-option>
                  <el-option label="东岳社区" value="东岳社区"></el-option>
                  <el-option label="留下社区" value="留下社区"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="所属小区" prop="area">
                <el-select style="width:202px" v-model="addPersonForm.area" placeholder="请选择所属小区">
                  <el-option label="屏峰新村" value="屏峰新村"></el-option>
                  <el-option label="西溪佳苑" value="西溪佳苑"></el-option>
                  <el-option label="西湖家园" value="西湖家园"></el-option>
                  <el-option label="留和家苑" value="留和家苑"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="submitForm('addPersonForm')">确 定</el-button>
            </div>
          </el-dialog>
  </el-main>
</template>
<script>
  export default {
    data(){
        return{
            dialogFormVisible: false,
            // 三级联动表单
        form: {
                value:3301
            },
            addPersonForm: {
                name: "",
                phone: "",
                IdCard: "",
                houseAdress: "",
                community: "",
                area: ""
            },
            province:[],
            provinceValue: "",
            city:[],
            CityValue:"",
            block:[],
            blockValue:"",
            tableData:[],//table列表
            totalCount:0,
            currentPage:1,
            pageSize:10, 
            rules: {
                name: [
                { required: true, message: "请输入姓名", trigger: "blur" },
                { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
                ],
                phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
                IdCard: [
                { required: true, message: "请输入身份证", trigger: "blur" },
                { min: 18, max: 18, message: "长度为 18 位", trigger: "blur" }
                ],
                houseAdress: [
                { required: true, message: "请输入房屋地址", trigger: "blur" }
                ],
                community: [
                { required: true, message: "请选择社区", trigger: "change" }
                ],
                area: [{ required: true, message: "请选择所属小区", trigger: "change" }]
            }
        }
    },
    created(){
        var data = {
            "pageCount":this.currentPage,
            "pageSize":this.pageSize,
            "city":this.form
        }
        this.list(data)   
        this.area() 
    },
    methods:{
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
        // 获取省代码
        area() {
            this.axios({
                url:"pub/area",
                method:'post',
                data:{"value":0}
            })
            .then((data) => {
                if(data.data.resultCode==1000){
                    this.province = data.data.resultData;
                }
            })
            .catch(function(err){
            console.log("获取省列表失败");
            console.log(err)
        })
        },
        // 获取市代码
        choseCity(CityValue){
            this.axios({
                url:"pub/area",
                method:'post',
                data:{"value":this.provinceValue}
            })
            .then((data) => {
                if(data.data.resultCode==1000){
                    this.city = data.data.resultData;
                }
            })
            .catch(function(err){
            console.log("获取市列表失败");
            console.log(err)
        })
        },
        // 获取区代码
        choseBlock(){
            this.axios({
                url:"pub/area",
                method:'post',
                data:{"value":this.CityValue}
            })
            .then((data) => {
                if(data.data.resultCode==1000){
                    this.block = data.data.resultData;
                }
            })
            .catch(function(err){
            console.log("获取市列表失败");
            console.log(err)
        })
        },
        // 房屋列表
        list(data){
            var _this = this;
            this.axios({
                url:"house/queryallstatus",
                method:'post',
                data:data
            })
            .then((data)=>{
                if(data.data.resultCode==1000){
                    this.tableData = data.data.resultData.apartments;
                    this.totalCount = Number(data.data.resultData.num);
                }
            })
            .catch(function(err){
                console.log("失败")
            })
        },
        // 翻页
        handleCurrentChange(currentPage) {
            this.currentPage = currentPage;
              var data = {
                "pageCount":this.currentPage,
                "pageSize":this.pageSize,
                "city":this.form
            }
            this.list(data);
        },
        // 查询
        ChaXun(){
            var code = (this.provinceValue|this.CityValue|this.blockValue);
            var data = {
                "pageCount":this.currentPage,
                "pageSize":this.pageSize,
                "city":{value: code}
            }
            this.list(data)
        },
        // 携带参数跳转房屋详情
        jump(row){
            this.$router.push({path: '/Fwxq',query:{id:row.id}});
            console.log(row.id)
        },
        onAdd() {
        this.dialogFormVisible = true;
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
    padding-bottom: 8.25rem;
    background-color: #fff;
  }
  .el-form {
    padding: 0;
    height: 100px;
    line-height: 100px;
    text-align: left;
  }
  .el-form-item {
    display: inline-block;
  }
  .el-form {
      width: 100%;    
  }
  .el-form-item {
      display: inline-block;
      margin-bottom: 22px;
  }
  .el-select {
      width: 165px;
  }
    /* 分页 */
  .el-pagination {
      position: relative;
      right: 0;
      padding-top: 60px;
      left: 0;
      text-align: center;
  }
  .el-pager li, .el-pagination button:disabled, .el-pagination .btn-next, .el-pagination .btn-prev{
      background-color: #E9EEF3;
  }
  .Form {
  height: 224px;
  width: 790px;
  margin: 0 auto;
  text-align: left;
}
.Form .el-form-item {
  margin-right: 3.125rem;
}
</style>

