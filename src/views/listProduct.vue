<template>
  <div>
    <h3>DANH SÁCH CÁC SẢN PHẨM</h3>
    <div style="width:15%;">
      <el-input 
        placeholder="Tìm kiếm sản phẩm"
        @clear="clearHandle()"
        @keydown.enter.native="handleSearch()"
          clearable
        v-model="search" >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <el-button type="primary" succes style="margin-left:50px;" @click="openDialogCreateProduct()">Thêm sản phẩm</el-button>
    <el-table
      :data="products"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="180">
        <template slot-scope="product">
          {{product.row.id}}
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="Tên sản phẩm"
        width="180">
        <template slot-scope="product">
          {{product.row.name}}
        </template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="Giá sản phẩm"
        width="180">
        <template slot-scope="product">
          {{product.row.price}}
        </template>
      </el-table-column>
       <el-table-column
        prop="description"
        label="Mô tả"
        width="280">
        <template slot-scope="product">
          {{product.row.description}}
        </template>
      </el-table-column>
       <el-table-column
        prop="action"
        label=" Hoạt động"
        width="280">
        <template slot-scope="product">
          <a @click="openDialogEditProduct(product.row)">
            <el-button type="success" class="btn-b">Chỉnh sửa</el-button>
          </a>
         <a @click="handleDeleteProduct(product.row.id)">
            <el-button type="danger">Xóa sản phẩm</el-button>
          </a>
        </template>
        
      </el-table-column>
    </el-table>
    <el-dialog width="100%" v-loading="loading" title="Chỉnh sửa sản phẩm" :visible.sync="dialogEditProduct" class="modalUser">
        <el-row>
            <div class="inputWarp" >
              <label>id</label>
              <el-input v-model="id"></el-input>
              <div class="error">
                <span>{{errorid}}</span>
              </div>
            </div>
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
        <el-button type="primary" @click="handleEditProduct()">Cập nhật</el-button>
      </span>
    </el-dialog>

    <el-dialog width="100%" v-loading="loading" title="Thêm mới sản phẩm" :visible.sync="dialogCreateProduct" class="modalUser">
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
        <el-button type="primary" @click="handleCreateProduct()">Tạo mới sản phẩm</el-button>
      </span>
    </el-dialog>
  </div>
  </template>
<script>
import _ from 'lodash';
import api from '../api'
    export default{
        name: 'listProducts',
        data() {
        return {
          products: [],
          dialogEditProduct:false,
          dialogCreateProduct:false,
          name:'',
          price:'',
          description:'',
          loading: true,
          idProduct:'',
          errorName:'',
          errorPrice:'',
          errorDescription:'',
          search:'',
          page: {
            currentPage: 1,
            pageSize: 10,
            total: 0,
            from: 0,
            to: 0
         },
        }
      },
      mounted(){
        this.getProduct()
      },
      methods: {
        isValidate(){
          let error = false
          if(this.name.length === 0){
            error = true
            this.errorName = 'Vui lòng điền tên sản phẩm'
          }
          if(this.price.length === 0){
            error = true
            this.errorPrice = 'Vui lòng điền giá sản phẩm'
          }
          return !error
        },
        getProduct(params = {}){
          api.getListProducts(params).then((res) => {
                this.products = res.data.data.data
                this.page.currentPage = res.data.data.current_page
                this.page.pageSize = res.data.data.per_page
                this.page.total = res.data.data.total
                let from = res.data.data.from
                let to = res.data.data.to
                this.page.from = from ? from : 0
                this.page.to = to ? to : 0
            }).catch((err) => {
                console.log(err);
          });
        },
        openDialogCreateProduct(){
          this.dialogCreateProduct = true
          this.resetForm()
          this.resetError()
        },
        openDialogEditProduct(product){
          this.dialogEditProduct = true
          this.name = product.name
          this.price = product.price
          this.description = product.description ? product.description : ""
          this.idProduct = product.id
        },
        handleEditProduct(){
          if(this.isValidate()){
            let data = new FormData();
            data.append('name', this.name)
            data.append('price', this.price)
            if(this.description){
                data.append('description', this.description)
            }
            api.updateProduct(this.idProduct, data).then(()=>{
              this.dialogEditProduct = false,
              this.getProduct(),
              this.resetForm(),
              this.resetError(),
              this.$message({
                type: 'success',
                message: 'Cập nhật sản phẩm thành công',
              })
            }).catch((error) => {
              let errors = _.get(error, 'response.data.error', {})
              if (Object.keys(errors).length > 0) {
                this.errorName = _.get(errors, 'name[0]', '')
                this.errorPrice = _.get(errors, 'price[0]', '')
                this.errorDescription = _.get(errors, 'description[0]', '')
              } else{
                if (Object.keys(errors).length === 0) {
                  this.$message.error({
                    type: 'error',
                    message: "Có lỗi xảy ra, vui lòng thử lại sau."
                  })
                }
              }
            })
          }
          
          
        },
        handleDeleteProduct(id){
          this.$confirm('Bạn muốn xóa sản phẩm?', {
          confirmButtonText: 'Xóa',
          cancelButtonText: 'Đóng',
        //   confirmButtonClass: 'deleteConfirm',
          type: 'warning'
            }).then(()=>{
              api.deleteProduct(id).then(() => {
                  this.getProduct(),
                  this.$message({
                    type: 'danger',
                    message: 'Đã xóa sản phẩm!',
                  })
                })
            })
          
        },
        handleCreateProduct(){
          if(this.isValidate()){
            let data = new FormData();
            data.append('name', this.name)
            data.append('price', this.price)
            if(this.description){
                data.append('description', this.description)
            }
            api.createProduct(data).then(()=>{
              this.dialogCreateProduct = false,
              this.getProduct(),
              this.resetForm(),
              this.resetError(),
              this.$message({
                type: 'success',
                message: 'Sản phẩm được cập nhật thành công!',
              })
              })
          }
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
        resetForm(){
          this.name= '',
          this.price = "",
          this.description =""
        },
        resetError(){
          this.errorName= '',
          this.errorPrice = "",
          this.errorDescription =""
        },
        handleCurrentChange(val){
         
          let payload = {
            q: this.search.length > 0 ? this.search : null,
            page: val
          }
          this.getProduct(payload)
        }
      }
    }
</script>
<style lang="scss">
            
.btn-b{
    margin-right: 10px;
}
.paginationWarp{
  text-align: left;
}
.inputWarp{
  margin-bottom: 10px;
  label {
    font-size: 14px;
    font-weight: 700;
    color: pink;
    display: block;
    margin-bottom: 5px;
    text-align: left;
  }
}
.error{
  text-align: left;
  color: rgb(254, 20, 20);
}
</style>