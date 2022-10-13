import { reactive, toRefs } from 'vue'

export default function useCreateGame( orders, level, diffec, gameEndCallback ) {
  const state = {
    arr : [],
    diffec
  }
  let startX = level - 1
  let startY = level - 1
  state.arr = creatArr2( level, orders )
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
    console.log( arr )
    return arr
  }

  // 创建数组
  function creatArr2( level, orders ) {
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
    console.log( 'ssss' )
    console.log( arr )
    console.log( orders )
    return arr
  }

  // 上移动
  function moveTop( x, y ) {
    if ( x <= 0 ) return -1
    //   开始交换位置
    const okx = x - 1
    move( x, y, okx, y )
    return {
      x : okx,
      y
    }
  }
  // 下移动
  function moveDown( x, y ) {
    if ( x >= level - 1 ) return -1
    const okx = x + 1
    move( x, y, okx, y )
    return {
      x : okx,
      y
    }
  }
  // 左移动

  function moveLeft( x, y ) {
    if ( y <= 0 ) return -1
    const oky = y - 1
    move( x, y, x, oky )
    return {
      x,
      y : oky
    }
  }

  // 右移动
  function moveRight( x, y ) {
    if ( y >= level - 1 ) return -1
    const oky = y + 1
    move( x, y, x, oky )
    return {
      x,
      y : oky
    }
  }

  // 移动函数
  function move( x, y, moveX, moveY ) {
    const num = state.arr[x][y]
    state.arr[x][y] = state.arr[moveX][moveY]
    state.arr[moveX][moveY] = num
    //   return arr;
  }
  // 寻找空白块的位置
  function seekEmpty() {
    const arr = state.arr
    for ( let i = 0; i < arr.length; i++ ) {
      for ( let j = 0; j < arr[i].length; j++ ) {
        if ( Number( arr[i][j] ) === 0 ) {
          return {
            emptyX : i,
            emptyY : j
          }
        }
      }
    }
  }
  //   检查是否完成

  function gameEnd() {
    const target = creatArr( level ).toString()
    console.log( state.arr.toString() )
    if ( state.arr.toString() === target ) {
      setTimeout( () => {
        gameEndCallback( true )
      }, 100 )
    }
  }

  function shouldMove( x, y, moveX, moveY ) {
    move( x, y, moveX, moveY )
    gameEnd()
  }
  // 随机打乱
  function moveInit( diffic ) {
    state.arr = creatArr( level )
    const num = diffic || state.diffec

    const fns = [moveTop, moveDown, moveLeft, moveRight]
    let Index = null
    let fn
    for ( let i = 0; i < num; i++ ) {
      Index = Math.floor( Math.random() * fns.length )
      //   moveConsole(Index);
      fn = fns[Index]( startX, startY )
      if ( fn != -1 ) {
        const { x, y } = fn
        startX = x
        startY = y
      }
    }
  }
  return {
    moveTop,
    shouldMove,
    moveInit,
    gameEnd,
    ...toRefs( state )
  }
}
