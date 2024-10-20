<template>
  <nav class="sidebar">
    <ul>
      <!-- 权限管理 -->
      <li :class="{active: isMenuOpen.permissionManagement}" class="has-submenu">
        <div class="menu-item" @click="toggleMenu('permissionManagement')">
          <span>权限管理</span>
          <span class="arrow" :class="{open: isMenuOpen.permissionManagement}"></span>
        </div>
        <ul v-show="isMenuOpen.permissionManagement" class="submenu">
          <li :class="{ 'active-submenu': activeMenu === 'user' }">
            <router-link to="/manage/auth/user" @click.native="setActiveMenu('user')">用户管理</router-link>
          </li>
          <li :class="{ 'active-submenu': activeMenu === 'role' }">
            <router-link to="/manage/auth/role" @click.native="setActiveMenu('role')">角色管理</router-link>
          </li>
        </ul>
      </li>

      <!-- 博客管理 -->
      <li :class="{active: isMenuOpen.blogManagement}" class="has-submenu">
        <div class="menu-item" @click="toggleMenu('blogManagement')">
          <span>博客管理</span>
          <span class="arrow" :class="{open: isMenuOpen.blogManagement}"></span>
        </div>
        <ul v-show="isMenuOpen.blogManagement" class="submenu">
          <li :class="{ 'active-submenu': activeMenu === 'blog' }">
            <router-link to="" @click.native="setActiveMenu('blog')">博客列表</router-link>
          </li>
        </ul>
      </li>

      <!-- 分类管理 -->
      <li :class="{active: isMenuOpen.categoryManagement}" class="has-submenu">
        <div class="menu-item" @click="toggleMenu('categoryManagement')">
          <span>分类管理</span>
          <span class="arrow" :class="{open: isMenuOpen.categoryManagement}"></span>
        </div>
        <ul v-show="isMenuOpen.categoryManagement" class="submenu">
          <li :class="{ 'active-submenu': activeMenu === 'category' }">
            <router-link to="" @click.native="setActiveMenu('category')">分类列表</router-link>
          </li>
        </ul>
      </li>

      <!-- 标签管理 -->
      <li :class="{active: isMenuOpen.tagManagement}" class="has-submenu">
        <div class="menu-item" @click="toggleMenu('tagManagement')">
          <span>标签管理</span>
          <span class="arrow" :class="{open: isMenuOpen.tagManagement}"></span>
        </div>
        <ul v-show="isMenuOpen.tagManagement" class="submenu">
          <li :class="{ 'active-submenu': activeMenu === 'tag' }">
            <router-link to="" @click.native="setActiveMenu('tag')">标签列表</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup name="Sidebar">
import { ref } from 'vue';

const isMenuOpen = ref({
  permissionManagement: false,
  blogManagement: false,
  categoryManagement: false,
  tagManagement: false,
});

const activeMenu = ref('');

function toggleMenu(menu: string) {
  isMenuOpen.value[menu] = !isMenuOpen.value[menu];
}

function setActiveMenu(menu: string) {
  activeMenu.value = menu;
}
</script>

<style scoped>
/* 主导航栏样式 */
.sidebar {
  width: 240px;
  background-color: #1b2735; /* 更深的背景色 */
  color: #ffffff; /* 浅色文字 */
  padding: 20px;
  height: 100vh;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.15);
  transition: width 0.3s ease;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 12px;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 14px 18px;
  background-color: #2b3a4a; /* 子菜单项背景 */
  border-radius: 8px; /* 圆角 */
  transition: background-color 0.3s, box-shadow 0.3s;
}

.menu-item:hover {
  background-color: #3c4b5b;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* 二级菜单样式 */
.submenu {
  padding-left: 20px;
  margin-top: 8px;
  transition: max-height 0.3s ease-in-out;
}

.submenu li {
  padding: 10px;
  font-size: 15px;
  color: #bdc3c7;
}

.submenu li a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
}

.submenu li a:hover {
  color: #ffffff;
}

/* 激活的子菜单样式 */
.active-submenu {
  background-color: #4e78a0;
  border-radius: 6px;
}

/* 箭头样式 */
.arrow {
  border: solid #f5f7fa;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(45deg);
  transition: transform 0.3s;
}

.arrow.open {
  transform: rotate(225deg); /* 展开时箭头向下 */
}

/* active状态 */
li.active > .menu-item {
  background-color: inherit; /* 取消背景色 */
  font-weight: normal; /* 不加粗 */
  box-shadow: none; /* 去掉阴影 */
}

/* 激活的二级菜单样式 */
.active-submenu {
  background-color: #4e78a0; /* 保持二级菜单高亮背景色 */
  border-radius: 6px;
}
</style>
