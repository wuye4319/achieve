<template>
  <view class="content">
    <view class="todolist">
      <view>
        <mission :data="divide" />
      </view>
    </view>
    <view class="finish">
      <view class="fold-title" @click="toggleMission">
        <span>已完成</span>
        <view class="rightinfor">
          <span class="finish-count">{{ finished.length }}</span>
          <FontAwesome
            :type="'fas fa-' + iconFinish"
            size="10"
            color="#000"
          ></FontAwesome>
        </view>
      </view>
      <view :class="missionClass">
        <mission :data="finished" />
      </view>
    </view>
    <view class="addTask" @click="openDrawer">
      <FontAwesome
        type="fas fa-plus-circle"
        class="open-drawer"
        size="80"
        color="#1db3ff"
      ></FontAwesome>
    </view>
    <!-- 新增任务 -->
    <uni-popup ref="drawer" type="bottom">
      <view class="uni-popup-box">
        <NewTask></NewTask>
      </view>
    </uni-popup>
  </view>
</template>

<script lang="ts">
// import { WebSiteState } from '@/store/substore'
import { Component, Provide, Vue } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import mission from './mission.vue'
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
import FontAwesome from '@/components/Am-FontAwesome/index.vue'
import NewTask from './newtask.vue'
import uniPopup from '@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue'

@Component({
  name: 'todolist',
  components: {
    mission,
    uniDrawer,
    FontAwesome,
    uniPopup,
    NewTask
  }
})
export default class TodoList extends Vue {
  @Getter('taskInfor')
  taskInfor

  @Action('taskInfor')
  getTask

  $refs
  todoList: Array<object> = []
  finished: Array<object> = []
  missionClass: string = 'mission hide-mission hide-end'
  iconFinish: string = 'angle-left'

  async onLoad() {
    await this.getTask()
  }

  get divide() {
    this.finished = []
    this.todoList = []
    if (this.taskInfor) {
      this.taskInfor.forEach((item) => {
        item.state === 1 ? this.finished.push(item) : this.todoList.push(item)
      })
    }
    return this.todoList
  }

  toggleMission() {
    let isDefault =
      this.missionClass === 'mission' || this.missionClass === 'no-trans'
    this.missionClass = isDefault ? 'mission hide-mission' : 'mission'
    this.iconFinish = isDefault ? 'angle-left' : 'angle-down'
  }

  openDrawer() {
    this.$refs.drawer.open()
  }

  @Provide()
  clearTrans() {
    let isDefault = this.missionClass === 'mission'
    this.missionClass = isDefault ? 'no-trans' : this.missionClass
  }

  @Provide()
  closeDrawer() {
    this.$refs.drawer.close()
  }
}
</script>

<style lang="scss">
page {
  background: #f2f2f2;
}

.content {
  padding-top: 30rpx;
  .open-drawer {
    margin-right: 20rpx;
  }
  .uni-popup-box {
    background: #fff;
    padding: 30rpx;
    //#ifdef H5
    margin-bottom: 90rpx;
    //#endif
  }
  .addTask {
    position: fixed;
    //#ifdef H5
    bottom: 150rpx;
    //#endif
    //#ifndef H5
    bottom: 50rpx;
    //#endif
    right: 30rpx;
    z-index: 2;
  }
  .fold-title {
    position: relative;
    z-index: 1;
    font-size: 12px;
    padding: 0 46rpx;
    height: 25px;
    line-height: 25px;
    background: #fbcfdc;
    display: flex;
    justify-content: space-between;
  }
  .finish {
    overflow: hidden;
  }
  // 动画结束，处理高度
  // .hide-end {
  // }
  .finish-count {
    margin-right: 18rpx;
  }
  .rightinfor {
    display: inline-block;
  }
  .mission {
    transform: translateY(0%);
    transition: transform 0.5s ease;
  }
  .hide-mission {
    transform: translateY(-100%);
    overflow: hidden;
    height: 60rpx;
  }
  // 清理动画的影响
  .no-trans {
    transform: none;
  }
}
</style>
