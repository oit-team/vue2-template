<template>
  <el-header>
    <div class="system">
      <el-avatar style="width: 40px; height: 40px" src="https://picsum.photos/40" />
      <span class="system-name">项目模板</span>
      <i
        class="collapse-btn"
        :class="$store.state.aside.collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        @click="$store.commit('aside/switchCollapse')"
      ></i>
    </div>

    <el-menu class="scrollbar" :default-active="activeIndex" mode="horizontal" router>
      <el-menu-item index="1" route="/">
        处理中心
      </el-menu-item>
      <el-menu-item index="3" route="/about">
        消息中心
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          我的工作台
        </template>
        <el-menu-item index="2-1">
          选项1
        </el-menu-item>
        <el-menu-item index="2-2">
          选项2
        </el-menu-item>
        <el-menu-item index="2-3">
          选项3
        </el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">
            选项4
          </template>
          <el-menu-item index="2-4-1">
            选项1
          </el-menu-item>
          <el-menu-item index="2-4-2">
            选项2
          </el-menu-item>
          <el-menu-item index="2-4-3">
            选项3
          </el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>

    <div class="account">
      <el-dropdown>
        <span class="account-name">
          测试用户<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="dropdown-item--danger">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'VcHeader',

  data: () => ({
    activeIndex: '1',
  }),
}
</script>

<style lang="scss" scoped>
@import "src/styles/element-variables";

.el-header {
  padding: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #e6e6e6;
}

.system {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  padding-right: 20px;
  user-select: none;

  .system-name {
    font-weight: bold;
    line-height: 0;
    padding-left: 12px;
  }
}

.collapse-btn {
  font-size: 24px;
  padding-left: 27px;
  cursor: pointer;
}

.account {
  margin-left: auto;
  padding-right: 20px;

  .account-name {
    cursor: pointer;
  }
}

.dropdown-item--danger {
  color: $--color-danger;

  &:focus,
  &:not(.is-disabled):hover {
    color: $--color-danger;
    background-color: transparentize($--color-danger, 0.9);
  }
}
</style>
