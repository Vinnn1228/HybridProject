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

// Booking data interface
export interface Booking {
  id: string;
  title: string;
  category: string;
  date: string;
  price: string;
  status: "Upcoming" | "Completed";
}

// History dummy data
export const BOOKINGS: Booking[] = [
  {
    id: "INV-001",
    title: "AC & Refrigerator Repair",
    category: "Appliance Repair",
    date: "Oct 28, 2026 - 10:00 AM",
    price: "Rp. 300.000,00",
    status: "Upcoming",
  },
  {
    id: "INV-002",
    title: "Deep Home Cleaning",
    category: "Cleaning",
    date: "Oct 30, 2026 - 02:00 PM",
    price: "Rp. 200.000,00",
    status: "Upcoming",
  },
  {
    id: "INV-003",
    title: "Leaking Pipe Fix",
    category: "Plumbing",
    date: "Oct 10, 2026 - 11:30 AM",
    price: "Rp. 100.000,00",
    status: "Completed",
  },
  {
    id: "INV-004",
    title: "Circuit Breaker Repair",
    category: "Electrical",
    date: "Sep 28, 2026 - 09:00 AM",
    price: "Rp. 150.000,00",
    status: "Completed",
  },
];

// Tipe data untuk struktur detail servis
export interface ServiceData {
  id: number;
  category: string;
  title: string;
  price: string;
  rating: string;
  reviews: string;
  description: string;
  includes: string[];
}

// Data statis: Detail Servis
export const SERVICE_DETAILS: ServiceData[] = [
  {
    id: 1,
    category: "Appliance Repair",
    title: "AC & Refrigerator Repair",
    price: "$45.00",
    rating: "4.8",
    reviews: "124",
    description:
      "Professional repair and deep cleaning for AC units and refrigerators. Includes freon check, leak repair, condenser cleaning, and electrical troubleshooting to ensure your appliances work perfectly.",
    includes: [
      "Thorough inspection & diagnosis",
      "Freon pressure check",
      "Filter & condenser cleaning",
      "30-day service warranty",
    ],
  },
];
