<template>
  <div class="vedio">
    <router-link
      class="vedio_item"
      :to="{path:item.path}"
      v-for="(item,index) in vediO"
      :key="index"
    >
      <img class="vedio_img" :src="item.src" />
      <div class="vedio_news">
        <h3>{{item.title}}</h3>
        <p>{{item.sort}}</p>
        <div class="vedio_time">{{item.time}}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "vedio",
  props: {
    vediO: Array
  }
};
</script>

<style scoped>
.vedio_item {
  width: 3.65rem;;
  height: 0.98rem;
  display: flex;
  margin-top: 0.06rem;
  margin-left: .1rem;
}
.vedio_img {
  width: 1.75rem;
  height: 0.98rem;
}
.vedio_news {
  width: 1.99rem;
  height: 0.98rem;
}
.vedio_news h3 {
  white-space: nowrap;
  overflow: hidden;
  width: 1.78rem;
  text-overflow: ellipsis;
  color: #000;
  margin: 0.1rem 0 0 0.05rem;
}
.vedio_news p {
  font-size: 0.16rem;
  color: #000;
  margin: 0.05rem 0 0 0.05rem;
}
.vedio_news .vedio_time {
  color: #777;
  margin: 0.05rem 0 0 0.05rem;
}
</style>