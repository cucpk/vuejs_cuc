<template>
    <el-row class="container">
        <el-row class="bannerWrap">
            <slot name="banner"></slot>
        </el-row>
        <el-row>
            <el-menu default-active="8" class="el-menu-demo" mode="horizontal">
                <el-menu-item index="1">Trang chủ</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">Thể thao</template>
                    <el-menu-item index="2-1">Bóng đá trong nước</el-menu-item>
                    <el-menu-item index="2-2">Bóng đá châu âu</el-menu-item>
                    <el-menu-item index="2-3">Võ Thuật</el-menu-item>
                    <el-menu-item index="2-4">Các môn thể thao khác</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">Sức khỏe</template>
                    <el-menu-item index="3-1">Kiến thức giới tính</el-menu-item>
                    <el-menu-item index="3-2">Làm đẹp</el-menu-item>
                    <el-menu-item index="3-3">Đại dịch Covid-19</el-menu-item>
                </el-submenu>
                <el-menu-item index="4">Pháp luật</el-menu-item>
                <el-menu-item index="5">Du lịch</el-menu-item>
                <el-menu-item index="6">Giáo dục</el-menu-item>
                <el-menu-item index="7">Văn hóa</el-menu-item>
                <el-menu-item index="8">Công nghệ</el-menu-item>
                <el-menu-item index="9">Giải trí</el-menu-item>
            </el-menu>
        </el-row>
        <el-row class="body">
            <el-col :span="6">
                <slot name="leftAds"></slot>
            </el-col>
            <el-col :span="12" class="mainContent">
                <slot></slot>
            </el-col>
            <el-col :span="6">
                <slot name="rightAds"></slot>
            </el-col>
        </el-row>
    </el-row>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  };
</script>

<style lang="scss" scoped>
    .container {
        width: 1200px;
        margin: auto;
        background: #fff;
        min-height: 100vh;

        .bannerWrap {
            width: 100%;
            min-height: 100px;
            margin: auto;
        }

        .mainContent {
            padding: 16px;
        }
    }
</style>