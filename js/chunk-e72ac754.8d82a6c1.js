(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e72ac754"],{5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var a=n("1d80"),i=n("5899"),r="["+i+"]",o=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),c=function(e){return function(t){var n=String(a(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(s,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(e,t,n){var a=n("861d"),i=n("d2bb");e.exports=function(e,t,n){var r,o;return i&&"function"==typeof(r=t.constructor)&&r!==n&&a(o=r.prototype)&&o!==n.prototype&&i(e,o),e}},a9bb:function(e,t,n){"use strict";n.r(t);var a=n("f2bf"),i=Object(a["withScopeId"])("data-v-d4dca9d2");Object(a["pushScopeId"])("data-v-d4dca9d2");var r=Object(a["createVNode"])("div",{class:"position-absolute rounded-circle bg-warning circle25",style:{width:"4vh",height:"4vh",left:"5%",top:"10%",transform:"translate(-50%,-50%)"}},null,-1),o=Object(a["createVNode"])("div",{class:"position-absolute rounded-circle bg-warning circle25",style:{width:"4vh",height:"4vh",left:"5%",top:"10%",transform:"translate(-50%,-50%)"}},null,-1),s={iv:"",class:"position-absolute text-white ",style:{left:"50%",top:"85%",transform:"translate(-50%,0%)"}},c=Object(a["createVNode"])("div",{iv:"",class:"position-absolute text-white text-center",style:{width:"40%",left:"50%",top:"62.5%",transform:"translate(-50%,-0%)"}},[Object(a["createVNode"])("p",{class:"font-vw-1-35 text25",style:{opacity:"0"}}," TRIUMF marked its 50th anniversary in 2018, celebrating a half century of discovery, innovation, and community for Canada and people around the world. Join us as we continue our journey. ")],-1);Object(a["popScopeId"])();var d=i((function(e,t,n,i,d,l){var u=Object(a["resolveComponent"])("inline-svg");return Object(a["openBlock"])(),Object(a["createBlock"])("div",{style:[l.slidePosition,{width:"100%"}],class:"h-100 z-10 slide25Wrapper"},[Object(a["createVNode"])(u,{src:"images/triumf-50-mark.svg",class:"position-absolute","aria-label":"TRIUMF 50 mark",style:{width:"44%",left:"50%",top:"40%",transform:"translate(-50%,-50%)"}}),Object(a["createVNode"])(u,{src:"images/finalLine.svg",class:"position-absolute finalLine","aria-label":"TRIUMF MARK line",style:{width:"105%",left:"5%",top:"10%"}}),r,o,Object(a["createVNode"])("div",s,[Object(a["createVNode"])("a",{href:d.discoverOurLabUrl,class:"px-3 py-2 font-vw-1-5 bg-dark-blue border-radius-4vw text-white fade25 pointer",style:{"border-radious":"1.5vw",opacity:"0"}}," Click here to Discover Our Lab ",8,["href"])]),c],4)})),l=n("1209"),u=n("d5ad"),f=n("b77e"),p={props:["globalUnits","slideIndex"],data:function(){return{discoverOurLabUrl:"https://www.discoverourlab.triumf.ca/"}},computed:{slidePosition:function(){return Object(f["b"])(this.globalUnits,this.slideIndex)},innerPosition:function(){return(this.globalUnits-this.slideIndex.start)/(this.slideIndex.end-this.slideIndex.start)}},mounted:function(){},methods:{finalLine:function(e){var t=l["a"].timeline({autoplay:!1,loop:!1,endDelay:0}).add({targets:".circle25",scale:[0,1],easing:"easeInOutSine",duration:300}).add({targets:".finalLine path",strokeDashoffset:[l["a"].setDashoffset,0],easing:"easeInOutSine",duration:600,delay:function(e,t){return 1500+250*t}}),n=e<=.5?2*e:Object(u["a"])(e,.5,1,1,0);t.seek(t.duration*n)},line25Move:function(e){var t=l["a"].timeline({autoplay:!1,loop:!1,endDelay:0}).add({targets:[".circle25",".finalLine"],left:["5%","-10%"],easing:"easeInOutSine",duration:300});t.seek(t.duration*e)},slide25:function(e){var t=l["a"].timeline({autoplay:!1,loop:!1,endDelay:500});t.add({targets:".fade25",translateY:["-30%","0%"],opacity:[0,1],duration:100,easing:"easeInOutSine",delay:function(e,t){return 5e3+30*t}}).add({targets:".text25",opacity:[0,1],translateY:["35%","0%"],duration:100,easing:"easeInOutSine"});var n=e<=.5?2*e:Object(u["a"])(e,.5,1,1,0);t.seek(t.duration*n)}},watch:{innerPosition:function(){this.finalLine(this.innerPosition),this.line25Move(this.innerPosition),this.slide25(this.innerPosition)}}};n("eb79");p.render=d,p.__scopeId="data-v-d4dca9d2";t["default"]=p},a9e3:function(e,t,n){"use strict";var a=n("83ab"),i=n("da84"),r=n("94ca"),o=n("6eeb"),s=n("5135"),c=n("c6b6"),d=n("7156"),l=n("c04e"),u=n("d039"),f=n("7c73"),p=n("241c").f,b=n("06cf").f,h=n("9bf2").f,v=n("58a8").trim,g="Number",I=i[g],y=I.prototype,w=c(f(y))==g,O=function(e){var t,n,a,i,r,o,s,c,d=l(e,!1);if("string"==typeof d&&d.length>2)if(d=v(d),t=d.charCodeAt(0),43===t||45===t){if(n=d.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+d}for(r=d.slice(2),o=r.length,s=0;s<o;s++)if(c=r.charCodeAt(s),c<48||c>i)return NaN;return parseInt(r,a)}return+d};if(r(g,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var N,m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(w?u((function(){y.valueOf.call(n)})):c(n)!=g)?d(new I(O(t)),n,m):O(t)},j=a?p(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;j.length>x;x++)s(I,N=j[x])&&!s(m,N)&&h(m,N,b(I,N));m.prototype=y,y.constructor=m,o(i,g,m)}},b77e:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));n("a9e3");function a(e,t){var n=1-(e-t.start),a={left:100*n+"%"};return a}function i(e,t){var n,a=t.easeInLength||1,i=t.easeOutLength||1,o=Number(t.end-t.start)-(a+i),s=t.contentLength,c=a,d=a+o,l=e-t.start;return n=l<=c?r(1,0,l/a):l>c&&l<d?r(0,-(s-1),(l-c)/o):r(-(s-1),-s,(l-d)/i),{left:100*n+"%"}}function r(e,t,n){return e+(t-e)*n}},d5ad:function(e,t,n){"use strict";function a(e,t,n,a,i){return(e-t)/(n-t)*(i-a)+a}n.d(t,"a",(function(){return a}))},eb79:function(e,t,n){"use strict";n("f0f1")},f0f1:function(e,t,n){}}]);
//# sourceMappingURL=chunk-e72ac754.8d82a6c1.js.map