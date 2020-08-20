import request from '@/utils/request'
export function getLogin (data) {
  return request({
    url: '/Login/GereralLogin',
    method: 'post',
    data: data
  })
}
