import { request } from '@/utils/request.js'

/**
 * 扣量规则 API JS
 */

export default {

  /**
   * 获取扣量规则分页列表
   * @returns
   */
  getList(params = {}) {
    return request({
      url: 'settlement/rule/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加扣量规则
   * @returns
   */
  save(data = {}) {
    return request({
      url: 'settlement/rule/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新扣量规则数据
   * @returns
   */
  update(id, data = {}) {
    return request({
      url: 'settlement/rule/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取扣量规则
   * @returns
   */
  read(data = {}) {
    return request({
      url: 'settlement/rule/read',
      method: 'get',
      data
    })
  },

  /**
   * 将扣量规则删除，有软删除则移动到回收站
   * @returns
   */
  deletes(data) {
    return request({
      url: 'settlement/rule/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改扣量规则数据
   * @returns
   */
  changeStatus(data = {}) {
    return request({
      url: 'settlement/rule/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 扣量规则导出
   * @returns
   */
  exportExcel(params = {}) {
    return request({
      url: 'settlement/rule/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}