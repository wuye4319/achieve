/**
 * @desc service api
 */

import HttpRequest from '../common/httpRequest'

/**
 * 获取列表
 */
export const getTask = async (useID: 0) => {
  return new Promise(resolve => {
    HttpRequest
      .get('/task/list/abc123')
      .then((res: any) => {
        resolve(res.data)
      })
  })
}

/**
 * 新增任务
 */
export const addTask = async (title: string, userID?) => {
  return new Promise(resolve => {
    HttpRequest
      .post('/task/list', { title: title, userID: 'abc123' })
      .then((res: any) => {
        resolve(res.data)
      })
  })
}

/**
 * 修改任务
 */
export const editTask = async (id, data) => {
  return new Promise(resolve => {
    HttpRequest
      .put(`/task/list/${id}`, { data: data })
      .then((res: any) => {
        resolve(res.data)
      })
  })
}
