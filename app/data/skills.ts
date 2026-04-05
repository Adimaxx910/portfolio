export const skills = {
  programming: ["Python", "SQL"],
  bi_tools: ["Power BI", "Tableau", "Looker"],
  data_tools: ["Excel", "Power Query", "Snowflake"],
  technologies: [
    "ETL Pipelines",
    "Data Warehousing",
    "Data Governance",
    "RAG Systems",
    "LLM Integration",
  ],
  libraries: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  soft_skills: [
    "Problem Solving",
    "Business Thinking",
    "Stakeholder Management",
    "Data Storytelling",
  ],
};

export const skillGroups = [
  {
    label: "Programming",
    key: "programming" as const,
    color: "#1D6FE8",
    bg: "#1D6FE815",
  },
  {
    label: "BI Tools",
    key: "bi_tools" as const,
    color: "#05E8C8",
    bg: "#05E8C815",
  },
  {
    label: "Data Tools",
    key: "data_tools" as const,
    color: "#60A5FA",
    bg: "#60A5FA15",
  },
  {
    label: "Technologies",
    key: "technologies" as const,
    color: "#A78BFA",
    bg: "#A78BFA15",
  },
  {
    label: "Libraries",
    key: "libraries" as const,
    color: "#34D399",
    bg: "#34D39915",
  },
  {
    label: "Soft Skills",
    key: "soft_skills" as const,
    color: "#F59E0B",
    bg: "#F59E0B15",
  },
];
