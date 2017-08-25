# 平时记录的笔记
## 让图片循环旋转
```
.img{
position: absolute;
animation: circle 8s linear infinite;
}  

@keyfarms circle {
form {
 transform: rotate(360deg);
 }
to{
 transform: rotate(0deg);
 ```
## css动画效果
```
/*0.3s完成*/
transition: all 0.3s; 
/*动画效果*/
.name:hover {
  box-shadow: 0 8px 16px 0 rgba(7, 17, 27, .2);
}
```
## input透明无边框,输入文本时无边框
```
border:0px;
background-color:transparent
```
## export default
上面代码是一个模块文件export-default.js，它的默认输出是一个函数。

其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。
```
// export-default.js
export default function () {
  console.log('foo');
}

// import-default.js
//不需要写出函数名字,直接引入
import customName from './export-default';
customName(); // 'foo'
```
## VUE路由
### 配置四步：  
1、定义组件  
2、定义路由策略  
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];  
3、创建路由实例  
const router = new VueRouter({
      routes
    });  
 4、挂载  
 const app = new Vue({
      router
    }).$mount('#app');
## 在组件中v-for
不加index会报错,不加v-bind:key也会报错,但是不加key在浏览器中没有问题 ,不加index也没有问题
````
<ul>
      <!-- 第一种写法 -->
      <li v-for="(item,index) in items" :key="index">{{item.title}}</li>
      <!-- 第二种写法 -->
      <template v-for="(item,index) in items">
        <li :key="index">{{item.title}}</li>
        <li :key="index">------------------</li>
      </template>
    </ul>
```
