<template>
  <div class="container">
    <loginForm @EventChangeData="EventChangeData"></loginForm>
    <loginMessage :email="email" :password="password"></loginMessage>
    
  </div>
</template>

<script>
    import loginForm from './loginForm.vue'
    import loginMessage from './loginMessage.vue'
    export default {
    name: 'login',
    components: {
        loginForm,
        loginMessage
    },
    data(){
        return{
            email: '',
            password: ''
        }
    },
    method: {
        EventChangeData(data){
            this.email = data.email;
            this.password = data.password
            this.$emit('EventChangeData',data);
        }
    }
    
}
   
</script>
<style lang="scss" scoped>
  .container {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    
</style>