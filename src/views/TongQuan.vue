<template>
  <div>
    <BaseLayout>
        <template #header>
            <b>{{Title}}</b>
            <button @click="chaneTitle()" style="margin-left:30px;">Nhấn chọn thay đổi</button>
            
        </template>
        <template #content>
             <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address">
      </el-table-column>
    </el-table>
  </template>
    <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
        </template>
    </BaseLayout>
  </div>
</template>
<script>
// import { title } from 'process'
import { mapState,mapMutations } from 'vuex'
import BaseLayout from '../views/BaseLayout.vue'
    export default {
    name: "homeTQ",
    computed: {
        ...mapState(
            'home',['tableData','Title']
        ),
    },
    components: {
      BaseLayout,
    },
    methods:{
             ...mapMutations('home',[
                'destroy',
                'editTitle'
            ]),
            chaneTitle(){
              this.editTitle()
            }
            }
    }

</script>
<style>
    .el-pagination{
        background-color: #0000;
        text-align: right;
    }
</style>