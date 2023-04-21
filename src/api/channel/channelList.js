import { request } from '@/utils/request.js'

/**
 * 渠道列表 API JS
 */

export default {

  /**
   * 获取渠道列表分页列表
   * @returns
   */
  getList(params = {}) {
    return request({
      url: 'channel/list/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加渠道列表
   * @returns
   */
  save(data = {}) {
    return request({
      url: 'channel/list/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新渠道列表数据
   * @returns
   */
  update(id, data = {}) {
    return request({
      url: 'channel/list/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取渠道列表
   * @returns
   */
  read(data = {}) {
    return request({
      url: 'channel/list/read',
      method: 'get',
      data
    })
  },

  /**
   * 读取渠道单条
   * @returns
   */
  getOne(id = 0) {
    return request({
      url: 'channel/list/read/' + id,
      method: 'get'
    })
  },

  /**
   * 更改渠道列表数据
   * @returns
   */
  updateValue(data = {}) {
    return request({
      url: 'channel/list/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 渠道列表导出
   * @returns
   */
  exportExcel(params = {}) {
    return request({
      url: 'channel/list/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}