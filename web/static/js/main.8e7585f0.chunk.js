(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[1],{10:function(e,n,t){"use strict";t.d(n,"a",(function(){return c.a})),t.d(n,"b",(function(){return c.b})),t.d(n,"c",(function(){return c.c})),t.d(n,"d",(function(){return c.d})),t.d(n,"e",(function(){return c.e})),t.d(n,"f",(function(){return c.f})),t.d(n,"g",(function(){return x})),t.d(n,"h",(function(){return c.h})),t.d(n,"i",(function(){return c.i})),t.d(n,"j",(function(){return c.j})),t.d(n,"k",(function(){return c.k})),t.d(n,"l",(function(){return c.l})),t.d(n,"m",(function(){return c.m})),t.d(n,"n",(function(){return c.n})),t.d(n,"o",(function(){return c.o}));var r=t(117),a=t(1),o=t.n(a),c=t(29),u=t(0),i=t.n(u),s=t(296),l=t.n(s),f=t(187),p=t.n(f);function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function h(e){var n={};for(var t in e){var r=e[t];n[t]="number"===typeof r?p()(r):r}return n}function v(e){return e}function b(){}function m(e){var n=e.children,t=e.className,r=e.atEnter,c=e.atActive,u=e.atLeave,i=e.wrapperComponent,s=void 0===i?"div":i,f=e.didLeave,p=void 0===f?b:f,d=e.mapStyles,m=void 0===d?v:d,w=e.runOnMount,j=!1===(void 0!==w&&w)?null:void 0==n?[]:[{key:n.key,data:n,style:r}],y=void 0==n?[]:[{key:n.key,data:n,style:h(c)}];return o.a.createElement(l.a,{defaultStyles:j,styles:y,willEnter:function(){return r},willLeave:function(){return h(u)},didLeave:p},(function(e){return o.a.createElement("div",{className:t},e.map((function(e){var n={style:m(e.style),key:e.key};return!1!==s?Object(a.createElement)(s,n,e.data):Object(a.cloneElement)(e.data,n)})))}))}m.propTypes={className:i.a.string,wrapperComponent:i.a.oneOfType([i.a.bool,i.a.element,i.a.string,i.a.func]),atEnter:i.a.object.isRequired,atActive:i.a.object.isRequired,atLeave:i.a.object.isRequired,didLeave:i.a.func,mapStyles:i.a.func,runOnMount:i.a.bool};var w={key:"no-match"};function j(e){return"string"===typeof e.key?e.key:""}var y=0,g=!1;function O(e){var n=e.children,t=d(e,["children"]),r=Object(c.l)(),u=Object(a.useRef)(null),i=Object(a.useRef)(null),s=function(e,n){for(var t=n.pathname,r=o.a.Children.toArray(e),a=0;a<r.length;a++){var u=r[a];if(Object(c.j)(t,{exact:u.props.exact,path:u.props.path}))return u}return w}(n,r);return null===u.current?(u.current=s,i.current=j(r)):u.current.key!==s.key&&(u.current=s,i.current=j(r)+ ++y),t.atEnter={opacity:0},t.atLeave={opacity:0},t.atActive={opacity:1},t.runOnMount=g,g||setTimeout((function(){return g=!0}),0),o.a.createElement(m,t,o.a.createElement(c.g,{key:i.current,location:r},n))}var x=function(e){return o.a.createElement(O,Object(r.a)(Object(r.a)({},e),{},{atEnter:{opacity:0},atLeave:{opacity:0},atActive:{opacity:1}}),e.children)}},385:function(e,n,t){},388:function(e,n){},499:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),o=t(14),c=t.n(o),u=(t(385),t(198)),i=t(21),s=t.n(i),l=t(57),f=t(52),p=t(556),d=t(562),h=t(191),v=t(123),b=t(42),m=t(317),w=t(574),j=t(575),y=t(576),g=t(577),O=t(515),x=t(578),k=t(102),_=t(118),S=t(117),P=t(27);function E(){return L.apply(this,arguments)}function L(){return(L=Object(f.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var t=window.indexedDB.open("wasm_app_cache");t.onerror=function(e){return e&&n(e)},t.onsuccess=function(){var r=t.result.transaction("cache","readonly").objectStore("cache"),a=r.get("js"),o=r.get("wasm");a.onerror=function(e){return e&&n(e)},o.onerror=function(e){return e&&n(e)},a.onsuccess=function(){return o.onsuccess=function(){return e([a.result.value,o.result.value])}}}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,n){return R.apply(this,arguments)}function R(){return(R=Object(f.a)(s.a.mark((function e(n,t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=window.indexedDB.open("wasm_app_cache")).onupgradeneeded=function(){return r.result.createObjectStore("cache",{keyPath:"key"})},r.onsuccess=function(){var e=r.result.transaction("cache","readwrite").objectStore("cache");e.put({key:"js",value:n}),e.put({key:"wasm",value:t})};case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,n,t){t.wasmBinary=n,(new(Function.prototype.bind.apply(Function,[null,"Module",e])))(t)}function F(){return(F=Object(f.a)(s.a.mark((function e(n,t,r,a,o,c){var u,i,f,p,d,h,v,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Promise,e.next=4,n;case 4:return e.t1=e.sent.text(),e.next=7,t;case 7:return e.t2=e.sent.arrayBuffer(),e.t3=[e.t1,e.t2],e.next=11,e.t0.all.call(e.t0,e.t3);case 11:f=e.sent,p=Object(l.a)(f,2),u=p[0],i=p[1],A(u,i),e.next=35;break;case 18:return e.prev=18,e.t4=e.catch(0),e.prev=20,e.next=23,E();case 23:d=e.sent,h=Object(l.a)(d,2),u=h[0],i=h[1],console.error(e.t4),e.next=35;break;case 30:throw e.prev=30,e.t5=e.catch(20),window.alert("There's an error in loading the app."),console.error(e.t5),e.t4;case 35:return e.next=37,c;case 37:return v=e.sent,b=Object(S.a)({mount_component:r},v),C(u+o.custom_js,i,b),e.next=42,b.orm_loaded;case 42:b.orm.set_server_url(new URL(a).href.slice(0,-1)),b.orm.set_user(o.result.id,o.login,o.password),window.Module=b;case 45:case"end":return e.stop()}}),e,null,[[0,18],[20,30]])})))).apply(this,arguments)}var B=function(e){var n=a.a.useState(!1),t=Object(l.a)(n,2),o=t[0],c=t[1];return a.a.useEffect((function(){return function(e,n,t,r,a,o){return F.apply(this,arguments)}(e.js,e.wasm,c,e.server_url,e.session,e.client_modules)&&function(){}}),[]),o||Object(P.jsx)(r.Fragment,{})};function T(){return(T=Object(f.a)(s.a.mark((function e(){var n,r,o,c,u,i,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Promise.all([t.e(0),t.e(5)]).then(t.bind(null,71)),t.e(7).then(t.bind(null,917)),t.e(6).then(t.bind(null,30)),Promise.all([t.e(0),t.e(4)]).then(t.bind(null,565)),Promise.resolve().then(t.bind(null,48))]);case 2:return n=e.sent,r=Object(l.a)(n,5),o=r[0],c=r[1],u=r[2],i=r[3],f=r[4],e.abrupt("return",{Core:o,Icons:c,Styles:u,Admin:i,React:a.a,Router:f});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.React=a.a,window.PouchDB=_.a;var W=function(){return T.apply(this,arguments)}();function U(){return(U=Object(f.a)(s.a.mark((function e(n){var t,r,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./setup.js");case 2:if((t=e.sent).ok&&-1===t.headers.get("Content-Type").indexOf("html")){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.text();case 7:return r=e.sent,e.next=10,W;case 10:(a=e.sent).mount_component=n,o=Object.keys(a),(new(Function.prototype.bind.apply(Function,[null].concat(Object(u.a)(o),[r])))).apply(void 0,Object(u.a)(o.map((function(e){return a[e]}))));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return M.apply(this,arguments)}function M(){return(M=Object(f.a)(s.a.mark((function e(n){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n+"api/check");case 3:return t=e.sent,e.next=6,t.json();case 6:if("success"!==(r=e.sent).status||!r.orm_compiler_python_version){e.next=9;break}return e.abrupt("return",!0);case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",!1);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function N(e){return D.apply(this,arguments)}function D(){return(D=Object(f.a)(s.a.mark((function e(n){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new _.a("session"),n._id="_local/session",e.prev=2,e.next=5,t.get("_local/session");case 5:r=e.sent,n._rev=r._rev,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:return e.abrupt("return",t.put(n));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function q(e,n,t,r,a){return J.apply(this,arguments)}function J(){return(J=Object(f.a)(s.a.mark((function e(n,t,r,a,o){var c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URL(r).href,e.prev=1,e.next=4,fetch(r+"api/login",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({login:n,password:t})});case 4:return c=e.sent,e.next=7,c.json();case 7:if("success"===(u=e.sent).status){e.next=10;break}return e.abrupt("return",Promise.reject(u));case 10:return localStorage.orm_server_url=r,(o=u).login=n,o.password=t,e.next=16,N(u);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.error(e.t0);case 21:a(Object(P.jsx)(B,{js:fetch(r+"api/orm/js",{headers:{Authorization:"Basic "+btoa(n+"|:|"+t)}}),wasm:fetch(r+"api/orm/wasm",{headers:{Authorization:"Basic "+btoa(n+"|:|"+t)}}),client_modules:W,server_url:r,session:o}));case 22:case"end":return e.stop()}}),e,null,[[1,18]])})))).apply(this,arguments)}var z=function(){return Promise.reject()},K={logout:function(){return Promise.resolve()},checkError:z,checkAuth:z,getPermissions:z},$=Object(v.a)({palette:{primary:{main:"#875A7B"},secondary:{main:"#009688"}}}),G=(Object(b.a)(),{});var H=function(){var e=a.a.useState(null),n=Object(l.a)(e,2),t=n[0],o=n[1],c=a.a.useState({open:!1}),u=Object(l.a)(c,2),i=u[0],v=u[1],b=a.a.useState(!1),S=Object(l.a)(b,2),E=S[0],L=S[1];if(a.a.useEffect((function(){return new _.a("session").get("_local/session").then((function(e){return q(e.login,e.password,localStorage.orm_server_url,o,e)})).catch((function(){return function(e){return U.apply(this,arguments)}(o).catch(console.warn)&&L(!0)}))&&function(){}}),[]),t)return t;if(!E)return Object(P.jsx)(r.Fragment,{});window.location.hash&&"#/"!==window.location.hash||(window.location.hash="#/login");var A=function(){var e=function(){var e=[];return e[0]=new Promise((function(n){return e[1]=n})),e}(),n=Object(l.a)(e,2),t=n[0],r=n[1];return v({open:!0,url_resolve:r}),t},R=function(){var e=Object(f.a)(s.a.mark((function e(n){var t,r,a,c,u,i,f,p,d,v;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.username,r=n.password,e.next=3,Object(h.sha256)(t);case 3:return t=e.sent,e.next=6,Object(h.sha256)(t+r);case 6:if(r=e.sent,!window.custom_configured_orm_server_url){e.next=9;break}return e.abrupt("return",q(t,r,window.custom_configured_orm_server_url,o));case 9:if(!localStorage.orm_server_url){e.next=11;break}return e.abrupt("return",q(t,r,localStorage.orm_server_url,o));case 11:return s=window.location.origin+window.location.pathname,a=s.substring(0,s.lastIndexOf("/"))+"/",c=window.location.origin+"/",u=a===c,e.next=16,Promise.all(u?[I(a)]:[I(a),I(c)]);case 16:if(i=e.sent,u?(p=Object(l.a)(i,2),d=p[0],v=p[1],d?f=a:v&&(f=c)):i[0]&&(f=a),f){e.next=22;break}return e.next=21,A();case 21:f=e.sent;case 22:return console.log(f),e.abrupt("return",q(t,r,f,o));case 24:case"end":return e.stop()}var s}),e)})));return function(n){return e.apply(this,arguments)}}();return K.login=R,Object(P.jsxs)(r.Fragment,{children:[Object(P.jsx)(p.a,{theme:$,authProvider:K,dataProvider:{},children:Object(P.jsx)(d.a,{name:"login"})}),Object(P.jsx)(m.a,{theme:$,children:Object(P.jsxs)(w.a,{open:i.open,"aria-labelledby":"form-dialog-title",children:[Object(P.jsx)(j.a,{id:"form-dialog-title",children:"Setup"}),Object(P.jsxs)(y.a,{children:[Object(P.jsx)(g.a,{children:"It seems the Server URL is not configured for you yet. Ask your Administrator for the URL"}),Object(P.jsx)(O.a,{color:"secondary",autoFocus:!0,margin:"dense",id:"server_url",label:"Server URL",type:"url",fullWidth:!0,onKeyPress:function(e){return"Enter"===e.key?[e.preventDefault(),v({open:!1}),i.url_resolve(G.url)]:void 0},onChange:function(e){return G.url=e.target.value}})]}),Object(P.jsx)(x.a,{children:Object(P.jsx)(k.a,{color:"secondary",onClick:function(){return[v({open:!1}),i.url_resolve(G.url)]},children:"Set"})})]})})]})},Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var X=function(e){e&&e instanceof Function&&t.e(8).then(t.bind(null,916)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),o(e),c(e)}))};c.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(H,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");Q?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):V(n,e)}))}}(),X()}},[[499,2,3]]]);
//# sourceMappingURL=main.8e7585f0.chunk.js.map