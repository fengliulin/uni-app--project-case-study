(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0050":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 推荐商品 */.hot_goods[data-v-749d6632]{background-color:#eee;overflow:hidden;margin-top:10px}.hot_goods .tit[data-v-749d6632]{height:50px;line-height:50px;color:#b50e03;text-align:center;letter-spacing:20px;background-color:#fff;margin:10px auto}.home uni-swiper[data-v-749d6632]{width:%?750?%;height:%?380?%}.home uni-swiper uni-swiper-item uni-image[data-v-749d6632]{height:100%;width:100%}.nav[data-v-749d6632]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.nav .nav_item[data-v-749d6632]{width:20%;text-align:center}.nav .nav_item uni-view[data-v-749d6632]{width:%?120?%;height:%?120?%;background-color:#b50e03;border-radius:%?60?%;margin:10px auto;line-height:%?120?%;color:#fff;font-size:%?50?%}.nav .nav_item .icon-tupian[data-v-749d6632]{font-size:%?40?%}.nav .nav_item uni-text[data-v-749d6632]{font-size:%?30?%}',""]),t.exports=i},"17a4":function(t,i,n){"use strict";var e=n("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("96cf");var a=e(n("1da1")),o=e(n("ac64")),c={components:{"goods-list":o.default},data:function(){return{swipers:[],goods:[],navs:[{icon:"iconfont icon-ziyuan",title:"黑马超市",paht:"/pages/goods/goods"},{icon:"iconfont icon-guanyuwomen",title:"联系我们",paht:"/pages/contact/contact"},{icon:"iconfont icon-tupian",title:"社区图片",paht:"/pages/pics/pics"},{icon:"iconfont icon-shipin",title:"学习视频",paht:"/pages/videos/videos"}]}},onLoad:function(){this.getSwipers(),this.getHotGoods()},methods:{getSwipers:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$myRuquest({url:"/api/getlunbo"});case 2:n=i.sent,console.log(n),t.swipers=n.data.message;case 5:case"end":return i.stop()}}),i)})))()},getHotGoods:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$myRuquest({url:"/api/getgoods?pageindex=1"});case 2:n=i.sent,console.log(n),t.goods=n.data.message;case 5:case"end":return i.stop()}}),i)})))()},navIiemClick:function(t){uni.navigateTo({url:t})},goGoodsDetail:function(t){console.log("触发"),uni.navigateTo({url:"/pages/good-detail/good-detail?id="+t})}}};i.default=c},2205:function(t,i,n){"use strict";n.r(i);var e=n("c5bc"),a=n("691e");for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("545c");var c,u=n("f0c5"),s=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"749d6632",null,!1,e["a"],c);i["default"]=s.exports},"545c":function(t,i,n){"use strict";var e=n("e641"),a=n.n(e);a.a},6778:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAIAAAAABMCaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGcGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDMgNzkuMTY0NTI3LCAyMDIwLzEwLzE1LTE3OjQ4OjMyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDEtMTBUMTU6MTMrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDEtMTBUMTU6MTMrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAxLTEwVDE1OjEzKzA4OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQzMDBmYmNlLTBlNTQtNDQwNS05NDZlLTM4YTZiZjM0MTk5NyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmY3OGFkNzMxLTMzZDItZGQ0Yi1iNzZiLTg2YWIxYWMwY2E3MCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjgxNGJlZWRkLWFkMzgtNDIwMy04YTdkLWE2ZDRjNDk1NmM2OSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODE0YmVlZGQtYWQzOC00MjAzLThhN2QtYTZkNGM0OTU2YzY5IiBzdEV2dDp3aGVuPSIyMDIxLTAxLTEwVDE1OjEzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDMwMGZiY2UtMGU1NC00NDA1LTk0NmUtMzhhNmJmMzQxOTk3IiBzdEV2dDp3aGVuPSIyMDIxLTAxLTEwVDE1OjEzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cmRmOkJhZz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSLkuKrkuroiIHBob3Rvc2hvcDpMYXllclRleHQ9IuS4quS6uiIvPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOlRleHRMYXllcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+BSrNpwAAA3RJREFUeJztmr2O00AUhc8iOiR6Woo8AC+wUiR6GlAeAIkiHTVp6Chc0oUeJS9gSoqUFG5X8vahdm8Ka8x1xs6PfWY2E51PUzjeia/n853xzGzuaoipPHvqG7gFJJGAJBKQRAKSSEASCUgiAUkkIIkEJJGAJBKQRAKSSEASCUgiAUkkIIkEJJGAJBKQRAKSSEASCUgiAUkkIIkEJJGAJBKQRAKSSEASCUgiAUkkIIkEIkl8BLbAY5xg0XkeJ8wf4AMAYAZ8Aj6HjLUFvgBv3cd74H3IcIgm8bc5fhc41kvgAXhwH78FDoc43fkv8N0dvwFeBw73yhwvgReBwyGOxK/m+CfwI0JIx32UKMElbk0abgAAH4FfoaNGpg5ZSmDmAq2B2nkEkAcLWpjWhYtiS8BLV8bgAqjc+YU7uQkTd2ckFklLrIysmTFYA3sjNwsQemMk7tOVeGCw9CqUpp0LdlOtxAgGg0i0BgHsBqrlps5suNqIskq9O5ddg7k5X3mVC9OvAaxIKWlvINCwG1DirivFvhltF1sOS29GyYlZaVklJLEC1t3ueTC3ODLYV0CGQ+ZABuSX52bRvc4sFYk5MO/et/8msW3rvchBFjcs+gaB46V9lu0tRRgWJ325AJZes3tz56TEui+dRwyRrbvcPZUQsyimxE03fbLhxDlHYlNK92BGvBPaKM3MdGWOr1di7RZ2J+co50ts649oeTu2Zu4ZY+zziCqxBnZnNPhSiSOKncA34+C+m5hXLfGcEkFiOzrbKVTodfpNSbTrn2LgvD9nkMT/xe5oLL2/tu/rebBOnbzEg6W6Pyu0ybiQxN5iVzvrgTp2S2IZIB/TlmgNHlneVN01FX3zLWGJ1mDvWtOWsrsu4G6+JSmx6vbQ3qHwpMema1NSMj2JZbdv4pL/RvkeAWSTNylSklh1t9SaXnlp+/feDmbDiB2j9CTuvAScj50/+zuYE9eFyUg8aPlq8kzF7mCm0Z1tN5xyxxn1xdqMD/4i58Yl1uE3B0eU9H4pG+FXXpdyVz/1HdwA6WXiFSKJBCSRgCQSkEQCkkhAEglIIgFJJCCJBCSRgCQSkEQCkkhAEglIIgFJJCCJBCSRgCQSkEQCkkhAEglIIgFJJCCJBCSRgCQSkEQCkkhAEglIIgFJJCCJBCSRgCQSkEQCkkhAEgn8A9csIJ6cNj0KAAAAAElFTkSuQmCC"},"691e":function(t,i,n){"use strict";n.r(i);var e=n("17a4"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},c5bc:function(t,i,n){"use strict";n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}));var e={goodsList:n("ac64").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"home"},[e("v-uni-swiper",{attrs:{"indicator-dots":!0,circular:!0}},[e("v-uni-swiper-item",[e("v-uni-image",{attrs:{src:n("6778")}})],1),e("v-uni-swiper-item",[e("v-uni-image",{attrs:{src:n("d0d1")}})],1)],1),e("v-uni-view",{staticClass:"nav"},t._l(t.navs,(function(i,n){return e("v-uni-view",{key:n,staticClass:"nav_item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navIiemClick(i.paht)}}},[e("v-uni-view",{class:i.icon}),e("v-uni-text",[t._v(t._s(i.title))])],1)})),1),e("v-uni-view",{staticClass:"hot_goods"},[e("v-uni-view",{staticClass:"tit"},[t._v("推荐商品")]),e("goods-list",{attrs:{goods:t.goods},on:{goodsItemClick:function(i){arguments[0]=i=t.$handleEvent(i),t.goGoodsDetail.apply(void 0,arguments)}}})],1)],1)},o=[]},d0d1:function(t,i,n){t.exports=n.p+"static/img/2.39cc6387.png"},e641:function(t,i,n){var e=n("0050");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("734ff203",e,!0,{sourceMap:!1,shadowMode:!1})}}]);