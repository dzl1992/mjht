<template>
    <div class="Xq1">
        <el-main>
            <el-form>
                <el-form-item>
                    <h2>{{houseXQdata.title}}</h2>
                    <div class="Span3">
                        <span>
                            <div class="Span3-TOp">
                                {{houseXQdata.rent}}元/月
                            </div>
                            <div class="Span3-Foot">
                                房租
                            </div>
                        </span>
                        <span>
                            <div class="Span3-TOp">
                                {{departTypeTitle}}
                            </div>
                            <div class="Span3-Foot">
                                户型
                            </div>
                        </span>
                        <span class="rightSpan" style="border-right: none">
                            <div class="Span3-TOp">
                                {{houseXQdata.floorArea}}平米
                            </div>
                            <div class="Span3-Foot">
                                面积
                            </div>
                        </span>
                    </div>
                    <div class="Div4">
                        <!-- 房东信息-->
                        <div class="fouurDiv">
                            <div class="fouurDiv_Tit">
                                <img src="../style/img/Fwgl_true.svg">
                                <span>
                                    房东信息
                                </span>
                                <span class="fouurDiv_Tit-Bj">
                                    <img src="../style/img/bianji.svg"> 编辑
                                </span>
                            </div>
                            <div class="fangDong_Cen">
                                <ul>
                                    <li class="fangDong-Li">姓名： 田鹏天</li>
                                    <li class="fangDong-Li">性别： 男</li>
                                    <li class="fangDong-Li">身份证： 652801199809038470</li>
                                    <li class="fangDong-Li">电话： 13652145874</li>
                                    <li class="clear"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="fouurDiv">
                            <div class="fouurDiv_Tit">
                                <img src="../style/img/Fwgl_true.svg">
                                <span>
                                    房屋详情
                                </span>
                                <span class="fouurDiv_Tit-Bj">
                                    <img src="../style/img/bianji.svg"> 编辑
                                </span>
                            </div>
                            <div class="fouurDiv_Cen">
                                <ul>
                                    <li class="fouurDiv_Cen-Li">装修： {{decorationTitle}}</li>
                                    <li class="fouurDiv_Cen-Li">朝向： {{towardsTitle}}</li>
                                    <li class="fouurDiv_Cen-Li">楼层： {{houseXQdata.floorNumber}}/{{houseXQdata.floorArea}}</li>
                                    <li class="fouurDiv_Cen-Li">年代： {{houseXQdata.constructionTime}}</li>
                                    <!-- <li class="fouurDiv_Cen-Li">厨卫： {{kitchenTypeTitle}}、{{bathroomTypeTitle}}</li> -->
                                    <li class="fouurDiv_Cen-Li">电梯： {{elevatorTitle}}</li>
                                    <!-- <li class="fouurDiv_Cen-Li">发布时间： {{houseXQdata.releaseTime}}</li> -->
                                    <li class="clear"></li>
                                </ul>
                                <!-- 房屋图片 -->
                                <ul id="images" style="float: left;">
                                    <li class="fouurDiv_Cen-Li3">
                                        <img v-bind:src="URL+item.key" v-for="item in housePictures" :key="item.index" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 房屋配置 -->
                        <div class="fouurDiv">
                            <div class="fouurDiv_Tit">
                                <img src="../style/img/fwpz.png">
                                <span>
                                    房屋配置
                                </span>
                                <span class="fouurDiv_Tit-Bj">
                                    <img src="../style/img/bianji.svg"> 编辑
                                </span>
                            </div>
                            <div class="fouurDiv_Cen">
                                <ul>
                                    <li class="fouurDiv_Cen-Li2">
                                        <div class="xuan-group">
                                            <el-checkbox v-model="KTchecked" id="KT" class="checked" value="10011"></el-checkbox>
                                            <img src="../style/img/KT.png">空调
                                        </div>
                                    </li>
                                    <li class="fouurDiv_Cen-Li2">
                                        <div class="xuan-group">
                                            <el-checkbox v-model="xyjchecked" id="xyj" class="checked" value="10012"></el-checkbox>
                                            <img src="../style/img/xyj.png">洗衣机
                                        </div>
                                    </li>
                                    <li class="fouurDiv_Cen-Li2">
                                        <div class="xuan-group">
                                            <el-checkbox v-model="bxchecked" id="bx" class="checked" value="10013"></el-checkbox>
                                            <img src="../style/img/bx.png">冰箱
                                        </div>
                                    </li>
                                    <li class="fouurDiv_Cen-Li2">
                                        <div class="xuan-group">
                                            <el-checkbox v-model="dianshijichecked" id="dianshiji" class="checked" value="10014"></el-checkbox>
                                            <img src="../style/img/dianshiji.png">电视机
                                        </div>
                                    </li>
                                    <li class="fouurDiv_Cen-Li2">
                                        <div class="xuan-group">
                                            <el-checkbox v-model="rsqchecked" id="rsq" class="checked" value="10015"></el-checkbox>
                                            <img src="../style/img/rsq.png">热水器
                                        </div>
                                    </li>
                                    <li class="fouurDiv_Cen-Li2">
                                        <div class="xuan-group">
                                            <el-checkbox v-model="kuandaichecked" id="kuandai" class="checked" value="10016"></el-checkbox>
                                            <img src="../style/img/kuandai.png">宽带
                                        </div>
                                    </li>
                                    <li class="fouurDiv_Cen-Li2">
                                        <div class="xuan-group">
                                            <el-checkbox v-model="trqchecked" id="trq" class="checked" value="10017"></el-checkbox>
                                            <img src="../style/img/trq.png">天然气
                                        </div>
                                    </li>

                                    <li class="fouurDiv_Cen-Li2">
                                        <div class="xuan-group">
                                            <el-checkbox v-model="chuangchecked" id="chuang" class="checked" value="10021"></el-checkbox>
                                            <img src="../style/img/chuang.png">床
                                        </div>
                                    </li>
                                    <li class="fouurDiv_Cen-Li2">
                                        <div class="xuan-group">
                                            <el-checkbox v-model="yiguichecked" id="yigui" class="checked" value="10022"></el-checkbox>
                                            <img src="../style/img/yigui.png">衣柜
                                        </div>
                                    </li>
                                    <li class="fouurDiv_Cen-Li2">
                                        <div class="xuan-group">
                                            <el-checkbox v-model="shuzhuochecked" id="shuzhuo" class="checked" value="10023"></el-checkbox>
                                            <img src="../style/img/shuzhuo.png">书桌
                                        </div>
                                    </li>
                                    <li class="fouurDiv_Cen-Li2">
                                        <div class="xuan-group">
                                            <el-checkbox v-model="yizichecked" id="yizi" class="checked" value="10024"></el-checkbox>
                                            <img src="../style/img/yizi.png">椅子
                                        </div>
                                    </li>
                                    <li class="fouurDiv_Cen-Li2">
                                        <div class="xuan-group">
                                            <el-checkbox v-model="ctgchecked" id="ctg" class="checked" value="10025"></el-checkbox>
                                            <img src="../style/img/ctg.png">床头柜
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 房源介绍 -->
                        <div class="fouurDiv">
                            <div class="fouurDiv_Tit">
                                <img src="../style/img/fyjs.png">
                                <span>
                                    房源介绍
                                </span>
                                <span class="fouurDiv_Tit-Bj">
                                    <img src="../style/img/bianji.svg"> 编辑
                                </span>
                            </div>
                            <div class="fouurDiv_Cen3">
                                {{houseXQdata.intro}}
                            </div>
                        </div>
                    </div>
                </el-form-item>
            </el-form>
        </el-main>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                houseId: "",
                houseXQdata: "",
                departTypeTitle: "",//户型
                decorationTitle: "",//装修
                towardsTitle: "",//朝向
                kitchenTypeTitle: "",//厨房
                bathroomTypeTitle: "",//卫生间
                elevatorTitle: "",//电梯
                housePictures: [],//房屋照片
                URL: "https://gou.goucaiyun.net/",
                // 房屋配置复选
                electric: [],//家电
                furniture: [],//家具
                KTchecked: false,
                xyjchecked: false,
                bxchecked: false,
                dianshijichecked: false,
                rsqchecked: false,
                kuandaichecked: false,
                trqchecked: false,
                chuangchecked: false,
                yiguichecked: false,
                shuzhuochecked: false,
                yizichecked: false,
                ctgchecked: false,
                landlords: [],//房东列表
                renters: [],//房客列表
            }
        },
        created() {
            this.houseId = this.$route.query.id
            this.houseXQ();
        },
        methods: {
            houseXQ() {
                var data = {
                    "id": parseInt(this.houseId)
                }
                this.axios({
                    url: "house/detail",
                    method: 'post',
                    data: data
                })
                    .then((data) => {
                        if (data.data.resultCode == 1000) {
                            this.houseXQdata = data.data.resultData;
                            this.departTypeTitle = data.data.resultData.departType.title;
                            this.decorationTitle = data.data.resultData.decoration.title;
                            this.towardsTitle = data.data.resultData.towards.title;
                            this.decorationTitle = data.data.resultData.decoration.title;
                            this.kitchenTypeTitle = data.data.resultData.kitchenType.title;
                            this.bathroomTypeTitle = data.data.resultData.bathroomType.title;
                            this.elevatorTitle = data.data.resultData.elevator.title;
                            this.housePictures = data.data.resultData.pictures;
                            this.electric = data.data.resultData.electric;//家电
                            this.furniture = data.data.resultData.furniture;//家具
                            for (var i = 0; i < this.electric.length; i++) {//家电
                                if (this.electric[i].value == 10011) {
                                    this.KTchecked = true;
                                } else if (this.electric[i].value == 10012) {
                                    this.xyjchecked = true;
                                } else if (this.electric[i].value == 10013) {
                                    this.bxchecked = true;
                                } else if (this.electric[i].value == 10014) {
                                    this.dianshijichecked = true;
                                } else if (this.electric[i].value == 10015) {
                                    this.rsqchecked = true;
                                } else if (this.electric[i].value == 10016) {
                                    this.kuandaichecked = true;
                                } else if (this.electric[i].value == 10017) {
                                    this.trqchecked = true;
                                }
                            }
                            for (var i = 0; i < this.furniture.length; i++) {//家具
                                if (this.furniture[i].value == 10021) {
                                    this.chuangchecked = true;
                                } else if (this.furniture[i].value == 10022) {
                                    this.yiguichecked = true;
                                } else if (this.furniture[i].value == 10023) {
                                    this.shuzhuochecked = true;
                                } else if (this.furniture[i].value == 10024) {
                                    this.yizichecked = true;
                                } else if (this.furniture[i].value == 10025) {
                                    this.ctgchecked = true;
                                }
                            }
                        }
                    })
                    .catch(function (err) {
                        console.log("失败")
                    })
            },
        }
    }
