<template>
  <div class="about">
    <h3>{{count}}</h3>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'LearnVuex2',
    computed: {
      ...mapState([
        'count'
      ])
    }
  }
</script>