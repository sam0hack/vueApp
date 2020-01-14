(function(t){function e(e){for(var n,i,c=e[0],u=e[1],d=e[2],s=0,p=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,d||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var u=o[i];0!==r[u]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},a=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1a6184a3"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(s);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,o[1](d)}r[t]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="<vueApp>/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=d;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"0418":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("TodoList v1")]),o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("| "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},r=[],a={name:"Header"},i=a,c=(o("1e53"),o("2877")),u=Object(c["a"])(i,n,r,!1,null,"8ecc1164",null);e["a"]=u.exports},"1e53":function(t,e,o){"use strict";var n=o("5e2f"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},a=[],i={name:"app",components:{}},c=i,u=(o("034f"),o("2877")),d=Object(u["a"])(c,r,a,!1,null,null,null),s=d.exports,l=(o("d3b7"),o("8c4f")),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("Header"),o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.removeTodo}})],1)},f=[],m=(o("99af"),o("4de4"),o("2909")),v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add new Todo"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{attrs:{type:"submit",value:"submit"}})])])},h=[],b={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={title:this.title,is_completed:!1};this.$emit("add-todo",e),this.title=""}}},_=b,y=(o("71ff"),Object(u["a"])(_,v,h,!1,null,"0aa9830d",null)),g=y.exports,T=o("0418"),j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)},w=[],O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{is_completed:t.todo.is_completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v(" "+t._s(t.todo.title)+" "),o("button",{staticClass:"delete",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("X")])])])},x=[],k={name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.is_completed=!this.todo.is_completed}}},P=k,$=(o("c05b"),Object(u["a"])(P,O,x,!1,null,"20903913",null)),E=$.exports,C={components:{TodoItem:E},name:"Todos",props:["todos"]},A=C,S=Object(u["a"])(A,j,w,!1,null,"64095c60",null),H=S.exports,M=o("bc3a"),I=o.n(M),L={name:"home",components:{Todos:H,Header:T["a"],AddTodo:g},data:function(){return{todos:[]}},methods:{removeTodo:function(t){var e=this;I.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(){return e.todos=e.todos.filter((function(e){return e.id!==t}))}))},addTodo:function(t){var e=this,o=t.title,n=t.is_completed;I.a.post("https://jsonplaceholder.typicode.com/todos",{title:o,is_completed:n}).then((function(t){return e.todos=[].concat(Object(m["a"])(e.todos),[t.data])})).catch()}},created:function(){var t=this;I.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.todos=e.data})).catch()}},J=L,q=Object(u["a"])(J,p,f,!1,null,null,null),D=q.exports;n["a"].use(l["a"]);var N=[{path:"/",name:"home",component:D},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],X=new l["a"]({routes:N}),z=X;n["a"].config.productionTip=!1,new n["a"]({router:z,render:function(t){return t(s)}}).$mount("#app")},"5e2f":function(t,e,o){},"71ff":function(t,e,o){"use strict";var n=o("ac9f"),r=o.n(n);r.a},"85ec":function(t,e,o){},"9e41":function(t,e,o){},ac9f:function(t,e,o){},c05b:function(t,e,o){"use strict";var n=o("9e41"),r=o.n(n);r.a}});
//# sourceMappingURL=app.0d35c82a.js.map