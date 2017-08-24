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
import customName from './export-default';
customName(); // 'foo'
```
