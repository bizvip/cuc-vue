<template>
    <div class="ma-content-block lg:flex justify-between p-4">
        <ma-crud :options="options" :columns="columns" ref="crudRef">
        </ma-crud>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import productMine from '@/api/product/productMine'

const crudRef = ref()

const options = reactive({
  id: 'cm_product_mine',
  rowSelection: false,
  pk: 'id',
  operationColumn: false,
  operationWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: productMine.getList
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
    formType: 'select',
    search: true,
    addDisplay: false,
    editDisplay: false,
    multiple: false
  },
  {
    title: '渠道标识',
    dataIndex: 'channel_slug',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '渠道分成',
    dataIndex: 'channel_sharing_rate',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '到帐率',
    dataIndex: 'transfer_rate',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '产品名字',
    dataIndex: 'product_name',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: 'LOGO',
    dataIndex: 'logo_url',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '官网地址',
    dataIndex: 'official_url',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '状态',
    dataIndex: 'is_enabled',
    formType: 'select',
    search: true,
    addDisplay: false,
    editDisplay: false,
    multiple: false,
    dict: {
      name: 'is_enabled',
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
    formType: 'date',
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
    showTime: true
  },
  {
    title: '删除时间',
    dataIndex: 'deleted_at',
    formType: 'date',
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  }
])
</script>
<script> export default { name: 'product:mine' } </script>