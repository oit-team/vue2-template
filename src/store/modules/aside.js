// 侧边栏
export default {
  namespaced: true,
  state: {
    // 当前选中的索引
    index: '',
    // 当前选中的索引信息
    indexInfo: [],
    // 是否折叠
    collapse: false,
  },
  mutations: {
    // 切换菜单折叠
    switchCollapse(state) {
      state.collapse = !state.collapse
    },
    selectMenu(state, index) {
      state.index = index[0]
      state.indexInfo = index
    },
  },
}
