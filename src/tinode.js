import { Drafty, Tinode } from 'tinode-sdk'
import { getEnvs } from '/@/utils/envs'

import { GLOBAL_DATA } from '/@/config/constant'
const API_KEY = 'AQEAAAABAAD_rAp4DJh05a1HAwFT3A6K'
const APP_NAME = 'Tinode-IM2'

export function NewClient() {
  const { envStr } = getEnvs()
  const myhost = envStr === 'dev' ? import.meta.env.VITE_PROXY_CHAT_HOST : GLOBAL_DATA[envStr].chatHost

  const client = new Tinode( {
    appName : APP_NAME,
    host : myhost,
    apiKey : API_KEY,
    transport : null,
    secure : false,
    persist : false
  } )
  client.contacts = {}

  client.enableLogging( true )
  client.onDisconnect = function() {
    console.log( 'Client has disconnected!' )
  }

  return client
}

// Initialized once
const tClient = NewClient()

export default tClient
