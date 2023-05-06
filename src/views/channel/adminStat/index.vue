<template>
    <div>
        <a-alert>所有统计都已经扣除支付费率</a-alert>
        <div class="ma-content-block lg:flex justify-between p-4">
            <ma-crud :options="options" :columns="columns" ref="crudRef">
            </ma-crud>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import channelAdminStat from '@/api/channel/channelAdminStat'

const crudRef = ref()

const options = reactive({
  id: 'cm_channel_admin_stat',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: false,
  operationWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: channelAdminStat.getList,
  export: {
    show: true,
    url: 'channel/adminStat/export',
    auth: ['channel:adminStat:export']
  },
  beforeRequest(params) {
    params.orderBy = 'id'
    params.orderType = 'desc'
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
    title: '管理员ID',
    dataIndex: 'admin_id',
    formType: 'input',
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '日期',
    dataIndex: 'date',
    formType: 'range',
    search: true,
    addDisplay: false,
    editDisplay: false,
    showTime: false
  },
  {
    title: '充值统计',
    dataIndex: 'deposit_total',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    formType: 'date',
    addDisplay: false,
    editDisplay: false,
    showTime: true
  },
  {
    title: '更新时间',
    dataIndex: 'updated_at',
    formType: 'date',
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  }
])
</script>
<script> export default { name: 'channel:adminStat' } </script>