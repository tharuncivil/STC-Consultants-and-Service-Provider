import { Service, TeamMember, Project, ProcessStep, MapMarker } from "./types";

export const COMPANY_INFO = {
  name: "STC Consultants & Service Provider",
  tagline: "Planning Sustainable Cities. Engineering Resilient Infrastructure.",
  registration: "Udyam Registered MSME (Micro Enterprise), Reg. No. UDYAM-TS-07-0106580",
  hq: "Devarakonda, Nalgonda District, Telangana, India",
  founded: "March 2026",
  email: "stc.consultancy.1@gmail.com",
  phone: "+91 94943 01065", // Professional Indian placeholder number
  address: "Devarakonda, Nalgonda District, Telangana – 508248",
  linkedin: "https://www.linkedin.com/company/stc-consultants-service-provider"
};

export const ABOUT_COPY = `STC Consultants & Service Provider is a Telangana-based urban planning and environmental consultancy built on the belief that good cities are planned, not accidental. We bring together statutory planning expertise — the Maharashtra Regional & Town Planning (MRTP) Act, Development Control & Promotion Regulations (DCPR), Coastal Regulation Zone (CRZ) notifications, and UDPFI guidelines — with hands-on GIS analysis, environmental assessment, and cost engineering, so our clients don't have to coordinate five different consultants to take a project from concept to statutory approval.

We work across the full lifecycle of urban and infrastructure development: land suitability analysis, environmental impact assessment, layout and master planning, cost estimation and quantity surveying, and feasibility studies — for New Town Development Authorities, municipal corporations, and industrial park developers.

As a registered Micro Enterprise under the Udyam MSME scheme (Reg. No. UDYAM-TS-07-0106580), we combine the responsiveness of a focused technical team with the rigor expected on public-sector planning mandates.`;

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Urban & Regional Planning",
    iconName: "Map",
    card: "Development Plans, Local Area Plans, and Transit-Oriented Development strategies built on statutory frameworks and ground-level land use realities.",
    expanded: "We prepare Development Plans, Local Area Plans, Master Plans, and Town Planning Schemes (TPS) under the MRTP Act and allied state planning frameworks, including Transit-Oriented Development (TOD) plans along metro and rail corridors — covering everything from proposed land use mapping through public hearing and objection/suggestion resolution."
  },
  {
    id: 2,
    title: "GIS-Based Land Suitability & Land Use Analysis",
    iconName: "Layers",
    card: "MCDA/AHP-driven site suitability, Existing Land Use mapping, and Digital Twin modelling for large-scale development areas.",
    expanded: "Using GIS-based Multi-Criteria Decision Analysis (MCDA) and Analytic Hierarchy Process (AHP) workflows, we assess land suitability for new town development, infrastructure siting, and redevelopment planning — including Existing Land Use (ELU) mapping and Digital Twin models that give planning authorities a live, spatial view of their development area."
  },
  {
    id: 3,
    title: "Environmental Clearance & Impact Assessment",
    iconName: "ShieldAlert",
    card: "Pre- and post-project Environmental Impact Assessments and compliance documentation for infrastructure and development projects.",
    expanded: "We conduct Environmental Impact Assessments (EIA) at both the pre-project and post-project stage, prepare compliance documentation for statutory environmental clearance, and support ongoing environmental monitoring across infrastructure and urban development projects — helping clients meet regulatory requirements without project delays."
  },
  {
    id: 4,
    title: "Industrial Park & Infrastructure Planning",
    iconName: "Building2",
    card: "Layout design and feasibility planning for industrial corridors, parks, and smart infrastructure.",
    expanded: "We design layouts and assess feasibility for industrial parks and corridors, facilitating smarter infrastructure and stronger industrial growth — integrating infrastructure categorization and phasing into the broader regional planning context."
  },
  {
    id: 5,
    title: "Cost Estimation, Quantity Surveying & Estimation",
    iconName: "Calculator",
    card: "Detailed BOQ preparation, cost estimation, and techno-commercial valuation for planning and infrastructure projects.",
    expanded: "Our cost engineering practice covers detailed quantity surveying, Bill of Quantities (BOQ) preparation, and techno-commercial economic valuation — giving clients a clear, defensible cost basis for project viability decisions and funding applications."
  },
  {
    id: 6,
    title: "Feasibility Studies & Techno-Economic Analysis",
    iconName: "TrendingUp",
    card: "Project viability assessments and economic valuation to de-risk planning and infrastructure decisions.",
    expanded: "Before a shovel goes in the ground, we assess technical and economic feasibility — from land value and profit potential assessment to techno-commercial viability studies — so our clients can make informed go/no-go decisions."
  },
  {
    id: 7,
    title: "Technology-Driven Planning Solutions",
    iconName: "Cpu",
    card: "GIS, remote sensing, and AI/ML-integrated tools for urban growth analysis and monitoring.",
    expanded: "We build technology into the planning process itself — using GIS, remote sensing, and AI/ML-integrated web tools for urban growth analysis, monitoring development patterns over time, and supporting data-driven planning decisions."
  },
  {
    id: 8,
    title: "Real Estate & Land Advisory",
    iconName: "Compass",
    card: "Land value assessment and real estate advisory on a fee/contract basis.",
    expanded: "We provide real estate activity advisory on a fee or contract basis, including land value and profit potential assessment, to support both public planning authorities and private landholders in making sound land-use and disposal decisions."
  }
];

