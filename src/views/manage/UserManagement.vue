<template>
  <div class="user-management">
    <div class="header">
      <el-button type="primary" @click="handleAddUser" class="add-user-btn">
        <el-icon>
          <Plus/>
        </el-icon>
        新增用户
      </el-button>
    </div>

    <el-table :data="users" style="width: 100%; margin-top: 20px;">
      <el-table-column prop="id" label="ID" width="50"></el-table-column>
      <el-table-column prop="nickname" label="昵称"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="role_name" label="角色"></el-table-column>

      <!-- 操作列 -->
      <el-table-column label="操作" width="300">
        <template #default="scope">
          <div class="action-buttons">
            <!-- 详情按钮 -->
            <el-button class="action-btn primary-btn" @click="viewUser(scope.row)">
              <el-icon>
                <Document/>
              </el-icon>
              详情
            </el-button>
            <!-- 编辑按钮 -->
            <el-button class="action-btn edit-btn" @click="editUser(scope.row)">
              <el-icon>
                <Edit/>
              </el-icon>
              编辑
            </el-button>
            <!-- 删除按钮 -->
            <el-button class="action-btn danger-btn" @click="deleteUser(scope.row)">
              <el-icon>
                <Delete/>
              </el-icon>
              删除
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup name="UserManagement">
import {ref} from 'vue';
import {Plus, Document, Edit, Delete} from '@element-plus/icons-vue';

// 用户数据
const users = ref([
  {id: 1, nickname: '用户1', username: 'user1', role_name: '管理员'},
  {id: 2, nickname: '用户2', username: 'user2', role_name: '普通用户'},
]);

const handleAddUser = () => {
  console.log("新增用户");
};

const viewUser = (user) => {
  console.log("查看详情", user);
};

const editUser = (user) => {
  console.log("编辑用户", user);
};

const deleteUser = (user) => {
  console.log("删除用户", user);
};
</script>

<style scoped>
.user-management {
  padding: 20px;
  background-color: #fff;
}

.header {
  display: flex;
  justify-content: flex-start; /* 使按钮在左侧对齐 */
  margin-bottom: 20px; /* 增加按钮与表格的间距 */
}

/* 按钮布局，横向排列 */
.action-buttons {
  display: flex;
  justify-content: space-around; /* 保证按钮之间有适当的空间 */
}

.action-btn {
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: background-color 0.3s ease;
}

/* 按钮样式 */
.primary-btn {
  background-color: #409EFF;
  color: white;
}

.edit-btn {
  background-color: #67C23A;
  color: white;
}

.danger-btn {
  background-color: #F56C6C;
  color: white;
}

.primary-btn:hover,
.edit-btn:hover,
.danger-btn:hover {
  opacity: 0.9; /* 鼠标悬停时的效果 */
}
</style>
