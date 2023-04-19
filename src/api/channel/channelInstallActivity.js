import { request } from '@/utils/request.js'

/**
 * 安装活跃 API JS
 */

export default {

  /**
   * 获取安装活跃分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'channel/installActivity/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取安装活跃
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'channel/installActivity/read',
      method: 'get',
      data
    })
  },

  /**
   * 安装活跃导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'channel/installActivity/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}