(function(t){function e(e){for(var s,o,c=e[0],r=e[1],l=e[2],u=0,m=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,c=1;c<a.length;c++){var r=a[c];0!==n[r]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01bc":function(t,e,a){t.exports=a.p+"img/compass.40b7d00b.svg"},"0a0e":function(t,e,a){t.exports=a.p+"img/scan.8693f657.svg"},"0cf5":function(t,e,a){t.exports=a.p+"img/wechat.03883c8e.svg"},"0f62":function(t,e,a){t.exports=a.p+"img/user.4d7104c2.svg"},"1f4f":function(t,e,a){t.exports=a.p+"img/contact.ffc95ce6.svg"},"216f":function(t,e,a){"use strict";a("c990")},"26ee":function(t,e,a){"use strict";a("d523")},"31fb":function(t,e,a){t.exports=a.p+"img/album.6e72989e.svg"},"32a9":function(t,e,a){t.exports=a.p+"img/friendadd-fill.da3ec019.svg"},"33b7":function(t,e,a){"use strict";a("c4d5")},"36ba":function(t,e,a){"use strict";a("e64f")},"4be6":function(t,e,a){},"51f2":function(t,e,a){t.exports=a.p+"img/search.8f10dfa0.svg"},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=a("8c4f"),i=a("43f9"),o=a.n(i),c=(a("51de"),a("e094"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)}),r=[],l={name:"App"},d=l,u=(a("5c0b"),a("2877")),m=Object(u["a"])(d,c,r,!1,null,null,null),p=m.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-bar",{attrs:{title:"平安成电智慧通行"}}),s("div",{class:"homepage "+(t.loading?"loading":"")},[s("div",{staticClass:"snack-bar",class:t.hiddenLoading&&t.showSnack?"":"snack-bar-hidden"},[s("md-toolbar",{staticClass:"md-elevation-5 snack-content"},[s("div",{staticStyle:{flex:"1"}},[t._v("授权有效！")]),s("md-button",{staticClass:"md-icon-button md-primary",on:{click:function(e){t.showSnack=!1}}},[t._v("关闭")])],1)],1),t.hiddenLoading?t._e():s("div",{staticClass:"spinner"},[s("md-progress-spinner",{staticClass:"md-primary",attrs:{"md-stroke":4,"md-diameter":50,"md-mode":"indeterminate"}}),s("div",{staticClass:"spinner-text"},[t._v("正在进行扫码登记")])],1),t.hiddenLoading?s("div",{staticClass:"pass-content"},[s("div",{staticClass:"pass-result"},[t._v(t._s(t.textContent))]),s("md-list",{staticClass:"pass-list"},[s("md-list-item",[s("svg",{staticClass:"list-icon",attrs:{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",tabindex:"-1",title:"Person","data-ga-event-category":"material-icons","data-ga-event-action":"click","data-ga-event-label":"Person"}},[s("path",{attrs:{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}})]),s("div",{staticClass:"md-list-item-text list-title"},[t._v("用户姓名")]),s("div",{staticClass:"md-list-action list-text",on:{click:t.clickName}},[t._v(t._s(t.name))])]),s("md-list-item",[s("svg",{staticClass:"list-icon",attrs:{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",tabindex:"-1",title:"Group","data-ga-event-category":"material-icons","data-ga-event-action":"click","data-ga-event-label":"Group"}},[s("path",{attrs:{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}})]),s("div",{staticClass:"md-list-item-text list-title"},[t._v("登记类型")]),s("div",{staticClass:"md-list-action list-text"},[t._v(t._s(t.personType))])]),s("md-list-item",[s("svg",{staticClass:"list-icon",attrs:{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",tabindex:"-1",title:"Timer","data-ga-event-category":"material-icons","data-ga-event-action":"click","data-ga-event-label":"Timer"}},[s("path",{attrs:{d:"M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}})]),s("div",{staticClass:"md-list-item-text list-title"},[t._v("登记时间")]),s("div",{staticClass:"md-list-action list-text time-text"},[s("div",{staticClass:"line-text"},[t._v(t._s(t.timeStr)+" "+t._s(t.timeStr))])])])],1)],1):t._e(),t.hiddenLoading?s("div",{staticClass:"pass-button"},[s("md-button",{staticClass:"md-primary md-raised"},[s("span",{staticClass:"pass-button-content",on:{click:function(e){return t.$router.replace("/qr")}}},[t._v("前往个人二维码")])])],1):t._e(),t.hiddenLoading?s("div",{staticClass:"logo"},[s("img",{staticClass:"logo-img",attrs:{src:a("cf05"),alt:""}})]):t._e()])],1)},f=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"true"===t.showAppBar?a("div",{staticClass:"app-bar"},[a("svg",{staticClass:"close-icon",attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2007",width:"200",height:"200"},on:{click:t.back}},[a("path",{attrs:{d:"M519.02036023 459.47959989L221.8941505 162.35411435a37.07885742 37.07885742 0 1 0-52.45354772 52.40502656l297.12476134 297.15010821L169.44060278 809.05863314a37.07885742 37.07885742 0 1 0 52.42964924 52.42892505l297.15010821-297.12476136 297.15010822 297.12476136a37.07885742 37.07885742 0 1 0 52.42892504-52.40430237l-297.12476135-297.1740067 297.12476135-297.12548553a37.07885742 37.07885742 0 1 0-52.42892504-52.42964924L519.04498291 459.47959989z",fill:"#2c2c2c","p-id":"2008"}})]),a("div",{staticClass:"title"},[t._v(t._s(t.title))])]):t._e()},h=[],b={props:{title:String},data(){return{showAppBar:localStorage.getItem("showAppBar")}},methods:{back(){this.$router.go(-1)}}},C=b,_=(a("c1c6"),Object(u["a"])(C,g,h,!1,null,"8bfe50f8",null)),x=_.exports,w={name:"HomePage",components:{AppBar:x},data(){return{loading:!0,hiddenLoading:!1,showSnack:!1,timeStr:(new Date).toLocaleString(),name:"试着点我三次",personType:localStorage.getItem("personType")||"未设置",clickCount:0}},computed:{textContent(){const{type:t}=this.$route.query,e=t&&"out"===t?localStorage.getItem("leaveText"):localStorage.getItem("enterText");return e||"尚未设置，请点击用户姓名进入设置页"}},mounted(){document.title="平安成电智慧通行",setTimeout(()=>{this.loading=!1,setTimeout(()=>{this.hiddenLoading=!0,this.showSnack=!0,setTimeout(()=>{this.showSnack=!1},3e3)},500)},1e3);const t=localStorage.getItem("name");t&&(this.name=t);const e=new Date,a=e.getHours(),s=e.getMinutes(),n=e.getSeconds(),i=[e.getFullYear(),e.getMonth()+1,e.getDate()].map(t=>t.toString().padStart(2,"0")).join("-"),o=[a,s,n].map(t=>t.toString().padStart(2,"0")).join(":");this.timeStr=`${i} ${o}`},methods:{clickName(){this.clickCount+=1,this.clickCount>3&&(this.clickCount=0,this.$router.push("/setting"))}}},y=w,k=(a("33b7"),Object(u["a"])(y,v,f,!1,null,"4d2c5708",null)),S=k.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-page"},[s("div",{staticClass:"progress-bar"}),s("img",{staticClass:"wechat-icon",attrs:{src:a("0cf5"),alt:""}}),s("div",{staticClass:"login-tips"},[t._v("近期你已经授权登录过电子科技大学保卫处")]),s("div",{staticClass:"login-tips"},[t._v("自动登录中")])])}];let O=null;var $={name:"LoginPage",props:{},data(){return{amount:0}},mounted(){const{type:t}=this.$route.query,e=void 0!==t?"?type="+t:"";document.title="",O=setInterval(()=>{this.amount<100&&(this.amount+=parseInt(80*Math.random())),this.amount>=100&&(this.$router.replace("/home"+e),O&&clearInterval(O))},300)}},B=$,A=(a("a008"),Object(u["a"])(B,T,j,!1,null,"1497f851",null)),M=A.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-bar",{attrs:{title:"平安成电智慧通行"}}),s("div",{staticClass:"qr-page-wrapper"},[s("div",{staticClass:"qr-page md-elevation-2"},[s("div",{staticClass:"qr-title"},[t._v("行人二维码")]),s("img",{staticClass:"qr-img",attrs:{src:a("6585"),alt:""}}),s("div",{staticClass:"qr-text"},[t._v("二维码剩余有效时间"+t._s(t.time)+"秒")]),s("md-button",{staticClass:"md-primary md-raised"},[s("span",{staticClass:"qr-button-content",on:{click:function(e){return t.$router.push("/rule")}}},[t._v("查看通行规则")])])],1)])],1)},E=[],L={name:"QRCodePage",components:{AppBar:x},data(){return{time:300}},mounted(){setInterval(()=>{this.time-=2},2e3)}},q=L,I=(a("5f78"),Object(u["a"])(q,P,E,!1,null,"816a9cba",null)),z=I.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("app-bar",{attrs:{title:"平安成电智慧通行"}}),a("div",{staticClass:"spinner"},[a("md-progress-spinner",{staticClass:"md-primary",attrs:{"md-stroke":4,"md-diameter":50,"md-mode":"indeterminate"}})],1)],1)},D=[],H={name:"PassRulePage",components:{AppBar:x}},N=H,V=(a("216f"),Object(u["a"])(N,F,D,!1,null,"93eac55c",null)),R=V.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wechat-page"},[s("div",{staticClass:"wechat-header"},[s("div",{staticClass:"title"},[t._v("微信")]),s("div",{staticClass:"trailing"},[s("img",{staticClass:"icon-button",attrs:{src:a("51f2")}}),s("img",{staticClass:"icon-button",attrs:{src:a("eef4")},on:{click:function(e){t.showFloatTab=!t.showFloatTab}}}),s("transition",{attrs:{name:"float-in"}},[t.showFloatTab?s("div",{staticClass:"float-tab"},[s("div",{staticClass:"float-mask",on:{click:function(e){t.showFloatTab=!1}}}),t._l(t.floatTabs,(function(e,a){return s("div",{key:a,staticClass:"float-tab-item",on:{click:t.scan}},[s("img",{staticClass:"float-tab-icon",attrs:{src:e.icon,alt:""}}),s("div",{staticClass:"float-tab-name"},[t._v(t._s(e.name))])])}))],2):t._e()])],1)]),s("div",{staticClass:"wechat-content"},t._l(t.messages,(function(e,a){return s("div",{key:a,staticClass:"message-item"},[s("div",{staticClass:"avatar",style:e.style}),s("div",{staticClass:"message-body"},[s("div",{staticClass:"header"},[s("div",{staticClass:"name"},[t._v(t._s(e.name))]),s("div",{staticClass:"message-time"},[t._v(t._s(e.time))])]),s("div",{staticClass:"content"},[t._v(t._s(e.content))])])])})),0),s("div",{staticClass:"wechat-tab"},t._l(t.tabs,(function(e,a){return s("div",{key:a,staticClass:"tab-item"},[s("img",{staticClass:"tab-icon",attrs:{src:e.icon}}),e.selected?s("div",{staticClass:"tab-name selected"},[t._v(t._s(e.name))]):s("div",{staticClass:"tab-name"},[t._v(t._s(e.name))])])})),0)])},J=[];const Q="东海帝王,爱你哟~\n家人群,姑妈:你上学好久回来啊？\n妹妹,[转账]朋友已确认收款\n文件传输助手,论文.pdf\n订阅号消息,极市平台:如何用深度学习来做检索...\n开源之夏学生交流群,LZY:我明天就位\n中国银行微银行,交易提醒\n2021届本科通知群,叶老师:@小朱 @10班陈胜 打卡\n指艺推拿预约专用😄2,希:@A指艺王建国 我说话给忘了，后天...\n2022暑假留校群,叶老师:打卡".split("\n").map((t,e)=>{const[s,n]=t.split(","),i=new Date(new Date-parseInt(3600*Math.random()*1e3*12)),o=i.getHours().toString().padStart(2,"0"),c=i.getMinutes().toString().padStart(2,"0"),r=[o,c].join(":"),l=a("b39a"),d=`\n    background: url(${l}) no-repeat 0 ${70*-e}px;\n    background-size: 47px 678px;`;return{avatar:l,name:s,content:n,time:r,style:d}});var U={name:"WechatPage",data(){return{showFloatTab:!1,messages:Q,tabs:[{name:"微信",icon:a("9a7b"),selected:!0},{name:"通讯录",icon:a("1f4f"),selected:!1},{name:"发现",icon:a("01bc"),selected:!1},{name:"我",icon:a("0f62"),selected:!1}],floatTabs:[{name:"发起群聊",icon:a("5f66"),selected:!0},{name:"添加朋友",icon:a("32a9"),selected:!1},{name:"扫一扫",icon:a("0a0e"),selected:!1},{name:"收付款",icon:a("755e"),selected:!1},{name:"帮助与反馈",icon:a("eb0a"),selected:!1}]}},mounted(){console.log(this.messages)},methods:{scan(){this.showFloatTab=!1,setTimeout(()=>{this.$router.push("./scan")},200)}}},Y=U,W=(a("26ee"),Object(u["a"])(Y,G,J,!1,null,"219e63b2",null)),Z=W.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"scan-page"},[s("div",{staticClass:"content"},[s("div",{staticClass:"video-container"},[s("video",{attrs:{id:"video",width:"480",height:"640",autoplay:""}})]),s("div",{staticClass:"top-content top-icons icon-group"},[s("img",{staticClass:"icon-button",attrs:{src:a("bf37")}}),s("img",{staticClass:"icon-button",attrs:{src:a("f51c")}})]),s("div",{staticClass:"bottom-content"},[s("div",{staticClass:"tip"},[t._v("扫二维码 / 条码 / 小程序码")]),s("div",{staticClass:"bottom-icons icon-group"},[s("img",{staticClass:"icon-button",attrs:{src:a("97a0")}}),s("img",{staticClass:"icon-button",attrs:{src:a("31fb")}})])])]),s("div",{staticClass:"tab"},[s("div",{staticClass:"tab-name"},[t._v("扫码")]),s("div",{staticClass:"tab-name"},[t._v("识物")]),s("div",{staticClass:"tab-name"},[t._v("翻译")])])])}];function tt(t=new HTMLVideoElement){return new Promise((e,a)=>{const s=()=>{a()};if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){let a={facingMode:{ideal:"environment"},audio:!1,video:{width:{ideal:480},height:{ideal:640}}};navigator.mediaDevices.getUserMedia({video:a}).then((function(a){t.srcObject=a,t.play(),t.addEventListener("loadedmetadata",(function(){e()}))})).catch(t=>s(t))}else s()})}var et={mounted(){const t=document.getElementById("video");tt(t).then(()=>{setTimeout(()=>{this.$router.replace("./login")},1e3)}).catch(()=>{alert("打开摄像头出错！")})}},at=et,st=(a("36ba"),Object(u["a"])(at,K,X,!1,null,"7a49a17c",null)),nt=st.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-page"},[a("app-bar",{attrs:{title:"设置"}}),a("div",{staticClass:"page-content"},[a("md-list",[a("md-subheader",[t._v("登录页信息")]),a("md-list-item",[a("md-field",[a("label",[t._v("入校提示信息")]),a("md-input",{model:{value:t.enterText,callback:function(e){t.enterText=e},expression:"enterText"}})],1)],1),a("md-list-item",[a("md-field",[a("label",[t._v("出校校提示信息")]),a("md-input",{model:{value:t.leaveText,callback:function(e){t.leaveText=e},expression:"leaveText"}})],1)],1),a("md-list-item",[a("md-field",[a("label",[t._v("身份类型")]),a("md-input",{model:{value:t.personType,callback:function(e){t.personType=e},expression:"personType"}})],1)],1),a("md-list-item",[a("md-field",[a("label",[t._v("名字")]),a("md-input",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),a("md-divider"),a("md-subheader",[t._v("其他设置")]),a("md-list-item",[a("div",{staticClass:"md-list-item-text"},[a("span",[t._v("展示 AppBar")]),a("span",[t._v("如在微信内使用，则无需展示 AppBar")])]),a("md-switch",{model:{value:t.showAppBar,callback:function(e){t.showAppBar=e},expression:"showAppBar"}})],1)],1)],1)],1)},ot=[];const ct={enterText:"研究生用户，入校授权有效！",leaveText:"研究生用户，出校登记有效！",personType:"研究生（硕士）",name:"试着点我三次",showAppBar:!0};function rt(t){const e={true:!0,false:!1};return t in e?e[t]:t}var lt={components:{AppBar:x},data(){return Object.keys(ct).reduce((t,e)=>({...t,[e]:"加载中"}),{})},watch:Object.keys(ct).reduce((t,e)=>({...t,[e]:t=>{localStorage.setItem(e,t),console.log("writing",e,t)}}),{}),mounted(){Object.keys(ct).forEach(t=>{const e=localStorage.getItem(t);console.log("getting",t,e),this[t]=null!==e?rt(e):ct[t]})}},dt=lt,ut=Object(u["a"])(dt,it,ot,!1,null,"118b44a9",null),mt=ut.exports,pt=a("9483");Object(pt["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),s["default"].config.productionTip=!1,s["default"].use(o.a),s["default"].use(n["a"]);const vt=new n["a"]({mode:"hash",base:"Real-Qingshui-Pass",routes:[{path:"/login",component:M},{path:"/home",component:S},{path:"/qr",component:z},{path:"/rule",component:R},{path:"/",component:Z},{path:"/scan",component:nt},{path:"/setting",component:mt}]});new s["default"]({router:vt,render:t=>t(p)}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5f66":function(t,e,a){t.exports=a.p+"img/chat.2c994b3b.svg"},"5f78":function(t,e,a){"use strict";a("aac6")},6585:function(t,e,a){t.exports=a.p+"img/qr.4c828820.jpg"},"755e":function(t,e,a){t.exports=a.p+"img/pay.43d89c3f.svg"},"91cb":function(t,e,a){},"97a0":function(t,e,a){t.exports=a.p+"img/qr-icon.39629214.svg"},"9a7b":function(t,e,a){t.exports=a.p+"img/chat-green.48174bc4.svg"},"9c0c":function(t,e,a){},a008:function(t,e,a){"use strict";a("91cb")},aac6:function(t,e,a){},b39a:function(t,e,a){t.exports=a.p+"img/avatars.64b50ba6.jpg"},bf37:function(t,e,a){t.exports=a.p+"img/close.091a88e3.svg"},c1c6:function(t,e,a){"use strict";a("4be6")},c4d5:function(t,e,a){},c990:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.0ed7fb73.png"},d523:function(t,e,a){},e64f:function(t,e,a){},eb0a:function(t,e,a){t.exports=a.p+"img/mail-fill.e33656e3.svg"},eef4:function(t,e,a){t.exports=a.p+"img/add.ed66e07e.svg"},f51c:function(t,e,a){t.exports=a.p+"img/more.4ba4c92b.svg"}});
//# sourceMappingURL=app.4ba186a5.js.map