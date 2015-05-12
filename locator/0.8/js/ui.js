//
//  ui.js
//  ver. 0.8
//  Copyright (C) 2012 Hiroyuki Kai All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var clientMac = false;

shiftPressed = false;
var cmdPressed = false;


var quickList = [];
var maxQuickList = 20;

mydebug("ui.js loaded");

function isAppleKey(code,agent){
	return ((code == 91 || code == 91) && agent.indexOf('WebKit') != -1) ||
			(code == 224 && agent.indexOf('Firefox') != -1) ||
			(code == 17 && agent.indexOf('Opera') != -1)
}

function keyDown(event){
//	mydebug('keyDown()')
	if(event.shiftKey){
		shiftPressed = true;
		document.getElementById('gobutton').className = 'shift'
		document.getElementById('gobutton').value = 'Parse'
	}else{
		shiftPressed = false;
		document.getElementById('gobutton').className = 'noshift'
		document.getElementById('gobutton').value = 'Go'
	}
	if(clientMac){
		agent = navigator.userAgent
		if(isAppleKey(event.keyCode,agent)){
			cmdPressed = true;
		}
	}else{
		if(event.ctrlKey){
			cmdPressed = true;
		}
	}
}

function keyUp(event){
//	mydebug('keyUp()')
	if(event.shiftKey){
		shiftPressed = true;
		document.getElementById('gobutton').className = 'shift'
		document.getElementById('gobutton').value = 'Parse'
	}else{
		shiftPressed = false;
		document.getElementById('gobutton').className = 'noshift'
		document.getElementById('gobutton').value = 'Go'
	}
	if(clientMac){
		agent = navigator.userAgent
		if(isAppleKey(event.keyCode,agent)){
			cmdPressed = false;
		}
	}else{
		cmdPressed = event.ctrlKey;
	}
}

function divClicked(id){
	mydebug('divClicked()');
	document.getElementById('textsearch').className= ''
	document.getElementById('autofillsearch').className= ''
	document.getElementById(id).className= 'clicked'
}



function initial(){
		var arg = new Object;
		var aSplit1 = location.search.split("?");
		
    mydebug(location.href);
		if(navigator.userAgent.indexOf("Mac") != -1 ){
			clientMac = true;
		}
		byid('suggesttext').value = '';
		byid('suggestvol').value = '';
		byid('suggestpage').value = ''	;
		
    if(location.href.indexOf("http://")==-1){
//        byid('socialbookmarks').style.display = 'none';
//        byid('fc2counter').style.display = 'none';
//        mydebug('Set invisible');
    }
		if( aSplit1.length <= 1 ){
				startSuggest();
				return;
		}
		var pair=aSplit1[1].split('&');
		if(!pair){
				startSuggest();
				return;
		}
		for(i=0;pair[i];i++) {
				var kv = pair[i].split('=');
				arg[kv[0]]=kv[1];
		}
		byid("freeword").value = mydecodeURI(arg["q"]);
		if(arg["redirect"]=="yes"){
				document.title = "Article Locator for Chemistry - Redirect mode";
				goFreeWord();
				if(!canOpen)
						startSuggest();
		}else{
				startSuggest();
				parseFreeWord();
		}

		
}


