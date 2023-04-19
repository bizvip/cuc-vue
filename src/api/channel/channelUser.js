import { request } from '@/utils/request.js'

/**
 * 用户列表 API JS
 */

export default {

  /**
   * 获取用户列表分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'channel/user/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取用户列表
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'channel/user/read',
      method: 'get',
      data
    })
  },

  /**
   * 用户列表导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'channel/user/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}