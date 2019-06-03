import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// mount挂载在主页面index.html中id为app的DOM元素上
new Vue({
  render: h => h(App),
}).$mount('#app')
