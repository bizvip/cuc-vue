import { request } from '@/utils/request.js'

/**
 * 渠道收益 API JS
 */

export default {

  /**
   * 获取渠道收益分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'channel/revenue/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取渠道收益
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'channel/revenue/read',
      method: 'get',
      data
    })
  },

  /**
   * 渠道收益导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'channel/revenue/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },

  /**
    * 渠道收益导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'channel/revenue/import',
      method: 'post',
      data
    })
  },

  /**
   * 渠道收益下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'channel/revenue/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },


}