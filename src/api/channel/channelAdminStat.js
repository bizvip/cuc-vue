import { request } from '@/utils/request.js'

/**
 * 管理员渠道统计 API JS
 */

export default {

  /**
   * 获取管理员渠道统计分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'channel/adminStat/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取管理员渠道统计
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'channel/adminStat/read',
      method: 'get',
      data
    })
  },

  /**
   * 管理员渠道统计导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'channel/adminStat/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}