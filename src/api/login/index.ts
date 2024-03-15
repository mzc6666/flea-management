import { defaultRequest } from '/@/utils/http/index'
import { I_Login } from './type'

export function login(params: I_Login.Params) {
    return defaultRequest.request<I_Login.ResponseData>({
        url: '/login',
        method: 'post',
        data: params
    })
}
