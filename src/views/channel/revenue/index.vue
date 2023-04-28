<template>
    <div>
        <div class="ma-content-block justify-between p-2">
            <a-card :bordered="false" :style="{ width: '100%'}">
                <a-card-grid
                        v-for="(_, index) in new Array(20)"
                        :key="index"
                        :hoverable="index % 2 === 0"
                        :style="{ width: '20%' }"
                >
                    <a-card class="card-demo" :bordered="false" hoverable="hoverable">
                        <a-statistic :title="`色播产品${index}`" :value="Math.floor(Math.random() * 1000000)" :value-style="{color:'#333'}"
                                     show-group-separator animation placeholder="暂无数据">
                            <template #extra>累计收益：{{ Math.floor(Math.random() * 1000000 * 100) }}</template>
                        </a-statistic>
                    </a-card>
                </a-card-grid>
            </a-card>
        </div>

        <div class="ma-content-block lg:flex justify-between p-2 mt-2">
            <ma-crud :options="options" :columns="columns" ref="crudRef">
            </ma-crud>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import channelRevenue from '@/api/channel/channelRevenue'

const crudRef = ref()

const options = reactive({
  id: 'cm_channel_revenue',
  rowSelection: false,
  pk: 'id',
  operationColumn: false,
  operationWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: channelRevenue.getList,
  import: {
    show: true,
    url: 'channel/revenue/import',
    templateUrl: 'channel/revenue/downloadTemplate',
    auth: ['channel:revenue:import']
  },
  export: {
    show: true,
    url: 'channel/revenue/export',
    auth: ['channel:revenue:export']
  },
  beforeRequest(params) {
    params.orderBy = 'id'
    params.orderType = 'desc'
  },
  searchColNumber: 3
})

const columns = reactive([
  {
    title: 'ID',
    dataIndex: 'id',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '统计日期',
    dataIndex: 'date',
    formType: 'range',
    search: true,
    addDisplay: false,
    editDisplay: false,
    showTime: false
  },
  {
    title: '渠道ID',
    dataIndex: 'channel_id',
    formType: 'input',
    search: false,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '产品ID',
    dataIndex: 'product_id',
    formType: 'input',
    search: false,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '渠道名字',
    dataIndex: 'channel_name',
    formType: 'input',
    search: false,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '产品名字',
    dataIndex: 'product_name',
    formType: 'input',
    search: false,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '收益金额',
    dataIndex: 'amount',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '创建数据',
    dataIndex: 'created_by',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    mode: 'date',
    showTime: true
  },
  {
    title: '更新时间',
    dataIndex: 'updated_at',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    mode: 'date',
    showTime: true
  }
])
</script>
<script> export default { name: 'channel:revenue' } </script>
<style scoped>
.card-demo {
    width: 100%;
}

.card-demo :deep(.arco-card-header) {
    border: none;
}
</style>
