
(function($,Edge,compId){var _=null,y=true,n=false,x16='no-access-message',e38='${_foreground_400400}',x37='foreground_400400_symbol_1',e31='${_background_400400_1}',a='Base State',bsz='background-size',x7='hidden',e8='${_Button}',dt='Default Timeline',e14='${_Athlete_Trigger}',i='none',lf='left',e43='${_measure_button_160x182px}',x39='measure_button_160x182px',bp='background-position',bg='background-color',x21='auto',x24='background_400400_1',tp='top',x35='2400px',ov='overflow',e10='${_Stage}',x6='stage',e15='${_error-message_foreground}',zy='scaleY',rz='rotateZ',x1='4.0.0',c='color',x3='rgba(0,0,0,0)',x12='rgba(255,255,255,0)',e13='${_BG}',x5='rgba(192,192,192,0.00)',x11='rgba(0,0,0,0.00)',x22='download_button_200x200px_symbol_1',x32='@@0@@px @@1@@px',qik='easeInBack',x40='480px',x20='15',x28='0px',h='height',qiq='easeInQuad',p='px',o='opacity',x41='728px',t='transform',e17='${symbolSelector}',x2='4.0.0.359',e9='${_Athlete}',r='deg',zx='scaleX',g='image',s='style',x30='background_400400_symbol_1',x19='0',x33='foreground_400400',m='rect',w='width',x34='1600px',x18='measure_button_160x182px_symbol_1',ql='linear',x29='4800px',x26='2000px',qok='easeOutBack',e23='${_measure_button_160x182px_symbol_1}',x25='1200px';var im='images/';var g27='background_%23%5B400%2C400%5D_1.jpg',g4='error-message_foreground.png',g42='measure_button_160x182px.png',g36='foreground_%23%5B400%2C400%5D.png';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'BG',t:m,r:['0','0','auto','auto','auto','auto']},{id:'Athlete',t:m,r:['0','0','auto','auto','auto','auto']},{id:'error-message_foreground',t:g,r:['28px','20px','348px','348px','auto','auto'],f:[x3,im+g4,'0px','0px']},{id:'Athlete_Trigger',t:m,r:['37px','146px','189px','233px','auto','auto'],o:1,f:[x5],s:[0,"rgb(0, 0, 0)",i]},{id:'Button',t:m,r:['61','64','auto','auto','auto','auto']}],sI:[{id:'Button',sN:'download_button_200x200px_symbol_1',a:{}},{id:'Athlete',sN:'foreground_400400_symbol_1',a:{}},{id:'BG',sN:'background_400400_symbol_1',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:40187,a:y,l:{"loop":1200,"reset":33000,"no-access":40000},tt:[{id:"eid670",tr:[function(e,d){this.eSA(e,d);},['play','${_Athlete}',[0]],""],p:187},{id:"eid671",tr:[function(e,d){this.eSA(e,d);},['play','${_BG}',[0]],""],p:422.84286619972},{id:"eid828",tr:[function(e,d){this.eSA(e,d);},['play','${_Button}',[]],""],p:1000}]}}},"no-access-message":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:20000,a:n,tt:[]}}},"download_button_200x200px_symbol_1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x18,t:m,r:[x19,x20,x21,x21,x21,x21]}],sI:[{id:'measure_button_160x182px_symbol_1',sN:'measure_button_160x182px_symbol_1',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:12250,a:n,l:{"loop":1422,"off-position":12250},tt:[{id:"eid885",tr:[function(e,d){this.eSA(e,d);},['play','${_measure_button_160x182px_symbol_1}',[]],""],p:0},{id:"eid882",tr:[function(e,d){this.eSA(e,d);},['play','${_measure_button_160x182px_symbol_1}',[]],""],p:1857},{id:"eid883",tr:[function(e,d){this.eSA(e,d);},['play','${_measure_button_160x182px_symbol_1}',[]],""],p:4929},{id:"eid884",tr:[function(e,d){this.eSA(e,d);},['play','${_measure_button_160x182px_symbol_1}',[]],""],p:8750}]}}},"background_400400_symbol_1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x24,t:g,r:[x19,x19,x25,x26,x21,x21],f:[x3,im+g27,x28,x28,x29,x29]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:781,a:n,tt:[]}}},"foreground_400400_symbol_1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x33,t:g,r:[x28,x28,x34,x35,x21,x21],f:[x3,im+g36,x28,x28,x34,x35]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1387,a:n,tt:[]}}},"measure_button_160x182px_symbol_1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x39,t:g,r:[x28,x28,x40,x41,x21,x21],f:[x3,im+g42,x28,x28,x40,x41]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1749,a:n,tt:[]}}}};var S1=symbols[x6];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e8).P(tp,0).P(o,1,_,_,"").P(lf,0,_,_,p).P(zy,1,t,_,"").T(1.187,1).T(2.013,1).T(39.236,0,0.951,qok).P(zx,1,t).T(1.187,1).T(2.013,1).T(39.236,0,0.951);A1.A(e9).P(o,0,_,_,"").T(0,1,0.187,qok).T(39,0,1);A1.A(e10).P(w,400).P(h,400).P(ov,x7).P(bg,x11,c).T(0,x12,0.187,qok);A1.A(e13).P(o,0,_,_,"").T(0,1,0.187,qok).T(39,0,1);A1.A(e14).P(bg,x5,c).P(tp,0).T(4.468,0).P(h,347).T(4.468,347).P(o,0,_,_,"").T(40,0).P(lf,62,_,_,p).T(4.468,62).P(w,338).T(4.468,338);A1.A(e15).P(tp,20).P(h,348).P(lf,28).P(w,348).P(zx,0,t,_,"").T(0,0).T(40,1).P(o,0).T(0,0).T(40,1).P(zy,0,t).T(0,0).T(40,1);var S2=symbols[x16];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e17).P(h,348).P(w,348);var S3=symbols[x22];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e17).P(h,200).P(w,200);A3.A(e23).P(lf,0).P(tp,15).P(zx,0,t,_,"").T(0,0.8,1.422,qiq).T(2.351,1,0.578,qik).T(2.929,0.8,0.571).T(10.172,1,0.578).T(10.75,0.8,0.571).T(12,0,0.25).P(zy,0,t).T(0,0.8,1.422,qiq).T(2.351,1,0.578,qik).T(2.929,0.8,0.571).T(10.172,1,0.578).T(10.75,0.8,0.571).T(12,0,0.25);var S4=symbols[x30];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e17).P(h,400).P(w,400);A4.A(e31).P(tp,0).T(0,0).P(bp,[0,0],_,x32).T(0,[0,0]).T(0.055,[-400,0]).T(0.111,[-800,0]).T(0.166,[0,-400]).T(0.222,[-400,-400]).T(0.277,[-800,-400]).T(0.333,[0,-800]).T(0.388,[-400,-800]).T(0.444,[-800,-800]).T(0.5,[0,-1200]).T(0.555,[-400,-1200]).T(0.615,[-800,-1200]).T(0.67,[0,-1600]).T(0.726,[-400,-1600]).T(0.781,[0,0]).P(h,400).T(0,400).P(bsz,[1200,2000],_,x32).T(0,[1200,2000]).P(lf,0).T(0,0).P(w,400).T(0,400);var S5=symbols[x37];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e17).P(h,400).P(w,400);A5.A(e38).P(rz,0,t,_,r).P(bsz,[1600,2400],_,x32).P(tp,0,_,_,p).T(0,0).P(h,400).T(0,400,_,_,0).P(lf,0).T(0,0).P(bp,[0,0],_,x32).T(0,[0,0]).T(0.055,[-400,0]).T(0.111,[-800,0]).T(0.166,[-1200,0]).T(0.222,[0,-400]).T(0.277,[-400,-400]).T(0.333,[-800,-400]).T(0.388,[-1200,-400]).T(0.444,[0,-800]).T(0.5,[-400,-800]).T(0.555,[-800,-800]).T(0.611,[-1200,-800]).T(0.666,[0,-1200]).T(0.722,[-400,-1200]).T(0.777,[-800,-1200]).T(0.833,[-1200,-1200]).T(0.888,[0,-1600]).T(0.944,[-400,-1600]).T(1,[-800,-1600]).T(1.055,[-1200,-1600]).T(1.111,[0,-2000]).T(1.166,[-400,-2000]).T(1.222,[-800,-2000]).T(1.277,[-1200,-2000]).T(1.332,[0,0]).T(1.387,[-400,0]).P(w,400).T(0,400,_,_,0);var S6=symbols[x18];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e17).P(h,182).P(w,160);A6.A(e43).P(rz,0,t,_,r).P(bsz,[480,728],_,x32).P(tp,0,_,_,p).T(0,0).P(h,182).T(0,182,_,_,0).P(bp,[-160,0],_,x32).T(0,[-160,0]).T(0.083,[-320,0]).T(0.167,[0,-182]).T(0.25,[-160,-182]).T(0.333,[-320,-182]).T(0.417,[0,-364]).T(0.5,[-160,-364]).T(0.583,[-320,-364]).T(0.667,[0,-546]).T(0.75,[-160,-546]).T(0.833,[-160,-546]).T(0.916,[0,-546]).T(1,[-320,-364]).T(1.083,[-160,-364]).T(1.166,[0,-364]).T(1.25,[-320,-182]).T(1.333,[-160,-182]).T(1.416,[0,-182]).T(1.5,[-320,0]).T(1.583,[-160,0]).T(1.666,[0,0]).T(1.749,[0,0]).P(lf,0).T(0,0).P(w,160).T(0,160,_,_,0);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-116472068");