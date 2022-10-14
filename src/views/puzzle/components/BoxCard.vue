<template>
  <el-card class="box-card-component" style="margin-left: 8px">

    <div style="position: relative">
      <TextHover class-name="mallki-text" />
      <div style="padding-top: 15px" class="progress-item" v-for="(item, index) in ranks" :key="item">
        <span>{{item.username}}</span>
        <el-progress :percentage="90" :showx="index"/>
      </div>

    </div>
  </el-card>
</template>

<script setup>
import { reactive, computed } from 'vue'
import YuThumb from '/@/components/YuThumb'
import TextHover from '/@/components/YuTextHover'
import { useUserStore } from '/@/store'

const userStore = useUserStore()

const set = reactive( {
  name : computed( () => {
    return userStore.name
  } ),

  avatar : computed( () => {
    return userStore.avatar
  } ),

  roles : computed( () => {
    return userStore.roles
  } )
} )

const props = defineProps( {
  ranks : {
    type : Array,
    default() {
      return []
    }
  }
} )

defineOptions( {
  name : 'BoxCard'
} )
</script>

<style lang="scss">
.box-card-component {
  .el-card__header {
    padding: 0px !important;
  }
}
</style>
<style lang="scss" scoped>
.box-card-component {
  .box-card-header {
    position: relative;
    height: 220px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .mallki-text {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
    font-weight: bold;
  }
  .yuThumb {
    z-index: 100;
    height: 70px !important;
    width: 70px !important;
    position: absolute !important;
    top: -45px;
    left: 0;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none !important;
    :deep(.pan-info) {
      box-shadow: none !important;
    }
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 1510px) {
    .mallki-text {
      display: none;
    }
  }
}
</style>
