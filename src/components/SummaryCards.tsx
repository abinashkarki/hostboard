import type { BoardSummary } from "@/lib/types";

export function SummaryCards({ summary }: { summary: BoardSummary }) {
  const cards = [
    { label: "Departures", value: summary.departures, hint: "guests checking out" },
    { label: "Arrivals", value: summary.arrivals, hint: "guests checking in" },
    { label: "Cleans open", value: summary.cleansOpen, hint: "not yet done" },
    { label: "Unassigned", value: summary.unassigned, hint: "need a cleaner", warn: summary.unassigned > 0 },
  ];
  return (
    <section className="cards" aria-label="Today at a glance">
      {cards.map((c) => (
        <div key={c.label} className={c.warn ? "card warn" : "card"}>
          <p className="card-label">{c.label}</p>
          <p className="card-value">{c.value}</p>
          <p className="card-hint">{c.hint}</p>
        </div>
      ))}
    </section>
  );
}
