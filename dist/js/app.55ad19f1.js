(function(t){function e(e){for(var i,r,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"090f":function(t,e,n){"use strict";var i=n("c397"),a=n.n(i);a.a},"131a":function(t,e,n){},"14b1":function(t,e,n){},"2a8e":function(t,e,n){"use strict";var i=n("14b1"),a=n.n(i);a.a},"38de":function(t,e,n){t.exports=n.p+"img/hb.8c6a048c.png"},"43b5":function(t,e,n){"use strict";n.r(e),n.d(e,"systemApi",(function(){return i}));var i={system:[{name:"loginIn",method:"POST",path:"/loginIn/getData",mockPath:"/loginIn/getData",params:{role:[]},desc:"用户登录"}],game:[{name:"getGames",method:"POST",path:"/app/gamestj.getData",mockPath:"/app/gamestj.getData",params:{role:[]},desc:"用户登录"}]}},4879:function(t,e,n){"use strict";var i=n("e3fc"),a=n.n(i);a.a},4917:function(t,e,n){"use strict";var i=n("131a"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("keep-alive",{attrs:{include:t.cachedViews}},[n("router-view")],1)},o=[],r=(n("a4d3"),n("4de4"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),s=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"app",methods:{initRem:function(){var t=document.querySelector("html"),e=t.getBoundingClientRect(),n=e.width;t.style.fontSize="".concat(n/50,"px")},addViewToVisided:function(){var t=this.$route.name?this.$route:null;t&&this.$store.dispatch("views/addVisitedViews",{route:t})}},watch:{$route:function(){this.addViewToVisided()}},computed:l({},Object(s["b"])("views",{cachedViews:"cachedViews"})),mounted:function(){var t=this;this.initRem(),window.onresize=function(){t.initRem()},this.addViewToVisided(),this.$dialog.loading.open("正在加载，请耐心等待！"),window.onload=function(){t.$dialog.loading.close()}}},p=u,d=(n("034f"),n("2877")),f=Object(d["a"])(p,a,o,!1,null,null,null),h=f.exports,m=n("8c4f");function v(t,e,n){var i=window.LocaStorage.getItem("TOKEN_STR");t.meta.requireAuth?i?n():"/login"===t.path?n():n({path:"/login"}):n(),"/login"===t.fullPath&&(i?n({path:e.fullPath}):n())}var b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("router-view"),n("yd-tabbar",{attrs:{fixed:!0,fontsize:"1.5rem",padding:"0.8rem 0"}},[n("yd-tabbar-item",{attrs:{title:"首页",link:"/",active:t.activeBar["home"]},nativeOn:{click:function(e){return t.onClickBar("home")}}},[n("yd-icon",{attrs:{slot:"icon",name:"home",size:"3rem"},slot:"icon"})],1),n("yd-tabbar-item",{attrs:{title:"个人",link:"/mine",active:t.activeBar["mine"]},nativeOn:{click:function(e){return t.onClickBar("mine")}}},[n("yd-icon",{attrs:{slot:"icon",name:"ucenter-outline",size:"3rem"},slot:"icon"})],1)],1)],1)},g=[],y={name:"Layout",methods:{onClickBar:function(t){"home"===t?(this.activeBar.home=!0,this.activeBar.mine=!1):(this.activeBar.home=!1,this.activeBar.mine=!0)},toLogin:function(){this.$clearToken(),this.$router.push({name:"Login"})}},mounted:function(){var t=this;document.addEventListener("plusready",(function(){window.plus.key.addEventListener("backbutton",(function(){t.$router.back(-1)}))}),!1)},data:function(){return{activeBar:{home:!0,mine:!1}}}},w=y,O=(n("2a8e"),Object(d["a"])(w,b,g,!1,null,"8da649d0",null)),j=O.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("div",{staticClass:"login-con-item"}),n("div",{staticClass:"login-con-item"},[n("div",{staticClass:"login-con-item-group"},[n("v-input",{attrs:{roles:[{required:!0,message:"账号不得为空！"}],placeholder:"请输入账号",icon:"icon-userInput"},on:{"on-model":t.getUsN}})],1),n("div",{staticClass:"login-con-item-group"},[n("v-input",{attrs:{roles:[{required:!0,message:"密码不得为空！"}],placeholder:"请输入密码",icon:"icon-pswInput",type:"password"},on:{"on-model":t.getPsw}})],1),n("div",{staticClass:"login-con-item-group"},[n("v-button",{attrs:{isDisabled:t.btnDisabled},on:{"on-click":t.login}})],1)])])},x=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"input",staticClass:"v-input-container",style:{width:t.width}},[n("div",{staticClass:"v-input-label"},[n("span",{staticClass:"iconFont",class:t.icon}),t._v(t._s(t.label))]),n("div",{staticClass:"v-input-inp"},["checkbox"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inpVal,expression:"inpVal"}],attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.inpVal)?t._i(t.inpVal,null)>-1:t.inpVal},on:{blur:t.blurInput,change:function(e){var n=t.inpVal,i=e.target,a=!!i.checked;if(Array.isArray(n)){var o=null,r=t._i(n,o);i.checked?r<0&&(t.inpVal=n.concat([o])):r>-1&&(t.inpVal=n.slice(0,r).concat(n.slice(r+1)))}else t.inpVal=a}}}):"radio"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inpVal,expression:"inpVal"}],attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.inpVal,null)},on:{blur:t.blurInput,change:function(e){t.inpVal=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.inpVal,expression:"inpVal"}],attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.inpVal},on:{blur:t.blurInput,input:function(e){e.target.composing||(t.inpVal=e.target.value)}}}),n("span",{directives:[{name:"show",rawName:"v-show",value:""!==t.tipMsg,expression:"tipMsg!==''"}],staticClass:"v-input-msg"},[t._v(t._s(t.tipMsg))])])])},_=[],P={name:"VInput",props:{width:{default:"100%"},label:{default:""},type:{default:"text"},icon:{default:""},placeholder:{default:"请输入内容"},roles:{default:[]}},methods:{blurInput:function(){var t=this;this.roles.filter((function(e,n,i){for(var a in e)switch(a){case"required":e[a]&&""===t.inpVal?t.setInputError(e.message):t.setOk();break}}))},setOk:function(){this.$refs.input.style["border-bottom"]="1px solid #E7E7E7",this.tipMsg=""},setInputError:function(t){this.$refs.input.style["border-bottom"]="1px solid red",this.tipMsg=t}},mounted:function(){},watch:{inpVal:function(t){this.$emit("on-model",t)}},data:function(){return{inpVal:"",tipMsg:""}}},V=P,E=(n("6d4d"),Object(d["a"])(V,S,_,!1,null,"6661b39c",null)),D=E.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-button-container",style:{width:t.width}},[n("button",{class:t.isDisabled?"disColor":"",style:{backgroundColor:t.btnType[t.type]},on:{click:t.clickBtn}},[t._v(t._s(t.label))])])},T=[],$={name:"VButton",props:{label:{default:"按钮"},width:{default:"100%"},type:{default:"blue"},isDisabled:{default:""}},methods:{clickBtn:function(){this.isDisabled||this.$emit("on-click")}},data:function(){return{btnType:{blue:"#4284F3"}}}},L=$,A=(n("4879"),Object(d["a"])(L,C,T,!1,null,"5aade05f",null)),B=A.exports,I={name:"Login",components:{VInput:D,VButton:B},methods:{login:function(){this.$setToken("TOKEN-855225-1515-9664"),this.$router.push({name:"Layout"})},getUsN:function(t){this.userName=t,this.btnDisabled=!(""!==this.userName&&""!==this.psw)},getPsw:function(t){this.psw=t,this.btnDisabled=!(""!==this.userName&&""!==this.psw)}},data:function(){return{userName:"",psw:"",btnDisabled:!0}}},q=I,N=(n("be55"),Object(d["a"])(q,k,x,!1,null,"34eb8475",null)),M=N.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("yd-navbar",{attrs:{fixed:!0,bgcolor:"rgb(9, 187, 7)",color:"#ffffff",height:"5rem",fontsize:"2rem",title:"爱边游"}}),i("yd-tab",{staticStyle:{"margin-top":"5rem",width:"100%"},attrs:{height:"4rem","font-size":"1.6rem"}},[i("yd-tab-panel",{attrs:{label:"推荐"}},[i("recommond-view")],1),i("yd-tab-panel",{attrs:{label:"扫码领红包"}},[i("div",{staticClass:"img-con"},[i("img",{attrs:{src:n("38de")}})])])],1)],1)},R=[],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("yd-slider",{attrs:{autoplay:"3000"}},[n("yd-slider-item",[n("a",[n("img",{attrs:{src:"http://imga3.4399.cn/upload_pic/2020/1/6/4399_17260431491.gif"}})])])],1),n("yd-rollnotice",{staticStyle:{"margin-top":"1rem","padding-left":"1rem"},attrs:{autoplay:"5000"}},[n("yd-rollnotice-item",[n("span",{staticStyle:{color:"#F00"}},[t._v(" 荐 ")]),t._v("今日爱边游小游戏APP震撼上线！")]),n("yd-rollnotice-item",[n("span",{staticStyle:{color:"#F00"}},[t._v(" 荐 ")]),t._v("众多H5开源小游戏欢乐畅玩！")]),n("yd-rollnotice-item",[n("span",{staticStyle:{color:"#F00"}},[t._v(" 荐 ")]),t._v("更多精彩尽情期待！")])],1),t._l(t.gameList,(function(e){return n("game-list",{key:e.id,attrs:{name:e.name,title:e.title,url:e.src},on:{"on-goPlay":t.goplay}})}))],2)},F=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-list"},[n("ul",[n("li",[n("a",{attrs:{href:"javascript:void(0)"}},[n("img",{attrs:{src:"http://imga4.5054399.com/upload_pic/2019/11/1/4399_17213250195.jpg"}}),n("em",[t._v(t._s(t.name))]),n("p",[t._v(t._s(t.title))])]),n("a",{staticClass:"btn",on:{click:function(e){return t.play(t.url)}}},[t._v("开始玩")])])])])},J=[],W={props:{name:{default:""},title:{default:""},icon:{default:""},url:{default:""}},methods:{play:function(t){this.$emit("on-goPlay",t)}}},G=W,K=(n("e153"),Object(d["a"])(G,H,J,!1,null,"5d454ad9",null)),Q=K.exports,X={components:{GameList:Q},mounted:function(){var t=this,e="/mGame/dist/game.json";this.$ajax.get(e).then((function(e){t.gameList=e.data}),(function(t){console.log("数据加载失败")}))},methods:{goplay:function(t){this.$router.push({name:"Play",params:{urlStr:t}})}},data:function(){return{gameList:[]}}},Y=X,Z=(n("9ad8"),Object(d["a"])(Y,U,F,!1,null,"2259d4f4",null)),tt=Z.exports,et={components:{RecommondView:tt}},nt=et,it=(n("4917"),Object(d["a"])(nt,z,R,!1,null,"2392fe1e",null)),at=it.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"main-con"},[n("span",{staticClass:"user"},[n("yd-icon",{attrs:{name:"ucenter"}})],1),n("span",{staticClass:"login"},[t._v("立即登录")])]),n("yd-cell-group",{staticStyle:{"margin-top":"1rem"}},[n("yd-cell-item",{attrs:{arrow:""}},[n("yd-icon",{attrs:{slot:"icon",name:"time",size:"2rem"},slot:"icon"}),n("span",{staticStyle:{"font-size":"2rem"},attrs:{slot:"left"},slot:"left"},[t._v("历史记录")]),n("span",{staticStyle:{"font-size":"2rem"},attrs:{slot:"right"},slot:"right"},[t._v("查看游玩记录")])],1)],1),n("yd-button",{attrs:{size:"large",type:"danger"}},[t._v("注销")])],1)},rt=[],st={},ct=st,lt=(n("090f"),Object(d["a"])(ct,ot,rt,!1,null,"537c1608",null)),ut=lt.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",staticStyle:{position:"fixed",left:"0","z-index":"1000"}},[n("iframe",{ref:"frame",staticStyle:{width:"100%",height:"100%"},attrs:{id:"iframeId",frameborder:"0",src:t.url}})])},dt=[],ft={methods:{},created:function(){this.$dialog.loading.open("正在加载游戏资源，请耐心等待！")},mounted:function(){var t=this;this.url=this.$route.params.urlStr,this.$refs.frame.onload=function(){t.$dialog.loading.close()}},data:function(){return{url:""}}},ht=ft,mt=(n("778f"),Object(d["a"])(ht,pt,dt,!1,null,"69c4a49c",null)),vt=mt.exports;i["default"].use(m["a"]);var bt=new m["a"]({routes:[{path:"/",name:"Layout",component:j,meta:{isCache:!1,requireAuth:!1},children:[{path:"/",name:"Home",component:at,meta:{isCache:!1,requireAuth:!1}},{path:"mine",name:"Mine",component:ut,meta:{isCache:!1,requireAuth:!1}},{path:"play",name:"Play",component:vt,meta:{isCache:!1,requireAuth:!1}}]},{path:"/login",name:"Login",component:M,meta:{isCache:!1,requireAuth:!1}}]});bt.beforeEach(v);var gt=bt,yt={visitedViews:[],cachedViews:[]},wt={ADD_VISITED_VIEW:function(t,e){var n=e.route;t.visitedViews.some((function(t){return t.path===n.path}))||(t.visitedViews.push(n),n.name&&n.meta&&!n.meta.noCache&&t.cachedViews.push(n.name))}},Ot={addVisitedViews:function(t,e){var n=t.commit,i=e.route;n("ADD_VISITED_VIEW",{route:i})}},jt={cachedViews:function(t){return t.cachedViews},visitedViews:function(t){return t.visitedViews}},kt={namespaced:!0,state:yt,getters:jt,mutations:wt,actions:Ot};i["default"].use(s["a"]);var xt=new s["a"].Store({modules:{views:kt}}),St=(n("99af"),n("d4ec")),_t=n("bee2"),Pt=(n("d3b7"),n("bc3a")),Vt=n.n(Pt),Et={mockBaseUrl:"http://localhost:9090",prodBaseUrl:"http://localhost:9090",isMocked:!1,isDebug:!0,sep:"."},Dt="5000";function Ct(t){return t}function Tt(t){return Promise.reject(t)}function $t(t){return t.data}function Lt(t){return Promise.reject(t)}var At=Vt.a.create(Dt);At.interceptors.request.use(Ct,Tt),At.interceptors.response.use($t,Lt);var Bt=At,It=n("dce5"),qt=n.n(It),Nt=n("13ea"),Mt=n.n(Nt),zt=(n("07ac"),n("ddb0"),n("f008")),Rt={};zt.keys().forEach((function(t){t=zt(t);for(var e=0,n=Object.values(t);e<n.length;e++){var i=n[e];Object.assign(Rt,i)}}));var Ut=Rt;function Ft(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function Ht(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ft(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ft(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Jt=function(){function t(e){Object(St["a"])(this,t),this.api=Object.create(null),this.debugApi=[],this.apiBuilder(e)}return Object(_t["a"])(t,[{key:"apiBuilder",value:function(t){var e=this,n=t.apis,i=void 0===n?{}:n,a=t.devBaseUrl,o=t.prodBaseUrl,r=t.isDevMode,s=void 0!==r&&r,c=t.sep,l=void 0===c?"/":c;Object.keys(i).forEach((function(t){e.buildApiWidthNamespace({namespace:t,apis:i[t],isDevMode:s,devBaseUrl:a,prodBaseUrl:o,sep:l})}))}},{key:"buildApiWidthNamespace",value:function(t){var e=this,n=t.namespace,i=t.apis,a=t.devBaseUrl,o=t.prodBaseUrl,r=t.isDevMode,s=t.sep;i.forEach((function(t){var i=t.name,c=t.method,l=t.path,u=t.mockPath,p=t.params,d=t.desc,f="".concat(n).concat(s).concat(i),h=r?"".concat(a).concat(u,"?random=").concat(Math.random()):"".concat(o).concat(l);Object.defineProperty(e.api,f,{value:function(t,e){var n=Mt()(t)?p:qt()(p,t);return Bt(Wt(qt()({url:h,method:c,desc:d},e),n))}})}))}}]),t}();function Wt(t,e){return"POST"===t.method||"PUT"===t.method||"PATCH"===t.method?t.data=e:"GET"===t.method&&(t.params=e),t}var Gt=new Jt(Ht({apis:Ut},Et)).api,Kt={install:function(t){t.prototype.$api=Gt,t.prototype.$ajax=Vt.a}},Qt=window.plus?window.plus.storage:localStorage,Xt=function(t){window.LocaStorage.setItem("TOKEN_STR",t)},Yt=function(){window.LocaStorage.clear()},Zt=function(){window.LocaStorage.clear("TOKEN_STR")},te=function(t,e){window.LocaStorage.setItem(t,e)},ee={install:function(t){window.LocaStorage=window.plus?window.plus.storage:localStorage,t.prototype.$storage=Qt,t.prototype.$setToken=Xt,t.prototype.$clearStorage=Yt,t.prototype.$clearToken=Zt,t.prototype.$setStorage=te}},ne=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(St["a"])(this,t);var n=this;if(window.hasOwnProperty("plus")){Object.assign(n,{id:"barcode",barCodeType:"QR",style:{left:"0px",width:"100%",position:"static"}},e),n.barcode=plus.barcode.create(n.id,[plus.barcode.QR],n.style);var i=plus.webview.create();n.w=i,n.barcode.onmarked=function(t,e){n.onSuccess(t,e)},i.append(n.barcode),n.createView(i),n.barcode.start()}else alert("您当前环境不支持扫码")}return Object(_t["a"])(t,[{key:"setStyle",value:function(t){this.barcode.setStyle(t)}},{key:"onSuccess",value:function(t,e){}},{key:"onError",value:function(){}},{key:"start",value:function(){this.barcode.start()}},{key:"close",value:function(){this.barcode.close()}},{key:"cancel",value:function(){this.barcode.cancel()}},{key:"createView",value:function(t){var e=this,n=new plus.nativeObj.View("backVew",{top:"0px",left:"0px",height:"40px",width:"10%"},[{tag:"img",id:"backBar",src:"./static/androidIcon/back.png",position:{top:"10px",left:"10px",width:"16px",height:"16px"}}]),i=new plus.nativeObj.View("content",{top:"0px",left:"0px",height:"100%",width:"100%"},[{tag:"font",id:"scanTitle",text:"扫描二维码",textStyles:{size:"18px",color:"#ffffff"},position:{top:"0px",left:"0px",width:"100%",height:"40px"}},{tag:"font",id:"scanTips",text:this.name,textStyles:{size:"14px",color:"#ffffff",whiteSpace:"normal"},position:{top:"90px",left:"10%",width:"80%",height:"wrap_content"}}]),a=new plus.nativeObj.View("xc",{top:"0px",right:"0px",height:"10%",width:"100%"},[{tag:"font",id:"scanXc",text:"相册",textStyles:{size:"18px",color:"#ffffff"},position:{top:"0px",right:"10px",width:"10%",height:"40px"}}]),o=new plus.nativeObj.View("scanBarVew",{top:"80%",left:"54%",height:"10%",width:"30%"},[{tag:"img",id:"scanBar",src:"./static/androidIcon/sdt.png",position:{width:"40px",left:"36%",height:"40px"}},{tag:"font",id:"font",text:"打开手电筒",textStyles:{size:"14px",color:"#ffffff"},position:{width:"100%",top:"20%",left:"6%"}}]),r=new plus.nativeObj.View("srbh",{top:"80%",left:"18%",height:"10%",width:"30%"},[{tag:"img",id:"srbh",src:"./static/androidIcon/sr.png",position:{width:"40px",left:"36%",height:"40px"}},{tag:"font",id:"font",text:"输入编号入库",textStyles:{size:"14px",color:"#ffffff"},position:{width:"100%",top:"20%",left:"4%"}}]);e.insertMenu(),t.append(i),t.append(a),t.append(n),t.append(r),t.append(o),t.show();var s=!0;n.addEventListener("click",(function(n){e.cancel(),e.close(),t.close()}),!1),o.addEventListener("click",(function(t){s?(e.barcode.setFlash(s),s=!1):(e.barcode.setFlash(s),s=!0)}),!1),a.addEventListener("click",(function(){plus.gallery.pick((function(t){plus.barcode.scan(t,e.onSuccess,(function(){e.onError()}))}),(function(t){console.error(t)}),{animation:!0,filter:"image",multiple:!1})})),r.addEventListener("click",(function(t){e.manualInput()}),!1)}},{key:"insertMenu",value:function(){}},{key:"manualInput",value:function(){}}]),t}(),ie=(n("a15b"),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(St["a"])(this,t);var n=this;window.hasOwnProperty("plus")?(Object.assign(n,{name:"appDB",path:"_doc/appDB.db"},e),n.plusSqlLite=plus.sqlite,n.openDatabase()):alert("您当前环境不支持数据库")}return Object(_t["a"])(t,[{key:"openDatabase",value:function(){var t=this;t.plusSqlLite.openDatabase({name:t.name,path:t.path,success:function(t){console.log("openDatabase success!")},fail:function(t){console.error("openDatabase failed: "+JSON.stringify(t))}})}},{key:"executeSql",value:function(t,e,n){var i=this;i.isOpenDatabase()?i.plusSqlLite.executeSql({name:i.name,sql:t,success:function(t){void 0!==e&&"function"===typeof e&&e(t)},fail:function(t){void 0!==n&&"function"===typeof n&&n(t)}}):console.error("数据库没有打开")}},{key:"selectSql",value:function(t,e,n){var i=this;i.isOpenDatabase()?i.plusSqlLite.selectSql({name:i.name,sql:t,success:function(t){void 0!==e&&"function"===typeof e&&e(t)},fail:function(t){void 0!==n&&"function"===typeof n&&n(t)}}):console.error("数据库没有打开")}},{key:"isOpenDatabase",value:function(){var t=this;return t.plusSqlLite.isOpenDatabase({name:t.name,path:t.path})}},{key:"closeDatabase",value:function(){var t=this;t.plusSqlLite.closeDatabase({name:t.name,success:function(t){console.log("closeDatabase success!")},fail:function(t){console.error("closeDatabase failed: "+JSON.stringify(t))}})}},{key:"transactionDb",value:function(t){var e=this;e.plusSqlLite.transaction({name:e.name,operation:t,success:function(t){console.log("transaction success!")},fail:function(t){console.error("transaction failed: "+JSON.stringify(t))}})}},{key:"createTableTest",value:function(t,e){var n=this;return new Promise((function(i,a){if(n.isOpenDatabase()){var o=Object.keys(e),r="CREATE TABLE IF NOT EXISTS ".concat(t," (_id integer primary key autoincrement, ").concat(o.join(" varchar(20),")," varchar(20))");n.executeSql(r,(function(t){i(results)}),(function(t){a(t)}))}else a("数据库未打开！")}))}},{key:"insert",value:function(t,e){var n=this;return new Promise((function(i,a){if(n.isOpenDatabase()){var o=Object.keys(e),r=[],s="";o.forEach((function(t){r.push(e[t]),s+="?, "})),s=s.substring(0,s.length-2);var c="INSERT INTO ".concat(t," (").concat(o.join(", "),") VALUES (").concat(r.join(", "),")");n.executeSql(c,(function(t){i(results)}),(function(t){a(t)}))}else a("数据库未打开！")}))}},{key:"queryAll",value:function(t,e){var n=this;return new Promise((function(i,a){if(n.isOpenDatabase()){var o=Object.keys(e),r=[];o.forEach((function(t){r.push("WHERE "+t+"="+e[t])}));var s="SELECT * FROM ".concat(t," ").concat(r.join(", "));n.selectSql(s,(function(t){i(results)}),(function(t){a(t)}))}else a("数据库未打开！")}))}}]),t}()),ae=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(St["a"])(this,t);var n=this;window.hasOwnProperty("plus")?(Object.assign(n,{enableHighAccuracy:!1,timeout:1e4,maximumAge:5e3,provider:"system",geocode:!0},e),n.currentPosition=null,n.getCurrentPosition()):alert("当前设备不支持定位")}return Object(_t["a"])(t,[{key:"getCurrentPosition",value:function(){var t=this,e={enableHighAccuracy:this.enableHighAccuracy,timeout:this.timeout,maximumAge:this.maximumAge,provider:this.provider,coordsType:this.coordsType,geocode:this.geocode};plus.geolocation.getCurrentPosition((function(e){t.currentPosition=e}),(function(t){alert("定位出错"+JSON.stringify(t))}),e)}},{key:"watchPosition",value:function(t){var e={enableHighAccuracy:this.enableHighAccuracy,timeout:this.timeout,maximumAge:this.maximumAge,provider:this.provider,coordsType:this.coordsType,geocode:this.geocode},n=plus.geolocation.watchPosition((function(e){void 0!==t&&"function"===typeof t&&t(e)}),(function(t){alert("定位出错"+JSON.stringify(t))}),e);return n}},{key:"clearWatch",value:function(t){plus.geolocation.clearWatch(t)}},{key:"getPosition",value:function(){return JSON.stringify(this.currentPosition)}}]),t}(),oe={install:function(t){t.prototype.$BarCoode=ne,t.prototype.$SqlLite=ie,t.prototype.$Geolocation=ae}},re=n("a7bd"),se=n.n(re);n("8e78");i["default"].config.productionTip=!1,i["default"].use(Kt),i["default"].use(ee),i["default"].use(oe),i["default"].use(se.a),new i["default"]({router:gt,store:xt,render:function(t){return t(h)}}).$mount("#app")},"57ef":function(t,e,n){},"6d4d":function(t,e,n){"use strict";var i=n("bc94"),a=n.n(i);a.a},"778f":function(t,e,n){"use strict";var i=n("987f"),a=n.n(i);a.a},"85ec":function(t,e,n){},"987f":function(t,e,n){},"9ad8":function(t,e,n){"use strict";var i=n("a2f9"),a=n.n(i);a.a},a2f9:function(t,e,n){},bc94:function(t,e,n){},be55:function(t,e,n){"use strict";var i=n("c945"),a=n.n(i);a.a},c397:function(t,e,n){},c945:function(t,e,n){},e153:function(t,e,n){"use strict";var i=n("57ef"),a=n.n(i);a.a},e3fc:function(t,e,n){},f008:function(t,e,n){var i={"./system.js":"43b5"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="f008"}});
//# sourceMappingURL=app.55ad19f1.js.map