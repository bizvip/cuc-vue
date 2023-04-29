<template>
    <div>
        <a-alert closable class="mb-2">【关】代表关闭预警。【开】代表打开预警。预警打开后将看不到数据</a-alert>
        <div class="ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2">
            <ma-crud :options="options" :columns="columns" ref="crudRef">
                <template #is_alert="{ record }">
                    <a-switch :default-checked="parseInt(record.is_alert) === 1"
                              checked-text="开" unchecked-text="关"
                              checked-value="1" unchecked-value="0"
                              @change="updateValue($event, record.id,'is_alert')"
                    />
                </template>
            </ma-crud>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import channelAlert from '@/api/channel/channelAlert'
import { Message } from '@arco-design/web-vue'

const crudRef = ref()

const updateValue = (value, id, name) => {
  channelAlert.updateValue({
    id,
    name,
    value
  }).then(res => {
    res.success && Message.success(res.message)
    crudRef.value.refresh()
  }).catch(e => {
    console.log(e)
  })
}

const options = reactive({
  id: 'cm_channel_alert',
  rowSelection: false,
  pk: 'id',
  operationColumn: false,
  operationWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: channelAlert.getList,
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
    title: '是否预警',
    dataIndex: 'is_alert',
    formType: 'select',
    search: true,
    addDisplay: false,
    commonRules: {
      required: true,
      message: '请输入是否预警'
    },
    sortable: {
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: true
    },
    multiple: true
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
  }
])
</script>
<script> export default { name: 'channel:alert' } </script>