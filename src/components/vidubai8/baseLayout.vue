<template>
    <el-container>
        <el-aside class="sideBar">
            <el-menu
                default-active="2"
                background-color="#001529"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1" @click="redirect('tongquan')">
                    <i class="el-icon-menu"></i>
                    <span>Tổng quan</span>
                </el-menu-item>
                <el-menu-item index="2"  @click="redirect('product')">
                    <i class="el-icon-s-shop"></i>
                    <span>Quản lý sản phẩm</span>
                </el-menu-item>
                <el-menu-item index="3" @click="redirect('hoadon')">
                    <i class="el-icon-document"></i>
                    <span>Quản lý hóa đơn</span>
                </el-menu-item>
                <el-menu-item index="4" @click="redirect('thongke')">
                    <i class="el-icon-s-data"></i>
                    <span>Báo cáo thống kê</span>
                </el-menu-item>
                <el-submenu index="5" @click="redirect('chinhanh')">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>Quản lý chi nhánh</span>
                    </template>
                    <el-menu-item-group title="Hoạt động">
                        <el-menu-item index="1-1">Sản phẩm</el-menu-item>
                        <el-menu-item index="1-2">Đơn hàng</el-menu-item>
                        <el-menu-item index="1-3">Khách hàng</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Báo cáo">
                        <el-menu-item index="1-4">Doanh thu</el-menu-item>
                        <el-menu-item index="1-5">Tồn kho</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="6" @click="redirect('caidat')">
                    <i class="el-icon-s-tools"></i>
                    <span>Cài đặt hệ thống</span>
                </el-menu-item>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header class="header">
                <div class="headerLeftWrap">
                    <!-- <slot name="header"></slot> -->
                </div>
                <div class="headerRightWrap">
                    <el-badge :value="12" class="notification">
                        <i class="el-icon-bell"></i>
                    </el-badge>
                    <el-dropdown>
                        <el-avatar
                                size="medium"
                                shape="circle"
                                src="https://saoexpress.vn/wp-content/uploads/2019/07/hot-girl-nguyen-thanh-thuy-Saoexpress-1.jpg"
                        />
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>Thông tin tài khoản</el-dropdown-item>
                            <el-dropdown-item>Đổi mật khẩu</el-dropdown-item>
                            <el-dropdown-item>Cấu hình</el-dropdown-item>
                            <el-dropdown-item style="border-top: 1px solid #ccc;"><div @click="redirect('login')">Đăng xuất</div></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>

            <el-main>
                <slot name="content"></slot>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
  export default {
    name: "BaseLayout",
    methods: {
        
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        redirect(param) {
            this.$router.push({
                path: `/${param}`
            })
        },
        
    },
 
};
</script>

<style lang="scss" scoped>
    $colorStroke: #d8e0ea;
    $colorDefault: #253036;
    $colorHeaderBg: #f2f6fe;
    .sideBar {
        width: 200px;
        height: 100vh;
        background: #001529;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid $colorStroke;
        height: 60px;
        width: 100%;
        background: $colorHeaderBg;
        padding: 0 24px;
        .headerLeftWrap {
            display: flex;
            align-items: center;
            font-size: 18px;
            font-weight: bold;
            color: $colorDefault;
        }
        .headerRightWrap {
            display: flex;
            align-items: center;
            .notification {
                margin-right: 40px;
                font-size: 24px;
            }
        }
    }
    .mainBody {
        width: 100%;
        padding: 24px;
    }
</style>