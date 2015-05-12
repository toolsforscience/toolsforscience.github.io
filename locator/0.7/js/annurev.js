//
//  annurev.js
//  ver. 0.7
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var annurevjournals = {
'Annual Review of Analytical Chemistry':'anchem',
'Annual Review of Anthropology':'anthro',
'Annual Review of Astronomy and Astrophysics':'astro',
'Annual Review of Biochemistry':'biochem',
'Annual Review of Biomedical Engineering':'bioeng',
'Annual Review of Biophysics':'biophys',
'ANNU REV BIOPH BIOM':'biphys',	//added
'Annual Review of Biophysics and Biomolecular Structure':'biophys',
'ANNUAL REVIEW OF BIOPHYSICS AND BIOMOLECULAR STRUCTURE':'biophys',	//added
'Annual Review of Cell and Developmental Biology':'cellbio',
'Annual Review of Chemical and Biomolecular Engineering':'chembioeng',
'Annual Review of Clinical Psychology':'clinpsy',
'Annual Review of Computer Science':'arcompsci',
'Annual Review of Condensed Matter Physics':'conmatphys',
'Annual Review of Earth and Planetary Sciences':'earth',
'Annual Review of Ecology, Evolution, and Systematics':'ecolsys',
'Annual Review of Economics':'economics',
'Annual Review of Entomology':'ento',
'Annual Review of Environment and Resources':'energy',
'Annual Review of Financial Economics':'financial',
'Annual Review of Fluid Mechanics':'fluid',
'Annual Review of Food Science and Technology':'food',
'Annual Review of Genetics':'genet',
'Annual Review of Genomics and Human Genetics':'genom',
'Annual Review of Immunology':'immunol',
'Annual Review of Law and Social Science':'lawsocsci',
'Annual Review of Marine Science':'marine',
'Annual Review of Materials Research':'matsci',
'Annual Review of Medicine':'med',
'Annual Review of Microbiology':'micro',
'Annual Review of Neuroscience':'neuro',
'Annual Review of Nuclear and Particle Science':'nucl',
'Annual Review of Nutrition':'nutr',
'Annual Review of Pathology: Mechanisms of Disease':'pathmechdis',
'Annual Review of Pharmacology and Toxicology':'pharmtox',
'Annual Review of Physical Chemistry':'physchem',
'Annual Review of Physiology':'physiol',
'Annual Review of Phytopathology':'phyto',
'Annual Review of Plant Biology':'arplant',
'Annual Review of Political Science':'polisci',
'Annual Review of Psychology':'psych',
'Annual Review of Public Health':'publhealth',
'Annual Review of Resource Economics':'resource',
'Annual Review of Sociology':'soc'
}


mydebug('annurev.js loaded');
alljournals = alljournals.concat(keys(annurevjournals));

isSupported.push(isAnnurevJournal); 
jumpJournal.push(openAnnurev);

function isAnnurevJournal(t,ambsearch){
	var titles = keys(annurevjournals);
	return searchNameAmbiguous(t,titles,ambsearch);
}

function openAnnurev(t,v,p,ambsearch){
        var key = annurevjournals[t]; 
        getQuery("http://www.annualreviews.org/action/quickLink",
        {"quickLinkJournal":key,"quickLinkVolume":v,"quickLinkPage":p});
}