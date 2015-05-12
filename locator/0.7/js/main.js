//
//  main.js
//  ver. 0.7
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

///////
//Debug options
//These should be false in a release version
var debug = false;
///

var canOpen = false;
var otherjournals;

isSupported = new Array();
jumpJournal = new Array();

mydebug("main.js loaded");

function initial(){
	var arg = new Object;
	var aSplit1 = location.search.split("?");
	
    mydebug(location.href);
    if(location.href.indexOf("http://")==-1){
        document.getElementById('reporterrorlink').style.visibility = 'hidden';
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
	document.getElementById("freeword").value = mydecodeURI(arg["q"]);
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

function testCitation(){
	var testData = [
	"",
	"",
	""
	];
}

function mydecodeURI(str){
	var ret = new String(str);
	ret = ret.replace(/\+/g,' ').replace(/%3A/g,':').replace(/%E2%80%93/g,'-').replace(/%2C/g,',').replace(/%20/g,' ');	
	return ret;
}


function startSuggest() {
	var options = new Array();
	new Suggest.Local(
		"suggesttext",
		"suggest",
		alljournals,
		{dispMax: 10, highlight: true}
		);
}

function reportErrorPopup() {
	document.getElementById('reportcitation').value = document.getElementById('freeword').value;
	document.getElementById('report').style.display = 'block';
}

function reportErrorClose() {
	document.getElementById('report').style.display = 'none';
}

function submitReport(){
    var citation = document.getElementById('reportcitation').value;
    var ret = _gaq.push(['_trackEvent', 'UserFeedback', 'Error', citation]);
    if(ret==0)
        document.getElementById('reportresult').innerHTML = 'Report sent. Thank you.';
    else
		document.getElementById('reportresult').innerHTML = 'Submission failed. Write me at <a href="mailto:fullereneC84@gmail.com">fullerenec84@gmail.com</a>';        
}

function submitCallback()
{
	if (httpObj.readyState == 4){
		if(httpObj.status == 200){
			document.getElementById('reportresult').innerHTML = 'Report sent. Thank you.';
		}else if (httpObj.status == 0){
			document.getElementById('reportresult').innerHTML = 'Error report is not available from a local HTML file.';
		}else{
			document.getElementById('reportresult').innerHTML = 'Submission failed.';
			mydebug(""+httpObj.status);
		}
	}else{
		document.getElementById('reportresult').innerHTML = 'Submitting...';
	}
}


function parseFreeWord(){
	var str = document.getElementById("freeword").value;
	
	var name = str.split(/[\d]/)[0];
	name = name.replace(/\s{2,}/g, " ");
	name = name.replace(/\s*-\s*/g, "-");
	name = name.replace(/\s+\(?s*$/, "");
	name = name.replace(/,/g,"");
	name = name.replace(/\($/,"");
	name = name.replace(/^\s+/g,"");
	
	var volume;
	var page;
	str.match(/\D(\d.+)$/);
	numstr =RegExp.$1.replace(/–/g,"-")
	var reg = new Array();
	reg.push(/(\d{1,3})\(\d{1,3}\)\D+(\d{1,5})\s*-\s*\d{1,5}\D+[12]\d{3}\D*/);		// J. Am. Chem. Soc., 128(20), 6324-6326 (2006).
	reg.push(/(\d{1,3})\D+(\d{1,5})\s*-\s*\d{1,5}\D+[12]\d{3}\D*/);		// J. Am. Chem. Soc., 128, 6324-6326 (2006).
	reg.push(/[12]\d{3}, (\d{1,3})(?:\D*\(\w{1,3}\))?,\D+(\d{1,5})\D+\d{1,5}/);		//Nature, 2008, 23(3), 298-304.
	reg.push(/([12]\d{3})\D*\(\w{1,3}\)\D*(\d{1,5})\s*-\s*\d{1,5}/);		//Synthesis 2011(20): 3209-3219.
	reg.push(/[12]\d{3}\).+?(\d+).*?,.*?(\d+)/);	//Nature Protocols (2011), 6(4), 523-539.
	reg.push(/(\d{1,3})\D+(\d{1,5})\s*-\s*\d{1,5}\D+\([12]\d{3}\)/);		// J. Am. Chem. Soc., 128, 6324-6326 (2006).
	reg.push(/(\d{1,3})\D+(\d{1,7})\D*\([12]d{3}\)/);					//Phys. Rev. Lett. 102, 166804 (2009).
	reg.push(/(\d{1,3})\D+\([12]\d{3}\)\D+(\d{1,5})\D\d{1,5}/);				//Chem. Soc. Rev. 37 (2007), pp. 19–28.
    reg.push(/[12]\d{3}\D+(\d{1,3})\D+(\d{1,5})\s*-\s*\d{1,5}/);
	reg.push(/[12]\d{3}\D+(\d{1,3})[:,\s]+([\dA-Za-z]{1,7})/);
	//Followings are citation without a year.
	reg.push(/(\d{4}), (\d{1,5})\D+\d{1,5}/);
	reg.push(/(\d{1,3})(?:, |:)(\d{1,5})\D+\d{1,5}/);
	reg.push(/(\d{1,3})(?:, |:)(\d{6})/);
	reg.push(/(\d+)[:,\s]+([\dA-Za-z]{1,7}).+$/);								//PLoS Biol 9(2): e1000588. 

	var i;
	for(i = 0; i < reg.length; i++){
		if(reg[i].test(numstr)){
			numstr.match(reg[i]);
			volume = RegExp.$1;
			page = RegExp.$2;
			if(debug)
				document.getElementById('out_parse_info').innerText = "Matched with: " + reg[i].source;
			mydebug("Matched with: " + reg[i].source);
			document.getElementById('out_info').innerHTML = "";
			break;
		}
	}
	if(i==reg.length){
		document.getElementById('out_parse_info').innerText = "No matched citation format";
		name = "";
		volume = "";
		page ="";
	}

	document.getElementById('suggesttext').value = name;
	document.getElementById('suggestvol').value = volume;
	document.getElementById('suggestpage').value = page;
}

function goFreeWord(){
	parseFreeWord();
	jumpToCitation();
}

function journalNotSupported(name){
	document.getElementById('out_info').innerHTML
		= "Journal not supported &nbsp; <a href=\"http://www.google.com/search?btnI=I\'m+Feeling+Lucky&q=journal%20"
		+ name +"\">Search with journal name (I'm Feeling Lucky) </a>";
}

function isSupportedJournal(name,ambsearch){
	var count = isSupported.length;
	for(var i=0; i < count; i++){
		if(isSupported[i](name,ambsearch)){
			break;
		}
	}
	if(i<count)
		return true;
	else
		return false;
}

function jumpToCitation()
{
	var name = document.getElementById('suggesttext').value;
	var volume = document.getElementById('suggestvol').value;
	var page = document.getElementById('suggestpage').value;
	
	if(name=='' || volume=='' || page==''){
		canOpen = false;
		return;
	}
	
	var count = isSupported.length;
	canOpen = false;
	ambsearch = document.getElementById('check_amb').checked;
	for(var i=0; i < count; i++){
		if(fullname = isSupported[i](name,false)){
			canOpen = true;
			jumpJournal[i](fullname,volume,page,false);
			break;
		}
	}
    if(i==count && ambsearch){
        for(var i=0; i < count; i++){
            if(fullname = isSupported[i](name,ambsearch)){
                canOpen = true;
                jumpJournal[i](fullname,volume,page,ambsearch);
                break;
            }
        }
	}
    if(!canOpen)
        journalNotSupported(name);
}

function clearDefault(el){
  if (el.defaultValue==el.value){
      el.value = "";
  }
}

function openURL(url){
	location.href = url;
}

function postQuery(url,hash){
	var form = document.createElement( 'form' );
	form.setAttribute( 'style' , 'display:none;' );
	document.body.appendChild( form );
	
	for(var key in hash){
		var input = document.createElement( 'input' );
		input.setAttribute( 'type', 'hidden' );
		input.setAttribute( 'name', key);
		input.setAttribute( 'value', hash[key]);
		form.appendChild(input);
	}
	form.setAttribute( 'action', url );
	form.setAttribute( 'method' , 'post' );
	form.submit();
}

function getQuery(url,hash){
    var string = "";
	for(var key in hash){
        string = string.concat("&",key,"=",hash[key]);
    }
    string = string.substring(1);
    mydebug(url + "?" + string);
    openURL(url + "?" + string);
}

function searchNameAmbiguous(name,titles,ambsearch){
	if(!ambsearch){
		if(titles.indexOf(name) != -1)
			return name;
		else
			return false;
	}else{
        //First, exact search
		if(titles.indexOf(name) != -1)
			return name;
        //In the case where the citation entered was abbriviated, and the title in database is full name or longer abbriviation.
		var name2 = name.replace(/\./g,'').toUpperCase();
		var lengths = getLengthsOfAbbreviation(name);
		for(var i in titles){
			var tr = truncateTitle(titles[i],lengths);
			if(tr)
				if(tr.toUpperCase()==name2)
					return titles[i];
		}
        //In the case where the citation entered was full name or long abbrivation, and the title in database is shorter abbriviation.
		for(var i in titles){
            lengths = getLengthsOfAbbreviation(titles[i]);
			tr = truncateTitle(name,lengths);
			if(tr)
				if(tr.toUpperCase()==titles[i].replace(/\./g,'').toUpperCase())
					return titles[i];
		}
		return false;
	}
}

function truncateTitle(title, lengths){
	var token = title.replace(/\./g,'').split(' ');
	var i;
	var removeword = ['of','the','The','in','on','for','an','An','a', '&amp;', '&'];
	for(i=token.length-1;i>=0;i--){
		if(removeword.indexOf(token[i]) != -1)
			token.splice(i,1);
	}
	if(lengths.length != token.length)	//It means the title doesn't match the abbreviation, so that it is meaningless to truncate.
		return null;
	for(i=0; i < lengths.length; i++){
		token[i] = token[i].substring(0,lengths[i]);
	}
	return token.join(' ');
}

function getLengthsOfAbbreviation(name){
	var token = name.replace(/\./g,'').split(' ');
	var num_token = token.length;
	var lengths = new Array();
	for(i = 0; i<num_token; i++){
		lengths.push(token[i].length);
	}
	return lengths;
}

function keys(object) {
	var results = [];
	for (var property in object){
		results.push(property);
	}
	return results;
}

function mydebug(msg){
	if(debug)	console.log(msg);
}

var alljournals = [];
