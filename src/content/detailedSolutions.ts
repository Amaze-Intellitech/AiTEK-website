import type { DetailGroup } from "./types";

export const verticalCapabilityLayers: Record<string, DetailGroup[]> = {
  manufacturing: [
    {
      title: "Demand Forecasting & Inventory Optimization",
      description:
        "Leverages time-series predictive analytics and regression models to optimize reorder points and predict raw material needs. This minimizes manual forecasting errors and reduces inventory carrying costs across the supply chain.",
    },
    {
      title: "Smart Factory & Process Control",
      description:
        "Utilizes reinforcement learning and computer vision to enable autonomous process control and dynamic production scheduling. It ensures consistent product quality while maximizing overall equipment effectiveness (OEE) and throughput.",
    },
    {
      title: "Predictive Maintenance & Asset Health",
      description:
        "Analyzes equipment data, such as vibration and temperature anomalies, to predict failures before they occur. This approach estimates the remaining useful life of machinery, significantly reducing unplanned downtime.",
    },
    {
      title: "Autonomous Supply Chain Agents",
      description:
        "Deploys multi-agent systems that autonomously adjust procurement, monitor supplier lead times, and recalibrate key performance indicators. It enables a self-driving, resilient supply chain that reacts proactively to operational disruptions.",
    },
  ],
  "oil-gas": [
    {
      title: "Predictive Maintenance (PdM) & Asset Reliability",
      description:
        "Forecasts critical equipment breakdowns using vibration analysis and temperature anomaly detection. This ensures higher asset utilization, lowers operational risk, and prevents costly unplanned downtime.",
    },
    {
      title: "Computer Vision for Industrial Inspection",
      description:
        "Automates visual inspections to rapidly identify surface defects, pipeline leaks, and corrosion. It enhances operational safety and provides precise thermal imaging for hotspot detection.",
    },
    {
      title: "Autonomous Turnaround & Shutdown Agents",
      description:
        "Deploys specialized AI agents to autonomously plan maintenance schedules and orchestrate multi-asset workflows. This reduces the time and administrative burden associated with complex facility turnarounds.",
    },
    {
      title: "Refinery Process & Energy Optimization",
      description:
        "Analyzes real-time operational data to optimize crude blending, throughput, and energy consumption. It drives higher production reliability while enhancing environmental compliance and reducing overall emissions.",
    },
  ],
  insurance: [
    {
      title: "Intelligent Risk Assessment & AI Underwriting",
      description:
        "Automates risk scoring, evaluates policy eligibility, and optimizes premium pricing models. This streamlines the underwriting workbench and significantly improves decision-making accuracy.",
    },
    {
      title: "Intelligent Claims Management",
      description:
        "Accelerates claims processing by automating intake, triage, document processing, and damage assessment workflows. It reduces manual bottlenecks and ensures faster, more efficient settlement resolutions.",
    },
    {
      title: "Fraud Detection & Risk Analytics",
      description:
        "Deploys behavioral and network analytics to proactively identify document fraud and assess catastrophe risk. It minimizes financial losses and strengthens enterprise portfolio risk management.",
    },
    {
      title: "Autonomous Insurance Operations Agents",
      description:
        "Utilizes multi-agent orchestrators to autonomously coordinate underwriting decisions, claims processing, and customer engagement. This transitions fragmented insurance workflows into a unified, goal-driven execution model.",
    },
  ],
  healthcare: [
    {
      title: "Clinical Decision & Patient Journey Intelligence",
      description:
        "Empowers healthcare providers with AI-driven diagnostic insights, medical imaging analytics, and optimized appointment scheduling. It improves clinical accuracy, reduces wait times, and enhances the overall patient experience.",
    },
    {
      title: "Hospital Operations & Revenue Cycle Intelligence",
      description:
        "Optimizes bed utilization, workforce capacity, and operating room scheduling to streamline hospital throughput. It concurrently accelerates the revenue cycle by modernizing coding, billing, and payment reconciliation.",
    },
    {
      title: "Payer Claims & Payment Integrity Intelligence",
      description:
        "Modernizes health insurance operations through automated claims adjudication, policy validation, and intelligent exception management. It accelerates accurate member services and actively combats fraud, waste, and abuse.",
    },
    {
      title: "Predictive Readmission & Population Health Analytics",
      description:
        "Utilizes predictive risk models to identify high-risk patients prior to discharge, enabling targeted interventions and remote monitoring. This proactively reduces hospital readmission rates and supports value-based care initiatives.",
    },
  ],
  pharmaceuticals: [
    {
      title: "Smart Pharma Manufacturing & Batch Intelligence",
      description:
        "Optimizes continuous manufacturing analytics, equipment monitoring, and digital quality management. It ensures high manufacturing consistency and strict adherence to GMP compliance standards.",
    },
    {
      title: "Regulatory Compliance & Pharmacovigilance",
      description:
        "Automates document submissions, adverse event monitoring, and safety signal detection to uphold patient safety. It streamlines global regulatory intelligence and ensures constant audit readiness.",
    },
    {
      title: "Pharma Supply & Cold Chain Intelligence",
      description:
        "Enhances demand planning, real-time temperature monitoring, and logistics visibility across complex distribution networks. It ensures product traceability and maintains resilient, compliant cold chain logistics.",
    },
    {
      title: "Autonomous Pharmaceutical Operations Orchestration",
      description:
        "Deploys multi-agent systems to independently coordinate research, manufacturing, quality assurance, and supply chain execution. It creates a connected, self-optimizing ecosystem that reduces development timelines and accelerates drug commercialization.",
    },
  ],
};
