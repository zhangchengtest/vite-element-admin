<template>
  <div>
  <div class="diffec">
    <div class="difftodo">
      <div class="to" @click="changeDiff('add')"><Time  ref="headerChild"></Time></div>
      <div class="to" @click="changeDiff('del')">步数：{{ cal }}</div>
    </div>
  </div>
  <div class="main">
    <!-- 游戏 -->
    <num-game
      :gamedata="state.gamedata"
      :gameArr="state.arrdata"
      ref="game"
      @endCallback="endCallback"
      @shouldMoveCallback="shouldMoveCallback"
    ></num-game>
  </div>

  <div class="todos">
    <div class="change" @click="refresh">换图</div>
    <div class="start" @click="start" v-show="state.showStart">{{ state.btnName }}</div>
  </div>
  <div class="diffec">
    <h2>
      <p class="tip">{{ state.msg }}</p>
    </h2>
  </div>
  <div class="main">
    <!-- <BoxCard :ranks="state.myrank" /> -->
    <TransactionTable :ranks="state.myrank" />
  </div>
</div>
</template>

<script setup>
import BoxCard from './components/BoxCard'
import TransactionTable from './components/TransactionTable.vue'
import { computed, reactive, watch, ref } from 'vue'
import NumGame from './components/NumGame.vue'
import Time from './components/Time.vue'
import { queryPuzzle, queryPuzzleByUrl, savePuzzleRank, queryPuzzleRank } from '/@/api/game'

import { useUserStore } from '/@/store'
import { useRoute, useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

// userStore.RESET_INFO()

watch( route, ( newValue, oldValue ) => {
  console.log( 'watch 已触发', newValue, oldValue )
  // 执行onMounted代码
  url.value = newValue.query.randomUrl
  getListByUrl( newValue.query.randomUrl )
} )

const game = ref()
const headerChild = ref()

const list = ref( null )
const url = ref( null )
const orders = ref( null )
const myarr = ref( null )
const myranks = ref( null )
const cal = ref( 0 )
const listLoading = ref( true )

function creatArr2( level, orders ) {
  const arr = []
  let lin = []
  const levels = level * level + 1
  for ( let i = 1; i < levels; i++ ) {
    lin.push( orders[i - 1] )
    if ( lin.length === level ) {
      arr.push( lin )
      lin = []
    }
  }
  // arr[level - 1][level - 1] = 0
  return arr
}

const toredirect = async() => {
  listLoading.value = true
  const { data } = await queryPuzzle()

  router.push( '/puzzle/index?randomUrl=' + data.url )
}

const getRanks = async url => {
  listLoading.value = true
  const { data } = await queryPuzzleRank( url )

  myranks.value = data

  setTimeout( () => {
    listLoading.value = false
  }, 1.5 * 1000 )
}

const saveRanks = async data => {
  await savePuzzleRank( data )
  getRanks( url.value )
}

const getListByUrlRandom = async url => {
  listLoading.value = true
  const { data } = await queryPuzzleByUrl( url, 'random' )

  list.value = data.piecces
  orders.value = data.orders

  myarr.value = creatArr2( 3, data.orders )
  setTimeout( () => {
    listLoading.value = false
  }, 1.5 * 1000 )
}
const getListByUrl = async url => {
  listLoading.value = true
  const { data } = await queryPuzzleByUrl( url, 'normal' )

  list.value = data.piecces
  orders.value = data.orders

  myarr.value = creatArr2( 3, data.orders )
  getRanks( url )
  setTimeout( () => {
    listLoading.value = false
  }, 1.5 * 1000 )
}

url.value = route.query.randomUrl
console.log( url.value )
if ( !route.query.randomUrl ) {
  toredirect()
} else {
  getListByUrl( url.value )
}

var img1 = 'http://st.punengshuo.com/images/output1.png'
var img2 = 'http://st.punengshuo.com/images/output2.png'
var img3 = 'http://st.punengshuo.com/images/output3.png'
var img4 = 'http://st.punengshuo.com/images/output4.png'
var img5 = 'http://st.punengshuo.com/images/output5.png'
var img6 = 'http://st.punengshuo.com/images/output6.png'
var img7 = 'http://st.punengshuo.com/images/output7.png'
var img8 = 'http://st.punengshuo.com/images/output8.png'
var img9 = 'http://st.punengshuo.com/images/output8.png'

const isStart = ref( false )

// // 通关回电函数
// const gameEndCallback = val => {
//   isStart.value = false
//   emit( 'endCallback' )
// }
// const deffic = Number( gamedata.difficulty )

const endCallback = () => {
  // 通关了
  state.msg = '欧耶!我过关了'
  headerChild.value.stop()
  state.showStart = true
}

const shouldMoveCallback = () => {
  // shouldMove( x, y, x2, y2 )
  if ( !isStart.value ) return
  cal.value = cal.value + 1
  var arr = document.querySelectorAll( 'img' )
  var result = ''
  for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i].getAttribute( 'class' ) && arr[i].getAttribute( 'class' ).includes( 'draggable-mirror' ) ) {
    } else if ( arr[i].getAttribute( 'class' ) && arr[i].getAttribute( 'class' ).includes( 'draggable--original' ) ) {
    } else {
      var s = arr[i]
        .getAttribute( 'src' )
        .substring( len( arr[i].getAttribute( 'src' ) ) - 5, len( arr[i].getAttribute( 'src' ) ) - 4 )

      result = result + ',' + s
    }
  }
  // console.log( result.substring( 1, len( result ) ) )
  gameEnd( result.substring( 1, len( result ) ) )
}

