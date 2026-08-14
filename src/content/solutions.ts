import type { HookPage } from "./types";

export const solutionsOverview = {
  heading: "Engineering Intelligent Solutions for Industry Transformation",
  paragraphs: [
    "Every industry faces unique operational challenges, but the objective remains the same—to improve decision-making, optimize operations, enhance customer experiences, and create sustainable business value. Organizations today require intelligent solutions that not only automate processes but also enable continuous learning, adaptive decision-making, and autonomous execution across the enterprise.",
    "At AITEK, we engineer industry-specific AI solutions that combine strategic consulting, Digital Business Engineering, Enterprise Architecture, Artificial Intelligence, Machine Learning, Generative AI, Agentic AI, intelligent automation, and enterprise platforms into one integrated transformation ecosystem. Rather than implementing isolated technologies, we build connected business capabilities that transform how organizations plan, operate, collaborate, and innovate.",
    "Our solution portfolio spans four complementary capability layers—AI & Machine Learning, AI Agents, the Agentic Framework that orchestrates them, and the Tools that bring them safely to production—enabling enterprises to evolve from predictive insights to intelligent decision support and ultimately autonomous business operations.",
  ],
};

export const solutions: HookPage[] = [
  {
    slug: "ai-ml",
    pageTitle: "High-Performance Predictive AI and Machine Learning",
    tagline: "Our AI/ML Solutions",
    hook: "Raw enterprise data is of limited use if your operations remain purely reactive. Without the capability to sense patterns and predict anomalies, organizations miss critical windows for proactive adjustment.",
    solution: [
      "AITEK designs custom machine learning models, neural networks, and optimization algorithms. We help organizations identify hidden patterns, forecast demand fluctuations, and anticipate equipment failures before they disrupt operations.",
      "Our custom analytics scale across your entire value chain, converting raw sensor and transaction streams into predictive insights. By integrating with your operations, our predictive models prevent scrap generation, optimize fleet routing, and reduce maintenance emergency orders.",
    ],
    capabilitiesHeading: "Key Capabilities",
    capabilities: [
      "Advanced supervised, unsupervised, and time-series forecasting",
      "Machine learning models for Remaining Useful Life (RUL) prediction",
      "Anomalies and fraud risk scoring engines",
      "Constraint-based process parameter optimization algorithms",
    ],
    detailScope: {
      heading: "Detailed Solution Scope",
      groups: [
        {
          title: "Algorithms & Models",
          description:
            "Supervised learning (regressions, random forests, XGBoost), unsupervised (k-means, PCA, DBSCAN), and Neural Networks (CNNs, LSTMs, GRUs).",
        },
        {
          title: "Predictive Frameworks",
          description:
            "Time-series forecasting (ARIMA, SARIMA, ETS), deep learning (LSTM, GRU, TCN), probabilistic (Prophet, DeepAR), and reinforcement learning for process controls.",
        },
        {
          title: "Optimization Engine",
          description:
            "Multi-agent reinforcement learning, constraint-based optimization, and network simulation models.",
        },
      ],
    },
    businessImpactHeading: "Business Impact",
    businessImpact:
      "Enterprises shift from historical analysis to real-time foresight, gaining a strategic operational window to proactively reduce cost and capture revenue.",
  },
  {
    slug: "ai-agents",
    pageTitle: "Goal-Oriented Digital Workers for the Enterprise",
    tagline: "AI Agents",
    hook: "Passive software tools require continuous human prompts to execute simple tasks. Operating without active execution-oriented systems leaves your workforce bogged down by repetitive, manual hand-offs.",
    solution: [
      "AITEK constructs goal-oriented AI Agents that function as a dedicated digital workforce. Our agents possess contextual reasoning, memory, and tool usage capabilities to autonomously execute complex workflows.",
      "We deploy specialized digital workers that connect directly with your core enterprise applications. They evaluate environment signals, plan task sequences, and update databases, routing highly ambiguous cases to human specialists with strict safety parameters.",
    ],
    capabilitiesHeading: "Key Capabilities",
    capabilities: [
      "Reasoning, planning, and multi-step workflow execution",
      "Short-term and long-term memory integration",
      "Enterprise tool and API integration for autonomous execution",
      "Secure human-in-the-loop escalation paths and guardrails",
    ],
    detailScope: {
      heading: "Detailed AI Agent Catalog",
      groups: [
        {
          title: "Demand Planning Agents",
          items: [
            "Demand Forecasting Agent",
            "Market Trend Analysis Agent",
            "Price Elasticity Agent",
            "Customer Behaviour Prediction Agent",
            "New Product Forecasting Agent",
          ],
        },
        {
          title: "Inventory & Warehouse Agents",
          items: [
            "Inventory Optimization Agent",
            "Reorder Point (ROP) Agent",
            "Safety Stock Calculation Agent",
            "Warehouse Slotting Agent",
            "Cycle Counting Agent",
            "Warehouse Robotics Coordination Agent",
          ],
        },
        {
          title: "Production & Manufacturing Agents",
          items: [
            "Production Scheduling Agent",
            "Capacity Planning Agent",
            "Quality Inspection Agent (Vision AI)",
            "Predictive Maintenance Agent",
            "Machine Health Monitoring Agent",
            "Energy Optimization Agent",
            "Digital Twin Simulation Agent",
          ],
        },
        {
          title: "Logistics & Transport Agents",
          items: [
            "Route Optimization Agent",
            "Fleet Management Agent",
            "Carrier Selection Agent",
            "Freight Cost Optimization Agent",
            "Shipment Tracking & ETA Prediction Agent",
          ],
        },
        {
          title: "Procurement & Supplier Agents",
          items: [
            "Supplier Risk Assessment Agent",
            "Procurement Automation Agent",
            "Spend Analytics Agent",
            "Supplier Performance Monitoring Agent",
            "Contract Intelligence Agent",
            "RFQ/RFP Automation Agent",
            "Negotiation Support Agent",
          ],
        },
        {
          title: "Operations & Process Automation Agents",
          items: [
            "Order Processing Agent",
            "Invoice Matching Agent",
            "Returns & Reverse Logistics Agent",
            "Document Understanding Agent",
            "Compliance & Audit Agent",
          ],
        },
      ],
    },
    businessImpactHeading: "Business Impact",
    businessImpact:
      "We transition your talent from tedious execution to exception management, boosting operational speed and safety across 24/7 business pipelines.",
  },
  {
    slug: "agentic-framework",
    pageTitle: "Centralized AI Orchestration and Multi-Agent Systems",
    tagline: "Agentic Framework",
    hook: "Deploying isolated AI tools across different departments leads to fragmented operations and immense governance risks. Complex business problems require multi-functional coordination that single models simply cannot handle.",
    solution: [
      "AITEK engineers a centralized AI Orchestration Layer that coordinates teams of specialized digital workers. Built on the Agentic Decision Lifecycle (ADLC), our framework resolves functional conflicts and ensures secure, governed collaboration.",
      "When a major process event occurs, the orchestrator simultaneously directs your procurement, planning, and transport agents. This coordinated approach ensures that all agent interactions are audited, transparent, and completely aligned with business objectives.",
    ],
    capabilitiesHeading: "Key Capabilities",
    capabilities: [
      "Centralized Multi-Agent Coordination and conflict resolution",
      "The Agentic Decision Lifecycle (ADLC) framework",
      "Enterprise-grade security, logging, and performance auditing",
      "Human-AI collaboration protocols and permission boundaries",
    ],
    detailScope: {
      heading: "Detailed Framework Orchestration Model",
      groups: [
        {
          title: "Multi-Agent Coordination (MAS)",
          description:
            "Architectures utilizing shared blackboard models, multi-agent reinforcement learning, and deterministic communication protocols to solve functional conflicts (e.g., balancing the Production Agent's throughput maximization with the Energy Agent's power usage limitations).",
        },
        {
          title: "Agentic Decision Lifecycle (ADLC)",
          description:
            "Closed-loop system that continuously manages the Goal → Perceive → Reason → Plan → Execute → Learn paradigm without manual step triggers.",
        },
        {
          title: "E2E Supply Planning Orchestration",
          items: [
            "S&OP Agent",
            "IBP Agent",
            "Scenario Planning Agent",
            "Constraint-Based Optimization Agent",
            "Risk & Disruption Prediction Agent",
          ],
        },
      ],
    },
    businessImpactHeading: "Business Impact",
    businessImpact:
      "Organizations automate complex, end-to-end workflows safely, achieving continuous optimization across finance, supply chain, and operations.",
  },
  {
    slug: "tools",
    pageTitle: "Joule Studio, SAP AI Agent Hub, and Enterprise RAG Platforms",
    tagline: "Tools",
    hook: "Moving AI initiatives from successful demonstrations to secure, governed production requires powerful development tooling. Without enterprise-grade command centers, organizations cannot monitor active agents or prevent model hallucinations.",
    solution: [
      "AITEK deploys advanced development environments and management platforms to lifecycle your AI. We build high-performance Retrieval-Augmented Generation (RAG) platforms that securely link LLMs to your private ERP data without leaks.",
      "By deploying centralized control hubs, your technology team gains total visibility over active digital workers. We utilize low-code and pro-code environments to streamline custom agent building, accelerating your transition toward enterprise autonomy.",
    ],
    capabilitiesHeading: "Key Capabilities",
    capabilities: [
      "Low-code and pro-code custom agent building via Joule Studio",
      "Unified discovery, registration, and auditing using the SAP AI Agent Hub",
      "Enterprise RAG Platforms with secure vector databases and knowledge graphs",
      "Real-time agent observability, performance, and boundary tracking",
    ],
    detailScope: {
      heading: "Detailed Tooling Stack",
      groups: [
        {
          title: "Joule Studio",
          description:
            "Rapid, pro-code and low-code development environment specifically integrated into SAP BTP to build, test, and deploy customized sub-agents.",
        },
        {
          title: "SAP AI Agent Hub",
          description:
            "A central IT control panel built on LeanIX, allowing complete lifecycle discovery, performance monitoring, registration, and auditing of all deployed digital workers.",
        },
        {
          title: "Enterprise RAG Platforms",
          description:
            "Hybrid vector databases (such as FAISS, Milvus, or Pinecone) and knowledge graph reasoning tools that safely expose unstructured operational files to LLMs without fine-tuning risks.",
        },
      ],
    },
    businessImpactHeading: "Business Impact",
    businessImpact:
      "Technology teams rapidly build, test, and deploy compliant, hallucination-free AI agents, cutting time-to-production from months to weeks.",
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
