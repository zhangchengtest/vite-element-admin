<template>
  <el-table ref="multipleTable" :data="ranks" tooltip-effect="dark" style="width: 100%">
    <el-table-column label="排名" max-width="100" align="center">
      <template #default="scope">
        <el-tag :type="scope.row.statusStr">
          {{ scope.$index + 1 }}
        </el-tag>
      </template>
    </el-table-column>

    <el-table-column label="名称" max-width="100" align="center">
      <template #default="scope"> {{ scope.row.username }} </template>
    </el-table-column>

    <el-table-column prop="name" label="时间">
      <template #default="scope"> {{ scope.row.spendTime }} </template>
    </el-table-column>

    <el-table-column prop="name" label="步数">
      <template #default="scope"> {{ scope.row.step }} </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref, reactive, computed, onBeforeMount } from 'vue'

// eslint-disable-next-line prefer-const
let list = ref( [] )

const set = reactive( {
  newList : computed( () => {
    const statusMap = {
      Completed : 'success',
      Pending : 'warning',
      Cancelled : 'danger'
    }
    if ( list.value && list.value.length > 0 ) {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      list.value = list.value.map( item => {
        return {
          ...item,
          orderNoStr : item.order_no.substring( 0, 30 ),
          statusStr : statusMap[item.status]
        }
      } )
    } else {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      list.value = []
    }
    return list.value
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
  name : 'TransactionTable'
} )
</script>
