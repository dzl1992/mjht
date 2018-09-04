<template>
    <!-- <div class="content"> -->
    <el-main>
        <el-form ref="form" :model="form" style="text-align: left;" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证">
                <el-input v-model="form.IDcard"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="ChaXun">查询</el-button>
                <el-button type="success" @click="onAdd" style="margin-left:60px">新增</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 92%;" border>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="nativePlace" label="籍贯">
            </el-table-column>
            <el-table-column prop="identityCard" label="身份证" width="180">
            </el-table-column>
            <el-table-column prop="sex" label="性别">
            </el-table-column>
            <el-table-column prop='nation' label="民族">
            </el-table-column>
            <el-table-column prop="phone" label="手机">
            </el-table-column>
            <el-table-column prop="houseAddresss" label="房屋所在地">
            </el-table-column>
            <el-table-column prop="event" label="状态">
            </el-table-column>
            <el-table-column prop="CreateTime" label="登记时间">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button icon="el-icon-edit" type="text" @click="lookOk(scope.row)">查看</el-button>
                    <el-button icon="el-icon-edit" @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
            layout="total, sizes, prev, pager, next, jumper" :total="21">
        </el-pagination>

        <!-- 新增人员 -->
        <el-dialog title="新增人员" :close-on-click-modal="false" :visible.sync="dialogFormVisible" center>
            <el-form class="Form" :rules="rules" :model="addPersonForm" ref="addPersonForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="addPersonForm.name"></el-input>
                </el-form-item>
                <el-form-item label="籍贯" prop="nativePlace">
                    <el-input v-model="addPersonForm.nativePlace"></el-input>
                </el-form-item>
                <el-form-item label="民族" prop="nation">
                    <el-select style="width:202px" v-model="addPersonForm.nation" placeholder="请选择所属区域">
                        <el-option label="汉族" value="汉族"></el-option>
                        <el-option label="藏族" value="藏族"></el-option>
                        <el-option label="回族" value="回族"></el-option>
                        <el-option label="维吾尔族" value="维吾尔族"></el-option>
                        <el-option label="羌族" value="羌族"></el-option>
                        <el-option label="傣族" value="傣族"></el-option>
                        <el-option label="白族" value="白族"></el-option>
                        <el-option label="哈尼族" value="哈尼族"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="身份证" prop="identityCard">
                    <el-input v-model="addPersonForm.identityCard"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="addPersonForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="婚姻状况" prop="radio">
                    <el-radio-group v-model="addPersonForm.radio">
                        <el-radio :label="3">已婚</el-radio>
                        <el-radio :label="6">未婚</el-radio>
                        <el-radio :label="9">离异</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="工作单位" prop="workUnit">
                    <el-input v-model="addPersonForm.workUnit"></el-input>
                </el-form-item>
                <el-form-item label="房屋地址" prop="houseAdress">
                    <el-input v-model="addPersonForm.houseAdress"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('addPersonForm')">确 定</el-button>
            </div>
        </el-dialog>

        <!-- 修改人员 -->
        <el-dialog title="修改人员" :close-on-click-modal="false" :visible.sync="Xgry" center>
            <el-form class="Form" :model="editPersonForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="editPersonForm.name"></el-input>
                </el-form-item>
                <el-form-item label="籍贯" prop="nativePlace">
                    <el-input v-model="editPersonForm.nativePlace"></el-input>
                </el-form-item>
                <el-form-item label="民族" prop="nation">
                    <el-select style="width:202px" v-model="editPersonForm.nation" placeholder="请选择所属区域">
                        <el-option label="汉族" value="汉族"></el-option>
                        <el-option label="藏族" value="藏族"></el-option>
                        <el-option label="回族" value="回族"></el-option>
                        <el-option label="维吾尔族" value="维吾尔族"></el-option>
                        <el-option label="羌族" value="羌族"></el-option>
                        <el-option label="傣族" value="傣族"></el-option>
                        <el-option label="白族" value="白族"></el-option>
                        <el-option label="哈尼族" value="哈尼族"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="身份证" prop="identityCard">
                    <el-input v-model="editPersonForm.identityCard"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="editPersonForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="婚姻状况" prop="radio">
                    <el-radio-group v-model="editPersonForm.radio">
                        <el-radio :label="3">已婚</el-radio>
                        <el-radio :label="6">未婚</el-radio>
                        <el-radio :label="9">离异</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="工作单位" prop="workUnit">
                    <el-input v-model="editPersonForm.workUnit"></el-input>
                </el-form-item>
                <el-form-item label="房屋地址" prop="houseAdress">
                    <el-input v-model="editPersonForm.houseAdress"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="Xgry = false">取 消</el-button>
                <el-button type="primary" @click="Xgry = false">确 定</el-button>
            </div>
        </el-dialog>
    </el-main>
    <!-- </div> -->
