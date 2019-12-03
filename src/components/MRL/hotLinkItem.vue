<template>
<!-- 热门培训的相关连接 -->
  <div class="hotLink">
      <router-link class="hotStyle" v-for="(item,index) in HotLinkData" :key="index" :to="{path:'/index'}">
          {{item.name}}
      </router-link>
  </div>
</template>

<script>
export default {
    props:{
        HotLinkData:Array
    },
    methods:{
       
    }
}
</script>

<style scoped>
.hotLink{
    width: 3.51rem;
    margin: 0 auto;
margin-top: .1rem;

}
.hotStyle{
    display: inline-block;
    border: 1px solid #EBEBEB;
    height: .34rem;
    line-height: .34rem;
    padding: 0 .1rem;
    border-radius: .2rem;
    margin: .03rem;
    color: #333;
}
</style>

