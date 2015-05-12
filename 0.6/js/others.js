//
//  others.js
//  ver. 0.6
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

mydebug('others.js loaded');

initializeOthers();

function initializeOthers(){
	otherjournals = new Array();
	otherjournals["Science"] = function(v,p){
		location.href = "http://www.sciencemag.org/cgi/search?volume=" + v +"&firstpage="
		+ p +"&search_citation-search.x=53&search_citation-search.y=11&search_citation-search=search";
	};
	
/*	//Biophys. J.
	otherjournals["Biophysical Journal"] = function(v,p){
		location.href = 'http://www.cell.com/biophysj/searchresults?searchVolume='+v+'&searchStartPage='+p;
	};

	//Cell
	otherjournals["Cell"] = function(v,p){
		location.href = 'http://www.cell.com/advancedsearch?searchVolume='+v+'&searchIssue=&searchStartPage='+p+'&advancedSearch=true';
	};
*/	
	//PNAS
	otherjournals["PNAS"] = function(v,p){
		location.href = 'http://www.pnas.org/search?submit=yes&submit=Submit&volume='+v+'&firstpage='+p;
	};
	otherjournals["Proc. Natl. Acad. Sci. U.S.A."] = otherjournals["PNAS"];
	
	//JBC
	otherjournals["J. Biol. Chem."] = function(v,p){
		location.href = 'http://www.jbc.org/search?author1=&fulltext=&pubdate_year=&volume='+v+'&firstpage='+p+'&submit=yes';
	}

	//PLoS
	otherjournals["PLoS ONE"] = function(v,p){
		postQuery('http://www.plosbiology.org/search/findAnArticleSearch.action', {'volume':v, 'eLocationId':p,'filterJournals':'PLoSONE'});
	}
	otherjournals["PLoS Biology"] = function(v,p){
		postQuery('http://www.plosbiology.org/search/findAnArticleSearch.action', {'volume':v, 'eLocationId':p,'filterJournals':'PLoSBiology'});
	}
	otherjournals["PLoS Medicine"] = function(v,p){
		postQuery('http://www.plosbiology.org/search/findAnArticleSearch.action', {'volume':v, 'eLocationId':p,'filterJournals':'PLoSMedicine'});
	}
	otherjournals["PLoS Genetics"] = function(v,p){
		postQuery('http://www.plosbiology.org/search/findAnArticleSearch.action', {'volume':v, 'eLocationId':p,'filterJournals':'PLoSGenetics'});
	}
	otherjournals["PLoS Pathogens"] = function(v,p){
		postQuery('http://www.plosbiology.org/search/findAnArticleSearch.action', {'volume':v, 'eLocationId':p,'filterJournals':'PLoSPathogens'});
	}
	otherjournals["PLoS Computational Biology"] = function(v,p){
		postQuery('http://www.plosbiology.org/search/findAnArticleSearch.action', {'volume':v, 'eLocationId':p,'filterJournals':'PLoSCompBiol'});
	}
	otherjournals["PLoS Neglected Tropical Diseases"] = function(v,p){
		postQuery('http://www.plosbiology.org/search/findAnArticleSearch.action', {'volume':v, 'eLocationId':p,'filterJournals':'PLoSNTD'});
	}
	otherjournals["PLoS Collections"] = function(v,p){
		postQuery('http://www.plosbiology.org/search/findAnArticleSearch.action', {'volume':v, 'eLocationId':p,'filterJournals':'PLoSCollections'});
	}
	otherjournals["PLoS Hub for Clinical Trials"] = function(v,p){
		postQuery('http://www.plosbiology.org/search/findAnArticleSearch.action', {'volume':v, 'eLocationId':p,'filterJournals':'PLoSClinicalTrials'});
	}
    
    //The Chemical Society of Japan
	otherjournals["Bulletin of the Chemical Society of Japan"] = function(v,p){
        getQuery('http://www.jstage.jst.go.jp/jump/bcsj/-char/ja',{'vol':v,'startpage':p});
    }
	otherjournals["Chemistry Letters"] = function(v,p){
        getQuery('http://www.is.csj.jp/php/navi.php',{'year':v,'page':p});
    }
    
		
	alljournals = alljournals.concat(keys(otherjournals));
	isSupported.push(isOthersSupportedJournal); 
	jumpJournal.push(openOthers);
}

function isOthersSupportedJournal(t,ambsearch){
	var titles = keys(otherjournals);
	return searchNameAmbiguous(t,titles,ambsearch);
}

function openOthers(t,v,p,ambsearch){
	otherjournals[t](v,p);
}

