<template>
  <div class="contition">
    <div class="conditionWraper">
      <!-- 导航 -->
      <div
        class="conditionItem"
        :class="{'navStyle':navId == index}"
        v-for="(item,index) in conditionData"
        :key="index"
        @click="conditionEvent(index)"
        :to="{path:'/index'}"
      >
        {{item.title}}
        <span class="iconfont" :class="icanRow[index]"></span>
      </div>
    </div>
    <!-- section是蒙版 -->
    <section :class="{'contentWraper':isMock}" v-if="Default">
      <!-- 综合排序 -->
      <ul class="contentItemOne" v-if="isShowOne">
        <!-- 综合排序的下拉列表 -->
        <li
          v-for="(item,index) in toShowConditionData"
          :class="{'ShowStyle':currentIndex == index}"
          @click="showEvent(item,index)"
          :key="index"
          class="oLi"
        >{{item.name}}</li>
      </ul>
      <!-- 全部分类 -->
      <ul class="contentItemTwo" v-if="isShoeTwo">
        <!-- 全部分类的一级列表 -->
        <li class="liOne">
          <div class="allTitle">
            <div class="allOne" @click="allEvent" :class="{'allOneStyle':allIndex == 10}">
              <span class="iconfont icon-quanbu2"></span>
              全部
            </div>
          </div>
          <div
            class="liOneTitle"
            v-for="(item,index) in toShowConditionData[0].sortTwoName"
            :key="index"
            :class="{'perLiStyle':allOneIndex == index}"
            @click="perLiEvent(item,index)"
          >
            <span class="iconfont" :class="icanfont[index]"></span>
            {{item.toName}}
          </div>
        </li>
        <!-- 全部分类的二级列表 -->
        <li class="liTwo">
          <div class="allTwo" @click="allTwochangeId" :class="{'allTwoStyle':allTwoIndex == 0}">全部</div>
          <div
            class="liTwoTitle"
            @click="alltwoEvent(item,index)"
            :class="{'twoItemStyle':twoIndex == index}"
            v-for="(item,index) in alltwoData"
            :key="index"
          >{{item.Name}}</div>
        </li>
        <!-- 全部分类的三级列表 -->
        <li class="liThree">
          <div
            class="allThree"
            @click="changeThreeStyle"
            :class="{'allThreeStyle':allThreeIndex == 0}"
          >全部</div>
          <div
            class="liThreeTitle"
            :class="{'threeSthle':threeIndex == index}"
            @click="threeStyle(item,index)"
            v-for="(item,index) in allThreeData"
            :key="index"
          >{{item.finaLink}}</div>
        </li>
      </ul>
      <!-- 筛选 -->
      <ul class="contentItemThree" v-if="isShowThree">
        <li>
          <div class="courese">
            <p>课程类型</p>
            <div
              class="coureseSelect"
              v-for="(item,index) in toShowConditionData[0].styleItem"
              :key="index"
              @click="coureseStyleEvent(index)"
              :class="{'styEvent':courStyIndex == index}"
            >{{item.styleCondition}}</div>
          </div>
          <div class="priceDuring">
            <p>价格区间</p>
            <div
              class="perPrice"
              @click="priceEvent(index)"
              :class="{'priceStyle':isPriceIndex == index}"
              v-for="(item,index) in toShowConditionData[1].styleItem"
              :key="index"
            >{{item.styleCondition}}</div>
          </div>
          <div class="coureseContent" v-if="contentIf">
            <p>课程内容包含（可多选）</p>
            <div
              class="coureseType"
              v-for="(item,index) in toShowConditionData[2].styleItem"
              :key="index"
              @click="contentEvent(index)"
              :class="{'contentStyle':item.bTn}"
            >{{item.styleCondition}}</div>
          </div>
          <div class="selectBtn">
            <div class="selectClear" @click="clearSelectAll" :class="{'clearStyle':isClear}">清除筛选</div>
            <div class="ok" @click="OkEvent">确定</div>
          </div>
        </li>
      </ul>
    </section>
    <div class="searchCoureseList">
      <ul class="listWraper">
        <router-link class="Li" :to="{path:'/index'}" v-for="(item,index) in tepmData" :key="index">
          <img :src="item.src" alt />
          <div class="newsWraper">
            <p>{{item.title}}</p>
            <span>{{item.feeStyle}}</span>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //   导航数据
    conditionData: Array,
    //  导航列表数据
    toShowConditionData: Array,
    //temp临时数据
    tepmData: Array
  },
  data() {
    return {
      contentIf: true,
      courStyIndex: 5,
      isPriceIndex: 8,
      navId: 20,
      isClear: false,
      isMock: false,
      Default: true,
      isShow: false,
      isShowOne: false,
      isShoeTwo: false,
      isShowThree: false,
      currentIndex: 0,
      allIndex: 10,
      allOneIndex: 20,
      allTwoIndex: 0,
      allThreeIndex: 0,
      alltwoData: [],
      allThreeData: [],
      twoIndex: 20,
      threeIndex: 20,
      sortTitle: [
        "·互联网",
        "·创作",
        "·营销",
        "·考证",
        "·考研",
        "·生活",
        "·留学"
      ],
      icanRow: [
        "icon-jiantou-xia",
        "icon-jiantou-xia",
        "icon-jiantou-xia",
        "icon-jiantou-xia"
      ],
      icanChangeRow: [
        "icon-icon_arrow_top",
        "icon-icon_arrow_top",
        "icon-icon_arrow_top",
        "icon-icon_arrow_top"
      ],
      icanfont: [
        "icon-hulianwangIT",
        "icon-sheji",
        "icon-dianshang",
        "icon-gerenzhiyeguihua",
        "icon-maozi",
        "icon-qunfengxingquaihao",
        "icon-feiji"
      ],
      //存放列表的数据,后端数据没过来之前先从父组件中取值，后端来值了用fetch在本页面取值
      listContent: []
    };
  },
  methods: {
    //   发送数据fetch请求
    OkEvent() {
      this.isShowThree = false;
      this.isMock = false;
    },
    //   nav事件
    conditionEvent(index) {
      console.log(this.toShowConditionData);
      this.navId = index;
      this.Default = true;
      this.$emit("CONDITION", index);
      this.isMock = true;
      switch (index) {
        case 0:
          // 箭头判断
          if (this.icanRow[index] == this.icanRow[3]) {
            this.icanRow[index] = this.icanChangeRow[3];
            if (this.icanRow[index + 1] == this.icanChangeRow[3]) {
              this.icanRow[index + 1] = this.icanRow[3];
            }
            if (this.icanRow[index + 2] == this.icanChangeRow[3]) {
              this.icanRow[index + 2] = this.icanRow[3];
            }
          } else {
            this.icanRow[index] = this.icanRow[3];
          }
          this.isShoeTwo = false;
          this.isShowThree = false;
          if (this.isShowOne) {
            this.isShowOne = false;
            this.isMock = false;
          } else {
            this.isShowOne = true;
          }
          break;
        case 1:
          // 箭头判断
          if (this.icanRow[index] == this.icanRow[3]) {
            this.icanRow[index] = this.icanChangeRow[3];
            if (this.icanRow[index + 1] == this.icanChangeRow[3]) {
              this.icanRow[index + 1] = this.icanRow[3];
            }
            if (this.icanRow[index - 1] == this.icanChangeRow[3]) {
              this.icanRow[index - 1] = this.icanRow[3];
            }
          } else {
            this.icanRow[index] = this.icanRow[3];
          }
          this.isShowOne = false;
          this.isShowThree = false;
          if (this.isShoeTwo) {
            this.isShoeTwo = false;
            this.isMock = false;
          } else {
            this.isShoeTwo = true;
          }
          break;
        case 2:
          // 箭头判断
          if (this.icanRow[index] == this.icanRow[3]) {
            this.icanRow[index] = this.icanChangeRow[3];
            if (this.icanRow[index - 2] == this.icanChangeRow[3]) {
              this.icanRow[index - 2] = this.icanRow[3];
            }
            if (this.icanRow[index - 1] == this.icanChangeRow[3]) {
              this.icanRow[index - 1] = this.icanRow[3];
            }
          } else {
            this.icanRow[index] = this.icanRow[3];
          }
          this.isShowOne = false;
          this.isShoeTwo = false;
          if (this.isShowThree) {
            this.isShowThree = false;
            this.isMock = false;
          } else {
            this.isShowThree = true;
          }
          break;
      }
    },
    // 改变课程类型的选中样式
    coureseStyleEvent(index) {
      this.courStyIndex = index;
      this.isClear = true;
      switch (index) {
        case 0:
          this.contentIf = true;
          break;
        case 1:
          this.contentIf = true;
          break;
        case 2:
          this.contentIf = false;
          break;
      }
    },
    // 改变价格区间的选中样式
    priceEvent(index) {
      this.isPriceIndex = index;
      this.isClear = true;
    },
    // 多选选中状态
    contentEvent(index) {
      this.toShowConditionData[2].styleItem[index].bTn = !this
        .toShowConditionData[2].styleItem[index].bTn;
      this.isClear = true;
    },
    // 将选择的名字提到导航栏
    showEvent(item, index) {
      this.currentIndex = index;
      this.conditionData[0].title = this.toShowConditionData[index].name;
      this.isShowOne = false;
      this.isMock = false;
      this.navId = 20;
    },
    // 改变分类中的每一项样式
    perLiEvent(item, index) {
      this.conditionData[1].title = item.toName + this.sortTitle[index];
      this.allOneIndex = index;
      this.allIndex = 0;
      this.alltwoData = this.toShowConditionData[0].sortTwoName[
        index
      ].toNameItem;
    },
    // 点击全部时的样式
    allEvent() {
      this.allIndex = 10;
      this.allOneIndex = 20;
      console.log();
    },
    // nav二级列表事件
    alltwoEvent(item, index) {
      this.conditionData[1].title = item.Name;
      this.twoIndex = index;
      this.allTwoIndex = 30;
      this.allThreeData = this.alltwoData[index].threeNameItem;
    },
    // 清除三级菜单的所有选中状态
    clearSelectAll() {
      this.courStyIndex = 30;
      this.isPriceIndex = 30;
      this.isClear = false;
      // 清除多选的状态
      this.toShowConditionData[2].styleItem.forEach(element => {
        element.bTn = false;
      });
    },
    // 二级列表更换样式
    allTwochangeId() {
      this.allTwoIndex = 0;
      this.twoIndex = 20;
    },
    threeStyle(item, index) {
      this.threeIndex = index;
      this.allThreeIndex = 20;
      this.conditionData[1].title = item.finaLink;
      this.Default = false;
      this.navId = 20;
    },
    changeThreeStyle() {
      this.Default = false;
      this.allThreeIndex = 0;
      this.threeIndex = 20;
    }
  }
};
</script>   
<style scoped>
@import "../../assets/css/iconfont.css";
.contition {
  width: 100%;
  z-index: 100;
  height: 100%;
  position: fixed;
  top: 0.54rem;
}
.conditionWraper {
  border-bottom: 1px solid #f8f8f8;
  border-top: 1px solid #f8f8f8;
  display: flex;
}
.conditionItem {
  width: 33.33%;
  height: 0.39rem;
  text-align: center;
  line-height: 0.39rem;
  color: #333;
  font-size: 0.14rem;
}
.sortList {
  width: 100%;
  height: 1.88rem;
}
section {
  margin-top: 0.03rem;
  overflow: hidden;
}
.contentWraper {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
}
.contentItemOne {
  width: 100%;
  text-indent: 0.1rem;
  height: 1.88rem;
  background: #ffffff;
}
.oLi {
  width: 100%;
  height: 0.47rem;
  line-height: 0.47rem;
}
.contentItemTwo {
  width: 100%;
  height: 4.4rem;
  /* background: red; */
  display: flex;
}
.contentItemTwo .liOne {
  width: 0.8rem;
  height: 4.38rem;
  background: #f2f2f2;
  overflow: auto;
  margin-top: 0.01rem;
}
.contentItemTwo .liTwo {
  width: 1.2rem;
  height: 4.38rem;
  background: #f8f8f9;
  overflow: auto;
  margin-top: 1px;
}
.contentItemTwo .liThree {
  width: 1.75rem;
  height: 4.4rem;
  height: 4.38rem;
  margin-top: 1px;
  background: #ffffff;
  overflow: auto;
}
.contentItemThree {
  width: 100%;
  height: 4.54rem;
}
.contentItemThree li {
  width: 100%;
  height: 4.65rem;
  background: white;
  position: relative;
}
.courese {
  width: 3.5rem;
  height: 1rem;
  margin: 0 auto;
  overflow: hidden;
  border-bottom: 1px solid #f5f5f5;
}
.courese p {
  width: 100%;
  color: #777;
  font-size: 0.14rem;
  margin: 0.1rem auto;
}
.ShowStyle {
  color: #23b8ff;
  border-left: 3px solid #23b8ff;
}
.allTitle {
  width: 0.8rem;
  height: 0.5rem;
  text-align: center;
  font-size: 0.14rem;
}
.icon-quanbu2 {
  width: 0.2rem;
  height: 0.2rem;
  margin-top: 0.03rem;
  margin-right: 0.03rem;
}
.allOne {
  display: flex;
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-indent: 0.1rem;
}
.allTwo {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-indent: 0.1rem;
  text-align: center;
}
.allThree {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-indent: 0.1rem;
  text-align: center;
}
.allOneStyle {
  color: #23b8ff;
  font-size: 0.14rem;
  background: #e8e8e9;
}
.allTwoStyle {
  color: #23b8ff;
  background: white;
  font-size: 0.14rem;
}
.allThreeStyle {
  color: #23b8ff;
  font-size: 0.14rem;
  text-align: center;
}
.liOneTitle {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: left;
  margin-left: 0.03rem;
}
.perLiStyle {
  color: #23b8ff;
  font-size: 0.14rem;
  text-align: center;
  background: #e8e8e9;
}
.liTwoTitle {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
}
.liThreeTitle {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
}
.twoItemStyle {
  background: white;
  color: #23b8ff;
}
.threeSthle {
  color: #23b8ff;
}
.navStyle {
  color: #23b8ff;
}
.iconfont {
  display: inline-block;
  font-size: 0.12rem;
  /* color: red; */
  /* width: .1rem;
    height: .1rem; */
}
.coureseSelect {
  display: inline-block;
  border: 1px solid #dadada;
  padding: 0.06rem 0.25rem;
  margin-right: 0.13rem;
  border-radius: 0.25rem;
}
.priceDuring {
  width: 3.5rem;
  height: 1.4rem;
  margin: 0 auto;
  overflow: hidden;
  border-bottom: 1px solid #f5f5f5;
}
.priceDuring p {
  width: 100%;
  color: #777;
  font-size: 0.14rem;
  margin: 0.1rem auto;
}
.perPrice {
  display: inline-block;
  border: 1px solid #dadada;
  width: 1rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  margin-right: 0.14rem;
  border-radius: 0.25rem;
  margin-top: 0.1rem;
}
.coureseContent {
  width: 3.5rem;
  height: 1.4rem;
  margin: 0 auto;
  overflow: hidden;
  border-bottom: 1px solid #f5f5f5;
  margin-top: 0.13rem;
}
.coureseContent p {
  width: 100%;
  color: #777;
  font-size: 0.14rem;
  margin: 0.1rem auto;
}
.coureseType {
  display: inline-block;
  border: 1px solid #dadada;
  width: 1rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  margin-right: 0.14rem;
  border-radius: 0.25rem;
  margin-top: 0.1rem;
}
.selectBtn {
  width: 3.3rem;
  height: 0.66rem;
  display: flex;
  justify-content: space-between;
  /* margin: 0 auto; */
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0.2rem;
}
.selectClear {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #777;
  font-size: 0.14rem;
}
.selectBtn .ok {
  line-height: 0.39rem;
  text-align: center;
  color: #fff;
  font-size: 0.14rem;
  width: 1rem;
  height: 0.39rem;
  background: #04acf7;
  border-radius: 0.06rem;
}
.styEvent {
  color: #009eef;
  border: 1px solid #82d6ff;
  background: #e8f7ff;
}
.clearStyle {
  color: #23b8ff;
}
.priceStyle {
  color: #009eef;
  border: 1px solid #82d6ff;
  background: #e8f7ff;
}
.contentStyle {
  color: #009eef;
  border: 1px solid #82d6ff;
  background: #e8f7ff;
}
.searchCoureseList {
  width: 100%;
}
.listWraper {
  width: 100%;
  overflow: auto;
  height:5.7rem;
}
.listWraper .Li {
  width: 3.45rem;
  height: .8rem;
  display: flex;
  padding: .15rem;
  color: #000;
}
.listWraper .Li img {
  width: 1.4rem;
  height: 0.79rem;
}
.newsWraper {
  padding: 0 0.1rem;
}
.newsWraper p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.newsWraper span{
    color: #5fb41b;
    font-size: .16rem;
}
</style>