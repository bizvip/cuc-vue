import { request } from '@/utils/request.js'

/**
 * 手动绑定产品 API JS
 */

export default {

  /**
   * 获取手动绑定产品分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'product/bind/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取手动绑定产品
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'product/bind/read',
      method: 'get',
      data
    })
  },

  /**
   * 添加手动绑定产品
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'product/bind/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新手动绑定产品数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'product/bind/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 更改手动绑定产品数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'product/bind/changeStatus',
      method: 'put',
      data
    })
  },


}