import { request } from '@/utils/request.js'

/**
 * 产品绑定 API JS
 */

export default {

  /**
   * 获取产品绑定分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'channel/productBind/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加产品绑定
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'channel/productBind/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新产品绑定数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'channel/productBind/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取产品绑定
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'channel/productBind/read',
      method: 'get',
      data
    })
  },

  /**
   * 将产品绑定删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'channel/productBind/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取产品绑定数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'channel/productBind/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复产品绑定数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'channel/productBind/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除产品绑定
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'channel/productBind/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改产品绑定数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'channel/productBind/changeStatus',
      method: 'put',
      data
    })
  },


}