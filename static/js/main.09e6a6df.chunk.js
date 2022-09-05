(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n.n(a),i=n(7),s=n(6),l=n(2),o=n(3),c=n(5),u=n(4),p=n(1),m=(n(16),n(0)),h=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={title:e.props.title,name:e.props.name,type:e.props.type,value:e.props.value,min:e.props.min||0,max:e.props.max||1/0,step:e.props.step||1},e.handleValueChange=function(t){var n=+t.target.value,a=t.target.getAttribute("name")||"";e.setState({value:n}),e.props.handleControlChange(a,n)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.name,a=e.type,r=e.value,i=e.min,s=e.max,l=e.step;return Object(m.jsxs)("div",{className:"InputControl",children:[Object(m.jsx)("label",{htmlFor:n,className:"InputControl__label",children:t}),Object(m.jsx)("input",{type:a,name:n,className:"InputControl__input",id:n,value:r,min:i,max:s,step:l,onChange:this.handleValueChange})]})}}]),n}(p.Component),b=(n(18),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={title:e.props.title,name:e.props.name,type:e.props.type,value:e.props.value},e.handleValueChange=function(t){var n=t.target.checked,a=t.target.getAttribute("name")||"";e.setState({value:n}),e.props.handleControlChange(a,n)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.name,a=e.type,r=e.value;return Object(m.jsxs)("div",{className:"CheckboxControl",children:[Object(m.jsx)("label",{htmlFor:n,className:"CheckboxControl__label",children:t}),Object(m.jsx)("input",{type:a,name:n,className:"CheckboxControl__input",id:n,checked:r,onChange:this.handleValueChange})]})}}]),n}(p.Component)),d=n(11),g=n.n(d),j=n(9),v=n.n(j),f=function(e){var t=e.frameSize,n=e.itemWidth,a=e.itemGap,r=e.carouselMaxWidth,i=Math.floor((r+a)/(n+a));return t<=i?t:i},C=(n(19),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={firstItemIndex:0},e.getCurrentOffset=function(){var t=e.state.firstItemIndex,n=e.props;return t*(n.itemWidth+n.itemGap)},e.getPrevButtonEnabled=function(){var t=e.state.firstItemIndex,n=e.props,a=n.images;return n.infinite||0!==t&&a.length>f(e.props)},e.getNextButtonEnabled=function(){var t=e.state.firstItemIndex,n=e.props,a=n.images;return n.infinite||t!==a.length-f(e.props)},e.handleNext=function(){return e.setState((function(t){var n=t.firstItemIndex,a=e.props,r=a.images,i=a.step,s=a.infinite,l=f(e.props),o=r.length>=l?r.length-l:0,c=n+i;return c>r.length-l&&s&&(c=0),{firstItemIndex:c<=o?c:o}}))},e.handlePrev=function(){return e.setState((function(t){var n=t.firstItemIndex,a=e.props,r=a.images,i=a.step,s=a.infinite,l=f(e.props),o=n-i;return o<0&&s&&(o=(o=r.length-l)>=0?o:0),{firstItemIndex:o>=0?o:0}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.images,n=e.itemWidth,a=e.itemGap,r=e.carouselMaxWidth,i=e.animationDuration,s=f(this.props),l={maxWidth:r,width:(n+a)*s-a},o={transitionDuration:"".concat(i,"ms"),transform:"translateX(-".concat(this.getCurrentOffset(),"px)")};return Object(m.jsxs)("div",{className:"Carousel",style:l,children:[Object(m.jsx)("div",{className:"Carousel__list-wrapper",children:Object(m.jsx)("ul",{className:"Carousel__list",style:o,children:t.map((function(e,t){return Object(m.jsx)("li",{className:"Carousel__item",children:Object(m.jsx)("img",{src:e,width:n,alt:"".concat(t+1)})},g()())}))})}),Object(m.jsxs)("div",{className:"Carousel__controls",children:[Object(m.jsx)("button",{className:v()("Carousel__button","Carousel__button--prev",{"Carousel__button--disabled":!this.getPrevButtonEnabled()}),type:"button",onClick:this.handlePrev,children:"\u2190"}),Object(m.jsx)("button",{className:v()("Carousel__button","Carousel__button--next",{"Carousel__button--disabled":!this.getNextButtonEnabled()}),type:"button","data-cy":"next",onClick:this.handleNext,children:"\u2192"})]})]})}}]),n}(p.Component)),x=[{title:"Item width",name:"itemWidth",type:"number",value:130,min:10,step:1},{title:"Frame size",name:"frameSize",type:"number",value:3,min:1,step:1},{title:"Step",name:"step",type:"number",value:3,min:1,step:1},{title:"Animation duration",name:"animationDuration",type:"number",value:1e3,min:0,max:5e3,step:100},{title:"Infinite",name:"infinite",type:"checkbox",value:!1}],O=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],y=(n(20),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={carousel:{images:O,step:3,frameSize:3,itemWidth:130,itemGap:20,carouselMaxWidth:1300,animationDuration:1e3,infinite:!1},controls:x},e.handleControlChange=function(t,n){t in e.state.carousel&&e.setState((function(e){return{carousel:Object(s.a)(Object(s.a)({},e.carousel),{},Object(i.a)({},t,n))}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.carousel,a=t.controls;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"App__title","data-cy":"title",children:"Carousel with ".concat(n.images.length," images")}),Object(m.jsx)("div",{className:"App__controls",children:a.map((function(t){var a=t.name;switch(t.type){case"number":var r=Number((a in n?n[a]:t.value)||0);return Object(p.createElement)(h,Object(s.a)(Object(s.a)({},t),{},{value:r,key:a,handleControlChange:e.handleControlChange}));case"checkbox":var i=Boolean((a in n?n[a]:t.value)||!1);return Object(p.createElement)(b,Object(s.a)(Object(s.a)({},t),{},{value:i,key:t.name,handleControlChange:e.handleControlChange}));default:return null}}))}),Object(m.jsx)(C,Object(s.a)({},n))]})}}]),n}(p.Component)),_=y;r.a.render(Object(m.jsx)(_,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.09e6a6df.chunk.js.map