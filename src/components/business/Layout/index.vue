<template>
  <el-container class="page-container" direction="vertical">
    <VcHeader />
    <el-container class="overflow-hidden">
      <VcAside />
      <VcMain class="scrollbar" />
    </el-container>
  </el-container>
</template>

<script>
import VcHeader from './Header'
import VcAside from './Aside'
import VcMain from './Main'

export default {
  name: 'VcLayout',
  components: {
    VcMain,
    VcAside,
    VcHeader,
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
</style>
