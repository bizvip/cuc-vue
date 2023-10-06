<template>
  <div><a-input v-model="form.title" placeholder="请输入标题" /></div>
</template>

<script setup>
// 表单数据
const form = inject("formModel");
// 字典数据集合
const dict = inject("dictList");
// 组件props
const props = defineProps({
  component: Object, // 组件配置信息
  customField: { type: String, default: undefined }, // 自定义字段名称，用于子表单
});
</script>
