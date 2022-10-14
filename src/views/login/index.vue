
<template>
  <div>
                <el-container>
     <el-header style="text-align: center; font-size: 16px">
          <div style="margin-top:20px;">Welcome to Puzzle Game !</div>
     </el-header>

     <el-main>
        <el-row :gutter="20">
        <el-col :span="6">
         <div class="grid-content"></div>
         </el-col>

            <el-col :span="12">
                <el-input v-model="username" placeholder="用户名"></el-input>
           </el-col>
            <el-col :span="6">
         <div class="grid-content"></div>
         </el-col>
       </el-row>

       <div style="margin: 30px 20px;"></div>
       <el-row :gutter="20">
        <el-col :span="6">
         <div class="grid-content"></div>
         </el-col>
         <el-col :span="12" style="text-align: center;line-height:40px">
               <el-button type="primary" @click="login" style="width:100%">进入</el-button>
           </el-col>

            <el-col :span="6">
         <div class="grid-content"></div>
         </el-col>
       </el-row>

     </el-main>
   </el-container>
           </div>
 </template>

<script>

import { ref, onBeforeMount, reactive, computed } from 'vue'
import { useUserStore } from '/@/store'

const userStore = useUserStore()
const loading = ref( false )

export default {
  name : 'Login',

  created() {
    this.flush()
  },
  data() {
    return {
      isLoging : false,
      captcha_url : '',
      validateCodeToken : '',
      pwd : '',
      username : ''

    }
  },
  components : {

  },
  methods : {

    // 登录逻辑
    login() {
      if ( this.username == '' ) {
        this.$message( {
          message : '用户名未填写',
          type : 'warning'
        } )
      } else {
        this.toLogin()
      }
    },

    toLogin() {
      loading.value = true
      try {
        userStore.SET_TOKEN( this.username )
        this.$router.push( '/puzzle/index' )
      } catch ( e ) {
      } finally {
        loading.value = false
      }
    },

    goRegister() {
      this.$router.push( '/register' )
    },

    goForget() {
      this.$router.push( '/forgetPassword' )
    },

    flush() {
      this.validateCodeToken = new Date().getTime()
      this.captcha_url = 'api/captchaCode/' + this.validateCodeToken
    }

  }
}
</script>

 <style lang="css" scoped>

 </style>

