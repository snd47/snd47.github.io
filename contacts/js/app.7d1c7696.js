(function(e){function t(t){for(var s,l,i=t[0],n=t[1],c=t[2],p=0,m=[];p<i.length;p++)l=i[p],o[l]&&m.push(o[l][0]),o[l]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var n=a[i];0!==o[n]&&(s=!1)}s&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},o={app:0},r=[];function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],n=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=n;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},5033:function(e){e.exports=[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}]},"56d7":function(e,t,a){"use strict";a.r(t);a("14c6"),a("08c1"),a("4842"),a("d9fc");var s=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"wrapper-content"},[a("section",{staticClass:"pb-0"},[e._m(0),e._m(1),a("div",{attrs:{id:"main"}},[a("div",{staticClass:"container main"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6 ourOffices"},[a("h2",{staticClass:"mb-3"},[e._v("Our Offices")]),a("tabs",{staticClass:"mb-4",on:{inputData:e.updateCoord}},[a("tab",{attrs:{name:"Kyiv",selected:!0}},[a("h3",{staticClass:"my-4"},[e._v("Global Message Services Ukraine LLC")]),a("p",[e._v("Kuiv, Stepan Bandera, 17")]),a("p",[e._v("02066")]),a("p",[e._v("Ukraine")])]),a("tab",{attrs:{name:"New York"}},[a("h3",{staticClass:"my-4"},[e._v("Global Message Services USA LLC")]),a("p",[e._v("38 Charles Rd.Brooklyn, NY")]),a("p",[e._v("11224")]),a("p",[e._v("USA")])]),a("tab",{attrs:{name:"Guangzhou"}},[a("h3",{staticClass:"my-4"},[e._v("Global Message Services China LLC")]),a("p",[e._v("No.5 Zhujiang West Road, Pearl River New City, Tianhe District, Guangzhou")]),a("p",[e._v("510623")]),a("p",[e._v("China")])]),a("tab",{attrs:{name:"Barcelona"}},[a("h3",{staticClass:"my-4"},[e._v("Global Message Services Spain LLC")]),a("p",[e._v("Pl. Virgen Blanca 47, Barcelona")]),a("p",[e._v("08720")]),a("p",[e._v("Spain")])])],1)],1),a("div",{staticClass:"col-12 col-sm-6 px-0"},[a("div",{attrs:{id:"map"}},[a("gmap-map",{attrs:{center:e.coord,zoom:15,options:{styles:e.mapStyles,disableDefaultUI:!0},disableDefaultUI:"true"}},e._l(e.coords,function(t,s){return a("gmap-circle",{key:s,attrs:{center:e.coord,radius:35,visible:!0,options:{fillColor:"#3db565",fillOpacity:1,strokeColor:"#3db565"},position:e.coord},on:{click:function(t){e.coord=e.m.position}}})}),1)],1)])])])]),a("footer",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm Contact-Us1"},[a("h2",[e._v("Contact Us")]),a("div",[a("form",{attrs:{method:"post",action:"http://httpbin.org/post",autocomplete:"off",target:"_blank"},on:{submit:function(t){e.submitted=!0}}},[a("label",{staticClass:"boxColor1",class:[e.boxColor1?"is-black":"is-white"]},[a("span",[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",maxlength:"30",pattern:"[\\p{L}\\s]{1,30}",required:""},domProps:{value:e.name},on:{focus:e.changeColor1,blur:e.changeColor1,input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("label",{staticClass:"boxColor2",class:[e.boxColor2?"is-black":"is-white"]},[a("span",[e._v("Phone")]),a("input",{directives:[{name:"mask",rawName:"v-mask",value:"+38093-###-##-##",expression:"'+38093-###-##-##'"},{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"tel",name:"phone",required:""},domProps:{value:e.phone},on:{focus:e.changeColor2,blur:e.changeColor2,input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),a("label",{staticClass:"boxColor3",class:[e.boxColor3?"is-black":"is-white"]},[a("span",[e._v("E-mail")]),a("div",{class:["input-group",e.isEmailValid()]},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"email"},domProps:{value:e.email},on:{focus:e.changeColor3,blur:e.changeColor3,input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._m(2),a("button",{staticClass:"btn",attrs:{type:"submit",value:"Submit",disabled:e.submitted}},[e._v("Get in touch")])])])]),e._m(3)])])])])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row my-4"},[a("div",{staticClass:"col-sm"},[a("h1",[e._v("Contacts")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("div",{staticClass:"container "},[a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h2",{staticClass:"mb-3"},[a("span",{staticClass:"additionalColor text-uppercase"},[e._v("GMS")]),e._v("  Headquarters")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm pr-0 head-col"},[a("p",[e._v("Global Message Services Ukraine LLC")]),a("p",[e._v("Bundesstrasse 5 | 3rd Floor")]),a("p",[e._v("6300 Zug")]),a("p",[e._v("Switzerland")]),a("h3",{staticClass:"additionalColor mt-4"},[e._v("+41 41 544 62 00")])]),a("div",{staticClass:"col-sm head-col2 "},[a("p",[e._v("Email")]),a("p",{},[e._v("info@gms-worldwide.com")]),a("p",[e._v("Send message")]),a("p",{},[e._v("Viber us")]),a("p",[e._v("Send form")]),a("p",{},[e._v("Contact us")])])])]),a("div",{staticClass:"col-12 col-sm-6 head-col20"},[a("div",[a("h2",{staticClass:"mb-3"},[e._v("Technical support "),a("span",{staticClass:"additionalColor"},[e._v("24/7")])]),a("p",[e._v(" GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.")]),a("h3",{staticClass:"additionalColor mt-3"},[e._v("+41 41 544 62 06")])])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",[a("input",{attrs:{type:"checkbox",name:"check",checked:"",required:""}}),a("span",[e._v("I agree the processing of personal data")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-sm Contact-Us2"},[a("p",[e._v("Please tell us more about your request and give us info about your company and country")])])}],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tabs"},[a("ul",e._l(e.tabs,function(t,s){return a("li",{key:s,class:{"is-active":t.isActive}},[a("a",{staticClass:"text-uppercase",attrs:{href:t.href},on:{click:function(a){return e.actions(t)}}},[e._v(e._s(t.name))])])}),0)]),a("div",{staticClass:"tabs-details"},[e._t("default")],2)])},i=[],n=(a("7f7f"),a("ac6a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}]},[e._t("default")],2)}),c=[],u=(a("a481"),{props:{name:{required:!0},selected:{default:!1}},data:function(){return{isActive:!1}},computed:{href:function(){return"#"+this.name.toLowerCase().replace(/ /g,"-")}},mounted:function(){this.isActive=this.selected}}),p=u,m=a("2877"),d=Object(m["a"])(p,n,c,!1,null,null,null),v=d.exports,h={components:{tab:v},data:function(){return{tabs:[],cities:[{name:"Kyiv",lat:50.489378,lng:30.48997},{name:"New York",lat:40.688268,lng:-73.991511},{name:"Guangzhou",lat:23.129004,lng:113.275446},{name:"Barcelona",lat:41.38424,lng:2.182396}],currentPlace:"kyiv",markers:[],marker:{},center:{},places:[]}},mounted:function(){this.addMarker(this.currentPlace)},created:function(){this.tabs=this.$children},methods:{actions:function(e){this.selectTab(e),this.addMarker(e)},selectTab:function(e){var t=this;this.tabs.forEach(function(a){a.isActive=a.name==e.name,a.name==e.name&&(t.currentPlace=a.name.toLowerCase())})},addMarker:function(){var e,t,a;console.log("this.currentPlace add maker  "+this.currentPlace),"kyiv"==this.currentPlace?(e=this.cities[0].lat,t=this.cities[0].lng):"new york"==this.currentPlace?(e=this.cities[1].lat,t=this.cities[1].lng,console.log("this.cities[1].lat "+this.cities[1].lat),console.log("this.cities[1].lng "+this.cities[1].lng)):"guangzhou"==this.currentPlace?(e=this.cities[2].lat,t=this.cities[2].lng):(e=this.cities[3].lat,t=this.cities[3].lng),a={lat:e,lng:t},console.log("marker.lat"+a.lat),this.marker=a,console.log("this.marker "+this.marker.lat),this.markers.push({position:a}),console.log("this.markers "+this.markers[0].position.lat),this.center=a,console.log("this.center "+this.center.lat),this.$emit("inputData",this.marker),this.markers=[]}}},f=h,b=(a("66e2"),Object(m["a"])(f,l,i,!1,null,"58b46f65",null)),y=b.exports,g=a("5033"),C=(a("bc3a"),{components:{tabs:y,tab:v},data:function(){return{errors:[],name:null,phone:null,email:"",reg:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,checked:null,mapStyles:g,coord:{},coords:[this.coord],baseUrl:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASE_URL,boxColor1:!0,boxColor2:!0,boxColor3:!0,submitted:!1}},methods:{changeColor1:function(){this.boxColor1=!this.boxColor1},changeColor2:function(){this.boxColor2=!this.boxColor2},changeColor3:function(){this.boxColor3=!this.boxColor3},updateCoord:function(e){this.coord=e},isEmailValid:function(){return""==this.email?"":this.reg.test(this.email)?"has-success":"has-error"}}}),_=C,k=(a("5c0b"),Object(m["a"])(_,o,r,!1,null,null,null)),x=k.exports,T=a("b6d0"),w=a("755e"),S=a("1dce"),P=a.n(S);a("c1c3");s["a"].use(P.a),s["a"].use(T["a"]),s["a"].use(w,{load:{key:"AIzaSyBBW2OEoZdzWA_9SAp42t3u_wi0gyLWjLc",libraries:"places"}}),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(x)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("5e27"),o=a.n(s);o.a},"5e27":function(e,t,a){},"66e2":function(e,t,a){"use strict";var s=a("f655"),o=a.n(s);o.a},c1c3:function(e,t,a){},f655:function(e,t,a){}});