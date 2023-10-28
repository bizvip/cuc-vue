<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import channelProductBind from '@/api/channel/channelProductBind'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()



const switchStatus = (statusValue, id, statusName) => {
  channelProductBind.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
    crudRef.value.refresh()
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'cm_channel_product_bind',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationWidth: 160,
  formOption: {
    viewType: 'drawer',
    width: 600
  },
  api: channelProductBind.getList,
  recycleApi: channelProductBind.getRecycleList,
  add: {
    show: true,
    api: channelProductBind.save,
    auth: ['channel:productBind:save']
  },
  edit: {
    show: true,
    api: channelProductBind.update,
    auth: ['channel:productBind:update']
  },
  delete: {
    show: true,
    api: channelProductBind.deletes,
    auth: ['channel:productBind:delete'],
    realApi: channelProductBind.realDeletes,
    realAuth: ['channel:productBind:realDeletes']
  },
  recovery: {
    show: true,
    api: channelProductBind.recoverys,
    auth: ['channel:productBind:recovery']
  }
})

const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入ID"
    }
  },
  {
    title: "渠道ID",
    dataIndex: "channel_id",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入渠道ID"
    }
  },
  {
    title: "渠道账号",
    dataIndex: "channel_account",
    formType: "input",
    search: true,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入渠道账号"
    }
  },
  {
    title: "渠道标识",
    dataIndex: "channel_slug",
    formType: "input",
    search: true,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入渠道标识"
    }
  },
  {
    title: "渠道名",
    dataIndex: "channel_name",
    formType: "input",
    search: true,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入渠道名"
    }
  },
  {
    title: "产品ID",
    dataIndex: "product_id",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入产品ID"
    }
  },
  {
    title: "产品名字",
    dataIndex: "product_name",
    formType: "input",
    search: true,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入产品名字"
    }
  },
  {
    title: "CPA分成",
    dataIndex: "cpa_sharing",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入CPA分成"
    }
  },
  {
    title: "渠道分成",
    dataIndex: "cps_sharing",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入渠道分成"
    }
  },
  {
    title: "推广链接",
    dataIndex: "promo_url",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入推广链接"
    }
  },
  {
    title: "是否上架",
    dataIndex: "is_enabled",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请输入是否上架"
    },
    dict: {
      name: "is_enabled",
      props: {
        label: "title",
        value: "key"
      },
      translation: true
    }
  },
  {
    title: "是否许可同步",
    dataIndex: "is_sync",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请输入是否许可同步"
    },
    dict: {
      name: "is_sync",
      props: {
        label: "title",
        value: "key"
      },
      translation: true
    }
  },
  {
    title: "到帐率",
    dataIndex: "transfer_rate",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入到帐率"
    }
  },
  {
    title: "对应aff",
    dataIndex: "aff",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入对应aff"
    }
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入创建时间"
    }
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: "请输入更新时间"
    }
  }
])
</script>
<script> export default { name: 'channel:productBind' } </script>