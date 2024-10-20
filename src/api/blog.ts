// 获取笔记名称列表
import {httpService} from "@/api/httpService";

export function getCategory() {
    return httpService.get('/blog/category/list')
}