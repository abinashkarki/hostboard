export type CustomerId = string;

export interface Customer {
  id: CustomerId;
  name: string;
  city: string;
}

export interface Property {
  id: string;
  customerId: CustomerId;
  name: string;
  suburb: string;
  beds: number;
  /** Hue (0–360) for the property's colour swatch. */
  hue: number;
}

export type CleanStatus = "scheduled" | "in_progress" | "done";

export interface Booking {
  id: string;
  propertyId: string;
  guest: string;
  /** YYYY-MM-DD */
  checkInDate: string;
  /** HH:MM, 24-hour */
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
  /** Cleaner assigned to the clean after this booking's departure, or before its arrival. */
  cleaner: string | null;
  cleanStatus: CleanStatus;
}

export interface Movement {
  guest: string;
  time: string;
}

export interface BoardRow {
  property: Property;
  departure: Movement | null;
  arrival: Movement | null;
  cleaner: string | null;
  cleanStatus: CleanStatus;
}

export interface BoardSummary {
  departures: number;
  arrivals: number;
  cleansOpen: number;
  unassigned: number;
}
