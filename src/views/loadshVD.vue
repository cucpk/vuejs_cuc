<template>
  <div class="infoWrap">
     dsadasdasd
  </div>
</template>

<script>
import  _ from 'lodash'
export default {

  mounted() {
    // this.join()
    // this.last()
    // this.chunk()
    // this.fill()
    // this.drop()
    // this.sortBy()
    this.pick()
    // this.has()


  },
  methods: {
    // chuyển mảng thành chuỗi ngăn cách bới giá trị thêm vào
//    join() {
//      let array = ['a','b','c']
//      let data = _.join(array, '-cucne-');
//      console.log(data)
//    }

    // lấy ra phàn tử cuối của mảng
    // last() {
    //   let array = ['1','2','3']
    //   let data = _.last(array);
    //   console.log(data)
    // }

    // lấy phần tu trong mảng ra 1 mảng mới tham số truyền vào là số lượng phần tử tring mảng mới
    // chunk() {
    //   let array = ['hihi','hôhho','hahaha']
    //   let data = _.chunk(array,2);
    //   console.log(data)
    // }
    // thay thế phần tư trong mảng
    // fill() {
    //   let array = ['hihi','kkk','hahaha','cuc','ne']
    //   let data = _.fill(array,'*',1,4);
    //   console.log(data)
    // }

    // xóa bắt đầu từ phần tử đầu tiên tham số truyền vào là số lượng phần tử cần xóa
    // drop() {
    //   let array = ['hihi','hôhho','hahaha','cuc','ne']
    //   let data = _.drop(array,2);
    //   console.log(data)
    // }
    // sắp xết phần tử trong array object
    // sortBy() {
    //   let users = [
    //     { 'name': 'cuc','age': 20 },
    //     { 'name': 'ne', 'age': 36 },
    //     { 'name': 'hihi','age': 40 },
    //     { 'name': 'kk', 'age': 34 }
    //   ];
    //   let data = _.sortBy(users,['age'] );
    //   console.log(data)
    // }

    //lấy ra các thuộc tính mình muốn từ 1 đối tượng
    pick(){
        let array = ['hihi','hôhho','hahaha','cuc','ne']
        let data = _.drop(array,2);
        console.log(data)
    }

// tìm kiếm phần tử trong 1 object và trả về t vs f 
    // has() {
    //   let object = { 'a': { 'b': 2 } };
    //   let data = _.has(object,'a.b');
    //   console.log(data)
    // }
  }

}

</script>

<style scoped lang="scss" >

</style>