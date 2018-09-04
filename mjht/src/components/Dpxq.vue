<template>
  <div class="Xq">
    <el-row class="warp">
			<el-col :span="24" class="warp-breadcrum">
				<span style="font-size: 28px;font-weight: bold">
					房屋消防详情
				</span>
				<span class="star">
						<el-rate
						v-model="starId"
						disabled
						show-score
						text-color="#ff9900"
						score-template="{value}">
					</el-rate>
				</span>
			</el-col>
			<el-col :span="8" class="pad">
				<div class="grid-content bg-purple xqtit">房屋信息</div>
				<el-row>
					<el-col :span="4"><div class="grid-content bg-purple">房东：</div></el-col>
					<el-col :span="8"><div class="grid-content bg-purple-light right">董志龙</div></el-col>
					<el-col :span="4"><div class="grid-content bg-purple">审核人：</div></el-col>
					<el-col :span="8"><div class="grid-content bg-purple-light right">姚俊健</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="4"><div class="grid-content bg-purple">房东电话：</div></el-col>
					<el-col :span="8"><div class="grid-content bg-purple-light right">18868723596</div></el-col>
					<el-col :span="5"><div class="grid-content bg-purple" style="width: 6.125rem">审核人电话：</div></el-col>
					<el-col :span="6"><div class="grid-content bg-purple-light right">13453738166</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="4"><div class="grid-content bg-purple">所属社区：</div></el-col>
					<el-col :span="8"><div class="grid-content bg-purple-light right">嘉绿社区</div></el-col>
					<el-col :span="4"><div class="grid-content bg-purple">提交日期：</div></el-col>
					<el-col :span="8"><div class="grid-content bg-purple-light right">2016-05-02 10:35</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="4"><div class="grid-content bg-purple">地址：</div></el-col>
					<el-col :span="8"><div class="grid-content bg-purple-light right">嘉绿西苑40幢6单元502室</div></el-col>
				</el-row>
			</el-col>
			<el-col :span="8" class="pad">
				<div class="grid-content bg-purple xqtit">消防信息</div>
				<el-row>
					<el-col :span="5"><div class="grid-content bg-purple">消防器材：</div></el-col>
					<el-col :span="19"><div class="grid-content bg-purple right">
							<el-checkbox-group 
							v-model="checkedCities1">
							<el-checkbox style="margin-left: 0;" v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
						</el-checkbox-group>
					</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="5"><div class="grid-content bg-purple">消防图片：</div></el-col>
					<el-col :span="19"><div class="grid-content bg-purple right">
							<el-card v-for="(item, index) in items" :key="item.index" :body-style="{ padding: '0px' }">
								<img v-bind:src="item.url" @click="select(index)" :class="{big: index===selectIndex}"/>
							</el-card>
					</div></el-col>
				</el-row>
			</el-col>
			<el-col :span="8" class="padl">
				<div class="grid-content bg-purple xqtit">治安信息</div>
				<el-row>
					<el-col :span="4"><div class="grid-content bg-purple">是否危房：</div></el-col>
					<el-col :span="8"><div class="grid-content bg-purple-light right">否</div></el-col>
					<el-col :span="4"><div class="grid-content bg-purple">门窗：</div></el-col>
					<el-col :span="8"><div class="grid-content bg-purple-light right">完好</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="4"><div class="grid-content bg-purple">电路：</div></el-col>
					<el-col :span="8"><div class="grid-content bg-purple-light right">规范</div></el-col>
					<el-col :span="4"><div class="grid-content bg-purple">电动车：</div></el-col>
					<el-col :span="8"><div class="grid-content bg-purple-light right">停放规范</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="4"><div class="grid-content bg-purple">治安图片：</div></el-col>
					<el-col :span="19"><div class="grid-content bg-purple right">
						<el-card v-for="(item, index) in items2" :key="item.index" :body-style="{ padding: '0px' }">
							<img v-bind:src="item.url" @click="select1(index)" :class="{big1: index===selectIndex1}"/>
						</el-card>
						</div>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
		<el-row class="btn">
			<!-- <el-col :span="24">
				<div class="grid-content bg-purple-dark">
					<el-button class="Btn" type="success" @click="Pass">通过</el-button>
					<el-button class="Btn" type="danger"  @click="NO">驳回</el-button>
				</div>
			</el-col> -->
		</el-row>
  </div>
</template>

<script>
	const cityOptions = ['1kg干粉灭火器', '30型防毒面具', '20米逃生绳', '多功能安全手电', '防滑手套', '烟感设备'];
  export default {
    data() {
      return {
				starId: '',
      	checkedCities1: ['1kg干粉灭火器', '30型防毒面具', '20米逃生绳', '烟感设备'],
				cities: cityOptions,
				items:[
					{url: require("../style/img/xf1.jpg")},
					{url: require("../style/img/xf2.jpg")},
					{url: require("../style/img/xf3.jpg")}
				],
				items2:[
					{url: require("../style/img/za1.jpg")},
					{url: require("../style/img/za2.jpg")}
				],
				selectIndex: undefined,
				selectIndex1: undefined,
      }
    },
    computed: {
      
    },
    mounted() {
      //初始化
    },
    created(){
				this.starId = this.$route.query.id
		},
    methods: {
			select(index) {
				this.selectIndex = this.selectIndex === index ? undefined : index
			},
			select1(index) {
				console.log(index)
				this.selectIndex1 = this.selectIndex1 === index ? undefined : index
			},
			Pass() {
				this.$message({
          message: '已通过审核',
          type: 'success'
        });
			},
			NO() {
				this.$prompt('请输入原因', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '已成功驳回'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
			}
		},
		components: {

		}
  }
</script>
<style>
	.Xq {
		width: 97%;
		height: 100%;
		margin: 2.25rem auto;
		background-color: #ffffff;
		padding-bottom: 18.25rem;
	}
	.warp-breadcrum {
		height: 6.25rem;
		line-height: 6.25rem;
		margin-bottom: 4rem;
	}
	.warp .el-row {
		margin: 3.125rem auto;
	}
	.xqtit {
		font-size: 18px;
		font-weight: bold;
		text-align: center；
	}
	.el-col-4 > .grid-content,.el-col-6 > .grid-content, .right {
		text-align: left;
	}
	.pad {
		padding: 0 1.15rem 0 2.15rem;
		border-right: 2px solid #ccc;
		height: 22.5rem;
	}
	.padl {
		padding: 0 1.15rem 0 2.15rem;
	}
	.el-checkbox {
		width: 124px;
		margin-left: 0;
		margin-right: 2.875rem;
	}
	.checkbox {
		margin-left: 0;
	}
	.warp .el-card {
		width: 5rem;
		height: 5rem;
		margin-right: 1.875rem;
		display: inline-block;
	}
	.warp .el-card  img {
		width: 5rem;
		height: 5rem;
	}
	img{
		transition: all .5s linear;
		transform: scale(1);
	}
	.big{
		transform: scale(5);/*图片需要放大3倍*/
		position: absolute;/*是相对于前面的容器定位的，此处要放大的图片，不能使用position：relative；以及float，否则会导致z-index无效*/
		z-index: 100;
	} 
	.big1{
		transform: scale(5);/*图片需要放大3倍*/
		position: absolute;/*是相对于前面的容器定位的，此处要放大的图片，不能使用position：relative；以及float，否则会导致z-index无效*/
		z-index: 100;
	}
	.btn {
		margin-top: 5.125rem;
	}
	.Btn {
		width: 8.875rem;
    height: 3.125rem;
		font-size: 18px;
	}
</style>