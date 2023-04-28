import { request } from '@/utils/request.js'

/**
 * 登陆预警 API JS
 */

export default {

  /**
   * 获取登陆预警分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'channel/alert/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取登陆预警
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'channel/alert/read',
      method: 'get',
      data
    })
  },

  /**
   * 更改登陆预警数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'channel/alert/changeStatus',
      method: 'put',
      data
    })
  },


}