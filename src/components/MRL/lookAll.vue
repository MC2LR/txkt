<template>
   <div class="allCourese">
       <button @click="lookall">查看全部课程</button>
   </div>
</template>

<script>
export default {
    methods:{
        lookall(){
            this.$router.push({path:'index'})
        }
    }
}
</script>

<style scoped>
.allCourese{
    width: 100%;
    height: .45rem;
    text-align: center;
}
.allCourese button{
    width: 3.55rem;
    height: .45rem;
    line-height: .45rem;
    margin: 0 auto;
    border: 0;
    outline: none;
    color: #BBB;
    background:#F6F6F6; 
    font-size: .14rem;
}
</style>