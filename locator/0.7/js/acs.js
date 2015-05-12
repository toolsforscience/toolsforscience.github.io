//
//  acs.js
//  ver. 0.7
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var acsjournals = {
"Acc. Chem. Res." : "achre4",
"ACS Applied Materials & Interfaces" : "aamick",
"ACS Chem. Biol." : "acbcct",
"ACS Chem. Neurosci." : "acncdm",
"ACS Med. Chem. Lett." : "amclct",
"ACS Nano" : "ancac3",
"ACS Symposium Series" : "symposium",
"Advances in Chemistry" : "advances",
"Anal. Chem." : "ancham",
"Biochemistry" : "bichaw",
"Bioconjugate Chem." : "bcches",
"Biomacromolecules" : "bomaf6",
"Bio-macromolecules" : "bomaf6",
"Biotechnol. Prog." : "bipret",
"Chem. Res. Toxicol." : "crtoec",
"Chem. Rev." : "chreay",
"Chem. Mater." : "cmatex",
"Crystal Growth & Design" : "cgdefu",
"Energy Fuels" : "enfuem",
"Environ. Sci. Technol." : "esthag",
"Ind. Eng. Chem." : "iechad",
"Ind. Eng. Chem. Res." : "iecred",
"Inorg. Chem." : "inocaj",
"J. Am. Chem. Soc." : "jacsat",
//"Journal of the American Chemical Society" : "jacsat",
"JACS" : "jacsat",
"J. Agric. Food Chem." : "jafcau",
"J. Chem. Eng. Data" : "jceaax",
"J. Chem. Educ." : "jceda8",
"J. Chem. Inf. Model." : "jcisd8",
"J. Chem. Theory Comput." : "jctcce",
"J. Comb. Chem." : "jcchff",
"J. Med. Chem." : "jmcmar",
"J. Nat. Prod." : "jnprdf",
"JOC" : "joceah",
"J. Org. Chem." : "joceah",
"J. Phys. Chem." : "jpchax",
"J. Phys. Chem. A" : "jpcafh",
"J. Phys. Chem. B" : "jpcbfk",
"J. Phys. Chem. C" : "jpccck",
"J. Phys. Chem. Lett." : "jpclcd",
"J. Proteome Res." : "jprobs",
"Langmuir" : "langd5",
"Macromolecules" : "mamobx",
"Mol. Pharmaceutics" : "mpohbp",
"Nano Lett." : "nalefd",
"Org. Lett." : "orlef7",
"OL" : "orlef7",
"Org. Process Res. Dev." : "oprdfk",
"Organometallics" : "orgnd7"
};

if(debug)	console.log('acs.js loaded');
alljournals = alljournals.concat(keys(acsjournals));

isSupported.push(isAcsJournal); 
jumpJournal.push(openAcs);

function isAcsJournal(t,ambsearch){
	var titles = keys(acsjournals);
	return searchNameAmbiguous(t,titles,ambsearch);
}

function openAcs(t,v,p,ambsearch){
 	getQuery("http://pubs.acs.org/action/quickLink",
 		{"quickLinkJournal":acsjournals[t],"quickLinkVolume":v,"quickLinkPage":p});
}
