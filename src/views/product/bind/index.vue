<template>
    <div class="ma-content-block lg:flex justify-between p-4">
        <ma-crud :options="options" :columns="columns" ref="crudRef">
        </ma-crud>
    </div>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue'
import productBind from '@/api/product/productBind'
import { Message } from '@arco-design/web-vue'
import channelList from '@/api/channel/channelList'

const crudRef = ref()

let dictData = null
onMounted(async () => {
  if (!dictData) {
    let resp = await channelList.getDictList()
    if (parseInt(resp.code) === 200) {
      dictData = resp.data
      console.log(dictData)
    } else {
      console.log('请求失败')
    }
  }
})
const switchStatus = (statusValue, id, statusName) => {
  productBind.changeStatus({
    id,
    statusName,
    statusValue
  }).then(res => {
    res.success && Message.success(res.message)
  }).catch(e => {
    console.log(e)
  })
}

const options = reactive({
  id: 'cm_product_bind',
  rowSelection: false,
  pk: 'id',
  operationColumn: true,
  operationWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 700
  },
  api: productBind.getList,
  add: {
    show: true,
    api: productBind.save,
    auth: ['product:bind:save']
  },
  edit: {
    show: true,
    api: productBind.update,
    auth: ['product:bind:update']
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
    title: '渠道账号',
    dataIndex: 'channel_account',
    formType: 'select',
    search: true,
    commonRules: {
      required: true,
      message: '请输入渠道账号'
    },
    dict: {
      data: dictData,
      props: {
        label: 'channel_account',
        value: 'id',
      },
      translation: true
    }
  },
  {
    title: '渠道ID',
    dataIndex: 'channel_id',
    formType: 'input',
    search: true,
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: '产品名字',
    dataIndex: 'product_name',
    formType: 'input',
    search: true,
    commonRules: {
      required: true,
      message: '请输入产品名字'
    }
  },
  {
    title: '代理标识',
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
    commonRules: {
      required: true,
      message: '请输入渠道标识'
    }
  },
  {
    title: 'CPA分成',
    dataIndex: 'cpa_sharing',
    formType: 'input',
    commonRules: {
      required: true,
      message: '请输入CPA分成'
    }
  },
  {
    title: '渠道分成',
    dataIndex: 'cps_sharing',
    formType: 'input',
    commonRules: {
      required: true,
      message: '请输入渠道分成'
    }
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
    title: '推广链接',
    dataIndex: 'promo_url',
    formType: 'input',
    search: true,
    commonRules: {
      required: true,
      message: '请输入推广链接'
    }
  },
  {
    title: '是否上架',
    dataIndex: 'is_enabled',
    formType: 'select',
    search: true,
    commonRules: {
      required: true,
      message: '请输入是否上架'
    },
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
    title: '许可同步',
    dataIndex: 'is_sync',
    formType: 'select',
    search: true,
    commonRules: {
      required: true,
      message: '请选择是否许可同步'
    },
    multiple: false,
    dict: {
      name: 'is_sync',
      props: {
        label: 'title',
        value: 'key'
      },
      translation: true
    }
  },
  {
    title: '到帐率',
    dataIndex: 'transfer_rate',
    formType: 'input',
    commonRules: {
      required: true,
      message: '请输入到帐率'
    }
  },
  {
    title: '对应aff',
    dataIndex: 'aff',
    formType: 'input',
    commonRules: {
      required: true,
      message: '请输入对应aff'
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
    hide: true,
    showTime: true
  }
])
</script>
<script> export default { name: 'product:bind' } </script>