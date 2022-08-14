export default {
    namespaced: true,
    state: {
        tableData: [{
            date: '2016-05-03',
            name: 'wec',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'wev',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tgfghm',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Toxdghm',
            address: 'No. 189, Grove St, Los Angeles'
          }],
          Title: 'chshfigfjo'
      // Khai báo state
    },
    getters: {
      // Khai báo getters
    },
    mutations: {
      editTitle(state){
        state.Title = "tiêu đề đã đc chỉnh sửa"
      }
      // Khai báo mutations
    },
  }