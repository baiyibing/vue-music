webpackJsonp([5],{"9Jlr":function(n,t,e){var i=e("ewTl");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("17816e09",i,!0,{})},"D/FQ":function(n,t,e){var i=e("Klkj");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("4fc7d9e2",i,!0,{})},Klkj:function(n,t,e){(n.exports=e("FZ+f")(!0)).push([n.i,'\n.fullBox[data-v-2802d8ba] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n.flexYCenter[data-v-2802d8ba] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.flexAround[data-v-2802d8ba] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n}\n.flexBetween[data-v-2802d8ba] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n}\n.flexXCenter[data-v-2802d8ba] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.flexCenter[data-v-2802d8ba] {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.mint-msgbox[data-v-2802d8ba] {\n  z-index: 300;\n}\n.mint-msgbox-btns button[data-v-2802d8ba] {\n  font-size: 12Px;\n  /* no*/\n}\n[data-dpr="2"] .mint-msgbox-btns button[data-v-2802d8ba] {\n  font-size: 24Px;\n  /* no  */\n}\n[data-dpr="3"] .mint-msgbox-btns button[data-v-2802d8ba] {\n  font-size: 36Px;\n  /* no  */\n}\n.my-loading[data-v-2802d8ba] {\n  top: calc(100vh / 2 - 2.66667rem);\n}\n',"",{version:3,sources:["I:/vue-music/src/pages/search/suggest/song.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,OAAO;CACR;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,sCAAsC;UAC9B,8BAA8B;CACvC;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,0BAA0B;EAC1B,uCAAuC;UAC/B,+BAA+B;CACxC;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;CACjC;AACD;EACE,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;EAC5B,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;CACjC;AACD;EACE,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,OAAO;CACR;AACD;EACE,gBAAgB;EAChB,SAAS;CACV;AACD;EACE,gBAAgB;EAChB,SAAS;CACV;AACD;EACE,kCAAkC;CACnC",file:"song.vue",sourcesContent:['\n.fullBox[data-v-2802d8ba] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n.flexYCenter[data-v-2802d8ba] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.flexAround[data-v-2802d8ba] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n}\n.flexBetween[data-v-2802d8ba] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n}\n.flexXCenter[data-v-2802d8ba] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.flexCenter[data-v-2802d8ba] {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.mint-msgbox[data-v-2802d8ba] {\n  z-index: 300;\n}\n.mint-msgbox-btns button[data-v-2802d8ba] {\n  font-size: 12Px;\n  /* no*/\n}\n[data-dpr="2"] .mint-msgbox-btns button[data-v-2802d8ba] {\n  font-size: 24Px;\n  /* no  */\n}\n[data-dpr="3"] .mint-msgbox-btns button[data-v-2802d8ba] {\n  font-size: 36Px;\n  /* no  */\n}\n.my-loading[data-v-2802d8ba] {\n  top: calc(100vh / 2 - 2.66667rem);\n}\n'],sourceRoot:""}])},ar59:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=e("Xxa5"),o=e.n(s),a=e("exGp"),r=e.n(a),A=e("//Fk"),c=e.n(A),l=e("Gu7T"),u=e.n(l),d=e("Dd8w"),C=e.n(d),f={name:"song",data:function(){return{itemHeight:0,list:[],pulldownList:[],offset:1,originLimit:20,pulldownLimit:0,options:{pullDownRefresh:{threshold:60,txt:"更新成功"}}}},props:{query:{type:String,default:""},type:{type:String,default:""}},computed:{params:function(){return{type:this.type,limit:this.originLimit,offset:this.offset,w:this.query}},pulldownLen:function(){return this.pulldownList.length}},watch:{pulldownList:{handler:function(n,t){t&&t.forEach(function(n){return delete n.newLoad}),n&&n.forEach(function(n){n.newLoad=!0})},immediate:!0},query:{handler:(i=void 0,function(){i&&clearTimeout(i),i=setTimeout(this.coverData,300)}),immediate:!0},offset:"addData"},methods:{getItemHeight:function(n){this.itemHeight=n},onPullingDown:function(){this.pulldownLimit=this.randomFrom(this.originLimit/3,this.originLimit),this.offset++},search:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.originLimit;return r()(o.a.mark(function e(){var i,s,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.__getJson(n.__SEARCH_URL,C()({},n.params,{limit:t}));case 2:if(i=e.sent,s=i.code,a=i.data,s!=n.__QERR_OK){e.next=10;break}return n,e.next=9,n.getSongUrl(a.song.list);case 9:return e.abrupt("return",a.song.list.filter(function(n){return n.purl}).map(function(t){return new n.__Song(n.__pick__(t,["songid","songmid","albummid","albumid","singer","url","songname"]))}));case 10:case"end":return e.stop()}},e,n)}))()},getSongUrl:function(n){var t=this;return r()(o.a.mark(function e(){var i,s,a,r,A;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.map(function(n){return n.songmid}),s={mid:i.join(",")},e.next=4,t.__getJson("/getMusicPlayData",s);case 4:a=e.sent,r=a.code,A=a.req,r==t.__QERR_OK&&A.code==t.__QERR_OK&&A.data.midurlinfo.forEach(function(e,i){n[i].url=""+t.SONG_SOURCE+e.purl,n[i].purl=e.purl});case 8:case"end":return e.stop()}},e,t)}))()},coverData:function(){var n=this;return r()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.list=[],t.next=3,n.search();case 3:n.list=t.sent,n.$emit("search",n.query);case 5:case"end":return t.stop()}},t,n)}))()},addData:function(){var n=this;return r()(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.search(n.pulldownLimit);case 2:n.pulldownList=t.sent,(e=n.list).unshift.apply(e,u()(n.pulldownList));case 4:case"end":return t.stop()}},t,n)}))()},enter:function(n,t){var e=this;return r()(o.a.mark(function i(){var s,a;return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:s=0===e.pulldownLen?e.list.length:e.pulldownLen,a=s*e.itemHeight,setTimeout(r()(o.a.mark(function i(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return $(n).css({transform:"translate3d(0,"+-a+"px,0)"}),e.next=3,new c.a(function(n){return setTimeout(n,70)});case 3:$(n).css({transition:"all "+a+"ms",transform:"translate3d(0,0,0)"}).bind("transitionend",t);case 4:case"end":return e.stop()}},i,e)})),50);case 3:case"end":return i.stop()}},i,e)}))()},afterEnter:function(n){$(n).css({transition:"",transform:""})}}},b={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("cube-scroll",{staticClass:"song-page",attrs:{data:n.list,options:n.options},on:{"pulling-down":n.onPullingDown},scopedSlots:n._u([{key:"pulldown",fn:function(t){return e("pull-down-refresh",{attrs:{limit:n.pulldownList.length,props:t}})}}])},[0===n.list.length?e("my-loading"):n._e(),n._v(" "),e("transition",{on:{enter:n.enter,"after-enter":n.afterEnter}},[e("music-list",{key:n.list.length,attrs:{list:n.list},on:{hasHeight:n.getItemHeight}})],1)],1)},staticRenderFns:[]};var p=e("VU/8")(f,b,!1,function(n){e("D/FQ")},"data-v-2802d8ba",null).exports,B=e("bFR2"),y={components:{Song:p},data:function(){var n=this;return{query:"",isSearch:!1,clientTop:0,y:0,hotkeyList:[],get historyList(){return n.__uniq__(B.a.get("history")).slice(0,20)},set historyList(t){B.a.set("history",n.__uniq__(t).slice(0,20))}}},computed:{isSearch_:function(){return!this.__isEmptyObject(this.$search)&&this.$search.isFixed}},created:function(){this.getHotkeyList()},destroyed:function(){this.unwatch()},mounted:function(){var n=this;this.$search=this.$refs.search,this.unwatch=this.$search.$watch("isFixed",function(){console.log("search component watching isFixed"),n.$nextTick(function(){n.$refs.scrollContainer.refresh()})}),this.$nextTick(function(){n.clientTop=$(".searchBox").height()})},watch:{isSearch_:function(){var n=this;this.$nextTick(function(){n.$refs.scrollContainer.refresh(),console.log("refresh scroll")})},query:function(n){this.isSearch=Boolean(n)}},methods:{deleteOneHistory:function(n){this.historyList=this.__pull__(this.historyList,n)},clearHistory:function(){var n=this;this.MessageBox.confirm("您确定要清空搜索记录吗").then(function(t){"confirm"===t&&(n.historyList=[])}).catch(console.log)},storeUpQuery:function(n){this.historyList=[n].concat(this.historyList)},addQuery:function(n){this.query=n,this.$search.isFixed=!0},getHotkeyList:function(){var n=this;return r()(o.a.mark(function t(){var e,i,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.__getJson(n.__HOT_KEY);case 2:e=t.sent,i=e.code,s=e.data,i==n.__QERR_OK&&n._normalizeHotkey(s);case 6:case"end":return t.stop()}},t,n)}))()},_normalizeHotkey:function(n){this.hotkeyList=n.hotkey.splice(0,10)},onPullingDown:function(){this.params.offset++,this.search({type:this.TYPE})},onScroll:function(n){var t=n.y;this.y=t}}},h={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{},[e("x-search",{ref:"search",class:[{isSearch_:n.$refs.search&&n.$refs.search.isFixed},"searchBox"],attrs:{"auto-fixed":!0,placeholder:"请输入歌曲、专辑..."},model:{value:n.query,callback:function(t){n.query="string"==typeof t?t.trim():t},expression:"query"}}),n._v(" "),e("cube-scroll",{directives:[{name:"show",rawName:"v-show",value:!n.query,expression:"!query"}],ref:"scrollContainer"},[e("div",{staticClass:"hotkey"},[e("div",{staticClass:"title-wrap"},[e("p",{staticClass:"title"},[n._v("热门搜索")])]),n._v(" "),e("ul",{staticClass:"hotkey-list flexWrap"},n._l(n.hotkeyList,function(t,i){return e("li",{key:i,staticClass:"hotkey-item",on:{click:function(e){n.addQuery(t.k.trim())}}},[e("p",[n._v(n._s(t.k))])])}))]),n._v(" "),n.historyList.length?e("div",{staticClass:"history"},[e("div",{staticClass:"title-wrap"},[e("h3",[n._v("搜索历史")]),n._v(" "),e("div",{on:{click:n.clearHistory}},[e("i",{staticClass:"cubeic-delete clear"})])]),n._v(" "),e("ul",n._l(n.historyList,function(t,i){return e("li",{key:i,staticClass:"history-item"},[e("div",{on:{click:function(e){n.addQuery(t)}}},[e("span",{staticClass:"item-text"},[n._v(n._s(t))]),n._v(" "),e("i",{staticClass:"item-icon cubeic-close",on:{click:function(e){e.stopPropagation(),n.deleteOneHistory(t)}}})])])}))]):n._e()]),n._v(" "),n.query?e("div",[e("Song",{attrs:{query:n.query},on:{search:n.storeUpQuery}})],1):n._e()],1)},staticRenderFns:[]};var m=e("VU/8")(y,h,!1,function(n){e("9Jlr")},null,null);t.default=m.exports},ewTl:function(n,t,e){(n.exports=e("FZ+f")(!0)).push([n.i,'\n.fullBox {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n.flexYCenter {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.flexAround {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n}\n.flexBetween {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n}\n.flexXCenter {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.flexCenter {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.mint-msgbox {\n  z-index: 300;\n}\n.mint-msgbox-btns button {\n  font-size: 12Px;\n  /* no*/\n}\n[data-dpr="2"] .mint-msgbox-btns button {\n  font-size: 24Px;\n  /* no  */\n}\n[data-dpr="3"] .mint-msgbox-btns button {\n  font-size: 36Px;\n  /* no  */\n}\n.isSearch_ {\n  height: 1.41333rem;\n}\n.weui-search-bar__label {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.search-content {\n  position: fixed;\n  width: 100%;\n}\n.hotkey,\n.history {\n  padding: 0.26667rem;\n}\n.hotkey .title-wrap,\n.history .title-wrap {\n  margin: 0.53333rem 0;\n}\n.hotkey .hotkey-list {\n  margin-left: -0.48rem;\n}\n.hotkey .hotkey-list .hotkey-item {\n  margin-bottom: 0.37333rem;\n  margin-left: 0.48rem;\n  background: #eee;\n  padding: 0.26667rem;\n  border-radius: 0.26667rem;\n}\n.history .title-wrap {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n}\n.history .title-wrap .clear {\n  font-size: 0.48rem;\n}\n.history .history-item {\n  font-size: 0.32rem;\n  /* no*/\n  margin-bottom: 0.37333rem;\n}\n[data-dpr="2"] .history .history-item {\n  font-size: 0.64rem;\n  /* no  */\n}\n[data-dpr="3"] .history .history-item {\n  font-size: 0.96rem;\n  /* no  */\n}\n.history .history-item .item-icon {\n  float: right;\n}\n',"",{version:3,sources:["I:/vue-music/src/pages/search/index.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,OAAO;CACR;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,sCAAsC;UAC9B,8BAA8B;CACvC;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,0BAA0B;EAC1B,uCAAuC;UAC/B,+BAA+B;CACxC;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;CACjC;AACD;EACE,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;EAC5B,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;CACjC;AACD;EACE,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,OAAO;CACR;AACD;EACE,gBAAgB;EAChB,SAAS;CACV;AACD;EACE,gBAAgB;EAChB,SAAS;CACV;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;EAChC,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,gBAAgB;EAChB,YAAY;CACb;AACD;;EAEE,oBAAoB;CACrB;AACD;;EAEE,qBAAqB;CACtB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,0BAA0B;EAC1B,qBAAqB;EACrB,iBAAiB;EACjB,oBAAoB;EACpB,0BAA0B;CAC3B;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,0BAA0B;EAC1B,uCAAuC;UAC/B,+BAA+B;CACxC;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,SAAS;CACV;AACD;EACE,mBAAmB;EACnB,SAAS;CACV;AACD;EACE,aAAa;CACd",file:"index.vue",sourcesContent:['\n.fullBox {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n.flexYCenter {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.flexAround {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n}\n.flexBetween {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n}\n.flexXCenter {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.flexCenter {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.mint-msgbox {\n  z-index: 300;\n}\n.mint-msgbox-btns button {\n  font-size: 12Px;\n  /* no*/\n}\n[data-dpr="2"] .mint-msgbox-btns button {\n  font-size: 24Px;\n  /* no  */\n}\n[data-dpr="3"] .mint-msgbox-btns button {\n  font-size: 36Px;\n  /* no  */\n}\n.isSearch_ {\n  height: 1.41333rem;\n}\n.weui-search-bar__label {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.search-content {\n  position: fixed;\n  width: 100%;\n}\n.hotkey,\n.history {\n  padding: 0.26667rem;\n}\n.hotkey .title-wrap,\n.history .title-wrap {\n  margin: 0.53333rem 0;\n}\n.hotkey .hotkey-list {\n  margin-left: -0.48rem;\n}\n.hotkey .hotkey-list .hotkey-item {\n  margin-bottom: 0.37333rem;\n  margin-left: 0.48rem;\n  background: #eee;\n  padding: 0.26667rem;\n  border-radius: 0.26667rem;\n}\n.history .title-wrap {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n}\n.history .title-wrap .clear {\n  font-size: 0.48rem;\n}\n.history .history-item {\n  font-size: 0.32rem;\n  /* no*/\n  margin-bottom: 0.37333rem;\n}\n[data-dpr="2"] .history .history-item {\n  font-size: 0.64rem;\n  /* no  */\n}\n[data-dpr="3"] .history .history-item {\n  font-size: 0.96rem;\n  /* no  */\n}\n.history .history-item .item-icon {\n  float: right;\n}\n'],sourceRoot:""}])}});
//# sourceMappingURL=5.search.js.map