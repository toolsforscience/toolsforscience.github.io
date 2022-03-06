//
//  npg.js
//  ver. 0.7
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var npgjournals = {
  "The American Journal of Gastroenterology": "AJG",
  "The American Journal of Gastroenterology Supplements": "AJGSUP",
  "American Journal Of Hypertension": "AJH",
  "Asian Journal of Andrology": "AJA",
  "authors &amp; referees @ NPG": "AUTHORS",
  Bioentrepeneur: "BIOENT",
  "Blood Cancer Journal": "BCJ",
  "Bone Marrow Transplantation": "BMT",
  "British Dental Journal": "BDJ",
  "British Journal of Cancer": "BJC",
  "Cancer Gene Therapy": "CGT",
  "Cell Death &amp; Differentiation": "CDD",
  "Cell Death &amp; Disease": "CDDIS",
  "Cell Migration Gateway": "CMG_UPDATE",
  "Cell Research": "CR",
  "Cellular &amp; Molecular Immunology": "CMI",
  "Clinical and Translational Gastroenterology": "CTG",
  "Clinical Pharmacology &amp; Therapeutics": "CLPT",
  "The EMBO Journal": "EMBOJ",
  "EMBO reports": "EMBOR",
  "European Journal of Clinical Nutrition": "EJCN",
  "European Journal of Human Genetics": "EJHG",
  "Evidence-Based Dentistry": "EBD",
  Eye: "EYE",
  "Functional Glycomics Gateway": "FG",
  "Gene Therapy": "GT",
  "Genes and Immunity": "GENE",
  "GI Motility online": "GIMO",
  Heredity: "HDY",
  "Hypertension Research": "HR",
  "Immunology and Cell Biology": "ICB",
  "International Journal of Impotence Research": "IJIR",
  "International Journal of Obesity": "IJO",
  "The ISME Journal": "ISMEJ",
  "JID Symposium Proceedings": "JIDSP",
  "The Journal of Antibiotics": "JA",
  "Journal of Cerebral Blood Flow &amp; Metabolism": "JCBFM",
  "Journal of Exposure Science and Environmental Epidemiology": "JES",
  "Journal of Human Genetics": "JHG",
  "Journal of Human Hypertension": "JHH",
  "Journal of Investigative Dermatology": "JID",
  "Journal of Perinatology": "JP",
  "Kidney International": "KI",
  "Laboratory Investigation": "LABINVEST",
  Leukemia: "LEU",
  "Lipidomics Gateway": "LIPIDMAPS",
  "Milestones Cancer": "MILECANCER",
  "Milestones DNA Technologies": "MILEDNA",
  "Milestones Gene Expression": "MILEGENE",
  "Milestones in Cytoskeleton": "MILECYTO",
  "Milestones in Spin": "MILESPIN",
  "Modern Pathology": "MODPATHOL",
  "Molecular Psychiatry": "MP",
  "Molecular Systems Biology": "MSB",
  "Molecular Therapy": "MT",
  "Mucosal Immunology": "MI",
  Nature: "NATURE",
  "Nat. Biotechnol.": "NBT",
  "Nature Biotechnology": "NBT",
  "Nature Cell Biology": "NCB",
  "Nature Chemical Biology": "NCHEMBIO",
  "Nature Chemistry": "NCHEM",
  "Nature China (International Site)": "NCHINA",
  "Nature Climate Change": "NCLIMATE",
  "Nature Communications": "NCOMMS",
  "Nature Digest": "NDIGEST",
  "Nature Genetics": "NG",
  "Nature Geoscience": "NGEO",
  "Nat. Immun.": "NI",
  "Nature Immunology": "NI",
  "Nature India": "NINDIA",
  "Nature Materials": "NMAT",
  "Nature Medicine": "NM",
  "Nature Methods": "NMETH",
  "Nature Methods Application Notes": "APP_NOTES",
  "Nature Middle East": "NMIDDLEEAST",
  "Nat. Nanotech.": "NNANO",
  "Nature Nanotech.": "NNANO",
  "Nature Nanotechnology": "NNANO",
  "Nature Neuroscience": "NEURO",
  "Nature Photonics ": "NPHOTON",
  "Nature Physics": "NPHYS",
  "Nature Protocols": "NPROT",
  "Nature Reports Avian Flu": "AVIANFLU",
  "Nature Reports Climate Change": "CLIMATE",
  "Nature Reports Stem Cells": "STEMCELLS",
  "Nature Reviews Cancer": "NRC",
  "Nature Reviews Cardiology": "NRCARDIO",
  "Nature Reviews Clinical Oncology": "NRCLINONC",
  "Nature Reviews Drug Discovery": "NRD",
  "Nature Reviews Endocrinology": "NRENDO",
  "Nature Reviews Gastroenterology and Hepatology": "NRGASTRO",
  "Nature Reviews Genetics": "NRG",
  "Nature Reviews Immunology": "NRI",
  "Nature Reviews Microbiology": "NRMICRO",
  "Nat. Rev. Mol. Cell Biol.": "NRM",
  "Nature Reviews Molecular Cell Biology": "NRM",
  "Nature Reviews Nephrology": "NRNEPH",
  "Nature Reviews Neurology": "NRNEUROL",
  "Nature Reviews Neuroscience": "NRN",
  "Nature Reviews Rheumatology": "NRRHEUM",
  "Nature Reviews Urology": "NRUROL",
  "Nature Structural &amp; Molecular Biology": "NSMB",
  NatureJobs: "NATUREJOBS",
  "NCI-Nature Pathway Interaction Database": "PID",
  Neuropsychopharmacology: "NPP",
  "Nutrition &amp; Diabetes": "NUTD",
  Obesity: "OBY",
  "Omics Gateway": "OMICS",
  Oncogene: "ONC",
  "The Pharmacogenomics Journal": "TPJ",
  "Polymer Journal": "PJ",
  "Prostate Cancer and Prostatic Diseases": "PCAN",
  "Protein Model Portal": "PSIKB",
  "Protein Structure Initiative Structural Genomics Knowledgebase": "PSISKB",
  "Protocol Exchange": "PRNE",
  "RNAi Gateway": "RNAI",
  "SciBX: Science-Busine eXchange": "SCIBX",
  "Scientific American": "SCIENTIFICAMERICAN",
  "Scientific American Mind": "SCIENTIFICAMERICANMIND",
  "Signaling Gateway": "SG",
  "Spinal Cord": "SC",
  "Structural Biology Knowledgebase": "SBKB",
  "Translational Psychiatry": "TP",
  Vital: "VITAL",
};

if (debug) console.log("npg.js loaded");
alljournals = alljournals.concat(keys(npgjournals));

isSupported.push(isNpgJournal);
jumpJournal.push(openNpg);

function isNpgJournal(t, ambsearch) {
  var titles = keys(npgjournals);
  return searchNameAmbiguous(t, titles, ambsearch);
}

function openNpg(t, v, p, ambsearch) {
  openURL(
    "http://www.nature.com/search/executeSearch?sp-advanced=true&sp-q-9[" +
      npgjournals[t] +
      "]=1&include-collections=journals_nature%2Ccrawled_content&sp-q-4=" +
      v +
      "&sp-q-6=" +
      p
  );
}
