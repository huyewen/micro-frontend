# vue-micro-frontend

在`main-app\src\single-spa\index.js`文件中，基于`single-spa`框架，实现了一个`mini-single-spa`，详情可看代码。

目前，作为实例，都是以`@vue/cli`生成的vue项目作为各子应用的的基本框架，然后通过`single-spa-vue`对子应用主入口文件进行改造，使得子应用可以单独运行，也可以作为主应用中的一部分。

`主应用基座`也是vue项目基本框架进行搭建，然后通过对入口文件进行改造。

```
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

```

本身`single-spa`框架代码并不多，也不复杂，所以学起来很容易，经过对此的学习，在对进一步基于`single-spa`改进后的`qiankun`框架，理解起来会更加透彻，后面会进一步的学习`qiankun`框架的源码，然后作进一步的总结。