// request.ts
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

import { OptimizedData, RequestBefore, ResponseFailure, ResponseSuccess } from './optimized'
import type { RequestConfig, Result } from './types'
class Request {
    instance: AxiosInstance
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)

        this.instance.interceptors.request.use(RequestBefore)
    }
    request<T = any>(config: RequestConfig): Promise<T> {
        const conf = OptimizedData(config)
        return new Promise((resolve, reject) => {
            this.instance
                .request<any, AxiosResponse<Result<T>>>(conf)
                .then((res) => {
                    const rep = ResponseSuccess(res)
                    if (rep === 'error') {
                        reject(new Error('request error!'))
                    } else {
                        resolve(rep)
                    }
                })
                .catch((error: any) => {
                    const e: string = ResponseFailure(error)
                    reject(e)
                })
        })
    }
}

export default Request
