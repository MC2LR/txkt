<template>
  <div class="index">
    <!-- 公共头部 -->
    <public-search :myData="List" />
    <!-- 轮播图 -->
    <div class="index_banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in bannerPic" :key="index">
            <router-link :to="{path:item.path}">
              <img :src="item.src" />
            </router-link>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 好课好评 -->
    <index-region />
    <!-- 中间的视频 -->
    <index-vedio :vediO="vedioData" />
    <!-- 本周好课 -->
    <index-weekCourese :weekData='weekCoureseData'/>
    <!-- 精选公开课 -->
    <index-selet-courese
      :coureseData="Courese"
      :courese_level="Courese_level"
      @coureseSort="sortIndex"
      @coureseLevel="levelIndex"
      :finallyVedio="finallyData"
    />
    <!-- 查看全部课程 -->
    <index-lookall/>
    <!-- 热门培训 -->
    <index-hotTraining :hotData='hotTrainingData' @hotEvent='Link' :finaLinkData='finallyLinkData'/>
    <!-- <div style="height:200px;overflow:auto" @scroll.passive="getScroll($event)">
        <div style="height:500px;" ></div>
    </div> -->
  </div>
</template>
<script>

import Search from "../commons/search";//公共搜索框
import Vedio from "../components/MRL/vedio";//中间视频组件
import Region from "../components/MRL/region";//好课好评
import Lookallcourese from "../components/MRL/lookAll";//查看全部
import hotTraining from "../components/MRL/hotTraining";//热门培训
import WeekCourese from "../components/MRL/weekGoodCourese";//本周好课
import SelectCourese from "../components/MRL/selectCourese";//精选公开课
import Swiper from "swiper";

