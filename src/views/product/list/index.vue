<template>
    <div>
        <div>

        </div>
        <div class="ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2">

            <ma-crud :options="options" :columns="columns" ref="crudRef">

                <template #is_enabled="{record}">
                    <a-switch :checked-value="1" unchecked-value="0"
                              @change="updateValue($event, record.id,'is_enabled')"
                              :default-checked="parseInt(record.is_enabled) === 1"
                              checked-text="开" unchecked-text="关"/>
                </template>

                <template #sort="{ record }">
                    <a-input-number v-model="record.sort"
                                    placeholder="可填入排序，默认0" :min="0"
                                    :max="4200000000"
                                    @change="updateValue($event,record.id,'sort')"/>
                </template>

                <template #logo_url="{ record }">
                    <a-image :src="record.logo_url" fit="cover" width="60"
                             height="60" :alt="record.product_name"/>
                </template>

            </ma-crud>

        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import productList from '@/api/product/productList'
import { Message } from '@arco-design/web-vue'

const crudRef = ref()

const updateValue = (value, id, name) => {
  productList.updateValue({
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
  id: 'cm_product_list',
  rowSelection: false,
  pk: 'id',
  operationColumn: true,
  operationWidth: 100,
  operationColumnWidth: 100,
  formOption: {
    viewType: 'modal',
    width: 600,
  },
  api: productList.getList,
  recycleApi: productList.getRecycleList,
  add: {
    show: true,
    api: productList.save,
    auth: ['product:list:save'],
  },
  edit: {
    show: true,
    api: productList.update,
    auth: ['product:list:update'],
  }, // delete: {
  //   show: true,
  //   api: productList.deletes,
  //   auth: ['product:list:delete'],
  //   realApi: productList.realDeletes,
  //   realAuth: ['product:list:realDeletes'],
  // },
  // recovery: {
  //   show: true,
  //   api: productList.recoverys,
  //   auth: ['product:list:recovery'],
  // },
  // import: {
  //   show: true,
  //   url: 'product/list/import',
  //   templateUrl: 'product/list/downloadTemplate',
  //   auth: ['product:list:import'],
  // },
  export: {
    show: true,
    url: 'product/list/export',
    auth: ['product:list:export'],
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
    formType: 'input-number',
    search: true,
    addDisplay: false,
    editDisplay: true,
    editReadonly: true,
    hide: false,
    width: 80
  },
  {
    title: '产品名字',
    dataIndex: 'product_name',
    formType: 'input',
    search: true,
    commonRules: {
      required: true,
      message: '请输入产品名字',
    },
    width: 120
  },
  {
    title: 'LOGO',
    dataIndex: 'logo_url',
    formType: 'upload',
    commonRules: {
      required: true,
      message: '请输入LOGO',
    },
    multiple: false,
    chunk: false,
    onlyData: false,
    type: 'image',
    width: 80
  },
  {
    title: '官网地址',
    dataIndex: 'official_url',
    formType: 'input',
    search: true,
    commonRules: {
      required: true,
      message: '请输入官网地址',
    },
    width: 120
  },
  {
    title: '排序',
    dataIndex: 'sort',
    formType: 'input-number',
    commonRules: {
      required: true,
      message: '请输入排序',
    },
    min: 0,
    max: 4200000000,
    step: 1,
    width: 75
  },
  {
    title: '状态',
    dataIndex: 'is_enabled',
    formType: 'radio',
    search: true,
    commonRules: {
      required: true,
      message: '请选择状态',
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
    width: 50
  },
  {
    title: '推荐语',
    dataIndex: 'remark',
    formType: 'textarea',
    commonRules: {
      required: true,
      message: '请输入推荐语',
    },
    width: 300
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    formType: 'date',
    search: false,
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true,
    range: false,
  },
  {
    title: '更新时间',
    dataIndex: 'updated_at',
    formType: 'date',
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true,
    range: false,
  },
])
</script>
<script> export default { name: 'product:list' } </script>