function len( str ) {
  return str.length
}

function gameEnd( result ) {
  const target = creatArr( 3 ).toString()
  if ( result === target ) {
    saveRanks( { spendTime : headerChild.value.seconds, step : cal.value, username : userStore.name, url : url.value } )
    setTimeout( () => {
      endCallback( true )
    }, 100 )
  }
}

// 创建数组
function creatArr( level ) {
  const arr = []
  let lin = []
  const levels = level * level + 1

  for ( let i = 1; i < levels; i++ ) {
    lin.push( i )
    if ( lin.length === level ) {
      arr.push( lin )
      lin = []
    }
  }
  // arr[level - 1][level - 1] = 0
  return arr
}
const state = reactive( {
  btnName : '开始游戏',
  msg : '',
  showStart : true,
  myrank : computed( () => {
    const statusMap = {
      1 : 'danger',
      2 : 'warning',
      3 : 'success'
    }
    if ( myranks.value && myranks.value.length > 0 ) {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      myranks.value = myranks.value.map( item => {
        return {
          ...item,
          statusStr : statusMap[item.sort]
        }
      } )
    } else {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      myranks.value = []
    }

    return myranks.value
  } ),
  arrdata : computed( () => {
    return myarr.value
  } ),
  gamedata : {
    level : 3,
    orders : computed( () => {
      if ( orders.value ) {
        return orders.value
      }
      return [1, 2, 3, 4, 5, 6, 7, 8, 9]
    } ),
    mode : 'img', // 如果是 number 后期会自动生成, 如果是 img 需要传对应的图片
    imgs : computed( () => {
      if ( list.value ) {
        return list.value
      }
      return [img1, img2, img3, img4, img5, img6, img6, img7, img8, img9]
    } ),
    style : {
      sliderBg : '#ffc107',
      sliderColor : '#000',
      sliderFontSize : '18px',
      gameBoxBg : '#fff'
    },
    difficulty : 4 // 难度分为 1 到正无穷 推荐设置[10-100]
  }
} )

const start = () => {
  headerChild.value.start()
  isStart.value = true
  getListByUrlRandom( url.value )
  cal.value = 0
  state.msg = ''
  state.showStart = false
}

const refresh = () => {
  state.msg = ''
  toredirect()
}
</script>

<style lang="scss">
.changeModel {
  display: flex;
  padding-top: 5vh;
  justify-content: space-around;
  padding: 0 50px;
  box-sizing: border-box;
  .model {
    width: 100px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #5a009b;
    cursor: pointer;
    user-select: none;
  }
}
.diffec {
  text-align: center;
  color: #fff;
  .tip {
    font-size: 12px;
    padding-top: 0;
    margin-top: 2px;
    color: green;
  }
  .difftodo {
    display: flex;
    justify-content: center;
    .to {
      padding: 10px 15px;
      margin: 10px;
      background: #5a009b;
      border-radius: 10px;
      font-size: 12px;
      cursor: pointer;
      user-select: none;
    }
  }
}
.main {
  width: 300px;
  height: 300px;
  margin: auto;
  padding-top: 10px;
}
.todos {
  display: flex;
  padding-top: 20px;
  width: 300px;
  margin: auto;
  justify-content: space-between;
  font-size: 12px;
  .change {
    width: 60px;
    height: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #5a009b;
    cursor: pointer;
    user-select: none;
  }
  .start {
    width: 80px;
    height: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #5a009b;
    cursor: pointer;
    user-select: none;
  }
}
</style>
