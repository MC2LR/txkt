<template>
  <div class="searchDetail">
    <searchDetail-public-search :myData="List" />
    <search-condition :tepmData='tepmData' :toShowConditionData="conditionData" :conditionData="searchCondition" @CONDITION="toEvent" />
  </div>
</template>

<script>
import publicSearch from "../commons/search";
import searchCondition from "../components/MRL/searchCondition";
export default {
  name: "searchDetail",
  components: {
    "searchDetail-public-search": publicSearch,
    "search-condition": searchCondition
  },
  data() {
    return {
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
      searchCondition: [],
      conditionData: [],
      tepmData:[]
    };
  },
  methods: {
    toEvent(val) {
        //根据子组件穿过来的下标来判断将要返回那些值，1，2，3
      if (val == 0) {
        this.conditionData = this.searchCondition[val].ComprehensiveSorting;
      }
      if (val == 1) {
        this.conditionData = this.searchCondition[val].allSort;
      }
      if (val == 2) {
        this.conditionData = this.searchCondition[val].coureseStyle;
      }
    }
  },
  created() {
    fetch("http://localhost:3000/searchCondition")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.searchCondition = data;
        this.searchCondition = this.searchCondition[0].conditionTitle;
      });

      //临时用的数据
      fetch("http://localhost:3000/tepmt")
      .then(res => {
        return res.json();
      })
      .then(data => {
       this.tepmData = data;
      });
  }
};
</script>

<style scoped>
.searchDetail{
    width: 100%;
    height: 100%;
}
</style>