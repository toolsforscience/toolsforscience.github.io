//
//  main.js
//  ver. 0.71
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var canOpen = false;
var otherjournals;
var alljournals = [];

isSupported = new Array();
jumpJournal = new Array();

mydebug("main.js loaded");

function byid(str){
		return document.getElementById(str);
}

function jumpJournalAll(i,t,v,p,ambsearch){
	mydebug("jumpJournalAll(): "+t+", "+v+", "+p);
	submitReport(0);
	jumpJournal[i](t,v,p,ambsearch);
}

function mydecodeURI(str){
		var ret = new String(str);
		ret = ret.replace(/\+/g,' ').replace(/%3A/g,':').replace(/%E2%80%93/g,'-').replace(/%2C/g,',').replace(/%20/g,' ');	
		return ret;
}

function startSuggest() {
		var list = alljournals;
		/*var list = [];
		var quicklist = [];
		if(localStorage['quicklist']){
			token = localStorage['quicklist'].split("\t");
			for(i in token){
				if(token[i] != '' && token[i] != 'undefined')
					quicklist.push(token[i]);
			}
		}
		for(i in quicklist){
			list.push(quicklist[i])
		}
		for(i in alljournals){
			if(quicklist.indexOf(alljournals[i])==-1)
				list.push(alljournals[i]);
		}*/

		new Suggest.Local(
				"suggesttext",
				"suggest",
				list,
				{dispMax: 10, highlight: true}
		);
}

function submitReport(status){
		var ret = 0;
		var citation = byid('freeword').value;

		switch(status){
		case 0:
    	ret = _gaq.push(['_trackEvent', 'Search', 'Success', citation]);
			break;
		case 1:
    	ret = _gaq.push(['_trackEvent', 'Search', 'NotSupported', citation]);
			break;
		case 2:
    	ret = _gaq.push(['_trackEvent', 'Search', 'NoRegexpMatch', citation]);
			break;
		default:
    	ret = _gaq.push(['_trackEvent', 'Search', 'UnknownStatus', citation]);
			break;
		}
}


function parseFreeWord(){
		var ret = false;
		var str = byid("freeword").value;
		if(str.replace(/\s/g,'') == ''){
			return;
		}
		
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
		//Use (?:20|19|18)\d{2} as year
	reg.push(/(\d{1,3})\(\d{1,3}\)\D+(\d{1,5})\s*-\s*\d{1,5}\D+(?:20|19|18)\d{2}\D*/);		// J. Am. Chem. Soc., 128(20), 6324-6326 (2006).
	reg.push(/(\d{1,3})\D+(\d{1,5})\s*-\s*\d{1,5}\D+(?:20|19|18)\d{2}\D*/);		// J. Am. Chem. Soc., 128, 6324-6326 (2006).
	reg.push(/(?:20|19|18)\d{2}, (\d{1,3})(?:\D*\(\w{1,3}\))?,\D+(\d{1,5})\D+\d{1,5}/);		//Nature, 2008, 23(3), 298-304.
	reg.push(/((?:20|19|18)\d{2})\D*\(\w{1,3}\)\D*(\d{1,5})\s*-\s*\d{1,5}/);		//Synthesis 2011(20): 3209-3219.
	reg.push(/(?:20|19|18)\d{2}\).+?(\d+).*?,.*?(\d+)/);	//Nature Protocols (2011), 6(4), 523-539.
	reg.push(/(\d{1,3})\D+(\d{1,5})\s*-\s*\d{1,5}\D+\((?:20|19|18)\d{2}\)/);		// J. Am. Chem. Soc., 128, 6324-6326 (2006).
	reg.push(/(\d{1,3})\D+(\d{1,7})\D*\((?:20|19|18)\d{2}\)/);					//Phys. Rev. Lett. 102, 166804 (2009).
	reg.push(/(\d{1,3})\D+\((?:20|19|18)\d{2}\)\D+(\d{1,5})\D\d{1,5}/);				//Chem. Soc. Rev. 37 (2007), pp. 19–28.
    reg.push(/(?:20|19|18)\d{2}\D+(\d{1,3})\D+(\d{1,5})\s*-\s*\d{1,5}/);
	reg.push(/(?:20|19|18)\d{2}\D+(\d{1,3})[:,\s]+([\dA-Za-z]{1,7})/);
	//Followings are citation without a year.
	reg.push(/(\d{4}), (\d{1,5})\D+\d{1,5}/);
	reg.push(/(\d{1,3})(?:, |:)(\d{1,5})\D+\d{1,5}/);
	reg.push(/(\d{1,3})(?:, |:)(\d{6})/);
	reg.push(/(\d+)[:,\s]+([\dA-Za-z]{1,7}).+$/);								//PLoS Biol 9(2): e1000588. 
		reg.push(/(\d+)\D+\d+\D+(\d+)/);

		var i;
		for(i = 0; i < reg.length; i++){
				if(reg[i].test(numstr)){
						numstr.match(reg[i]);
						volume = RegExp.$1;
						page = RegExp.$2;
						mydebug("Matched with: " + reg[i].source);
						byid('out_info').innerHTML = "";
						break;
				}
		}
		if(i==reg.length){
				byid('out_parse_info').innerText = "No matched citation format";
				name = "";
				volume = "";
				page ="";
				submitReport(2)
				return false;
		}

		var count = isSupported.length;
		canOpen = false;
		//Changed at v.0.8
		//ambsearch is always on
		ambsearch = true;
		for(var i=0; i < count; i++){
				if(fullname = isSupported[i](name,false)){
						canOpen = true;
						byid('suggesttext').value = fullname;
						ret = true;
						break;
				}
		}
		if(i==count && ambsearch){
				for(var i=0; i < count; i++){
						if(fullname = isSupported[i](name,ambsearch)){
								canOpen = true;
								byid('suggesttext').value = fullname;
								ret = true;
								break;
						}
				}
		}
		if(i==count){
			byid('suggesttext').value = '';
			journalNotSupported(name)
			ret = false;
		}
		byid('suggestvol').value = volume;
		byid('suggestpage').value = page;
		return ret;
}

