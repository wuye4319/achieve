<template>
  <view class="mission-item">
    <view class="m-cantainer" v-for="(item, index) in data" :key="item.id">
      <view class="m-type">
        <checkbox-group @change="checkboxChange(item, $event)">
          <label>
            <view>
              <checkbox
                value="check"
                :checked="item.state === 1 ? true : false"
                style="transform: scale(0.7)"
              />
            </view>
          </label>
        </checkbox-group>
      </view>
      <view class="m-infor" @click="openOneDrawer(index)">
        <view class="m-title ell">{{ item.title }}</view>
        <view class="m-desc ell">{{ item.description }}</view>
        <view class="m-date">{{ item.planDate }}</view>
      </view>
      <!-- 任务详情 -->
      <uni-drawer :visible="true" :ref="'taskDetail' + index" mode="right">
        <view style="padding: 30rpx">
          <view class="uni-title">
            <taskDetail :itemData="item" :drawerIndex="index"></taskDetail>
          </view>
        </view>
      </uni-drawer>
    </view>
  </view>
</template>

<script lang="ts">
// import { WebSiteState } from '@/store/substore'
import { Component, Vue, Prop, Provide, Inject } from 'vue-property-decorator'
import { Action } from 'vuex-class'
// import { Getter } from 'vuex-class'
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
import taskDetail from './taskdetail.vue'

@Component({
  name: 'mission',
  components: {
    uniDrawer,
    taskDetail
  }
})
export default class Mission extends Vue {
  @Prop()
  data

  // 常量
  $refs

  @Action('taskInfor')
  getTask

  @Action('finishTask')
  finishTask

  @Inject('clearTrans')
  clearTrans

  created() {}

  // 1已完成，2未完成
  async checkboxChange(item, e) {
    const values = e.detail.value
    const temp = {
      id: item.id,
      data: {
        title: item.title,
        description: item.description,
        state: values[0] === 'check' ? 1 : 2,
        planDate: item.planDate
      }
    }
    await this.finishTask(temp)
    await this.getTask()
    this.$forceUpdate()
  }

  openOneDrawer(index) {
    this.clearTrans()
    this.$refs['taskDetail' + index][0].open()
  }

  @Provide()
  closeOneDrawer(index) {
    this.$refs['taskDetail' + index][0].close()
  }
}
</script>

<style lang='scss' scoped>
.finish .m-infor {
  color: #ccc;
}
.mission-item {
  .m-cantainer {
    display: flex;
    padding: 20rpx 40rpx;
    border-bottom: 1px solid #ddd;
  }
  .m-type,
  .m-button {
    width: 10%;
  }
  .m-desc {
    font-size: 12px;
    color: #888;
  }
  .m-infor {
    width: 90%;
    font-size: 14px;
    .m-date {
      color: brown;
      font-size: 12px;
    }
  }
}
</style>
