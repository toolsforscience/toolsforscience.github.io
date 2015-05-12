//
//  main.js
//  ver. 0.9
//  Copyright (C) 2011-12 Hiroyuki Kai. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//


///////
//Debug options
//These should be false in a release version
var debug = false;
///

function mydebug(msg){
  if(debug)	console.log(msg);
}

//
// UI
//

var clientMac = false;

var openInNewTab = false;

var quickList = [];
var maxQuickList = 20;

function isAppleKey(code,agent){
  return ((code == 91 || code == 91) && agent.indexOf('WebKit') != -1) ||
    (code == 224 && agent.indexOf('Firefox') != -1) ||
    (code == 17 && agent.indexOf('Opera') != -1)
}

function setOutInfo(html){
  var elem = $('#out_info');
  if(html == ""){
    elem.css('visibility','hidden');
  }else{
    elem.html(html);
    elem.css('visibility','visible');
  }
}

function freewordChanged(){
  parseFreeWord();
}

$(function(){
  if(navigator.userAgent.indexOf("Mac") != -1 ){
    clientMac = true;
  }
});

//Register event handlers, etc.
function initial(){
  var arg = new Object;
  var aSplit1 = location.search.split("?");

  mydebug(location.href);
  byid('freeword').value = '';
  byid('suggesttext').value = '';
  byid('suggestvol').value = '';
  byid('suggestpage').value = ''	;

  $('#freeword').bind("paste input change",freewordChanged);
  $('#freeword').keydown(function(e) {
    if(e.keyCode == 13) { // Enter key
      goFreeWord(e.shiftKey);
    }
   });
  $('#suggesttext, #suggestvol, #suggestpage').keydown(function(e) {
    if(e.keyCode == 13) {
      goFreeWord(e.shiftKey);
    }
   });
  $('#suggestgo').click(function(e) {
    jumpToCitation(e.shiftKey);
  });

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

//
// Main logic
//

//Status code for submitReport()
var statusSuccess = 0;
var statusNotSupported = 1;
var statusNoRegexMatch = 2;

var canOpen = false;
var otherjournals;
var alljournals = [];

var isSupported = [];
var jumpJournal = [];

mydebug("main.js loaded");

function byid(str) {
  return document.getElementById(str);
}

function jumpJournalAll(i, t, v, p, ambsearch) {
  mydebug("jumpJournalAll(): " + t + ", " + v + ", " + p);
  submitReport(statusSuccess);
  jumpJournal[i](t, v, p, ambsearch);
}

function mydecodeURI(str) {
  return str.replace(/\+/g, ' ').replace(/%3A/g, ':').replace(/%E2%80%93/g, '-').replace(/%2C/g, ',').replace(/%20/g, ' ');	
}

function startSuggest() {
  $('#suggesttext').typeahead({source:alljournals});
}

function submitReport(status) {
  var ret = 0;
  var citation = byid('freeword').value;
  var journal = byid('suggesttext').value;

  switch(status){
    case statusSuccess:
      ret = _gaq.push(['_trackEvent', 'Search', 'Success', citation]);
      ret = _gaq.push(['_trackEvent', 'Supported', 'Journal', journal]);
      break;
    case statusNotSupported:
      ret = _gaq.push(['_trackEvent', 'Search', 'NotSupported', citation]);
      ret = _gaq.push(['_trackEvent', 'NotSupported', 'Journal', journal]);
      break;
    case statusNoRegexMatch:
      ret = _gaq.push(['_trackEvent', 'Search', 'NoRegexpMatch', citation]);
      break;
    default:
      ret = _gaq.push(['_trackEvent', 'Search', 'UnknownStatus', citation]);
      break;
  }
  return ret;
}


//ToDo: This could be improved to be less ad hoc.
  var regexpCit = [
/(\d{1,3})\(\d{1,3}\)\D+(\d{1,5})\s*-\s*\d{1,5}\D+(?:20|19|18)\d{2}\D*/		// J. Am. Chem. Soc., 128(20), 6324-6326 (2006).
, /(\d{1,3})\D+(\d{1,5})\s*-\s*\d{1,5}\D+(?:20|19|18)\d{2}\D*/		// J. Am. Chem. Soc., 128, 6324-6326 (2006).
, /(?:20|19|18)\d{2}, (\d{1,3})(?:\D*\(\w{1,3}\))?,\D+(\d{1,5})\D+\d{1,5}/		//Nature, 2008, 23(3), 298-304.
, /((?:20|19|18)\d{2})\D*\(\w{1,3}\)\D*(\d{1,5})\s*-\s*\d{1,5}/		//Synthesis 2011(20): 3209-3219.
, /(?:20|19|18)\d{2}\).+?(\d+).*?,.*?(\d+)/	//Nature Protocols (2011), 6(4), 523-539.
, /(\d{1,3})\D+(\d{1,5})\s*-\s*\d{1,5}\D+\((?:20|19|18)\d{2}\)/		// J. Am. Chem. Soc., 128, 6324-6326 (2006).
, /(\d{1,3})\D+(\d{1,7})\D*\((?:20|19|18)\d{2}\)/					//Phys. Rev. Lett. 102, 166804 (2009).
, /(\d{1,3})\D+\((?:20|19|18)\d{2}\)\D+(\d{1,5})\D\d{1,5}/				//Chem. Soc. Rev. 37 (2007), pp. 19遯ｶ\8.
, /(?:20|19|18)\d{2}\D+(\d{1,3})\D+(\d{1,5})\s*-\s*\d{1,5}/
, /(?:20|19|18)\d{2}\D+(\d{1,3})[:,\s]+([\dA-Za-z]{1,7})/
  //Followings are citation without a year.
, /(\d{4}), (\d{1,5})\D+\d{1,5}/
, /(\d{1,3})(?:, |:)(\d{1,5})\D+\d{1,5}/
, /(\d{1,3})(?:, |:)(\d{6})/
, /(\d+)[:,\s]+([\dA-Za-z]{1,7}).+$/								//PLoS Biol 9(2): e1000588. 
, /(\d+)\D+\d+\D+(\d+)/
  ];

  function parseCitation(str) {
    if(str.replace(/\s/g,'') == '')
      return []; //Nothing is input.

    var journal = (str.split(/[\d]/)[0]).replace(/\s{2,}/g, " ").replace(/\s*-\s*/g, "-").replace(/\s+\(?s*$/, "").replace(/,/g,"").replace(/\($/,"").replace(/^\s+/g,"");
    str.match(/\D(\d.+)$/);
    var numstr = RegExp.$1.replace(/[\u2012\u2013\u2014\u2015]/g,"-");

    var i;
    var volume;
    var page;
    for(i = 0, len = regexpCit.length; i < len; i++) {
      if(regexpCit[i].test(numstr)){
        numstr.match(regexpCit[i]);
        volume = RegExp.$1;
        page = RegExp.$2;
        //mydebug("Matched with: " + regexpCit[i].source);

        //This is the only success case.
        return [journal,volume,page];
      }
    }
    return [];
  }

//Returns a full name string (or undefined when not found in the list)
function findJournal(name) {
  //Regex match success
  var fullname;
  var count = isSupported.length;

  //First exact search. otherwise Cell / Cellulose can't be distinguished.
  for(var i = 0; i < count; i++) {
    if(fullname = isSupported[i](name,false)){
      return fullname;
    }
  }
  if(i == count) {
    //If not found by exact search.
    for(var i = 0; i < count; i++) {
      if(fullname = isSupported[i](name,true)) {
        return fullname;
      }
    }
  }
  return undefined;			
}

//This is called at every key input in the text box. So maybe this should not call submitReport()?
//But I don't know when it should call submitReport().
function parseFreeWord() {
  var journal,volume,page;
  var freeText = byid("freeword").value.replace(/^\s*(.*?)\s*$/, "$1");   //Stripped.
  if(freeText == ""){
    setOutInfo("");
    return false;
  }
  var ret = parseCitation(freeText);
  if(ret.length != 3){
    // If parseCitation fails.
    // i.e. Input doesn't have a proper format.
    setOutInfo("No matched citation format");
    submitReport(statusNoRegexMatch);
    clearParsed();
    return false;
  }else{
    journal = ret[0];
    volume = ret[1];
    page = ret[2];
    setOutInfo("");

    //Search journal from the database.
    var fullname = findJournal(journal);
    if(fullname){
      canOpen = true;
      $('#suggesttext').css('color','');
      byid('suggesttext').value = fullname;  //ToDo: Or journal?
      byid('suggestvol').value = volume;
      byid('suggestpage').value = page;
      return true;
    }else{
      byid('suggesttext').value = journal;
      $('#suggesttext').css('color', 'red');
      journalNotSupported(journal);
      return false;
    }
  }
}

function goFreeWord(isNewTab){
  openInNewTab = isNewTab;
  canOpen = false;
//  res = parseFreeWord();
//  if(res)
  jumpToCitation(isNewTab);
  return res;
}

//Clear parsed values textboxes
function clearParsed() {
  byid('suggesttext').value = '';
  byid('suggestvol').value = '';
  byid('suggestpage').value = '';
}

function journalNotSupported(name) {
  setOutInfo("Journal not supported &nbsp; <a href=\"http://www.google.com/search?btnI=I\'m+Feeling+Lucky&q=journal%20"
    + name +"\">Search with journal name (I'm Feeling Lucky) </a>");
  submitReport(statusNotSupported);
}


//This ambsearch param should be kept, since this is used for exact search for the first loop in findJournal().
function isSupportedJournal(name, ambsearch) {
  //isSupported holds functions for every publisher to check if "name" is supported by each of them.
  for(var i = 0, count = isSupported.length; i < count; i++) {
    if(isSupported[i](name,ambsearch)) {
      return true;
    }
  }
  return false;
}

function jumpToCitation(isNewTab) {
  openInNewTab = isNewTab;
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
  if(!canOpen){
    submitReport(statusNoRegexMatch);
  }
}

function clearDefault(el) {
  if (el.defaultValue==el.value) {
    el.value = "";
  }
}

function openURL(url){
  mydebug("openURL(): "+url);
  if(openInNewTab) {
    window.open(url,'_blank')
  } else {
    location.href = url;
  }
}

function postQuery(url,hash){
  var form = document.createElement('form');
  form.setAttribute( 'style' , 'display:none;' );
  document.body.appendChild( form );

  for(var key in hash) {
    var input = document.createElement( 'input' );
    input.setAttribute( 'type', 'hidden' );
    input.setAttribute( 'name', key);
    input.setAttribute( 'value', hash[key]);
    form.appendChild(input);
  }
  form.setAttribute( 'action', url );
  form.setAttribute( 'method' , 'post' );
  if(openInNewTab){
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
  var lengths = []; 
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


