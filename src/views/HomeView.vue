<template>
  <div class="home">
    <el-button @click="test">
      测试
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    test() {
      if (true) {}
      this.$message.success('test')
    },
  },
}
</script>
