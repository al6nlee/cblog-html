<template>
  <nav class="navbar">
    <div class="container">
      <span class="left">
        <el-image
            style="width: 40px; height: 40px"
            :src="siteConfig.logo"
            :fit="'fill'"></el-image>
        <span class="no-choose">{{ siteConfig.name }}</span>
      </span>

      <span class="middle">
        <el-menu :ellipsis="false" mode="horizontal">
          <el-menu-item index="1" @click="router.push('/')">
            <MyIcon type="icon-home"/>
            <span class="menu-title">首页</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <MyIcon type="icon-category"/>
              <span class="menu-title">分类</span>
            </template>
            <el-menu-item v-for="category in categoryList" :key="category.id"
                          :index="'2-'+category.id" @click="toCategory(category.id)">{{ category.name }}</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <MyIcon type="icon-tag"/>
              <span class="menu-title">标签</span>
            </template>
            <el-menu-item v-for="tag in tagList" :key="tag.id" :index="'3-'+tag.id"
                          @click="toCategory(tag.id)">{{ tag.name }}</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="4" @click="router.push('/blog/classify')">
            <MyIcon type="icon-archive"/>
            <span class="menu-title">归档</span>
          </el-menu-item>
          <el-menu-item index="5" @click="router.push('/')">
            <MyIcon type="icon-collection"/>
            <span class="menu-title">作品展示</span>
          </el-menu-item>
          <el-menu-item index="6" @click="router.push('/about')">
            <MyIcon type="icon-about"/>
            <span class="menu-title">关于</span>
          </el-menu-item>
        </el-menu>
      </span>

      <span class="right">
        <span class="user">
          <div class="toLoginRegister">
            <span @click="toLogin">登录</span>
            <span @click="toRegister">注册</span>
          </div>
        </span>
        <el-tooltip class="item" effect="dark" content="设置" placement="bottom">
          <span class="setting" @click="drawer = true">
            <MyIcon type="icon-setting"/>
          </span>
        </el-tooltip>
      </span>
    </div>
  </nav>
</template>

<script lang="ts" setup name="Navbar">
import {onMounted, reactive, ref} from 'vue'
import {icon} from "@/utils/icon"
import {useRouter} from "vue-router";
import {getCategory} from "@/api/blog";


const router = useRouter()

var siteConfig = reactive({
  name: '文斋阁',
  logo: '/favicon.ico',
})

const categoryList = ref([]);

async function categoryData() {
  categoryList.value = await getCategory()
}

var tagList = reactive([
  {id: 1, name: '标签Python'},
  {id: 2, name: '标签Golang'},
  {id: 3, name: '标签云原生'},
  {id: 4, name: '标签前端'}
])

let {MyIcon} = icon()

onMounted(
    () => {
      categoryData()
    }
)

</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.left, .middle, .right {
  display: flex;
  align-items: center;
}

.left {
  flex: 1;
}

.middle {
  flex: 2;
  justify-content: center;
}

.right {
  flex: 1;
  justify-content: flex-end;
}

.el-menu {
  display: flex;
  justify-content: center;
  border: none;
}

.el-menu > .el-menu-item,
.el-menu > .el-sub-menu {
  margin: 0 20px; /* 调整一级菜单项之间的间距 */
  font-size: 16px; /* 调整字体大小 */
}

.el-menu-item:hover {
  color: #409eff; /* hover 颜色 */
}

.setting, .toLoginRegister span {
  font-size: 16px;
  margin-left: 40px; /* 设置登录注册和设置按钮的间距 */
  cursor: pointer;
}

.toLoginRegister span:hover {
  color: #409eff; /* hover 颜色 */
}

.no-choose {
  font-size: 18px; /* 调整 logo 旁文字的大小 */
  font-weight: bold; /* 增加 logo 名字的权重 */
  margin-left: 10px;
}

.menu-title {
  margin-left: 5px;
}
</style>

