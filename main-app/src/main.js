import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import appInfo from './appJson.json'
import { registerApplication, start } from './single-spa'

Vue.config.productionTip = false

// 远程加载子应用
function createScript (url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')

    script.src = url
    script.onload = resolve
    script.onerror = reject

    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)
  })
}

function loadApp (url, name) {
  return async () => {
    await createScript(`${url}/js/chunk-vendors.js`)
    await createScript(`${url}/js/app.js`)

    return window[name]
  }
}

function registerApps (appInfo) {
  Object.keys(appInfo).forEach(key => {
    registerApplication({
      name: appInfo[key].name,
      loadApp: loadApp(appInfo[key].url, appInfo[key].name),
      activeWhen: location => location.pathname.startsWith(`/${appInfo[key].name}`),
      customProps: {}
    })
  })
}

// 注册APP
registerApps(appInfo)

new Vue({
  router,
  store,
  mounted () {
    start()
  },
  render: h => h(App)
}).$mount('#app')
