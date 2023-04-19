<template>
    <ma-form v-model="form" :columns="columnsOptions" ref="crudForm"/>
</template>

<script setup>
import { reactive, ref } from 'vue'

// form 组件的 ref
const crudForm = ref()
// 表单数据
const form = ref({})
// 组件的字段设置
const columnsOptions = reactive([
  {
    title: '真实姓名',
    dataIndex: 'realName',
    formType: 'input',  // 默认为 input 组件
  },
  {
    title: '性别',
    dataIndex: 'sex',
    formType: 'radio',  // 使用单选框组件
    // 定义字典数据
    dict: {
      data: [
        {
          label: '保密',
          value: 0,
        },
        {
          label: '男',
          value: 1,
        },
        {
          label: '女',
          value: 2,
        },
      ],
    },
  },
  {
    title: '所在省市',
    dataIndex: 'city',
    formType: 'city-linkage',  // 使用省市联动选择器
    type: 'cascader',
  },
])
</script>
