<template>
	<div class="xfys">
		<el-main>
			<el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="小区名">
              <el-input></el-input>
            </el-form-item>
				<el-form-item label="审核结果">
				    <el-select v-model="form.region" placeholder="请选择状态">
				      <el-option label="未审核" value="0"></el-option>
              <el-option label="已通过" value="1"></el-option>
              <el-option label="已驳回" value="1"></el-option>
				    </el-select>
				</el-form-item>
				<el-form-item label="创建时间">
				    <el-date-picker
				      v-model="value13"
				      type="daterange"
				      start-placeholder="开始日期"
				      end-placeholder="结束日期"
				      :default-time="['00:00:00', '23:59:59']">
				    </el-date-picker>
				 </el-form-item>
				<el-form-item>
				    <el-button type="primary" @click="onSubmit">查询</el-button>
				</el-form-item>
			</el-form>
			<el-table
			    :data="tableData2"
          style="width: 94%;"
          border>
			    <el-table-column
			      prop="name"
			      label="房东姓名">
          </el-table-column>
          <el-table-column
			      prop="phone"
			      label="电话">
          </el-table-column>
          <el-table-column
			      prop="shequ"
			      label="社区">
          </el-table-column>
          <el-table-column
			      prop="address"
			      label="地址">
          </el-table-column>
          <el-table-column
			      prop="Pj"
            label="评级">
            <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                    <el-rate
                    v-model="scope.row.Pj"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                  </el-rate>
                  <div slot="reference" class="name-wrapper">
                    <el-tag type="warning" size="medium">{{ scope.row.Pj }}星</el-tag>
                  </div>
                </el-popover>
              </template>
          </el-table-column>
          <el-table-column
			      prop="cjr"
			      label="预审员">
          </el-table-column>
          <el-table-column
			      prop="shr"
			      label="审核人">
          </el-table-column>
          <el-table-column
			      prop="state"
			      label="状态">
          </el-table-column>
          <el-table-column
			      prop="cjTime"
			      label="创建时间">
			    </el-table-column>
			    <el-table-column
			      prop="xgTime"
            label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
            </template>
          </el-table-column>
			    </el-table-column>
      </el-table>
      <div class="block" >
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
	</div>
		
	
</template>  
  
<script>  
export default {  
  name: 'home',  
  data () {  
    return {  
      	imageUrl: '',
      	value13: [],
      	form: {
	        name: '',
	        region: '',
	        type: [],
        },
        currentPage4: 1,
        tableData2: [{
          cjTime: '2018-07-22 10:35',
          xgTime: '2016-05-02 14:00',
          name: '董志龙',
          phone: '13453738166',
          shequ: '杨家牌楼社区',
          address: ' 杨家牌楼301号501室',
          cjr: '朱强',
          shr: '姚俊健',
          state: '已审核',
          jg: '审核中',
          Pj: '3'
        }, 
        {
          cjTime: '2018-07-21 11:35',
          xgTime: '2016-05-02 14:00',
          name: '顾超',
          phone: '18868723596',
          shequ: '东岳社区',
          address: ' 西湖家园22幢3单元302室',
          cjr: '周龙',
          shr: '王虎',
          state: '已审核',
          jg: '审核完',
          Pj: '2'
        }, {
          cjTime: '2018-07-20 13:00',
          xgTime: '2016-05-02 14:00',
          name: '翟媛媛',
          phone: '13393652131',
          shequ: '留下社区',
          address: ' 茶市新村20幢1单元401室',
          cjr: '赵强',
          shr: '姚俊健',
          state: '已审核',
          jg: '审核完',
          Pj: '5'
        }, {
          cjTime: '2018-07-20 09:00',
          xgTime: '2016-05-02 14:00',
          name: '李树生',
          phone: '15568312634',
          shequ: '留下社区',
          address: ' 留和家苑15幢2单元302室',
          cjr: '朱强',
          shr: '姚俊健',
          state: '已审核',
          jg: '审核中',
          Pj: '2'
        },{
          cjTime: '2018-07-15 10:00',
          xgTime: '2016-05-02 14:00',
          name: '中鹏',
          phone: '13356423896',
          shequ: '东岳社区',
          address: '  西湖家园40幢6单元502室',
          cjr: '朱强',
          shr: '姚俊健',
          state: '已审核',
          jg: '已驳回',
          Pj: '3'
        },{
          cjTime: '2018-07-15 09:35',
          xgTime: '2016-05-02 14:00',
          name: '成飞',
          phone: '15564293596',
          shequ: '杨家牌楼社区',
          address: ' 杨家牌楼305号502室',
          cjr: '朱强',
          shr: '姚俊健',
          state: '已审核',
          jg: '已通过',
          Pj: '4'
        }
      ]
    }  
  },
  methods: {
    handleClick(row) {
      this.$router.push({path: '/Dpxq',query:{id:row.Pj}});
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    onSubmit() {
      console.log('submit!');
    },
  }
}  
</script>  

<style scoped>
.el-main {
	width: 100%;
	height: 100%;
  margin-top: 1.125rem;
  padding-top: 0;
  padding-bottom: 14.25rem;
  background-color: #fff;
}
.xfys .el-form {
  padding: 0;
  height: 100px;
  line-height: 100px;
  text-align: left;
  display: block;
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
  .is-leaf > div {
  	text-align: center;
  }
</style>