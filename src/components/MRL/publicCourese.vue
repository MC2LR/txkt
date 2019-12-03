<template>
  <div class="public-courese">
    <router-link
      class="public_item"
      v-for="(item,index) in publicVedioData"
      :key="index"
      to="/index"
    >
      <img :src="item.src" alt />
      <p>{{item.title}}</p>
      <span>{{item.feeStyle}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    publicVedioData: {}
  },
  methods: {}
};
</script>

<style scoped>
.public-courese {
  width: 3.6rem;
  padding: 0 0.05rem 0 0.1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.public_item {
  width: 1.8rem;
  height: 1.75rem;
  margin-bottom: 0.05rem;
}
.public_item img {
  width: 1.77rem;
  height: 0.99rem;
}
.public_item p {
  color: #000;
  font-size: 0.16rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.public_item span {
  color: #23b8ff;
}
</style>