//
//  cell.js
//  ver. 0.6
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var celljournals = {
"Cell":"journal2=00928674",
"AJHG":"journal3=00029297",
"Biophysical Journal":"journal4=00063495",
"Cancer Cell":"journal5=15356108",
"Cell Host &amp; Microbe":"journal6=19313128",
"Cell Metabolism":"journal7=15504131",
"Cell Stem Cell":"journal8=19345909",
"Chemistry &amp; Biology":"journal9=10745521",
"Current Biology":"journal10=09609822",
"Developmental Cell":"journal11=15345807",
"Immunity":"journal12=10747613",
"Molecular Cell":"journal13=10972765",
"Neuron":"journal14=08966273",
"Structure":"journal15=09692126",
"Trends in Biochemical Sciences":"journal16=09680004",
"Trends in Biotechnology":"journal17=01677799",
"Trends in Cell Biology":"journal18=019628924",
"Trends in Cognitive Sciences":"journal19=13646613",
"Trends in Ecology &amp; Evolution":"journal20=01695347",
"Trends in Endocrinology and Metabolism":"journal21=10432760",
"Trends in Genetics":"journal22=01689525",
"Trends in Immunology":"journal23=14714906",
"Trends in Microbiology":"journal24=0966842X",
"Trends in Molecular Medicine":"journal25=14714914",
"Trends in Neurosciences":"journal26=01662236",
"Trends in Parasitology":"journal27=14714922",
"Trends in Pharmacological Sciences":"journal28=01656147",
"Trends in Plant Science":"journal29=13601385",
};

if(debug)	console.log('cell.js loaded');
alljournals = alljournals.concat(keys(celljournals));

isSupported.push(isCellJournal); 
jumpJournal.push(openCell);

function isCellJournal(t,ambsearch){
	var titles = keys(celljournals);
	return searchNameAmbiguous(t,titles,ambsearch);
}

//
//  From http://www.cell.com/advancedsearch
//

function openCell(t,v,p,ambsearch){
    location.href = 'http://www.cell.com/advancedsearch?searchVolume='+v+'&searchIssue=&searchStartPage='+p+'&'+celljournals[t]+'&advancedSearch=true';
}
