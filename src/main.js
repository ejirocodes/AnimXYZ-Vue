import Vue from 'vue'
import App from './App.vue'
import VueAnimXYZ from '@animxyz/vue'
import '@animxyz/core'

Vue.config.productionTip = false

Vue.use(VueAnimXYZ)

new Vue({
  render: h => h(App),
}).$mount('#app')
