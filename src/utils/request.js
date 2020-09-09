import axios from 'axios'
import router from '../router'

let apiUrl = '/api'
if (process.env.NODE_ENV === 'development') {
  console.log('当前环境，开发环境')
  apiUrl = '/api'
} else if (process.env.NODE_ENV === 'production') {
  console.log('当前环境，生产环境')
  apiUrl = 'http://localhost:8080/api' // 接口地址
}

const service = axios.create({
  baseURL: apiUrl, // 请求的url
  method: 'get' // 默认请求方式
  // timeout: m2000 // 请求超时时间
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // 发送请求之前给头部添加token
    config.headers.token = localStorage.getItem('token') || ''
    // 为头部增加accId
    config.headers.token = localStorage.getItem('accid') || ''
    return config
  }
)
// 添加响应拦截器
service.interceptors.response.use(
  response => {
    // 响应数据
    if (response.status && response.status === 200) {
      const res = JSON.parse(response.data)
      if (res.result === '0') {
        return res
      } else if (res.result === -7) { // token过期
        router.push({
          path: '/login'
        })
      } else if (res.result === -3) { // 无满足条件的数据
        return {}
      } else {
        return false
      }
    } else {
      console.log('接口请求错误：' + response.status)
    }
  },
  error => {
    console.log('err' + error)
    return error
  }
)
export default service
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 * axois封装出处：https://www.cnblogs.com/ldlx-mars/p/7908950.html
 */
export function getdata (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}
