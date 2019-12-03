<template>
  <div class="weekCourese">
    <div class="weekTitle">/ 本 周 最 受 欢 迎 的 好 课 /</div>
    <div class="weekWraper">
      <router-link
        class="weetItem"
        :to="{path:'/index'}"
        v-for="(item,index) in weekData"
        :key="index"
      >
        <img :src="item.src" alt />
        <p>{{item.title}}</p>
        <span>{{item.feeStyle}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weekData: Array
  },
  methods: {}
};
</script>

<style scoped>
.weekCourese {
  width: 3.65rem;
  margin-left: 0.1rem;
  margin-top: 0.05rem;
}
.weekWraper{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.weekTitle {
  font-size: 0.16rem;
  width: 100%;
  text-align: center;
  color: #777;
  height: 22px;
  margin: .1rem 0;
}
.weetItem {
  width: 1.8rem;
  height: 1.75rem;
  margin-bottom: 0.05rem;
}
.weetItem img {
  width: 1.77rem;
  height: 0.99rem;
}
.weetItem p {
  color: #000;
  font-size: 0.16rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.weetItem span {
  color: #23b8ff;
}
</style>
