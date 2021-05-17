import { GetterTree } from 'vuex'
import { GlobalState } from '.'
import { GlobalMutation } from './types'

const getters: GetterTree<GlobalState, GlobalState> = {
  [GlobalMutation.taskInfor] (state) {
    return state.taskInfor
  }
}

export default getters
