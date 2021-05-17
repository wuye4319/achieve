import { MutationTree } from 'vuex'
import { GlobalState } from '.'
import { GlobalMutation } from './types'
import Vue from 'vue'

const mutations: MutationTree<GlobalState> = {
  [GlobalMutation.taskInfor] (state, payload) {
    state.taskInfor = payload.data
    Vue.set(state, 'taskInfor', payload.data)
  }
}

export default mutations
