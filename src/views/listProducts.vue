<template>
<div>
    <el-button type="success" round style="margin-top:50px">Thêm sản phẩm</el-button>
    <el-button type="success" round>Sửa sản phẩm</el-button>
    <el-button type="success" round style="margin-right:20px">Xóa sản phẩm</el-button>
    <el-input placeholder="Tìm kiếm theo tên sản phẩm" v-model="input" style="width:250px"></el-input>
    <p style="margin-top:50px">DANH SÁCH SẢN PHẨM</p>
    <el-table
      :data="products"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="description">
      </el-table-column>
      <el-table-column
        prop="price"
        label="price">
      </el-table-column>
      <el-table-column
        prop="image"
        label="image">
      </el-table-column>
    </el-table>
</div>
</template>
<script>
 import api from '../api';
// import axios from 'axios'

  export default {
    name: 'listProducts',
    data(){
        return{
            products: []
        }
    }
,
    mounted() {
      api.getlistProducts().then((res)=>{
        this.products = res.data.data.data;

      }).catch((error) =>{
        console.log(error);
      })

      // let data = {
      //   name: 'iphone',
      //   price: 560000,
      //   description: 'Chụp ảnh siêu nét, pin cực khỏe'
      // }
      // api.saveProducts(data)
      // axios({
      //   method: 'get',
      //   url: 'http://vuecourse.zent.edu.vn/api/products',
      // }).then((res) => {
      //   this.products=res.data.data.data;
      // }).catch((error) => {
      //   console.log(error);
      // });
    }
  }
</script>
