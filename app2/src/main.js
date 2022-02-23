import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

const vueOptions = {
  el: '#microApp',
  router,
  store,
  render: (h) => h(App)
}

if (!window.singleSpaNavigate) {
  delete vueOptions.el
  new Vue(vueOptions).$mount('#app')
}

const vueLifecycle = singleSpaVue({
  Vue,
  vueOptions
})

export function bootstrap (customProps) {
  console.log('app2: bootstrap')
  return vueLifecycle.bootstrap(customProps)
}

export function mount (customProps) {
  console.log('app2: mount')
  return vueLifecycle.mount(customProps)
}

export function unmount (customProps) {
  console.log('app2: unmount')
  return vueLifecycle.unmount(customProps)
}

export function update (customProps) {
  console.log('app2: update')
  return vueLifecycle.update(customProps)
}
