<template>
    <div class="ma-content-block lg:flex justify-between p-4">
        <ma-crud :options="options" :columns="columns" ref="crudRef">
        </ma-crud>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import channelOrder from '@/api/channel/channelOrder'

const crudRef = ref()


const options = reactive({
  id: 'cm_channel_order',
  rowSelection: false,
  pk: 'id',
  operationColumn: false,
  operationWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: channelOrder.getList
})

const columns = reactive([
  {
    title: 'ID',
    dataIndex: 'id',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true
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
    title: '渠道标识',
    dataIndex: 'channel_slug',
    formType: 'input',
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '产品名字',
    dataIndex: 'product_name',
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
    title: '订单金额',
    dataIndex: 'order_amount',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '订单ID',
    dataIndex: 'order_id',
    formType: 'input',
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: 'UUID',
    dataIndex: 'uuid',
    formType: 'input',
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '支付金额',
    dataIndex: 'pay_amount',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '状态',
    dataIndex: 'state',
    formType: 'input',
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '支付时间',
    dataIndex: 'pay_time',
    formType: 'date',
    addDisplay: false,
    editDisplay: false,
    showTime: true
  },
  {
    title: '客户端用户ID',
    dataIndex: 'client_user_id',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '是否扣量',
    dataIndex: 'is_deduct',
    formType: 'select',
    search: true,
    addDisplay: false,
    editDisplay: false,
    dict: {
      name: 'is_deduct',
      props: {
        label: 'title',
        value: 'key'
      },
      translation: true
    }
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    formType: 'range',
    search: true,
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
<script> export default { name: 'channel:order' } </script>