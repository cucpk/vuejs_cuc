<template>
<div>
    <el-button type="success" style="margin-right:10px" @click="openDialogCreateProduct()">Thêm mới</el-button>
    <!-- // <el-button type="success" round>Sửa sản phẩm</el-button> -->
    <!-- <el-button type="success" round style="margin-right:20px">Xóa sản phẩm</el-button> -->
    <el-input style="width:250px"
        placeholder="Nhập tên để tìm kiếm"
        @clear="clearHandle()"
        @keydown.enter.native="handleSearch()"
          clearable
        v-model="search">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
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
    <el-dialog width="30%" top="5vh" v-loading="loading" title="Tạo sản phẩm" :visible.sync="dialogCreateProduct" class="modalUser">
        <el-row>
            <div class="inputWarp" >
              <label>Tên sản phẩm </label>
              <el-input v-model="name"></el-input>
              <div class="error">
                <span>{{errorName}}</span>
              </div>
            </div>
            <div class="inputWarp" >
              <label>Giá sản phẩm </label>
              <el-input v-model="price"></el-input>
              <div class="error">
                <span>{{errorPrice}}</span>
              </div>
            </div>
            <div class="inputWarp" >
              <label>Mô tả </label>
              <el-input type="textarea" :rows="5" v-model="description"></el-input>
              <div class="error">
                <span>{{errorDescription}}</span>
              </div>
            </div>
          </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialogCreateProduct()">Đóng</el-button>
        <el-button type="primary" @click="handleCreateProduct()">Tạo mới</el-button>
      </span>
    </el-dialog>
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
    },

    method:{
      openDialogCreateProduct(){
          this.dialogCreateProduct = true
          this.resetForm()
          this.resetError()
        },
      handleSearch(){
          if(this.search.length>0){
            let params = {
              q : this.search
            }
            this.getProduct(params)
          }
        },
        clearHandle(){
          this.getProduct()
        },
    }
  }
</script>
