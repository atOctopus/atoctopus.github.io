---
layout: post
title: "一名应届生的面试题"
date: 2014-03-19 00:57:38 -0700
comments: true
categories: 生活
---

最近应聘了一家电子商务B2B公司，公司效率很高。坐下聊两句后就递给一张试卷要求2小时做完。面试结束后重新思考发现错误挺多的，需要学习的地方还有很多，记录于此引以为戒。

<!--more-->

------

## HTML部分

###1.使用HTML完成以下表格

![HTML第一题](http://www.atoctopus.com/images/post/interview/html01.png)

```python
<form method="post" active="#">
  <table cellspacing="0" cellpadding="5" border="1" summary="一个员工意见提交表">
    <caption>意见提交表</caption>
    <tr>
      <th scope="row">姓名</th>
      <td>
        <input type="text" name="name">
      </td>
    </tr>
    <tr>
      <th scope="row">性别</th>
      <td>
        <input id="male" type="radio" value="male" name="sex" checked="checked">
        <label for="male">男</label>
        <input id="female" type="radio" value="female" name="sex">
        <label for="female">女</label>
      </td>
    </tr>
    <tr>
      <th scope="row">类型</th>
      <td>
        <input id="checkbox1" type="checkbox" value="checkbox1" name="checkboxAll" checked="checked">
        <label for="checkbox1">类型一</label>
        <input id="checkbox2" type="checkbox" value="checkbox2" name="checkboxAll">
        <label for="checkbox2">类型二</label>
        <input id="checkbox3" type="checkbox" value="checkbox3" name="checkboxAll">
        <label for="checkbox3">类型三</label>
    </tr>
    <tr>
      <th scope="row">部门</th>
      <td>
        <select>
          <option value="ue">UE部</option>
          <option value="ui" selected="selected">UI部</option>
          <option value="ue">UD部</option>
        </select>
      </td>
    </tr>
    <tr>
      <th scope="row">上传文件</th>
      <td>
        <input type="file">
      </td>
    </tr>
    <tr>
      <th scope="row">内容</th>
      <td>
        <textarea rows="5" cols="22"></textarea>
      </td>
    </tr>
    <tr>
      <td colspan="2" class="submit">
        <input type="submit" value="提交">
        <input type="reset" value="清除">
      </td>
    </tr>
  </table>
</form>
```

在线预览：[点击这里](http://codepen.io/anon/pen/JnHwC/)

<br />

###2.依旧是使用HTML完成以下图片

![HTML第二题](http://www.atoctopus.com/images/post/interview/html02.png)

```python
<table cellspacing="0" cellpadding="10" border="1">
  <tr>
    <th colspan="4" scope="col">联系方式</th>
  </tr>
  <tr>
    <th rowspan="2" scope="row">test</th>
    <td>test</td>
    <td>test</td>
    <td>test</td>
  </tr>
  <tr>
    <td>test</td>
    <td>test</td>
    <td>test</td>
  </tr>
  <tr>
    <td>test</td>
    <td>test</td>
    <td>test</td>
    <td>test</td>
  <tr>
    <th colspan="3" scope="row">test</th>
    <td>test</ted>
  </tr>
</table>
```
在线预览：[点击这里](http://codepen.io/anon/pen/ClmyB/)

<br />

------

## CSS部分

###1.三个div并排，左右div为固宽200px，中间自适应。

![CSS第一题](http://www.atoctopus.com/images/post/interview/css01.png)
两中方法实现：浮动和定位
```python
<div id="box">
  <div class="left">...</div>
  <div class="right">...</div>
  <div class="center">...</div>
</div>

//方法一：浮动
#box {
  border: 1px solid #000;
  overflow: hidden;
}
.left {
  float: left;
  width: 200px;
  background: red;
}
.right {
  float: right;
  width: 200px;
  background: yellow;
}
.center {
  margin: 0 200px;
  background: blue;
}

//方法二：定位
#box {
  position: relative;
  border: 1px solid #000;
  overflow: hidden;
}
.left {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  background: red;
}
.right {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  background: yellow;
}
.center {
  margin: 0 200px;
  background: blue;
}
```

在线预览：[方法一点击这里](http://codepen.io/anon/pen/geixm/) [方法二点击这里](http://codepen.io/anon/pen/tAleE/)
<br />

###2.CSS的选择器优先级

`!important > 内联 > id > class > tag > *`

<br />

###3.div高初始200px，当内容超过200px时撑开容器

```python
.div-test {
    min-height: 200px; /* 主流浏览器 */
    height: auto !important; /* Firefox浏览器 */
    height: 200px; /* IE浏览器 */
}
```

<br />

###4.让div层在flash和select之上

<p>因为flash和select是以窗口形式显示，窗口形式要优于非窗口形式</p>

```python
/* 让div在flash之上 */
<object>
    /* 将wmode属性默认值window改为"opaque"或"transparent" */
    <embed src="/example.swf" wmode="transparent"></embed>
</object>

/* div在select之上 */
// 通过iframe覆盖select，div覆盖iframe的方式实现
// HTML
<select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
</select>
<div class="top">
    <iframe></iframe>
</div>

// CSS
.top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    z-index: 999px;
}
.top iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    z-index: -1;
}
```

<br />

###5.清除浮动的方法

<p>一般需要使用到浮动清除有两种情况：子元素浮动和上级元素浮动</p>

<p>清除子元素浮动</p>

```python
/* clearfix方法 */
/* 精简版 */
.clearfix:before, .clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  overflow: hidden;
}
.clearfix {
  zoom: 1;
}

/* 经典版 */
.clearfix:after {
  visibility: hidden;
  display: block;
  content: "";
  clear: both;
  height: 0;
}
// IE6
* html .clearfix {
  zoom: 1;
}
// IE7
*:first-child+html .clearfix {
  zoom: 1;
}

/* overflow方法 */
/* 方法一 */
.test1 {
  overflow: auto;
  zoom: 1;
}

/* 方法二 */
.test2 {
  overflow: hidden;
  zoom: 1;
}

/* 空标签方法 */
<br style="clear: both;">  // 插入到浮动元素最后，不推荐！添加了不必要的代码

/* 父元素浮动方法 */
// 但这带来的影响是下个元素会受这个元素影响，导致页面需要大量的浮动

/* inline-block方法 */
// 给父元素添加`display: inline-block`来清除浮动
```

<p>清除上级元素浮动</p>

`
使用float 或者 clear
`

<br />

###6.px、em和百分比之间的区别

*  px是绝对度量单位，相对于显示器分辨率
*  em是相对度量单位，相对于文本字号。例如浏览器默认字体16px，那么1em等于16px，14px等于0.875em
*  百分比也是相对度量单位是相对于主体

<br />

------

## JavaScript jQuery部分

###1.写一个原型unique方法，要求将数组中重复的项去掉

```python
function Array() {}
/* 方法一 */
Array.prototype.unique1(data) {
    var n = []; // 临时数组
    for(var i=0; i<data.length; i++) {
        if(n.indexOf(data[i]) == -1) { // 循环数组，通过能否获得值的下标来判断数组是否存在
            n.push(data[i]);
        }
    }
    return n;
}
/* 调用原型方法 */
var result1 = new Array();
result1.unique1([1,5,5,26,5,8,8,5,90,16]); // 返回[1, 5, 26, 8, 90, 16]

/* 方法二 */
Array.prototype.unique2(data) {
    var n = {}; // 临时hash
    var r = []; // 临时数组
    for(var i=0; i<data.length; i++) {
        if(!n[data[i]]) { // 判断hash中是否存在这个项
            n[data[i]] = true; // 创建一个新项
            r.push(data[i]); // 将值存入数组中
        }
    }
    return r;
}
/* 调用原型方法 */
var result2 = new Array();
result2.unique2([1,5,5,26,5,8,8,5,90,16]); // 返回[1, 5, 26, 8, 90, 16]

/* 方法三 */
Array.prototype.unique3 = function(data) {
    var n = [data[0]];
    for(var i=1; i<data.length; i++) {
        if(data.indexOf(data[i] == i) { // 通过判断数组值的下标与i的值是否相等，实现去掉重复
            n.push(data[i]);
        }
    }
    return n;
} 
/* 调用原型方法 */
var result3 = new Array();
result3.unique3([1,5,5,26,5,8,8,5,90,16]); // 返回[1, 5, 26, 8, 90, 16]
```

<br />

###2.jQuery的经典写法有什么好处

```python
(function($) {
    $(function() {
        // 代码
    });
})(jQuery);
```
这是函数表达式的一种写法，不需要函数名并且立即调用此函数

<br />

###3.如何解决多人开发函数命名重命的问题
>*  开发前规范命名规则，根据不同的开发人员使用特殊的前缀，如：阿林`funciton ALifunction() {}`
>*  将每个开发人员的函数封装到类中，调用的时候就调用类的函数，即使函数重名只要类名不重复

<br />

###4.CSS、JS混合题，让元素绝对居中

```python

/* HTML */
<div id="box"></div>

/* CSS */
#box {
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: #07d;
}

/* JS */
window.onload = function() {
  var oBox = document.getElementById("box"); // 获得元素
  var oWidth = document.body.scrollWidth || document.documentElement.scrollWidth; // 获得元素的宽
  var oHeight = document.body.scrollHeight || document.documentElement.scrollHeight; // 获得元素的高
  oBox.style.left = (oWidth - oBox.offsetWidth) / 2 + "px";
  oBox.style.top = (oHeight - oBox.offsetHeight) / 2 + "px";
}
```

在线预览：[点击这里](http://codepen.io/anon/pen/tDHJI/)

<br />

###5.使用Ajax上传一个文件

```python
/* JS方式 */
function Ajax() {
  var XHR = null;
  if(window.ActiveXObject) { /* IE5 6是以ActiveObject的方式引入XMLHttpRequest对象的 */
    XHR = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else if(window.XMLHttpRequest) { // 除IE5 6以外的浏览器
    XHR = new XMLHttpRequest(); /* XMLHttpRequest是window的子对象，实例化一个XMLHttpRequest对象 */
  }
  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
      alert("Done!");
    }
  }
  XML.open("POST", "test.txt", true);
  XML.send();
}

/* jQuery方法 */


```

<br />

###6.JS中如何对一个对象进行深度clone

```python
// 浅clone
var obj = {
    a : 10
};
function shallowCopy(obj) {
    var newObj = {};
    for(var attr in obj) {
        newObj[attr] = obj[attr];
    }
    return newObj;
}
var obj2 = shallowCopy(obj);
obj2.a = 20;
alert(obj); // obj2.a=20没影响到obj.a中的值，返回10

// 深clone
var obj = {
    a : {
        b : 10
    }
};
function deepCopy(obj) {
    if(typeof obj != "object") {
        return obj;
    }
    var newObj = {};
    for(var attr in obj) {
        newObj[attr] = deepCopy(obj[attr]);
    }
    return newObj;
}
var obj2 = deepCopy(obj);
obj2.a.b = 20;
alert(obj.a.b); // 10
```

<br />

------

## 其他

###1.前端应该使用MVC实现吗？说说你的看法和实现的思想



<br />

###2.你如何让结构样式分离，你的哪些优化方法，如何解决兼容性问题？

结构样式分离：

1.  JS代码只出现在.js文件中
2.  在HTML代码中不出现onload、onclick，所有行为都使用绑定的方式来实现
3.  只关注行为，不能在JS中定义CSS样式

优化方法：

页面级：
出门右转《高性能网站建设指南》

代码级：
1.  避免全局变量
2.  减少DOM操作
3.  减少重绘页面

解决兼容性：
```python
// 过滤
// 条件注释法
<!--[if lt IE 9]>
    <link rel="stylesheet" href="test.css"> 
<![endif]-->

// Hack方法
// 子选择器 IE6以更低版本不支持
html>body {
    font-size: 12px;
}

// 属性选择器 IE6以更低版本不支持
div[id="box"] {
    background-color: #fff;
}

// 星号html IE6及更低版本支持
* html p { // IE6
    color: blue;
}
*+html p { // IE7
    color: yellow;
}

// !important
.test {
    background-color: yellow !important; // IE6及更低版本不支持!important，因此第二条生效
    background-color: red;
}

// 下划线
.test {
    background-color: yellow;
    _background-color: red; // IE6及更低版本忽略下划线，因此覆盖第一条
}

// 属性星号
.test {
    *color: red; // IE6、7都会生效
}
```
<br />

###3.你对HTML5和CSS3的了解

HTML5新增：

1.  语义化标签：`<header>，<nav>，<section>，<aside>，<footer>，<article>，<hgroup>，<figure>，<time>`等等
2.  媒体播放`<video>，<audio>`
3.  二维绘图`<canvas>`
4.  表单属性和类型`required`，`placeholder`，`autofocus`，`autocomplete`
5.  API`拖放，Web存储，应用缓存，地理定位，Web Worker，Web Socket，SVG`

CSS3新增：

1.  边框`border-radius`，`box-shadow`
2.  背景`background-size`，`background-origin`
3.  文本效果`text-shadow`，`word-wrap`
4.  字体`@font-face`
5.  2D，3D转换`tansfrom`
6.  过渡`tansition`
7.  动画`@keyframes`
8.  多列`column-count`

<br />

###4.列出你知道的CSS框架和JS框架，并说明其有缺点

<p>CSS框架</p>

> * `jQuery UI`
> * `BootStrap`

<p>JS框架</p>

> * `Prototype`
*  优：对JS的内置对象（例如String对象、Array对象等）做了大量的扩展。
*  缺：成型年代早，整体上面向对象的编程思想不到位。
> * `Dojo` 
*  优：提供了其他JS库所没有的功能。例如离线存储API、生成图标的组件、基于SVG/VML的矢量图形库和Comet支持等。非常适合企业级应用的JS库。
*  缺：学习曲线陡，文档不齐全，API不稳定。
> * `YUI` 
*  优：YUI封装了一系列比较丰富的功能，例如DOM操作和Ajax应用等，同时还包括了几个核心的CSS文件，文档极其完备，代码编写非常规范。
> * `Ext JS` 
*  优：YUI的一个扩展，主要用于前端界面，Ext可以用来开发富有华丽外观的富客户端应用。
*  缺：Ext侧重于界面，本身比较臃肿，需要付费。
> * `MooTools` 
*  优：轻量、简洁、模块化和面向对象。语法与prototype相差无几，提供了强大的功能、更好的扩展性和兼容性。模块化思想优秀，语法简洁直观，文档完善。
> * `jQuery` 
*  轻量级
*  强大的DOM选择器
*  出色的DOM操作的封装
*  可靠的事件处理机制
*  完善的Ajax
*  不污染顶级变量
*  出色的浏览器兼容
*  链式操作方式
*  隐式迭代
*  行为层与结构层分离
*  丰富的插件支持
*  完善的文档
*  开源

<br />

尾巴：面试题中的答案存在错误的地方，我会在往后的日子里加以完善。
