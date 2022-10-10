import http from '/@/utils/request'

export function queryPuzzle() {
  return http.request({
    url: '/game/queryPuzzle',
    method: 'get',
  })
}
