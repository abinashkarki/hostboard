import type { Customer } from "@/lib/types";

const nav = ["Today", "Calendar", "Properties", "Cleaners", "Guests", "Settings"];

export function Sidebar({ customers, current }: { customers: Customer[]; current: Customer }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" fill="currentColor" />
          </svg>
        </span>
        Hostboard
      </div>
      <nav className="nav">
        {nav.map((item, i) => (
          <a key={item} href="#" className={i === 0 ? "nav-item active" : "nav-item"}>
            {item}
          </a>
        ))}
      </nav>
      <div className="workspace">
        <p className="workspace-label">Workspace</p>
        {customers.map((c) => (
          <a
            key={c.id}
            href={`/?customer=${c.id}`}
            className={c.id === current.id ? "workspace-item active" : "workspace-item"}
          >
            <span className="avatar">{c.name.slice(0, 1)}</span>
            {c.name}
          </a>
        ))}
      </div>
    </aside>
  );
}
