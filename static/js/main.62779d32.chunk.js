(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),s=n(5),r=n(4),l=n(1),u=n.n(l),p=(n(12),n(13),n(0)),m=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={time:""},t.timerId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){var e=new Date;console.log(e.toLocaleTimeString()),t.setState({time:e.toLocaleTimeString()})}),1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("The Clock was renamed from\n      ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){0!==this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(p.jsx)("span",{className:"Time",children:this.state.time})}}]),n}(u.a.Component),b=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0,clockName:0},t.Visible=function(){t.setState({isClockVisible:!0})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{className:"App__title",children:"React clock"}),Object(p.jsx)("button",{type:"button",className:"App__button-show App__button",onClick:this.Visible,children:"Show Clock"}),Object(p.jsxs)("p",{className:"App__text",children:["Current time:",this.state.isClockVisible?Object(p.jsx)(m,{name:this.state.clockName}):Object(p.jsx)("span",{className:"App__text-green",children:'"click upper button"'})]}),Object(p.jsx)("button",{type:"button",className:"App__button-hide App__button",onClick:function(){return t.setState({isClockVisible:!1})},children:"Hide Clock"}),Object(p.jsx)("button",{type:"button",className:"App__button-name App__button",onClick:function(){return t.setState({clockName:Math.round(100*Math.random())})},children:"Set random name"})]})}}]),n}(u.a.Component),h=b;a.a.render(Object(p.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.62779d32.chunk.js.map