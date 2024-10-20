import {request} from './request';

export const httpService = {
    // 通用的请求方法，自动处理不同的请求方法和参数类型
    sendRequest(method: string, url: string, params?: any, config?, responseType?: string) {
        const requestConfig = {
            method,
            url,
            ...config, // 用户传入的自定义配置优先
        };

        // 区分 GET/DELETE 和 POST/PUT/PATCH 请求参数处理
        if (method === 'get' || method === 'delete') {
            requestConfig.params = params; // GET/DELETE 请求的参数附加在 URL 后
        } else {
            requestConfig.data = params; // POST/PUT/PATCH 请求的参数放在请求体中
        }

        // 如果有特定的响应类型，加入配置中
        if (responseType) {
            requestConfig.responseType = responseType;
        }

        return request(requestConfig);
    },

    // GET 请求
    get(url: string, params?: any, config?) {
        return this.sendRequest('get', url, params, config);
    },

    // 获取文件流（如下载文件）
    getFile(url: string, params?: any, config?) {
        return this.sendRequest('get', url, params, config, 'blob');
    },

    // POST 请求
    post(url: string, params?: any, config?) {
        return this.sendRequest('post', url, params, config);
    },

    // PUT 请求
    put(url: string, params?: any, config?) {
        return this.sendRequest('put', url, params, config);
    },

    // PATCH 请求
    patch(url: string, params?: any, config?) {
        return this.sendRequest('patch', url, params, config);
    },

    // DELETE 请求
    delete(url: string, params?: any, config?) {
        return this.sendRequest('delete', url, params, config);
    }
};
