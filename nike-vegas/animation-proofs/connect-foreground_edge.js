
(function($,Edge,compId){var _=null,y=true,n=false,zy='scaleY',t='transform',x3='4.0.0.359',e11='${_Athlete}',c='color',x4='rgba(0,0,0,0)',g='image',x6='rgba(192,192,192,0.00)',a='Base State',x22='@@0@@px @@1@@px',bsz='background-size',x10='hidden',m='rect',dt='Default Timeline',e12='${_Athlete_Trigger}',i='none',x16='foreground',e23='${_foreground}',rz='rotateZ',p='px',o='opacity',lf='left',r='deg',x21='connect_foreground_400400_symbol_1',x1='\'Trade Gothic LT Std-Condensed18\', TradeGothicBoldCond, Helvetica',s='style',e15='${symbolSelector}',x18='1600px',x17='0px',bp='background-position',x14='no-access-message',bg='background-color',x19='auto',h='height',x2='4.0.0',zx='scaleX',qok='easeOutBack',w='width',tp='top',ql='linear',ov='overflow',e9='${_Stage}',x8='rgba(255,255,255,0.00)',x7='stage',e13='${_error-message_foreground}';var im='images/';var g5='error-message_foreground.png',g20='foreground.png';var fonts={};fonts[x1]='<link rel=\"stylesheet\" type=\"text/css\" href=\"http://augmentedart.com/nike-vegas/style.css\" />';var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'error-message_foreground',t:g,r:['28px','20px','348px','348px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'Athlete',t:m,r:['0','0','auto','auto','auto','auto']},{id:'Athlete_Trigger',t:m,r:['37px','146px','189px','233px','auto','auto'],o:1,f:[x6],s:[0,"rgb(0, 0, 0)",i]}],sI:[{id:'Athlete',sN:'connect_foreground_400400_symbol_1',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:40000,a:y,l:{"loop":2000,"reset":33000,"no-access":40000},tt:[]}}},"no-access-message":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:20000,a:n,tt:[]}}},"connect_foreground_400400_symbol_1":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x16,t:g,r:[x17,x17,x18,x18,x19,x19],f:[x4,im+g20,x17,x17,x18,x18]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:5042,a:y,l:{"loop":1000,"reset":3000},tt:[]}}}};var S1=symbols[x7];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e9).P(bg,x8,c).P(ov,x10).P(h,400).P(w,400);A1.A(e11).P(o,1,_,_,"").T(0,1).T(33,1).T(39,0,1,qok);A1.A(e12).P(bg,x6,c).P(tp,0).T(0,0).P(zy,1,t,_,"").T(39,0,1,qok).P(h,400,_,_,p).T(0,400).P(zx,1,t,_,"").T(39,0,1).P(o,0).T(39,0).T(40,0).P(lf,0,_,_,p).T(0,0).P(w,400).T(0,400);A1.A(e13).P(tp,20).P(h,348).P(lf,28).P(w,348).P(zx,0,t,_,"").T(0,0).T(40,1).P(o,0).T(0,0).T(40,1).P(zy,0,t).T(0,0).T(40,1);var S2=symbols[x14];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e15).P(h,348).P(w,348);var S3=symbols[x21];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e15).P(h,400).P(w,400);A3.A(e23).P(bsz,[1600,1600],_,x22).P(rz,0,t,_,r).P(tp,0,_,_,p).T(1,0).P(bp,[0,0],_,x22).T(1,[0,0]).T(1.1,[-400,0]).T(1.2,[-800,0]).T(1.3,[-1200,0]).T(1.4,[0,-400]).T(1.5,[-400,-400]).T(1.6,[-800,-400]).T(1.7,[-1200,-400]).T(1.8,[0,-800]).T(1.9,[-400,-800]).T(2,[-800,-800]).T(2.1,[-1200,-800]).T(2.2,[0,-1200]).T(2.3,[-400,-1200]).T(2.4,[-800,-1200]).T(2.5,[-1200,-1200]).T(3.4,[-1200,-1200]).T(3.5,[-800,-1200]).T(3.6,[-400,-1200]).T(3.7,[0,-1200]).T(3.8,[-1200,-800]).T(3.9,[-800,-800]).T(4,[-400,-800]).T(4.1,[0,-800]).T(4.2,[-1200,-400]).T(4.3,[-800,-400]).T(4.4,[-400,-400]).T(4.5,[0,-400]).T(4.6,[-1200,0]).T(4.7,[-800,0]).T(4.8,[-400,0]).T(4.9,[0,0]).P(h,400).T(1,400).P(o,0,_,_,"").T(0.863,1,0.137,ql).T(4.9,0,0.142).P(lf,0,_,_,p).T(1,0).P(w,400).T(1,400);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-116472068");