<template>
    <div class="ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2">
        <ma-crud :options="options" :columns="columns" ref="crudRef">
        </ma-crud>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import channelUser from '@/api/channel/channelUser'

const crudRef = ref()

const options = reactive({
  id: 'cm_channel_user',
  rowSelection: false,
  pk: 'id',
  operationColumn: false,
  operationWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: channelUser.getList,
  export: {
    show: true,
    url: 'channel/user/export',
    auth: ['channel:user:export']
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
    editDisplay: false,
    hide: false
  },
  {
    title: '渠道ID',
    dataIndex: 'channel_id',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true
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
    title: '渠道标识',
    dataIndex: 'channel_slug',
    formType: 'input',
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '渠道用户',
    dataIndex: 'channel_account',
    formType: 'input',
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '产品ID',
    dataIndex: 'product_id',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: '产品名字',
    dataIndex: 'product_name',
    formType: 'select',
    search: true,
    addDisplay: false,
    editDisplay: false,
    multiple: true
  },
  {
    title: '用户标识',
    dataIndex: 'user_id',
    formType: 'input',
    search: true,
    addDisplay: false,
    editDisplay: false,
    width: 80
  },
  {
    title: '设备ID',
    dataIndex: 'uuid',
    formType: 'input',
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '邀请人',
    dataIndex: 'invited_user',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '邀请时间',
    dataIndex: 'invited_time',
    formType: 'range',
    search: false,
    addDisplay: false,
    editDisplay: false,
    showTime: true
  },
  {
    title: '邀请码',
    dataIndex: 'invited_code',
    formType: 'input',
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '扣量',
    dataIndex: 'is_deduct',
    formType: 'select',
    search: true,
    addDisplay: false,
    editDisplay: false,
    checkedValue: '1',
    uncheckedValue: '0',
    multiple: false,
    dict: {
      name: 'is_deduct',
      props: {
        label: 'title',
        value: 'key'
      },
      translation: true
    },
    width: 60
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    formType: 'range',
    search: true,
    addDisplay: false,
    editDisplay: false,
    hide: true,
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
<script> export default { name: 'channel:user' } </script>