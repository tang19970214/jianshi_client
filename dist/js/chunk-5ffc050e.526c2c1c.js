(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ffc050e"],{1276:function(e,r,t){"use strict";var a=t("d784"),o=t("44e7"),s=t("825a"),l=t("1d80"),i=t("4840"),n=t("8aa5"),c=t("50c4"),u=t("14c3"),p=t("9263"),d=t("d039"),f=[].push,m=Math.min,g=4294967295,h=!d((function(){return!RegExp(g,"y")}));a("split",2,(function(e,r,t){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var a=String(l(this)),s=void 0===t?g:t>>>0;if(0===s)return[];if(void 0===e)return[a];if(!o(e))return r.call(a,e,s);var i,n,c,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,h=new RegExp(e.source,d+"g");while(i=p.call(h,a)){if(n=h.lastIndex,n>m&&(u.push(a.slice(m,i.index)),i.length>1&&i.index<a.length&&f.apply(u,i.slice(1)),c=i[0].length,m=n,u.length>=s))break;h.lastIndex===i.index&&h.lastIndex++}return m===a.length?!c&&h.test("")||u.push(""):u.push(a.slice(m)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,t){var o=l(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,o,t):a.call(String(o),r,t)},function(e,o){var l=t(a,e,this,o,a!==r);if(l.done)return l.value;var p=s(e),d=String(this),f=i(p,RegExp),v=p.unicode,b=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(h?"y":"g"),L=new f(h?p:"^(?:"+p.source+")",b),G=void 0===o?g:o>>>0;if(0===G)return[];if(0===d.length)return null===u(L,d)?[d]:[];var x=0,T=0,y=[];while(T<d.length){L.lastIndex=h?T:0;var $,w=u(L,h?d:d.slice(T));if(null===w||($=m(c(L.lastIndex+(h?0:T)),d.length))===x)T=n(d,T,v);else{if(y.push(d.slice(x,T)),y.length===G)return y;for(var k=1;k<=w.length-1;k++)if(y.push(w[k]),y.length===G)return y;T=x=$}}return y.push(d.slice(x)),y}]}),!h)},"1dde":function(e,r,t){var a=t("d039"),o=t("b622"),s=t("2d00"),l=o("species");e.exports=function(e){return s>=51||!a((function(){var r=[],t=r.constructor={};return t[l]=function(){return{foo:1}},1!==r[e](Boolean).foo}))}},"438b":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"carGroup"}},[t("el-form",{ref:"dataForm_share",attrs:{rules:e.rules,model:e.carGroupList,"label-position":"top","label-width":"80px"}},[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{size:"medium",label:"乘客姓名",prop:"name"}},[t("el-input",{attrs:{placeholder:"請輸入乘客姓名"},model:{value:e.carGroupList.name,callback:function(r){e.$set(e.carGroupList,"name",r)},expression:"carGroupList.name"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{size:"medium",label:"鄉鎮",prop:"town"}},[t("el-select",{attrs:{placeholder:"請選擇鄉鎮"},model:{value:e.carGroupList.town,callback:function(r){e.$set(e.carGroupList,"town",r)},expression:"carGroupList.town"}},[t("el-option",{attrs:{label:"尖石鄉",value:"SSTW"}})],1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{size:"medium",label:"村里",prop:"village"}},[t("el-input",{attrs:{placeholder:"請輸入村里"},model:{value:e.carGroupList.village,callback:function(r){e.$set(e.carGroupList,"village",r)},expression:"carGroupList.village"}})],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{size:"medium",label:"身分",prop:"userType"}},[t("el-select",{attrs:{placeholder:"請選擇身分"},model:{value:e.carGroupList.userType,callback:function(r){e.$set(e.carGroupList,"userType",r)},expression:"carGroupList.userType"}},[t("el-option",{attrs:{label:"一般",value:"一般"}}),t("el-option",{attrs:{label:"學生",value:"學生"}}),t("el-option",{attrs:{label:"年長者",value:"年長者"}})],1)],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{size:"medium",label:"預約日期",prop:"reserveDate"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"請選擇日期","value-format":"yyyy-MM-dd","picker-options":e.disBeforeTime,clearable:!1},model:{value:e.carGroupList.reserveDate,callback:function(r){e.$set(e.carGroupList,"reserveDate",r)},expression:"carGroupList.reserveDate"}})],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{size:"medium",label:"上車時間",prop:"fromTime"}},[t("el-time-select",{attrs:{"picker-options":{start:e.timeStartTime,step:"00:10",end:"20:00"},placeholder:"請選擇時間",clearable:!1,disabled:!e.carGroupList.reserveDate},model:{value:e.carGroupList.fromTime,callback:function(r){e.$set(e.carGroupList,"fromTime",r)},expression:"carGroupList.fromTime"}})],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{size:"medium",label:"是否轉乘",prop:"hasTransfer"}},[t("el-select",{attrs:{placeholder:"請選擇是否轉乘"},model:{value:e.carGroupList.hasTransfer,callback:function(r){e.$set(e.carGroupList,"hasTransfer",r)},expression:"carGroupList.hasTransfer"}},[t("el-option",{attrs:{label:"是",value:"是"}}),t("el-option",{attrs:{label:"否",value:"否"}})],1)],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{size:"medium",label:"轉乘運具",prop:"transferTraffic"}},[t("el-select",{attrs:{placeholder:"請選擇是否轉乘"},model:{value:e.carGroupList.transferTraffic,callback:function(r){e.$set(e.carGroupList,"transferTraffic",r)},expression:"carGroupList.transferTraffic"}},[t("el-option",{attrs:{label:"臺鐵",value:"臺鐵"}}),t("el-option",{attrs:{label:"公車客運",value:"公車客運"}}),t("el-option",{attrs:{label:"醫療專車",value:"醫療專車"}}),t("el-option",{attrs:{label:"計程車",value:"計程車"}}),t("el-option",{attrs:{label:"小黃公車",value:"小黃公車"}}),t("el-option",{attrs:{label:"幸福巴士",value:"幸福巴士"}}),t("el-option",{attrs:{label:"公所接駁巴士",value:"公所接駁巴士"}}),t("el-option",{attrs:{label:"噗噗共乘",value:"噗噗共乘"}})],1)],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{size:"medium",label:"轉乘業者",prop:"transferOperator"}},[t("el-select",{attrs:{placeholder:"請選擇是否轉乘"},model:{value:e.carGroupList.transferOperator,callback:function(r){e.$set(e.carGroupList,"transferOperator",r)},expression:"carGroupList.transferOperator"}},[t("el-option",{attrs:{label:"尖石鄉DRTS",value:"尖石鄉DRTS"}}),t("el-option",{attrs:{label:"尖石鄉基本民行",value:"尖石鄉基本民行"}})],1)],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{size:"medium",label:"轉乘目的",prop:"transferPurpose"}},[t("el-select",{attrs:{placeholder:"請選擇是否轉乘"},model:{value:e.carGroupList.transferPurpose,callback:function(r){e.$set(e.carGroupList,"transferPurpose",r)},expression:"carGroupList.transferPurpose"}},[t("el-option",{attrs:{label:"就醫",value:"就醫"}}),t("el-option",{attrs:{label:"就學",value:"就學"}}),t("el-option",{attrs:{label:"就養",value:"就養"}}),t("el-option",{attrs:{label:"日常",value:"日常"}})],1)],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{size:"medium",label:"上車地點",prop:"fromAddr"}},[t("el-input",{attrs:{placeholder:"請輸入上車地點"},on:{change:e.getFromGeo},model:{value:e.carGroupList.fromAddr,callback:function(r){e.$set(e.carGroupList,"fromAddr",r)},expression:"carGroupList.fromAddr"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{size:"medium",label:"上車地點經度",prop:"fromLng"}},[t("el-input",{attrs:{placeholder:"請輸入上車地點經度"},model:{value:e.carGroupList.fromLng,callback:function(r){e.$set(e.carGroupList,"fromLng",r)},expression:"carGroupList.fromLng"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{size:"medium",label:"上車地點緯度",prop:"fromLat"}},[t("el-input",{attrs:{placeholder:"請輸入上車地點緯度"},model:{value:e.carGroupList.fromLat,callback:function(r){e.$set(e.carGroupList,"fromLat",r)},expression:"carGroupList.fromLat"}})],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{size:"medium",label:"下車地點",prop:"toAddr"}},[t("el-input",{attrs:{placeholder:"請輸入下車地點"},on:{change:e.getToGeo},model:{value:e.carGroupList.toAddr,callback:function(r){e.$set(e.carGroupList,"toAddr",r)},expression:"carGroupList.toAddr"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{size:"medium",label:"下車地點經度",prop:"toLng"}},[t("el-input",{attrs:{placeholder:"請輸入下車地點經度"},model:{value:e.carGroupList.toLng,callback:function(r){e.$set(e.carGroupList,"toLng",r)},expression:"carGroupList.toLng"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{size:"medium",label:"下車地點緯度",prop:"toLat"}},[t("el-input",{attrs:{placeholder:"請輸入下車地點緯度"},model:{value:e.carGroupList.toLat,callback:function(r){e.$set(e.carGroupList,"toLat",r)},expression:"carGroupList.toLat"}})],1)],1)],1),t("div",{staticClass:"w-100 mb-30 d-flex align-items-center justify-content-center"},[t("el-button",{staticClass:"order_btn",on:{click:e.reservation}},[e._v("預約")])],1)],1)},o=[],s=(t("99af"),t("ac1f"),t("1276"),t("d282")),l=t("c1df"),i=t.n(l),n={data:function(){return{disBeforeTime:{disabledDate:function(e){return e.getTime()<Date.now()-864e5}},carGroupList:{name:window.localStorage.getItem("userName"),town:"SSTW",village:"",userType:"",reserveDate:"",fromTime:"",fromAddr:"",fromLng:"",fromLat:"",toTime:"",toAddr:"",toLng:"",toLat:"",hasTransfer:"",transferTraffic:"",transferOperator:"",transferPurpose:""},rules:{name:[{required:!0,message:"乘客姓名不能為空",trigger:"blur"}],town:[{required:!0,message:"請選擇鄉鎮",trigger:"change"}],village:[{required:!0,message:"村里不能為空",trigger:"blur"}],userType:[{required:!0,message:"請選擇身分",trigger:"change"}],reserveDate:[{required:!0,message:"請選擇預約日期",trigger:"change"}],fromTime:[{required:!0,message:"請選擇預約日期",trigger:"change"}],hasTransfer:[{required:!0,message:"請選擇是否轉乘",trigger:"change"}],transferTraffic:[{required:!0,message:"請選擇轉乘運具",trigger:"change"}],transferOperator:[{required:!0,message:"請選擇轉乘業者",trigger:"change"}],transferPurpose:[{required:!0,message:"請選擇轉乘目的",trigger:"change"}],fromAddr:[{required:!0,message:"上車地點不能為空",trigger:"blur"}],fromLng:[{required:!0,message:"上車地點經度不能為空",trigger:"blur"}],fromLat:[{required:!0,message:"上車地點緯度不能為空",trigger:"blur"}],toAddr:[{required:!0,message:"下車地點不能為空",trigger:"blur"}],toLng:[{required:!0,message:"下車地點經度不能為空",trigger:"blur"}],toLat:[{required:!0,message:"下車地點緯度不能為空",trigger:"blur"}]}}},computed:{timeStartTime:function(){var e;if(this.carGroupList.reserveDate!==i()(new Date).format("YYYY-MM-DD"))e="06:00";else{var r=i()().format("HH"),t=10*(Math.floor(i()().format("hh:mm").split(":")[1]/10)+1);60==t&&(t="00",r++),e="".concat(r,":").concat(t)}return e}},methods:{getFromGeo:function(e){var r=this;this.$store.dispatch("loadingHandler",!0),s["a"].GetGeo({_addr:e}).then((function(e){r.carGroupList.fromLng=e.data.result.lon,r.carGroupList.fromLat=e.data.result.lat,r.$store.dispatch("loadingHandler",!1)})).catch((function(e){r.$store.dispatch("loadingHandler",!1)}))},getToGeo:function(e){var r=this;this.$store.dispatch("loadingHandler",!0),s["a"].GetGeo({_addr:e}).then((function(e){r.carGroupList.toLng=e.data.result.lon,r.carGroupList.toLat=e.data.result.lat,r.$store.dispatch("loadingHandler",!1)})).catch((function(e){r.$store.dispatch("loadingHandler",!1)}))},reservation:function(){var e=this;this.$refs["dataForm_share"].validate((function(r){r&&(e.$store.dispatch("loadingHandler",!0),s["a"].Orders(e.carGroupList).then((function(r){200==r.data.code?(e.$message({type:"success",message:"預約成功!"}),e.$router.push({name:"orderInfo"})):e.$message({type:"warning",message:r.data.message}),e.$store.dispatch("loadingHandler",!1)})))}))}}},c=n,u=(t("b390"),t("2877")),p=Object(u["a"])(c,a,o,!1,null,null,null);r["default"]=p.exports},"44e7":function(e,r,t){var a=t("861d"),o=t("c6b6"),s=t("b622"),l=s("match");e.exports=function(e){var r;return a(e)&&(void 0!==(r=e[l])?!!r:"RegExp"==o(e))}},"65f0":function(e,r,t){var a=t("861d"),o=t("e8b5"),s=t("b622"),l=s("species");e.exports=function(e,r){var t;return o(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!o(t.prototype)?a(t)&&(t=t[l],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===r?0:r)}},8418:function(e,r,t){"use strict";var a=t("c04e"),o=t("9bf2"),s=t("5c6c");e.exports=function(e,r,t){var l=a(r);l in e?o.f(e,l,s(0,t)):e[l]=t}},"99af":function(e,r,t){"use strict";var a=t("23e7"),o=t("d039"),s=t("e8b5"),l=t("861d"),i=t("7b0b"),n=t("50c4"),c=t("8418"),u=t("65f0"),p=t("1dde"),d=t("b622"),f=t("2d00"),m=d("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",v=f>=51||!o((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),b=p("concat"),L=function(e){if(!l(e))return!1;var r=e[m];return void 0!==r?!!r:s(e)},G=!v||!b;a({target:"Array",proto:!0,forced:G},{concat:function(e){var r,t,a,o,s,l=i(this),p=u(l,0),d=0;for(r=-1,a=arguments.length;r<a;r++)if(s=-1===r?l:arguments[r],L(s)){if(o=n(s.length),d+o>g)throw TypeError(h);for(t=0;t<o;t++,d++)t in s&&c(p,d,s[t])}else{if(d>=g)throw TypeError(h);c(p,d++,s)}return p.length=d,p}})},b390:function(e,r,t){"use strict";var a=t("f277"),o=t.n(a);o.a},e8b5:function(e,r,t){var a=t("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}},f277:function(e,r,t){}}]);
//# sourceMappingURL=chunk-5ffc050e.526c2c1c.js.map