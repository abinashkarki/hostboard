import { describe, expect, it } from "vitest";
import { buildBoard } from "./board";
import { BOARD_DATE, bookings, properties } from "../data/seed";

describe("same-day turnovers (Harbour Stays)", () => {
  const rows = buildBoard("harbour-stays", BOARD_DATE, properties, bookings);

  it("flags properties with both a check-out and a check-in today", () => {
    const flagged = rows.filter((r) => r.sameDayTurnover === true).map((r) => r.property.id);
    expect(flagged).toEqual(["p-coogee", "p-paddo", "p-balmain"]);
  });

  it("does not flag properties with only one movement", () => {
    for (const r of rows) {
      if (!(r.departure && r.arrival)) expect(r.sameDayTurnover).toBe(false);
    }
  });

  it("lists same-day turnovers first, then the rest by first event", () => {
    expect(rows.map((r) => r.property.id)).toEqual([
      "p-coogee",
      "p-paddo",
      "p-balmain",
      "p-bondi",
      "p-manly",
      "p-newtown",
      "p-darlo",
      "p-surry",
      "p-cronulla",
    ]);
  });

  it("still shows only Harbour Stays properties", () => {
    expect(rows.every((r) => r.property.customerId === "harbour-stays")).toBe(true);
  });
});
