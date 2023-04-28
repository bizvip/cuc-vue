<template>
    <div class="ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2">
        <ma-crud :options="options" :columns="columns" ref="crudRef">
        </ma-crud>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import channelInstallActivity from '@/api/channel/channelInstallActivity'

const crudRef = ref()

const options = reactive({
  beforeRequest: (params) => {
    params.orderBy = 'id'
    params.orderType = 'desc'
  },

  id: 'cm_channel_install_activity',
  // rowSelection: {
  //   showCheckedAll: false
  // },
  rowSelection: false,
  pk: 'id',
  operationColumn: false,
  operationWidth: 160,
  formOption: {
    viewType: 'drawer',
    width: 600
  },
  api: channelInstallActivity.getList,
  export: {
    show: true,
    url: 'channel/installActivity/export',
    auth: ['channel:installActivity:export']
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
    title: '渠道ID',
    dataIndex: 'channel_id',
    formType: 'input-number',
    search: true,
    addDisplay: false,
    editDisplay: false,
    min: 1,
    max: 4200000000,
    step: 1
  },
  {
    title: '统计日期',
    dataIndex: 'date',
    formType: 'date',
    search: true,
    addDisplay: false,
    editDisplay: false,
    showTime: false,
    range: false
  },
  {
    title: '注册用户',
    dataIndex: 'register_count',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '活跃用户',
    dataIndex: 'activity_today_count',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '昨日活跃',
    dataIndex: 'activity_yesterday_count',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '三日活跃',
    dataIndex: 'activity_3_count',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '七日活跃',
    dataIndex: 'activity_7_count',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '15日活跃',
    dataIndex: 'activity_15_count',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '近一月活跃',
    dataIndex: 'activity_month_count',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true,
    mode: 'date',
    showTime: true
  },
  {
    title: '更新时间',
    dataIndex: 'updated_at',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true,
    mode: 'date',
    showTime: true
  }
])
</script>
<script> export default { name: 'channel:installActivity' } </script>