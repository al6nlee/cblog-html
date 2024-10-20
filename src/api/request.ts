import axios from 'axios';
import {ElMessage} from 'element-plus';
import {useUserStore} from '@/store/userStore';

// 创建实例方法，允许自定义 baseURL 和 timeout
const createAxiosInstance = (baseURL: string, timeout: number = 50000) => {
    return axios.create({
        baseURL,
        timeout,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

// 请求拦截器封装
const requestInterceptor = (config) => {
    const userStore = useUserStore();
    const token = userStore.userLocal.token || userStore.userSession.token;
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
};

// 响应拦截器封装
const responseInterceptor = (response): any => {
    return response.data;
};

// 错误处理封装
const handleError = (error: any): Promise<any> => {
    if (error.response) {
        switch (error.response.status) {
            case 400:
                ElMessage.error('请求参数错误');
                break;
            case 401:
                ElMessage.error('对不起，您暂无权限访问此接口，请登录重试！');
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = 'https://www.cuiliangblog.cn/loginRegister?component=Login';
                break;
            case 403:
                ElMessage.error('对不起，您的身份信息已过期，请重新登录！');
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = 'https://www.cuiliangblog.cn/loginRegister?component=Login';
                break;
            case 404:
                ElMessage.error('请求的资源不存在');
                break;
            case 500:
                ElMessage.error('服务器内部错误，请稍候重试！');
                break;
            default:
                ElMessage.error('请求失败，请稍后重试');
        }
    } else if (error.message.includes('timeout')) {
        ElMessage.error('请求超时，请检查网络状态或稍后重试');
    } else {
        ElMessage.error('网络异常，请稍后重试');
    }
    return Promise.reject(error);
};

// 创建请求实例
export const request = (config): Promise<any> => {
    const instance = createAxiosInstance(import.meta.env.VITE_APP_BASE_URL);

    // 配置拦截器
    instance.interceptors.request.use(requestInterceptor, (error) => Promise.reject(error));
    instance.interceptors.response.use(responseInterceptor, handleError);

    return instance(config);
};
