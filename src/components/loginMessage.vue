<template>
<div class="rightPanel">
      <div class="title">{{title}}</div>
      <div class="content" v-html="content"></div>
    </div>
</template>
<script>
    export default{
        name: 'LoginMessage'
    }
</script>
<style lang="scss" scoped>
  
      .inputWrap {
        margin-bottom: 10px;

        .inputLabel {
          font-weight: bold;
          margin-bottom: 8px;
        }

        input {
          height: 40px;
          width: 100%
        }

        textarea {
          width: 100%;
          resize: none;
        }
      }
    
     .rightPanel {
      background: #ffffff;
      border: 1px dashed #000000;
      padding: 24px;
      border-radius: 10px;
      height: 300px;
      width: 500px;
      margin-left: 80px;

      .title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .content {
        font-size: 14px;
      }
    }
  
</style>
