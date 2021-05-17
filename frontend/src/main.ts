import Vue from 'vue'
import App from './App.vue'
import queue from './common/queue'
import store from './store'
import loadMore from './components/load-more.vue'
import empty from './components/empty.vue'

Vue.config.productionTip = false
Vue.prototype.$queue = queue
// Vue.prototype.$SysCache = HttpCache;
Vue.prototype.$store = store

Vue.component('load-more', loadMore)
Vue.component('empty', empty)

new App({
  store
}).$mount()
