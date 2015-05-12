//
//  aip.js
//  ver. 0.7
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var aipjournals = {
'Applied Physics Letters':'APPLAB',
'Journal of Applied Physics':'JAPIAU',
'AIP Advances':'AAIDBI',
'Biomicrofluidics':'BIOMGB',
'Chaos':'CHAOEH',
'Journal of Chemical Physics':'JCPSA6',
'Journal of Mathematical Physics':'JMAPAQ',
'Journal of Physical and Chemical Reference Data':'JPCRBU',
'Journal of Renewable and Sustainable Energy':'JRSEBH',
'Low Temperature Physics':'LTPHEG',
'Physics of Fluids':'PHFLE6',
'Physics of Plasmas':'PHPAEN',
'Review of Scientific Instruments':'RSINAK'
};

mydebug('aip.js loaded');
alljournals = alljournals.concat(keys(aipjournals));

isSupported.push(isAipJournal); 
jumpJournal.push(openAip);

function isAipJournal(t,ambsearch){
	var titles = keys(aipjournals);
	return searchNameAmbiguous(t,titles,ambsearch);
}

function openAip(t,v,p,ambsearch){
	openURL('http://link.aip.org/link/?'+aipjournals[t]+'/'+v+'/'+p);
}