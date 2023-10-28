<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
      <template #is_enabled="{ record }">
        <a-switch
          :checked-value="1"
          unchecked-value="0"
          @change="updateValue($event, record.id, 'is_enabled')"
          :default-checked="parseInt(record.is_enabled) === 1"
          checked-text="开"
          unchecked-text="关"
        />
      </template>

      <template #sort="{ record }">
        <a-input-number
          v-model="record.sort"
          placeholder="可填入排序，默认0"
          :min="0"
          :max="4200000000"
          @change="updateValue($event, record.id, 'sort')"
        />
      </template>

      <template #logo_url="{ record }">
        <a-image
          :src="record.logo_url"
          fit="cover"
          width="60"
          height="60"
          :alt="record.product_name"
        />
      </template>
    </ma-crud>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import channelProduct from "@/api/channel/channelProduct";
import { Message } from "@arco-design/web-vue";

const crudRef = ref();

const switchStatus = (statusValue, id, statusName) => {
  channelProduct
    .changeStatus({ id, statusName, statusValue })
    .then((res) => {
      res.success && Message.success(res.message);
      crudRef.value.refresh();
    })
    .catch((e) => {
      console.log(e);
    });
};

const options = reactive({
  id: "cm_channel_product",
  rowSelection: {
    showCheckedAll: true,
  },
  pk: "id",
  operationColumn: true,
  operationWidth: 160,
  formOption: {
    viewType: "drawer",
    width: 600,
  },
  api: channelProduct.getList,
  recycleApi: channelProduct.getRecycleList,
  add: {
    show: true,
    api: channelProduct.save,
    auth: ["channel:product:save"],
  },
  edit: {
    show: true,
    api: channelProduct.update,
    auth: ["channel:product:update"],
  },
  delete: {
    show: true,
    api: channelProduct.deletes,
    auth: ["channel:product:delete"],
    realApi: channelProduct.realDeletes,
    realAuth: ["channel:product:realDeletes"],
  },
  recovery: {
    show: true,
    api: channelProduct.recoverys,
    auth: ["channel:product:recovery"],
  },
});

const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: "请输入ID",
    },
  },
  {
    title: "产品名字",
    dataIndex: "product_name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入产品名字",
    },
  },
  {
    title: "LOGO",
    dataIndex: "logo_url",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入LOGO",
    },
  },
  {
    title: "官网地址",
    dataIndex: "official_url",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入官网地址",
    },
  },
  {
    title: "排序",
    dataIndex: "sort",
    formType: "slider",
    search: true,
    commonRules: {
      required: true,
      message: "请输入排序",
    },
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "状态",
    dataIndex: "is_enabled",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请输入状态",
    },
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
    dict: {
      name: "is_enabled",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
  },
  {
    title: "推荐语",
    dataIndex: "remark",
    formType: "input",
    hide: true,
    commonRules: {
      required: true,
      message: "请输入推荐语",
    },
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    search: true,
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: "请输入创建时间",
    },
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "date",
    search: true,
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: "请输入更新时间",
    },
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "删除时间",
    dataIndex: "deleted_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
]);
</script>
<script>
export default { name: "channel:product" };
</script>
