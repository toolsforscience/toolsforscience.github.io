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
}//
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
}//
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
}//
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
//
//  elsevier.js
//  ver. 0.8
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var elsevierjournals={
"Acta Physico-Chimica Sinica":"1872-1508",
"Advanced Drug Delivery Reviews":"0169-409X",
"Advances in Colloid and Interface Science":"0001-8686",
"Analytica Chimica Acta":"0003-2670",
"Antiviral Research":"0166-3542",
"Applied Radiation and Isotopes":"0969-8043",
"Applied Surface Science":"0169-4332",
"Arabian Journal of Chemistry":"1878-5352",
"Bioelectrochemistry":"1567-5394",
"Bioorganic & Medicinal Chemistry":"0968-0896",
"Bioorganic & Medicinal Chemistry Letters":"0960-894X",
"Bioorganic Chemistry":"0045-2068",
"Biophysical Chemistry":"0301-4622",
"Biosensors & Bioelectronics":"0956-5663",
//"Biochimica et Biophysica Acta":"0006-3002", //NOT WORKING
"Calphad":"0364-5916",
"Carbohydrate Polymers":"0144-8617",
"Carbohydrate Research":"0008-6215",
"Carbon":"0008-6223",
"Catalysis Today":"0920-5861",
"Chemical Physics":"0301-0104",
"Chemical Physics Letters":"0009-2614",
"Chemical Research in Chinese Universities":"1005-9040",
"Chemistry & Biology":"1074-5521",
"Chemistry and Physics of Lipids":"0009-3084",
"Chemometrics and Intelligent Laboratory Systems":"0169-7439",
"Chinese Chemical Letters":"1001-8417",
"Chinese Journal of Analytical Chemistry":"1872-2040",
"Chinese Journal of Chromatography":"1872-2059",
"Chromatographia":"0009-5893",
"Clinica Chimica Acta":"0009-8981",
"Colloids and Surfaces A: Physicochemical and Engineering Aspects":"0927-7757",
"Combinatorial Chemistry - An Online Journal":"1464-3383",
"Comparative Biochemistry and Physiology - Part B: Biochemistry & Molecular Biology":"1096-4959",
"Comptes Rendus Chimie":"1631-0748",
"Computational Biology and Chemistry":"1476-9271",
"Computational and Theoretical Chemistry":"2210-271X",
"Contraception":"0010-7824",
"Coordination Chemistry Reviews":"0010-8545",
"Corrosion Science":"0010-938X",
"Current Opinion in Biotechnology":"0958-1669",
"Current Opinion in Cell Biology":"0955-0674",
"Current Opinion in Chemical Biology":"1367-5931",
"Current Opinion in Colloid & Interface Science":"1359-0294",
"Current Opinion in Environmental Sustainability":"1877-3435",
"Current Opinion in Genetics & Development":"0959-437X",
"Current Opinion in Immunology":"0952-7915",
"Current Opinion in Microbiology":"1369-5274",
"Current Opinion in Neurobiology":"0959-4388",
"Current Opinion in Pharmacology":"1471-4892",
"Current Opinion in Plant Biology":"1369-5266",
"Current Opinion in Solid State & Materials Science":"1359-0286",
"Current Opinion in Structural Biology":"0959-440X",
"Current Opinion in Virology":"1879-6257",
"Diamond and Related Materials":"0925-9635",
"Electrochemistry Communications":"1388-2481",
"Electrochimica Acta":"0013-4686",
"European Journal of Medicinal Chemistry":"0223-5234",
"European Polymer Journal":"0014-3057",
"Experimental Thermal and Fluid Science":"0894-1777",
"Fitoterapia":"0367-326X",
"Fluid Phase Equilibria":"0378-3812",
"Food Hydrocolloids":"0268-005X",
"Forensic Package":"FS00-8144",
"Forensic Science International":"0379-0738",
"Forensic Science International: Genetics":"1872-4973",
"Forensic Science International Supplement Series":"1875-1761",
"Free Radical Biology & Medicine":"0891-5849",
"Geochimica et Cosmochimica Acta":"0016-7037",
"Heterocycles":"0385-5414",
"Industrial Crops and Products":"0926-6690",
"Infrared Physics & Technology":"1350-4495",
"Inorganic Chemistry Communications":"1387-7003",
"Inorganica Chimica Acta":"0020-1693",
"International Journal of Heat and Fluid Flow":"0142-727X",
"International Journal of Hydrogen Energy":"0360-3199",
"International Journal of Mass Spectrometry":"1387-3806",
"International Journal of Thermal Sciences":"1290-0729",
"Journal of Aerosol Science":"0021-8502",
"Journal of Analytical and Applied Pyrolysis":"0165-2370",
"Journal of Archaeological Science":"0305-4403",
"Journal of Biochemical and Biophysical Methods":"0165-022X",
"Journal of Chromatography A":"0021-9673",
"Journal of Chromatography B":"1570-0232",
"Journal of Colloid and Interface Science":"0021-9797",
"Journal of Controlled Release":"0168-3659",
"Journal of Cultural Heritage":"1296-2074",
"Journal of Electroanalytical Chemistry with Bioelectrochemistry and Electrochemistry Communications (Combined Subscription)":"FS00-6040",
"Journal of Electroanalytical Chemistry":"1572-6657",
"Journal of Electron Spectroscopy and Related Phenomena":"0368-2048",
"Journal of Ethnopharmacology":"0378-8741",
"Journal of Fluorine Chemistry":"0022-1139",
"Journal of Fuel Chemistry and Technology":"1872-5813",
"Journal of Inorganic Biochemistry":"0162-0134",
"Journal of Luminescence":"0022-2313",
"Journal of Magnetic Resonance":"1090-7807",
"Journal of Molecular Catalysis A: Chemical":"1381-1169",
"Journal of Molecular Graphics and Modelling":"1093-3263",
"Journal of Molecular Liquids":"0167-7322",
"Journal of Molecular Spectroscopy":"0022-2852",
"Journal of Molecular Structure":"0022-2860",
"Journal of Molecular Structure: THEOCHEM":"0166-1280",
"Journal of Natural Gas Chemistry":"1003-9953",
"Journal of Nuclear Materials":"0022-3115",
"Journal of Organometallic Chemistry":"0022-328X",
"Journal of Pharmaceutical and Biomedical Analysis":"0731-7085",
"Journal of Photochemistry and Photobiology A: Chemistry":"1010-6030",
"Journal of Photochemistry and Photobiology B: Biology":"1011-1344",
"Journal of Photochemistry and Photobiology C: Photochemistry Reviews":"1389-5567",
"Journal of Power Sources":"0378-7753",
"Journal of Quantitative Spectroscopy & Radiative Transfer":"0022-4073",
"Journal of Rare Earths":"1002-0721",
"Journal of Saudi Chemical Society":"1319-6103",
"Journal of Solid State Chemistry":"0022-4596",
"Journal of The American Society for Mass Spectrometry":"1044-0305",
"Journal of Trace Elements in Medicine and Biology":"0946-672X",
"Materials Characterization":"1044-5803",
"Materials Research Bulletin":"0025-5408",
"Materials Science and Engineering: B":"0921-5107",
"Mendeleev Communications":"0959-9436",
"Microchemical Journal":"0026-265X",
"Micron":"0968-4328",
"Nano Today":"1748-0132",
"Nuclear Instruments and Methods in Physics Research Section B: Beam Interactions with Materials and Atoms":"0168-583X",
"Nuclear Medicine and Biology":"0969-8051",
"Optical Materials":"0925-3467",
"Optics Communications":"0030-4018",
"Organic Geochemistry":"0146-6380",
"Pharmacology & Therapeutics":"0163-7258",
"Photonics and Nanostructures - Fundamentals and Applications":"1569-4410",
		"Physica":"0378-4371",
		"Physica A":"0378-4371",
		"Physica B":"0921-4526",
		"Physica C":"0921-4534",
		"Physica B+C":"0921-4526",
"Physica D: Nonlinear Phenomena":"0167-2789",
"Physics of Life Reviews":"1571-0645",
"Phytochemistry Letters":"1874-3900",
"Phytochemistry":"0031-9422",
"Phytomedicine":"0944-7113",
"Polyhedron":"0277-5387",
"Polymer Contents":"0883-153X",
"Polymer Degradation and Stability":"0141-3910",
"Polymer Testing":"0142-9418",
"Polymer":"0032-3861",
"Procedia Chemistry":"1876-6196",
"Progress in Biophysics & Molecular Biology":"0079-6107",
"Progress in Lipid Research":"0163-7827",
"Progress in Nuclear Magnetic Resonance Spectroscopy":"0079-6565",
"Progress in Polymer Science":"0079-6700",
"Progress in Surface Science":"0079-6816",
"Radiation Physics and Chemistry":"0969-806X",
"Reactive and Functional Polymers":"1381-5148",
"Revue Francophone des Laboratoires":"1773-035X",
"Sensors and Actuators A: Physical":"0924-4247",
"Sensors and Actuators B: Chemical":"0925-4005",
"Solar Energy Materials & Solar Cells":"0927-0248",
"Solid State Ionics":"0167-2738",
"Solid State Nuclear Magnetic Resonance":"0926-2040",
"Solid State Sciences":"1293-2558",
"Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy":"1386-1425",
"Spectrochimica Acta Part B: Atomic Spectroscopy":"0584-8547",
"Steroids":"0039-128X",
"Surface Science Reports":"0167-5729",
"Surface and Coatings Technology":"0257-8972",
"Talanta":"0039-9140",
"Tetrahedron":"0040-4020",
"Tetrahedron Letters":"0040-4039",
"Tetrahedron: Asymmetry":"0957-4166",
"The Journal of Chemical Thermodynamics":"0021-9614",
"The Journal of Supercritical Fluids":"0896-8446",
"Thermochimica Acta":"0040-6031",
"Thin Solid Films":"0040-6090",
"Trends in Analytical Chemistry":"0165-9936",
"Ultramicroscopy":"0304-3991",
"Vibrational Spectroscopy":"0924-2031",
//Biology
"Current Opinion in Biotechnology":"0958-1669",
"Journal of Molecular Biology":"0022-2836",
"FEBS Letters":"0014-5793",
"Immunology Today":"0167-5699"
};

