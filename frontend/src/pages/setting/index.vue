<template>
  <view class="content"
    >{{ data }}
    <test></test>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

@Component({
  name: 'setting',
  components: {}
})
export default class TodoList extends Vue {
  data: string = '设置'
  $refs

  created() {
    console.log(this.data)
  }

  onLoad() {}
}
</script>

<style>
page {
  background: #f2f2f2;
}
.content {
  padding-top: 30upx;
}
.subtest {
  transform: translateY(0%);
  transition: transform 0.5s ease;
  top: 100px;
}
</style>
