
(function($,Edge,compId){var _=null,y=true,n=false,zy='scaleY',t='transform',c='color',x4='rgba(0,0,0,0)',g='image',x1='2.0.1',e27='${_Into-the-Woods-woman}',x35='222.2px 478.20001831055px',e34='${_petal-5}',x33='235px 471px',a='Base State',e16='${_Explosion}',e32='${_petal2}',x22='hidden',s='style',x26='234.5px 477.75001220703px',cl='clip',dt='Default Timeline',qiq='easeInQuad',e28='${_petal1}',x3='2.0.1.268',r='deg',x17='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',qoq='easeOutQuad',x29='219.43646748861px 479.17227172852px',e30='${_petal-4}',p='px',o='opacity',lf='left',e25='${_petal6}',e23='${_petal3}',x24='237.39998168945px 471.09378051758px',h='height',tp='top',e18='${_explosion_tiny2}',x20='rgba(255,255,255,1)',e19='${_Poster}',bg='background-color',e15='${_shadow}',qq='easeInOutQuad',w='width',zx='scaleX',ql='linear',ov='overflow',e21='${_Stage}',x31='230.5px 472px',x14='stage',x2='2.0.0';var im='images/';var g8='petal3.png',g5='Poster.png',g10='petal-5.png',g11='petal6.png',g13='explosion_tiny.png',g7='petal2.png',g6='petal1.png',g9='petal-4.png',g12='shadow.png';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'Poster',t:g,r:['0px','0px','400px','639px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'Into-the-Woods-woman',t:g,r:['0','0','400px','639px','auto','auto'],f:[x4,'Into-the-Woods-woman.png','0px','0px']},{id:'petal1',t:g,r:['206px','470px','27px','18px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'petal2',t:g,r:['223px','464px','24px','14px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'petal3',t:g,r:['225px','463px','24px','16px','auto','auto'],f:[x4,im+g8,'0px','0px']},{id:'petal-4',t:g,r:['252px','569px','23px','12px','auto','auto'],f:[x4,im+g9,'0px','0px']},{id:'petal-5',t:g,r:['211px','472px','23px','13px','auto','auto'],f:[x4,im+g10,'0px','0px']},{id:'petal6',t:g,r:['223px','470px','23px','15px','auto','auto'],f:[x4,im+g11,'0px','0px']},{id:'shadow',t:g,r:['99px','516px','174px','123px','auto','auto'],o:0.32131958007812,f:[x4,im+g12,'0px','0px']},{id:'Explosion',t:'group',r:['7px','319px','150px','177px','auto','auto'],cl:['rect(0px 146px 192px 0px)'],tf:[[],[],[],['1.05894','0.69492']],c:[{id:'explosion_tiny2',t:g,r:['-2px','176px','900px','800px','auto','auto'],cl:['rect(0px 150px 100px 0px)'],f:[x4,im+g13,'0px','0px'],tf:[[],[],[],['1','1.36']]}]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:8166,a:y,tt:[]}}}};var S1=symbols[x14];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e15).P(tp,516).P(o,0.32,_,_,"").P(lf,99,_,_,p);A1.A(e16).P(tp,319).P(zy,0.69492,t,_,"").P(h,177,_,_,p).P(zx,1.05894,t,_,"").P(lf,7,_,_,p).P(cl,[0,146,192,0],_,x17).P(w,150);A1.A(e18).P(tp,176).P(zy,1.36,t,_,"").P(zx,1,t).P(cl,[0,150,100,0],_,x17).P(lf,-2,_,_,p);A1.A(e19).P(lf,0).P(tp,0);A1.A(e21).P(bg,x20,c).P(ov,x22).P(h,639).P(w,400);A1.A(e23).P("location",x24,"motion").T(4.75,[[237.4,471.09,0,0],[236.92,490.23,1.77,9.04,5.81,29.6],[244.72,499.37,-0.84,32.68,-0.24,9.45],[247,520,0,0]],0.41,ql).T(5.16,[[247,520,0,0],[268.23,528.27,10.2,7.28,28.23,20.16],[272.18,541.37,11.49,8.74,11.74,8.93],[299.19,547.07,19.22,13.65,12.91,9.17],[313.63,571.57,51.71,45.32,15.99,14.01],[345,590,0,0]],2.907).P(zy,0.8,t,_,"").T(5.16,1,2.907).P(zx,0.8,t).T(5.16,1,2.907);A1.A(e25).P("location",x26,"motion").T(5.078,[[234.5,477.75,0,0],[231.23,492.67,0.38,18.15,0.52,24.91],[238.3,510.5,3.48,23.45,2.65,17.83],[235.5,525.5,0,0]],0.49,ql).T(5.568,[[235.5,525.5,0,0],[235.47,534.39,12.21,5.46,16.08,7.19],[259.15,535.18,32.45,6.64,18.4,3.77],[273.5,542.5,0,0]],1.14);A1.A(e27).P(zx,1,t,_,"").T(4.25,1.01,1,ql).T(5.25,1,1,qiq).P(zy,1,t).T(4.25,1.01,1,qoq).T(5.25,1,1,qiq).P("filter.hue-rotate",0,"subproperty",_,r).T(4.25,360,2,ql);A1.A(e28).P("location",x29,"motion").T(4.25,[[219.44,479.17,0,0],[220.48,494.4,-4.51,14.5,-6.57,21.13],[215.29,504.37,2.53,31.73,1.29,16.19],[213.89,517.41,0,0]],0.5,qq).T(4.75,[[213.89,517.41,0,0],[210.18,528.63,13.45,21.87,11.76,19.13],[225.83,541.66,-6.04,32.04,-3.59,19.03],[211.06,551.91,-31.77,7.29,-40.09,9.2],[182.42,564.52,-32.23,6.13,-40.81,7.76],[115.21,565.69,-62.19,0.73,-39.18,0.46],[100.58,587.94,-122.32,50.13,-23.13,9.48],[100.5,611,0,0]],3.416,ql).P(zy,0.9,t,_,"").T(4.25,0.9).T(4.75,1,3.416).P(zx,0.6,t).T(4.25,0.9,0.5).T(4.75,1,3.416);A1.A(e30).P(zx,0.9,t,_,"").T(4.553,1,2.63,ql).P(zy,0.9,t).T(4.553,1,2.63).P("location",x31,"motion").T(4.553,[[230.5,472,0,0],[230.5,516,0,0]],0.401).T(4.954,[[230.5,516,0,0],[263.5,575,0,0]],2.229);A1.A(e32).P("location",x33,"motion").T(4.25,[[235,471,0,0],[228.47,486.8,0,20.06,0,28.21],[237.59,508.04,5.72,34.81,3.55,21.62],[235,530,0,0]],0.617,ql).T(4.867,[[235,530,0,0],[236.95,546.78,-17.21,21.07,-19.19,23.5],[198.8,564.36,-41.12,33.75,-27.07,22.22],[186,590,0,0]],2.426);A1.A(e34).P("location",x35,"motion").T(4.93,[[222.2,478.2,0,0],[220.69,487.15,-0.23,13.72,-0.27,15.66],[223.6,502.79,0.74,26.57,0.45,16.04],[221.5,519.5,0,0]],0.401,ql).T(5.331,[[221.5,519.5,0,0],[223.82,529.52,3,5.28,8.47,14.9],[233.2,534.4,-18.47,58.03,-2.15,6.75],[246.5,563.5,0,0]],1.594).P(zy,0.8,t,_,"").T(5.331,1,1.594).P(zx,0.8,t).T(5.331,1,1.594);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-75241278");