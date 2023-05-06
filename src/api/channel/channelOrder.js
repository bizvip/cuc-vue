import { request } from '@/utils/request.js'

/**
 * 订单列表 API JS
 */

export default {

  /**
   * 获取订单列表分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'channel/order/index',
      method: 'get',
      params
    })
  },


}