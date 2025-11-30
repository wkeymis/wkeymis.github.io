// Portfolio content data - customize this file with your information

export const personalInfo = {
  name: "Wout Keymis",
  title: "AI-Driven Protein Design Portfolio",
  tagline: "Exploring novel protein architectures through machine learning and structural design.",
  bio: "Master's student in Bioinformatics and Gene Technology, specializing in computational protein engineering. Currently researching explainable AI for de novo protein binder models and eager to explore more applied protein design projects.",
  interests: [
    "Designing de novo protein binders",
    "Increasing solubility and stability",
    "Protein expression optimization",
    "Aggregation reduction"
  ],
  tools: [
    { name: "AlphaFold", category: "Structure Prediction" },
    { name: "Rosetta", category: "Protein Design" },
    { name: "BoltzDesign", category: "Binder Design" },
    { name: "PyMOL", category: "Visualization" },
    { name: "FoldX", category: "Stability Analysis" },
    { name: "Boltz", category: "Structure Prediction" },
    { name: "ProteinMPNN", category: "Sequence Design" },
    { name: "Biopython", category: "Analysis" }
  ]
};

export const projects = [
  {
    id: 1,
    name: "Synthetic ELF4 Variants",
    shortDescription: "Designed synthetic ELF4 variants with similar phenotypic properties",
    fullDescription: "Designed a series of ELF4 variants using structure-guided mutagenesis. The synthetic variants were tested in vivo within Arabidopsis thaliana, with one protein showing enhanced phenotypic features.",
    objPath: "/assets/elf4.obj",
    designGoal: "Analyze how far from the original sequence we can go before the protein loses its function",
    methods: ["ESM-2", "AlphaFold", "FoldX", "ProteinMPNN", "MSA"]
  },
  {
    id: 2,
    name: "Optimized metal binding site",
    shortDescription: "Computationally optimized the metal binding site for higher metal binding affinity",
    fullDescription: "Used a library of metal binding proteins from a directed evolution experiment as data to train a BERT model, which was then used to optimize the metal binding site for higher metal binding affinity.",
    objPath: "/assets/Metal_binding.obj", // Replace with your actual OBJ file
    designGoal: "Design a metal binding site with higher metal binding affinity",
    methods: ["BERT", "ProteinMPNN", "FoldX"]
  },
  {
    id: 3,
    name: "De Novo Binder Design",
    shortDescription: "Designed a protein binder for Nipah Virus Glycoprotein G",
    fullDescription: "Redesigned the BoltzDesign model to incorporate a binder affinity loss function. This enhanced model was then applied to design a de novo protein binder targeting Nipah Virus Glycoprotein G.",
    objPath: "/assets/2vsm.obj", // Replace with your actual OBJ file
    designGoal: "Engineer a high-affinity binder for Nipah Virus Glycoprotein G",
    methods: ["AlphaFold3", "BoltzDesign1", "IPSAE"]
  }
];


export const contactInfo = {
  email: "wout.keymis@student.kuleuven.be",
  linkedin: "https://linkedin.com/in/wout-keymis",
  github: "wkeymis",
  phone: "+32498669678"
};
