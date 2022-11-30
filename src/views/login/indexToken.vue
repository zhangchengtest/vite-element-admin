<template>
  <div class="section-container login-container un-select">
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onUnmounted } from 'vue'
import { isMobile } from '/@/utils/device'
import { debounce } from 'lodash-unified'
import client from '/@/tinode'
import { useUserStore } from '/@/store'
import { useRoute, useRouter } from 'vue-router'
import NProgress from '/@/utils/progress'

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const isShowWX = ref( true )

const resizeCb = debounce( () => {
  isShowWX.value = !isMobile()
}, 50 )

onBeforeMount( () => {
  isShowWX.value = !isMobile()
} )

onMounted( () => {
  window.addEventListener( 'resize', resizeCb )
} )

onUnmounted( () => {
  window.removeEventListener( 'resize', resizeCb )
} )

defineOptions( {
  name : 'LoginToken'
} )
NProgress.start()
client.connect().then( () => {
  // Connected. Login now.
  console.log( route.query.token )
  var tt = route.query.token
  tt = tt.replace( / /g, '+' )
  // var tt = 'w3/q/jzpVY62GZhjFAABAAEAmTyr6hf0r9E+A7KP+Ep7l36g5qwgi9qJdOC85l66dzA='
  return client.loginToken( tt )
} ).then( ( ctrl ) => {
  console.log( ctrl )
  // // Logged in fine, attach callbacks, subscribe to 'me'.
  const me = client.getMeTopic()
  me.onMetaDesc = function( meta ) {
    console.log( meta.public.fn )
    userStore.SET_TOKEN( meta.public.fn )
    router.push( '/puzzle/index' )
    NProgress.done()
  }
  // // Subscribe, fetch topic description and the list of contacts.
  me.subscribe( me.startMetaQuery()
    .withDesc()
    .build() )
} ).catch( ( err ) => {
  // Login or subscription failed, do something.
  console.log( err )
} )
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  min-height: 100vh;
  padding: 15vh 0 100px;
  position: relative;
  background: #fff;
}
.body {
  padding: 30px 40px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid #e6ebf5;
  background-color: #fff;
  vertical-align: middle;
  min-width: 260px;
  width: 380px;
  margin: 0 auto;
}

.logos {
  margin: 0 auto 20px;
}
.top-title {
  color: rgba(16, 16, 16, 1);
  font-size: 20px;
  height: 29px;
  line-height: 29px;
  text-align: center;
}
.main {
  margin-top: 20px;
  .foot-link {
    text-align: center;
    margin-top: 1px;
    .link-item {
      margin: 0;
      font-size: 12px;
      line-height: 18px;
      color: #1890ff;
    }
  }
}

.foot-link {
  .el-button {
    font-size: 12px;
  }
}

// 适配移动端
@media screen and (max-width: 768px) {
  .body {
    padding: 0 30px;
    box-shadow: none;
    border: 0;
    background: transparent;
    border-radius: 0;
  }
  .w380 {
    margin: 0 auto;
    width: 100vw;
    min-width: 100vw;
  }
}
</style>
