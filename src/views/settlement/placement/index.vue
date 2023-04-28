<template>
    <div class="ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2">
        <ma-crud :options="options" :columns="columns" ref="crudRef" table-layout-fixed="table-layout-fixed">
        </ma-crud>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import settlementPlacement from '@/api/settlement/settlementPlacement'

const crudRef = ref()

const options = reactive({
  id: 'cm_settlement_placement',
  rowSelection: false,
  pk: 'id',
  operationColumn: false,
  operationWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: settlementPlacement.getList,
  import: {
    show: true,
    url: 'settlement/placement/import',
    templateUrl: 'settlement/placement/downloadTemplate',
    auth: ['settlement:placement:import']
  },
  export: {
    show: true,
    url: 'settlement/placement/export',
    auth: ['settlement:placement:export']
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
    formType: 'cascader',
    search: true,
    addDisplay: false,
    editDisplay: false,
    hide: true
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
    formType: 'cascader',
    search: true,
    addDisplay: false,
    editDisplay: false,
    multiple: false
  },
  {
    title: '产品ID',
    dataIndex: 'product_id',
    formType: 'input',
    search: true,
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
    title: '支付金额',
    dataIndex: 'pay_amount',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '订单号',
    dataIndex: 'order_no',
    formType: 'input',
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '支付时间',
    dataIndex: 'pay_time',
    formType: 'range',
    search: true,
    addDisplay: false,
    editDisplay: false,
    showTime: true
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
    title: '状态',
    dataIndex: 'state',
    formType: 'select',
    search: true,
    addDisplay: false,
    editDisplay: false,
    multiple: false
  },
  {
    title: '客户端用户ID',
    dataIndex: 'client_user_id',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    formType: 'range',
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
  },
  {
    title: '数据权限',
    dataIndex: 'created_by',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true
  }
])
</script>
<script> export default { name: 'settlement:placement' } </script>