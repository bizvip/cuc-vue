<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import channelAlert from '@/api/channel/channelAlert'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()



const switchStatus = (statusValue, id, statusName) => {
  channelAlert.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'cm_channel_alert',
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
  api: channelAlert.getList
})

const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "渠道ID",
    dataIndex: "channel_id",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "渠道账号",
    dataIndex: "channel_account",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "是否预警",
    dataIndex: "is_alert",
    formType: "select",
    search: true,
    addDisplay: false,
    commonRules: {
      required: true,
      message: "请输入是否预警"
    },
    sortable: {
      sortDirections: [
        "ascend",
        "descend"
      ],
      sorter: true
    },
    multiple: true
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    showTime: true
  }
])
</script>
<script> export default { name: 'channel:alert' } </script>