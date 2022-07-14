<template>
    <div>
        <BaseLayout>
            <template #header>
                Quản lý sản phẩm
            </template>
            <el-table
                    :data="tableData"
                    border
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

            <div class="paginationWrap">
                <el-pagination
                    background
                    layout="total, prev, pager, next, jumper"
                    :total="50">
                </el-pagination>
            </div>
        </BaseLayout>
    </div>
</template>

<script>
  import BaseLayout from './BaseLayout'
  export default {
    name: 'ProductPage',
    components: {
      BaseLayout
    },
    data () {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    },
  }
</script>

<style lang="scss" scoped>
    .paginationWrap {
        margin-top: 20px;
        text-align: right;
    }
</style>