(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b35cc90"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,c={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==c.call(t)?o(t):i(r(t))}},"0d17":function(t,e,n){},"0dc6":function(t,e,n){"use strict";var r=n("6236"),i=n.n(r);i.a},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),c=n("17c2"),s=n("9112");for(var o in i){var a=r[o],u=a&&a.prototype;if(u&&u.forEach!==c)try{s(u,"forEach",c)}catch(f){u.forEach=c}}},"4ba6":function(t,e,n){"use strict";var r=n("d11f"),i=n.n(r);i.a},"4bb9":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("citysheader"),n("cityscontents",{attrs:{letter:t.letter,letters:t.letters}}),n("alphabet",{on:{change:t.letterchange,create:t.lettercreate}})],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"citysheader"},[n("div",{staticClass:"details"},[n("span",{staticClass:"el-icon-close",on:{click:t.toup}}),n("h3",{staticClass:"header-title"},[t._v("选择城市")])])]),n("div",{staticClass:"kong"})])},s=[],o={name:"citysheader",methods:{toup:function(){this.$router.go(-1)}}},a=o,u=(n("0dc6"),n("2877")),f=Object(u["a"])(a,c,s,!1,null,"1096b581",null),l=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper",staticClass:"cityscontents"},[n("div",{staticClass:"citysdetail"},[n("div",{staticClass:"dangqian"},[n("h3",{staticClass:"dangqian-h3"},[t._v("当前城市")]),n("div",{staticClass:"dangqian-desc",on:{click:t.toup}},[n("span",[t._v(t._s(t.city))])])]),t._l(t.hotcity,(function(e,r){return n("div",{key:r,staticClass:"remen"},[n("h3",{staticClass:"remen-h3"},[t._v(t._s(e.initial))]),n("div",{staticClass:"remen-desc"},t._l(e.hotlist,(function(e){return n("span",{key:e.code,on:{click:function(n){return t.cityclick(e.name)}}},[t._v(t._s(e.name))])})),0)])})),t._l(t.citys,(function(e){return n("div",{key:e.initial,ref:"item.initial",refInFor:!0,staticClass:"numsdesc"},[n("h3",{staticClass:"nums-h3"},[t._v(t._s(e.initial))]),n("div",{staticClass:"nums-desc"},t._l(e.list,(function(e){return n("span",{key:e.name,on:{click:function(n){return t.cityclick(e.name)}}},[t._v(t._s(e.name))])})),0)])}))],2)])},d=[],b=n("5530"),p=n("bc3a"),y=n.n(p),m=n("1fba"),g=n("2f62"),v={name:"cityscontents",props:{letter:String,letters:Array},data:function(){return{hotcity:[],citys:[]}},computed:Object(b["a"])({},Object(g["c"])(["city"])),methods:Object(b["a"])({getcitys:function(){y.a.get("/api/city.json").then(this.getcitysSucc)},getcitysSucc:function(t){this.hotcity=t.data.hotcity,this.citys=t.data.citys},toup:function(){this.$router.go(-1)},cityclick:function(t){this.changeCity(t),this.$router.go(-1)}},Object(g["b"])(["changeCity"])),mounted:function(){this.getcitys(),this.scroll=new m["a"](this.$refs.wrapper,{click:!0})},watch:{letter:function(){if(this.letter)for(var t=0;t<this.letters.length;t++)if(this.letters[t]===this.letter){var e=this.$refs["item.initial"][t];this.scroll.scrollToElement(e)}}}},O=v,S=(n("4ba6"),Object(u["a"])(O,h,d,!1,null,"75f8d4fd",null)),w=S.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alphabet"},t._l(t.letters,(function(e){return n("span",{key:e,ref:"item",refInFor:!0,on:{click:t.letterclick,touchstart:t.tstart,touchmove:t.tmove,touchend:t.tend}},[t._v(t._s(e))])})),0)},k=[],C={name:"alphabet",data:function(){return{alphabet:[],touchstatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.item[0].offsetTop},computed:{letters:function(){for(var t=[],e=0;e<this.alphabet.length;e++)t.push(this.alphabet[e].initial);return this.$emit("create",t),t}},methods:{getalphabet:function(){y.a.get("/api/city.json").then(this.getalphabetSucc)},getalphabetSucc:function(t){this.alphabet=t.data.citys},letterclick:function(t){this.$emit("change",t.target.innerText)},tstart:function(){this.touchstatus=!0},tmove:function(t){var e=this;this.touchstatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){var n=t.touches[0].clientY-51.6,r=Math.floor((n-e.startY)/16.67)-3;console.log(r),r>=0&&r<e.letters.length&&e.$emit("change",e.letters[r])}),16))},tend:function(){this.touchstatus=!1}},mounted:function(){this.getalphabet()}},L=C,_=(n("5c7d"),Object(u["a"])(L,j,k,!1,null,"1876bdce",null)),P=_.exports,T={name:"citys",data:function(){return{letter:"",letters:[]}},components:{citysheader:l,cityscontents:w,alphabet:P},methods:{letterchange:function(t){this.letter=t},lettercreate:function(t){this.letters=t}}},E=T,$=Object(u["a"])(E,r,i,!1,null,null,null);e["default"]=$.exports},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,c=n("1dde"),s=n("ae40"),o=c("filter"),a=s("filter");r({target:"Array",proto:!0,forced:!o||!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"5c7d":function(t,e,n){"use strict";var r=n("0d17"),i=n.n(r);i.a},6236:function(t,e,n){},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),c=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||s(e,t,{value:c.f(t)})}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),c=n("d066"),s=n("c430"),o=n("83ab"),a=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),h=n("e8b5"),d=n("861d"),b=n("825a"),p=n("7b0b"),y=n("fc6a"),m=n("c04e"),g=n("5c6c"),v=n("7c73"),O=n("df75"),S=n("241c"),w=n("057f"),j=n("7418"),k=n("06cf"),C=n("9bf2"),L=n("d1e7"),_=n("9112"),P=n("6eeb"),T=n("5692"),E=n("f772"),$=n("d012"),D=n("90e3"),M=n("b622"),x=n("e538"),N=n("746f"),V=n("d44e"),F=n("69f3"),G=n("b727").forEach,A=E("hidden"),q="Symbol",H="prototype",I=M("toPrimitive"),J=F.set,R=F.getterFor(q),Y=Object[H],B=i.Symbol,Q=c("JSON","stringify"),W=k.f,z=C.f,K=w.f,U=L.f,X=T("symbols"),Z=T("op-symbols"),tt=T("string-to-symbol-registry"),et=T("symbol-to-string-registry"),nt=T("wks"),rt=i.QObject,it=!rt||!rt[H]||!rt[H].findChild,ct=o&&f((function(){return 7!=v(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=W(Y,e);r&&delete Y[e],z(t,e,n),r&&t!==Y&&z(Y,e,r)}:z,st=function(t,e){var n=X[t]=v(B[H]);return J(n,{type:q,tag:t,description:e}),o||(n.description=e),n},ot=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},at=function(t,e,n){t===Y&&at(Z,e,n),b(t);var r=m(e,!0);return b(n),l(X,r)?(n.enumerable?(l(t,A)&&t[A][r]&&(t[A][r]=!1),n=v(n,{enumerable:g(0,!1)})):(l(t,A)||z(t,A,g(1,{})),t[A][r]=!0),ct(t,r,n)):z(t,r,n)},ut=function(t,e){b(t);var n=y(e),r=O(n).concat(bt(n));return G(r,(function(e){o&&!lt.call(n,e)||at(t,e,n[e])})),t},ft=function(t,e){return void 0===e?v(t):ut(v(t),e)},lt=function(t){var e=m(t,!0),n=U.call(this,e);return!(this===Y&&l(X,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(X,e)||l(this,A)&&this[A][e])||n)},ht=function(t,e){var n=y(t),r=m(e,!0);if(n!==Y||!l(X,r)||l(Z,r)){var i=W(n,r);return!i||!l(X,r)||l(n,A)&&n[A][r]||(i.enumerable=!0),i}},dt=function(t){var e=K(y(t)),n=[];return G(e,(function(t){l(X,t)||l($,t)||n.push(t)})),n},bt=function(t){var e=t===Y,n=K(e?Z:y(t)),r=[];return G(n,(function(t){!l(X,t)||e&&!l(Y,t)||r.push(X[t])})),r};if(a||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),n=function(t){this===Y&&n.call(Z,t),l(this,A)&&l(this[A],e)&&(this[A][e]=!1),ct(this,e,g(1,t))};return o&&it&&ct(Y,e,{configurable:!0,set:n}),st(e,t)},P(B[H],"toString",(function(){return R(this).tag})),P(B,"withoutSetter",(function(t){return st(D(t),t)})),L.f=lt,C.f=at,k.f=ht,S.f=w.f=dt,j.f=bt,x.f=function(t){return st(M(t),t)},o&&(z(B[H],"description",{configurable:!0,get:function(){return R(this).description}}),s||P(Y,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:B}),G(O(nt),(function(t){N(t)})),r({target:q,stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=B(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!o},{create:ft,defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:ht}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:dt,getOwnPropertySymbols:bt}),r({target:"Object",stat:!0,forced:f((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(p(t))}}),Q){var pt=!a||f((function(){var t=B();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));r({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,n){var r,i=[t],c=1;while(arguments.length>c)i.push(arguments[c++]);if(r=e,(d(e)||void 0!==t)&&!ot(t))return h(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ot(e))return e}),i[1]=e,Q.apply(null,i)}})}B[H][I]||_(B[H],I,B[H].valueOf),V(B,q),$[A]=!0},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),c=n("df75"),s=n("d039"),o=s((function(){c(1)}));r({target:"Object",stat:!0,forced:o},{keys:function(t){return c(i(t))}})},d11f:function(t,e,n){},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),c=n("56ef"),s=n("fc6a"),o=n("06cf"),a=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),i=o.f,u=c(r),f={},l=0;while(u.length>l)n=i(r,e=u[l++]),void 0!==n&&a(f,e,n);return f}})},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),c=n("fc6a"),s=n("06cf").f,o=n("83ab"),a=i((function(){s(1)})),u=!o||a;r({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return s(c(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-5b35cc90.ec2b5e1b.js.map