</script>
<style scoped>
    .Xq1 {
        margin-top: 1.25rem
    }

    .el-main {
        padding: 0;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .el-form {
        display: inline-block;
        height: 100%;
        background-color: #fff;
        width: 100%;
        padding: 58px 0 100px 0;
        text-align: center;
    }

    .el-form h2 {
        margin: 0;
    }

    .Span3 {
        margin-top: 42px;
        display: inline-block;
        height: 100px;
        background-color: #fffcf9;
        border: 1px solid #ffdfc0;
    }

    .Span3>span {
        display: inline-block;
        width: 22.5rem;
        height: 60px;
        border-right: 1px solid #FFDFC0;
        margin-top: 20px;
        text-align: center;
    }

    .Span3-TOp {
        font-size: 20px;
        color: #FF3333;
        font-weight: bold;
        height: 28px;
    }

    .Span3-Foot {
        font-size: 16px;
        color: #333333;
        margin-top: 6px;
    }

    .Div4 {
        margin-top: 3.625rem;
        display: inline-block;
        width: 67%;
    }

    .fouurDiv {
        width: 31.25rem;
        /* height: 340px; */
        margin-bottom: 20px;
        font-size: 16px;
        float: left;
        text-align: left;
        margin: 50px 25px;
    }

    .fouurDiv_Tit {
        margin-bottom: 24px;
    }

    .fouurDiv_Tit>img {
        width: 20px;
        height: 20px;
        margin-bottom: -3px;
    }

    .fouurDiv_Tit>span {
        font-size: 16px;
        font-weight: bold;
        margin-left: 8px;
    }

    .fouurDiv_Tit-Bj>img {
        width: 20px;
        height: 20px;
        margin-bottom: -5px;
    }

    .fouurDiv_Tit-Bj {
        color: #999999 !important;
    }

    .fouurDiv_Cen-Li {
        margin-bottom: 20px;
        float: left;
        width: 50%;
    }

    .fouurDiv_Cen ul li {
        float: left;
    }

    .fouurDiv_Cen-Li3 {
        margin-bottom: 16px;
    }

    .fouurDiv_Cen-Li3>img {
        margin-bottom: -5px;
        width: 48px;
        height: 48px;
        margin-right: 24px;
    }

    .xuan-group img {
        margin-right: 5px;
        vertical-align: middle;
    }

    .fouurDiv_Cen-Li2 {
        width: 120px;
    }

    .fouurDiv_Cen3 {
        display: inline-block;
        width: 420px;
        background-color: #F7F6FC;
        line-height: 30px;
        padding-left: 10px;
        border-left: 2px solid #ff9933;
    }

    /* 添加房东 */

    .titleMiddle {
        margin-top: 48px;
        margin-bottom: 20px;
    }

    .titleMiddle img {
        width: 40px;
        height: 40px;
        vertical-align: text-bottom;
    }

    .titleMiddle span {
        font-size: 24px;
        font-weight: bold;
        font-style: normal;
        margin-right: 20px;
    }

    fangDong-Li {
        width: 100%;
    }
</style>