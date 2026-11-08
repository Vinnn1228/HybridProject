import { Palette } from "@/constants/palette";
export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  route: string;
}

// Data statis: Kategori Layanan
export const CATEGORIES: ServiceCategory[] = [
  {
    id: "1",
    name: "Appliance Repair",
    icon: "construct-outline",
    color: Palette.sageGreen,
    route: "/service",
  },
  {
    id: "2",
    name: "Plumbing",
    icon: "water-outline",
    color: Palette.copper,
    route: "/service",
  },
  {
    id: "3",
    name: "Electrical",
    icon: "flash-outline",
    color: Palette.mossGreen,
    route: "/service",
  },
  {
    id: "4",
    name: "Cleaning",
    icon: "sparkles-outline",
    color: Palette.mutedOlive,
    route: "/service",
  },
];
