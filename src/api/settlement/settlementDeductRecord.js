import { request } from '@/utils/request.js'

/**
 * 扣量记录 API JS
 */

export default {

  /**
   * 获取扣量记录分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'settlement/deductRecord/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取扣量记录
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'settlement/deductRecord/read',
      method: 'get',
      data
    })
  },


}