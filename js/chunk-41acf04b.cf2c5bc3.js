(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41acf04b"],{"36ab":function(t,e,n){"use strict";n.r(e);var r=n("f2bf"),a=Object(r["createVNode"])("div",{class:"position-absolute text-warning softMatterWrapper ",style:{width:"37.5%",left:"10%",top:"37.5%",transform:"translate(0%,-0%)"}},[Object(r["createVNode"])("img",{src:"images/Slide22/2017-Record-Cold-for-canada-TRIUMF.jpg",class:"recordCold",style:{width:"100%"}})],-1),o=Object(r["createVNode"])("div",{iv:"",class:"position-absolute text-white ",style:{width:"40%",left:"55%",top:"29%",transform:"translateY(-50%)"}},[Object(r["createVNode"])("h3",{class:"font-vw-3-5 font-w-600 mb-0 fade22",style:{opacity:"0"}}," 2017 "),Object(r["createVNode"])("h6",{class:"font-vw-2-5 font-w-600 fade22 ",style:{opacity:"0"}}," RECORD COLD FOR CANADA ")],-1),i=Object(r["createVNode"])("div",{iv:"",class:"position-absolute text-white ",style:{width:"40%",left:"55%",top:"42%",transform:"translateY(-0%)"}},[Object(r["createVNode"])("p",{class:"font-vw-1-35 text-22",style:{opacity:"0"}}," How do you unlock the great mystery of why there’s more matter than antimatter in the cosmos? Make really, really cold neutrons. The TRIUMF Ultra Cold Advanced Neutron source (TUCAN) experiment is using quantum-cooling techniques to chill a dense stream of free neutrons to just 0.003 of a degree above absolute zero, producing Canada’s first ultracold neutrons on November 5, 2017. The neutrons are moving slowly enough that physicists can measure whether a neutron has electric poles—a result with cosmic implications! ")],-1);function s(t,e,n,s,c,u){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{style:u.slidePosition,class:"z-6 w-100 h-100"},[a,o,i],4)}var c=n("1209"),u=n("d5ad"),l=n("b77e"),d={props:["globalUnits","slideIndex"],computed:{slidePosition:function(){return Object(l["b"])(this.globalUnits,this.slideIndex)},innerPosition:function(){return(this.globalUnits-this.slideIndex.start)/(this.slideIndex.end-this.slideIndex.start)}},mounted:function(){},methods:{slide22:function(t){var e=c["a"].timeline({autoplay:!1,loop:!1,endDelay:500});e.add({targets:".fade22",translateY:["-50%","0%"],opacity:[0,1],duration:100,easing:"easeInOutSine",delay:function(t,e){return 5e3+30*e}}).add({targets:".text-22",opacity:[0,1],translateY:["35%","0%"],duration:100,easing:"easeInOutSine"});var n=t<=.5?2*t:Object(u["a"])(t,.5,1,1,0);e.seek(e.duration*n)},recordCold:function(t){var e=c["a"].timeline({autoplay:!1,loop:!1,endDelay:500}).add({targets:".recordColdWrapper",opacity:[0,1],easing:"easeInOutSine",duration:500,delay:1500}),n=t<=.5?2*t:Object(u["a"])(t,.5,1,1,0);e.seek(e.duration*n)},startLoop:function(){Object(c["a"])({targets:".particle",width:["32%","35%"],direction:"alternate",loop:!0,duration:1200,easing:"easeInOutSine"})}},watch:{innerPosition:function(){this.recordCold(this.innerPosition),this.slide22(this.innerPosition)}}};d.render=s;e["default"]=d},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),o="["+a+"]",i=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var o,i;return a&&"function"==typeof(o=e.constructor)&&o!==n&&r(i=o.prototype)&&i!==n.prototype&&a(t,i),t}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),o=n("94ca"),i=n("6eeb"),s=n("5135"),c=n("c6b6"),u=n("7156"),l=n("c04e"),d=n("d039"),f=n("7c73"),p=n("241c").f,h=n("06cf").f,b=n("9bf2").f,g=n("58a8").trim,y="Number",I=a[y],N=I.prototype,v=c(f(N))==y,m=function(t){var e,n,r,a,o,i,s,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(o=u.slice(2),i=o.length,s=0;s<i;s++)if(c=o.charCodeAt(s),c<48||c>a)return NaN;return parseInt(o,r)}return+u};if(o(y,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var w,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(v?d((function(){N.valueOf.call(n)})):c(n)!=y)?u(new I(m(e)),n,O):m(e)},x=r?p(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;x.length>A;A++)s(I,w=x[A])&&!s(O,w)&&b(O,w,h(I,w));O.prototype=N,N.constructor=O,i(a,y,O)}},b77e:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));n("a9e3");function r(t,e){var n=1-(t-e.start),r={left:100*n+"%"};return r}function a(t,e){var n,r=e.easeInLength||1,a=e.easeOutLength||1,i=Number(e.end-e.start)-(r+a),s=e.contentLength,c=r,u=r+i,l=t-e.start;return n=l<=c?o(1,0,l/r):l>c&&l<u?o(0,-(s-1),(l-c)/i):o(-(s-1),-s,(l-u)/a),{left:100*n+"%"}}function o(t,e,n){return t+(e-t)*n}},d5ad:function(t,e,n){"use strict";function r(t,e,n,r,a){return(t-e)/(n-e)*(a-r)+r}n.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=chunk-41acf04b.cf2c5bc3.js.map