<template>
  <view class="content">
    <zzx-calendar :dotList="data"></zzx-calendar>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import zzxCalendar from 'components/zzx-calendar/zzx-calendar.vue'

@Component({
  name: 'calendar',
  components: {
    zzxCalendar
  }
})
export default class TodoList extends Vue {
  data: Array<object> = [{ date: '2020-08-28' }]

  @Provide()
  created () {
    console.log(this.data)
  }

  onLoad () {
    this.datechange()
  }

  datechange (e?: string) {
    console.log(e)
  }
};
</script>

<style>
page {
  background: #f2f2f2;
}
.content {
  padding-top: 30upx;
}
</style>
