import type { BoardRow, CleanStatus } from "@/lib/types";

const statusLabel: Record<CleanStatus, string> = {
  scheduled: "Scheduled",
  in_progress: "Cleaning",
  done: "Ready",
};

function Movement({ kind, guest, time }: { kind: "out" | "in"; guest: string; time: string }) {
  return (
    <div className="movement">
      <span className={`movement-time ${kind}`}>{time}</span>
      <span className="movement-guest">{guest}</span>
    </div>
  );
}

export function TurnoverTable({ rows }: { rows: BoardRow[] }) {
  return (
    <section className="board" aria-label="Turnovers">
      <div className="board-head">
        <h2>Schedule</h2>
        <span className="board-count">{rows.length} properties</span>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Check-out</th>
            <th>Check-in</th>
            <th>Cleaner</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.property.id} data-property={row.property.id}>
              <td>
                <div className="property">
                  <span
                    className="swatch"
                    style={{ background: `hsl(${row.property.hue} 70% 92%)`, color: `hsl(${row.property.hue} 55% 38%)` }}
                  >
                    {row.property.name.slice(0, 1)}
                  </span>
                  <div>
                    <div className="property-name">{row.property.name}</div>
                    <div className="property-meta">
                      {row.property.suburb} · {row.property.beds} bed{row.property.beds > 1 ? "s" : ""}
                    </div>
                  </div>
                </div>
              </td>
              <td>{row.departure ? <Movement kind="out" {...row.departure} /> : <span className="none">—</span>}</td>
              <td>{row.arrival ? <Movement kind="in" {...row.arrival} /> : <span className="none">—</span>}</td>
              <td>
                {row.cleaner ? (
                  <span className="cleaner">
                    <span className="cleaner-dot">{row.cleaner.slice(0, 1)}</span>
                    {row.cleaner}
                  </span>
                ) : (
                  <span className="unassigned">Unassigned</span>
                )}
              </td>
              <td>
                <span className={`status ${row.cleanStatus}`}>{statusLabel[row.cleanStatus]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
