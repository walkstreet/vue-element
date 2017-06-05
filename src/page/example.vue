<template>
    <div>
        <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">欢迎页</el-breadcrumb-item>
            <el-breadcrumb-item>系统管理</el-breadcrumb-item>
            <el-breadcrumb-item>组件实例</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="main">
            <div class="section">
                <h2>toast</h2>
                <el-button type="primary" @click="toastBottom">下面</el-button>
                <el-button type="primary" @click="toastTop">上面</el-button>
                <el-button type="primary" @click="toastCenter">中间</el-button>
            </div>
            <div class="section">
                <h2>Select2</h2>
                <el-row>
                    <el-col :span="18">
                        <select2 placeholder="请输入权限" v-model="roleList" :select-list="selectList" @keyUpCallBack="onKeyUp"></select2>
                    </el-col>
                    <el-col :span="6">
                        <el-button type="primary" @click="openSelect">查询已选择数组</el-button>
                    </el-col>
                </el-row>
            </div>
            <div class="section">
                <h2>slot</h2>
                <slotter text="第一层">
                    <slot2 text="第二层"></slot2>
                </slotter>
            </div>
            <div class="section">
                <h2>validate</h2>
                <p>
                    <label>用户名:</label>
                    <input type="text" v-uname:user='{value: validateInput,required: true}' v-model="validateInput">
                    <label v-if="$validate.user">用户名不正确</label>
                </p>
                <el-button type="primary" @click="openValidate">查询</el-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section {
    padding: 10px;
}
</style>

<script>
    import select2 from "../../component/select2/select2";
    import slotter from "../../component/slot/slot";
    import slot2 from "../../component/slot2/slot2";
    module.exports = {
        data() {
            return {
                roleList: [
                     { "id": 0, "name": "你好" }
                ],
                selectList: [

                ],
                tableData3: [{
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                validateInput: ""
            }
        },
        computed: {
            roleListArray: function() {
                return this.roleList.toString();
            }
        },
        components: {
            'select2': select2,
            'slotter': slotter,
            'slot2': slot2
        },
        methods: {
            toastBottom() {  // toast下面
                this.$toast.bottom('这是一个toast提示框');
            },
            toastTop() {  // toast上面
                this.$toast.top('这是一个toast提示框');
            },
            toastCenter() {  // toast中间
                this.$toast.center('这是一个toast提示框');
            },
            onKeyUp(val) { //select2
                this.selectList = [];
                let count = 0;
                this.selectList.push(
                    {
                        id: count++,
                        name: "你好"
                    }
                )
            },
            openSelect() {
                this.$alert(this.roleList, 'select2', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            },
            openValidate() {
                this.$alert(this.validateInput, 'validate', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            }
        }
    }
</script>
