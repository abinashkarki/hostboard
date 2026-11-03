import type { Booking, Customer, Property } from "@/lib/types";

/** The board always shows this day, so the demo data stays stable. */
export const BOARD_DATE = "2026-11-04";

export const customers: Customer[] = [
  { id: "harbour-stays", name: "Harbour Stays", city: "Sydney" },
  { id: "alpine-lodges", name: "Alpine Lodges", city: "Thredbo" },
];

export const properties: Property[] = [
  { id: "p-bondi", customerId: "harbour-stays", name: "Bondi Beach Loft", suburb: "Bondi", beds: 2, hue: 198 },
  { id: "p-manly", customerId: "harbour-stays", name: "Manly Wharf Studio", suburb: "Manly", beds: 1, hue: 172 },
  { id: "p-coogee", customerId: "harbour-stays", name: "Coogee Cliff House", suburb: "Coogee", beds: 4, hue: 24 },
  { id: "p-paddo", customerId: "harbour-stays", name: "Paddington Rowhouse", suburb: "Paddington", beds: 3, hue: 280 },
  { id: "p-newtown", customerId: "harbour-stays", name: "Newtown Warehouse", suburb: "Newtown", beds: 2, hue: 340 },
  { id: "p-balmain", customerId: "harbour-stays", name: "Balmain Cottage", suburb: "Balmain", beds: 3, hue: 140 },
  { id: "p-darlo", customerId: "harbour-stays", name: "Darlinghurst Apartment", suburb: "Darlinghurst", beds: 1, hue: 220 },
  { id: "p-surry", customerId: "harbour-stays", name: "Surry Hills Terrace", suburb: "Surry Hills", beds: 3, hue: 48 },
  { id: "p-cronulla", customerId: "harbour-stays", name: "Cronulla Beach House", suburb: "Cronulla", beds: 5, hue: 188 },

  { id: "p-thredbo", customerId: "alpine-lodges", name: "Thredbo Ridge Chalet", suburb: "Thredbo", beds: 6, hue: 210 },
  { id: "p-jindy", customerId: "alpine-lodges", name: "Jindabyne Lake Cabin", suburb: "Jindabyne", beds: 3, hue: 160 },
  { id: "p-perisher", customerId: "alpine-lodges", name: "Perisher Snow Lodge", suburb: "Perisher", beds: 8, hue: 260 },
  { id: "p-crackenback", customerId: "alpine-lodges", name: "Crackenback Retreat", suburb: "Crackenback", beds: 4, hue: 30 },
];

const d = BOARD_DATE;

export const bookings: Booking[] = [
  // Harbour Stays: departures today
  { id: "b-101", propertyId: "p-bondi", guest: "Aiko Sato", checkInDate: "2026-11-01", checkInTime: "15:00", checkOutDate: d, checkOutTime: "08:30", cleaner: "Maya", cleanStatus: "done" },
  { id: "b-102", propertyId: "p-manly", guest: "Jonas Becker", checkInDate: "2026-11-02", checkInTime: "14:00", checkOutDate: d, checkOutTime: "09:00", cleaner: "Liam", cleanStatus: "in_progress" },
  { id: "b-103", propertyId: "p-coogee", guest: "Linh Nguyen", checkInDate: "2026-10-31", checkInTime: "15:00", checkOutDate: d, checkOutTime: "10:00", cleaner: "Maya", cleanStatus: "scheduled" },
  { id: "b-104", propertyId: "p-paddo", guest: "Giulia Rossi", checkInDate: "2026-11-01", checkInTime: "16:00", checkOutDate: d, checkOutTime: "10:30", cleaner: "Priya", cleanStatus: "scheduled" },
  { id: "b-105", propertyId: "p-newtown", guest: "Arjun Patel", checkInDate: "2026-11-02", checkInTime: "15:00", checkOutDate: d, checkOutTime: "10:45", cleaner: "Liam", cleanStatus: "scheduled" },
  { id: "b-106", propertyId: "p-balmain", guest: "Claire Dubois", checkInDate: "2026-10-30", checkInTime: "14:00", checkOutDate: d, checkOutTime: "11:00", cleaner: null, cleanStatus: "scheduled" },
  { id: "b-107", propertyId: "p-darlo", guest: "Hugo Moreau", checkInDate: "2026-11-01", checkInTime: "15:00", checkOutDate: d, checkOutTime: "11:30", cleaner: "Priya", cleanStatus: "scheduled" },

  // Harbour Stays: arrivals today
  { id: "b-201", propertyId: "p-coogee", guest: "Felix Hartmann", checkInDate: d, checkInTime: "15:00", checkOutDate: "2026-11-08", checkOutTime: "10:00", cleaner: null, cleanStatus: "scheduled" },
  { id: "b-202", propertyId: "p-paddo", guest: "Min-ji Kim", checkInDate: d, checkInTime: "16:00", checkOutDate: "2026-11-07", checkOutTime: "10:00", cleaner: null, cleanStatus: "scheduled" },
  { id: "b-203", propertyId: "p-balmain", guest: "Olivia Walker", checkInDate: d, checkInTime: "14:00", checkOutDate: "2026-11-06", checkOutTime: "10:00", cleaner: null, cleanStatus: "scheduled" },
  { id: "b-204", propertyId: "p-surry", guest: "Kwame Okafor", checkInDate: d, checkInTime: "15:00", checkOutDate: "2026-11-09", checkOutTime: "10:00", cleaner: "Tom", cleanStatus: "done" },
  { id: "b-205", propertyId: "p-cronulla", guest: "Lena Fischer", checkInDate: d, checkInTime: "17:00", checkOutDate: "2026-11-11", checkOutTime: "10:00", cleaner: "Tom", cleanStatus: "done" },

  // Alpine Lodges
  { id: "b-301", propertyId: "p-thredbo", guest: "Sam O'Brien", checkInDate: "2026-11-01", checkInTime: "15:00", checkOutDate: d, checkOutTime: "09:30", cleaner: "Noah", cleanStatus: "in_progress" },
  { id: "b-302", propertyId: "p-perisher", guest: "Ella Johansson", checkInDate: "2026-10-31", checkInTime: "15:00", checkOutDate: d, checkOutTime: "10:00", cleaner: "Ava", cleanStatus: "scheduled" },
  { id: "b-303", propertyId: "p-perisher", guest: "Mateo García", checkInDate: d, checkInTime: "15:00", checkOutDate: "2026-11-10", checkOutTime: "10:00", cleaner: null, cleanStatus: "scheduled" },
  { id: "b-304", propertyId: "p-jindy", guest: "Ruby Chen", checkInDate: d, checkInTime: "16:00", checkOutDate: "2026-11-06", checkOutTime: "10:00", cleaner: "Noah", cleanStatus: "done" },
  { id: "b-305", propertyId: "p-crackenback", guest: "Tom Wright", checkInDate: "2026-11-02", checkInTime: "14:00", checkOutDate: d, checkOutTime: "11:00", cleaner: "Ava", cleanStatus: "scheduled" },
];
