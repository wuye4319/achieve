import { ActionTree } from 'vuex'
import { GlobalState } from '.'
import { GlobalMutation } from './types'
import { addTask, editTask, getTask } from '../service'

const actions: ActionTree<GlobalState, GlobalState> = {
  async [GlobalMutation.taskInfor] ({ commit }, param) {
    const data = await getTask(0)
    commit(GlobalMutation.taskInfor, { data: data, param: param })
  },
  async [GlobalMutation.addTask] ({ commit }, param) {
    await addTask(param)
  },
  async [GlobalMutation.finishTask] ({ commit }, param) {
    await editTask(param.id, param.data)
  }
}

export default actions
