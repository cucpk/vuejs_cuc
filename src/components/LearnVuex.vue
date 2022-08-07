<template>
  <div class="about">
    <!-- iiiii -->
    <h3>{{count}}</h3>
    <button @click="changeCount">click ne</button>
  </div>
</template>

<script>
 import {mapState, mapMutations } from 'vuex'

  export default {
    name: 'LearnVuex',
    computed: {
      // ...mapGetters([
      //   'doneTodos'
      // ])
      ...mapState([
        'count'
      ])
    },
    methods: {
      ...mapMutations([
         'increment'
      ]),
      changeCount () {
        let data = {name: "zent", number: 10}
        this.increment(data)
      },
    mounted() {
      console.log(this.$store.getters.getTodoById(1))
    }
    
  }
  }

</script>