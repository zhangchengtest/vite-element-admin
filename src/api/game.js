import http from '/@/utils/request'

export function queryPuzzle() {
  return http.request( {
    url : '/game/queryPuzzle',
    method : 'get'
  } )
}

export function queryPuzzleByUrl( data ) {
  return http.request( {
    url : '/game/queryPuzzleByUrl',
    method : 'get',
    params : { url : data }
  } )
}
