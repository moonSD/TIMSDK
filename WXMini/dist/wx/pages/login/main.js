require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{GG4c:function(s,t,e){"use strict";var i=e("Dd8w"),a=e.n(i),r=e("NYxO"),c=e("dutN");t.a={data:function(){return{userID:"user0",password:"",selected:!1}},computed:a()({},Object(r.b)({isSdkReady:function(s){return s.global.isSdkReady}})),methods:{handleLogin:function(){var s=Object(c.b)(this.userID);s.runLoopNetType=0,s&&wx.$app.login({userID:this.userID,userSig:s.userSig}).then(function(){wx.showLoading({title:"登录成功"})})},choose:function(){this.selected=!this.selected},select:function(s){this.userID=s.target.id,this.choose()}}}},IOAW:function(s,t,e){"use strict";var i={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"counter-warp"},[e("div",{staticStyle:{"margin-bottom":"20px"}},[e("i-avatar",{attrs:{src:"../../../static/images/launch.png",size:"large",shape:"square",mpcomid:"0"}})],1),s._v(" "),e("div",{staticClass:"login"},[e("div",{staticClass:"select-wrapper",attrs:{eventid:"0"},on:{click:s.choose}},[e("div",{staticClass:"show"},[s._v(s._s(s.userID))]),s._v(" "),s._m(0)]),s._v(" "),s.selected?e("div",{staticClass:"select-list",attrs:{eventid:"1"},on:{click:s.select}},[e("div",{staticClass:"select",attrs:{id:"user0"}},[s._v("user0")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user1"}},[s._v("user1")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user2"}},[s._v("user2")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user3"}},[s._v("user3")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user4"}},[s._v("user4")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user5"}},[s._v("user5")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user6"}},[s._v("user6")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user7"}},[s._v("user7")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user8"}},[s._v("user8")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user9"}},[s._v("user9")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user10"}},[s._v("user10")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user11"}},[s._v("user11")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user12"}},[s._v("user12")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user13"}},[s._v("user13")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user14"}},[s._v("user14")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user15"}},[s._v("user15")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user16"}},[s._v("user16")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user17"}},[s._v("user17")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user18"}},[s._v("user18")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user19"}},[s._v("user19")]),s._v(" "),e("div",{staticClass:"select",attrs:{id:"user20"}},[s._v("user20")])]):s._e()]),s._v(" "),e("div",{staticClass:"login-button"},[e("i-button",{attrs:{type:"primary",shape:"circle",eventid:"2",mpcomid:"1"},on:{click:s.handleLogin}},[s._v("登录")])],1)])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"down"},[t("div",{staticClass:"inside"})])}]};t.a=i},jT7l:function(s,t,e){"use strict";var i=e("GG4c"),a=e("IOAW");var r=function(s){e("sxIp")},c=e("ybqe")(i.a,a.a,r,"data-v-1532f6f5",null);t.a=c.exports},sxIp:function(s,t){},uvAE:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("5nAL"),a=e.n(i),r=e("jT7l");new a.a(r.a).$mount()}},["uvAE"]);