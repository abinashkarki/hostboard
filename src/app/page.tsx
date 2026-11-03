import { Sidebar } from "@/components/Sidebar";
import { SummaryCards } from "@/components/SummaryCards";
import { TurnoverTable } from "@/components/TurnoverTable";
import { BOARD_DATE, bookings, customers, properties } from "@/data/seed";
import { buildBoard, summarize } from "@/lib/board";

function formatDay(date: string): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default async function BoardPage({
  searchParams,
}: {
  searchParams: Promise<{ customer?: string }>;
}) {
  const { customer: requested } = await searchParams;
  const customer = customers.find((c) => c.id === requested) ?? customers[0];
  const rows = buildBoard(customer.id, BOARD_DATE, properties, bookings);
  const summary = summarize(rows);

  return (
    <div className="shell">
      <Sidebar customers={customers} current={customer} />
      <main className="main">
        <header className="page-head">
          <div>
            <p className="eyebrow">{customer.name} · {customer.city}</p>
            <h1>Today&apos;s turnovers</h1>
          </div>
          <div className="date-chip">{formatDay(BOARD_DATE)}</div>
        </header>
        <SummaryCards summary={summary} />
        <TurnoverTable rows={rows} />
      </main>
    </div>
  );
}