mydebug('elsevier.js loaded');
alljournals = alljournals.concat(keys(elsevierjournals));

isSupported.push(isElsevierJournal); 
jumpJournal.push(openElsevier);

function isElsevierJournal(t,ambsearch){
	return searchNameAmbiguous(t,keys(elsevierjournals),ambsearch);
}

function openElsevier(fullname,v,p,ambsearch){
    hash = {
        "_ob":"MiamiSearchURL",
        "_method":"submitForm",
        "_acct":"C000059607",
        "_temp":"search.tmpl",
        "md5":"dc41ac0f456e7c9a058452fc86d47672",
        "test_alid":"",
        "SearchText":elsevierjournals[fullname],
        "keywordOpt":"7",
        "aip":"1",
        "srcSel":"1",
        "DateOpt":"2",
        "Volume":v,
        "Page":p,
        "fromDate":"1900",
        "toDate":"Present"
    };
	getQuery("http://www.sciencedirect.com/science",hash);
}
// iop.js
// ver 0.9

var iopjournals = {"Acta Physica Sinica":"1004-423X",
"Advances in Natural Sciences: Nanoscience and Nanotechnology":"2043-6262",
"Biofabrication":"1758-5090",
"Bioinspiration &amp; Biomimetics":"1748-3190",
"Biomedical Materials":"1748-605X",
"British Journal of Applied Physics":"0508-3443",
"Chinese Journal of Astronomy and Astrophysics":"1009-9271",
"Chinese Journal of Chemical Physics":"1003-7713",
"Chinese Journal of Chemical Physics":"1674-0068",
"Chinese Journal of Semiconductors":"0253-4177",
"Chinese Physics":"1009-1963",
"Chinese Physics B":"1674-1056",
"Chinese Physics C":"1674-1137",
"Chinese Physics Letters":"0256-307X",
"Classical and Quantum Gravity":"0264-9381",
"Clinical Physics and Physiological Measurement":"0143-0815",
"Communications in Theoretical Physics":"0253-6102",
"Computational Science &amp; Discovery":"1749-4699",
"Distributed Systems Engineering":"0967-1846",
"Europhysics Letters":"0295-5075",
"EPL":"0295-5075",
"Environmental Research Letters":"1748-9326",
"European Journal of Physics":"0143-0807",
"Fluid Dynamics Research":"1873-7005",
"IOP Conference Series: Earth and Environmental Science":"1755-1315",
"IOP Conference Series: Materials Science and Engineering":"1757-899X",
"Inverse Problems":"0266-5611",
"Izvestiya: Mathematics":"1064-5632",
"Journal of Breath Research":"1752-7163",
"Journal of Cosmology and Astroparticle Physics":"1475-7516",
"Journal of Geophysics and Engineering":"1742-2140",
"Journal of High Energy Physics":"1126-6708",
"Journal of Instrumentation":"1748-0221",
"Journal of Micromechanics and Microengineering":"0960-1317",
"Journal of Neural Engineering":"1741-2552",
"Journal of Nuclear Energy. Part C, Plasma Physics, Accelerators, Thermonuclear Research":"0368-3281",
"Journal of Optics":"0150-536X",
"Journal of Optics":"2040-8986",
"Journal of Optics A: Pure and Applied Optics":"1464-4258",
"Journal of Optics B: Quantum and Semiclassical Optics":"1464-4266",
"Journal of Physics A: General Physics":"0022-3689",
"Journal of Physics A: Mathematical and General":"0305-4470",
"Journal of Physics A: Mathematical and Theoretical":"1751-8121",
"Journal of Physics A: Mathematical, Nuclear and General":"0301-0015",
"Journal of Physics B: Atomic and Molecular Physics":"0022-3700",
"Journal of Physics B: Atomic, Molecular and Optical Physics":"0953-4075",
"Journal of Physics C: Solid State Physics":"0022-3719",
"Journal of Physics D: Applied Physics":"0022-3727",
"Journal of Physics E: Scientific Instruments":"0022-3735",
"Journal of Physics F: Metal Physics":"0305-4608",
"Journal of Physics G: Nuclear Physics":"0305-4616",
"Journal of Physics G: Nuclear and Particle Physics":"0954-3899",
"Journal of Physics: Condensed Matter":"0953-8984",
"Journal of Physics: Conference Series":"1742-6596",
"Journal of Radiological Protection":"0952-4746",
"Journal of Scientific Instruments":"0950-7671",
"Journal of Semiconductors":"1674-4926",
"Journal of Statistical Mechanics: Theory and Experiment":"1742-5468",
"Journal of the Society for Radiological Protection":"0260-2814",
"Mathematics of the USSR-Izvestiya":"0025-5726",
"Mathematics of the USSR-Sbornik":"0025-5734",
"Measurement Science and Technology":"0957-0233",
"Metrologia":"0026-1394",
"Modelling and Simulation in Materials Science and Engineering":"0965-0393",
"Nanotechnology":"0957-4484",
"New Journal of Physics":"1367-2630",
"Nonlinearity":"0951-7715",
"Nouvelle Revue d'Optique":"0335-7368",
"Nouvelle Revue d'Optique Appliquée":"0029-4780",
"Nuclear Fusion":"0029-5515",
"Physica Scripta":"1402-4896",
"Physical Biology":"1478-3975",
"Physics Education":"0031-9120",
"Physics in Medicine and Biology":"0031-9155",
"Physics in Technology":"0305-4624",
"Physics-Uspekhi":"1063-7869",
"Physiological Measurement":"0967-3334",
"Plasma Physics":"0032-1028",
"Plasma Physics and Controlled Fusion":"0741-3335",
"Plasma Science and Technology":"1009-0630",
"Plasma Sources Science and Technology":"0963-0252",
"Proceedings of the Physical Society":"0959-5309",
"Proceedings of the Physical Society":"0370-1328",
"Proceedings of the Physical Society of London":"1478-7814",
"Proceedings of the Physical Society. Section A":"0370-1298",
"Proceedings of the Physical Society. Section B":"0370-1301",
"Pure and Applied Optics: Journal of the European Optical Society Part A":"0963-9659",
"Quantum Electronics":"1063-7818",
"Quantum Optics: Journal of the European Optical Society Part B":"0954-8998",
"Quantum and Semiclassical Optics: Journal of the European Optical Society Part B":"1355-5111",
"Reports on Progress in Physics":"0034-4885",
"Research in Astronomy and Astrophysics":"1674-4527",
"Review of Physics in Technology":"0034-6683",
"Russian Academy of Sciences. Izvestiya Mathematics":"1468-4810",
"Russian Academy of Sciences. Sbornik Mathematics":"1468-4802",
"Russian Chemical Reviews":"0036-021X",
"Russian Mathematical Surveys":"0036-0279",
"Sbornik: Mathematics":"1064-5616",
"Science Foundation in China":"1005-0841",
"Science and Technology of Advanced Materials":"1468-6996",
"Semiconductor Science and Technology":"0268-1242",
"Smart Materials and Structures":"0964-1726",
"Soviet Journal of Quantum Electronics":"0049-1748",
"Soviet Physics Uspekhi":"0038-5670",
"Superconductor Science and Technology":"0953-2048",
"The Astronomical Journal":"1538-3881",
"The Astrophysical Journal":"0004-637X",
"The Astrophysical Journal Letters":"1538-4357",
"The Astrophysical Journal Letters":"2041-8205",
"The Astrophysical Journal Supplement Series":"0067-0049",
"Transactions of the Optical Society":"1475-4878"};

