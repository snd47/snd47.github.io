(function(e){function t(t){for(var a,i,n=t[0],l=t[1],d=t[2],c=0,u=[];c<n.length;c++)i=n[c],r[i]&&u.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);m&&m(t);while(u.length)u.shift()();return s.push.apply(s,d||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],a=!0,n=1;n<o.length;n++){var l=o[n];0!==r[l]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=o[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=a,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(o,a,function(t){return e[t]}.bind(null,a));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var d=0;d<n.length;d++)t(n[d]);var m=l;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"01a0":function(e,t,o){},"35d9":function(e,t,o){},"36f1":function(e,t,o){"use strict";var a=o("8074"),r=o.n(a);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("14c6"),o("08c1"),o("4842"),o("d9fc");var a=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"wrapper-content"},[o("section",[o("header",[e._m(0),o("div",{staticClass:"reg-login"},[o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.authModal.registration=!e.authModal.registration}}},[e._v("Registration")]),o("modalRegistration",{directives:[{name:"show",rawName:"v-show",value:e.authModal.registration,expression:"authModal.registration"}],on:{close:function(t){e.authModal.registration=!1},redirect_login:function(t){e.authModal.login=!e.authModal.login}}}),o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.authModal.login=!e.authModal.login}}},[e._v("Login")]),o("modalLogin",{directives:[{name:"show",rawName:"v-show",value:e.authModal.login,expression:"authModal.login"}],on:{close:function(t){e.authModal.login=!1},redirect_registration:function(t){e.authModal.registration=!e.authModal.registration}}})],1)]),o("div",{staticClass:"container main"},[o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.modalFirst=!e.modalFirst}}},[e._v("Show first modal")]),o("modals",{directives:[{name:"show",rawName:"v-show",value:e.modalFirst,expression:"modalFirst"}],attrs:{title:"First mod",floor:"2019"},on:{close:function(t){e.modalFirst=!1}}},[o("div",{attrs:{slot:"body"},slot:"body"},[o("p",[e._v("Text Text Text")]),o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.modalFirst=!e.modalFirst}}},[e._v("Well Done!")])]),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("p",[e._v("new div slot footer")])])]),o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.modalSecond.show=!e.modalSecond.show}}},[e._v("Show modal with form")]),o("modals",{directives:[{name:"show",rawName:"v-show",value:e.modalSecond.show,expression:"modalSecond.show"}],attrs:{title:"Modal with form"},on:{close:e.onCloseSecondForm}},[o("div",{attrs:{slot:"body"},slot:"body"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.submitSecondForm(t)}}},[o("label",[e._v("Name:\n                      "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modalSecond.name,expression:"modalSecond.name"}],attrs:{type:"text",required:""},domProps:{value:e.modalSecond.name},on:{input:function(t){t.target.composing||e.$set(e.modalSecond,"name",t.target.value)}}})]),o("label",[e._v("Email:\n                      "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modalSecond.email,expression:"modalSecond.email"}],attrs:{type:"email",required:""},domProps:{value:e.modalSecond.email},on:{input:function(t){t.target.composing||e.$set(e.modalSecond,"email",t.target.value)}}})]),o("button",{staticClass:"btn btnPrimary"},[e._v("Submit")])])])]),o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.modalValidate=!e.modalValidate}}},[e._v("Show modal with form + validate")]),o("modalValidate",{directives:[{name:"show",rawName:"v-show",value:e.modalValidate,expression:"modalValidate"}],on:{close:function(t){e.modalValidate=!1}}})],1)])])])},s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"header-title"},[o("h2",[o("strong",[o("a",{attrs:{href:""}},[e._v("Modal app")])])])])}],i=(o("7f7f"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"modal","enter-active-class":"animated pulse"}},[o("div",{staticClass:"modal__wrapper",on:{click:function(t){return e.$emit("close")}}},[o("div",{staticClass:"modal-content",on:{click:function(e){e.stopPropagation()}}},[o("div",{staticClass:"modal-header"},[o("span",{staticClass:"modal-title"},[e._v(" "+e._s(e.title)+" ")]),o("span",{staticClass:"button-close",on:{click:function(t){return e.$emit("close")}}},[e._v("×")])]),o("div",{staticClass:"modal-body"},[e._t("body",[e._v("Default body")])],2),o("div",{staticClass:"modal-footer"},[e._t("footer",[e._v("default footer")])],2)])])])}),n=[],l={props:{title:{type:String,required:!0},floor:{type:String,required:!1}},mounted:function(){var e=this;document.body.addEventListener("keydown",function(t){27===t.keyCode&&e.$emit("close")})},computed:{},methods:{}},d=l,m=(o("8fd2"),o("2877")),c=Object(m["a"])(d,i,n,!1,null,"153b8ef7",null),u=c.exports,v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("modal",{attrs:{title:"Modal with form + Validate"},on:{close:e.onClose}},[o("div",{attrs:{slot:"body"},slot:"body"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[o("div",{staticClass:"form-item",class:{errorInput:e.$v.name.$error}},[o("label",[e._v("Name:")]),e.$v.name.required?e._e():o("p",{staticClass:"errorText"},[e._v("Filed is required!")]),e.$v.name.minLength?e._e():o("p",{staticClass:"errorText"},[e._v("Name must have at least "+e._s(e.$v.name.$params.minLength.min)+" !")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],class:{error:e.$v.name.$error},domProps:{value:e.name},on:{change:function(t){return e.$v.name.$touch()},input:function(t){t.target.composing||(e.name=t.target.value)}}})]),o("div",{staticClass:"form-item",class:{errorInput:e.$v.email.$error}},[o("label",[e._v("Email:")]),e.$v.email.required?e._e():o("p",{staticClass:"errorText"},[e._v("Filed is required!")]),e.$v.email.email?e._e():o("p",{staticClass:"errorText"},[e._v("Email is not correct!")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{error:e.$v.email.$error},domProps:{value:e.email},on:{change:function(t){return e.$v.email.$touch()},input:function(t){t.target.composing||(e.email=t.target.value)}}})]),o("div",{staticClass:"form-item",class:{errorInput:e.$v.password.$error}},[o("label",[e._v("Password:")]),e.$v.password.required?e._e():o("p",{staticClass:"errorText"},[e._v("Filed is required!")]),e.$v.password.minLength?e._e():o("p",{staticClass:"errorText"},[e._v("Password must have at least "+e._s(e.$v.password.$params.minLength.min)+" letters.")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:"password"},domProps:{value:e.password},on:{change:function(t){return e.$v.password.$touch()},input:function(t){t.target.composing||(e.password=t.target.value)}}})]),o("div",{staticClass:"form-item",class:{errorInput:e.$v.repeatPassword.$error}},[o("label",[e._v("Password again:")]),e.$v.repeatPassword.sameAsPassword?e._e():o("p",{staticClass:"errorText"},[e._v("Passwords must be identical.")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],class:{error:e.$v.repeatPassword.$error},attrs:{type:"password"},domProps:{value:e.repeatPassword},on:{change:function(t){return e.$v.repeatPassword.$touch()},input:function(t){t.target.composing||(e.repeatPassword=t.target.value)}}})]),o("button",{staticClass:"btn btnPrimary"},[e._v("Submit")])])]),o("div",{attrs:{slot:"footer"},slot:"footer"})])},p=[],f=o("b5ae"),h={components:{modal:u},data:function(){return{name:"",email:"",password:"",repeatPassword:""}},validations:{name:{required:f["required"],minLength:Object(f["minLength"])(4)},email:{required:f["required"],email:f["email"]},password:{required:f["required"],minLength:Object(f["minLength"])(4)},repeatPassword:{sameAsPassword:Object(f["sameAs"])("password")}},methods:{onSubmit:function(){if(this.$v.$touch(),!this.$v.$invalid){var e={name:this.name,email:this.email,password:this.password,repeatPassword:this.repeatPassword};console.log(e),this.onClose()}},onClose:function(){this.name="",this.email="",this.password="",this.repeatPassword="",this.$v.$reset(),this.$emit("close")}}},w=h,g=(o("900c"),Object(m["a"])(w,v,p,!1,null,null,null)),$=g.exports,b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("modal",{attrs:{title:"Registration"},on:{close:e.onClose}},[o("div",{staticClass:"modal-login-body",attrs:{slot:"body"},slot:"body"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[o("div",{staticClass:"form-item",class:{errorInput:e.$v.email.$error}},[o("label",[e._v("Email(login):")]),e.$v.email.required?e._e():o("p",{staticClass:"errorText"},[e._v("Filed is required!")]),e.$v.email.email?e._e():o("p",{staticClass:"errorText"},[e._v("Email is not correct!")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{error:e.$v.email.$error},domProps:{value:e.email},on:{change:function(t){return e.$v.email.$touch()},input:function(t){t.target.composing||(e.email=t.target.value)}}})]),o("div",{staticClass:"form-item",class:{errorInput:e.$v.password.$error}},[o("label",[e._v("Password:")]),e.$v.password.required?e._e():o("p",{staticClass:"errorText"},[e._v("Filed is required!")]),e.$v.password.minLength?e._e():o("p",{staticClass:"errorText"},[e._v("Password must have at least "+e._s(e.$v.password.$params.minLength.min)+" letters.")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:"password"},domProps:{value:e.password},on:{change:function(t){return e.$v.password.$touch()},input:function(t){t.target.composing||(e.password=t.target.value)}}})]),o("div",{staticClass:"form-item",class:{errorInput:e.$v.repeatPassword.$error}},[o("label",[e._v("Password again:")]),e.$v.repeatPassword.sameAsPassword?e._e():o("p",{staticClass:"errorText"},[e._v("Passwords must be identical.")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],class:{error:e.$v.repeatPassword.$error},attrs:{type:"password"},domProps:{value:e.repeatPassword},on:{change:function(t){return e.$v.repeatPassword.$touch()},input:function(t){t.target.composing||(e.repeatPassword=t.target.value)}}})]),o("button",{staticClass:"btn btnPrimary"},[e._v("Submit")])])]),o("div",{staticClass:"modal-login-footer",attrs:{slot:"footer"},slot:"footer"},[o("button",{on:{click:e.onRedirect}},[e._v("У меня есть аккаунт, войти")])])])},_=[],P={components:{modal:u},data:function(){return{email:"",password:"",repeatPassword:""}},validations:{email:{required:f["required"],email:f["email"]},password:{required:f["required"],minLength:Object(f["minLength"])(4)},repeatPassword:{sameAsPassword:Object(f["sameAs"])("password")}},methods:{onSubmit:function(){if(this.$v.$touch(),!this.$v.$invalid){var e={email:this.email,password:this.password,repeatPassword:this.repeatPassword};console.log(e),this.onClose()}},onClose:function(){this.email="",this.password="",this.repeatPassword="",this.$v.$reset(),this.$emit("close")},onRedirect:function(){this.onClose(),this.$emit("redirect_login")}}},C=P,y=(o("36f1"),Object(m["a"])(C,b,_,!1,null,null,null)),x=y.exports,S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("modal",{attrs:{title:"Login"},on:{close:e.onClose}},[o("div",{staticClass:"modal-login-body",attrs:{slot:"body"},slot:"body"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[o("div",{staticClass:"form-item",class:{errorInput:e.$v.email.$error}},[o("label",[e._v("Email(login):")]),e.$v.email.required?e._e():o("p",{staticClass:"errorText"},[e._v("Filed is required!")]),e.$v.email.email?e._e():o("p",{staticClass:"errorText"},[e._v("Email is not correct!")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{error:e.$v.email.$error},domProps:{value:e.email},on:{change:function(t){return e.$v.email.$touch()},input:function(t){t.target.composing||(e.email=t.target.value)}}})]),o("div",{staticClass:"form-item",class:{errorInput:e.$v.password.$error}},[o("label",[e._v("Password:")]),e.$v.password.required?e._e():o("p",{staticClass:"errorText"},[e._v("Filed is required!")]),e.$v.password.minLength?e._e():o("p",{staticClass:"errorText"},[e._v("Password must have at least "+e._s(e.$v.password.$params.minLength.min)+" letters.")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:"password"},domProps:{value:e.password},on:{change:function(t){return e.$v.password.$touch()},input:function(t){t.target.composing||(e.password=t.target.value)}}})]),o("button",{staticClass:"btn btnPrimary"},[e._v("Submit")])])]),o("div",{staticClass:"modal-login-footer",attrs:{slot:"footer"},slot:"footer"},[o("button",{on:{click:e.onRedirect}},[e._v("Мне нужен аккаунт")])])])},q=[],M={components:{modal:u},data:function(){return{email:"",password:""}},validations:{email:{required:f["required"],email:f["email"]},password:{required:f["required"],minLength:Object(f["minLength"])(4)}},methods:{onSubmit:function(){if(this.$v.$touch(),!this.$v.$invalid){var e={email:this.email,password:this.password};console.log(e),this.onClose()}},onClose:function(){this.email="",this.password="",this.$v.$reset(),this.$emit("close")},onRedirect:function(){this.onClose(),this.$emit("redirect_registration")}}},T=M,F=(o("e58d"),Object(m["a"])(T,S,q,!1,null,null,null)),L=F.exports,O={components:{modals:u,modalValidate:$,modalRegistration:x,modalLogin:L},data:function(){return{modalFirst:!1,modalSecond:{show:!1,name:"",email:""},modalValidate:!1,authModal:{registration:!1,login:!1}}},methods:{submitSecondForm:function(){console.log({name:this.modalSecond.name,email:this.modalSecond.email}),this.onCloseSecondForm()},onCloseSecondForm:function(){this.modalSecond.name="",this.modalSecond.email="",this.modalSecond.show=!1}}},j=O,N=(o("5c0b"),Object(m["a"])(j,r,s,!1,null,null,null)),k=N.exports,E=o("1dce"),I=o.n(E);o("c1c3");a["a"].use(I.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var a=o("5e27"),r=o.n(a);r.a},"5e27":function(e,t,o){},"5ff5":function(e,t,o){},8074:function(e,t,o){},"8fd2":function(e,t,o){"use strict";var a=o("01a0"),r=o.n(a);r.a},"900c":function(e,t,o){"use strict";var a=o("5ff5"),r=o.n(a);r.a},c1c3:function(e,t,o){},e58d:function(e,t,o){"use strict";var a=o("35d9"),r=o.n(a);r.a}});