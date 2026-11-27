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

export type CareerRole = {
  company: string;
  role: string;
  dates: string;
  location: string;
  description: string;
  projects: { title: string; accomplishments: string[] }[];
  resumeHighlights: string[];
};

export const experience: CareerRole[] = [
  {
    company: "Oracle Cloud Infrastructure",
    role: "Principal Member of Technical Staff",
    dates: "Sep 2024 – Present",
    location: "Santa Clara, CA",
    description: "Technical leadership and end-to-end ownership of distributed data-platform capabilities, from initial design and proof of concept through production delivery and ongoing reliability.",
    projects: [
      {
        title: "Knowledge Base and RAG infrastructure",
        accomplishments: [
          "Co-led the Knowledge Base capability from proof of concept and became its primary technical and operational owner.",
          "Designed the API surface and foundational integrations for Spark-based document ingestion, access control, and vector-store provisioning.",
          "Guided a small engineering team and led development of the RAG integration layer connecting Knowledge Base APIs to agentic AI workflows.",
          "Improved ingestion reliability through work on correctness, retry behavior, processing time, and failure handling.",
        ],
      },
      {
        title: "Delta Sharing provider and consumer platform",
        accomplishments: [
          "Led end-to-end development of governed data sharing using the open Delta Sharing protocol.",
          "Designed a 19-API provider surface for shares, recipients, schemas, table membership, role-based access control, and Delta Lake validation.",
          "Implemented consumer APIs for shared-data discovery, metadata retrieval, and protocol-compliant Parquet responses.",
          "Supported scale validation of shared tables up to approximately 20 GB and led migration from Delta Standalone to Delta Kernel.",
        ],
      },
      {
        title: "Cloud filesystem reliability and storage modernization",
        accomplishments: [
          "Led the design and foundational implementation of a Python fsspec-based storage abstraction for Spark workloads.",
          "Implemented storage operations and Python client integration, including packaging for distributed Spark clusters.",
          "Coordinated engineers on a fusepy-based filesystem layer built on the reusable storage abstraction, improving reliability and enabling modernization of the legacy native implementation.",
        ],
      },
    ],
    resumeHighlights: [
      "Owned Knowledge Base and RAG infrastructure from proof of concept through delivery, designing APIs and Spark-based ingestion and guiding engineering execution.",
      "Led the Delta Sharing provider and consumer platform, designing 19 provider APIs, implementing core consumer endpoints, and migrating to Delta Kernel.",
      "Led a filesystem modernization initiative using fsspec and fusepy to improve reliability for distributed Spark workloads.",
    ],
  },
  {
    company: "Oracle Cloud Infrastructure",
    role: "Senior Member of Technical Staff",
    dates: "Feb 2022 – Sep 2024",
    location: "Santa Clara, CA",
    description: "Designed and delivered control-plane capabilities and asynchronous provisioning workflows for cloud data infrastructure.",
    projects: [
      {
        title: "Data platform control plane",
        accomplishments: [
          "Designed and implemented provisioning APIs, role-based access control, and data-engine attachment workflows for OCI Lake, Oracle Autonomous Data Warehouse, and SQL endpoints.",
          "Automated capacity checks, IAM-policy recommendations, and pre-provisioning validation to improve operational workflows.",
          "Improved storage-resource tag replication performance by approximately 20x.",
          "Established canary and scheduled integration-test workflows to strengthen release confidence and detect regressions.",
        ],
      },
    ],
    resumeHighlights: [
      "Designed control-plane APIs and asynchronous provisioning, RBAC, and data-engine attachment workflows.",
      "Automated infrastructure and IAM validation and improved storage-resource tag replication performance by approximately 20x.",
      "Established canary and scheduled integration tests to support release reliability.",
    ],
  },
  {
    company: "VMware",
    role: "Senior Member of Technical Staff",
    dates: "Feb 2018 – Feb 2022",
    location: "Palo Alto, CA",
    description: "Developed infrastructure lifecycle-management capabilities across vSAN, vSphere, and hyperconverged infrastructure, with a focus on scalability, automation, and operational reliability.",
    projects: [
      {
        title: "vSAN Witness Appliance lifecycle management",
        accomplishments: [
          "Co-led design and delivery of lifecycle-management capabilities for vSAN Witness Appliances in VMware Cloud on AWS stretched clusters and on-premises deployments.",
          "Integrated witness lifecycle operations with vSphere Lifecycle Manager workflows.",
        ],
      },
      {
        title: "Parallel cluster remediation and firmware lifecycle",
        accomplishments: [
          "Increased parallel cluster-upgrade capacity from 15 to 64 in vSphere Lifecycle Manager.",
          "Delivered declarative firmware-update capabilities for ESXi hosts.",
          "Reduced Dell EMC VxRail upgrade time by 30%.",
        ],
      },
      {
        title: "ML-assisted infrastructure resolution",
        accomplishments: [
          "Built an ML-assisted resolution-resource service using fastText embeddings to improve discovery of relevant resolution information.",
          "Named inventor on two granted U.S. patents related to enterprise infrastructure and lifecycle management.",
        ],
      },
    ],
    resumeHighlights: [
      "Co-led vSAN Witness Appliance lifecycle-management capabilities for VMware Cloud on AWS and on-premises deployments.",
      "Increased parallel cluster-upgrade capacity from 15 to 64, delivered declarative firmware updates, and reduced VxRail upgrade time by 30%.",
      "Built an ML-assisted resolution-resource service with fastText embeddings.",
      "Named inventor on two granted U.S. patents and received the Customer Advocate Award.",
    ],
  },
  {
    company: "GCell (partner with Adobe)",
    role: "Software Engineer",
    dates: "Nov 2015 – Jul 2016",
    location: "Gurugram, India",
    description: "Developed multilingual search functionality for Adobe Experience Manager 6.2.",
    projects: [
      {
        title: "Multilingual search",
        accomplishments: ["Developed search capabilities for multilingual content within Adobe Experience Manager."],
      },
    ],
    resumeHighlights: ["Developed multilingual search capabilities for Adobe Experience Manager 6.2."],
  },
  {
    company: "ZS Associates",
    role: "Technology Analyst",
    dates: "Jul 2014 – Sep 2015",
    location: "Gurugram, India",
    description: "Implemented data processing and analytics solutions for pharmaceutical clients.",
    projects: [
      {
        title: "Data integration and analytics",
        accomplishments: ["Developed ETL and relational data-analysis solutions."],
      },
    ],
    resumeHighlights: ["Developed ETL and relational data-analysis solutions for pharmaceutical clients."],
  },
];

export const careerMetrics = [
  { value: "12+ years", label: "Software engineering experience" },
  { value: "19 APIs", label: "Delta Sharing provider API design" },
  { value: "15 to 64", label: "Parallel vSphere cluster upgrades" },
  { value: "30%", label: "Reduction in VxRail upgrade time" },
];

export const technicalSkills = [
  { category: "Distributed systems and data platforms", skills: ["Apache Spark", "Apache Iceberg", "Delta Lake", "Delta Sharing", "Delta Kernel", "Kubernetes", "Asynchronous control planes", "REST APIs"] },
  { category: "AI infrastructure", skills: ["RAG", "Vector stores", "Embeddings", "Knowledge bases", "Oracle Autonomous Database"] },
  { category: "Languages", skills: ["Java", "Python", "C/C++", "Scala", "Go", "SQL", "Bash"] },
  { category: "Storage and data systems", skills: ["fsspec", "FUSE / fusepy", "Redis", "PostgreSQL", "MySQL"] },
];

export const recognition = [
  "Promoted to Principal Member of Technical Staff at Oracle in September 2024.",
  "Promoted twice during four years at VMware.",
  "Recipient of VMware’s Customer Advocate Award.",
  "Named inventor on two granted U.S. patents.",
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
