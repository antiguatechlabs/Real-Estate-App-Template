import type { PropertyCardData } from "../types";

export const featuredProperties: PropertyCardData[] = [
  {
    id: 1,
    price: "$485,000",
    address: "1842 Peachtree Rd NE",
    city: "Atlanta, GA 30309",
    beds: 4,
    baths: 3,
    sqft: "2,340",
    typeKey: "singleFamily",
    gradient: "from-slate-700 to-slate-800",
  },
  {
    id: 2,
    price: "$1,250 / mo",
    address: "620 Glen Iris Dr NE",
    city: "Atlanta, GA 30308",
    beds: 2,
    baths: 2,
    sqft: "1,100",
    typeKey: "apartment",
    gradient: "from-slate-800 to-slate-700",
  },
  {
    id: 3,
    price: "$1,175,000",
    address: "3340 Habersham Rd NW",
    city: "Atlanta, GA 30305",
    beds: 5,
    baths: 4,
    sqft: "4,820",
    typeKey: "luxury",
    gradient: "from-slate-700 to-slate-900",
  },
];
