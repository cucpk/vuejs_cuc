<template>
    <div>
        <BaseLayout>
            <template #banner>
                <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="(image, index) in images" :key="index">
                        <img :src="image" alt="">
                    </el-carousel-item>
                </el-carousel>
            </template>

            <template #leftAds>
                <img src="https://tpc.googlesyndication.com/simgad/14136273764755485439" alt="">
            </template>

            <template #rightAds>
                <img src="https://adi.admicro.vn/adt/adn/2021/01/gdn-3-adx5ff9183d592cf.jpg" alt="">
            </template>

            <div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>Trang chủ</el-breadcrumb-item>
                    <el-breadcrumb-item>Công nghệ</el-breadcrumb-item>
                    <el-breadcrumb-item>Trên tay Samsung Galaxy Buds Pro: đẹp và nhiều công nghệ</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="news">
                    <img src="https://photo2.tinhte.vn/data/attachment-files/2021/01/5305182_tren_tay_bud_pro_tinhte-7.jpg" alt="">
                    <div>
                        Galaxy Buds Pro là một chiếc tai nghe đặc biệt và thú vị của Samsung. Nó là sản phẩm nối tiếp với chiếc Galayx Buds ra mắt trước đó nhưng được trang bị nhiều tính năng hơn, nhiều công nghệ hơn và mục đích là làm sao nâng cao trải nghiệm của người dùng.
                    </div>
                </div>
            </div>
        </BaseLayout>
    </div>
</template>

<script>
  import BaseLayout from './BaseLayout'
  export default {
    name: 'NewsDetailPage',
    components: {
      BaseLayout
    },
    data () {
      return {
        images: [
          'https://infinitiliveaboard.com/public/images/Banner-img-23.jpg',
          'https://www.infinitiliveaboard.com/public/images/Banner-img-13.jpg',
          'https://infinitiliveaboard.com/public/images/Banner-img-29.jpg',
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
    .el-carousel__item img {
        height: 300px;
        width: 100%;
    }

    .news {
        padding: 24px 0;

        img {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 20px;
        }
    }
</style>