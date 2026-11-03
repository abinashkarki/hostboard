import { describe, expect, it } from "vitest";
import { buildBoard } from "./board";
import { BOARD_DATE, bookings, properties } from "../data/seed";

describe("same-day turnovers (Alpine Lodges)", () => {
  const rows = buildBoard("alpine-lodges", BOARD_DATE, properties, bookings);

  it("flags only the property with both a check-out and a check-in today", () => {
    const flagged = rows.filter((r) => r.sameDayTurnover === true).map((r) => r.property.id);
    expect(flagged).toEqual(["p-perisher"]);
    for (const r of rows) {
      if (r.property.id !== "p-perisher") expect(r.sameDayTurnover).toBe(false);
    }
  });

  it("lists the same-day turnover first, then the rest by first event", () => {
    expect(rows.map((r) => r.property.id)).toEqual([
      "p-perisher",
      "p-thredbo",
      "p-crackenback",
      "p-jindy",
    ]);
  });

  it("still shows only Alpine Lodges properties", () => {
    expect(rows.every((r) => r.property.customerId === "alpine-lodges")).toBe(true);
  });
});
