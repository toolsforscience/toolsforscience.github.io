//
//  others.js
//  ver. 0.71
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
		
		//PNAS
		otherjournals["PNAS"] = function(v,p){
				openURL('http://www.pnas.org/search?submit=yes&submit=Submit&volume='+v+'&firstpage='+p);
				openURL("http://www.pnas.org/search?submit=yes&submit=Submit&pubdate_year=&volume="+v+"&firstpage="+p+"&doi=&author1=&author2=&title=&andorexacttitle=and&titleabstract=&andorexacttitleabs=and&fulltext=&andorexactfulltext=and&fmonth=&fyear=&tmonth=&tyear=&tocsectionid=all&format=standard&hits=10&sortspec=relevance&submit=yes")
		}
		otherjournals["Proc. Natl. Acad. Sci. U.S.A."] = otherjournals["PNAS"];
		otherjournals["Proc. Natl. Acad. Sci."] = otherjournals["PNAS"];
		
		//JBC
		otherjournals["J. Biol. Chem."] = function(v,p){
				openURL('http://www.jbc.org/search?author1=&fulltext=&pubdate_year=&volume='+v+'&firstpage='+p+'&submit=yes');
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
        getQuery('http://www.is.csj.jp/php/navi.php',{'year':v,'page':p,'journal':'cl'});
    }

		//Organic Syntheses
		otherjournals["Organic Syntheses"] = function(v,p){
        getQuery('http://www.orgsyn.org/orgsyn/default.asp',
        				 {'dbname':'orgsyn','dataaction':'search','metadata_directive':'blind_gui','formgroup':'quick_form_group',
        					'Preps.AnnVol':v,'Preps.AnnPage':p});
    }
  	otherjournals["OS"] = otherjournals["Organic Syntheses"];
  	
  	//Thieme
 		otherjournals["Synfacts"] = function(v,p){
        postQuery('https://www.thieme-connect.com/ejournals/searchresult',
        					{'task':'advancedSearch','timeperiod':'1','zeitschrift1':'synfacts','startyear':v,'endyear':v,'startpage':p});
    }
 		otherjournals["Synthesis"] = function(v,p){
        postQuery('https://www.thieme-connect.com/ejournals/searchresult',
        					{'task':'advancedSearch','timeperiod':'1','zeitschrift1':'synthesis','startyear':v,'endyear':v,'startpage':p});
    }
 		otherjournals["Synlett"] = function(v,p){
        postQuery('https://www.thieme-connect.com/ejournals/searchresult',
        					{'task':'advancedSearch','timeperiod':'1','zeitschrift1':'synlett','startyear':v,'endyear':v,'startpage':p});
    }

 		otherjournals["The Journal of Immunology"] = function(v,p){
 				openURL("http://www.jimmunol.org/search?"+
 								"submit=yes&submit=Submit&pubdate_year=&volume="+v+"&firstpage="+p+
 								"&tocsectionid=all&excludeflag=MTG_ABSTRACT_ARTICLE&format=standard&hits=10&sortspec=relevance&submit=yes");
 		}
 		
 		otherjournals["The Journal of Experimental Medicine"] = function(v,p){
 				openURL('http://jem.rupress.org/search?submit=yes&submit=Submit&pubdate_year=&volume='+v+'&firstpage='+p+'&doi=&author1=&author2=&title=&andorexacttitle=and&titleabstract=&andorexacttitleabs=and&fulltext=&andorexactfulltext=and&fmonth=&fyear=&tmonth=&tyear=&tocsectionid=all&format=standard&hits=10&sortspec=date&submit=yes');
 		}

		otherjournals["The Journal of Cell Biology"] = function(v,p){
 				openURL('http://jcb.rupress.org/search?submit=yes&submit=Submit&pubdate_year=&volume='+v+'&firstpage='+p+'&doi=&author1=&author2=&title=&andorexacttitle=and&titleabstract=&andorexacttitleabs=and&fulltext=&andorexactfulltext=and&fmonth=&fyear=&tmonth=&tyear=&tocsectionid=all&format=standard&hits=10&sortspec=date&submit=yes');
 		}

		otherjournals["The Journal of General Physiology"] = function(v,p){
 				openURL('http://jgp.rupress.org/search?submit=yes&submit=Submit&pubdate_year=&volume='+v+'&firstpage='+p+'&doi=&author1=&author2=&title=&andorexacttitle=and&titleabstract=&andorexacttitleabs=and&fulltext=&andorexactfulltext=and&fmonth=&fyear=&tmonth=&tyear=&tocsectionid=all&format=standard&hits=10&sortspec=date&submit=yes');
 		}
		//JSAP
		otherjournals["Applied Physics Express"] = function(v,p){
				openURL('http://apex.jsap.jp/cgi-bin/getarticle?magazine=APEX&volume='+v+'&page='+p);
		}

		otherjournals["Japanese Journal of Applied Physics"] = function(v,p){
				openURL('http://jjap.jsap.jp/cgi-bin/getarticle?magazine=JJAP&volume='+v+'&page='+p);
		}

		otherjournals["Genes & Development"] = function(v,p){
				openURL('http://genesdev.cshlp.org/search?submit=yes&submit=Submit&pubdate_year=&volume='+v+'&firstpage='+p+'&doi=&author1=&author2=&title=&andorexacttitle=and&titleabstract=&andorexacttitleabs=and&fulltext=&andorexactfulltext=and&fmonth=&fyear=&tmonth=&tyear=&format=standard&hits=10&sortspec=relevance&submit=yes');

		}
		otherjournals["RNA"] = function(v,p){
				openURL('http://rnajournal.cshlp.org/search?submit=yes&submit=Submit&pubdate_year=&volume='+v+'&firstpage='+p+'&doi=&author1=&author2=&title=&andorexacttitle=and&titleabstract=&andorexacttitleabs=and&fulltext=&andorexactfulltext=and&fmonth=&fyear=&tmonth=&tyear=&format=standard&hits=10&sortspec=relevance&submit=yes');
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

