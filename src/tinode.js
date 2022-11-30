import { Drafty, Tinode } from 'tinode-sdk'
const API_KEY = 'AQEAAAABAAD_rAp4DJh05a1HAwFT3A6K'
const APP_NAME = 'Tinode-IM2'
const HOST = 'localhost:6060'

export function NewClient() {
  const client = new Tinode( { appName : APP_NAME, host : HOST, apiKey : API_KEY, transport : null,
    secure : false, persist : false } )
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
