export const siteUrl = "https://www.learnwitharunrajan.com";
export const linkedin = "https://www.linkedin.com/in/arun-rajan-sharma/";
export const github = "https://github.com/arunrajanwork";

export const navigation = [
  { href: "/blog", label: "Writing" },
  { href: "/projects", label: "Systems Lab" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/patents", label: "Patents" },
  { href: "/personal", label: "Personal" },
  { href: "/resume", label: "Resume" },
];

export const projectIdeas = [
  {
    title: "Distributed rate limiter",
    description: "Build a service that enforces request quotas across multiple application instances.",
    topics: "Concurrency · Redis / Valkey · consistency",
  },
  {
    title: "Real-time ad analytics",
    description: "Ingest event streams and explore aggregation, partitioning, and query latency.",
    topics: "Kafka · stream processing · OLAP",
  },
  {
    title: "Distributed key-value store",
    description: "Explore data partitioning, replication, and behavior when nodes fail.",
    topics: "Consistent hashing · replication · fault tolerance",
  },
];

export const experience = [
  {
    company: "Oracle Cloud Infrastructure",
    role: "Principal Member of Technical Staff",
    dates: "Sep 2024 – Present",
    description: "Distributed cloud and data-platform engineering, with a focus on governed data sharing, AI infrastructure, and storage abstractions.",
  },
  {
    company: "Oracle Cloud Infrastructure",
    role: "Senior Member of Technical Staff",
    dates: "Feb 2022 – Sep 2024",
    description: "Cloud control-plane APIs, asynchronous workflows, and data-platform infrastructure.",
  },
  {
    company: "VMware",
    role: "Senior Member of Technical Staff",
    dates: "Feb 2018 – Feb 2022",
    description: "Enterprise infrastructure, vSAN and vSphere lifecycle management, and distributed system operations.",
  },
  {
    company: "GCell (partner with Adobe)",
    role: "Software Engineer",
    dates: "Nov 2015 – Jul 2016",
    description: "Multilingual search for Adobe Experience Manager.",
  },
  {
    company: "ZS Associates",
    role: "Technology Analyst",
    dates: "Jul 2014 – Sep 2015",
    description: "ETL and relational data analysis.",
  },
];

export const education = [
  { school: "Stanford University", program: "Advanced Software Systems Graduate Program", dates: "In progress" },
  { school: "Stony Brook University", program: "M.S. in Computer Science", dates: "2016 – 2017" },
  { school: "National Institute of Technology Calicut", program: "B.Tech. in Computer Science and Engineering", dates: "2010 – 2014" },
];

export const patents = [
  { number: "11,573,869", href: "https://patents.google.com/patent/US11573869B2/en" },
  { number: "11,436,531", href: "https://patents.google.com/patent/US11436531B2/en" },
];