mydebug('iop.js loaded');
alljournals = alljournals.concat(keys(iopjournals));

isSupported.push(isIopJournal); 
jumpJournal.push(openIop);

function isIopJournal(t,ambsearch){
	return searchNameAmbiguous(t,keys(iopjournals),ambsearch);
}

function openIop(fullname,v,p,ambsearch){
    hash = {
        "CF_JUSTCOUNT":"",
        "CF_JOURNAL":iopjournals[fullname],
				"CF_VOLUME":v,
				"CF_ISSUE":"",
				"CF_PAGE":p
    };
	getQuery("http://iopscience.iop.org/findcontent",hash);
}


//
//  npg.js
//  ver. 0.7
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var npgjournals = {
'The American Journal of Gastroenterology':'AJG', 
'The American Journal of Gastroenterology Supplements':'AJGSUP', 
'American Journal Of Hypertension':'AJH', 
'Asian Journal of Andrology':'AJA', 
'authors &amp; referees @ NPG':'AUTHORS', 
'Bioentrepeneur':'BIOENT', 
'Blood Cancer Journal':'BCJ', 
'Bone Marrow Transplantation':'BMT', 
'British Dental Journal':'BDJ', 
'British Journal of Cancer':'BJC', 
'Cancer Gene Therapy':'CGT', 
'Cell Death &amp; Differentiation':'CDD', 
'Cell Death &amp; Disease':'CDDIS', 
'Cell Migration Gateway':'CMG_UPDATE', 
'Cell Research':'CR', 
'Cellular &amp; Molecular Immunology':'CMI', 
'Clinical and Translational Gastroenterology':'CTG', 
'Clinical Pharmacology &amp; Therapeutics':'CLPT', 
'The EMBO Journal':'EMBOJ', 
'EMBO reports':'EMBOR', 
'European Journal of Clinical Nutrition':'EJCN', 
'European Journal of Human Genetics':'EJHG', 
'Evidence-Based Dentistry':'EBD', 
'Eye':'EYE', 
'Functional Glycomics Gateway':'FG', 
'Gene Therapy':'GT', 
'Genes and Immunity':'GENE', 
'GI Motility online':'GIMO', 
'Heredity':'HDY', 
'Hypertension Research':'HR', 
'Immunology and Cell Biology':'ICB', 
'International Journal of Impotence Research':'IJIR', 
'International Journal of Obesity':'IJO', 
'The ISME Journal':'ISMEJ', 
'JID Symposium Proceedings':'JIDSP', 
'The Journal of Antibiotics':'JA', 
'Journal of Cerebral Blood Flow &amp; Metabolism':'JCBFM', 
'Journal of Exposure Science and Environmental Epidemiology':'JES', 
'Journal of Human Genetics':'JHG', 
'Journal of Human Hypertension':'JHH', 
'Journal of Investigative Dermatology':'JID', 
'Journal of Perinatology':'JP', 
'Kidney International':'KI', 
'Laboratory Investigation':'LABINVEST', 
'Leukemia':'LEU', 
'Lipidomics Gateway':'LIPIDMAPS', 
'Milestones Cancer':'MILECANCER', 
'Milestones DNA Technologies':'MILEDNA', 
'Milestones Gene Expression':'MILEGENE', 
'Milestones in Cytoskeleton':'MILECYTO', 
'Milestones in Spin':'MILESPIN', 
'Modern Pathology':'MODPATHOL', 
'Molecular Psychiatry':'MP', 
'Molecular Systems Biology':'MSB', 
'Molecular Therapy':'MT', 
'Mucosal Immunology':'MI', 
'Nature':'NATURE', 
'Nat. Biotechnol.':'NBT', 
'Nature Biotechnology':'NBT', 
'Nature Cell Biology':'NCB', 
'Nature Chemical Biology':'NCHEMBIO', 
'Nature Chemistry':'NCHEM', 
'Nature China (International Site)':'NCHINA', 
'Nature Climate Change':'NCLIMATE', 
'Nature Communications':'NCOMMS', 
'Nature Digest':'NDIGEST', 
'Nature Genetics':'NG', 
'Nature Geoscience':'NGEO', 
'Nat. Immun.':'NI',
'Nature Immunology':'NI',
'Nature India':'NINDIA', 
'Nature Materials':'NMAT', 
'Nature Medicine':'NM', 
'Nature Methods':'NMETH', 
'Nature Methods Application Notes':'APP_NOTES', 
'Nature Middle East':'NMIDDLEEAST', 
'Nat. Nanotech.':'NNANO', 
'Nature Nanotech.':'NNANO', 
'Nature Nanotechnology':'NNANO', 
'Nature Neuroscience':'NEURO', 
'Nature Photonics ':'NPHOTON', 
'Nature Physics':'NPHYS', 
'Nature Protocols':'NPROT', 
'Nature Reports Avian Flu':'AVIANFLU', 
'Nature Reports Climate Change':'CLIMATE', 
'Nature Reports Stem Cells':'STEMCELLS', 
'Nature Reviews Cancer':'NRC', 
'Nature Reviews Cardiology':'NRCARDIO', 
'Nature Reviews Clinical Oncology':'NRCLINONC', 
'Nature Reviews Drug Discovery':'NRD', 
'Nature Reviews Endocrinology':'NRENDO', 
'Nature Reviews Gastroenterology and Hepatology':'NRGASTRO', 
'Nature Reviews Genetics':'NRG', 
'Nature Reviews Immunology':'NRI', 
'Nature Reviews Microbiology':'NRMICRO', 
'Nat. Rev. Mol. Cell Biol.':'NRM',
'Nature Reviews Molecular Cell Biology':'NRM', 
'Nature Reviews Nephrology':'NRNEPH', 
'Nature Reviews Neurology':'NRNEUROL', 
'Nature Reviews Neuroscience':'NRN', 
'Nature Reviews Rheumatology':'NRRHEUM', 
'Nature Reviews Urology':'NRUROL', 
'Nature Structural &amp; Molecular Biology':'NSMB', 
'NatureJobs':'NATUREJOBS', 
'NCI-Nature Pathway Interaction Database':'PID', 
'Neuropsychopharmacology':'NPP', 
'Nutrition &amp; Diabetes':'NUTD', 
'Obesity':'OBY', 
'Omics Gateway':'OMICS', 
'Oncogene':'ONC', 
'The Pharmacogenomics Journal':'TPJ', 
'Polymer Journal':'PJ', 
'Prostate Cancer and Prostatic Diseases':'PCAN', 
'Protein Model Portal':'PSIKB', 
'Protein Structure Initiative Structural Genomics Knowledgebase':'PSISKB', 
'Protocol Exchange':'PRNE', 
'RNAi Gateway':'RNAI', 
'SciBX: Science-Busine eXchange':'SCIBX', 
'Scientific American':'SCIENTIFICAMERICAN', 
'Scientific American Mind':'SCIENTIFICAMERICANMIND', 
'Signaling Gateway':'SG', 
'Spinal Cord':'SC', 
'Structural Biology Knowledgebase':'SBKB', 
'Translational Psychiatry':'TP', 
'Vital':'VITAL'
};

