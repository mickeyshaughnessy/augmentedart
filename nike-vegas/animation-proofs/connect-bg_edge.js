
(function($,Edge,compId){var _=null,y=true,n=false,zy='scaleY',t='transform',x3='4.0.0.359',x14='no-access-message',c='color',x4='rgba(0,0,0,0)',e11='${_BG}',x6='rgba(192,192,192,0.00)',e13='${_error-message_bg}',x16='background',a='Base State',x23='@@0@@px @@1@@px',bsz='background-size',x10='hidden',m='rect',dt='Default Timeline',e12='${_Athlete_Trigger}',i='none',qok='easeOutBack',p='px',o='opacity',lf='left',e24='${_background}',rz='rotateZ',r='deg',x22='background_400400_symbol_1',e15='${symbolSelector}',x17='0px',bp='background-position',x18='2000px',bg='background-color',x1='\'Trade Gothic LT Std-Condensed18\', TradeGothicBoldCond, Helvetica',x20='auto',x2='4.0.0',h='height',zx='scaleX',g='image',w='width',tp='top',x19='2400px',ql='linear',ov='overflow',e9='${_Stage}',x8='rgba(255,255,255,0.00)',x7='stage',s='style';var im='images/';var g5='error-message_bg.jpg',g21='background.jpg';var fonts={};fonts[x1]='<link rel=\"stylesheet\" type=\"text/css\" href=\"http://augmentedart.com/nike-vegas/style.css\" />';var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'error-message_bg',t:g,r:['0','0','400px','400px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'BG',t:m,r:['0','0','auto','auto','auto','auto']},{id:'Athlete_Trigger',t:m,r:['37px','146px','189px','233px','auto','auto'],o:1,f:[x6],s:[0,"rgb(0, 0, 0)",i]}],sI:[{id:'BG',sN:'background_400400_symbol_1',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:40000,a:y,l:{"loop":2000,"reset":33000,"no-access":40000},tt:[]}}},"no-access-message":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:20000,a:n,tt:[]}}},"background_400400_symbol_1":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x16,t:g,r:[x17,x17,x18,x19,x20,x20],f:[x4,im+g21,x17,x17,x18,x19]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:6900,a:y,l:{"loop":0,"reset":4000},tt:[]}}}};var S1=symbols[x7];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e9).P(bg,x8,c).P(ov,x10).P(h,400).P(w,400);A1.A(e11).P(o,1,_,_,"").T(39,0,1,qok);A1.A(e12).P(bg,x6,c).P(tp,0).T(0,0).P(zy,1,t,_,"").T(39,0,1,qok).P(h,400,_,_,p).T(0,400).P(zx,1,t,_,"").T(39,0,1).P(o,0).T(39,0).T(40,0).P(lf,0,_,_,p).T(0,0).P(w,400).T(0,400);A1.A(e13).P(o,0,_,_,"").T(0,0).T(40,1);var S2=symbols[x14];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e15).P(h,348).P(w,348);var S3=symbols[x22];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e15).P(h,400).P(w,400);A3.A(e24).P(rz,0,t,_,r).P(bsz,[2000,2400],_,x23).P(tp,0,_,_,p).T(0,0).P(h,400).T(0,400).P(lf,0).T(0,0).P(bp,[0,0],_,x23).T(0,[0,0]).T(0.1,[-400,0]).T(0.2,[-800,0]).T(0.3,[-1200,0]).T(0.4,[-1600,0]).T(0.5,[0,-400]).T(0.6,[-400,-400]).T(0.7,[-800,-400]).T(0.8,[-1200,-400]).T(0.9,[-1600,-400]).T(1,[0,-800]).T(1.1,[-400,-800]).T(1.2,[-800,-800]).T(1.3,[-1200,-800]).T(1.4,[-1600,-800]).T(1.5,[0,-1200]).T(1.6,[-400,-1200]).T(1.7,[-800,-1200]).T(1.8,[-1200,-1200]).T(1.9,[-1600,-1200]).T(2,[0,-1600]).T(2.1,[-400,-1600]).T(2.2,[-800,-1600]).T(2.3,[-1200,-1600]).T(2.4,[-1600,-1600]).T(2.5,[0,-2000]).T(2.6,[-400,-2000]).T(2.7,[-800,-2000]).T(2.8,[-1200,-2000]).T(2.9,[-1600,-2000]).T(4,[-1600,-2000]).T(4.1,[-1200,-2000]).T(4.2,[-800,-2000]).T(4.3,[-400,-2000]).T(4.4,[0,-2000]).T(4.5,[-1600,-1600]).T(4.6,[-1200,-1600]).T(4.7,[-800,-1600]).T(4.8,[-400,-1600]).T(4.9,[0,-1600]).T(5,[-1600,-1200]).T(5.1,[-1200,-1200]).T(5.2,[-800,-1200]).T(5.3,[-400,-1200]).T(5.4,[0,-1200]).T(5.5,[-1600,-800]).T(5.6,[-1200,-800]).T(5.7,[-800,-800]).T(5.8,[-400,-800]).T(5.9,[0,-800]).T(6,[-1600,-400]).T(6.1,[-1200,-400]).T(6.2,[-800,-400]).T(6.3,[-400,-400]).T(6.4,[0,-400]).T(6.5,[-1600,0]).T(6.6,[-1200,0]).T(6.7,[-800,0]).T(6.8,[-400,0]).T(6.9,[0,0]).P(w,400).T(0,400);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-116472068");