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
  productUrl?: string;
  projects: { title: string; accomplishments: string[] }[];
  resumeHighlights: string[];
};

export const experience: CareerRole[] = [
  {
    company: "Oracle — AI Data Platform",
    productUrl: "https://www.oracle.com/ai-data-platform/",
    role: "Principal Member of Technical Staff",
    dates: "Sep 2024 – Present",
    location: "Santa Clara, CA",
    description: "I lead the design and evolution of distributed capabilities within Oracle AI Data Platform, a unified enterprise platform for governed data, analytics, and AI applications. My work focuses on architecture, delivery, and production reliability across the data and AI infrastructure.",
    projects: [
      {
        title: "Knowledge Base and RAG infrastructure",
        accomplishments: [
          "Co-led the Knowledge Base capability from initial exploration through general availability, assuming technical and operational ownership as it matured.",
          "Defined the architecture and service contracts for document ingestion, authorization, and vector-store integration across the data platform.",
          "Led engineering execution across the knowledge-base and retrieval integration layers, enabling their use in agentic AI workflows.",
          "Strengthened ingestion reliability by addressing correctness, recovery semantics, processing efficiency, and operational failure modes.",
        ],
      },
      {
        title: "Delta Sharing provider and consumer platform",
        accomplishments: [
          "Led the architecture and delivery of governed data exchange using the open Delta Sharing protocol, spanning the provider and consumer experiences.",
          "Designed the provider service contracts and authorization model for managing shares, recipients, and data assets, with validation of supported table formats.",
          "Implemented consumer-side discovery, metadata retrieval, and protocol-compliant access to shared data.",
          "Led the transition to Delta Kernel and supported scale validation, evolving the platform toward a maintainable foundation for open-protocol interoperability.",
        ],
      },
      {
        title: "Cloud filesystem reliability and storage modernization",
        accomplishments: [
          "Designed a reusable storage abstraction for distributed Spark workloads, establishing a Python-based foundation with fsspec.",
          "Implemented core filesystem operations, service-client integration, and distributable components for Spark clusters.",
          "Guided the modernization of the filesystem integration around the reusable storage layer, enabling the retirement of a legacy native implementation and improving workload reliability.",
        ],
      },
    ],
    resumeHighlights: [
      "Led the architecture and technical ownership of Knowledge Base and RAG infrastructure, spanning distributed ingestion, access control, retrieval integration, and production reliability.",
      "Led the development of a governed data-sharing platform across provider and consumer services, with responsibility for protocol interoperability, authorization, and long-term architectural evolution.",
      "Architected a reusable filesystem abstraction and guided modernization of the storage integration to improve reliability for distributed Spark workloads.",
    ],
  },
  {
    company: "Oracle",
    role: "Senior Member of Technical Staff",
    dates: "Feb 2022 – Sep 2024",
    location: "Santa Clara, CA",
    description: "Developed foundational control-plane services and asynchronous workflows for provisioning and governing enterprise cloud data infrastructure.",
    projects: [
      {
        title: "Data platform control plane",
        accomplishments: [
          "Designed and implemented provisioning APIs, role-based access control, and data-engine attachment workflows for OCI Lake, Oracle Autonomous Data Warehouse, and SQL endpoints.",
          "Automated capacity checks, IAM-policy recommendations, and pre-provisioning validation to improve operational workflows.",
          "Optimized storage-resource metadata replication, substantially reducing processing time.",
          "Established canary and scheduled integration-test workflows to strengthen release confidence and detect regressions.",
        ],
      },
    ],
    resumeHighlights: [
      "Designed control-plane APIs and asynchronous provisioning, RBAC, and data-engine attachment workflows.",
      "Automated infrastructure and IAM validation and improved the performance of storage-resource metadata replication.",
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
          "Co-led the architecture and delivery of vSAN Witness Appliance lifecycle management across stretched-cluster and on-premises deployments.",
          "Integrated witness health, scanning, and remediation with vSphere Lifecycle Manager to extend lifecycle automation to distributed storage deployments.",
        ],
      },
      {
        title: "Parallel cluster remediation and firmware lifecycle",
        accomplishments: [
          "Expanded parallel cluster remediation in vSphere Lifecycle Manager to improve upgrade scalability and operational efficiency.",
          "Delivered declarative firmware lifecycle management for ESXi hosts, enabling consistent infrastructure updates across hardware integrations.",
          "Reduced upgrade duration for Dell EMC VxRail deployments by 30%, improving the efficiency of infrastructure maintenance.",
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
      "Expanded parallel remediation and declarative firmware lifecycle capabilities, reducing VxRail upgrade duration by 30%.",
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

export const technicalSkills = [
  { category: "Distributed systems and data platforms", skills: ["Apache Spark", "Apache Iceberg", "Delta Lake", "Delta Sharing", "Delta Kernel", "Kubernetes", "Asynchronous control planes", "REST APIs"] },
  { category: "AI infrastructure", skills: ["RAG", "Vector stores", "Embeddings", "Knowledge bases", "Oracle Autonomous Database"] },
  { category: "Languages", skills: ["Java", "Python", "C/C++", "Scala", "Go", "SQL", "Bash"] },
  { category: "Storage and data systems", skills: ["fsspec", "FUSE / fusepy", "Redis", "PostgreSQL", "MySQL"] },
];

export const recognition = [
  "Recipient of VMware’s Customer Advocate Award.",
  "Named inventor on two granted U.S. patents.",
];

export const education = [
  { school: "Stanford University", program: "Advanced Software Systems Graduate Certificate", dates: "In progress", href: "https://online.stanford.edu/programs/advanced-software-systems-graduate-certificate" },
  { school: "Stony Brook University", program: "M.S. in Computer Science", dates: "2016 – 2017", href: "https://www.cs.stonybrook.edu/academics/graduate/ms-programs/ms-cs-program.html" },
  { school: "National Institute of Technology Calicut", program: "B.Tech. in Computer Science and Engineering", dates: "2010 – 2014", href: "https://nitc.ac.in/department/computer-science-amp-engineering" },
];

export const patents = [
  { number: "11,573,869", title: "Managing lifecycle of virtualization software running in a standalone host", href: "https://patents.google.com/patent/US11573869B2/en" },
  { number: "11,436,531", title: "Machine learning-powered resolution resource service for HCI systems", href: "https://patents.google.com/patent/US11436531B2/en" },
];
