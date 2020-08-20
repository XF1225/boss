import request from '@/utils/request'
// 接口1
export function getindexCard (str) {
  return request({
    url: '/Stat/StatUseP_Tody' + str
  })
}
// 接口2
export function getUseEleTrend (str) {
  return request({
    url: '/Stat/Stat_UseP' + str
  })
}
