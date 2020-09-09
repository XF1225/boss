import request from '@/utils/request'
// 接口1
export function getmockdata () {
  return request({
    url: '/api/mock.json'
  })
}
// 接口2
/* export function getUseEleTrend (str) {
  return request({
    url: '/Stat/Stat_UseP' + str
  })
} */
