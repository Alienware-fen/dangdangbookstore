webpackJsonp([6],{125:function(t,e,s){var i=s(126);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(18)("0af37344",i,!0,{})},126:function(t,e,s){var i=s(19);e=t.exports=s(16)(!1),e.push([t.i,'.typeItem>img{width:100%}.typeItem .enter{margin:3px 0}.typeItem .enter,.typeItem .enter a{display:flex;justify-content:space-between}.typeItem .enter a{text-decoration:none;width:49.5%;box-sizing:border-box;background-color:#fff;padding:5%}.typeItem .enter a>img{width:20%;transform:scale(.3)}.typeItem .enter a>div{width:80%}.typeItem .enter a p{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.typeItem .enter a p:first-of-type{width:96%;color:#212121;font-size:.9rem;margin-bottom:3.5%;box-sizing:border-box;font-weight:700}.typeItem .enter a p:nth-of-type(2){color:#a6a6a6;font-size:.7rem}.typeItem .list{background-color:#fff;padding:10px}.typeItem .list>p{font-size:.86rem;font-weight:700;margin-bottom:7%}.typeItem .list .warp-list{display:flex;justify-content:space-between}.typeItem .list .warp-list a{text-decoration:none;text-align:center}.typeItem .list .warp-list a>img{width:75%}.typeItem .list .warp-list a p{color:#4d525c;font-size:.6rem;margin:10% 0}.typeItem .literary{background-color:#fff;margin:3% 0}.typeItem .literary .warp-title{display:flex;justify-content:space-between;padding:10px 20px 10px 10px;position:relative}.typeItem .literary .warp-title span:first-of-type{font-size:.8rem;color:#1e1e1e;font-weight:700}.typeItem .literary .warp-title span:nth-of-type(2){font-size:.6rem;color:#969696;margin:auto 0}.typeItem .literary .warp-title span:first-of-type:after,.typeItem .literary .warp-title span:nth-of-type(2):after{content:"";width:11px;height:18px;position:absolute;transform:scale(.5);top:27%;background:url('+i(s(73))+') no-repeat}.typeItem .literary .warp-title span:first-of-type:after{left:15%}.typeItem .literary .warp-title span:nth-of-type(2):after{right:4%}.typeItem .literary .warp-txt{margin:10px 0}.typeItem .literary .warp-txt .show{width:100%;display:flex;justify-content:space-between;flex-wrap:wrap;padding:2%;box-sizing:border-box;position:relative}.typeItem .literary .warp-txt .show p{width:33.33%;text-align:center;display:flex;height:44px;position:relative;border-bottom:1px solid #e1e1e1}.typeItem .literary .warp-txt .show p a{text-decoration:none;color:#4d525d;font-size:.8rem;margin:auto}.typeItem .literary .warp-txt .show .hiddenline{border-bottom:0}.typeItem .literary .warp-txt .show .line{content:"";height:14px;width:1px;background-color:#e1e1e1;position:absolute;top:35%;right:0}.typeItem .literary .warp-txt .show .hidden1{width:0}.typeItem .literary .warp-txt .show .none-line{border-bottom:0}.typeItem .literary .warp-txt .show .none-line .show-more{color:#bababa;font-size:.5rem;border-bottom:0;margin:auto}',""])},127:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"typeItem"},[i("img",{attrs:{src:s(128)}}),t._v(" "),i("div",{staticClass:"enter"},[i("router-link",{attrs:{to:"/"}},[i("div",[i("p",[t._v("进入当当网上")]),t._v(" "),i("p",[t._v("特价低至1折起购")])]),t._v(" "),i("img",{attrs:{src:s(73)}})]),t._v(" "),i("router-link",{attrs:{to:"/"}},[i("div",[i("p",[t._v("进入童书馆")]),t._v(" "),i("p",[t._v("竞选少儿读图书购")])]),t._v(" "),i("img",{attrs:{src:s(73)}})])],1),t._v(" "),i("div",{staticClass:"list"},[i("p",[t._v("榜单")]),t._v(" "),i("div",{staticClass:"warp-list"},t._l(t.list,function(e,s){return i("router-link",{key:s,attrs:{to:"/"}},[i("img",{attrs:{src:e.src}}),t._v(" "),i("p",[t._v(t._s(e.name))])])}),1)]),t._v(" "),i("div",{staticClass:"literary"},[t._m(0),t._v(" "),i("div",{staticClass:"warp-txt"},[i("div",{staticClass:"txt"},[2==t.showList.length%3?i("div",{staticClass:"show"},[t._l(t.showList,function(e,s){return i("p",{key:s,class:{hiddenline:s==t.showList.length-1||s==t.showList.length-2}},[i("router-link",{attrs:{to:"/"}},[t._v("\n                            "+t._s(e)+"\n                        ")]),t._v(" "),i("span",{staticClass:"line",class:{hidden1:s%3==2}})],1)}),t._v(" "),i("p",{staticClass:"none-line"},[i("span",{staticClass:"show-more",on:{click:function(e){t.showAll=!t.showAll}}},[i("b",[t._v(t._s(t.word))])])])],2):i("div",{staticClass:"show"},[t._l(t.showList,function(e,s){return i("p",{key:s,class:{hiddenline:s==t.showList.length-1}},[i("router-link",{attrs:{to:"/"}},[t._v("\n                            "+t._s(e)+"\n                        ")]),t._v(" "),i("span",{staticClass:"line",class:{hidden1:s%3==2}})],1)}),t._v(" "),i("p",{staticClass:"none-line"},[i("span",{staticClass:"show-more",on:{click:function(e){t.showAll=!t.showAll}}},[i("b",[t._v(t._s(t.word))])])])],2)])])]),t._v(" "),i("div",{staticClass:"literary"},[t._m(1),t._v(" "),i("div",{staticClass:"warp-txt"},[i("div",{staticClass:"txt"},[2==t.showList1.length%3?i("div",{staticClass:"show"},[t._l(t.showList1,function(e,s){return i("p",{key:s,class:{hiddenline:s==t.showList1.length-1||s==t.showList1.length-2}},[i("router-link",{attrs:{to:"/"}},[t._v("\n                            "+t._s(e)+"\n                        ")]),t._v(" "),i("span",{staticClass:"line",class:{hidden1:s%3==2}})],1)}),t._v(" "),i("p",{staticClass:"none-line"},[i("span",{staticClass:"show-more",on:{click:function(e){t.showAll1=!t.showAll1}}},[i("b",[t._v(t._s(t.word))])])])],2):i("div",{staticClass:"show"},[t._l(t.showList1,function(e,s){return i("p",{key:s,class:{hiddenline:s==t.showList1.length-1}},[i("router-link",{attrs:{to:"/"}},[t._v("\n                            "+t._s(e)+"\n                        ")]),t._v(" "),i("span",{staticClass:"line",class:{hidden1:s%3==2}})],1)}),t._v(" "),i("p",{staticClass:"none-line"},[i("span",{staticClass:"show-more",on:{click:function(e){t.showAll1=!t.showAll1}}},[i("b",[t._v(t._s(t.word))])])])],2)])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"warp-title"},[s("span",[t._v("文学")]),t._v(" "),s("span",[t._v("畅想榜")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"warp-title"},[s("span",[t._v("文学")]),t._v(" "),s("span",[t._v("畅想榜")])])}],n={render:i,staticRenderFns:r};e.a=n},128:function(t,e,s){t.exports=s.p+"title.jpg?24dc06f6689fcc055615105d6602c184"},58:function(t,e,s){"use strict";function i(t){s(125)}Object.defineProperty(e,"__esModule",{value:!0});var r=s(79),n=s(127),a=s(17),o=i,l=a(r.a,n.a,!1,o,null,null);e.default=l.exports},73:function(t,e,s){t.exports=s.p+"arrow.png?1d20f8d0ecb4c432b7bf8829b0580666"},79:function(t,e,s){"use strict";e.a={data:function(){return{item:"",list:"",literarys:["中国先当代随笔","名家作品","文集","纪实文学","中国古诗词","中国现当代诗歌","外国诗歌","中国古代随笔","外国随笔","民家文学","戏剧","文学评论与鉴赏","文学理论"],showAll:!1,showAll1:!1,num:""}},watch:{$route:function(){this.item=this.$route.params.id}},computed:{showList:function(){if(0==this.showAll){var t=[];if(this.literarys.length>5)for(var e=0;e<5;e++)t.push(this.literarys[e]);else t=this.literarys;return t}return this.literarys},word:function(){return 0==this.showAll?"展开":"收起"},showList1:function(){if(0==this.showAll1){var t=[];if(this.literarys.length>5)for(var e=0;e<5;e++)t.push(this.literarys[e]);else t=this.literarys;return t}return this.literarys},word1:function(){return 0==this.showAll1?"展开":"收起"}},mounted:function(){var t=this;this.$http.get("./data/type/type.json").then(function(e){t.list=e.data.list}).catch(function(t){console.log(t)})},method:{}}}});
//# sourceMappingURL=6.build.js.map