
(function($,Edge,compId){var _=null,y=true,n=false,e23='${_boats}',x1='2.0.1',x15='boats',cl='clip',e9='${_Boat}',a='Base State',x7='hidden',x47='0.93773',dt='Default Timeline',x3='2.0.1.268',i='none',x8='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',x24='43px 18.5px',lf='left',e52='${_nation-sprite3}',x17='86px',bg='background-color',x19='auto',e10='${_nation-animation}',x42='nation',fs='font-size',tp='top',e41='${_Text}',ov='overflow',e11='${_Stage}',x6='stage',e14='${_Zepellin}',zy='scaleY',t='transform',x12='rgba(255,255,255,0.00)',c='color',x4='rgba(0,0,0,0)',x18='37px',x33='Rectangle',g='image',x48='nation-sprite3',x44='-22px',x35='1px',m='rect',x16='0px',x25='zepellin',h='height',qiq='easeInQuad',bp='background-position',x39='clear-cookies',x53='@@0@@px @@1@@px',x51='bg',x49='rect(0px 600px 400px 0px)',p='px',o='opacity',x46='800px',x45='7200px',x43='-225px',e30='${_zepellin}',x26='44px',e22='${symbolSelector}',ta='text-align',e40='${_Rectangle}',x36='Arial, Helvetica, sans-serif',x='text',l='normal',po='center',zx='scaleX',x32='33px',e13='${_greybg_06}',x37='Text',s='style',w='width',x21='Boat',x31='22px 14.5px',ql='linear',x34='rgba(192,192,192,1)',xc='rgba(0,0,0,1)',x2='2.0.0',x27='29px',x29='Zepellin';var im='images/';var g28='zepellin.png',g20='boats.png',g50='nation-sprite3.png',g5='greybg_06.png';var s38="<br>clear cookie";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'greybg_06',t:g,r:['13px','28px','555px','373px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'nation-animation',t:m,r:['-23px','22px','auto','auto','auto','auto'],cl:['rect(0px 562.66998291016px 375px 0px)'],tf:[[],[],[],['0.9894','0.9894']]},{id:'Boat',t:m,r:['451','32','auto','auto','auto','auto']},{id:'Zepellin',t:m,r:['44','53','auto','auto','auto','auto']}],sI:[{id:'nation-animation',sN:'bg'},{id:'Zepellin',sN:'Zepellin'},{id:'Boat',sN:'Boat'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:y,l:{"cookie-check":104,"has-cookie":1000},tt:[{id:"eid36",tr:[function(e,d){this.eSA(e,d);},['stop','${_Zepellin}',[0]],""],p:0},{id:"eid130",tr:[function(e,d){this.eSA(e,d);},['stop','${_nation-animation}',[]],""],p:0},{id:"eid37",tr:[function(e,d){this.eSA(e,d);},['stop','${_Boat}',[0]],""],p:0},{id:"eid39",tr:[function(e,d){this.eSA(e,d);},['play','${_Boat}',[0]],""],p:750},{id:"eid38",tr:[function(e,d){this.eSA(e,d);},['play','${_Zepellin}',[0]],""],p:750},{id:"eid131",tr:[function(e,d){this.eSA(e,d);},['play','${_nation-animation}',[0]],""],p:750}]}}},"Boat":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x15,t:g,r:[x16,x16,x17,x18,x19,x19],f:[x4,im+g20,x16,x16]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:y,tt:[]}}},"Zepellin":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x25,t:g,r:[x16,x16,x26,x27,x19,x19],f:[x4,im+g28,x16,x16]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:9000,a:y,tt:[]}}},"clear-cookies":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x16,x16,x32,x32,x19,x19],id:x33,s:[0,xc,i],t:m,f:[x34]},{r:[x16,x35,x32,x27,x19,x19],n:[x36,24,xc,l,i,''],id:x37,text:s38,align:po,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"nation":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"bg":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x43,x44,x45,x46,x19,x19],tf:[[],[],[],[x47,x47]],id:x48,t:g,cl:[x49],f:[x4,im+g50,x16,x16]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:3000,a:y,tt:[]}}}};var S1=symbols[x6];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e9).P(o,0.01,_,_,"").T(0.104,1,0.646,ql,0);A1.A(e10).P(tp,22).P(zy,0.9894,t,_,"").P(zx,0.9894,t).P(cl,[0,562.66998291016,375,0],_,x8).P(lf,-23,_,_,p).P(o,0.01,_,_,"").T(0.104,1,0.646,ql,0);A1.A(e11).P(w,600).P(h,400).P(ov,x7).P(bg,x12,c).T(0,x12);A1.A(e13).P(tp,28).P(h,373).P(lf,13).P(w,555).P(o,1,_,_,"").T(0,1).T(0.104,0,0.646,ql);A1.A(e14).P(o,0.01,_,_,"").T(0.104,1,0.646,ql,0);var S2=symbols[x21];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e22).P(h,37).P(w,86);A2.A(e23).P("location",x24,"motion").T(0,[[43,18.5,0,0],[106,18.5,0,0]],1,ql).T(1.25,[[106,17.5,0,0],[-56.99,17.5,0,0]]).T(1.387,[[-56.99,17.5,0,0],[44.35,18.5,0,0]],2.613).P(o,1,_,_,"").T(0.5,0,0.5).T(1.387,1,0.363);var S3=symbols[x29];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e22).P(h,29).P(w,44);A3.A(e30).P("location",x31,"motion").T(0,[[22,14.5,0,0],[-13.52,-10.57,0,0]],1,ql).T(1.25,[[223.19,246.24,-129.57,-148.67],[22.1,15.5,0,0]],7.75,qiq).P(o,1,_,_,"").T(0.5,0,0.5,ql).T(1.25,1,0.25);var S4=symbols[x39];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e40).P(tp,0).P(lf,0).P(h,33);A4.A(e41).P(tp,1).P(ta,po).P("line-height",8).P(lf,0).P(fs,9);A4.A(e22).P(h,33).P(w,33);var S5=symbols[x42];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e22).P(h,400).P(w,14400);var S6=symbols[x51];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e22).P(h,750).P(w,6752);A6.A(e52).P(tp,-22).P(zy,0.93773,t,_,"").P(zx,0.93773,t).P(cl,[0,600,400,0],_,x8).P(lf,-225,_,_,p).P(bp,[0,0],_,x53).T(0,[0,0]).T(0.127,[-600,0]).T(0.25,[-1200,0]).T(0.372,[-1800,0]).T(0.5,[-2400,0]).T(0.616,[-3000,0]).T(0.75,[-3600,0]).T(0.874,[-4200,0]).T(1,[-4800,0]).T(1.139,[-5400,0]).T(1.25,[-6000,0]).T(1.379,[-6600,0]).T(1.5,[0,-400]).T(1.621,[-600,-400],_,_,[-7200,0]).T(1.75,[-1200,-400],_,_,[-7800,0]).T(1.869,[-1800,-400],_,_,[-8400,0]).T(2,[-2400,-400],_,_,[-9000,0]).T(2.135,[-3000,-400],_,_,[-9600,0]).T(2.25,[-3600,-400]).T(2.368,[-4200,-400]).T(2.5,[-4800,-400]).T(2.629,[-5400,-400]).T(2.75,[-6000,-400]).T(2.876,[-6600,-400]);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"edge-animate");