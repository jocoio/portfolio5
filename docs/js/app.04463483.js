(function(t){function n(n){for(var e,o,s=n[0],c=n[1],l=n[2],h=0,d=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);u&&u(n);while(d.length)d.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,n=0;n<r.length;n++){for(var i=r[n],e=!0,s=1;s<i.length;s++){var c=i[s];0!==a[c]&&(e=!1)}e&&(r.splice(n--,1),t=o(o.s=i[0]))}return t}var e={},a={app:0},r=[];function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,n,i){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)o.d(i,e,function(n){return t[n]}.bind(null,e));return i},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,n,i){t.exports=i("56d7")},"034f":function(t,n,i){"use strict";var e=i("85ec"),a=i.n(e);a.a},"0410":function(t,n,i){"use strict";var e=i("98c1"),a=i.n(e);a.a},"159b":function(t,n,i){},"30b1":function(t,n,i){"use strict";var e=i("4585"),a=i.n(e);a.a},"3e86":function(t,n,i){},"424a":function(t,n,i){"use strict";var e=i("8c4f"),a=i.n(e);a.a},4585:function(t,n,i){},"56d7":function(t,n,i){"use strict";i.r(n);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"app"}},[i("Grid")],1)},r=[],o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{style:t.container_style,attrs:{id:"grid-container"}},t._l(t.blocks,(function(n){return i("Block",{key:n.id,ref:n.id,refInFor:!0,staticClass:"block",class:{"intro-style":t.introing,"resize-style":t.resizing},attrs:{id:n.id}})})),1)},s=[],c=i("5530"),l=i("2f62"),u=i("1209"),h=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"block_"+t.id}},[t.first?i("Nav",{ref:t.id}):t.resizing?i("div"):"mono"===t.mode?i("Mono",{ref:t.id,attrs:{num:t.id}}):"solids"===t.mode?i("Solids",{ref:t.id,attrs:{num:t.id}}):"shapes"===t.mode?i("Shapes",{ref:t.id,attrs:{num:t.id}}):t._e()],1)},d=[],f=(i("a9e3"),function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{ref:t.num,staticClass:"mono",style:t.color_style,attrs:{id:t.num}})}),m=[],p={name:"Mono",data:function(){return{color:"#b06262",animIntro:null}},computed:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["transitioning"])),{},{color_style:function(){return{backgroundColor:this.color}}}),props:{num:Number},components:{},methods:{animate:function(){},intro:function(){this.animIntro=Object(u["a"])({duration:500,targets:this.$refs[this.num],easing:"easeInOutQuad",loop:!1,autoplay:!1,opacity:1}),this.animIntro.play()}},watch:{transitioning:function(){this.transitioning||(this.animIntro.reset(),this.animIntro.play())}},created:function(){},mounted:function(){this.intro()}},g=p,v=(i("db74"),i("2877")),w=Object(v["a"])(g,f,m,!1,null,null,null),y=w.exports,b=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"nav",on:{click:t.toggleNav}},["logo"===t.activeIcon?i("Logo",{ref:"logo",style:t.open_sty}):t._e(),t.navOpen&&!t.naving?i("Info"):t._e()],1)},I=[],O=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{ref:"content",staticClass:"info"},[i("h1",[t._v("Hi, I'm Jon")]),i("h3",{attrs:{id:"intro"}},[t._v("I’m creative developer working with art and technology to share stories and build unique experiences.")])])},M=[],x={name:"Nav",data:function(){return{animIntro:null}},components:{},computed:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["naving","navOpen","navCols","navRows"])),{},{size_style:function(){return{width:100*this.navCols+"%",height:100*this.navRows+"%"}}}),watch:{naving:function(){!this.naving&&this.navOpen?console.log("nav: should set nav block"):this.naving&&!this.navOpen&&console.log("nav: should be reset")}},methods:{initIntro:function(){this.animIntro=Object(u["a"])({targets:this.$refs.content.children,duration:500,easing:"easeOutExpo",delay:u["a"].stagger(100),opacity:[0,1],marginLeft:[-15,0],marginRight:[15,0]})}},mounted:function(){this.initIntro(),this.animIntro.play()}},C=x,k=(i("d62e"),Object(v["a"])(C,O,M,!1,null,"c39191c8",null)),j=k.exports,_=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"icon"},[i("svg",{attrs:{fill:"none",height:"56",viewBox:"0 0 52 56",width:"52",xmlns:"http://www.w3.org/2000/svg"}},[i("g",{attrs:{fill:"#fff"}},[i("path",{attrs:{d:"m22.9051 15.124c0 3.42-1.0387 6.0673-3.116 7.942-2.0773 1.8493-5.016 2.774-8.816 2.774-3.64801 0-6.37134-.7853-8.17001-2.356-1.77333-1.5707-2.659997-3.724-2.659997-6.46 0-.8613.076001-1.7227.228001-2.584l8.853996-1.482c-.12666.8613-.19 1.748-.19 2.66 0 1.292.20267 2.2167.608 2.774.43071.532 1.06401.798 1.90001.798.8613 0 1.4947-.3673 1.9-1.102.4053-.76.608-1.9633.608-3.61v-14.098003h8.854z"}}),i("path",{attrs:{d:"m38.1137 0c4.0027 0 7.1187 1.14 9.348 3.42 2.2547 2.25467 3.382 5.42133 3.382 9.5 0 4.0787-1.1273 7.258-3.382 9.538-2.2293 2.2547-5.3453 3.382-9.348 3.382-2.6347 0-4.9147-.5067-6.84-1.52-1.9-1.0133-3.3693-2.4827-4.408-4.408-1.0133-1.9507-1.52-4.2813-1.52-6.992s.5067-5.02867 1.52-6.954c1.0387-1.95067 2.508-3.43267 4.408-4.446 1.9253-1.013336 4.2053-1.52 6.84-1.52zm0 6.65c-1.292 0-2.242.50666-2.85 1.52-.5827.988-.874 2.5713-.874 4.75s.2913 3.7747.874 4.788c.608.988 1.558 1.482 2.85 1.482s2.2293-.494 2.812-1.482c.5827-1.0133.874-2.6093.874-4.788s-.2913-3.762-.874-4.75c-.5827-1.01334-1.52-1.52-2.812-1.52z"}}),i("path",{attrs:{d:"m24.358 47.784c-1.292 5.3707-5.1553 8.056-11.59 8.056-2.6347 0-4.91467-.5067-6.84-1.52-1.9-1.0133-3.36933-2.4827-4.408-4.408-1.013333-1.9507-1.52-4.2813-1.52-6.992s.506667-5.0287 1.52-6.954c1.03867-1.9507 2.508-3.4327 4.408-4.446 1.92533-1.0133 4.2053-1.52 6.84-1.52 2.9387 0 5.4467.6333 7.524 1.9 2.0773 1.2413 3.3693 3.1413 3.876 5.7l-7.6 2.964c-.2027-1.5453-.57-2.584-1.102-3.116s-1.3553-.798-2.47-.798c-1.3173 0-2.3053.5067-2.964 1.52-.65867 1.0133-.988 2.5967-.988 4.75s.31667 3.7367.95 4.75c.6333 1.0133 1.6087 1.52 2.926 1.52 1.1907 0 2.052-.266 2.584-.798s.874-1.406 1.026-2.622z"}}),i("path",{attrs:{d:"m38.4848 30c4.0027 0 7.1187 1.14 9.348 3.42 2.2547 2.2547 3.382 5.4213 3.382 9.5s-1.1273 7.258-3.382 9.538c-2.2293 2.2547-5.3453 3.382-9.348 3.382-2.6347 0-4.9147-.5067-6.84-1.52-1.9-1.0133-3.3693-2.4827-4.408-4.408-1.0133-1.9507-1.52-4.2813-1.52-6.992s.5067-5.0287 1.52-6.954c1.0387-1.9507 2.508-3.4327 4.408-4.446 1.9253-1.0133 4.2053-1.52 6.84-1.52zm0 6.65c-1.292 0-2.242.5067-2.85 1.52-.5827.988-.874 2.5713-.874 4.75s.2913 3.7747.874 4.788c.608.988 1.558 1.482 2.85 1.482s2.2293-.494 2.812-1.482c.5827-1.0133.874-2.6093.874-4.788s-.2913-3.762-.874-4.75c-.5827-1.0133-1.52-1.52-2.812-1.52z"}})])])])},$=[],R={name:"Logo",data:function(){return{}},methods:{animate:function(){}}},S=R,N=(i("b6c1"),Object(v["a"])(S,_,$,!1,null,null,null)),z=N.exports,F={name:"Nav",data:function(){return{activeIcon:"logo"}},components:{Info:j,Logo:z},computed:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["naving","navOpen"])),{},{open:function(){return this.navOpen&!this.naving},open_sty:function(){return{width:this.open?"33.33333%":"100%"}}}),watch:{},methods:{toggleNav:function(){this.$store.dispatch("changeNav")}},mounted:function(){}},E=F,T=(i("30b1"),Object(v["a"])(E,b,I,!1,null,"12586d95",null)),A=T.exports,Z=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{ref:t.num,staticClass:"solid",attrs:{id:t.num}})},B=[],Q={name:"Solids",data:function(){return{colors:["#dbacac","#a2c9aa","#909eb4","#b06262","#605e5e","#2f86ff","#ffa490"],color:"#FFFFFF",animated:!1,animIntro:null,colorAnim:null}},computed:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["transitioning"])),{},{color_style:function(){return{backgroundColor:this.color}}}),props:{num:Number},components:{},watch:{transitioning:function(){this.transitioning||(this.animIntro.reset(),this.animIntro.play())}},methods:{animate:function(){this.animated&&this.colorAnim.reverse(),this.colorAnim.play()},initIntro:function(){this.animIntro=Object(u["a"])({duration:500,targets:this.$refs[this.num],easing:"easeInOutQuad",loop:!1,autoplay:!1,opacity:1})},initColor:function(){var t=this;this.colorAnim=Object(u["a"])({duration:500,targets:this.$refs[this.num],easing:"easeInOutQuad",loop:!1,autoplay:!1,backgroundColor:this.color,complete:function(){return t.animated=!0}})},changeColor:function(){this.color=this.randomColor()},randomColor:function(){return this.colors[Math.floor(7*Math.random())]}},created:function(){this.changeColor()},mounted:function(){this.$refs[this.num].style.backgroundColor=this.randomColor(),this.initIntro(),this.initColor(),this.animIntro.play()}},P=Q,H=(i("e814"),Object(v["a"])(P,Z,B,!1,null,null,null)),G=H.exports,L=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{ref:"shape",staticClass:"shape",class:{flipped:t.flipped},on:{click:t.animate}},[0===t.atom?i("Vines",{ref:t.num,attrs:{pri:t.prime,sec:t.second}}):1===t.atom?i("Halfmoon",{ref:t.num,attrs:{pri:t.prime,sec:t.second}}):2===t.atom?i("Diamond",{ref:t.num,attrs:{pri:t.prime,sec:t.second}}):3===t.atom?i("Trigrow",{ref:t.num,attrs:{pri:t.prime,sec:t.second}}):4===t.atom?i("Pinwheel",{ref:t.num,attrs:{pri:t.prime,sec:t.second}}):5===t.atom?i("Rectripple",{ref:t.num,attrs:{pri:t.prime,sec:t.second}}):6===t.atom?i("Halfblack",{ref:t.num,attrs:{pri:t.prime,sec:t.second}}):7===t.atom?i("Bullseye",{ref:t.num,attrs:{pri:t.prime,sec:t.second}}):t._e()],1)},W=[],V=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("svg",{ref:"svg",attrs:{width:"100%",height:"100%",viewBox:"0 0 150 150",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",fill:t.pri}},[i("rect",{attrs:{width:"150",height:"150",fill:t.pri}}),i("g",{ref:"leaves"},[i("g",[i("path",{attrs:{d:"M75 113C75 133.435 57.9868 150 37 150C37 150 37 113 75 113Z",fill:t.sec}}),i("path",{attrs:{d:"M0 113C0 133.435 16.5655 150 37 150C37 150 37 113 0 113Z",fill:t.sec}}),i("path",{attrs:{d:"M150 113C150 133.435 132.987 150 112 150C112 150 112 113 150 113Z",fill:t.sec}}),i("path",{attrs:{d:"M75 113C75 133.435 91.5655 150 112 150C112 150 112 113 75 113Z",fill:t.sec}})]),i("g",[i("path",{attrs:{d:"M75 75C75 95.9868 57.9868 113 37 113C37 113 37 75 75 75Z",fill:t.sec}}),i("path",{attrs:{d:"M0 75C0 95.9868 16.5655 113 37 113C37 113 37 75 0 75Z",fill:t.sec}}),i("path",{attrs:{d:"M150 75C150 95.9868 132.987 113 112 113C112 113 112 75 150 75Z",fill:t.sec}}),i("path",{attrs:{d:"M75 75C75 95.9868 91.5655 113 112 113C112 113 112 75 75 75Z",fill:t.sec}})]),i("g",[i("path",{attrs:{d:"M75 38C75 58.4345 57.9868 75 37 75C37 75 37 38 75 38Z",fill:t.sec}}),i("path",{attrs:{d:"M0 38C0 58.4345 16.5655 75 37 75C37 75 37 38 0 38Z",fill:t.sec}}),i("path",{attrs:{d:"M150 38C150 58.4345 132.987 75 112 75C112 75 112 38 150 38Z",fill:t.sec}}),i("path",{attrs:{d:"M75 38C75 58.4345 91.5655 75 112 75C112 75 112 38 75 38Z",fill:t.sec}})]),i("g",[i("path",{attrs:{d:"M75 0C75 20.9868 57.9868 38 37 38C37 38 37 0 75 0Z",fill:t.sec}}),i("path",{attrs:{d:"M0 0C0 20.9868 16.5655 38 37 38C37 38 37 0 0 0Z",fill:t.sec}}),i("path",{attrs:{d:"M150 0C150 20.9868 132.987 38 112 38C112 38 112 0 150 0Z",fill:t.sec}}),i("path",{attrs:{d:"M75 0C75 20.9868 91.5655 38 112 38C112 38 112 0 75 0Z",fill:t.sec}})])])])},Y=[],D={name:"Vines",data:function(){return{animIntro:null,animMain:null}},computed:{},props:{pri:String,sec:String},components:{},methods:{playMain:function(){this.animMain.play()},playIntro:function(){this.animIntro.play()},initIntro:function(){this.animIntro=Object(u["a"])({duration:200,targets:this.$refs.leaves.children,easing:"easeInOutQuad",loop:!1,autoplay:!1,opacity:[0,1],translateY:[15,0],delay:u["a"].stagger(200)})},initMain:function(){var t=this;this.animMain=Object(u["a"])({duration:500,targets:this.$refs.leaves.children,easing:"easeInQuad",loop:!1,autoplay:!1,opacity:[1,0],translateY:[0,-100],delay:u["a"].stagger(50,{direction:"reverse"}),complete:function(){t.animIntro.play()}})}},watch:{},created:function(){},mounted:function(){this.initMain(),this.initIntro()}},J=D,X=Object(v["a"])(J,V,Y,!1,null,"0801b83a",null),q=X.exports,K=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("svg",{ref:"svg",attrs:{width:"100%",height:"100%",viewBox:"0 0 150 150",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"150",height:"150",fill:t.pri}}),i("circle",{ref:"circle",attrs:{cx:"75",r:"75",fill:t.sec}})])},U=[],tt={name:"Halfmoon",data:function(){return{animIntro:null,animMain:null}},computed:{},props:{pri:String,sec:String},components:{},methods:{playMain:function(){this.animMain.play()},playIntro:function(){this.animIntro.play()},initIntro:function(){this.animIntro=Object(u["a"])({duration:500,targets:this.$refs.circle,easing:"easeOutQuad",loop:!1,autoplay:!1,cy:[-75,0]})},initMain:function(){this.animMain=u["a"].timeline({targets:this.$refs.circle,loop:!1,autoplay:!1}).add({duration:500,easing:"easeInCirc",cy:[0,300]}).add({duration:500,easing:"easeOutCirc",cy:[-100,0]})}},watch:{},created:function(){},mounted:function(){this.initMain(),this.initIntro()}},nt=tt,it=Object(v["a"])(nt,K,U,!1,null,"1532271d",null),et=it.exports,at=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("svg",{ref:"svg",attrs:{width:"100%",height:"100%",viewBox:"0 0 150 150",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"150",height:"150",fill:t.pri}}),i("g",{ref:"diamond"},[i("rect",{ref:"diamond",attrs:{x:"25",y:"75",width:"63.66",height:"63.66",transform:"rotate(-45 25 75)",fill:t.sec}})])])},rt=[],ot={name:"Diamond",data:function(){return{animIntro:null,animMain:null}},computed:{},props:{pri:String,sec:String},components:{},methods:{playMain:function(){this.animMain.play()},playIntro:function(){this.animIntro.play()},initIntro:function(){this.animIntro=Object(u["a"])({targets:this.$refs.diamond,easing:"easeInOutQuad",loop:!1,autoplay:!1,duration:300,scale:[0,1]})},initMain:function(){this.animMain=u["a"].timeline({targets:this.$refs.diamond,duration:300,easing:"easeInOutQuad",loop:!1,autoplay:!1}).add({scale:[1,0]}).add({scale:[0,1]})}},watch:{},created:function(){},mounted:function(){this.initMain(),this.initIntro()}},st=ot,ct=(i("6fca"),Object(v["a"])(st,at,rt,!1,null,"a6942bd4",null)),lt=ct.exports,ut=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 150 150",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"150",height:"150",fill:t.pri}}),i("g",{ref:"tris"},[i("path",{attrs:{d:"M150 0V150H0L150 0Z",fill:t.sec}}),i("path",{attrs:{d:"M75 0V75H0L75 0Z",fill:t.sec}}),i("path",{attrs:{d:"M37 0V37H0L37 0Z",fill:t.sec}})])])},ht=[],dt={name:"Trigrow",data:function(){return{animIntro:null,animMain:null}},computed:{},props:{pri:String,sec:String},components:{},methods:{playMain:function(){this.animMain.play()},playIntro:function(){this.animIntro.play()},initIntro:function(){this.animIntro=Object(u["a"])({duration:750,targets:this.$refs.tris.children,easing:"easeOutQuad",loop:!1,autoplay:!1,delay:u["a"].stagger(150),translateX:[-150,0],translateY:[-150,0]})},initMain:function(){var t=this;this.animMain=Object(u["a"])({duration:500,targets:this.$refs.tris.children,easing:"easeInOutQuad",loop:!1,autoplay:!1,delay:u["a"].stagger(120,{direction:"reverse"}),translateX:[0,150],translateY:[0,150],complete:function(){t.animIntro.play()}})}},watch:{},created:function(){},mounted:function(){this.initMain(),this.initIntro()}},ft=dt,mt=Object(v["a"])(ft,ut,ht,!1,null,"bee6adfa",null),pt=mt.exports,gt=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("svg",{ref:"svg",attrs:{width:"100%",height:"100%",viewBox:"0 0 150 150",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"150",height:"150",fill:t.pri}}),i("g",{ref:"objects"},[i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"",fill:t.sec}}),i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"rotate(-180 75 75)",fill:t.sec}}),i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"rotate(-90 75 75)",fill:t.sec}}),i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"rotate(90 75 75)",fill:t.sec}}),i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"rotate(-45 75 75)",fill:t.sec}}),i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"rotate(45 75 75)",fill:t.sec}}),i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"rotate(-22.5 75 75)",fill:t.sec}}),i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"rotate(-66.5 75 75)",fill:t.sec}}),i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"rotate(-112.5 75 75)",fill:t.sec}}),i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"rotate(-135 75 75)",fill:t.sec}}),i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"rotate(-157.5 75 75)",fill:t.sec}}),i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"rotate(157.5 75 75)",fill:t.sec}}),i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"rotate(135 75 75)",fill:t.sec}}),i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"rotate(112.5 75 75)",fill:t.sec}}),i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"rotate(66.5 75 75)",fill:t.sec}}),i("rect",{attrs:{width:"50",height:"4",x:"50%",y:"49%",transform:"rotate(22.5 75 75)",fill:t.sec}})])])},vt=[],wt={name:"Pinwheel",data:function(){return{animIntro:null,animMain:null}},computed:{},props:{pri:String,sec:String},components:{},methods:{playMain:function(){this.animMain.play()},playIntro:function(){this.animIntro.play()},initIntro:function(){this.animIntro=Object(u["a"])({duration:750,targets:this.$refs.objects.children,easing:"easeOutCubic",loop:!1,autoplay:!1,width:[0,50]})},initMain:function(){this.animMain=u["a"].timeline({duration:300,targets:this.$refs.objects.children,easing:"easeInOutQuad",loop:!1,autoplay:!1}).add({width:[50,0]}).add({width:[0,50]})}},watch:{},created:function(){},mounted:function(){this.initMain(),this.initIntro()}},yt=wt,bt=(i("6d71"),Object(v["a"])(yt,gt,vt,!1,null,"fc0fb8da",null)),It=bt.exports,Ot=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 150 150",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"150",height:"150",fill:t.pri}}),i("g",{ref:"rects"},[i("rect",{attrs:{x:"-83.6699",y:"74.6295",width:"223.869",height:"223.869",transform:"rotate(-45 -83.6699 74.6295)",stroke:t.sec,"stroke-width":"10",fill:"none"}}),i("rect",{attrs:{x:"-65.792",y:"74.6295",width:"198.586",height:"198.586",transform:"rotate(-45 -65.792 74.6295)",stroke:t.sec,"stroke-width":"10",fill:"none"}}),i("rect",{attrs:{x:"-47.9142",y:"74.6295",width:"173.303",height:"173.303",transform:"rotate(-45 -47.9142 74.6295)",stroke:t.sec,"stroke-width":"10",fill:"none"}}),i("rect",{attrs:{x:"-30.0362",y:"74.6295",width:"148.02",height:"148.02",transform:"rotate(-45 -30.0362 74.6295)",stroke:t.sec,"stroke-width":"10",fill:"none"}}),i("rect",{attrs:{x:"-12.1584",y:"74.6295",width:"122.737",height:"122.737",transform:"rotate(-45 -12.1584 74.6295)",stroke:t.sec,"stroke-width":"10",fill:"none"}}),i("rect",{attrs:{x:"5.71963",y:"74.6295",width:"97.4534",height:"97.4534",transform:"rotate(-45 5.71963 74.6295)",stroke:t.sec,"stroke-width":"10",fill:"none"}}),i("rect",{attrs:{x:"23.5976",y:"74.6295",width:"72.1702",height:"72.1702",transform:"rotate(-45 23.5976 74.6295)",stroke:t.sec,"stroke-width":"10",fill:"none"}}),i("rect",{attrs:{x:"41.4754",y:"74.6295",width:"46.8871",height:"46.8871",transform:"rotate(-45 41.4754 74.6295)",stroke:t.sec,"stroke-width":"10",fill:"none"}}),i("rect",{attrs:{x:"59.3532",y:"74.6295",width:"21.6039",height:"21.6039",transform:"rotate(-45 59.3532 74.6295)",stroke:t.sec,"stroke-width":"10",fill:"none"}})])])},Mt=[],xt={name:"Rectripple",data:function(){return{animIntro:null,animMain:null}},computed:{},props:{pri:String,sec:String},components:{},methods:{playMain:function(){this.animMain.play()},playIntro:function(){this.animIntro.play()},initIntro:function(){this.animIntro=Object(u["a"])({duration:300,targets:this.$refs.rects.children,loop:!1,autoplay:!1,easing:"easeInOutQuad",delay:u["a"].stagger(100),opacity:[0,1],strokeWidth:[0,3]})},initMain:function(){this.animMain=u["a"].timeline({targets:this.$refs.rects.children,loop:!1,autoplay:!1,duration:300}).add({easing:"easeInOutQuad",strokeWidth:[3,10],delay:u["a"].stagger(50)}).add({easing:"easeInOutQuad",strokeWidth:[10,3],delay:u["a"].stagger(50)})}},watch:{},created:function(){},mounted:function(){this.initMain(),this.initIntro()}},Ct=xt,kt=Object(v["a"])(Ct,Ot,Mt,!1,null,"9b427b20",null),jt=kt.exports,_t=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("svg",{ref:"svg",attrs:{width:"100%",height:"100%",viewBox:"0 0 150 150",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"150",height:"150",fill:t.pri}}),i("rect",{ref:"rect",attrs:{x:"75",width:"150",height:"150",fill:t.sec}})])},$t=[],Rt={name:"Halfblack",data:function(){return{animIntro:null,animMain:null}},computed:{},props:{pri:String,sec:String},components:{},methods:{playMain:function(){this.animMain.play()},playIntro:function(){this.animIntro.play()},initIntro:function(){this.animIntro=Object(u["a"])({duration:500,targets:this.$refs.rect,easing:"easeOutQuad",loop:!1,autoplay:!1,x:[150,75]})},initMain:function(){this.animMain=u["a"].timeline({targets:this.$refs.rect,loop:!1,autoplay:!1}).add({duration:500,easing:"easeInCirc",x:[75,300]}).add({duration:600,easing:"easeOutCirc",x:[-100,75]})}},watch:{},created:function(){},mounted:function(){this.initMain(),this.initIntro()}},St=Rt,Nt=Object(v["a"])(St,_t,$t,!1,null,"092e6695",null),zt=Nt.exports,Ft=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("svg",{ref:"svg",attrs:{width:"100%",height:"100%",viewBox:"0 0 150 150",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"150",height:"150",fill:t.pri}}),i("g",{ref:"objects"},[i("circle",{attrs:{cx:"75",cy:"75",r:"5.5",fill:"none",stroke:t.sec,"stroke-width":"3"}}),i("circle",{attrs:{cx:"75",cy:"75",r:"12.5",fill:"none",stroke:t.sec,"stroke-width":"3"}}),i("circle",{attrs:{cx:"75",cy:"75",r:"19.5",fill:"none",stroke:t.sec,"stroke-width":"3"}}),i("circle",{attrs:{cx:"75",cy:"75",r:"26.5",fill:"none",stroke:t.sec,"stroke-width":"3"}}),i("circle",{attrs:{cx:"75",cy:"75",r:"33.5",fill:"none",stroke:t.sec,"stroke-width":"3"}}),i("circle",{attrs:{cx:"75",cy:"75",r:"41.5",fill:"none",stroke:t.sec,"stroke-width":"3"}}),i("circle",{attrs:{cx:"75",cy:"75",r:"49.5",fill:"none",stroke:t.sec,"stroke-width":"3"}}),i("circle",{attrs:{cx:"75",cy:"75",r:"57.5",fill:"none",stroke:t.sec,"stroke-width":"3"}})])])},Et=[],Tt={name:"Bullseye",data:function(){return{animIntro:null,animMain:null,animpalette:null}},computed:{},props:{pri:String,sec:String},components:{},methods:{playMain:function(){this.animMain.play()},playIntro:function(){this.animIntro.play()},initIntro:function(){var t=this;this.animIntro=Object(u["a"])({duration:1e3,targets:this.$refs.objects.children,easing:"easeOutCirc",loop:!1,autoplay:!1,delay:u["a"].stagger(40),opacity:[0,1],complete:function(){t.animIntro.reverse()}})},initMain:function(){this.animMain=u["a"].timeline({targets:this.$refs.objects.children,loop:!1,autoplay:!1}).add({duration:300,easing:"easeOutSine",opacity:[1,0],delay:u["a"].stagger(40)}).add({duration:300,easing:"easeOutCirc",opacity:[0,1],delay:u["a"].stagger(40)})},initpalette:function(){}},watch:{},created:function(){},mounted:function(){this.initMain(),this.initIntro()}},At=Tt,Zt=(i("5a00"),Object(v["a"])(At,Ft,Et,!1,null,"7bb7e3c0",null)),Bt=Zt.exports,Qt={name:"Shapes",data:function(){return{animIntro:null,atom:0,prime:"#000000",second:"#FFFFFF",palettes:[["#318E40","#FFFFFF"]],flipped:!0}},computed:{},props:{num:Number},components:{Vines:q,Halfmoon:et,Diamond:lt,Trigrow:pt,Pinwheel:It,Rectripple:jt,Halfblack:zt,Bullseye:Bt},methods:{animate:function(){this.$refs[this.num].playMain()},playIntro:function(){var t=this;setTimeout((function(){t.$refs[t.num].playIntro()}),1e3*Math.random())},setAtom:function(t){this.atom=t},setColors:function(t){1===Math.round(Math.random())?(this.prime=t[0],this.second=t[1]):(this.prime=t[1],this.second=t[0])},setFlipped:function(){this.flipped=!1}},watch:{},created:function(){this.setAtom(Math.floor(8*Math.random())),this.setFlipped(1===Math.round(Math.random()))},mounted:function(){this.playIntro()}},Pt=Qt,Ht=(i("0410"),Object(v["a"])(Pt,L,W,!1,null,null,null)),Gt=Ht.exports,Lt={name:"Block",data:function(){return{width:"200%"}},components:{Mono:y,Nav:A,Solids:G,Shapes:Gt},props:{id:Number},computed:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["rows","cols","mode","resizing","transitioning"])),{},{first:function(){return 1===this.id},last:function(){return this.id===this.cols}}),watch:{},methods:{transition:function(){this.$store.commit("setTransitioning",!0)},animate:function(){this.$refs[this.id].animate()}},mounted:function(){}},Wt=Lt,Vt=(i("424a"),Object(v["a"])(Wt,h,d,!1,null,null,null)),Yt=Vt.exports;function Dt(t){var n=tn()*nn();return n>t.length?t=Jt(t,n-t.length):t.length>n&&(t=Xt(t,t.length-n)),t}function Jt(t,n){for(var i=0;i<n;i++)t.push({id:1e3*Math.random()+i});return t}function Xt(t,n){for(var i=0;i<n;i++)t.pop();return t}function qt(t){for(var n=0;n<t.length;n++)t[n].id=n+1;return t}function Kt(){var t=window.innerWidth;return t<=450?75:t<600?100:t<1e3?175:200}function Ut(t,n){for(var i=[],e=0;e<t*n;e++)e%n<3&&i.push("#block_"+(e+1));return i}function tn(){return Math.floor(window.innerWidth/Kt())}function nn(){return Math.floor(window.innerHeight/Kt())}var en={name:"Grid",data:function(){return{blocks:[],numCols:0,numRows:0,animIntro:null,animTransition:null,animNav:null,resizeTimer:null,randomAnimator:null}},components:{Block:Yt},computed:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["resizing","introing","transitioning","navOpen","naving"])),{},{container_style:function(){return{gridTemplateRows:"repeat("+this.numRows+", 1fr)",gridTemplateColumns:"repeat("+this.numCols+", 1fr)"}}}),watch:{numCols:function(){this.$store.commit("setCols",this.numCols)},numRows:function(){this.$store.commit("setRows",this.numRows)},introing:function(){this.introing||this.startRandomAnimator()},resizing:function(){this.resizing?(u["a"].set(".block",{opacity:1}),this.navOpen&&(document.getElementById("block_1").style.width="",this.$store.commit("toggleNav")),clearInterval(this.randomAnimator)):this.startRandomAnimator()},transitioning:function(){this.transitioning?this.initPlayTransition():this.animTransition.reset()},navOpen:function(){this.navOpen?(this.initNav(),this.animNav.play()):this.resizing||(document.getElementById("block_1").style.width="",this.animNav.play())}},mounted:function(){var t=this;this.makeGrid(),this.blocks=qt(this.blocks),setTimeout((function(){t.initIntro(),t.animIntro.play()}),500),window.addEventListener("resize",this.resizeGrid)},methods:{initIntro:function(){var t=this;this.animIntro=u["a"].timeline({targets:".block",easing:"easeOutExpo",complete:function(){t.$store.commit("setIntroing",!1),t.$store.commit("setMode","shapes")}}).add({borderColor:"#FFFFFF",borderWidth:"1px",duration:750,delay:u["a"].stagger(130,{grid:[this.numCols,this.numRows],from:0})}).add({borderColor:"rgba(255, 255, 255, 0)",borderWidth:"0px",duration:750})},initPlayTransition:function(){var t=this;this.animTransition=Object(u["a"])({targets:".block",easing:"easeOutExpo",autoplay:!1,opacity:function(t,n){return 0!==n?0:1},duration:250,delay:u["a"].stagger(75,{grid:[this.numCols,this.numRows],from:0}),complete:function(){t.$store.dispatch("outroComplete"),t.animTransition.reset()}})},initNav:function(){var t=this;this.animNav=Object(u["a"])({targets:Ut(this.numRows,this.numCols),easing:"easeOutExpo",autoplay:!1,opacity:function(t,n){return 0!==n?0:1},duration:300,delay:u["a"].stagger(100,{grid:[3,this.numRows],from:0}),complete:function(){t.animNav.reverse(),t.handlePostNav(),t.$store.dispatch("navComplete")}})},handlePostNav:function(){this.navOpen&&u["a"].set("#block_1",{width:"300%"})},makeGrid:function(){this.blocks=Dt(this.blocks),this.numCols=tn(),this.numRows=nn()},resizeGrid:function(){var t=this;this.resizing||this.$store.commit("setResizing",!0),clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout((function(){t.$store.commit("setResizing",!1),t.blocks=qt(t.blocks)}),500),this.makeGrid()},startRandomAnimator:function(){var t=this,n=0;this.randomAnimator=setInterval((function(){n=Math.floor(Math.random()*(t.numRows*t.numCols)),n>1&&t.$refs[n][0].animate()}),3e3)}}},an=en,rn=(i("9f4b"),Object(v["a"])(an,o,s,!1,null,null,null)),on=rn.exports,sn=(i("3e86"),{name:"App",components:{Grid:on}}),cn=sn,ln=(i("034f"),Object(v["a"])(cn,a,r,!1,null,null,null)),un=ln.exports;e["a"].use(l["a"]);var hn=new l["a"].Store({state:{rows:0,cols:0,mode:"intro",modes:["solids","mono","shapes"],introing:!0,resizing:!1,transitioning:!1,naving:!1,navRows:3,navCols:3,navOpen:!1},getters:{},mutations:{setRows:function(t,n){t.rows=n},setCols:function(t,n){t.cols=n},setMode:function(t,n){t.mode=n},setIntroing:function(t,n){t.introing=n},setResizing:function(t,n){t.resizing=n},setTransitioning:function(t,n){t.transitioning=n},setNaving:function(t,n){t.naving=n},setNavOpen:function(t,n){t.navOpen=n},toggleNav:function(t){t.navOpen=!t.navOpen}},actions:{introComplete:function(t){t.commit("setIntroing",!1)},outroComplete:function(t){t.commit("setMode",t.state.modes[Math.floor(3*Math.random())]),t.commit("setTransitioning",!1)},navComplete:function(t){t.commit("setNaving",!1)},changeNav:function(t){t.commit("setNaving",!0),t.commit("toggleNav")}}});e["a"].config.productionTip=!1,new e["a"]({store:hn,render:function(t){return t(un)}}).$mount("#app")},"5a00":function(t,n,i){"use strict";var e=i("79c6"),a=i.n(e);a.a},6470:function(t,n,i){},"6d71":function(t,n,i){"use strict";var e=i("6470"),a=i.n(e);a.a},"6fca":function(t,n,i){"use strict";var e=i("c342"),a=i.n(e);a.a},"70f7":function(t,n,i){},"79c6":function(t,n,i){},"85ec":function(t,n,i){},"8c4f":function(t,n,i){},"98ae":function(t,n,i){},"98c1":function(t,n,i){},"9f4b":function(t,n,i){"use strict";var e=i("c48a"),a=i.n(e);a.a},ad20:function(t,n,i){},b6c1:function(t,n,i){"use strict";var e=i("70f7"),a=i.n(e);a.a},c342:function(t,n,i){},c48a:function(t,n,i){},d62e:function(t,n,i){"use strict";var e=i("98ae"),a=i.n(e);a.a},db74:function(t,n,i){"use strict";var e=i("ad20"),a=i.n(e);a.a},e814:function(t,n,i){"use strict";var e=i("159b"),a=i.n(e);a.a}});
//# sourceMappingURL=app.04463483.js.map