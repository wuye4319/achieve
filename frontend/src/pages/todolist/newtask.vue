<template>
  <view>
    <label>收集箱</label>
    <textarea class="inputTask" placeholder="新增任务" auto-height="true" v-model="taskItem" />
    <button class="butt-add" @click="addTaskList">确定</button>
  </view>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'

@Component({
  name: 'newitem',
  components: {}
})
export default class NewItem extends Vue {
  taskItem: string = ''

  @Action('taskInfor')
  getTask

  @Action('addTask')
  addTask

  created() {}

  onLoad() {}

  @Inject('closeDrawer')
  closeDrawer

  async addTaskList() {
    if (this.taskItem) {
      await this.addTask(this.taskItem)
      await this.getTask()
    }
    this.closeDrawer()
  }
}
</script>

<style>
.butt-add {
  width: 200rpx;
}
.inputTask {
  width: 100%;
  margin: 20rpx 0;
}
</style>
