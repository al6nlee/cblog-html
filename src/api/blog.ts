// 获取笔记名称列表
import {httpService} from "@/api/httpService";

export function getCategory() {
    return httpService.get('/blog/category/list')
        .then(response => {
            if (response.code === 200) {
                // 返回 items 列表
                return response.items;
            } else {
                throw new Error(response.message || 'Failed to fetch categories');
            }
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
            return [];
        });
}