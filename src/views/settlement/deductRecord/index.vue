<template>
    <div>
        <div class="ma-content-block justify-between p-2">
            <a-space size="large">

                <a-statistic title="今日CPS扣量" :value="125670" :value-style="{color:'#0fbf60'}"
                             show-group-separator animation placeholder="暂无数据">
                    <template #suffix>
                        <icon-arrow-up/>
                    </template>
                    <template #extra>昨日扣量：12356</template>
                </a-statistic>

                <a-statistic title="今日CPA扣量" :value="435345" :value-style="{color:'red'}"
                             show-group-separator animation placeholder="暂无数据">
                    <template #suffix>
                        <icon-arrow-down/>
                    </template>
                    <template #extra>昨日扣量：787634534577</template>
                </a-statistic>

                <a-statistic title="今日CPT扣量" :value="5678787" :value-style="{color:'red'}"
                             show-group-separator animation placeholder="暂无数据">
                    <template #suffix>
                        <icon-arrow-down/>
                    </template>
                    <template #extra>昨日扣量：999666444</template>
                </a-statistic>

                <a-statistic title="今日CPC扣量" :value="123123" :value-style="{color:'black'}"
                             show-group-separator animation placeholder="暂无数据">
                    <template #suffix>
                        <icon-arrow-left/>
                    </template>
                    <template #extra>昨日扣量：123123</template>
                </a-statistic>

            <a-divider direction="vertical"></a-divider>

                <a-statistic title="总累计CPS扣量" :value="125670" :value-style="{color:'gray'}"
                             show-group-separator placeholder="暂无数据">
                    <template #extra>近一周累计：12356</template>
                </a-statistic>

                <a-statistic title="总累计CPA扣量" :value="435345" :value-style="{color:'gray'}"
                             show-group-separator placeholder="暂无数据">
                    <template #extra>近一周累计：787634534577</template>
                </a-statistic>

                <a-statistic title="总累计CPT扣量" :value="5678787" :value-style="{color:'gray'}"
                             show-group-separator placeholder="暂无数据">
                    <template #extra>近一周累计：999666444</template>
                </a-statistic>

                <a-statistic title="总累计CPC扣量" :value="123123" :value-style="{color:'gray'}"
                             show-group-separator placeholder="暂无数据">
                    <template #extra>近一周累计：123123</template>
                </a-statistic>

            </a-space>
        </div>

        <div class="ma-content-block lg:flex justify-between p-4 mt-4">
            <ma-crud :options="options" :columns="columns" ref="crudRef"></ma-crud>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import settlementDeductRecord from '@/api/settlement/settlementDeductRecord'

const crudRef = ref()

const options = reactive({
  id: 'cm_settlement_deduct_record',
  rowSelection: false,
  pk: 'id',
  operationColumn: false,
  operationWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: settlementDeductRecord.getList
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
    title: '规则ID',
    dataIndex: 'rule_id',
    formType: 'input',
    search: true,
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
    title: '渠道名字',
    dataIndex: 'channel_name',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '渠道账号',
    dataIndex: 'channel_account',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '渠道标识',
    dataIndex: 'channel_slug',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '渠道层级',
    dataIndex: 'level',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '推广类型',
    dataIndex: 'ad_type',
    formType: 'select',
    search: true,
    addDisplay: false,
    editDisplay: false,
    multiple: false,
    dict: {
      name: 'ad-type',
      props: {
        label: 'title',
        value: 'key'
      },
      translation: true
    }
  },
  {
    title: '扣量基数',
    dataIndex: 'deduction_base',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '总量',
    dataIndex: 'total',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '扣量',
    dataIndex: 'deduct_total',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '扣量/当前点位',
    dataIndex: 'deduction_pp',
    formType: 'input',
    addDisplay: false,
    editDisplay: false
  },
  {
    title: '日期',
    dataIndex: 'date',
    formType: 'range',
    search: true,
    addDisplay: false,
    editDisplay: false,
    showTime: false
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
  },
  {
    title: '数据by',
    dataIndex: 'created_by',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true
  }
])
</script>
<script> export default { name: 'settlement:deductRecord' } </script>