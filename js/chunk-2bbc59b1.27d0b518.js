(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bbc59b1"],{5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var a=n("1d80"),r=n("5899"),i="["+r+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),u=function(e){return function(t){var n=String(a(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(s,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(e,t,n){var a=n("861d"),r=n("d2bb");e.exports=function(e,t,n){var i,o;return r&&"function"==typeof(i=t.constructor)&&i!==n&&a(o=i.prototype)&&o!==n.prototype&&r(e,o),e}},a85e:function(e,t,n){"use strict";n("bed4")},a9e3:function(e,t,n){"use strict";var a=n("83ab"),r=n("da84"),i=n("94ca"),o=n("6eeb"),s=n("5135"),u=n("c6b6"),c=n("7156"),l=n("c04e"),d=n("d039"),f=n("7c73"),b=n("241c").f,p=n("06cf").f,h=n("9bf2").f,g=n("58a8").trim,I="Number",v=r[I],N=v.prototype,y=u(f(N))==I,T=function(e){var t,n,a,r,i,o,s,u,c=l(e,!1);if("string"==typeof c&&c.length>2)if(c=g(c),t=c.charCodeAt(0),43===t||45===t){if(n=c.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+c}for(i=c.slice(2),o=i.length,s=0;s<o;s++)if(u=i.charCodeAt(s),u<48||u>r)return NaN;return parseInt(i,a)}return+c};if(i(I,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var m,E=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof E&&(y?d((function(){N.valueOf.call(n)})):u(n)!=I)?c(new v(T(t)),n,E):T(t)},w=a?b(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;w.length>O;O++)s(v,m=w[O])&&!s(E,m)&&h(E,m,p(v,m));E.prototype=N,N.constructor=E,o(r,I,E)}},b77e:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));n("a9e3");function a(e,t){var n=1-(e-t.start),a={left:100*n+"%"};return a}function r(e,t){var n,a=t.easeInLength||1,r=t.easeOutLength||1,o=Number(t.end-t.start)-(a+r),s=t.contentLength,u=a,c=a+o,l=e-t.start;return n=l<=u?i(1,0,l/a):l>u&&l<c?i(0,-(s-1),(l-u)/o):i(-(s-1),-s,(l-c)/r),{left:100*n+"%"}}function i(e,t,n){return e+(t-e)*n}},bc3f:function(e,t,n){"use strict";n.r(t);var a=n("f2bf"),r=Object(a["withScopeId"])("data-v-d78f240a");Object(a["pushScopeId"])("data-v-d78f240a");var i=Object(a["createVNode"])("img",{src:"images/table-elements-TRIUMF.svg",class:"position-absolute w-80 h-auto",width:"180",height:"168","aria-label":"Table elements",style:{bottom:"-20%"}},null,-1);Object(a["popScopeId"])();var o=r((function(e,t,n,r,o,s){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{style:[s.slidePosition,{}],class:"h-100 w-100 z-3 blueTableRef"},[i],4)})),s=n("1209"),u=n("b77e"),c={props:["globalUnits","slideIndex"],computed:{slidePosition:function(){return Object(u["b"])(this.globalUnits,this.slideIndex)},innerPosition:function(){return(this.globalUnits-this.slideIndex.start)/(this.slideIndex.end-this.slideIndex.start)}},mounted:function(){},methods:{blueTableRef:function(e){var t=s["a"].timeline({autoplay:!1,loop:!1,endDelay:200});t.add({targets:".blueTableRef",opacity:[0,1],duration:600,delay:0,easing:"linear"}).add({targets:".blueTableRef",opacity:[1,0],duration:400,delay:0,easing:"linear"}),t.seek(t.duration*e)},blueTableMove:function(e){var t=s["a"].timeline({autoplay:!1,loop:!1,endDelay:0});t.add({targets:".blueTableRef",left:["200%","100%"],duration:600,delay:300,easing:"easeInOutQuad"}).add({targets:".blueTableRef",left:["100%","-110%"],duration:600,delay:300,easing:"linear"}),t.seek(t.duration*e)}},watch:{innerPosition:function(){this.blueTableRef(this.innerPosition)}}};n("a85e");c.render=o,c.__scopeId="data-v-d78f240a";t["default"]=c},bed4:function(e,t,n){}}]);
//# sourceMappingURL=chunk-2bbc59b1.27d0b518.js.map