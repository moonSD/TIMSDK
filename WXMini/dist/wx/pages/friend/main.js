require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([11],{"6Ti2":function(t,e){},"80jl":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("5nAL"),i=n.n(o),a=n("9pOB");new i.a(a.a).$mount()},"9pOB":function(t,e,n){"use strict";var o=n("Hw1X"),i=n("UTx8");var a=function(t){n("6Ti2")},s=n("ybqe")(o.a,i.a,a,"data-v-9c65aab0",null);e.a=s.exports},Hw1X:function(t,e,n){"use strict";e.a={data:function(){return{id:"",content:""}},computed:{username:function(){return this.$store.state.user.userProfile.to}},methods:{createConversation:function(){var t=this;if(""!==this.content&&""!==this.id){var e={userIDList:[this.id]};wx.$app.getUserProfile(e).then(function(e){if(e.data.length>0){var n=wx.$app.createTextMessage({to:t.id,conversationType:t.TIM.TYPES.CONV_C2C,payload:{text:t.content}});wx.$app.sendMessage(n).then(function(){var e=t.TIM.TYPES.CONV_C2C+t.id;wx.$app.getConversationProfile(e).then(function(n){t.$store.commit("resetCurrentConversation"),t.$store.commit("resetGroup"),t.$store.commit("updateCurrentConversation",n.data.conversation),t.$store.dispatch("getMessageList",e),t.content="",t.id="";var o="../chat/main?toAccount="+(n.data.conversation.userProfile.nick||n.data.conversation.userProfile.userID);wx.navigateTo({url:o})}).catch(function(t){console.log(t)})}).catch(function(){t.$store.commit("showToast",{title:"输入内容有误",icon:"none",duration:1e3})})}else t.$store.commit("showToast",{title:"用户不存在",icon:"none",duration:1e3}),t.id="",t.content=""}).catch(function(){t.$store.commit("showToast",{title:"用户不存在",icon:"none",duration:1e3}),t.id="",t.content=""})}}}}},UTx8:function(t,e,n){"use strict";var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"item"},[n("i-row",{attrs:{mpcomid:"2"}},[n("i-col",{attrs:{span:"7",offset:"1",mpcomid:"0"}},[n("div",{staticClass:"avatar"},[t._v("\n            用户ID:\n          ")])]),t._v(" "),n("i-col",{attrs:{span:"15",mpcomid:"1"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"input",attrs:{type:"text",placeholder:"输入接收者ID",eventid:"0"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})])],1),t._v(" "),n("i-row",{attrs:{mpcomid:"5"}},[n("i-col",{attrs:{span:"7",offset:"1",mpcomid:"3"}},[n("div",{staticClass:"avatar"},[t._v("\n            内容：\n          ")])]),t._v(" "),n("i-col",{attrs:{span:"15",mpcomid:"4"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"input",attrs:{type:"text",placeholder:"输入你要发送的内容",eventid:"1"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])],1),t._v(" "),n("i-row",{attrs:{mpcomid:"8"}},[n("i-col",{attrs:{span:"16",offset:"4",mpcomid:"7"}},[n("i-button",{attrs:{type:"primary",long:"true",shape:"circle",eventid:"2",mpcomid:"6"},on:{click:function(e){t.createConversation()}}},[t._v("发起会话")])],1)],1)],1)])},staticRenderFns:[]};e.a=o}},["80jl"]);