if(debug)	console.log('npg.js loaded');
alljournals = alljournals.concat(keys(npgjournals));

isSupported.push(isNpgJournal); 
jumpJournal.push(openNpg);

function isNpgJournal(t,ambsearch){
	var titles = keys(npgjournals);
	return searchNameAmbiguous(t,titles,ambsearch);
}

function openNpg(t,v,p,ambsearch){
	openURL("http://www.nature.com/search/executeSearch?sp-advanced=true&sp-q-9["
	+ npgjournals[t] +"]=1&include-collections=journals_nature%2Ccrawled_content&sp-q-4="
	+v+"&sp-q-6="+p);
}
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

//
//  rsc.js
//  ver. 0.7
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var rscjournals=[
"The Analyst",
"Analytical Communications",
"Analytical Proceedings",
"Analytical Proceedings including Analytical Communications",
"Annual Reports on Analytical Atomic Spectroscopy",
"Annual Reports on the Progress of Chemistry",
"Annual Reports on the Progress of Chemistry, Section A: General Physical and Inorganic Chemistry",
"Annual Reports on the Progress of Chemistry, Section A: Physical and Inorganic Chemistry",
"Annual Reports Section A (Inorganic Chemistry)",
"Annual Reports Section B (Organic Chemistry)",
"Annual Reports Section C (Physical Chemistry)",
"Chemical Biology Virtual Journal",
"Chemical Communications",
"Chemical Communications (London)",
"Chemistry Education Research and Practice",
"Chemical Science",
"Chemical Society Reviews",
"Chemical Technology",
"Chemistry World",
"Contemporary Organic Synthesis",
"CrystEngComm",
"Dalton Transactions",
"Discuss. Faraday Soc.",
"Discussions of the Faraday Society",
"Energy & Environmental Science",
"Faraday Discussions",
"Faraday Discussions of the Chemical Society",
"Faraday Special Discussions of the Chemical Society",
"Faraday Symposia of the Chemical Society",
"Geochemical Transactions",
"Green Chemistry",
"Green Chem.",
"Journal and Proceedings of the Institute of Chemistry of Great Britain and Ireland",
"Journal and Proceedings of the Royal Institute of Chemistry",
"Journal and Proceedings of the Royal Institute of Chemistry of Great Britain and Ireland",
"Journal of Analytical Atomic Spectrometry",
"Journal of Chemical Research",
"Journal of Environmental Monitoring",
"Journal of Materials Chemistry",
"J. Mater. Chem.",
"Journal of the Chemical Society",
"Journal of the Chemical Society (Resumed)",
"Journal of the Chemical Society A: Inorganic, Physical, Theoretical",
"Journal of the Chemical Society B: Physical Organic",
"Journal of the Chemical Society C: Organic",
"Journal of the Chemical Society D: Chemical Communications",
"Journal of the Chemical Society, Abstracts",
"Journal of the Chemical Society, Chemical Communications",
"Journal of the Chemical Society, Dalton Transactions",
"Journal of the Chemical Society, Faraday Transactions",
"Journal of the Chemical Society, Faraday Transactions 1",
"Journal of the Chemical Society, Faraday Transactions 2",
"Journal of the Chemical Society, Perkin Transactions 1",
"Journal of the Chemical Society, Perkin Transactions 2",
"Journal of the Chemical Society, Transactions",
"Journal of the Royal Institute of Chemistry",
"Jubilee of the Chemical Society",
"Lab on a Chip",
"Memoirs and Proceedings of the Chemical Society",
"Memoirs of the Chemical Society of London",
"Metallomics",
"Molecular BioSystems",
"Natural Product Reports",
"New Journal of Chemistry",
"Organic &  Biomolecular Chemistry",
"Pesticide Outlook",
"Photochemical & Photobiological Sciences",
"PhysChemComm",
"Physical Chemistry Chemical Physics",
"Proceedings of the Analytical Division of the Chemical Society",
"Proceedings of the Chemical Society",
"Proceedings of the Chemical Society (London)",
"Proceedings of the Chemical Society of London",
"Proceedings of the Institute of Chemistry of Great Britain and Ireland",
"Proceedings of the Society for Analytical Chemistry",
"Quarterly Journal of the Chemical Society of London",
"Quarterly Reviews, Chemical Society",
"Royal Institute of Chemistry, Reviews",
"Selected Annual Reviews of the Analytical Sciences",
"Soft Matter",
"Special Discussions of the Faraday Society",
"Symposia of the Faraday Society",
"Transactions of the Faraday Society",

//Abbreviation
"Analyst",
"Analytical Communications",
"Analytical Proc.",
"Analytical Proc. including Analytical Communications",
"Annual Reports on Analytical Atomic Spectroscopy",
"Annual Reports on Prog. Chem.",
"Annual Reports on Prog. Chem., Section A: General Physical and Inorganic Chem.",
"Annual Reports on Prog. Chem., Section A: Physical and Inorganic Chem.",
"Annual Reports Section A (Inorganic Chem.)",
"Annual Reports Section B (Organic Chem.)",
"Annual Reports Section C (Physical Chem.)",
"Chem. Biology Virtual J.",
"Chem. Comm.",
"Chem. Commun.",
"Chem. Comm. (London)",
"Chem. Commun. (London)",
"Chem. Education Research and Practice",
"Chem. Science",
"Chem. Soc. Rev.",
"Chem. Tech.",
"Chem. World",
"Contemporary Organic Synthesis",
"CrystEngComm",
"Dalton Trans.",
"Discussions Faraday Soc.",
"Energy & Environmental Science",
"Faraday Discussions",
"Faraday Discussions Chem. Soc.",
"Faraday Special Discussions Chem. Soc.",
"Faraday Symposia Chem. Soc.",
"Geochemical Trans.",
"Green Chem.",
"Green Chem.",
"J. and Proc. Institute Chem. Great Britain and Ireland",
"J. and Proc. Royal Institute Chem.",
"J. and Proc. Royal Institute Chem. Great Britain and Ireland",
"J. Analytical Atomic Spectrometry",
"J. Chem. Research",
"J. Environmental Monitoring",
"J. Materials Chem.",
"J. Mater. Chem.",
"J. Chem. Soc.",
"J. Chem. Soc. (Resumed)",
"J. Chem. Soc. A: Inorganic, Physical, Theoretical",
"J. Chem. Soc. B: Physical Organic",
"J. Chem. Soc. C: Organic",
"J. Chem. Soc. D: Chem. Communications",
"J. Chem. Soc. Abstracts",
"J. Chem. Soc. Chem. Communications",
"J. Chem. Soc. Dalton Trans.",
"J. Chem. Soc. Faraday Trans.",
"J. Chem. Soc. Faraday Trans. 1",
"J. Chem. Soc. Faraday Trans. 2",
"J. Chem. Soc. Perkin Trans. 1",
"J. Chem. Soc. Perkin Trans. 2",
"J. Chem. Soc. Trans.",
"J. Royal Institute Chem.",
"Jubilee Chem. Soc.",
"Lab on a Chip",
"Memoirs and Proc. Chem. Soc.",
"Memoirs Chem. Soc. London",
"Metallomics",
"Molecular BioSystems",
"Natural Product Reports",
"New J. Chem.",
"Org. Biomol. Chem.",
"Pesticide Outlook",
"Photochemical & Photobiological Sciences",
"PhysChemComm",
"Phys. Chem. Chem. Physics",
"Proc. Analytical Division Chem. Soc.",
"Proc. Chem. Soc.",
"Proc. Chem. Soc. (London)",
"Proc. Chem. Soc. London",
"Proc. Institute Chem. Great Britain and Ireland",
"Proc. Soc. for Analytical Chem.",
"Quarterly J. Chem. Soc. London",
"Quarterly Rev., Chem. Soc.",
"Royal Institute Chem., Rev.",
"Selected Annual Rev. Analytical Sciences",
"Soft Matter",
"Special Discussions Faraday Soc.",
"Symposia Faraday Soc.",
"Trans. Faraday Soc."
];

