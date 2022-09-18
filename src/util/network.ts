import { EdgeFetchFunction, EdgeFetchResponse } from 'edge-core-js'

import { config } from '../theme/appConfig'
import { asyncWaterfall, shuffleArray } from './utils'
const INFO_SERVERS = ['https://info1.edge.app', 'https://info2.edge.app']
const RATES_SERVERS = ['https://rates1.edge.app', 'https://rates2.edge.app']

export async function fetchWaterfall(
  servers: string[],
  path: string,
  options?: any,
  timeout: number = 5000,
  doFetch: EdgeFetchFunction = fetch
): Promise<EdgeFetchResponse> {
  const funcs = servers.map(server => async () => {
    const result = await doFetch(server + '/' + path, options)
    if (typeof result !== 'object') {
      const msg = `Invalid return value ${path} in ${server}`
      console.log(msg)
      throw new Error(msg)
    }
    return result
  })
  return asyncWaterfall(funcs, timeout)
}

// @ts-expect-error
async function multiFetch(servers: string[], path: string, options?: any, timeout?: number = 5000, doFetch?: EdgeFetchFunction): Promise<any> {
  return fetchWaterfall(shuffleArray(servers), path, options, timeout, doFetch)
}

export const fetchInfo = async (path: string, options?: Object, timeout?: number, doFetch?: EdgeFetchFunction): Promise<any> => {
  return multiFetch(INFO_SERVERS, path, options, timeout, doFetch)
}
export const fetchRates = async (path: string, options?: Object, timeout?: number, doFetch?: EdgeFetchFunction): Promise<any> => {
  return multiFetch(RATES_SERVERS, path, options, timeout, doFetch)
}
export const fetchReferral = async (path: string, options?: Object, timeout?: number, doFetch?: EdgeFetchFunction): Promise<any> => {
  return multiFetch(config.referralServers ?? [], path, options, timeout, doFetch)
}
export const fetchPush = async (path: string, options?: Object, timeout?: number, doFetch?: EdgeFetchFunction): Promise<any> => {
  return multiFetch(config.notificationServers, path, options, timeout, doFetch)
}
