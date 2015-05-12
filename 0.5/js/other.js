//
//  other.js
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

mydebug('others.js loaded');

initializeOther();

function initializeOther(){
	otherjournals = new Array();
	otherjournals["Science"] = function(v,p){
		location.href = "http://www.sciencemag.org/cgi/search?volume=" + v +"&firstpage="
		+ p +"&search_citation-search.x=53&search_citation-search.y=11&search_citation-search=search";
	};
	
	//Biophys. J.
	otherjournals["Biophysical Journal"] = function(v,p){
		location.href = 'http://www.cell.com/biophysj/searchresults?searchVolume='+v+'&searchStartPage='+p;
	};
	otherjournals["Biophysical J."] = otherjournals["Biophysical Journal"];
	otherjournals["Biophys. J."] = otherjournals["Biophysical Journal"];

	//Cell
	otherjournals["Cell"] = function(v,p){
		location.href = 'http://www.cell.com/advancedsearch?searchVolume='+v+'&searchIssue=&searchStartPage='+p+'&advancedSearch=true';
	};
	
	otherjournals["PNAS"] = function(v,p){
		location.href = 'http://www.pnas.org/search?submit=yes&submit=Submit&volume='+v+'&firstpage='+p;
	};
	otherjournals["Proc. Natl. Acad. Sci. U.S.A."] = otherjournals["PNAS"];
	
	otherjournals["J. Biol. Chem."] = function(v,p){
		location.href = 'http://www.jbc.org/search?author1=&fulltext=&pubdate_year=&volume='+v+'&firstpage='+p+'&submit=yes';
	}
	/*
	                  <option id="filterJournalsPicklist_PLoSONE" value="PLoSONE" title="PLoS ONE">PLoS ONE</option>
                  <option id="filterJournalsPicklist_PLoSBiology" value="PLoSBiology" selected="selected" title="PLoS Biology">PLoS Biology</option>
                  <option id="filterJournalsPicklist_PLoSMedicine" value="PLoSMedicine" title="PLoS Medicine">PLoS Medicine</option>
                  <option id="filterJournalsPicklist_PLoSGenetics" value="PLoSGenetics" title="PLoS Genetics">PLoS Genetics</option>
                  <option id="filterJournalsPicklist_PLoSPathogens" value="PLoSPathogens" title="PLoS Pathogens">PLoS Pathogens</option>
                  <option id="filterJournalsPicklist_PLoSCompBiol" value="PLoSCompBiol" title="PLoS Computational Biology">PLoS Computational Biology</option>
                  <option id="filterJournalsPicklist_PLoSNTD" value="PLoSNTD" title="PLoS Neglected Tropical Diseases">PLoS Neglected Tropical Diseases</option>
                  <option id="filterJournalsPicklist_PLoSCollections" value="PLoSCollections" title="PLoS Collections">PLoS Collections</option>
                  <option id="filterJournalsPicklist_PLoSClinicalTrials" value="PLoSClinicalTrials" title="PLoS Hub for Clinical Trials">PLoS Hub for Clinical Trials</option>
                  */
	otherjournals["PLoS Biology"] = function(v,p){
		postQuery('http://www.plosbiology.org/search/findAnArticleSearch.action', {'volume':v, 'eLocationId':p,'filterJournals':'PLoSBiology'});
	}

	otherjournals["PLoS One"] = function(v,p){
		postQuery('http://www.plosbiology.org/search/findAnArticleSearch.action', {'volume':v, 'eLocationId':p,'filterJournals':'PLoSONE'});
	}

		
	alljournals = alljournals.concat(keys(otherjournals));
	isSupported.push(isOtherSupportedJournal); 
	jumpJournal.push(openOther);
}

function isOtherSupportedJournal(t,ambsearch){
	var titles = keys(otherjournals);
	return searchNameAmbiguous(t,titles,ambsearch);
}

function openOther(t,v,p,ambsearch){
	otherjournals[t](v,p);
}

