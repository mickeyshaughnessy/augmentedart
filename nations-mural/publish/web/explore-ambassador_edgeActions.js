
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){yepnope({nope:['jquery.cookie.js','geturlparams.js'],complete:init});function init(){console.log(jQuery(document).getUrlParam('reset_cookie'));if(jQuery(document).getUrlParam('explore_cookie')!=null){jQuery.cookie('explore_cookie',jQuery(document).getUrlParam('explore_cookie'),{expires:3,path:'/'});}}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'ambassador'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.play('loop point');});
//Edge binding end
})("ambassador");
//Edge symbol end:'ambassador'
})(jQuery,AdobeEdge,"EDGE-294667248");