function goFreeWord(){
	canOpen = false;
	res = parseFreeWord();
	if(res)
		jumpToCitation();
	return res;
}

function journalNotSupported(name){
		byid('out_info').innerHTML
				= "Journal not supported &nbsp; <a href=\"http://www.google.com/search?btnI=I\'m+Feeling+Lucky&q=journal%20"
				+ name +"\">Search with journal name (I'm Feeling Lucky) </a>";
		submitReport(1);
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
		var name = byid('suggesttext').value;
		var volume = byid('suggestvol').value;
		var page = byid('suggestpage').value;
		var count = isSupported.length;
		canOpen = false;
		//Changed at v.0.8
		//ambsearch is always on, but first search without ambiguous. (e.g. Cell / Cellulose)
		for(var i=0; i < count; i++){
				if(fullname = isSupported[i](name,false)){
						canOpen = true;
						byid('suggesttext').value = fullname;
//						addQuickList(fullname.replace(/[<>\t]/g,''));
						jumpJournalAll(i,fullname,volume,page,false);
						break;
				}
		}
		if(i==count){
				for(var i=0; i < count; i++){
						if(fullname = isSupported[i](name,true)){
								canOpen = true;
								byid('suggesttext').value = fullname;
	//							addQuickList(fullname.replace(/[<>\t]/g,''));
								jumpJournalAll(i,fullname,volume,page,true);
								break;
						}
				}
		}
}

function clearDefault(el){
		if (el.defaultValue==el.value){
				el.value = "";
		}
}

function openURL(url){
	mydebug("openURL(): "+url);
	if(cmdPressed){
		window.open(url,'_blank')
	}else{
		location.href = url;
	}
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
		if(cmdPressed){
			form.setAttribute('target','_blank');
		}
		mydebug("postQuery()");
		mydebug(url,hash);
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
		//This logic should be refined in the future.
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
				// Is this necessary?: "Journal of Physics: Condensed Matter" should match "Journal Physics Condensed Matter"
				for(var i in titles){
						lengths = getLengthsOfAbbreviation(titles[i]);
						tr = truncateTitle(name,lengths);
						if(tr){
								len = getLengthsOfAbbreviation(titles[i]);
								trtitle = truncateTitle(titles[i],len);
								if(trtitle && tr.toUpperCase()==trtitle.toUpperCase())
										return titles[i];
						}
				}
				return false;
		}
}

function truncateTitle(title, lengths){
		var token = title.replace(/[\.:,]/g,'').split(/\s+/g);
		var i;
		var removeword = ['of','the','The','in','on','for','an','An','a', '&amp;', '&', 'and', 'et'];
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
		var i;
		var removeword = ['of','the','The','in','on','for','an','An','a', '&amp;', '&', 'and', 'et'];
		for(i=token.length-1;i>=0;i--){
				if(removeword.indexOf(token[i]) != -1)
						token.splice(i,1);
		}
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


