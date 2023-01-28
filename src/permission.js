import router from './router'
import cookies from '/@/utils/cookies'
import { TOKEN } from '/@/config/constant'
import getPageTitle from '/@/utils/getPageTitle'
import { useUserStore, usePermissionStore } from '/@/store'
import NProgress from '/@/utils/progress'
import http from '/@/utils/request'

const whiteList = ['/login']
router.beforeEach( async( to, from, next ) => {
  NProgress.start()
  document.title = getPageTitle( to.meta?.title )
  const hasToken = cookies.get( TOKEN )
  const userStore = useUserStore()
  const permissionStore = usePermissionStore()

  if ( to.path === '/loginToken' ) {
    next()
    NProgress.done()
    return
  }
  if ( to.query.token && to.query.token != '' ) {
    console.log( to.query.token )
    next( '/loginToken?token=' + to.query.token )
    NProgress.done()
    return
  }
  if ( hasToken && hasToken !== 'undefined' ) {
    if ( to.path === '/login' ) {
      next( { path : '/' } )
      NProgress.done()
    } else {
      const hasRoles = userStore.roles && userStore.roles.length > 0
      if ( hasRoles ) {
        next()
      } else {
        try {
          const { roles } = await userStore.GET_USER_INFO()
          const accessRoutes = await permissionStore.SET_ROUTES( roles )
          accessRoutes.forEach( item => {
            router.addRoute( item )
          } )
          next( { ...to, replace : true } )
        } catch ( error ) {
          await userStore.RESET_INFO()
          next( '/login' )
          NProgress.done()
        }
      }
    }
  } else {
    if ( whiteList.indexOf( to.path ) !== -1 ) {
      next()
    } else {
      // 是否是微信浏览器
      if ( /(micromessenger)/i.test( navigator.userAgent ) ) {
        // 是否电脑微信或者微信开发者工具
        if ( /(WindowsWechat)/i.test( navigator.userAgent ) || /(wechatdevtools)/i.test( navigator.userAgent ) ) {
          console.log( '电脑微信或者微信开发者工具' )
          next( '/login' )
          NProgress.done()
        } else {
          // 手机微信打开的浏览器
          alert( http.getBaseUrl() )
          NProgress.done()
        }
      } else {
        console.log( '其他浏览器' )
        next( '/login' )
        NProgress.done()
      }
    }
  }
} )

router.afterEach( () => {
  NProgress.done()
} )
