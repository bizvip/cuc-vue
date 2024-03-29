<template>
  <div class="ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
      <template #search-updated_at="{ searchForm, component }">
        <a-range-picker
          shortcuts-position="right"
          :shortcuts="rangeShortcuts"
        />
      </template>

      <template #is_enabled="{ record }">
        <a-switch
          :default-checked="parseInt(record.is_enabled) === 1"
          checked-text="开"
          unchecked-text="关"
          checked-value="1"
          unchecked-value="0"
          @change="updateValue($event, record.id, 'is_enabled')"
        />
      </template>

      <template #agent_master_id="{ record }">
        <a-tag
          :bordered="parseInt(record.agent_master_id) === 0"
          :color="parseInt(record.agent_master_id) === 0 ? 'blue' : ''"
        >
          {{
            parseInt(record.agent_master_id) === 0
              ? "主渠道"
              : "子 | " + record.agent_master_id
          }}
        </a-tag>
      </template>

      <template #parent_id="{ record }">
        <a-typography-text>
          {{ record.agent_master_id }}
          {{ record.agent_first_id }}
          {{ record.agent_second_id }}
          {{ record.agent_third_id }}
        </a-typography-text>
      </template>

      <template #channel_name="{ record }">
        <a-typography-text bold>
          {{ record.top_id === 0 ? "[主] | " : "" }}
          {{ record.channel_name }}
        </a-typography-text>
      </template>

      <template #ad_type="{ record }">
        <a-typography-text v-if="record.ad_type === 'CPA'" type="secondary"
          >{{ record.ad_type }}
        </a-typography-text>
        <a-typography-text v-else-if="record.ad_type === 'CPS'" type="primary"
          >{{ record.ad_type }}
        </a-typography-text>
        <a-typography-text v-else-if="record.ad_type === 'CPT'" type="warning"
          >{{ record.ad_type }}
        </a-typography-text>
        <a-typography-text v-else-if="record.ad_type === 'CPC'" type="success"
          >{{ record.ad_type }}
        </a-typography-text>
      </template>

      <template #agent_first_id="{ record }">
        <a-typography-text v-if="record.agent_first_id > 0" type="secondary">
          {{ record.ad_type }}
        </a-typography-text>
        <a-typography-text v-else-if="record.agent_first_id < 0" type="primary">
          {{ record.ad_type }}
        </a-typography-text>
        <a-typography-text v-else type="warning">
          {{ record.ad_type }}
        </a-typography-text>
      </template>

      <template #operationBeforeExtend="{ record }">
        <a-link @click=""> 登陆</a-link>
        <a-link @click="showDetail(record.id)">
          <icon-eye />
          查看
        </a-link>
      </template>

      <template #operationAfterExtend="{ record }">
        <a-link> 日志</a-link>
      </template>
    </ma-crud>

    <a-drawer v-model:visible="detailVisible" width="700px" :footer="false">
      <template #title
        >查看渠道 {{ record?.data.channel_account }} 详情
      </template>
      <a-spin :loading="detailLoading" tip="数据加载中..." class="block">
        <a-typography>
          <a-form>
            <div v-for="(value, key) in record?.data" :key="key">
              <a-form-item :field="key" :label="key">
                <a-input :model-value="value" readonly="readonly" />
              </a-form-item>
            </div>
          </a-form>
        </a-typography>
      </a-spin>
    </a-drawer>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import channelList from "@/api/channel/channelList";
import dayjs from "dayjs";
import { Message } from "@arco-design/web-vue";

/******************* showDetails start *******************/
const detailVisible = ref(false);
const detailLoading = ref(true);
const record = ref({
  code: 0,
  data: {},
  message: "",
  success: false,
});
const visible = ref(false);

const showDetail = async (id) => {
  detailVisible.value = true;
  detailLoading.value = true;
  record.value = await channelList.getOne(id);
  detailLoading.value = false;
};
/******************* showDetails end *******************/

const crudRef = ref();
const rangeShortcuts = reactive([
  {
    label: "next 2 days",
    value: () => [dayjs(), dayjs().add(2, "day")],
  },
  {
    label: "next 7 days",
    value: () => [dayjs(), dayjs().add(1, "month")],
  },
  {
    label: "next 30 days",
    value: () => [dayjs(), dayjs().add(1, "month")],
  },
  {
    label: "next 6 months",
    value: () => [dayjs(), dayjs().add(6, "month")],
  },
  {
    label: "next 12 months",
    value: () => [dayjs(), dayjs().add(1, "year")],
  },
  {
    label: "next 10 years",
    value: () => [dayjs(), dayjs().add(10, "year")],
  },
]);

const updateValue = (value, id, name) => {
  channelList
    .updateValue({
      id,
      name,
      value,
    })
    .then((res) => {
      res.success && Message.success(res.message);
      crudRef.value.refresh();
    })
    .catch((e) => {
      console.log(e);
    });
};

