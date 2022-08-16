import Vue from 'vue'
import {
  Button,
  Message,
} from 'element-ui'

// 组件注册
const components = [
  Button,
]

// 挂载到实例
const globalProperties = {
  $message: Message,
}

components
  .forEach(component => Vue.use(component))

Object
  .entries(globalProperties)
  .forEach(([prop, value]) => {
    Vue.prototype[prop] = value
  })
