import { request } from '@/utils/request.js'

/**
 * 产品列表 API JS
 */

export default {

  /**
   * 获取产品列表分页列表
   * @returns
   */
  getList(params = {}) {
    return request({
      url: 'product/list/index',
      method: 'get',
      params
    })
  },

  // 获取开启并且用户可以支配的产品列表
  getMyList(params = {}) {
    return request({
      url: 'product/list/my-products',
      method: 'get',
      params
    })
  },

  /**
   * 产品列表导出
   * @returns
   */
  exportExcel(params = {}) {
    return request({
      url: 'product/list/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },

  /**
   * 产品列表导入
   * @returns
   */
  importExcel(data = {}) {
    return request({
      url: 'product/list/import',
      method: 'post',
      data
    })
  },

  /**
   * 产品列表下载模板
   * @returns
   */
  downloadTemplate() {
    return request({
      url: 'product/list/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 修改产品列表数值数据，自增自减
   * @returns
   */
  numberOperation(data = {}) {
    return request({
      url: 'product/list/numberOperation',
      method: 'put',
      data
    })
  },

  /**
   * 更改产品列表数据
   * @returns
   */
  changeStatus(data = {}) {
    return request({
      url: 'product/list/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 从回收站获取产品列表数据列表
   * @returns
   */
  getRecycleList(params = {}) {
    return request({
      url: 'product/list/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复产品列表数据
   * @returns
   */
  recoverys(data) {
    return request({
      url: 'product/list/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除产品列表
   * @returns
   */
  realDeletes(data) {
    return request({
      url: 'product/list/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 将产品列表删除，有软删除则移动到回收站
   * @returns
   */
  deletes(data) {
    return request({
      url: 'product/list/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 读取产品列表
   * @returns
   */
  read(data = {}) {
    return request({
      url: 'product/list/read',
      method: 'get',
      data
    })
  },

  /**
   * 更新产品列表数据
   * @returns
   */
  update(id, data = {}) {
    return request({
      url: 'product/list/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 更新产品单个数据
   * @returns
   */
  updateValue(data = {}) {
    return request({
      url: 'product/list/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 添加产品列表
   * @returns
   */
  save(data = {}) {
    return request({
      url: 'product/list/save',
      method: 'post',
      data
    })
  },

}
