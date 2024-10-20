<template>
  <div class="role-management">
    <div class="header">
      <el-button type="primary" @click="handleAddRole" class="add-role-btn">
        <el-icon>
          <Plus/>
        </el-icon>
        新增角色
      </el-button>
    </div>

    <el-table :data="roles" style="width: 100%; margin-top: 20px;">
      <el-table-column prop="id" label="ID" width="50"></el-table-column>
      <el-table-column prop="role_name" label="角色名称"></el-table-column>
      <el-table-column prop="role_description" label="角色描述"></el-table-column>

      <!-- 操作列 -->
      <el-table-column label="操作" width="300">
        <template #default="scope">
          <div class="action-buttons">
            <!-- 详情按钮 -->
            <el-button class="action-btn primary-btn" @click="viewRole(scope.row)">
              <el-icon>
                <Document/>
              </el-icon>
              详情
            </el-button>
            <!-- 编辑按钮 -->
            <el-button class="action-btn edit-btn" @click="editRole(scope.row)">
              <el-icon>
                <Edit/>
              </el-icon>
              编辑
            </el-button>
            <!-- 删除按钮 -->
            <el-button class="action-btn danger-btn" @click="deleteRole(scope.row)">
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

<script lang="ts" setup name="RoleManagement">
import {ref} from 'vue';
import {Plus, Document, Edit, Delete} from '@element-plus/icons-vue';

// 角色数据
const roles = ref([
  {id: 1, role_name: '管理员', role_description: '具有系统管理权限'},
  {id: 2, role_name: '普通用户', role_description: '具有基本操作权限'},
]);

const handleAddRole = () => {
  console.log("新增角色");
};

const viewRole = (role) => {
  console.log("查看详情", role);
};

const editRole = (role) => {
  console.log("编辑角色", role);
};

const deleteRole = (role) => {
  console.log("删除角色", role);
};
</script>

<style scoped>
.role-management {
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
