import { request } from '@/utils/request.js'

/**
 * 活跃日志 API JS
 */

export default {

  /**
   * 获取活跃日志分页列表
   * @returns
   */
  getList(params = {}) {
    return request({
      url: 'channel/activityLog/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取活跃日志
   * @returns
   */
  read(data = {}) {
    return request({
      url: 'channel/activityLog/read',
      method: 'get',
      data
    })
  },

  /**
   * 活跃日志导出
   * @returns
   */
  exportExcel(params = {}) {
    return request({
      url: 'channel/activityLog/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}