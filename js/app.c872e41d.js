(function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02ca":function(e,t,n){},1:function(e,t){},"13a1":function(e,t,n){"use strict";n("19c6")},"15fc":function(e,t,n){},"19c6":function(e,t,n){},"260e":function(e,t,n){"use strict";n("6ee3")},"2ab6":function(e,t,n){"use strict";n("d646")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrapper"},[n("transition",{attrs:{name:"fade"}},[e.$currentUser?n("router-view"):n("LoginView")],1)],1)])},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("Logo"),n("span",[e._v(" Autenticacao requerida ")]),n("ui-input-text",{attrs:{placeholder:"Sheet id",error:e.error},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),n("span",{staticClass:"error"},[e._v(" "+e._s(e.error)+" ")]),n("button",{attrs:{disabled:!e.userId||e.$isLoadingUser},on:{click:e.saveUserId}},[e.$isLoadingUser?n("div",{staticClass:"lds-ring"},[n("div"),n("div"),n("div"),n("div")]):e._e(),e._v(" Entrar ")]),n("br"),n("br"),n("br"),n("a",{attrs:{href:"#"},on:{click:function(t){return e.loginWithUserId("1vHBErn-WHMQT5vueo2XkzyO6zJVvy52rXvXzRyMlArM")}}},[e._v("Fill in PK")]),n("br")],1)},i=[],u=n("1da1"),c=(n("96cf"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"title-wrapper"},[n("h1",[n("span",[e._v("WTT")]),n("span",[e._v("Feedback")])]),n("span",[e._v("WTT Elite Coaching feedback")])])])}],d=n("cf05"),f=n.n(d),p={name:"Logo",computed:{logo:function(){return f.a}}},h=p,v=(n("f845"),n("2877")),m=Object(v["a"])(h,c,l,!1,null,"47506fff",null),g=m.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui-input-text component"},[e.$slots.before?n("div",{staticClass:"slot-before",style:e.inputHeight},[e._t("before")],2):e._e(),n("div",{staticClass:"input-wrapper"},[n("label",{class:{"is-label-error":e.error},attrs:{for:e.labelId}},[e._v(e._s(e.label)+" ")]),n("input",e._g({class:e.inputClasses,style:e.inputHeight,attrs:{id:e.labelId,type:e.inputType,placeholder:e.placeholder},domProps:{value:e.value}},e.listeners)),e.$slots.bottom?n("div",{staticClass:"slot-bottom"},[e._t("bottom")],2):e._e()]),e.$slots.after?n("div",{staticClass:"slot-after",style:e.inputHeight},[e._t("after")],2):e._e()])},b=[],y=n("5530"),O={name:"UiInputText",props:{label:{type:String},height:{type:String,default:"44px"},password:{type:Boolean,default:!1},value:{required:!0},placeholder:{type:String},error:{type:[String,Boolean],default:!1}},methods:{getRandomInt:function(){var e=1,t=1e9;return Math.floor(Math.random()*(t-e+1)+e)}},computed:{inputHeight:function(){return"height: ".concat(this.height,";")},inputClasses:function(){return{"is-input-error":this.error,"border-radius-start":!this.$slots.before,"border-radius-end":!this.$slots.after}},labelId:function(){return"inputId".concat(this.getRandomInt())},inputType:function(){return this.password?"password":"text"},listeners:function(){var e=this;return Object(y["a"])(Object(y["a"])({},this.$listeners),{},{input:function(t){return e.$emit("input",t.target.value)}})}}},k=O,_=(n("d8d8"),Object(v["a"])(k,w,b,!1,null,"217c44e1",null)),T=_.exports,E={name:"LoginView",components:{Logo:g,UiInputText:T},data:function(){return{userId:"",error:null}},mounted:function(){this.$store.dispatch("user/loadCurrentUser"),this.error=null;var e=this.$route.params.userId;e&&this.loginWithUserId(e)},methods:{loginWithUserId:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("user/login",e);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n["catch"](0),t.error=n.t0.statusMessage;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()},onKeyPressHandler:function(e){13===e.keyCode&&this.saveUserId()},saveUserId:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.error=null,e.loginWithUserId(e.userId);case 2:case"end":return t.stop()}}),t)})))()}}},x=E,S=(n("13a1"),Object(v["a"])(x,s,i,!1,null,"4f80339a",null)),R=S.exports,A={name:"AppLayout",components:{LoginView:R},mounted:function(){this.$store.dispatch("user/loadCurrentUser"),this.error=null}},j=A,I=Object(v["a"])(j,a,o,!1,null,null,null),$=I.exports,q=n("8c4f"),L=(n("d3b7"),n("7db0"),n("2f62")),U={namespaced:!0,state:{accessTokenExpDate:""},mutations:{SET_ATOKEN_EXP_DATE:function(e,t){e.accessTokenExpDate=t}}},C={currentUser:null,isLoading:!1,loginError:null},N={SET_CURRENT_USER:function(e,t){"string"!==typeof t&&(console.log("setting current user",t),e.currentUser=t,localStorage.setItem("user",t))},SET_IS_LOADING:function(e,t){e.isLoading=t},SET_LOGIN_ERROR:function(e,t){e.loginError=t}},P={},Q=(n("e9c4"),n("d4ec")),B=n("bee2"),D=n("262e"),W=n("2caf"),M=n("4478"),G=n("ade3"),H=(n("a9e3"),n("99af"),n("4328")),F=n.n(H),z=n("fe71"),J=n("bc3a"),V=n.n(J),X="8080",K="http://localhost:".concat(X,"/"),Y="WTT Elite Coaching - Feedback",Z=function(){function e(t){return Object(Q["a"])(this,e),this.instance=V.a.create({baseURL:K,headers:{"x-apikey":"59a7ad19f5a9fa0808f11931",user:t,"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}}),this.init()}return Object(B["a"])(e,[{key:"init",value:function(){return this.instance}}]),e}(),ee=n("9072");n("6cd4"),n("6747");function te(e){var t="";switch(e){case 200:t="All done. Request successfully executed";break;case 201:t="Data successfully created";break;case 400:t="Bad Request";break;case 401:t="Unauthorized";break;case 404:t="User not found";break;case 503:t="Service unavailable. Try again later";break;default:t="Something wrong. Client default error message";break}return t}function ne(e){return e.response&&e.response.data?e.response.data.message:e.response&&e.response.statusText?e.response.statusText:"Network Error"===e.message?"Oops! Network Error. Try again later":e.message}var re=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;Object(Q["a"])(this,e),this.data=n,this.success=t.data.success,this.status=t.status,this.statusMessage=te(this.status),this.message=r||null},ae=function(e){Object(D["a"])(n,e);var t=Object(W["a"])(n);function n(e,r){var a;return Object(Q["a"])(this,n),a=t.call(this),a.success=!!e.response&&e.response.data.success,a.meta=!!e.response&&e.response.data.meta,a.code=!!e.response&&e.response.data.code,a.status=!!e.response&&e.response.status,a.statusMessage=te(a.status),a.message=r||ne(e),a}return n}(Object(ee["a"])(Error));var oe=function(){function e(){Object(Q["a"])(this,e)}return Object(B["a"])(e,null,[{key:"entity",get:function(){throw new Error("entity getter not defined")}},{key:"request",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{auth:!1},t=arguments.length>1?arguments[1]:void 0,n=new Z(e,t);return V.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",n}},{key:"responseWrapper",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(M["a"])(re,t)}},{key:"errorWrapper",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(M["a"])(ae,t)}},{key:"querystring",value:function(e){return F.a.stringify(e,{encode:!1})}},{key:"getListPublic",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,o,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:{},z["a"].object(t),n=Object(y["a"])({},t),e.prev=3,e.next=6,this.request().get("".concat(this.entity),{params:n});case 6:return r=e.sent,a={content:r.data.data,total:Number(r.headers["x-total-count"])},e.abrupt("return",new re(r,a));case 11:throw e.prev=11,e.t0=e["catch"](3),o=e.t0.response.data?e.t0.response.data.error:e.t0.response.statusText,new ae(e.t0,o);case 15:case"end":return e.stop()}}),e,this,[[3,11]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"getByIdPublic",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return z["a"].id(t,{required:!0}),e.prev=1,e.next=4,this.request().get("".concat(this.entity,"/").concat(t));case 4:return n=e.sent,e.abrupt("return",new re(n,n.data.data));case 8:throw e.prev=8,e.t0=e["catch"](1),r=e.t0.response.data?e.t0.response.data.error:e.t0.response.statusText,new ae(e.t0,r);case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getById",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return z["a"].id(t,{required:!0}),e.prev=1,e.next=4,this.request({auth:!0}).get("".concat(this.entity,"/").concat(t));case 4:return n=e.sent,e.abrupt("return",new re(n,n.data.data));case 8:throw e.prev=8,e.t0=e["catch"](1),r=e.t0.response.data?e.t0.response.data.error:e.t0.response.statusText,new ae(e.t0,r);case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"create",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},z["a"].object(t,{required:!0}),e.prev=2,e.next=5,this.request({auth:!0}).post("".concat(this.entity),t);case 5:return n=e.sent,e.abrupt("return",new re(n,n.data.data));case 9:throw e.prev=9,e.t0=e["catch"](2),new ae(e.t0);case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},z["a"].id(t,{required:!0}),z["a"].object(n,{required:!0}),e.prev=3,e.next=6,this.request({auth:!0}).patch("".concat(this.entity,"/").concat(t),n);case 6:return r=e.sent,e.abrupt("return",new re(r,r.data.data));case 10:throw e.prev=10,e.t0=e["catch"](3),new ae(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"remove",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return z["a"].id(t,{required:!0}),e.prev=1,e.next=4,this.request({auth:!0}).delete("".concat(this.entity,"/").concat(t));case 4:return n=e.sent,e.abrupt("return",new re(n,n.data.data));case 8:throw e.prev=8,e.t0=e["catch"](1),new ae(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}()}]),e}();Object(G["a"])(oe,"userId","");var se=function(e){Object(D["a"])(n,e);var t=Object(W["a"])(n);function n(){return Object(Q["a"])(this,n),t.apply(this,arguments)}return Object(B["a"])(n,null,[{key:"entity",get:function(){return"users"}},{key:"getCurrent",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.request({auth:!0}).get("".concat(this.entity,"/current"));case 3:return t=e.sent,e.abrupt("return",new re(t,t.data.data));case 7:throw e.prev=7,e.t0=e["catch"](0),n=e.t0.response.data?e.t0.response.data.error:e.t0.response.statusText,new ae(e.t0,n);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"login",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.request(t).get("qa");case 3:return n=e.sent,e.abrupt("return",new re(n,n.data));case 7:throw e.prev=7,e.t0=e["catch"](0),r=e.t0.response.data?e.t0.response.data.error:e.t0.response.statusText,new ae(e.t0,r);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(oe),ie={loadCurrentUser:function(e){var t=e.commit,n=localStorage.getItem("user");return t("SET_CURRENT_USER",JSON.stringify(n)),n},login:function(e,t){var n=e.commit;return n("SET_IS_LOADING",!0),se.login(t).then((function(e){return n("SET_IS_LOADING",!1),n("qa/SET_CURRENT_QA",e.data.QA,{root:!0}),localStorage.setItem("user",t),n("SET_CURRENT_USER",e.data.user),e.data})).catch((function(e){throw n("SET_IS_LOADING",!1),n("SET_LOGIN_ERROR",e.message),e}))}},ue={namespaced:!0,state:C,mutations:N,getters:P,actions:ie},ce={namespaced:!0,state:{windowWidth:0,widthExtraSmall:320,widthSmall:640,widthTablet:1024},mutations:{SET_WINDOW_WIDTH:function(e,t){e.windowWidth=t}},getters:{isExtraSmall:function(e){return e.windowWidth<=e.widthExtraSmall},isSmall:function(e){return e.windowWidth<=e.widthSmall},isTablet:function(e){return e.windowWidth<=e.widthTablet},isDesktop:function(e){return e.windowWidth>e.widthTablet}}},le=(n("4de4"),{namespaced:!0,state:{toastsList:[]},actions:{fire:function(e,t){var n=e.commit,r=t.type,a=t.message;n("NEW",{type:r,message:a})}},mutations:{NEW:function(e,t){var n={id:(new Date).getTime(),message:"string"===typeof t?t:t.message,type:t.type||"default",duration:t.duration||5e3};"error"===t.type&&(n.duration=0,console.error(t.message)),e.toastsList.push(Object(y["a"])({},n))},REMOVE:function(e,t){e.toastsList=e.toastsList.filter((function(e){var n=e.id;return n!==t.id}))},CLEAR_LIST:function(e){e.toastsList=[]}}}),de={qa:[],isLoadingQA:!1,isOnline:!1},fe={SET_CURRENT_QA:function(e,t){t&&(e.qa=t,localStorage.setItem("qa",JSON.stringify(t)))},SET_IS_LOADING_QA:function(e,t){e.isLoadingQA=t}},pe={},he=function(e){Object(D["a"])(n,e);var t=Object(W["a"])(n);function n(){return Object(Q["a"])(this,n),t.apply(this,arguments)}return Object(B["a"])(n,null,[{key:"entity",get:function(){return"qa"}},{key:"fetchQA",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.request(t).get("".concat(this.entity,"/"));case 3:return n=e.sent,e.abrupt("return",new re(n,n.data.QA));case 7:throw e.prev=7,e.t0=e["catch"](0),r=e.t0.response.data?e.t0.response.data.error:e.t0.response.statusText,new ae(e.t0,r);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"writeAnswers",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.request(t).post("".concat(this.entity,"/"),{answers:n});case 3:return r=e.sent,e.abrupt("return",new re(r,r.data));case 7:throw e.prev=7,e.t0=e["catch"](0),a=e.t0.response.data?e.t0.response.data.error:e.t0.response.statusText,new ae(e.t0,a);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,n){return e.apply(this,arguments)}return t}()}]),n}(oe),ve={loadCurrentQA:function(e){var t=e.commit,n=e.dispatch;try{var r=JSON.parse(localStorage.getItem("qa"));return t("SET_CURRENT_QA",r)}catch(a){n("toast/fire",{type:"error",message:a.message},{root:!0})}},getUpdatedQA:function(e,t){var n=e.commit,r=e.dispatch;return n("SET_IS_LOADING_QA",!0),he.fetchQA(t).then((function(e){console.log("qa",e),n("SET_IS_LOADING_QA",!1),n("SET_CURRENT_QA",e.data)})).catch((function(e){n("SET_IS_LOADING_QA",!1),r("toast/fire",{type:"error",message:e.message},{root:!0})}))},saveAnswers:function(e,t){var n=e.commit,r=e.dispatch,a=t.user,o=t.answers;return n("SET_IS_LOADING_QA",!0),he.writeAnswers(a,o).then((function(e){n("SET_IS_LOADING_QA",!1),n("SET_CURRENT_QA",e.data),r("toast/fire",{type:"success",message:"Feedback concluído"},{root:!0})})).catch((function(e){n("SET_IS_LOADING_QA",!1),r("toast/fire",{type:"error",message:e.message},{root:!0})}))}},me={namespaced:!0,state:de,mutations:fe,getters:pe,actions:ve},ge={auth:U,user:ue,dom:ce,toast:le,qa:me};r["a"].use(L["a"]);var we=new L["a"].Store({modules:ge,strict:!1}),be=(n("caad"),n("159b"),n("ac1f"),n("1276"),n("b0c0"),n("d81d"),n("a15b"),n("e813")),ye=n("2b80"),Oe="",ke=function(){function e(){Object(Q["a"])(this,e)}return Object(B["a"])(e,null,[{key:"makeLogin",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,e.prev=1,e.next=4,xe();case 4:return a=e.sent,e.next=7,V.a.post("".concat(K,"/auth/login"),{email:n,password:r,fingerprint:a},{withCredentials:!0});case 7:return o=e.sent,Ee({accessToken:o.data.data.accessToken,exp:_e(o.data.data.accessToken).exp}),e.abrupt("return",new re(o,o.data.data));case 12:throw e.prev=12,e.t0=e["catch"](1),new ae(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"makeLogout",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Z({auth:!0}).post("auth/logout",{},{withCredentials:!0});case 3:return t=e.sent,Te(),wt.push({name:"login"}).catch((function(){})),e.abrupt("return",new re(t,t.data.data));case 9:throw e.prev=9,e.t0=e["catch"](0),new ae(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"refreshTokens",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=V.a,e.t1="".concat(K,"/auth/refresh-tokens"),e.next=5,xe();case 5:return e.t2=e.sent,e.t3={fingerprint:e.t2},e.t4={withCredentials:!0},e.next=10,e.t0.post.call(e.t0,e.t1,e.t3,e.t4);case 10:return t=e.sent,Ee({accessToken:t.data.data.accessToken,exp:_e(t.data.data.accessToken).exp}),e.abrupt("return",new re(t,t.data.data));case 15:throw e.prev=15,e.t5=e["catch"](0),console.log(e.t5.response.data.code),Te(),wt.push({name:"login"}).catch((function(){})),new ae(e.t5);case 21:case"end":return e.stop()}}),e,null,[[0,15]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"isAccessTokenExpired",value:function(){var e=we.state.auth.accessTokenExpDate-10,t=Math.floor((new Date).getTime()/1e3);return e<=t}},{key:"hasRefreshToken",value:function(){return Boolean(localStorage.getItem("refreshToken"))}},{key:"setRefreshToken",value:function(e){if(!["","true"].includes(e))throw new Error("setRefreshToken: invalid value ".concat(e,"; Expect one of ['', 'true']"));localStorage.setItem("refreshToken",e)}},{key:"getBearer",value:function(){return Oe}},{key:"setBearer",value:function(e){Oe="Bearer ".concat(e)}},{key:"_debounce",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=null,r=[];return function(){return clearTimeout(n),n=setTimeout((function(){var t=e();r.forEach((function(e){return e(t)})),r=[]}),t),new Promise((function(e){return r.push(e)}))}}}]),e}();function _e(e){var t="",n={};try{t=e.split(".")[1],n=JSON.parse(atob(t))}catch(r){throw new Error(r)}return n}function Te(){we.commit("user/SET_CURRENT_USER",{}),we.commit("auth/SET_ATOKEN_EXP_DATE",null),ke.setRefreshToken(""),ke.setBearer("")}function Ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.accessToken,n=e.exp;ke.setRefreshToken("true"),ke.setBearer(t),we.commit("auth/SET_ATOKEN_EXP_DATE",n)}function xe(){return new Promise((function(e,t){function n(){return r.apply(this,arguments)}function r(){return r=Object(u["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={excludes:{plugins:!0,localStorage:!0,adBlock:!0,screenResolution:!0,availableScreenResolution:!0,enumerateDevices:!0,pixelRatio:!0,doNotTrack:!0,preprocessor:function(e,t){if("userAgent"===e){var n=new ye(t);return"".concat(n.getOS().name," :: ").concat(n.getBrowser().name," :: ").concat(n.getEngine().name)}return t}}},e.prev=1,e.next=4,be["getPromise"](n);case 4:return r=e.sent,a=r.map((function(e){return e.value})),console.log("fingerprint hash components",r),e.abrupt("return",String(be["x64hash128"](a.join(""),31)));case 10:e.prev=10,e.t0=e["catch"](1),t(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),r.apply(this,arguments)}window.requestIdleCallback?(console.log("get fp hash @ requestIdleCallback"),requestIdleCallback(Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,n();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)}))))):(console.log("get fp hash @ setTimeout"),setTimeout(Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,n();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)}))),500))}))}function Se(e,t,n){var r=e.matched.find((function(e){return e.meta.title}));r&&(window.document.title=r.meta.title),n()}Object(G["a"])(ke,"debounceRefreshTokens",ke._debounce((function(){return ke.refreshTokens()}),100));var Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home page",class:{overflow:e.isHomePage}},[e.showOnlineBadge?n("OnlineBadge"):e._e(),n("UiToastList"),n("Logo"),e.$currentQA?n("QABoxList"):[n("span",[e._v(' "No plan for this week" ')])],n("footer",[n("div",{staticClass:"user-info"},[e._v(" Autenticado como "+e._s(e.$currentUser.name)+". Nao e voce? Clique "),n("a",{attrs:{href:"#"},on:{click:e.logout}},[e._v("aqui")])])])],2)},Ae=[],je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition-group",{staticClass:"ui-toast-list component",attrs:{name:"slide",tag:"div"}},e._l(e.toastsList,(function(t){return n("UiToast",{key:t.id,attrs:{item:t},on:{remove:e.onRemove}})})),1)},Ie=[],$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui-toast component",class:e.classList,on:{click:e.remove}},[e._v(" "+e._s(e.item.message)+" ")])},qe=[],Le={name:"UiToast",props:{item:{type:Object}},methods:{remove:function(){this.$emit("remove",this.item.id)}},computed:{classList:function(){return{default:"default"===this.item.type,success:"success"===this.item.type,info:"info"===this.item.type,warning:"warning"===this.item.type,error:"error"===this.item.type}}},mounted:function(){var e=this;if(this.item.duration)var t=setTimeout((function(){clearTimeout(t),e.remove()}),this.item.duration)}},Ue=Le,Ce=(n("7d09"),Object(v["a"])(Ue,$e,qe,!1,null,null,null)),Ne=Ce.exports,Pe={name:"UiToastList",components:{UiToast:Ne},watch:{$route:{handler:"clearToastList",deep:"true"}},computed:{toastsList:function(){return this.$store.state.toast.toastsList}},methods:{onRemove:function(e){this.$store.commit("toast/REMOVE",{id:e})},clearToastList:function(){this.toastsList.length&&this.$store.commit("toast/CLEAR_LIST")}}},Qe=Pe,Be=(n("619a"),Object(v["a"])(Qe,je,Ie,!1,null,"56f72dae",null)),De=Be.exports,We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"online-badge",class:{offline:!e.$isOnline}},[e._v(" "+e._s(e.$isOnline?"Online":"Offline")+" ")])},Me=[],Ge={name:"OnlineBadge"},He=Ge,Fe=(n("5ce3"),Object(v["a"])(He,We,Me,!1,null,"694af402",null)),ze=Fe.exports,Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"qa-box-list"},e._l(e.$currentQA,(function(e,t){return n("QABox",{key:e._id,ref:"qa"+t,refInFor:!0,attrs:{QA:e}})})),1),n("footer",[n("button",{attrs:{disabled:e.$isLoadingQA},on:{click:e.handleSubmitClick}},[e._v("Enviar")])])])},Ve=[],Xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"qa-box"},[n("UiInputText",{attrs:{label:e.QA.question,error:e.error},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.checkAnswer.apply(null,arguments)}},model:{value:e.answer,callback:function(t){e.answer=t},expression:"answer"}})],1)},Ke=[],Ye={components:{UiInputText:T},name:"Logo",props:{QA:{type:Object}},mounted:function(){this.answer=this.QA.answer},data:function(){return{answer:"",error:null}},methods:{checkAnswer:function(){}}},Ze=Ye,et=Object(v["a"])(Ze,Xe,Ke,!1,null,"90f9ba1e",null),tt=et.exports,nt={components:{QABox:tt},name:"QABoxList",methods:{checkAnswer:function(){},handleSubmitClick:function(){for(var e=[],t=0;t<this.$currentQA.length;t++){var n=this.$refs["qa".concat(t)][0];n.answer&&e.push(n.answer)}this.$store.dispatch("qa/saveAnswers",{user:this.$currentUser.sheet,answers:e})}}},rt=nt,at=(n("2ab6"),Object(v["a"])(rt,Je,Ve,!1,null,"1f3a6de2",null)),ot=at.exports,st={name:"IndexPage",components:{UiToastList:De,Logo:g,OnlineBadge:ze,QABoxList:ot},data:function(){return{showOnlineBadge:!1,isHomePage:!0,pagination:{limit:20,offset:0,total:60}}},mounted:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.initialize();case 1:case"end":return t.stop()}}),t)})))()},methods:{onExpandHandler:function(e){this.isHomePage=!e},logout:function(){this.$store.commit("user/SET_CURRENT_USER",null),this.$route.params.userId=null,window.history.pushState({},"","/"),localStorage.removeItem("user"),localStorage.removeItem("qa")},initialize:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch("user/loadCurrentUser"),e.$store.dispatch("qa/getUpdatedQA",e.$currentUser.sheet);case 2:case"end":return t.stop()}}),t)})))()},onBlur:function(){console.log("onBlur!!!")},onEnter:function(){console.log("onEnter!!!")},onEsc:function(){console.log("onEsc!!!")},onClickIcon:function(){console.log("onClickIcon!!!!")}}},it=st,ut=(n("260e"),Object(v["a"])(it,Re,Ae,!1,null,"8c4e28c2",null)),ct=ut.exports,lt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("404")]),e._v(" "+e._s(e.currentRoute)+" ")])},dt=[],ft={name:"NotFound",computed:{currentRoute:function(){return this.$route.path}}},pt=ft,ht=Object(v["a"])(pt,lt,dt,!1,null,null,null),vt=ht.exports,mt=[{path:"/",name:"index",component:ct,meta:{title:"".concat(Y)}},{path:"/:userId",name:"index",component:ct,meta:{title:"".concat(Y)}},{path:"*",component:vt,meta:{title:"".concat(Y," | not found")}}];r["a"].use(q["a"]);var gt=new q["a"]({linkActiveClass:"is-active",mode:"history",routes:mt});gt.beforeEach(Se);var wt=gt,bt={computed:{$currentUser:function(){return this.$store.state.user.currentUser},$isLoadingUser:function(){return this.$store.state.user.isLoading},$loginError:function(){return this.$store.state.user.loginError}}},yt={methods:{$jumpTo:function(e){var t=document.querySelectorAll(e)[0];if(!t)throw new Error("Element not supplied.");t.scrollIntoView({behavior:"smooth"})}}},Ot={computed:{$currentQA:function(){return this.$store.state.qa.qa},$isLoadingQA:function(){return this.$store.state.qa.isLoadingQA},$isOnline:function(){return this.$store.state.qa.weekPlan.isOnline}}},kt={computed:{$finishedMeals:function(){return this.$store.state.weekPlan.doneMeals}}},_t={computed:{$weekProgress:function(){return this.$store.state.weekPlan.progress},$caloriesProgress:function(){return this.$store.state.weekPlan.caloriesProgress}}},Tt=(n("2532"),{computed:{$isIOS:function(){return Et()}}});function Et(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}r["a"].mixin(bt),r["a"].mixin(kt),r["a"].mixin(Tt),r["a"].mixin(_t),r["a"].mixin(Ot),r["a"].mixin(yt);var xt=new r["a"],St={install:function(e){e.prototype.$bus=xt}};r["a"].use(St);n("5bac"),n("5903"),n("02ca"),n("3ebf");r["a"].config.productionTip=!1;var Rt=function(){return we.commit("dom/SET_WINDOW_WIDTH",window.innerWidth)};"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))})),new r["a"]({name:"Root",router:wt,store:we,mounted:function(){Rt(),window.addEventListener("resize",Rt)},beforeDestroy:function(){window.removeEventListener("resize",Rt)},render:function(e){return e($)}}).$mount("#app")},5903:function(e,t,n){},"5bac":function(e,t){},"5ce3":function(e,t,n){"use strict";n("721d")},"619a":function(e,t,n){"use strict";n("7f97")},"6ee3":function(e,t,n){},"721d":function(e,t,n){},"7d09":function(e,t,n){"use strict";n("a1bf")},"7f97":function(e,t,n){},a1bf:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.8fa53f8e.png"},d646:function(e,t,n){},d652:function(e,t,n){},d8d8:function(e,t,n){"use strict";n("d652")},e6de:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("d4ec"),a=n("262e"),o=n("2caf"),s=n("9072"),i=function(e){Object(a["a"])(n,e);var t=Object(o["a"])(n);function n(e){var a;return Object(r["a"])(this,n),a=t.call(this,e),a.message=e||"SPA assertion error",a.code="SPA_ASSERTION_ERROR",a}return n}(Object(s["a"])(Error))},f845:function(e,t,n){"use strict";n("15fc")},fe71:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f}));var r=n("d4ec"),a=n("bee2"),o=n("53ca"),s=(n("a9e3"),n("99af"),n("b0c0"),n("caad"),n("2532"),n("d81d"),n("d3b7"),n("b64b"),n("8ba4"),n("498a"),n("ac1f"),n("00b4"),n("e6de")),i=n("eed9"),u=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,c=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,l=[Number,String,Object,Array,Boolean,Function];function d(e){return e&&"object"===Object(o["a"])(e)&&!Array.isArray(e)}var f=function(){function t(){Object(r["a"])(this,t)}return Object(a["a"])(t,null,[{key:"fail",value:function(e,t,n){throw new s["a"](n||"Failed value: ".concat(i["inspect"](e),"; ").concat(void 0!==t?"Expect: ".concat(i["inspect"](t.name||t)):""))}},{key:"ok",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.message,a=void 0===r?"":r,o=n.required,s=void 0!==o&&o;!e&&s&&t.fail(e,"Truthful value",a),void 0===e||e||t.fail(e,"Truthful value",a)}},{key:"defined",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.message,a=void 0===r?"":r;void 0===e&&t.fail(e,"No undefined values",a)}},{key:"instanceOf",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.message,o=void 0===a?"":a;e instanceof n||t.fail(e,n,o||"Failed instance: ".concat(i["inspect"](e),"; Expect instance of ").concat(i["inspect"](n.name||n)," class"))}},{key:"typeOf",value:function(e,n,r){l.includes(n)||t.fail(e,n,r||"Assert.typeOf accept one of [".concat(l.map((function(e){return e.name})),'] types. Use another method to validate "').concat(n,'"')),(n!==Number||"number"!==typeof e||isNaN(e))&&(n===String&&"string"===typeof e||n===Object&&d(e)||n===Array&&Array.isArray(e)||n===Boolean&&"boolean"===typeof e||n===Function&&"function"===typeof e||t.fail(e,n,r))}},{key:"array",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.required,a=void 0!==r&&r,o=n.notEmpty,s=void 0!==o&&o,i=n.message,u=void 0===i?"":i;(a||s)&&t.typeOf(e,Array,u),void 0!==e&&t.typeOf(e,Array,u),e&&!e.length&&s&&t.fail(e,"Not empty array")}},{key:"arrayOf",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.required,o=void 0!==a&&a,s=r.notEmpty,i=void 0!==s&&s,u=r.message,c=void 0===u?"":u;t.array(e,{required:o,notEmpty:i,message:c}),Array.isArray(n)||t.fail(n,"of option expect an Array type"),n.every((function(e){return l.includes(e)}))||t.fail(e,n,c||"Assert.array 'of' option accept only one of [".concat(l.map((function(e){return e.name})),"] types")),e&&e.length&&n.length&&!e.every((function(e){return e&&n.includes(e.constructor)}))&&t.fail(e,"Array one of [".concat(n.map((function(e){return e.name})),"] types"),c)}},{key:"object",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.required,a=void 0!==r&&r,o=n.notEmpty,s=void 0!==o&&o,i=n.message,u=void 0===i?"":i;(a||s)&&t.typeOf(e,Object,u),void 0!==e&&t.typeOf(e,Object,u),s&&!Object.keys(e).length&&t.fail(e,"Not empty object",u)}},{key:"number",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.required,a=void 0!==r&&r,o=n.message,s=void 0===o?"":o;a&&t.typeOf(e,Number,s),void 0!==e&&t.typeOf(e,Number,s)}},{key:"integer",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.required,a=void 0!==r&&r,o=n.min,s=n.max,i=n.message,u=void 0===i?"":i,c=Number.isInteger(e);a&&!c&&t.fail(e,"Integer",u),void 0===e||c||t.fail(e,"Integer",u),"number"===typeof o&&void 0!==e&&c&&e<o&&t.fail(e,"Minimal value: ".concat(o),u),"number"===typeof s&&void 0!==e&&c&&e>s&&t.fail(e,"Maximum value: ".concat(s),u)}},{key:"string",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.required,a=void 0!==r&&r,o=n.notEmpty,s=void 0!==o&&o,i=n.message,u=void 0===i?"":i;(a||s)&&t.typeOf(e,String,u),void 0!==e&&t.typeOf(e,String,u),void 0!==e&&!e.trim().length&&s&&t.fail(e,"Not empty string",u)}},{key:"boolean",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.required,a=void 0!==r&&r,o=n.message,s=void 0===o?"":o;a&&t.typeOf(e,Boolean,s),void 0!==e&&t.typeOf(e,Boolean,s)}},{key:"buffer",value:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.required,o=void 0!==a&&a,s=r.notEmpty,i=void 0!==s&&s,u=r.message,c=void 0===u?"":u;o&&!e.isBuffer(n)&&t.fail(n,"Buffer",c),void 0===n||e.isBuffer(n)||t.fail(n,"Buffer",c),!n.length&&i&&t.fail(n,"Not empty buffer",c)}},{key:"date",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.required,a=void 0!==r&&r,o=n.message,s=void 0===o?"":o;a&&t.instanceOf(e,Date,s),void 0!==e&&t.instanceOf(e,Date,s)}},{key:"func",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.required,a=void 0!==r&&r,o=n.message,s=void 0===o?"":o;a&&t.typeOf(e,Function,s),void 0!==e&&t.instanceOf(e,Function,s)}},{key:"id",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.required,a=void 0!==r&&r,o=n.message,s=void 0===o?"":o,i=Number(e),c=Number.isInteger(i)&&i>=1,l=u.test(e),d=c||l;!d&&a&&t.fail(e,"UUID or Number",s),void 0===e||d||t.fail(e,"UUID or Number",s)}},{key:"uuid",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.required,a=void 0!==r&&r,o=n.message,s=void 0===o?"":o;t.string(e,{required:a,message:s}),e&&!u.test(e)&&t.fail(e,"UUID",s)}},{key:"url",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.required,a=void 0!==r&&r,o=n.message,s=void 0===o?"":o;t.string(e,{required:a,message:s}),e&&!c.test(e)&&t.fail(e,"URL",s)}}]),t}()}).call(this,n("b639").Buffer)}});
//# sourceMappingURL=app.c872e41d.js.map