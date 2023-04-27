import { request } from '@/utils/request.js'

/**
 * 广告投放 API JS
 */

export default {

  /**
   * 获取广告投放分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'settlement/placement/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取广告投放
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'settlement/placement/read',
      method: 'get',
      data
    })
  },

  /**
    * 广告投放导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'settlement/placement/import',
      method: 'post',
      data
    })
  },

  /**
   * 广告投放下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'settlement/placement/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 广告投放导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'settlement/placement/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}