export const LEADERSHIP = {
  md: {
    name: "Sabavath Tarun",
    role: "Managing Director & CEO",
    bio: "Sabavath Tarun leads STC Consultants & Service Provider, bringing a combination of statutory planning expertise and technical GIS delivery to every mandate the firm takes on. He holds an M.Tech in Urban Planning from the Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat, and a B.Tech in Civil Engineering.\n\nHis planning background spans GIS-based Existing Land Use mapping and Digital Twin modelling for new town development, Transit-Oriented Development impact assessment and Local Area Planning along metro corridors, statutory Development Plan preparation including public hearing and objection resolution, and Local Area Plan preparation for High-Speed Rail stations involving multi-agency and international development partner coordination. Earlier experience at the Hyderabad Metropolitan Development Authority (HMDA) included riverfront development analysis and Land Use/Land Cover (LULC) mapping using GIS and remote sensing.",
    imagePlaceholder: "alt='MD_CEO_photo_placeholder'"
  },
  coreTeam: [
    {
      name: "Core Team Member 1",
      role: "Senior GIS Analyst",
      focus: "Spatial modelling, Digital Twin pipelines, and satellite remote sensing analysis.",
      imagePlaceholder: "alt='GIS_Analyst_placeholder'"
    },
    {
      name: "Core Team Member 2",
      role: "Environmental Planner",
      focus: "EIA documentation, Coastal Regulation Zone (CRZ) clearance, and municipal compliances.",
      imagePlaceholder: "alt='Environmental_Planner_placeholder'"
    },
    {
      name: "Core Team Member 3",
      role: "Cost & Quantity Estimation Lead",
      focus: "Techno-commercial valuations, comprehensive BOQ drafting, and financial feasibility models.",
      imagePlaceholder: "alt='Cost_Estimation_Lead_placeholder'"
    },
    {
      name: "Core Team Member 4",
      role: "Urban Designer & Master Planner",
      focus: "Layout planning, TOD corridor mapping, and Town Planning Scheme formulations.",
      imagePlaceholder: "alt='Urban_Designer_placeholder'"
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "GIS-Based Existing Land Use & Digital Twin Development",
    category: "GIS & Tech",
    description: "Preparation of GIS-based Existing Land Use (ELU) mapping and a Digital Twin model for a large-scale new town development area, supporting a metropolitan development authority's planning mandate.",
    stat: "4,500 Hectares Modeled"
  },
  {
    id: 2,
    title: "Urban Renewal Cluster Identification & Techno-Commercial Valuation",
    category: "Urban Planning",
    description: "Identification and boundary delineation of urban renewal clusters for a municipal corporation's cluster redevelopment programme, including techno-commercial economic valuation for project viability.",
    stat: "12 Renewal Clusters"
  },
  {
    id: 3,
    title: "Transit-Oriented Development Impact Assessment & Local Area Plan",
    category: "Infrastructure",
    description: "Impact assessment and Local Area Plan preparation for Transit-Oriented Development along an active metro rail corridor, aligning land use planning with transit infrastructure delivery.",
    stat: "18.5 km Corridor"
  },
  {
    id: 4,
    title: "Statutory Development Plan for Peri-Urban Villages",
    category: "Urban Planning",
    description: "Preparation of proposed land use and statutory Development Plan for peri-urban villages, including coordination of public hearings and resolution of objections and suggestions from residents.",
    stat: "6 Villages"
  },
  {
    id: 5,
    title: "Local Area Plan for a High-Speed Rail Station",
    category: "Infrastructure",
    description: "Detailed concept plan and strategic proposals for a High-Speed Rail station's Local Area Plan, prepared in coordination with a state-level municipal corporation, a national rail implementation agency, and an international development partner.",
    stat: "Multi-Agency, GIS-Based"
  },
  {
    id: 6,
    title: "Riverfront Development & Buffer Zone Assessment",
    category: "Environmental",
    description: "Identification of structures affected within a 50-metre riverfront buffer using GIS and remote sensing, supporting an economic development and riverfront revitalization initiative.",
    stat: "50m Buffer Analysis"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Site Assessment & GIS Mapping",
    description: "Land use, land suitability, and spatial data collection using high-resolution remote sensing layers."
  },
  {
    stepNumber: 2,
    title: "Feasibility & Environmental Screening",
    description: "Techno-economic viability, site criteria assessment, and proactive environmental impact screening."
  },
  {
    stepNumber: 3,
    title: "Planning & Design",
    description: "Development plans, layouts, transit corridors, smart infrastructure, and Town Planning schemes."
  },
  {
    stepNumber: 4,
    title: "Statutory Approval Support",
    description: "Strict documentation, coordination of public hearings, objection resolution, and regulatory consulting."
  },
  {
    stepNumber: 5,
    title: "Implementation & Cost Monitoring",
    description: "Detailed quantity surveying, BOQ calculation, techno-commercial cost tracking, and field delivery support."
  }
];

export const MAP_MARKERS: MapMarker[] = [
  {
    name: "HQ: STC Consultants & Service Provider",
    position: [16.6963, 78.9254],
    projectType: "Corporate Headquarters - Devarakonda, Nalgonda District, Telangana",
    isActiveHQ: true
  },
  {
    name: "Mumbai Metropolitan Region",
    position: [18.9750, 72.8258],
    projectType: "Urban Renewal Cluster Mapping & TOD Assessments",
    isActiveHQ: false
  },
  {
    name: "Thane",
    position: [19.2183, 72.9781],
    projectType: "Statutory Plan & Cluster Development Consulting",
    isActiveHQ: false
  },
  {
    name: "Hyderabad",
    position: [17.3850, 78.4867],
    projectType: "Riverfront Development & LULC GIS Analysis",
    isActiveHQ: false
  },
  {
    name: "Surat",
    position: [21.1702, 72.8311],
    projectType: "Transit Corridor Planning & Local Area Planning Research",
    isActiveHQ: false
  }
];

export const CAPABILITIES = [
  { area: "GIS & Remote Sensing", rating: 5, description: "Advanced Digital Twin mapping, suitability models, and remote sensing." },
  { area: "Statutory Plan Preparation", rating: 5, description: "Preparation of Development Plans, local area zoning, and TPS under MRTP guidelines." },
  { area: "EIA & Compliance", rating: 4, description: "Pre- and post-project environmental clearances, monitoring, and compliance filing." },
  { area: "Cost Estimation", rating: 5, description: "Precision BOQ calculation, techno-commercial viability reports, and quantity surveying." }
];

// Service Distribution chart data for the Donut Chart
export const SERVICE_DISTRIBUTION = [
  { name: "Urban & Regional Planning", value: 20 },
  { name: "GIS & Digital Twin Modelling", value: 18 },
  { name: "Environmental Clearance & EIA", value: 15 },
  { name: "Industrial Corridor Layouts", value: 12 },
  { name: "Cost Estimation & BOQ", value: 12 },
  { name: "Feasibility & Viability Studies", value: 10 },
  { name: "Tech-Driven Web GIS Tools", value: 8 },
  { name: "Real Estate & Land Advisory", value: 5 }
];
