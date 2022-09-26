(this["webpackJsonpreact-hooks-bank-of-flatiron-code-challenge"]=this["webpackJsonpreact-hooks-bank-of-flatiron-code-challenge"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(8),s=n.n(a),r=n(3),i=n(0);var o=function(e){var t=e.date,n=e.description,c=e.category,a=e.amount,s=e.id,r=e.transactions,o=e.setTransactions;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:t}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:c}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{className:"ui button",onClick:function(){fetch(" http://localhost:8001/transactions/".concat(s),{method:"DELETE"}).then((function(e){return e.json()})).then((function(){var e=r.filter((function(e){return e.id!==s}));o(e)}))},children:"Delete this transaction"})})]})};var j=function(e){var t=e.transactions,n=e.setTransactions,a=e.search;e.setSearch,Object(c.useEffect)((function(){fetch("http://localhost:8001/transactions").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[n]);var s=t.filter((function(e){return e.description.toLowerCase().includes(a.toLowerCase())})).map((function(e){return Object(i.jsx)(o,{transactions:t,setTransactions:n,date:e.date,description:e.description,category:e.category,amount:e.amount,id:e.id},e.id)}));return Object(i.jsx)("table",{className:"ui celled striped padded table",children:Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:Object(i.jsx)("h3",{className:"ui center aligned header",children:"Date"})}),Object(i.jsx)("th",{children:Object(i.jsx)("h3",{className:"ui center aligned header",children:"Description"})}),Object(i.jsx)("th",{children:Object(i.jsx)("h3",{className:"ui center aligned header",children:"Category"})}),Object(i.jsx)("th",{children:Object(i.jsx)("h3",{className:"ui center aligned header",children:"Amount"})})]}),s]})})};var d=function(e){e.search;var t=e.setSearch;return Object(i.jsxs)("div",{className:"ui large fluid icon input",children:[Object(i.jsx)("input",{type:"text",placeholder:"Search your Recent Transactions",onChange:function(e){t(e.target.value)}}),Object(i.jsx)("i",{className:"circular search link icon"})]})},l=n(9),h=n(5),u=n(7);var b=function(e){var t=e.transactions,n=e.setTransactions,a=Object(c.useState)({date:"",description:"",category:"",amount:0}),s=Object(r.a)(a,2),o=s[0],j=s[1];function d(e){var t=e.target.name,n=e.target.value;j(Object(u.a)(Object(u.a)({},o),{},Object(h.a)({},t,n)))}return Object(i.jsx)("div",{className:"ui segment",children:Object(i.jsxs)("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),fetch("http://localhost:8001/transactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(e){var c=[].concat(Object(l.a)(t),[e]);n(c)}))},children:[Object(i.jsxs)("div",{className:"inline fields",children:[Object(i.jsx)("input",{type:"date",name:"date",onChange:d}),Object(i.jsx)("input",{type:"text",name:"description",placeholder:"Description",onChange:d}),Object(i.jsx)("input",{type:"text",name:"category",placeholder:"Category",onChange:d}),Object(i.jsx)("input",{type:"number",name:"amount",placeholder:"Amount",step:"0.01",onChange:d})]}),Object(i.jsx)("button",{className:"ui button",type:"submit",children:"Add Transaction"})]})})};var O=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(r.a)(s,2),l=o[0],h=o[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(d,{search:l,setSearch:h}),Object(i.jsx)(b,{transactions:n,setTransactions:a}),Object(i.jsx)(j,{transactions:n,setTransactions:a,search:l,setSearch:h})]})};var x=function(){return Object(i.jsxs)("div",{className:"ui raised segment",children:[Object(i.jsx)("div",{className:"ui segment violet inverted",children:Object(i.jsx)("h2",{children:"The Royal Bank of Flatiron"})}),Object(i.jsx)(O,{})]})};n(15),n(16);s.a.render(Object(i.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a55d9b7a.chunk.js.map