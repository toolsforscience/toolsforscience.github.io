//
//  aps.js
//  ver. 0.7
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var apsjournals = {
'Phys. Rev. Lett.':'PRL',
'Phys. Rev. A':'PRA',
'Phys. Rev. B':'PRB',
'Phys. Rev. C':'PRC',
'Phys. Rev. D':'PRD',
'Phys. Rev. E':'PRE',
'Rev. Mod. Phys.':'RMP',
'Phys. Rev. ST Accel. Beams':'PRSTAB',
'Phys. Rev. ST Phys. Educ. Res.':'PRSTPER',
'Phys. Rev.':'PR',
'Phys. Rev. (Series I)':'PRI',

'Physical Review Letters':'PRL',
'Physsical Review A':'PRA',
'Physical Review B':'PRB',
'Physical Review C':'PRC',
'Physical Review D':'PRD',
'Physical Review E':'PRE',
'Review of Modern Physics.':'RMP',
'Physical Review Special Topics - Accelerators and Beams':'PRSTAB',
'Physical Review Special Topics - Physics Education Research':'PRSTPER',
'Physical Review':'PR',
'Physical Review (Series I)':'PRI'
};

mydebug('aps.js loaded');
alljournals = alljournals.concat(keys(apsjournals));

isSupported.push(isApsJournal); 
jumpJournal.push(openAps);

function isApsJournal(t,ambsearch){
	var titles = keys(apsjournals);
	return searchNameAmbiguous(t,titles,ambsearch);
}

function openAps(t,v,p,ambsearch){
	postQuery('http://link.aps.org/citesearch', {'journal':apsjournals[t],'volume':v,'article':p});
}