export default {
  name: "index",
  data() {
    return {
      // 模拟导航
      bannerPic: [
        {
          src:
            "http://p.qpic.cn/qqconadmin/0/e1eca7ab10a54b0bb6adba0b856b3690/0",
          path: "/index"
        },
        {
          src: "//p.qpic.cn/qqconadmin/0/f13916d29c3d485785b117809a930e53/0",
          path: "/index"
        },
        {
          src: "//p.qpic.cn/qqconadmin/0/0bc1b06873274a43a8253e52392eed1a/0",
          path: "/index"
        },
        {
          src: "//p.qpic.cn/qqconadmin/0/a1a23c0f8c5d4c349fc4ba04ded426bb/0",
          path: "/index"
        },
        {
          src: "//p.qpic.cn/qqconadmin/0/ad097d63c6d44f089914c8820faa8f36/0",
          path: "/index"
        },
        {
          src: "//p.qpic.cn/qqconadmin/0/ee1fabf89e374c7593485370930187af/0",
          path: "/index"
        },
        {
          src: "//p.qpic.cn/qqconadmin/0/af3439e206824820a49660efe073be21/0",
          path: "/index"
        },
        {
          src: "//p.qpic.cn/qqconadmin/0/ad097d63c6d44f089914c8820faa8f36/0",
          path: "/index"
        }
      ],
      //   热门搜索
      List: [
        {
          name: "前端开发"
        },
        {
          name: "ps"
        },
        {
          name: "PPT"
        },
        {
          name: "英语"
        },
        {
          name: "雅思"
        },
        {
          name: "公务员"
        },
        {
          name: "设计"
        },
        {
          name: "物理化学"
        }
      ],
      //   视频模拟数据
      vedioData: [
        {
          src:
            "http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBsSud06XlZnJACsTWd7OSA5phIFPRTNibFBeuT8jRjy00Jb5ticSEKYUnpUYdBCicH2U/356",
          title:
            "ES6之掌握数组的技巧方法方法付付付付或付或或付或付或付或付或付或付或付或付或付或",
          sort: "JS",
          time: "20:00",
          path: "/index"
        },
        {
          src:
            "http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLD6dTfR9qKJicWOB6AYWFX7Q3pRVD6a9VnkQb8H7jf45lWNIHawSLvxZ8AFN8jmUvJ4/356",
          title:
            "vue生命周期，组件化方法付付付付或付或或付或付或付或付或付或付或付或付或付或",
          sort: "3yteam",
          time: "20:00",
          path: "/index"
        },
        {
          src:
            "http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLB3HOrydHBvlhkOsogbPwdG8C6JgeI3CXFJ2euncFkWaUicfUeZTD5wDHCV5pqtTxpw/356",
          title:
            "vue组件化开发方法方法付付付付或付或或付或付或付或付或付或付或付或付或付或",
          sort: "CC",
          time: "20:00",
          path: "/index"
        }
      ],
      Courese: [
        { title: "不限" },
        { title: "HTML/CSS" },
        { title: "JavaScript" },
        { title: "jQuery" },
        { title: "HTML5" },
        { title: "CSS3" },
        { title: "Vue.js" },
        { title: "Bootstrap" },
        { title: "Web全栈开发" }
      ],
      Courese_level: [{ title: "不限" }, { title: "基础" }, { title: "进阶" }],
      commpnData: [],
      finallyData: [],
      weekCoureseData:[],
      hotTrainingData:[],
      hotLinkData:[],//这是保存请求的数据
      finallyLinkData:[],//热门培训的数据
      coureseSortIndex: 0,//精选公开课中课程的下标
      coureseLevelIndex: 0,//精选公开课中水平的下标
      hotLinkIndex:0//热门培训的下标
    };
  },
  components: {
    "public-search": Search,
    "index-vedio": Vedio,
    "index-selet-courese": SelectCourese,
    "index-region": Region,
    "index-weekCourese":WeekCourese,
    "index-lookall":Lookallcourese,
    "index-hotTraining":hotTraining
  },
  mounted: function() {
    

    //   console.log(this.obj);
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: {
        delay: 2000
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  },
  created() {
    fetch("http://localhost:3000/vedioSort")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.commpnData = data;
        if(this.coureseSortIndex == 0 && this.coureseLevelIndex == 0){
            this.finallyData = this.commpnData[0].Courese[0].coureseAll;
        }
      });
      fetch("http://localhost:3000/weekCourese")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.weekCoureseData = data;
      });

       fetch("http://localhost:3000/hotTrainingDtat")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.hotTrainingData = data;
        this.hotLinkData = data;
    
        if(this.hotLinkIndex == 0){
            this.finallyLinkData = this.hotLinkData[0].title;
        }
        
      });
       fetch("http://localhost:8001/api/course/home/")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
      });


  },
  methods: {
//  getScroll(event) {
//       // 滚动条距离底部的距离scrollBottom
//       let scrollBottom =event.target.scrollTop;
//       if(scrollBottom >= 200){
//           this.ff();
//       }
//     },
      //热门培训中根据子组件传过来的index进行筛选，筛选出符合条件的数据进行显示
    Link(val){
       this.hotLinkIndex = val;
       this.finallyLinkData = this.hotLinkData[this.hotLinkIndex].title;
       
    },
    //根据精选公开课中课程传过来的index进行筛选，筛选出符合条件的数据进行显示
    sortIndex(val) {
      this.coureseSortIndex = val;
      for (let i = 0; i < 9; i++) {
        if (this.coureseSortIndex == i) {
          for (let j = 0; j < 3; j++) {
            if (this.coureseLevelIndex == j) {
              if (j == 0) {
                this.finallyData = this.commpnData[i].Courese[j].coureseAll;
              }
            }
          }
        }
      }
    },
    //根据精选公开课中水平的index进行筛选，选择出符合条件的数据进行显示
    levelIndex(val) {
      this.coureseLevelIndex = val;
      for (let i = 0; i < 9; i++) {
        if (this.coureseSortIndex == i) {
          for (let j = 0; j < 3; j++) {
            if (this.coureseLevelIndex == j) {
               if (j == 0) {
                this.finallyData = this.commpnData[i].Courese[j].coureseAll;
              }
              if (j == 1) {
                this.finallyData = this.commpnData[i].Courese[j].coureseBasis;
              }
              if (j == 2) {
                this.finallyData = this.commpnData[i].Courese[j].coureseAdvance;
              }
              
            }
          }
        }
      }
    },
  }
};
</script>

<style scoped>
@import "../assets/css/swiper.min.css";
.index {
  width: 100%;
  height: calc(100% - 45px);
}
.index_banner {
  width: 100%;
  height: 1.43rem;
  margin-top: 0.53rem;
}
.index_banner img {
  width: 100%;
  height: 1.43rem;
}
/* .index_banner .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
    margin: -22px 4px;
} */
</style>