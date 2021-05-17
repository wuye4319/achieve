<template>
  <view class="content">
    <view class="task-detail">
      <view class="task-infor">
        <view class="task-state">
          <checkbox-group @change="checkboxChange(item, $event)">
            <label>
              <view>
                <checkbox
                  value="check"
                  :checked="itemData.state === 1 ? true : false"
                  style="transform: scale(0.7)"
                />
              </view>
            </label>
          </checkbox-group>
        </view>
        <view class="task-planDate">{{ itemData.planDate }}</view>
      </view>
      <view>
        <textarea
          placeholder="标题"
          class="task-title"
          auto-height="true"
          v-model="itemData.title"
        />
      </view>
      <view>
        <textarea
          placeholder="描述"
          class="task-detail"
          auto-height="true"
          v-model="itemData.description"
        />
      </view>
    </view>
    <button class="butt-add" @click="close">确定</button>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Provide, Inject, Prop } from 'vue-property-decorator'

@Component({
  name: 'setting',
  components: {}
})
export default class TodoList extends Vue {
  data: string = '设置'

  @Prop()
  drawerIndex: number

  @Prop()
  itemData: object

  created() {
    console.log(this.drawerIndex)
  }

  onLoad() {}

  @Inject('closeOneDrawer')
  closeDrawer

  close() {
    this.closeDrawer(this.drawerIndex)
  }
}
</script>

<style>
.task-state,
.task-planDate {
  display: inline-block;
}
.task-title,
.task-detail {
  width: 100%;
  margin-top: 20rpx;
}
.task-title {
  font-weight: bold;
  font-size: 18px;
}
.task-detail {
  font-size: 14px;
}
.butt-add {
  margin-top: 20rpx;
}
</style>
