(this.webpackJsonpspritle=this.webpackJsonpspritle||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(5),i=a.n(r),o=a(2),l=a(4),s=a(0),u=function(e){return Object(s.jsxs)("div",{className:"total",children:[Object(s.jsx)("h2",{children:"Balance:"}),Object(s.jsxs)("p",{children:["\u20b9 ",e.total?e.total:0]})]})},j=function(e){var t=e.retrievedData;return Object(s.jsxs)("div",{className:"list-main",children:[Object(s.jsx)(u,{total:function(){if(t)return t.map((function(e){return"Add"===e.category?e.amount:0})).reduce((function(e,t){return+e+ +t}),0)-t.map((function(e){return"Remove"===e.category?e.amount:0})).reduce((function(e,t){return+e+ +t}),0)}()}),Object(s.jsx)("ul",{className:"list-ul",children:t&&t.map((function(e,t){if(e.amount>=1)return Object(s.jsxs)("li",{className:"list-li",children:[Object(s.jsx)("p",{children:e.date})," - ",Object(s.jsxs)("p",{children:["\u20b9 ",e.amount]})," -"," ",Object(s.jsx)("p",{children:e.category})]},t)}))})]})},m=function(){var e=Object(n.useState)({amount:0,date:"",category:""}),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),u=Object(l.a)(i,2),m=u[0],d=u[1],b=[];return window.onload=function(){if(null===localStorage.getItem("item"))localStorage.setItem("item",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("item"));d(e)}},Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsx)("div",{className:"main",children:Object(s.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),b.push(a),b=b.concat(JSON.parse(localStorage.getItem("item")||"[]")),localStorage.setItem("item",JSON.stringify(b)),null===localStorage.getItem("item"))localStorage.setItem("item",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("item"));d(t)}},children:[Object(s.jsx)("h1",{children:"Expense tracker - Basic"}),Object(s.jsx)("input",{id:"text",type:"number",name:"amount",placeholder:"Enter your amount!",onChange:function(e){return r(Object(o.a)(Object(o.a)({},a),{},{amount:e.target.value,date:new Date}))}}),Object(s.jsxs)("div",{className:"button",children:[Object(s.jsx)("input",{id:"add",type:"submit",name:"Add",value:"ADD",onClick:function(e){r(Object(o.a)(Object(o.a)({},a),{},{category:e.target.name}))}}),Object(s.jsx)("input",{id:"remove",type:"submit",name:"Remove",value:"REMOVE",onClick:function(e){r(Object(o.a)(Object(o.a)({},a),{},{category:e.target.name}))}}),Object(s.jsx)("input",{id:"clear",type:"button",name:"Clear",value:"CLEAR ALL",onClick:function(e){localStorage.clear(),r({amount:0,category:"",date:""})}})]})]})}),Object(s.jsx)(j,{retrievedData:m})]})},d=(a(11),function(){return Object(s.jsx)(m,{})});i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.450e3735.chunk.js.map