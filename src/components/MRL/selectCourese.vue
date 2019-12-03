<template>
  <div class="select_courese">
    <div class="title_">/ 精选公开课 /</div>
    <div class="coureseSore">
      <div class="courter-title">课程</div>
      <ul class="oUl">
        <li
          class="Oli"
          v-for="(item,index) in coureseData"
          :key="index"
          @click="changeEventSort(index)"
          :class="{changeStyle:currentSortIndex == index}"
        >{{item.title}}
       </li>
      </ul>
    </div>
    <div class="coureseSore">
      <div class="courter-title">水平</div>
      <ul class="oUl">
        <li
          class="Oli"
          :class="{changeStyle:currentIndex == index}"
          @click="changeEvent(index)"
          v-for="(item,index) in courese_level"
          :key="index"
        >{{item.title}}
       </li>
      </ul>
    </div>
    <index-select-publicCourese :publicVedioData='finallyVedio'/>
  </div>
</template>

<script>
import publicCourese from './publicCourese'
export default {
  name: "seleCourese",
  data(){
      return{
          currentIndex:0,
          currentSortIndex:0
      }
  },
  props: {
    coureseData: Array,
    courese_level:Array,
    finallyVedio:{}

  },
  components:{
      "index-select-publicCourese":publicCourese
  },
  methods:{
      changeEvent(index){
          this.currentIndex = index;
          this.$emit('coureseLevel',index)
      },
      changeEventSort(index){
          this.currentSortIndex = index;
          this.$emit('coureseSort',index);
      }
  }
};
</script>

<style scoped>
.coureseSore {
  display: flex;
  width:100%;
  align-items: center;
}
.coureseSore .courter-title {
  color: #bbb;
  width: 0.3rem;
  height: 0.16rem;
  text-align: center;
  margin-left:0.1rem;
}

.title_ {
  width: 100%;
  height: 0.22rem;
  text-align: center;
  margin: 0.1rem 0;
  font-size: 0.16rem;
  color: #777;
}
.oUl {
  display: flex;
  overflow-x: auto;
  width: 3.2rem;
  height: .24rem;
  line-height: .24rem;
}
.Oli {
  height: 0.22rem;
  flex-shrink: 0;
  margin: 0 0.1rem;
  font-size: .12rem;
  color: #777;
}
.active{
    font-size: .16rem;
    font-weight: bolder;
}
.actived{

    font-size: .16rem;
    font-weight: bolder;
}
.changeStyle{
    color: #000;
    font-size: .16rem;
    font-weight: 800;
}
</style>