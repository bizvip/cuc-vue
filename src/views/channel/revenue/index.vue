<template>
    <div class="ma-content-block lg:flex justify-between p-4">
        <ma-crud :options="options" :columns="columns" ref="crudRef">
        </ma-crud>
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
  }
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
    title: '创建权限',
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