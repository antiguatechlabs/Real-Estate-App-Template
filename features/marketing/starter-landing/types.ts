export type BrandConfig = {
  agencyName: string;
  city: string;
  popularAreas: string[];
  primaryCtaHref: string;
  signInHref: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
    instagram: string;
  };
};

export type PropertyTypeKey = "singleFamily" | "apartment" | "luxury";

export type PropertyCardData = {
  id: number;
  price: string;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: string;
  typeKey: PropertyTypeKey;
  gradient: string;
};

export type TestimonialKey = "sarah" | "marcus" | "priya";
export type TestimonialRoleKey = "homeBuyer" | "investor" | "renter";

export type TestimonialData = {
  key: TestimonialKey;
  name: string;
  roleKey: TestimonialRoleKey;
  initials: string;
};

export type AgentSpecialtyKey =
  | "luxuryResidential"
  | "commercialProperties"
  | "firstTimeBuyers";

export type AgentData = {
  name: string;
  specialtyKey: AgentSpecialtyKey;
  listings: number;
  initials: string;
};
