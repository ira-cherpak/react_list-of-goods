(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(2),s=r.n(o),c=r(5),l=r(3),u=r(4),i=r(7),d=r(6),b=(r(13),function(e){var t=e.goods;return a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e},e)})))}),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=r(14),v=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={goods:m,visible:!1,reversed:!1,sort:""},e.start=function(){e.setState({visible:!0})},e.reverse=function(){e.setState((function(e){return{reversed:!e.reversed}}))},e.reset=function(){e.setState({reversed:!1,sort:""})},e.getGoodsOrder=function(e){var t=e.goods,r=e.sort,n=e.reversed,a=Object(c.a)(t);return a.sort((function(e,t){switch(r){case"alphabet":return e.localeCompare(t);case"length":return e.length-t.length;default:return 0}})),n&&a.reverse(),a},e}return Object(u.a)(r,[{key:"render",value:function(){var e=this,t=this.state,r=t.visible,n=t.goods,o=t.reversed,s=t.sort,c=this.getGoodsOrder({goods:n,sort:s,reversed:o});return a.a.createElement("div",{className:"App"},a.a.createElement("button",{className:h("button button--start",{hidden:r}),type:"button",onClick:this.start},"Start"),a.a.createElement("div",{className:h({hidden:!r})},a.a.createElement("h1",null,"Goods"),a.a.createElement(b,{goods:c}),a.a.createElement("button",{className:"button",type:"button",onClick:this.reverse},"Reverse"),a.a.createElement("button",{className:"button",type:"button",onClick:function(){return e.setState({sort:"alphabet"})}},"Sort A-Z"),a.a.createElement("button",{className:"button",type:"button",onClick:function(){return e.setState({sort:"length"})}},"Sort by length"),a.a.createElement("button",{className:"button button--reset",type:"button",onClick:this.reset},"Reset")))}}]),r}(a.a.Component);s.a.render(a.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,r){e.exports=r(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a52ae433.chunk.js.map