<template>
  <div class="Training">
    <div class="hotTitle">/ 热 门 培 训 /</div>
    <ul class="hotCoureseItemWraper">
      <li
        v-for="(item,index) in hotData"
        :key="index"
        :class="{is:hotItem == index}"
        @click="changeHotIndex(index)"
      >{{item.name}}</li>
    </ul>
    <hotTrain-LinkItem :HotLinkData='finaLinkData'/>
  </div>
</template>

<script>
import HotLink from './hotLinkItem'
export default {
  props: {
    hotData: Array,//这是hottitle
    finaLinkData:Array//这是对应的link
  },
  data() {
    return {
      hotITEM: [],
      hotItem: 0
    };
  },
  methods: {
    changeHotIndex(index) {
      this.hotITEM = this.hotData[index].title;
      this.hotItem = index;
      this.$emit('hotEvent',index);
    }},
  components:{
      "hotTrain-LinkItem":HotLink
  }
};
</script>

<style scoped>
.Training {
  width: 100%;
  height: 1.99rem;
  margin: 0 auto;
  text-align: center;
  margin-top: 0.3rem;
}
.hotCoureseItemWraper {
  width: 3.51rem;
  height: 0.43rem;
  margin: 0 auto;
  line-height: 0.43rem;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
}
.hotCoureseItemWraper li {
  width: 14%;
  height: 0.42rem;
}
.hotTitle {
  font-size: 0.16rem;
  color: #777;
}
.hotLingk {
  display: inline-block;
  padding: 0 0.1rem;
  height: 0.34rem;
  line-height: 0.34rem;
  border: 1px solid #ebebeb;
  border-radius: 0.2rem;
  margin: 0.05rem;
  font-size: 0.14rem;
  color: #333;
}
.linkWraper {
  width: 3.51rem;
  height: 1.02rem;
  margin: 0 auto;
  margin-top: 0.1rem;
}
.is {
  color: #23b8ff;
  border-bottom: 2px solid #23b8ff;
}
</style>