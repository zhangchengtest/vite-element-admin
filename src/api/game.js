import http from '/@/utils/request'

export function queryPuzzle() {
  return http.request( {
    url : '/game/queryPuzzle',
    method : 'get'
  } )
}

export function queryPuzzleByUrl( url, order_type ) {
  return http.request( {
    url : '/game/queryPuzzleByUrl',
    method : 'get',
    params : { url, order_type }
  } )
}

export function queryPuzzleRank( data ) {
  return http.request( {
    url : '/game/queryPuzzleRank',
    method : 'get',
    params : { url : data }
  } )
}

export function savePuzzleRank( data ) {
  return http.request( {
    url : '/game/savePuzzleRank',
    method : 'post',
    headers : { 'Content-Type' : 'application/json;charset=UTF-8' },
    data
  } )
}
