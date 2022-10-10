import http from '/@/utils/request'

export function queryPuzzle() {
  return http.request( {
    url : '/api/game/queryPuzzle',
    method : 'get'
  } )
}
