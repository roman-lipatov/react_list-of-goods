(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),o=n.n(s),c=n(4),r=n(5),i=n(7),l=n(6),a=n(1),h=n.n(a),j=(n(12),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={goods:u,sortGoodsBy:"",isReversed:!1,listVisible:!1,goodLenght:1},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortAlphabetically=function(){e.setState({sortGoodsBy:"Alphabet"})},e.reset=function(){e.setState({goods:u,isReversed:!1,sortGoodsBy:"",goodLenght:1})},e.setLength=function(t){e.setState({goodLenght:+t})},e.sortByLength=function(){e.setState({sortGoodsBy:"Length"})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.goods,s=t.sortGoodsBy,o=t.listVisible,c=t.goodLenght,r=t.isReversed,i=n.filter((function(e){return e.length>=c}));return i.sort((function(e,t){switch(s){case"Alphabet":return e.localeCompare(t);case"Length":return e.length-t.length;default:return 0}})),r&&i.reverse(),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("h1",{children:"Goods"}),!o&&Object(j.jsx)("button",{type:"button",onClick:function(){e.setState({listVisible:!0})},children:"Start"}),o&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",onClick:this.reverse,children:"Reverse"}),Object(j.jsx)("button",{type:"button",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"}),Object(j.jsx)("button",{type:"button",onClick:this.sortByLength,children:"Sort by length"}),Object(j.jsxs)("div",{className:"select",children:["Choose length for sorting:",Object(j.jsxs)("select",{value:c,onChange:function(t){var n=t.target;e.setLength(n.value)},children:[Object(j.jsx)("option",{value:"1",children:"1"}),Object(j.jsx)("option",{value:"2",children:"2"}),Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"4",children:"4"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"6",children:"6"}),Object(j.jsx)("option",{value:"7",children:"7"}),Object(j.jsx)("option",{value:"8",children:"8"}),Object(j.jsx)("option",{value:"9",children:"9"}),Object(j.jsx)("option",{value:"10",children:"10"})]})]}),Object(j.jsx)("ul",{className:"list",children:i.map((function(e){return Object(j.jsxs)("li",{className:"list__item",children:[Object(j.jsx)("span",{children:e}),Object(j.jsx)("span",{children:"length: ".concat(e.length)})]},e)}))})]})]})}}]),n}(h.a.Component),b=d;o.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.865e4a7b.chunk.js.map