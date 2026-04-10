export type CompanyStatus = "active" | "planning" | "archived";
export type ProjectStatus = "planning" | "active" | "paused" | "sold-out";
export type DealStage =
  | "lead"
  | "qualified"
  | "visit-scheduled"
  | "proposal"
  | "reservation"
  | "won"
  | "lost";
export type LotStatus = "available" | "reserved" | "sold" | "blocked";

export interface PriceRange {
  currency: "USD" | "GTQ";
  min: number;
  max: number;
}

export interface Company {
  id: string;
  name: string;
  slug: string;
  legalName: string;
  status: CompanyStatus;
  city: string;
  country: string;
  activeProjects: number;
  activeDeals: number;
  totalClients: number;
  createdAt: string;
}

export interface ProjectLandingPage {
  id: string;
  projectId: string;
  slug: string;
  headline: string;
  primaryCta: string;
  heroMetric: string;
  status: "draft" | "published";
  updatedAt: string;
}

export interface Project {
  id: string;
  companyId: string;
  companyName: string;
  name: string;
  slug: string;
  status: ProjectStatus;
  location: string;
  totalLots: number;
  availableLots: number;
  soldLots: number;
  reservedLots: number;
  priceRange: PriceRange;
  landingPage: ProjectLandingPage;
  updatedAt: string;
}

export interface Client {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  source: "meta-ads" | "referral" | "website" | "walk-in";
  interestedProjectId: string;
  status: "new" | "qualified" | "negotiating" | "won" | "lost";
  assignedSellerId: string;
  lastContactAt: string;
}

export interface Seller {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  team: string;
  status: "active" | "inactive";
  activeDeals: number;
  closedDealsMonth: number;
  conversionRate: number;
}

export interface Deal {
  id: string;
  clientId: string;
  clientName: string;
  projectId: string;
  projectName: string;
  lotId?: string;
  sellerId: string;
  sellerName: string;
  stage: DealStage;
  amount: number;
  source: Client["source"];
  expectedCloseDate: string;
  lastActivityAt: string;
  notesCount: number;
  followUpsPending: number;
}

export interface Lot {
  id: string;
  projectId: string;
  code: string;
  block: string;
  phase: string;
  areaM2: number;
  status: LotStatus;
  listPrice: number;
  downPayment: number;
  sellerId?: string;
  tags: string[];
}

export interface ContactNote {
  id: string;
  clientId: string;
  createdBy: string;
  type: "call" | "email" | "whatsapp" | "meeting";
  content: string;
  createdAt: string;
}

export interface FollowUp {
  id: string;
  dealId: string;
  title: string;
  dueAt: string;
  status: "pending" | "done" | "overdue";
  ownerName: string;
}

export interface DashboardMetric {
  label: string;
  value: number;
  trend: string;
}

export interface PipelineSummary {
  stage: DealStage;
  count: number;
  value: number;
}

export interface DashboardActivity {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: "deal" | "client" | "project" | "lot";
}

export interface DashboardSummary {
  metrics: DashboardMetric[];
  pipeline: PipelineSummary[];
  recentActivity: DashboardActivity[];
  recentProjects: Project[];
  recentDeals: Deal[];
  recentLots: Lot[];
  followUps: FollowUp[];
}
