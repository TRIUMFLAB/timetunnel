(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-151ad062"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),i=n("5899"),r="["+i+"]",o=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),c=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,n){var a=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var r,o;return i&&"function"==typeof(r=e.constructor)&&r!==n&&a(o=r.prototype)&&o!==n.prototype&&i(t,o),t}},"7c4a":function(t,e,n){"use strict";n("b931")},a9e3:function(t,e,n){"use strict";var a=n("83ab"),i=n("da84"),r=n("94ca"),o=n("6eeb"),s=n("5135"),c=n("c6b6"),d=n("7156"),u=n("c04e"),l=n("d039"),f=n("7c73"),p=n("241c").f,h=n("06cf").f,b=n("9bf2").f,I=n("58a8").trim,g="Number",y=i[g],v=y.prototype,N=c(f(v))==g,O=function(t){var e,n,a,i,r,o,s,c,d=u(t,!1);if("string"==typeof d&&d.length>2)if(d=I(d),e=d.charCodeAt(0),43===e||45===e){if(n=d.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+d}for(r=d.slice(2),o=r.length,s=0;s<o;s++)if(c=r.charCodeAt(s),c<48||c>i)return NaN;return parseInt(r,a)}return+d};if(r(g,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var w,m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(N?l((function(){v.valueOf.call(n)})):c(n)!=g)?d(new y(O(e)),n,m):O(e)},S=a?p(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;S.length>x;x++)s(y,w=S[x])&&!s(m,w)&&b(m,w,h(y,w));m.prototype=v,v.constructor=m,o(i,g,m)}},ac4d:function(t,e,n){"use strict";n.r(e);var a=n("f2bf"),i=Object(a["withScopeId"])("data-v-a0777f6a");Object(a["pushScopeId"])("data-v-a0777f6a");var r=Object(a["createVNode"])("div",{class:"position-absolute p-50-50 h-100 background",style:{width:"100%"}},null,-1),o=Object(a["createVNode"])("div",{class:"position-absolute red-giant",style:{width:"40%",left:"30%",top:"30%",transform:"translate(-50%,-50%)"}},[Object(a["createVNode"])("img",{src:"images/Slide14/1992-stellar-origin-RedGiant-TRIUMF.png",style:{width:"100%"}})],-1),s=Object(a["createVNode"])("div",{iv:"",class:"position-absolute text-white ",style:{width:"45%",left:"55%",top:"50%",transform:"translate(-50%,-50%)"}},[Object(a["createVNode"])("h3",{class:"font-vw-3-5 font-w-600 mb-0 fade8",style:{opacity:"0"}}," 1992 "),Object(a["createVNode"])("h6",{class:"font-vw-2-5 font-w-600 fade8 my-0",style:{opacity:"0"}}," STELLAR ORIGINS "),Object(a["createVNode"])("p",{class:"font-vw-1-35 text-8 mt-3",style:{opacity:"0"}}," TRIUMF’s Test Isotope Separator On–Line (TISOL) facility gave researchers the ability to reproduce, here on Earth, key element-building reactions in stars. The Red Giant experiment, named after Sun-like stars at the end of their lives, studied the production rate of oxygen-16 in these dying stars. TRIUMF is now a world-leading facility for laboratory-based nuclear astrophysics experiments. ")],-1);Object(a["popScopeId"])();var c=i((function(t,e,n,i,c,d){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{style:d.slidePosition,class:"w-100 z-5 h-100 "},[r,o,s],4)})),d=n("1209"),u=n("d5ad"),l=n("b77e"),f={props:["globalUnits","slideIndex"],computed:{slidePosition:function(){return Object(l["b"])(this.globalUnits,this.slideIndex)},innerPosition:function(){return(this.globalUnits-this.slideIndex.start)/(this.slideIndex.end-this.slideIndex.start)}},mounted:function(){this.startLoop()},methods:{slide7:function(t){var e=d["a"].timeline({autoplay:!1,loop:!1,endDelay:500});e.add({targets:".fade8",translateY:["-50%","0%"],opacity:[0,1],duration:100,easing:"easeInOutSine",delay:function(t,e){return 5e3+30*e}}).add({targets:".text-8",translateY:["35%","0%"],opacity:[0,1],duration:100,easing:"easeInOutSine"});var n=t<=.5?2*t:Object(u["a"])(t,.5,1,1,0);e.seek(e.duration*n)},redGiant:function(t){var e=d["a"].timeline({autoplay:!1,loop:!1,endDelay:500}).add({targets:".red-giant",scale:[0,1],easing:"easeInOutSine",duration:500,delay:function(t,e){return 1500+250*e}}),n=t<=.5?2*t:Object(u["a"])(t,.5,1,1,0);e.seek(e.duration*n)},startLoop:function(){Object(d["a"])({targets:".particle",width:["32%","35%"],direction:"alternate",loop:!0,duration:1200,easing:"easeInOutSine"})}},watch:{innerPosition:function(){this.redGiant(this.innerPosition),this.slide7(this.innerPosition)}}};n("7c4a");f.render=c,f.__scopeId="data-v-a0777f6a";e["default"]=f},b77e:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i}));n("a9e3");function a(t,e){var n=1-(t-e.start),a={left:100*n+"%"};return a}function i(t,e){var n,a=e.easeInLength||1,i=e.easeOutLength||1,o=Number(e.end-e.start)-(a+i),s=e.contentLength,c=a,d=a+o,u=t-e.start;return n=u<=c?r(1,0,u/a):u>c&&u<d?r(0,-(s-1),(u-c)/o):r(-(s-1),-s,(u-d)/i),{left:100*n+"%"}}function r(t,e,n){return t+(e-t)*n}},b931:function(t,e,n){},d5ad:function(t,e,n){"use strict";function a(t,e,n,a,i){return(t-e)/(n-e)*(i-a)+a}n.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=chunk-151ad062.69e75196.js.map