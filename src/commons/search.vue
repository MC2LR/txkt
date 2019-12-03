<template>
  <div :class="{'open':isOpen}" class="search_wraper">
    <form>
      <div class="search" v-if="isClear">
        <router-link class="search-logo" :to="{path:'./index'}">
          <img src="../assets/imgs/1.png" alt="logo" />
        </router-link>
        <div class="input-wraper">
          <input class="inp" @click="toSearch" type="text" placeholder="搜索老师、机构、课程" />
        </div>
      </div>
      <div class="trueSearch" v-else>
        <div class="search_content">
          <input type="text" class="trueInput" v-model="vedio_item" autofocus />
          <img src="../assets/imgs/i.png"/>
          <p @click="cancle">取消</p>
        </div>
        <section>
          <div class="Head">热门搜索</div>
          <div class="hot">
            <router-link
              :to="{path:'./searchDetail'}"
              v-for="(item,index) in myData"
              :key="index"
              class="hot_item"
              @click.native="valueTo(index)"
            >{{item.name}}</router-link>
          </div>
          <div class="recentSearch" v-if="isRent">
            <div class="rencentTitle">最近搜索</div>
            <ul class="Ul">
              <li class="Li" v-for="(item,index) in recentArr" :key="index" @click="recentValue(index)">{{item}}

                  <img src="../assets/imgs/i.png" class="ii" @click="deleCurrent(index)"/>
              </li>
            </ul>
            <div class="clearLS" @click="delet()">清除搜索记录</div>
          </div>
        </section>
      </div>
    </form>
  </div>
</template>

<script>
import { constants } from "crypto";
export default {
  data() {
    return {
      isOpen: false,
      isClear: true,
      vedio_item: "",
      isRent: false,
      recentArr: [],
    };
  },
  props: {
    myData: Array
  },
  methods: {
    toSearch() {
      this.isOpen = true;
      this.isClear = false;
    },
    // 将最近搜索的内容添加到输入框
    recentValue(index){
        this.vedio_item = this.recentArr[index];
    },
    // 点击删除按钮即将
    delet() {
      localStorage.removeItem("val");
      this.isRent = false;
      this.recentArr = [];
    },
    cancle() {
      this.isOpen = false;
      this.isClear = true;
    },
    deleCurrent(index){
        this.recentArr.splice(index,1);
    },
    valueTo(val) {
      // 将选中的项回填到输入框内
      this.vedio_item = this.myData[val].name;
      // 将输入框中的值添加到数组中
      this.recentArr.push(this.vedio_item);
      localStorage.setItem("val", this.recentArr);
     console.log(localStorage.getItem('val'));
      if (this.vedio_item) {
        this.isRent = true;
      }
    }
  }
};
</script>

<style scoped>
.search_wraper{
    position: fixed;
    top: 0;
    z-index: 5000;
    background: white;
    width: 100%;

}
.search {
  width: 100%;
  height: 0.52rem;
  display: flex;
  align-items: center;
}
.input-wraper {
  width: 3.2rem;
  height: 0.32rem;
  margin-left: 0.06rem;
  background: #f2f2f6;
  border-radius: 0.2rem;
  display: flex;
  margin-top: 0.05rem;
}
.input-wraper::before {
  content: "";
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  margin-top: 0.05rem;
  margin-left: 0.5rem;
  background: url(../assets/imgs/2.png) no-repeat;
  background-size: contain;
}
.search .inp {
  display: block;
  height: 0.32rem;
  border: 0;
  outline: none;
  margin-left: 0.05rem;
  font-size: 0.14rem;
  background: #f2f2f6;
}
.inp::-webkit-input-placeholder {
  color: #bbbbbb;
}
.search-logo {
  width: 0.3rem;
  height: 0.3rem;
  display: block;
  text-align: center;
}
.search-logo img {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-left: 0.03rem;
}

.open {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  z-index: 5000;
}
.trueSearch {
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
  background: white;
}
.trueSearch img {
  width: 0.2rem;
  height: 0.2rem;
}
.trueSearch p {
  width: 0.5rem;
  height: 0.45rem;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.14rem;
  color: #23b8ff;
}
.search_content {
  width: 100%;
  height: 0.52rem;
  display: flex;
  align-items: center;
  border-bottom: 3px solid #f5f0f0;
}
.trueInput {
  border: 0;
  outline: none;
  display: block;
  width: 3.04rem;
  height: 0.45rem;
  text-indent: 0.32rem;
}
.hot {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
.hot .hot_item {
  height: 0.3rem;
  padding: 0 0.16rem;
  line-height: 0.3rem;
  color: black;
  margin: 0 0.1rem;
  font-size: 0.14rem;
  border-radius: 0.15rem;
  border: 1px solid #f2f2f2;
  display: block;
  margin-bottom: 0.1rem;
}
.banner {
  width: 100%;
  height: 1.43rem;
  background: red;
}

section .Head {
  font-size: 0.14rem;
  height: 0.38rem;
  width: 3.45rem;
  margin: 0 auto;
  line-height: 0.38rem;
  color: #777;
}
section .Head::before {
  content: "";
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  vertical-align: middle;
  background: url(../assets/imgs/i-hot.b21c59b.png) no-repeat;
  background-size: contain;
  margin-right: 0.03rem;
}
.rencentTitle {
  font-size: 0.14rem;
  width: 3.45rem;
  margin: 0 auto;
  line-height: 0.38rem;
  color: #777;
  border-bottom: 1px solid #f7f7f7;
}
.rencentTitle::before {
  content: "";
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  vertical-align: middle;
  background: url(../assets/imgs/i-time.10d92a1.png) no-repeat;
  background-size: contain;
  margin-right: 0.03rem;
}
.Ul {
  width: 3.45rem;
  margin: 0 auto;
  overflow: hidden;
  max-height:3.57rem;
}
.Li {
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  line-height: 0.5rem;
  border-bottom: 1px solid #f7f7f7;
}
.Li .ii{
    width: .16rem;
    height: .16rem;
}
.clearLS {
  width: 3.45rem;
  margin: 0 auto;
  line-height: 0.38rem;
  color: #65cdff;
}
</style>