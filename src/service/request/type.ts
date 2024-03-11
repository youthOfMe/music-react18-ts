import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";

// 封装配置拦截器的类型声明
export interface XHInterceptors<T = AxiosResponse> {
    requestSuccessFunc?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
    requestFailureFunc?: (err: any) => any
    responseSuccessFunc?: (res: T) => T
    responseFailureFunc?: (err: any) => any
}

// 基于InternalAxiosResponseConfig进行拓展(拓展了拦截器)
export interface XHRequestConfig<T = AxiosResponse> extends InternalAxiosRequestConfig {
    interceptors?: XHInterceptors<T>
}