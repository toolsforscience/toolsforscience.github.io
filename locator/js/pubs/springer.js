//
//  springer.js
//  ver. 0.7
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var springerjournals = [
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
  "Tribology Letters",
];

mydebug("springer.js loaded");
alljournals = alljournals.concat(springerjournals);

isSupported.push(isSpringerJournal);
jumpJournal.push(openSpringer);

function isSpringerJournal(t, ambsearch) {
  return searchNameAmbiguous(t, springerjournals, ambsearch);
}

function openSpringer(t, v, p, ambsearch) {
  openURL(
    "http://www.springerlink.com/content/?k=pub%3a(" +
      t +
      ")+vol%3a(" +
      v +
      ")+p%3a(" +
      p +
      ")"
  );
}
