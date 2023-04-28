import { request } from '@/utils/request.js'

/**
 * 产品列表 API JS
 */

export default {

  /**
   * 获取产品列表分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'product/mine/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取产品列表
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'product/mine/read',
      method: 'get',
      data
    })
  },


}