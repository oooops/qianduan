<template>
  <div class="page-loadmore">
    <p class="page-loadmore-desc">在列表底部, 按住 - 上拉 - 释放可以获取更多数据</p>
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore" :bottomPullText="bottomText">
        <ul class="page-loadmore-list">
          <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
        </ul>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>

      </mt-loadmore>
    </div>
  </div>
</template>

<style>
@import '../app.css';
* {
  font-size: 40px;
}

.page-loadmore .mint-spinner {
  display: inline-block;
  vertical-align: middle;
}

.page-loadmore-desc {
  text-align: center;
  color: #666;
  padding-bottom: 5px;
}

.page-loadmore-listitem {
  border-bottom: 1px solid #000;
}

.page-loadmore-listitem {
  height: 100px;
  line-height: 100px;
  text-align: center;
}

.page-loadmore-listitem:first-child {
  border-top: 1px solid #eee;
}

.page-loadmore-wrapper {
  overflow: scroll;
  background-color: #bbb;
}

.mint-loadmore-bottom span {
  display: inline-block;
  transition: .2s linear;
  vertical-align: middle;
}

.mint-loadmore-bottom span.is-rotate {
  transform: rotate(180deg);
}
</style>

<script>
import $ from 'jquery'
// import Vue from 'vue'
// import VueResource from 'vue-resource'
// Vue.use(VueResource);

var url = "http://www.easy-mock.com/mock/5990199fa1d30433d85fa4b6/care/list/info";
// var name;

export default {
  data() {
    return {
      list: [],
      allLoaded: false,
      bottomStatus: '',
      wrapperHeight: 0,
      translate: 0,
      moveTranslate: 0,
      bottomText: '上拉加载更多',
    };
  },

  methods: {
    handleBottomChange(status) {
      this.bottomStatus = status;
    },

    loadBottom() {
      self = this
      setTimeout(() => {

          $.get(url, function(data) {
            for (let index in data) {
              // name = (data[index].EventName)
              // console.log(name)
              self.list.push(data[index].EventName + data[index].EventTime)
            }
          })

        this.$refs.loadmore.onBottomLoaded();
      }, 300);
    }
  },

  created() {
    self = this
    $.get(url, function(data) {
      for (let index in data) {
        // name = (data[index].EventName)
        // console.log(name)
        self.list.push(data[index].EventName)
      }
    })
  },

  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
  }
};
</script>