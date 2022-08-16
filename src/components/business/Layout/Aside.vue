<template>
  <el-aside width="auto">
    <el-menu
      class="overflow-auto scrollbar"
      :collapse="$store.state.aside.collapse"
      @select="selectMenu"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">
          选项1
        </el-menu-item>
        <el-menu-item index="1-2">
          选项2
        </el-menu-item>
        <el-menu-item index="1-3">
          选项3
        </el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">
            选项4
          </template>
          <el-menu-item index="1-4-1">
            选项1
          </el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'VcAside',

  methods: {
    selectMenu(...index) {
      this.$store.commit('aside/selectMenu', index)
    },
  },
}
</script>

<style lang="scss" scoped>
.el-aside {
  position: relative;
}

.el-menu {
  height: 100%;

  &:not(.el-menu--collapse) {
    width: 240px;
  }
}
</style>
