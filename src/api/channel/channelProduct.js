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
      url: 'channel/product/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加产品列表
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'channel/product/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新产品列表数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'channel/product/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取产品列表
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'channel/product/read',
      method: 'get',
      data
    })
  },

  /**
   * 将产品列表删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'channel/product/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取产品列表数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'channel/product/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复产品列表数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'channel/product/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除产品列表
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'channel/product/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改产品列表数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'channel/product/changeStatus',
      method: 'put',
      data
    })
  },


}