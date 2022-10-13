<template>
  <div class="_game">
    <div class="gameMain" :style="{ backgroundColor: gamedata.style.gameBoxBg }">
      <div class="y-axis" :class="emptyNum === index ? 'empty' : ''" v-for="(item, index) in gameArr" :key="item">
        <div
          class="x-axis"
          :class="item2 === 0 ? 'empty' : ''"
          :style="{
            backgroundColor: gamedata.style.sliderBg,
            color: gamedata.style.sliderColor,
            fontSize: gamedata.style.sliderFontSize,
          }"
          v-for="(item2, index2) in item"
          :key="index2"
        >
          <img
            :src="gamedata.imgs[item2 - 1]"
            v-if="gamedata.mode === 'img' && item2 != 0"
            alt=""
            :showx="index"
            :showy="index2"
          />
          <span v-else-if="item2 != 0">
            {{ item2 }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRef, toRefs, computed, onMounted } from 'vue'
import { Swappable } from '@shopify/draggable'
export default {
  props : {
    gameArr : {
      type : Object
    },
    gamedata : {
      type : Object
    },
    title : {
      type : String
    }
  },
  setup( props, { emit } ) {
    const gamedata = toRef( props, 'gamedata' )
    const state = reactive( {
      emptyNum : 9
    } )

    const a = ref()
    const b = ref()

    onMounted( () => {
      const swappable = new Swappable( document.querySelectorAll( '.gameMain' ), {
        draggable : 'img',
        delay : 0,
        mirror : {
          constrainDimensions : true
        }
      } )
      swappable.on( 'drag:start', () => {} )
      swappable.on( 'swappable:swapped', event => {
        // console.log( event.data.dragEvent.source.currentSrc )
        // // console.log( event.swappedElement.currentSrc )
        // var x2 = event.swappedElement.getAttribute( 'showx' )
        // var y2 = event.swappedElement.getAttribute( 'showy' )
        // a.value = x2
        // b.value = y2
      } )
      swappable.on( 'drag:stop', event => {
        emit( 'shouldMoveCallback' )
        // console.log( event )
        // console.log( event.data.source.currentSrc )
        // shouldMove()
      } )
      swappable.on( 'drag:move', () => {} )
    } )

    return {
      ...toRefs( state )
    }
  }
}
</script>

<style lang="scss" scoped>
._game {
  width: 100%;
  height: 100%;
  .gameMain {
    background: #5a009b;
    border-radius: 10px;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: auto;
    .y-axis {
      display: flex;
      height: 32%;
      align-items: center;
      justify-content: space-evenly;
    }
    .x-axis {
      width: 32%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: red;
      border-radius: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .empty {
      background-color: transparent !important;
    }
  }
}
</style>
