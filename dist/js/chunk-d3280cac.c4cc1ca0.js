(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3280cac"],{a0f0:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"phoneHeader"}},[t.firstLoad?s("div",{staticClass:"pos-absolute goprev"},[s("i",{staticClass:"el-icon-arrow-left",on:{click:t.goPrev}})]):t._e(),s("div",{staticClass:"w-100 py-10 titlebar d-flex align-items-center justify-content-center"},[s("p",{staticClass:"m-0"},[t._v(t._s(t.pageName))])]),t.$store.state.userToken?s("div",{staticClass:"pos-absolute t-0 r-0 mt-12 mr-5 signinText"},[s("strong",{on:{click:t.signout}},[t._v("登出")])]):t._e()])},n=[],i={props:{pageName:{type:String,require:!0}},data:function(){return{firstLoad:!this.$store.state.firstEnter}},methods:{goPrev:function(){this.$router.go(-1)},signout:function(){var t=this;this.$confirm("確定要登出嗎？",{type:"warning"}).then((function(e){window.localStorage.clear(),t.$store.state.userToken="",t.$message({type:"success",message:"已成功登出!"}),t.$router.push("/")}))}}},r=i,o=(s("ceb3"),s("2877")),c=Object(o["a"])(r,a,n,!1,null,null,null);e["a"]=c.exports},a2f9:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"d-block d-mb-none pt-42"},[s("div",{staticClass:"w-100 pos-fixed t-0 z-999"},[s("PhoneHeader",{attrs:{pageName:t.mainPageName}})],1)]),s("router-view")],1)},n=[],i=s("a0f0"),r={components:{PhoneHeader:i["a"]},data:function(){return{mainPageName:"最新消息"}}},o=r,c=s("2877"),u=Object(c["a"])(o,a,n,!1,null,null,null);e["default"]=u.exports},c0af:function(t,e,s){},ceb3:function(t,e,s){"use strict";var a=s("c0af"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-d3280cac.c4cc1ca0.js.map