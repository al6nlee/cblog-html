// 自定义图标
import {createFromIconfontCN} from "@ant-design/icons-vue";

export function icon() {
    const MyIcon = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/c/font_4717213_mkkhcbtxg.js', // 在 iconfont.cn上生成symbol
    });
    return {
        MyIcon
    }
}
