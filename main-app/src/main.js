import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApplication, start } from 'single-spa'

Vue.config.productionTip = false

// 远程加载子应用
function createScript (url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')

    script.url = url
    script.onload = resolve
    script.onerror = reject

    const
  })
}

