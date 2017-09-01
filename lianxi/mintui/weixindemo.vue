<template>
  <div class="hello">
    <!-- <mt-switch v-model="swithValue">加载上次</mt-switch> -->
    <div class="page-switch">
      <div class="page-title">Switch</div>
      <div class="page-part page-switch-padding">
        <mt-switch v-model="swithValue" @change="swithChange">
          <label v-text="swith"></label>
        </mt-switch>
      </div>
    </div>

    <hr>
    <!-- 选择时间 -->
    <div class="page-datetime">
      <div class="page-datetime-wrapper">
        <mt-button @click.native="open('picker')" size="large">点击弹出{{msg}}</mt-button>
        <p>{{msg}}</p>
      </div class="page-datetime-wrapper">
      <mt-datetime-picker ref="picker" type="datetime" v-model="value" @confirm="handleChange"></mt-datetime-picker>
    </div>
    <!-- 上传附件 -->
    <hr>
    <div class="page-actionsheet">
      <div class="page-actionsheet-wrapper">
        <mt-button @click.native="sheetVisible = true" size="large"> 上传附件</mt-button>
      </div>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    </div>
    <!-- 选择位置 -->
    <div class="page-actionsheet">
      <div class="page-actionsheet-wrapper">
        <mt-button @click.native="sheetVisible2 = true" size="large"> 上传附件</mt-button>
      </div>
      <mt-actionsheet :actions="actions2" v-model="sheetVisible2"></mt-actionsheet>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      //swith部分数据
      swithValue: false,
      swith: '加载上次',
      //日期选择数据
      value: null,
      visible: false,
      //点击弹出数据
      sheetVisible: false,
      sheetVisible2: false,
      actions: [],
      actions2: [],
      //日期选择默认日期
      msg: new Date().toLocaleString().slice(0, length - 3),
    }
  },
  methods: {
    //swith部分
    swithChange(event) {
      if (event == true) {
        this.swith = '取消加载'
      } else if (event == false) {
        this.swith = '加载上次'
      }
      console.log(event)
    },
    // 时间选择器部分
    open() {
      this.$refs.picker.open();

    },
    handleChange(value) {
      this.msg = value.toLocaleString().slice(0, length - 3);
    },
    //点击弹出部分
    takePhoto() {
      console.log('taking photo');
    },

    openAlbum() {
      console.log('opening album');
    }

  },
  //点击弹出部分二级菜单功能
  mounted() {
    this.actions = [{
      name: '拍照',
      method: this.takePhoto
    }, {
      name: '从相册中选择',
      method: this.openAlbum
    }];

    this.actions2 = [{
      name: '会议室',
      method: this.takePhoto
    }, {
      name: '大厅',
      method: this.openAlbum
    }];
  }
}
</script>

