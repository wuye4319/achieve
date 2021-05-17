/* eslint-disable no-undef */
import configdata from './config'

const request = (url: string, type, data?, token?) => {
  url = configdata.APIHOST + url
  return new Promise((resolve, reject) => {
    const confreq: UniApp.RequestOptions = {
      url: url,
      method: type,
      success: function (result: any) {
        // console.error(result);
        resolve.call(self, result.data)
      },
      fail: function (e: any) {
        reject.call(self, e)
      }
    }
    if (data) confreq.data = data
    if (token) confreq.header.token = token
    uni.request(confreq)
  })
}

export const del = async (url: string) => {
  return await request(url, 'DELETE')
}

export const put = async (url: string, data: any) => {
  const token = uni.getStorageSync('token')
  return await request(url, 'PUT', data, token)
}

export const post = async (url: string, data: any) => {
  // const header = isJson ? 'application/json' : 'application/x-www-form-urlencoded'
  const token = uni.getStorageSync('token')
  return await request(url, 'POST', data, token)
}

export const get = async (url: string) => {
  return await request(url, 'GET')
}

export default { get, post, put, del }
