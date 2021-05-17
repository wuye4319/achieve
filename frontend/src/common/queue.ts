/* eslint-disable no-undef */
/**
 * 队列封装
 * @author maxd
 * @date 2019.8.1
 */
export const showLoading = (title: string) => {
  uni.showLoading({
    title: title
  })
}

export const showToast = (title: string) => {
  uni.showToast({
    title: title,
    mask: false,
    duration: 2000,
    icon: 'none'
  })
}

export const getSearchKeys = (key: string) => {
  const list = 'test'
  return list.includes(key)
}

export const setJson = (key: string, value: Array<string>) => {
  const jsonString = JSON.stringify(value)
  try {
    uni.setStorageSync(key, jsonString)
  } catch (e) {
    // error
  }
}

export const setData = (key: string, value: string) => {
  try {
    uni.setStorageSync(key, value)
  } catch (e) {
    // error
  }
}

export const getData = (key: string) => {
  try {
    const value = uni.getStorageSync(key)
    if (value) {
      return value
    }
  } catch (e) {
    // error
  }
}

export const getJson = (key: string) => {
  try {
    const value = uni.getStorageSync(key)
    if (value) {
      return JSON.parse(value)
    }
  } catch (e) {
    // error
  }
}

export const clear = () => {
  uni.clearStorage()
}

export const get = (key: string) => { // 获取队列里面全部的数据
  const data = getJson(key)
  if (data instanceof Array) {
    return data
  }
  return []
}

export const insert = (param: { key: string, capacityNum: number, value: string }) => { // 队列插入数据
  param.capacityNum = param.capacityNum || 100 // 队列容量 默认队列中超过100条数据，自动删除尾部
  let data = getJson(param.key)
  if (data instanceof Array) {
    if (data.length > param.capacityNum) {
      const total = data.length - param.capacityNum
      for (let i = 0; i < total; i++) {
        data.pop()
      }
    }
    data.unshift(param.value)
  } else {
    data = []
    data.push(param.value)
  }
  setJson(param.key, data)
}

export const removeItem = (key: string, itemIds: string) => { // 提供itemIds数组 批量删除队列中的某项数据
  const data = getJson(key)
  if (data instanceof Array) {
    for (let i = 0; i < itemIds.length; i++) {
      for (let p = 0; p < data.length; p++) {
        if (itemIds[i] === data[p].proID) {
          data.splice(p, 1)
          break
        }
      }
    }
    setJson(key, data)
  }
}

export const isExist = (key: string, itemId: string) => { // 检测某条数据在队列中是否存在
  const data = getJson(key)
  if (data instanceof Array) {
    for (let p = 0; p < data.length; p++) {
      if (itemId === data[p].proID) {
        return true
      }
    }
  }
  return false
}

export const remove = (key: string) => { // 删除某条队列
  try {
    uni.removeStorageSync(key)
    // localStorage.removeItem(key)
  } catch (e) {
    // error
  }
}

export const getCount = (key: string) => { // 获取队列中全部数据数量
  const data = getJson(key)
  if (data instanceof Array) {
    return data.length
  }
  return 0
}

export default {}
