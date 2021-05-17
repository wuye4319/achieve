const ROOTPATH = 'https://www.wssso.com/web/v1'
const ROOTPATH_DEV = 'http://127.0.0.1:7001/web/v1'

const ispro = process.env.NODE_ENV === 'production'

export default {
  APIHOST: ispro ? ROOTPATH : ROOTPATH_DEV
}
