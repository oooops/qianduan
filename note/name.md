# 取名规范

## 语义化

针对每个布局请进行语义化的规范

<!-- 导航栏 -->
<nav></nav>

<!-- 文字用p  -->
<p>nihao</p>

<!-- 底部 -->
<footer></footer>
class -

在写HTML的class时，使用"-"分割名字

<div class="nav-box"></div>
id 驼峰式

在写HTML的id时，使用驼峰式命名

<div id="navBox"></div>
变量 驼峰式

在JavaScript中，变量使用驼峰命名，比如

var = navLength;
变量对象 $

在JavaScript中，变量对象使用"$"开头

var $el = $('html');
私有变量 _

在JavaScript中，函数中的私有变量对象使用下划线开头

var _this = $(this).val();
代码缩进

全部都使用2个空格作为缩进标准，每个编辑器不一样，但是空格都是一样的，所以请自行设置好

代码整理

每个编辑器都不一样，蛮出名的插件叫"Beautify"这个插件基本上蛮多编辑器都支持的都可以试试，大家在提交代码的时候都整理代码，这样方便别人打开浏览

注释

在HTML每个模块应写好注释，CSS也将按HTML的模块分注释，JavaScript也是一样，针对JavaScript如果功能复杂或者变量不在上下文请使用长条注释好，方便阅读

<!-- nav -->

<div class="nav-box"></div>

<!-- nav end -->
/* nav */

.nav-box{
  color: #fff;
}

/* nav end*/
//nav

console.log('ok')

//nav end
