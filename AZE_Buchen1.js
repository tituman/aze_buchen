javascript:
/*
all the way down type your own KST and Arbeitsgang

v1. @pnd: all kst and abg are new because of new organization, will use webpage builder from now on...
*/
function Func1() {
	var iframe = document.getElementById('lower');
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
	var elm = innerDoc.getElementById('ok');
	elm.focus();
	simulateClick(elm);
	return;
}
function Func2() {
	var iframe = document.getElementById('app');
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
	var elms = innerDoc.getElementsByClassName('p1006infotableicons');
	var elm;
	for (var i = 0; i<elms.length; i++) {
		if (elms[i].title == 'nächste Tagesansicht') {elm = elms[i]; break;}
	}
	elm.focus();
	simulateClick(elm);
	return;
}
function simulateClick(elm) {
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window,
      0, 0, 0, 0, 0, false, false, false, false, 0, null);
  var canceled = !elm.dispatchEvent(evt);
  if(canceled) {
/*      A handler called preventDefault
     uh-oh, did some XSS hack your site? */
  } else {
/*      None of the handlers called preventDefault
     do stuff */
  }
  return;
}
function doIt() {
	var iframe = document.getElementById('app');
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
	var cell, cell1, cell2;
	
	if (cell = innerDoc.getElementsByName('p0104')){
		cell[0].value = '++.++';
	}
	if (cell1 = innerDoc.getElementById('IM')){
	/* 
Kostenstelle --\
				\
				 \
				  \
				   \
				    \
					 \
					  V   */
		cell1.value = '5501387';
	}
	if (cell2 = innerDoc.getElementById('KM')){
		/*
Arbeitsgang --\
				\
				 \
				  \
				   \
				    \
					 \
					  V   */
		cell2.value = '590';
	}
	setTimeout('Func1()', 250);
	setTimeout(function() {
		Func2();
	}, 2000);
}
doIt();
void(null);

