<template>
    <el-main>
        <el-form ref="form" :model="form" label-width="100px"  style="text-align: left;height: 100px;line-height: 100px;">
            <el-form-item label="设备名称">
                <el-input v-model="form.deviceName"></el-input>
            </el-form-item>
            <el-form-item label="设备序列号">
                <el-input v-model="form.deviceSerialNumber"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 94%;margin: .625rem auto" border>
            <el-table-column
                prop="deviceName"
                label="设备名称">
            </el-table-column>
            <el-table-column
                prop="deviceSerialNumber"
                label="设备序列号">
            </el-table-column>
            <el-table-column
                prop="deviceDepict"
                label="房屋地址">
            </el-table-column>
            <el-table-column
                prop="deviceType"
                label="设备类型">
            </el-table-column>
            <el-table-column
                prop='event'
                label="设备状态">
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button v-show="!scope.row.dealt" type="text" @click="editKeyAudit(scope.row)">钥匙审核</el-button>
                    <el-button v-show="scope.row.dealt" type="text">已登记</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="6"
            :page-sizes="[10, 20, 30, 40]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="7">
        </el-pagination>
    </el-main>
</template>
<script>
    export default {
        data(){
            return{
                visible2:false,
                KeyAudit:"钥匙审核",
                form:{
                    deviceName:"",
                    deviceSerialNumber:""
                },
                tableData: [{
                        id:1,
                        deviceName:"过道锁",
                        deviceSerialNumber: 'AILOCK_4143bbf2f8f0',
                        deviceDepict:"西溪路851号204室",
                        deviceType:"智能锁",
                        event:"已安装",
                        KeyAudit:"钥匙审核",
                        dealt:false,
                    },
                    {
                        id:2,
                        deviceName:"过道锁",
                        deviceSerialNumber: 'AILOCK_1153bbf2f8f0',
                        deviceDepict:"西溪路851号304室",
                        deviceType:"智能锁",
                        event:"已安装",
                        KeyAudit:"钥匙审核",
                        dealt:false,
                    },
                    {
                        id:3,
                        deviceName:"房间锁",
                        deviceSerialNumber: 'AILOCK_2019bbf2f8f0',
                        deviceDepict:"西溪路851号205室2051户",
                        deviceType:"智能锁",
                        event:"已安装",
                        KeyAudit:"钥匙审核",
                        dealt:false,
                    }, 
                    {
                        id:4,
                        deviceName:"过道锁",
                        deviceSerialNumber: 'AILOCK_1209bbf2f8f0',
                        deviceDepict:"杨家牌楼305号101室",
                        deviceType:"智能锁",
                        event:"已安装",
                        KeyAudit:"钥匙审核",
                        dealt:false,
                    },
                    {
                        id:5,
                        deviceName:"房间锁",
                        deviceSerialNumber: 'AILOCK_4178bbf2f8f0',
                        deviceDepict:"西溪路851号201室2011户",
                        deviceType:"智能锁",
                        event:"已安装",
                        KeyAudit:"已登记",
                        dealt:true,
                    },
                    {
                        id:6,
                        deviceName:"房间锁",
                        deviceSerialNumber: 'AILOCK_4140bbf2f8f0',
                        deviceDepict:"西溪路817号105室1052户",
                        deviceType:"智能锁",
                        event:"已安装",
                        KeyAudit:"已登记",
                        dealt:true,
                    },
                    {
                        id:7,
                        deviceName:"过道锁",
                        deviceSerialNumber: 'BILOCK_1153bbf2f8f0',
                        deviceDepict:"西溪路851号204室",
                        deviceType:"智能锁",
                        event:"已安装",
                        KeyAudit:"已登记",
                        dealt:true,
                    }
                    ],
                totalCount:0,
                currentPage:1,
                pageSize:10,
                
            }
  
        },
        methods:{
            handleCurrentChange(currentPage) {
               
            },
            editKeyAudit(row){
               row.dealt = !row.dealt;
            },
        },
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
   .el-form {
       padding: 0;
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
    .el-pager li, .el-pagination button:disabled, .el-pagination .btn-next, .el-pagination .btn-prev{
        background-color: #E9EEF3;
    }
</style>

