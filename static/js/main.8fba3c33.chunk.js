(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{14:function(t,e,n){},9:function(t,e,n){"use strict";n.r(e);var r=n(8),s=n(3),a=n(4),c=n(6),i=n(5),u=n(1),o=n.n(u),l=n(7),h=n.n(l),b=(n(14),n(0));function j(t){return Object(b.jsx)("button",{className:"square",onClick:t.onClick,children:t.value})}var v=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"renderSquare",value:function(t){var e=this;return Object(b.jsx)(j,{value:this.props.squares[t],onClick:function(){return e.props.onClick(t)}})}},{key:"render",value:function(){for(var t=[],e=0;e<3;e++){for(var n=[],r=0;r<3;r++)n.push(this.renderSquare(3*e+r));t.push(Object(b.jsx)("div",{class:"board-row",children:n}))}return Object(b.jsx)("div",{children:t})}}]),n}(o.a.Component),d=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).state={history:[{squares:Array(9).fill(null)}],instanceNumber:0,nextIsX:!0},r}return Object(a.a)(n,[{key:"rollbackTo",value:function(t){this.setState({history:this.state.history.slice(0,t+1),instanceNumber:t,nextIsX:t%2==0})}},{key:"handleClick",value:function(t){var e=this.state.history,n=e[e.length-1].squares.slice();n[t]||O(n)||(n[t]=this.state.nextIsX?"X":"O",this.setState({history:e.concat([{squares:n}]),instanceNumber:e.length,nextIsX:!this.state.nextIsX}))}},{key:"render",value:function(){var t,e=this,n=this.state.history,r=n[this.state.instanceNumber],s=O(r.squares);t=s?s+" Won!":(this.state.nextIsX?"X":"O")+"'s turn";var a=n.slice(0,n.length-1).map((function(t,n){var r="Rollback to "+(n?"move #"+n:"beginning");return Object(b.jsx)("li",{children:Object(b.jsx)("button",{onClick:function(){return e.rollbackTo(n)},children:r})},n)}));return Object(b.jsxs)("div",{className:"game",children:[Object(b.jsx)("div",{className:"game-board",children:Object(b.jsx)(v,{squares:r.squares,onClick:function(t){return e.handleClick(t)}})}),Object(b.jsxs)("div",{className:"game-info",children:[Object(b.jsx)("div",{children:t}),Object(b.jsx)("ol",{children:a})]})]})}}]),n}(o.a.Component);function O(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<e.length;n++){var s=Object(r.a)(e[n],3),a=s[0],c=s[1],i=s[2];if(t[a]&&t[a]===t[c]&&t[a]===t[i])return t[a]}return null}h.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.8fba3c33.chunk.js.map