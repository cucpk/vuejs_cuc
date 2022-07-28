<template>
<div class="form">
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
        <el-form-item prop="email" label="Email" :rules="[
      { required: true, message: 'Mời bạn nhập lại email', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]">
            <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
        <el-form-item v-for="(domain, index) in dynamicValidateForm.domains" :label="'Mật khẩu' + index" :key="domain.key" :prop="'domains.' + index + '.value'" :rules="{
      required: true, message: 'Mời bạn nhập lại mật khẩu', trigger: 'blur'
    }">
            <el-input v-model="domain.value"></el-input>
        </el-form-item>
        <p class="btn" @click="redirect">
            <el-link type="primary">Quên mật khẩu ?</el-link>
        </p>
        <el-form-item>
            <el-button type="primary" @click="submitForm('dynamicValidateForm')">Đăng nhập</el-button>
            <!-- <el-button @click="addDomain">New domain</el-button> -->
            <!-- <el-button @click="resetForm('dynamicValidateForm')">Reset</el-button> -->
        </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
    name: 'FormBai5',
    data() {
        return {
            dynamicValidateForm: {
                domains: [{
                    key: 1,
                    value: ''
                }],
                email: ''
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('Chào mừng bạn đăng nhập thành công!');
                } else {
                    console.log('Mời bạn nhập lại!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        removeDomain(item) {
            var index = this.dynamicValidateForm.domains.indexOf(item);
            if (index !== -1) {
                this.dynamicValidateForm.domains.splice(index, 1);
            }
        },
        addDomain() {
            this.dynamicValidateForm.domains.push({
                key: Date.now(),
                value: ''
            });
        },
        redirect() {
            this.$router.push({
                name: 'ForgotPass'
            })
        }
    }

}
</script>

<style>
.form {
    height: 100vh;
    overflow: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(193, 183, 243);
}

.btn {
    margin-left: 100px;
    /* text-decoration: none; */
}
</style>