mydebug('rsc.js loaded');
alljournals = alljournals.concat(rscjournals);

isSupported.push(isRscJournal); 
jumpJournal.push(openRsc);

function isRscJournal(t,ambsearch){
	return searchNameAmbiguous(t,rscjournals,ambsearch);
}

function openRsc(t,v,p,ambsearch){
	// From: http://pubs.rsc.org/en/journals?key=title&value=archive
	//By using "artrefvolumeyear", you can search either by volume or year.
	openURL("http://pubs.rsc.org/en/results?artrefjournalname=" + t + "&artrefstartpage=" + p + "&artrefvolumeyear=" + v + "&fcategory=journal");
}

//
//  springer.js
//  ver. 0.7
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var springerjournals=[
"Accreditation and Quality Assurance",
"Adsorption",
"Amino Acids",
"Analytical and Bioanalytical Chemistry",
"Applied Composite Materials",
"Applied Magnetic Resonance",
"Applied Mathematics & Optimization",
"Applied Microbiology and Biotechnology",
"Applied Physics A",
"Applied Physics B",
"Archive for History of Exact Sciences",
"Archives of Environmental Contamination and Toxicology",
"Biogerontology",
"BioMetals",
"Bioprocess and Biosystems Engineering",
"Biotechnology and Bioprocess Engineering",
"Bulletin of Environmental Contamination and Toxicology",
"Catalysis Letters",
"Catalysis Surveys from Asia",
"Cellulose",
"Central European Journal of Chemistry",
"Chemical and Petroleum Engineering",
"Chemical Papers",
"Chemistry and Technology of Fuels and Oils",
"Chemistry of Heterocyclic Compounds",
"Chemistry of Natural Compounds",
"Chinese Journal of Polymer Science",
"Chemoecology",
"Chinese Science Bulletin",
"Chromatographia",
"Clean Technologies and Environmental Policy",
"Coke and Chemistry",
"Colloid and Polymer Science",
"Colloid Journal",
"Computing and Visualization in Science",
"Contributions to Mineralogy and Petrology",
"Current Topics in Microbiology and Immunology",
"Crystallography Reports",
"Doklady Chemistry",
"Doklady Physical Chemistry",
"Environmental Chemistry Letters",
"Environmental Management",
"European Food Research and Technology",
"The European Physical Journal E",
"Fibre Chemistry",
"Fibers and Polymers",
"Foundations of Chemistry",
"Frontiers of Chemistry in China",
"Geochemistry International",
"High Energy Chemistry",
"Inorganic Materials",
"International Journal for Ion Mobility Spectrometry",
"International Journal of Peptide Research and Therapeutics",
"International Journal of Thermophysics",
"Ionics",
"Journal of the American Oil Chemists' Society",
"Journal of Analytical Chemistry",
"Journal of Applied Electrochemistry",
"Journal of Applied Spectroscopy",
"Journal of Bioenergetics and Biomembranes",
"JBIC Journal of Biological Inorganic Chemistry",
"Journal of Biological Physics",
"Journal of Biomolecular NMR",
"Journal of Chemical Biology",
"Journal of Chemical Crystallography",
"Journal of Chemical Sciences",
"Journal of Chemical Ecology",
"Journal of Cluster Science",
"Journal of Coatings Technology and Research",
"Journal of Computer-Aided Molecular Design",
"Journal of Inclusion Phenomena and Macrocyclic Chemistry",
"Journal of Industrial Microbiology & Biotechnology",
"Journal of Inorganic and Organometallic Polymers and Materials",
"Journal of Materials Science",
"Journal of Mathematical Chemistry",
"Journal of Molecular Modeling",
"Journal of Polymers and the Environment",
"Journal of Porous Materials",
"Journal of Radioanalytical and Nuclear Chemistry",
"Journal of Solid State Electrochemistry",
"Journal of Solution Chemistry",
"Journal of Structural Chemistry",
"Journal of Surfactants and Detergents",
"Journal of Thermal Analysis and Calorimetry",
"Journal of Zhejiang University SCIENCE B",
"Kinetics and Catalysis",
"Korean Journal of Chemical Engineering",
"Lipids",
"Microchimica Acta",
"Medicinal Chemistry Research",
"Microfluidics and Nanofluidics",
"Molecular Diversity",
"Monatshefte fﾃｼr Chemie - Chemical Monthly",
"Moscow University Chemistry Bulletin",
"Oxidation of Metals",
"Petroleum Chemistry",
"Petroleum Science",
"Pharmaceutical Chemistry Journal",
"Phytochemistry Reviews",
"Plasmas and Polymers",
"Plasma Chemistry and Plasma Processing",
"Polymer Bulletin",
"Polymer Science Series A",
"Polymer Science Series B",
"Protection of Metals and Physical Chemistry of Surfaces",
"Polymer Science Series C",
"Radiochemistry",
"Reaction Kinetics, Mechanisms and Catalysis",
"Research on Chemical Intermediates",
"Rheologica Acta",
"Russian Chemical Bulletin",
"Russian Journal of Applied Chemistry",
"Russian Journal of Bioorganic Chemistry",
"Russian Journal of Coordination Chemistry",
"Russian Journal of Electrochemistry",
"Russian Journal of General Chemistry",
"Russian Journal of Inorganic Chemistry",
"Russian Journal of Organic Chemistry",
"Russian Journal of Physical Chemistry A",
"Science China Chemistry",
"Silicon",
"Structural Chemistry",
"Theoretical Chemistry Accounts",
"Theoretical and Experimental Chemistry",
"Theoretical Foundations of Chemical Engineering",
"Topics in Catalysis",
"Transition Metal Chemistry",
"Tribology Letters"
];

