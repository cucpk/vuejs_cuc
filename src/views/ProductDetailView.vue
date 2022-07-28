<template>
  <div>
    <p>Đây là view ProductDetailView</p>
    <button @click="goToAboutPage">
        Click vào About
    </button>
  </div>
</template>

<script>

export default {
  name: 'ProductDetailView',
  components: {
    
  },
  methods: {
    goToAboutPage: () =>{
        this.$router.push({name: 'post'})
    }
  }
}
</script>