</template>
<script>
    export default {
        data() {
            return {
                Xgry: false,
                dialogFormVisible: false,
                form: {
                    name: "",
                    IDcard: ""
                },
                //   新增人员表单
                addPersonForm: {
                    name: "",
                    nativePlace: "",
                    nation: "",
                    identityCard: "",
                    phone: "",
                    radio: "",
                    workUnit: "",
                    houseAdress: ""
                },
                //修改人员表单
                editPersonForm: {},
                rules: {
                    name: [
                        { required: true, message: "请输入姓名", trigger: "blur" },
                        { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
                    ],
                    nativePlace: [
                        { required: true, message: "请输入籍贯", trigger: "blur" }
                    ],
                    nation: [{ required: true, message: "请选择民族", trigger: "change" }],
                    IdCard: [
                        { required: true, message: "请输入身份证", trigger: "blur" },
                        { min: 18, max: 18, message: "长度为 18 位", trigger: "blur" }
                    ],
                    phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
                    radio: [
                        { required: true, message: "请选择婚姻状况", trigger: "change" }
                    ],
                    workUnit: [
                        { required: true, message: "请输入工作单位", trigger: "blur" }
                    ],
                    houseAdress: [
                        { required: true, message: "请输入房屋地址", trigger: "blur" }
                    ]
                },
                tableData: [
                    {
                        id: 17,
                        name: "叶张展",
                        nativePlace: "江苏",
                        identityCard: "320681198711270034",
                        sex: "男",
                        nation: "汉",
                        phone: "18602521564",
                        houseAddresss: "西溪路851号204室",
                        event: "在住",
                        CreateTime: "2018-06-09 10:57:44"
                    },
                    {
                        id: 17,
                        name: "翟媛媛",
                        nativePlace: "安徽",
                        sex: "女",
                        nation: "汉",
                        identityCard: "342601199408100623",
                        phone: "16666799768",
                        houseAddresss: "西溪路851号204室",
                        event: "在住",
                        CreateTime: "2018-06-21 16:07:02"
                    },
                    {
                        id: 19,
                        name: "吴宏飞",
                        nativePlace: "浙江",
                        identityCard: "330724198906032458",
                        sex: "男",
                        nation: "汉",
                        phone: "15858165973",
                        houseAddresss: "西溪路851号304室",
                        event: "在住",
                        CreateTime: "2018-07-04 12:15:36"
                    },
                    {
                        id: 19,
                        name: "祝龙女",
                        nativePlace: "浙江",
                        identityCard: "330802198808033649",
                        sex: "女",
                        nation: "汉",
                        phone: "15257018163",
                        houseAddresss: "西溪路851号304室",
                        event: "在住",
                        CreateTime: "2018-07-05 13:00:00"
                    },
                    {
                        id: 18,
                        name: "陈美凤",
                        nativePlace: "浙江",
                        identityCard: "330727199211084722",
                        sex: "女",
                        nation: "汉",
                        phone: "15257018163",
                        houseAddresss: "西溪路851号205室",
                        event: "注销",
                        CreateTime: "2018-07-09 14:54:06"
                    },
                    {
                        id: 9,
                        name: "程敏佳",
                        nativePlace: "浙江",
                        identityCard: "330521199406035219",
                        sex: "男",
                        nation: "汉",
                        phone: "15268211666",
                        houseAddresss: "西溪路847号205室",
                        event: "在住",
                        CreateTime: "2018-07-10 16:50:06"
                    },
                    {
                        id: 16,
                        name: "方莉莎",
                        nativePlace: "浙江",
                        identityCard: "330122199705150529",
                        sex: "女",
                        nation: "汉",
                        phone: "15867172460",
                        houseAddresss: "西溪路851号202室",
                        event: "在住",
                        CreateTime: "2018-06-05 10:00:06"
                    },
                    {
                        id: 16,
                        name: "叶芷含",
                        nativePlace: "浙江",
                        identityCard: "331082199704273182",
                        sex: "女",
                        nation: "汉",
                        phone: "18758557415",
                        houseAddresss: "西溪路851号202室",
                        event: "在住",
                        CreateTime: "2018-07-05 11:30:00"
                    },
                    {
                        id: 6,
                        name: "肖懋昆",
                        nativePlace: "福建",
                        identityCard: "350421198708094031",
                        sex: "男",
                        nation: "汉",
                        phone: "15205010109",
                        houseAddresss: "杨家牌楼305号101室",
                        event: "在住",
                        CreateTime: "2018-04-25 09:36:09"
                    },
                    {
                        id: 15,
                        name: "翁文翔",
                        nativePlace: "浙江",
                        identityCard: "331003199610200817",
                        sex: "男",
                        nation: "汉",
                        phone: "15669020853",
                        houseAddresss: "西溪路851号201室",
                        event: "在住",
                        CreateTime: "2018-06-01 07:04:06"
                    }
                ],
                totalCount: 0,
                currentPage: 1,
                pageSize: 10,
            }
        },
        created() {
            var data = {
                "page": this.currentPage,
                "name": this.form.name,
                "type": 1,
                "identityCard": this.form.IDcard
            }
            //this.list(data)
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
            // 租客列表
            list(data) {
                var _this = this;
                var user = sessionStorage.getItem('name');
                console.log(user)
                this.axios({
                    url: "person/query",
                    method: 'post',
                    data: data
                })
                    .then((data) => {
                        if (data.data.resultCode == 1000) {
                            this.tableData = data.data.resultData.persons;
                            this.totalCount = parseInt(data.data.resultData.number);
                        }
                    })
                    .catch(function (err) {
                        console.log("失败")
                    })
            },
            // 翻页
            handleCurrentChange(currentPage) {

            },
            // 查询
            ChaXun() {
                var data = {
                    "page": 1,
                    "name": this.form.name,
                    "type": 1,
                    "identityCard": this.form.IDcard
                }
                this.list(data)
            },
            // 删除
            deleteOk(row) {
                this.$confirm('确定删除' + row.name + '吗?', {
                    closeOnClickModal: false,
                    showCancelButton: false,
                    confirmButtonText: '确定',
                    type: 'warning',
                    center: false
                })
                    .then(() => {
                        this.axios({
                            url: "person/delete",
                            method: 'post',
                            data: { "id": row.id, "type": 1 }
                        })
                            .then((data) => {
                                if (data.data.resultCode == 1000) {
                                    this.$message({
                                        type: 'success',
                                        message: '删除成功!'
                                    });
                                    this.list()
                                }
                            })
                            .catch((err) => {
                                console.log("删除失败")
                            })
                    })
                    .catch(() => {
                        console.log("取消删除")
                    });
            },
            // 查看住户详情
            lookOk(row) {
                this.$router.push({ path: '/Rzxq', query: { row: row.id } })
            },
            onAdd() {
                this.dialogFormVisible = true;
            },
            //修改
            handleClick(row) {
                this.Xgry = true;
                this.editPersonForm = row;
                console.log(row)
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
        padding-bottom: 8.25rem;
        background-color: #fff;
    }

    .el-form {
        padding: 0;
        height: 100px;
        line-height: 100px;
        text-align: left;
    }

    .el-form {
        width: 100%;
        padding: 0;
    }

    .el-form-item {
        display: inline-block;
        margin-bottom: 22px;
    }

    /* 分页 */

    .el-pagination {
        position: relative;
        right: 0;
        padding-top: 60px;
        left: 0;
        text-align: center;
    }

    .el-pager li,
    .el-pagination button:disabled,
    .el-pagination .btn-next,
    .el-pagination .btn-prev {
        background-color: #E9EEF3;
    }

    .el-table--enable-row-transition {
        background-color: #E9EEF3;
        margin: 20px auto;
    }

    .Form {
        height: 300px;
        width: 790px;
        margin: 0 auto;
        text-align: left;
    }

    .Form .el-form-item {
        margin-right: 3.125rem;
    }
</style>