mydebug('springer.js loaded');
alljournals = alljournals.concat(springerjournals);

isSupported.push(isSpringerJournal); 
jumpJournal.push(openSpringer);

function isSpringerJournal(t,ambsearch){
	return searchNameAmbiguous(t,springerjournals,ambsearch);
}

function openSpringer(t,v,p,ambsearch){
	openURL("http://www.springerlink.com/content/?k=pub%3a("+t+")+vol%3a("+v+")+p%3a("+p+")");
}

//
//  wiley.js
//  version 0.7
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var wileyjournals = {
"Acta Crystallographica Section A":"10.1111/(ISSN)1600-5724",
"Acta Crystallographica Section B":"10.1111/(ISSN)1600-5740",
"Acta Crystallographica Section D":"10.1002/(ISSN)1399-0047",
"Acta Crystallographica Section E":"10.1002/(ISSN)1600-5368",
"Acta Crystallographica Section F":"10.1002/(ISSN)1744-3091",
"Acta Pharmacologica Sinica":"10.1002/(ISSN)1745-7254",
"Advanced Functional Materials":"10.1002/(ISSN)1616-3028",
"Adv. Mater.":"10.1002/(ISSN)1521-4095",
"Adv. Materials":"10.1002/(ISSN)1521-4095",
"Advanced Materials":"10.1002/(ISSN)1521-4095",
"Advanced Synthesis &amp; Catalysis":"10.1002/(ISSN)(1615-4169,1521-3897,1521-3897,1521-3897)",
"Advances in Polymer Technology":"10.1002/(ISSN)1098-2329",
"AIChE Journal":"10.1002/(ISSN)1547-5905",
"Angew. Chem. Int. Ed.":"10.1002/(ISSN)1521-3773",
"Angewandte Chemie":"10.1002/(ISSN)1521-3757",
"Annali di Chimica":"10.1002/(ISSN)1612-8877",
"Applied Organometallic Chemistry":"10.1002/(ISSN)1099-0739",
"Archiv der Pharmazie":"10.1002/(ISSN)1521-4184",
"Archives of Drug Information":"10.1002/(ISSN)1753-5174",
"Archives of Insect Biochemistry and Physiology":"10.1002/(ISSN)1520-6327",
"Australian Journal of Grape and Wine Research":"10.1002/(ISSN)1755-0238",
"Berichte zur Wissenschaftsgeschichte":"10.1002/(ISSN)1522-2365",
"BioFactors":"10.1002/(ISSN)1872-8081",
"Biofuels, Bioproducts and Biorefining":"10.1002/(ISSN)1932-1031",
"Biomedical Chromatography":"10.1002/(ISSN)1099-0801",
"Biopharmaceutics &amp; Drug Disposition":"10.1002/(ISSN)1099-081X",
"Biopolymers":"10.1002/(ISSN)1097-0282",
"Biospectroscopy":"10.1002/(ISSN)1520-6343",
"Biotechnology Journal":"10.1002/(ISSN)1860-7314",
"British Journal of Clinical Pharmacology":"10.1002/(ISSN)1365-2125",
"British Journal of Pharmacology":"10.1002/(ISSN)1476-5381",
"The Canadian Journal of Chemical Engineering":"10.1002/(ISSN)1939-019X",
"ChemBioChem":"10.1002/(ISSN)1439-7633",
"ChemCatChem":"10.1002/(ISSN)1867-3899",
"The Chemical Record":"10.1002/(ISSN)1528-0691",
"Chemical Vapor Deposition":"10.1002/(ISSN)1521-3862",
"Chemie in unserer Zeit":"10.1002/(ISSN)1521-3781",
"Chemie Ingenieur Technik - CIT":"10.1002/(ISSN)1522-2640",
"ChemInform":"10.1002/(ISSN)1522-2667",
"Chemistry - A European Journal":"10.1002/(ISSN)1521-3765",
"Chem.–Eur. J.":"10.1002/(ISSN)1521-3765",
"Chem. Eur. J.":"10.1002/(ISSN)1521-3765",
"Chemistry - An Asian Journal":"10.1002/(ISSN)1861-471X",
"Chem. Asian J.":"10.1002/(ISSN)1861-471X",
"Chemistry &amp; Biodiversity":"10.1002/(ISSN)1612-1880",
"CHEMKON":"10.1002/(ISSN)1521-3730",
"ChemMedChem":"10.1002/(ISSN)1860-7187",
"ChemPhysChem":"10.1002/(ISSN)1439-7641",
"ChemSusChem":"10.1002/(ISSN)1864-564X",
"Chinese Journal of Chemistry":"10.1002/(ISSN)1614-7065",
"Chirality":"10.1002/(ISSN)1520-636X",
"Clinical and Experimental Pharmacology and Physiology":"10.1002/(ISSN)1440-1681",
"Color Research &amp; Application":"10.1002/(ISSN)1520-6378",
"Comprehensive Reviews in Food Science and Food Safety":"10.1002/(ISSN)1541-4337",
"Contrast Media &amp; Molecular Imaging":"10.1002/(ISSN)1555-4317",
"Culture &amp; Agriculture":"10.1002/(ISSN)1556-486X",
"El Mensajero":"10.1002/(ISSN)1556-6617",
"Electroanalysis":"10.1002/(ISSN)1521-4109",
"Electronic Journal of Theoretical Chemistry":"10.1002/(ISSN)1082-4928",
"ELECTROPHORESIS":"10.1002/(ISSN)1522-2683",
"Engineering in Life Sciences":"10.1002/(ISSN)1618-2863",
"European Journal of Inorganic Chemistry":"10.1002/(ISSN)1099-0682c",
		"European Journal of Immunology":"10.1002/(ISSN)1521-4141",
//"European Journal of Inorganic Chemistry":"10.1002/(ISSN)(1099-0682,1099-0682,1099-0682,1099-0682)",
"European Journal of Lipid Science and Technology":"10.1002/(ISSN)1438-9312",
"European Journal of Organic Chemistry":"10.1002/(ISSN)1099-0690",
//"European Journal of Organic Chemistry":"10.1002/(ISSN)(1099-0690,1099-0690,1099-0690,1099-0690,1099-0690)",
"FEMS Yeast Research":"10.1002/(ISSN)1567-1364",
"Field Analytical Chemistry &amp; Technology":"10.1002/(ISSN)1520-6521",
"Flavour and Fragrance Journal":"10.1002/(ISSN)1099-1026",
"Food Service Technology":"10.1002/(ISSN)1471-5740",
"Fuel Cells":"10.1002/(ISSN)1615-6854",
"Fundamental &amp; Clinical Pharmacology":"10.1002/(ISSN)1472-8206",
"Geofluids":"10.1002/(ISSN)1468-8123",
"Helvetica Chimica Acta":"10.1002/(ISSN)1522-2675",
"Heteroatom Chemistry":"10.1002/(ISSN)1098-1071",
"Human Cell":"10.1002/(ISSN)1749-0774",
		"Immunological Reviews":"10.1111/(ISSN)1600-065X",
"Immunology":"10.1111/(ISSN)1365-2567",
"Indoor Air":"10.1002/(ISSN)1600-0668",
"International Journal of Applied Ceramic Technology":"10.1002/(ISSN)1744-7402",
"International Journal of Cosmetic Science":"10.1002/(ISSN)1468-2494",
"International Journal of Dairy Technology":"10.1002/(ISSN)1471-0307",
"International Journal of Food Science &amp; Technology":"10.1002/(ISSN)1365-2621",
"International Journal of Chemical Kinetics":"10.1002/(ISSN)1097-4601",
"Israel Journal of Chemistry":"10.1002/(ISSN)1869-5868",
"Journal of the American Ceramic Society":"10.1002/(ISSN)1551-2916",
"Journal of Applied Crystallography":"10.1002/(ISSN)1600-5767",
"Journal of Clinical Pharmacy and Therapeutics":"10.1002/(ISSN)1365-2710",
"Journal of Food Biochemistry":"10.1002/(ISSN)1745-4514",
"Journal of Food Lipids":"10.1002/(ISSN)1745-4522",
"Journal of Food Process Engineering":"10.1002/(ISSN)1745-4530",
"Journal of Food Processing and Preservation":"10.1002/(ISSN)1745-4549",
"Journal of Food Quality":"10.1002/(ISSN)1745-4557",
"Journal of Food Safety":"10.1002/(ISSN)1745-4565",
"Journal of Food Science":"10.1002/(ISSN)1750-3841",
"Journal of Forensic Sciences":"10.1002/(ISSN)1556-4029",
"Journal of Muscle Foods":"10.1002/(ISSN)1745-4573",
"Journal of Computational Chemistry":"10.1002/(ISSN)1096-987X",
"Journal of Food Science Education":"10.1002/(ISSN)1541-4329",
"Journal of Foodservice":"10.1002/(ISSN)(1748-0159,1745-4506)",
"Journal of Heterocyclic Chemistry":"10.1002/(ISSN)1943-5193",
"Journal of Microcolumn Separations":"10.1002/(ISSN)1520-667X",
"Journal of Molecular Recognition":"10.1002/(ISSN)1099-1352",
"Journal of Peptide Science":"10.1002/(ISSN)1099-1387",
"Journal of Physical Organic Chemistry":"10.1002/(ISSN)1099-1395",
"Journal of Raman Spectroscopy":"10.1002/(ISSN)1097-4555",
"Journal of the Science of Food and Agriculture":"10.1002/(ISSN)1097-0010",
"Journal of Rapid Methods &amp; Automation in Microbiology":"10.1002/(ISSN)1745-4581",
"Journal of Synchrotron Radiation":"10.1002/(ISSN)1600-5775",
"Journal of Texture Studies":"10.1002/(ISSN)1745-4603",
"Laser Physics Letters":"10.1002/(ISSN)1612-202X",
"Lebensmittelchemie":"10.1002/(ISSN)1521-3811",
"Lipid Technology":"10.1002/(ISSN)1863-5377",
"Macromolecular Symposia":"10.1002/(ISSN)1521-3900",
"Mass Spectrometry Reviews":"10.1002/(ISSN)1098-2787",
"Materials and Corrosion":"10.1002/(ISSN)1521-4176",
"Materialwissenschaft und Werkstofftechnik":"10.1002/(ISSN)1521-4052",
"Medicinal Research Reviews":"10.1002/(ISSN)1098-1128",
"Nachrichten aus der Chemie":"10.1002/(ISSN)1868-0054",
"Particle &amp; Particle Systems Characterization":"10.1002/(ISSN)1521-4117",
"Peptide Science":"10.1002/(ISSN)1097-0282",
"Pharmazie in unserer Zeit":"10.1002/(ISSN)1615-1003",
"Photochemistry and Photobiology":"10.1002/(ISSN)1751-1097",
		"Physica Status Solidi A":"10.1002/(ISSN)1862-6319",
		"Physica Status Solidi B":"10.1002/(ISSN)1521-3951",
		"Physica Status Solidi C":"10.1002/(ISSN)1610-1642a",
"Phytochemical Analysis":"10.1002/(ISSN)1099-1565",
"Propellants, Explosives, Pyrotechnics":"10.1002/(ISSN)1521-4087",
"Protein Science":"10.1002/(ISSN)1469-896X",
"Proteins: Structure, Function, and Bioinformatics":"10.1002/(ISSN)1097-0134",
"PROTEOMICS":"10.1002/(ISSN)1615-9861",
"QSAR &amp; Combinatorial Science":"10.1002/(ISSN)(1611-0218,1521-3838)",
"Quality Assurance and Safety of Crops &amp; Foods":"10.1002/(ISSN)1757-837X",
"Rapid Communications in Mass Spectrometry":"10.1002/(ISSN)1097-0231",
"Science News":"10.1002/(ISSN)1943-0930",
"Small":"10.1002/(ISSN)1613-6829",
"Single Molecules":"10.1002/(ISSN)1438-5171",
"Spectroscopy Europe":"10.1002/(ISSN)1522-2349",
"Surface and Interface Analysis":"10.1002/(ISSN)1096-9918",
"Traffic":"10.1111/(ISSN)1600-0854",
"Vakuum in Forschung und Praxis":"10.1002/(ISSN)1522-2454",
"X-Ray Spectrometry":"10.1002/(ISSN)1097-4539",
"Zeitschrift f&uuml;r anorganische und allgemeine Chemie":"10.1002/(ISSN)1521-3749"
//"Zeitschrift f&uuml;r anorganische und allgemeine Chemie":"(1521-3749,1521-3749,1521-3749,1521-3749)"
};

mydebug('wiley.js loaded');
alljournals = alljournals.concat(keys(wileyjournals));

isSupported.push(isWileyJournal); 
jumpJournal.push(openWiley);

function isWileyJournal(t,ambsearch){
	var titles = keys(wileyjournals);
	return searchNameAmbiguous(t,titles,ambsearch);
}

function openWiley(t,v,p,ambsearch) {
	if(!isWileyJournal(t))	return;
	postQuery('http://onlinelibrary.wiley.com/search/citation/results',{'volume':v,'page':p,'publicationDoi':wileyjournals[t]});
}

function wileyDoiFromTitle(t){
	return "10.1002/(ISSN)" + wileyjournals[t];
}
