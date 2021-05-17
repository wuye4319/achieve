import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// import WebSite from './substore'

Vue.use(Vuex)

export class GlobalState {
  taskInfor: object = []
}

export default new Vuex.Store<GlobalState>({
  modules: {
    // webSite: WebSite,
  },
  state: new GlobalState(),
  mutations,
  actions,
  getters
})
