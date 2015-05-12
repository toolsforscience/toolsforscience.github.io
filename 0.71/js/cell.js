//
//  cell.js
//  ver. 0.7
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var celljournals = {
"AJHG":"/AJHG",
"Biophysical Journal":"/biophysj",
"Cancer Cell":"/cancer-cell",
"Cell":"",
"Cell Host & Microbe":"/cell-host-microbe",
"Cell Metabolism":"/cell-metabolism",
"Cell Reports":"/cell-reports",
"Cell Stem Cell":"/cell-stem-cell",
"Chemistry & Biology":"/chemistry-biology",
"Current Biology":"/current-biology",
"Developmental Cell":"/developmental-cell",
"Immunity":"/immunity",
"Molecular Cell":"/molecular-cell",
"Neuron":"/neuron",
"Structure":"/structure",
"Trends in Biochemical Sciences":"/trends/biochemical-sciences",
"Trends in Biotechnology":"/trends/biotechnology",
"Trends in Cell Biology":"/trends/cell-biology",
"Trends in Cognitive Sciences":"/trends/cognitive-sciences",
"Trends in Ecology & Evolution":"/trends/ecology-evolution",
"Trends in Endocrinology & Metabolism":"/trends/endocrinology-metabolism",
"Trends in Genetics":"/trends/genetics",
"Trends in Immunology":"/trends/immunology",
"Trends in Microbiology":"/trends/microbiology",
"Trends in Molecular Medicine":"/trends/molecular-medicine",
"Trends in Neurosciences":"/trends/neurosciences",
"Trends in Parasitology":"/trends/parasitology",
"Trends in Pharmacological Sciences":"/trends/pharmacological-sciences",
"Trends in Plant Science":"/trends/plant-science"
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
    openURL('http://www.cell.com'+celljournals[t]+'/advancedsearch?searchTerms=&searchTitleAbstract=&searchAuthor='
    	+'&searchAffiliation=&searchVolume='+v+'&searchIssue=&searchStartPage='+p+'&searchYearFrom='
    	+'&searchYearTo=&searchSort=glb%3Apublication-date&searchPerPage=10&advancedSearch=true');
}
