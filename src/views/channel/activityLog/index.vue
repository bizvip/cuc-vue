<template>
    <div class="ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2">
        <ma-crud :options="options" :columns="columns" ref="crudRef">
        </ma-crud>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import channelActivityLog from '@/api/channel/channelActivityLog'

const crudRef = ref()

const options = reactive({
  id: 'cm_channel_activity_log',
  rowSelection: false,
  pk: 'id',
  operationColumn: false,
  operationWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: channelActivityLog.getList,
  contextMenu: {
    enabled: false
  },
  export: {
    show: true,
    url: 'channel/activityLog/export',
    auth: ['channel:activityLog:export']
  }
})

const columns = reactive([
  {
    title: 'ID',
    dataIndex: 'id',
    formType: 'input-number',
    search: true,
    addDisplay: false,
    editDisplay: false,
    hide: true,
    sortable: {
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: true
    },
    min: 1,
    max: 4100000000,
    step: 1
  },
  {
    title: '产品id',
    dataIndex: 'product_id',
    formType: 'input-number',
    search: true,
    min: 1,
    max: 4200000000,
    step: 1
  },
  {
    title: '产品名字',
    dataIndex: 'product_name',
    formType: 'input',
    search: true
  },
  {
    title: 'App用户ID',
    dataIndex: 'uid',
    formType: 'input-number',
    commonRules: {
      required: true,
      message: '请输入App用户ID'
    },
    min: 1,
    max: 4200000000,
    step: 1
  },
  {
    title: 'aff(只做兼容预留)',
    dataIndex: 'invited_aff',
    formType: 'input',
    commonRules: {
      required: true,
      message: '请输入aff(只做兼容预留)'
    }
  },
  {
    title: '注册时间',
    dataIndex: 'register_time',
    formType: 'range',
    search: true,
    addDisplay: false,
    editDisplay: false,
    showTime: true
  },
  {
    title: '活跃时间',
    dataIndex: 'last_activity_time',
    formType: 'range',
    search: true,
    addDisplay: false,
    editDisplay: false,
    showTime: true
  },
  {
    title: '渠道名',
    dataIndex: 'channel_name',
    formType: 'input',
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '渠道账号',
    dataIndex: 'channel_account',
    formType: 'input',
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '代理id',
    dataIndex: 'agent_id',
    formType: 'input-number',
    search: true,
    addDisplay: false,
    min: 1,
    max: 4100000000,
    step: 1
  },
  {
    title: '备注数据',
    dataIndex: 'remark',
    formType: 'textarea',
    hide: true
  }
])
</script>
<script> export default { name: 'channel:activityLog' } </script>