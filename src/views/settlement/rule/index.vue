<template>
    <div class="ma-content-block lg:flex justify-between p-4">
        <ma-crud :options="options" :columns="columns" ref="crudRef">
        </ma-crud>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import settlementRule from '@/api/settlement/settlementRule'
import { Message } from '@arco-design/web-vue'

const crudRef = ref()

const switchStatus = (statusValue, id, statusName) => {
  settlementRule.changeStatus({ id, statusName, statusValue }).then(res => {
    res.success && Message.success(res.message)
  }).catch(e => {
    console.log(e)
  })
}

const options = reactive({
  id: 'cm_settlement_rule',
  rowSelection: false,
  pk: 'id',
  operationColumn: true,
  operationWidth: 160,
  formOption: {
    viewType: 'drawer',
    width: 600
  },
  api: settlementRule.getList,
  add: {
    show: true,
    api: settlementRule.save,
    auth: ['settlement:rule:save']
  },
  edit: {
    show: true,
    api: settlementRule.update,
    auth: ['settlement:rule:update']
  },
  delete: {
    show: true,
    api: settlementRule.deletes,
    auth: ['settlement:rule:delete']
  },
  export: {
    show: true,
    url: 'settlement/rule/export',
    auth: ['settlement:rule:export']
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
    title: '渠道ID',
    dataIndex: 'channel_id',
    formType: 'input',
    search: true,
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: '请输入渠道ID'
    }
  },
  {
    title: '广告类型',
    dataIndex: 'ad_type',
    formType: 'select',
    search: true,
    commonRules: {
      required: true,
      message: '请选择广告类型'
    },
    multiple: false,
    dict: {
      name: 'ad-type',
      props: {
        label: 'title',
        value: 'key',
      },
      translation: true,
    },
    width: 60

  },
  {
    title: '渠道信息',
    dataIndex: 'channel_info',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '是否开启',
    dataIndex: 'is_enabled',
    formType: 'radio',
    search: true,
    commonRules: {
      required: true,
      message: '请选择是否开启'
    },
    multiple: false,
    dict: {
      name: 'is_enabled',
      props: {
        label: 'title',
        value: 'key',
      },
      translation: true,
    },
    width: 60
  },
  {
    title: '扣量基数',
    dataIndex: 'deduction_base',
    formType: 'input',
    commonRules: {
      required: true,
      message: '请输入扣量基数'
    }
  },
  {
    title: '扣量点位',
    dataIndex: 'deduction_pp',
    formType: 'input',
    commonRules: {
      required: true,
      message: '请输入扣量点位'
    }
  },
  {
    title: '总代ID',
    dataIndex: 'top_id',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: '管理ID',
    dataIndex: 'admin_id',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: '管理名',
    dataIndex: 'admin_usr',
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
<script> export default { name: 'settlement:rule' } </script>