const options = reactive({
  id: "cm_channel_list",
  rowSelection: false,
  pk: "id",
  operationColumn: true,
  operationWidth: 180,
  operationColumnWidth: 180,
  formOption: {
    viewType: "drawer",
    width: 700,
  },
  api: channelList.getList,
  add: {
    show: true,
    api: channelList.save,
    auth: ["channel:list:save"],
  },
  edit: {
    show: true,
    api: channelList.update,
    auth: ["channel:list:update"],
  },
  export: {
    show: true,
    url: "channel/list/export",
    auth: ["channel:list:export"],
  },
  beforeRequest(params) {
    params.orderBy = "id";
    params.orderType = "desc";
  },
  contextMenu: {
    enabled: true,
    items: [
      // { operation: 'print' },
      { operation: "refresh" },
      // { operation: 'divider' },
      // { operation: 'add' },
      // { operation: 'edit' },
      // { operation: 'delete' }
    ],
  },
});

const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    formType: "input-number",
    search: true,
    hide: false,
    display: false,
    width: 80,
    placeholder: "无需填写",
  },
  {
    title: "管理员ID",
    dataIndex: "admin_id",
    formType: "input-number",
    placeholder: "是哪个管理员开出来的",
    search: true,
    hide: true,
    display: false,
    width: 80,
    commonRules: {
      required: false,
      message: "",
    },
  },
  {
    title: "总代 | ID",
    dataIndex: "agent_master_id",
    formType: "input-number",
    placeholder: "即隶属哪个总代ID",
    searchPlaceholder: "总代id",
    search: true,
    hide: false,
    display: false,
    width: 80,
    commonRules: {
      required: false,
      message: "将自动绑定总代关系，无需填写",
    },
  },
  {
    title: "是否一级代理",
    dataIndex: "parent_id",
    formType: "input-number",
    placeholder: "一级代理",
    search: true,
    hide: false,
    display: false,
    width: 80,
    commonRules: {
      required: false,
      message: "无需填写",
    },
  },
  {
    title: "渠道账号",
    dataIndex: "channel_account",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message:
        "渠道账号6-32位，允许数字、小写字母、下划线_或连接线-，不得为空，不允许大写字母",
      minLength: 6,
      maxLength: 32,
      match: /^(?![0-9])[a-z0-9_-]+$/,
    },
    addDefaultValue: "of-",
    extra: "渠道账号默认会自动指定一个开头字符串，请补充后面的字符串即可",
    width: 120,
  },
  {
    title: "渠道密码",
    dataIndex: "channel_pwd",
    formType: "input-password",
    editDisplay: true,
    addDisplay: true,
    commonRules: {
      required: true,
      message: "请输入渠道账号密码",
    },
    hide: true,
  },
  {
    title: "渠道名",
    dataIndex: "channel_name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "渠道名字",
      minLength: 2,
      maxLength: 30,
      match: /^[\u4e00-\u9fa5a-zA-Z0-9-_]{2,30}$/,
    },
    width: 150,
    extra: "渠道名只允许英文大小写、数字、中文、连接线、下划线，长度2到30以内",
  },
  {
    title: "推广类型",
    dataIndex: "ad_type",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请选择推广类型",
    },
    multiple: false,
    dict: {
      name: "ad-type",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
    width: 80,
  },
  {
    title: "状态",
    dataIndex: "is_enabled",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请选择开启还是关闭",
    },
    multiple: false,
    checkedValue: "1",
    uncheckedValue: "0",
    dict: {
      name: "is_enabled",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
    width: 60,
    addDefaultValue: 1,
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "date",
    search: true,
    hide: false,
    disabled: true,
    display: false,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
    showTime: true,
    width: 150,
  },
  {
    title: "层级",
    dataIndex: "level",
    formType: "input-number",
    width: 60,
    hide: false,
    disabled: true,
    display: false,
  },
  {
    title: "扣量规则ID",
    dataIndex: "rule_id",
    formType: "input",
    hide: true,
    disabled: true,
    display: false,
  },
  {
    title: "产品",
    dataIndex: "product_ids",
    formType: "checkbox",
    hide: false,
    dict: {
      url: "channel/product/dict",
      method: "get",
      translation: false,
      props: {
        label: "product_name",
        value: "id",
      },
      openPage: false,
    },
    width: 100,
  },
  // {
  //   title: '产品',
  //   dataIndex: 'product_ids',
  //   formType: 'component',
  //   component: shallowRef(addChannel),
  //   hide: true,
  //   addDisplay: true,
  //   editDisplay: true,
  // },
  {
    title: "备注信息",
    dataIndex: "remark",
    formType: "textarea",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true,
  },
]);
</script>
<script>
export default { name: "channel:list" };
</script>
