import type { Booking, BoardRow, BoardSummary, CustomerId, Property } from "./types";

/** Minutes since midnight for an HH:MM time. */
export function toMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

/** The earliest time anything happens at this property today. */
function firstEventMinutes(row: BoardRow): number {
  const times = [row.departure?.time, row.arrival?.time].filter((t): t is string => Boolean(t));
  return Math.min(...times.map(toMinutes));
}

/**
 * One row per property of `customerId` that has a departure or an arrival on `date`,
 * ordered by the first event of the day.
 */
export function buildBoard(
  customerId: CustomerId,
  date: string,
  properties: Property[],
  bookings: Booking[],
): BoardRow[] {
  const rows: BoardRow[] = [];

  for (const property of properties) {
    if (property.customerId !== customerId) continue;

    const out = bookings.find((b) => b.propertyId === property.id && b.checkOutDate === date);
    const inn = bookings.find((b) => b.propertyId === property.id && b.checkInDate === date);
    if (!out && !inn) continue;

    // The clean happens after a departure; with no departure it's the pre-arrival clean.
    const clean = out ?? inn!;

    rows.push({
      property,
      departure: out ? { guest: out.guest, time: out.checkOutTime } : null,
      arrival: inn ? { guest: inn.guest, time: inn.checkInTime } : null,
      cleaner: clean.cleaner,
      cleanStatus: clean.cleanStatus,
    });
  }

  return rows.sort((a, b) => firstEventMinutes(a) - firstEventMinutes(b));
}

export function summarize(rows: BoardRow[]): BoardSummary {
  return {
    departures: rows.filter((r) => r.departure).length,
    arrivals: rows.filter((r) => r.arrival).length,
    cleansOpen: rows.filter((r) => r.cleanStatus !== "done").length,
    unassigned: rows.filter((r) => !r.cleaner && r.cleanStatus !== "done").length,
  };
}
