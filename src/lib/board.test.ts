import { describe, expect, it } from "vitest";
import { buildBoard, summarize, toMinutes } from "./board";
import type { Booking, Property } from "./types";

const props: Property[] = [
  { id: "a", customerId: "c1", name: "Alpha", suburb: "A", beds: 1, hue: 0 },
  { id: "b", customerId: "c1", name: "Bravo", suburb: "B", beds: 1, hue: 0 },
  { id: "c", customerId: "c1", name: "Charlie", suburb: "C", beds: 1, hue: 0 },
  { id: "x", customerId: "c2", name: "Other customer", suburb: "X", beds: 1, hue: 0 },
];

const day = "2026-11-04";

function booking(p: Partial<Booking> & Pick<Booking, "id" | "propertyId">): Booking {
  return {
    guest: "Guest",
    checkInDate: "2026-11-01",
    checkInTime: "15:00",
    checkOutDate: "2026-11-10",
    checkOutTime: "10:00",
    cleaner: "Maya",
    cleanStatus: "scheduled",
    ...p,
  };
}

describe("toMinutes", () => {
  it("converts HH:MM to minutes since midnight", () => {
    expect(toMinutes("00:00")).toBe(0);
    expect(toMinutes("10:30")).toBe(630);
  });
});

describe("buildBoard", () => {
  it("lists only properties with a departure or arrival on the day", () => {
    const rows = buildBoard("c1", day, props, [
      booking({ id: "1", propertyId: "a", checkOutDate: day, checkOutTime: "10:00" }),
      booking({ id: "2", propertyId: "b", checkInDate: day, checkInTime: "15:00" }),
    ]);
    expect(rows.map((r) => r.property.id)).toEqual(["a", "b"]);
  });

  it("orders rows by the first event of the day", () => {
    const rows = buildBoard("c1", day, props, [
      booking({ id: "1", propertyId: "a", checkOutDate: day, checkOutTime: "11:00" }),
      booking({ id: "2", propertyId: "b", checkOutDate: day, checkOutTime: "08:30" }),
      booking({ id: "3", propertyId: "c", checkInDate: day, checkInTime: "09:15" }),
    ]);
    expect(rows.map((r) => r.property.id)).toEqual(["b", "c", "a"]);
  });

  it("never shows another customer's properties", () => {
    const rows = buildBoard("c1", day, props, [
      booking({ id: "1", propertyId: "x", checkOutDate: day }),
    ]);
    expect(rows).toEqual([]);
  });

  it("takes the cleaner from the departing booking", () => {
    const rows = buildBoard("c1", day, props, [
      booking({ id: "1", propertyId: "a", checkOutDate: day, cleaner: "Liam" }),
      booking({ id: "2", propertyId: "a", checkInDate: day, cleaner: null }),
    ]);
    expect(rows[0].cleaner).toBe("Liam");
  });
});

describe("summarize", () => {
  it("counts departures, arrivals, open cleans and unassigned cleans", () => {
    const rows = buildBoard("c1", day, props, [
      booking({ id: "1", propertyId: "a", checkOutDate: day, cleaner: null }),
      booking({ id: "2", propertyId: "b", checkInDate: day, cleanStatus: "done" }),
    ]);
    expect(summarize(rows)).toEqual({ departures: 1, arrivals: 1, cleansOpen: 1, unassigned: 1 });
  });
});
