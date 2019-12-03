<template>
  <div class="region">
      <router-link :to="{path:'/index'}">
          <img class="goodCourese" src="http://p.qpic.cn/qqconadmin/0/f47a95c0f7c54b4a89fc4c1b6be30244/0">
      </router-link>
      <router-link :to="{path:'/index'}">
          <img class="goodCouter_" src="http://p.qpic.cn/qqconadmin/0/7f5af788e38e481a9381c2c6f62ba75c/0">
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.region{
    display: flex;
    width: 3.6rem;
    height: .8rem;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #F5F5F6;
    margin-bottom: .15rem;
}
.goodCourese{
    width: .64rem;
    height: .64rem;
}
.goodCouter_{
    width:2.52rem;
    height: .64rem;
}
</style>