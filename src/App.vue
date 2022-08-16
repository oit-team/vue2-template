<template>
  <div id="app">
    <VcLayout />
  </div>
</template>

<script>
import VcLayout from '@/components/business/Layout'

export default {
  name: 'App',
  components: {
    VcLayout,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
