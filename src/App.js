import { useState, useRef } from "react";

const TODAY = new Date("2026-03-06");

const INITIAL = [
  // Malaysia companies
  {
    id: 1,
    country: "MY",
    name: "Petronas",
    category: "Oil & Gas",
    director: "Tan Sri Tengku Muhammad Taufik",
    identificationNo: "197401000289",
    incorporationDate: "1974-08-17",
    taxDueDate: "2026-06-30",
    auditDueDate: "2026-04-30",
    annualReturnDueDate: "",
    cosecFee: 3500,
    auditFee: 85000,
    taxFee: 42000,
    otherFee: 12000,
    status: "pending",
  },
  {
    id: 2,
    country: "MY",
    name: "Maybank",
    category: "Banking",
    director: "Dato' Khairussaleh Ramli",
    identificationNo: "196001000142",
    incorporationDate: "1960-05-31",
    taxDueDate: "2026-07-31",
    auditDueDate: "2026-05-31",
    annualReturnDueDate: "",
    cosecFee: 4200,
    auditFee: 120000,
    taxFee: 65000,
    otherFee: 18000,
    status: "pending",
  },
  {
    id: 3,
    country: "MY",
    name: "Tenaga Nasional",
    category: "Utilities",
    director: "Dato' Megat Jalaluddin",
    identificationNo: "199001009650",
    incorporationDate: "1990-09-01",
    taxDueDate: "2026-08-31",
    auditDueDate: "2026-06-30",
    annualReturnDueDate: "",
    cosecFee: 3800,
    auditFee: 95000,
    taxFee: 48000,
    otherFee: 9500,
    status: "pending",
  },
  {
    id: 4,
    country: "MY",
    name: "CIMB Group",
    category: "Banking",
    director: "Dato' Abdul Rahman Ahmad",
    identificationNo: "200301032762",
    incorporationDate: "2003-10-01",
    taxDueDate: "2026-09-30",
    auditDueDate: "2026-07-31",
    annualReturnDueDate: "",
    cosecFee: 4000,
    auditFee: 110000,
    taxFee: 58000,
    otherFee: 15000,
    status: "pending",
  },
  {
    id: 5,
    country: "MY",
    name: "Axiata Group",
    category: "Telecom",
    director: "Dato' Izzaddin Idris",
    identificationNo: "200801026520",
    incorporationDate: "2008-03-06",
    taxDueDate: "2026-06-30",
    auditDueDate: "2026-04-30",
    annualReturnDueDate: "",
    cosecFee: 3600,
    auditFee: 88000,
    taxFee: 44000,
    otherFee: 11000,
    status: "pending",
  },
  {
    id: 6,
    country: "MY",
    name: "IHH Healthcare",
    category: "Healthcare",
    director: "Dr. Kelvin Loh",
    identificationNo: "201101013564",
    incorporationDate: "2011-06-05",
    taxDueDate: "2026-10-31",
    auditDueDate: "2026-08-31",
    annualReturnDueDate: "",
    cosecFee: 3200,
    auditFee: 76000,
    taxFee: 38000,
    otherFee: 8500,
    status: "pending",
  },
  {
    id: 7,
    country: "MY",
    name: "Public Bank",
    category: "Banking",
    director: "Tan Sri Tay Ah Lek",
    identificationNo: "196601000672",
    incorporationDate: "1966-08-06",
    taxDueDate: "2026-05-31",
    auditDueDate: "2026-03-31",
    annualReturnDueDate: "",
    cosecFee: 4500,
    auditFee: 130000,
    taxFee: 70000,
    otherFee: 20000,
    status: "pending",
  },
  {
    id: 8,
    country: "MY",
    name: "Maxis",
    category: "Telecom",
    director: "Gokhan Ogut",
    identificationNo: "199501011410",
    incorporationDate: "1995-01-01",
    taxDueDate: "2026-07-31",
    auditDueDate: "2026-05-31",
    annualReturnDueDate: "",
    cosecFee: 3400,
    auditFee: 82000,
    taxFee: 41000,
    otherFee: 10000,
    status: "pending",
  },
  {
    id: 9,
    country: "MY",
    name: "RHB Bank",
    category: "Banking",
    director: "Dato' Mohd Rashid Mohamad",
    identificationNo: "199701009694",
    incorporationDate: "1997-12-04",
    taxDueDate: "2026-08-31",
    auditDueDate: "2026-06-30",
    annualReturnDueDate: "",
    cosecFee: 3900,
    auditFee: 100000,
    taxFee: 52000,
    otherFee: 13000,
    status: "pending",
  },
  {
    id: 10,
    country: "MY",
    name: "Genting Group",
    category: "Hospitality",
    director: "Tan Sri Lim Kok Thay",
    identificationNo: "196801000580",
    incorporationDate: "1968-06-10",
    taxDueDate: "2026-09-30",
    auditDueDate: "2026-07-31",
    annualReturnDueDate: "",
    cosecFee: 4100,
    auditFee: 115000,
    taxFee: 60000,
    otherFee: 16000,
    status: "pending",
  },
  // Hong Kong companies
  {
    id: 11,
    country: "HK",
    name: "HK Finance Ltd",
    category: "Banking",
    director: "Raymond Chan",
    identificationNo: "HK-2045678",
    incorporationDate: "2005-03-15",
    taxDueDate: "2026-11-30",
    auditDueDate: "2026-08-31",
    annualReturnDueDate: "2026-03-15",
    cosecFee: 2800,
    auditFee: 55000,
    taxFee: 28000,
    otherFee: 6000,
    status: "pending",
  },
  {
    id: 12,
    country: "HK",
    name: "Dragon Tech HK",
    category: "Technology",
    director: "Jennifer Lau",
    identificationNo: "HK-3312290",
    incorporationDate: "2012-07-20",
    taxDueDate: "2026-10-31",
    auditDueDate: "2026-07-31",
    annualReturnDueDate: "2026-07-20",
    cosecFee: 2500,
    auditFee: 48000,
    taxFee: 24000,
    otherFee: 5500,
    status: "pending",
  },
  {
    id: 13,
    country: "HK",
    name: "Pearl Logistics HK",
    category: "Shipping",
    director: "Michael Ng",
    identificationNo: "HK-1198443",
    incorporationDate: "1998-11-08",
    taxDueDate: "2026-12-31",
    auditDueDate: "2026-09-30",
    annualReturnDueDate: "2026-11-08",
    cosecFee: 3000,
    auditFee: 62000,
    taxFee: 31000,
    otherFee: 7000,
    status: "pending",
  },
  {
    id: 14,
    country: "HK",
    name: "Harbour Capital HK",
    category: "Finance",
    director: "Susan Yip",
    identificationNo: "HK-4421190",
    incorporationDate: "2008-05-12",
    taxDueDate: "2026-09-30",
    auditDueDate: "2026-06-30",
    annualReturnDueDate: "2026-05-12",
    cosecFee: 2700,
    auditFee: 52000,
    taxFee: 26000,
    otherFee: 5800,
    status: "pending",
  },
  {
    id: 15,
    country: "HK",
    name: "Asia Trade HK",
    category: "Trading",
    director: "David Leung",
    identificationNo: "HK-5563321",
    incorporationDate: "2015-09-30",
    taxDueDate: "2026-08-31",
    auditDueDate: "2026-05-31",
    annualReturnDueDate: "2026-09-30",
    cosecFee: 2200,
    auditFee: 42000,
    taxFee: 21000,
    otherFee: 4500,
    status: "pending",
  },
];

const EMPTY = {
  country: "MY",
  name: "",
  category: "",
  director: "",
  identificationNo: "",
  incorporationDate: "",
  taxDueDate: "",
  auditDueDate: "",
  annualReturnDueDate: "",
  cosecFee: "",
  auditFee: "",
  taxFee: "",
  otherFee: "",
  status: "pending",
};

const getDays = (d) => (d ? Math.ceil((new Date(d) - TODAY) / 86400000) : null);
const totalFees = (c) =>
  (Number(c.cosecFee) || 0) +
  (Number(c.auditFee) || 0) +
  (Number(c.taxFee) || 0) +
  (Number(c.otherFee) || 0);
const fmt = (d) =>
  d
    ? new Date(d).toLocaleDateString("en-MY", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "—";
const fmtMYR = (v) => (v ? `RM ${Number(v).toLocaleString("en-MY")}` : "—");
const escCsv = (v) => {
  const s = String(v ?? "");
  return s.includes(",") || s.includes('"') || s.includes("\n")
    ? `"${s.replace(/"/g, '""')}"`
    : `${s}`;
};

const urgencyOf = (days) => {
  if (days === null) return null;
  if (days < 0) return "overdue";
  if (days <= 7) return "critical";
  if (days <= 30) return "soon";
  return "normal";
};

const DUE_CFG = {
  overdue: { color: "#ff2d55", bg: "#fff0f3", label: "OVERDUE" },
  critical: { color: "#ff6a00", bg: "#fff5ee", label: "DUE SOON" },
  soon: { color: "#e6a800", bg: "#fffbee", label: "UPCOMING" },
  normal: { color: "#00a87a", bg: "#f0fdf9", label: "ON TRACK" },
};

const COUNTRY_CFG = {
  MY: {
    flag: "🇲🇾",
    label: "Malaysia",
    color: "#cc0001",
    bg: "#fff0f0",
    border: "#ffcccc",
  },
  HK: {
    flag: "🇭🇰",
    label: "Hong Kong",
    color: "#de2910",
    bg: "#fff8f0",
    border: "#ffd0a0",
  },
};

const parseCsvLine = (line) => {
  const cols = [];
  let cur = "";
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQ && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else inQ = !inQ;
    } else if (ch === "," && !inQ) {
      cols.push(cur);
      cur = "";
    } else cur += ch;
  }
  cols.push(cur);
  return cols.map((c) => c.trim());
};

const Label = ({ children, color = "#3d5afe" }) => (
  <label
    style={{
      fontSize: 10,
      letterSpacing: ".08em",
      color,
      fontWeight: 600,
      marginBottom: 3,
      display: "block",
    }}
  >
    {children}
  </label>
);
const Field = ({ label, color, children }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Label color={color}>{label}</Label>
    {children}
  </div>
);

const DuePill = ({ label, date }) => {
  const days = getDays(date);
  const u = urgencyOf(days);
  if (!date) return null;
  const cfg = DUE_CFG[u] || DUE_CFG.normal;
  return (
    <div
      style={{
        background: cfg.bg,
        border: `1px solid ${cfg.color}30`,
        borderRadius: 6,
        padding: "6px 10px",
      }}
    >
      <div
        style={{
          fontSize: 9,
          letterSpacing: ".08em",
          color: "#8a94b8",
          marginBottom: 2,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 11, color: cfg.color, fontWeight: 600 }}>
        {fmt(date)}
      </div>
      <div style={{ fontSize: 9, color: cfg.color, marginTop: 1 }}>
        {days < 0
          ? `${Math.abs(days)}d overdue`
          : days === 0
          ? "Today!"
          : `${days}d left`}
      </div>
    </div>
  );
};

export default function App() {
  const [companies, setCompanies] = useState(INITIAL);
  const [search, setSearch] = useState("");
  const [filterCountry, setFilterCountry] = useState("All");
  const [filterCat, setFilterCat] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [expandId, setExpandId] = useState(null);
  const [toast, setToast] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const importRef = useRef();

  const showToast = (msg, color = "#00c896") => {
    setToast({ msg, color });
    setTimeout(() => setToast(null), 3500);
  };
  const f = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const CATS = ["All", ...new Set(companies.map((c) => c.category))].sort();

  const filtered = companies
    .filter((c) => {
      const matchSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        (c.director || "").toLowerCase().includes(search.toLowerCase()) ||
        (c.identificationNo || "")
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase());
      const matchCountry =
        filterCountry === "All" || c.country === filterCountry;
      const matchCat = filterCat === "All" || c.category === filterCat;
      const matchStatus = filterStatus === "All" || c.status === filterStatus;
      return matchSearch && matchCountry && matchCat && matchStatus;
    })
    .sort((a, b) =>
      sortBy === "name"
        ? a.name.localeCompare(b.name)
        : sortBy === "country"
        ? a.country.localeCompare(b.country)
        : sortBy === "tax"
        ? new Date(a.taxDueDate || "9999") - new Date(b.taxDueDate || "9999")
        : sortBy === "audit"
        ? new Date(a.auditDueDate || "9999") -
          new Date(b.auditDueDate || "9999")
        : 0
    );

  const stats = {
    total: companies.length,
    my: companies.filter((c) => c.country === "MY").length,
    hk: companies.filter((c) => c.country === "HK").length,
    done: companies.filter((c) => c.status === "done").length,
  };

  // upcoming deadlines in next 30 days
  const urgentCount = companies.filter((c) => {
    const dates = [c.taxDueDate, c.auditDueDate, c.annualReturnDueDate].filter(
      Boolean
    );
    return dates.some((d) => {
      const days = getDays(d);
      return days !== null && days >= 0 && days <= 30;
    });
  }).length;

  const markDone = (id) => {
    setCompanies((p) =>
      p.map((c) => (c.id === id ? { ...c, status: "done" } : c))
    );
    showToast("✓ Marked as complete");
  };
  const deleteEntry = (id) => {
    setCompanies((p) => p.filter((c) => c.id !== id));
    showToast("Deleted", "#ff4d6d");
  };
  const openEdit = (c) => {
    setForm({ ...EMPTY, ...c });
    setEditId(c.id);
    setShowForm(true);
  };
  const saveForm = () => {
    if (!form.name) return;
    if (editId) {
      setCompanies((p) =>
        p.map((c) => (c.id === editId ? { ...c, ...form } : c))
      );
      showToast("✓ Updated");
    } else {
      setCompanies((p) => [...p, { ...form, id: Date.now() }]);
      showToast("✓ Added");
    }
    setShowForm(false);
    setEditId(null);
    setForm(EMPTY);
  };

  const exportCSV = () => {
    const headers = [
      "Country",
      "Company Name",
      "ID No",
      "Director",
      "Incorporation Date",
      "Category",
      "Status",
      "Tax Due Date",
      "Audit Due Date",
      "Annual Return Due Date",
      "CoSec Fee",
      "Audit Fee",
      "Tax Fee",
      "Other Fee",
      "Total Fee",
    ];
    const rows = companies.map((c) => [
      COUNTRY_CFG[c.country]?.label || c.country,
      c.name,
      c.identificationNo || "",
      c.director || "",
      c.incorporationDate || "",
      c.category,
      c.status,
      c.taxDueDate || "",
      c.auditDueDate || "",
      c.annualReturnDueDate || "",
      c.cosecFee || 0,
      c.auditFee || 0,
      c.taxFee || 0,
      c.otherFee || 0,
      totalFees(c),
    ]);
    const csv = [headers, ...rows]
      .map((r) => r.map(escCsv).join(","))
      .join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = `DueTrack_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    showToast("📥 Exported as CSV");
  };

  const importCSV = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const lines = ev.target.result.split("\n").filter((l) => l.trim());
        const hdrs = parseCsvLine(lines[0]).map((h) =>
          h.toLowerCase().replace(/[\s()rm]/g, "")
        );
        const col = (k) => hdrs.findIndex((h) => h.includes(k));
        const imported = lines
          .slice(1)
          .map((line, i) => {
            const c = parseCsvLine(line);
            return {
              id: Date.now() + i,
              country: c[col("country")]?.includes("Hong") ? "HK" : "MY",
              name: c[col("company")] || "",
              identificationNo: c[col("id")] || "",
              director: c[col("director")] || "",
              incorporationDate: c[col("incorporation")] || "",
              category: c[col("category")] || "",
              status: c[col("status")] || "pending",
              taxDueDate: c[col("tax")] || "",
              auditDueDate: c[col("audit")] || "",
              annualReturnDueDate: c[col("annual")] || "",
              cosecFee: Number(c[col("cosec")]) || 0,
              auditFee: Number(c[col("auditfee")]) || 0,
              taxFee: Number(c[col("taxfee")]) || 0,
              otherFee: Number(c[col("other")]) || 0,
            };
          })
          .filter((r) => r.name);
        setCompanies((p) => {
          const ex = new Set(p.map((c) => c.name.toLowerCase()));
          const newOnes = imported.filter((r) => !ex.has(r.name.toLowerCase()));
          showToast(
            `📤 Imported ${newOnes.length} entries (${
              imported.length - newOnes.length
            } skipped)`
          );
          return [...p, ...newOnes];
        });
      } catch {
        showToast("❌ Failed to read CSV", "#ff2d55");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0f2f8",
        fontFamily: "'DM Mono','Courier New',monospace",
        color: "#1a2040",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#e8eaf0}::-webkit-scrollbar-thumb{background:#c0c8e0;border-radius:2px}
        input,select{background:#fff!important;border:1px solid #d0d8f0!important;color:#1a2040!important;border-radius:6px;padding:8px 12px;font-family:inherit;font-size:13px;outline:none;width:100%}
        input:focus,select:focus{border-color:#3d5afe!important;box-shadow:0 0 0 2px rgba(61,90,254,.12)}
        input::placeholder{color:#9aa0c0}
        .card{transition:transform .15s,box-shadow .15s}.card:hover{transform:translateY(-1px)}
        .btn{cursor:pointer;border:none;font-family:inherit;font-size:12px;font-weight:500;letter-spacing:.05em;transition:all .15s;border-radius:4px}.btn:hover{filter:brightness(1.12)}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        @keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
      `}</style>

      {toast && (
        <div
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 9999,
            background: "#fff",
            border: `1px solid ${toast.color}`,
            color: toast.color,
            padding: "10px 18px",
            borderRadius: 8,
            fontSize: 13,
            animation: "slideIn .3s ease",
            boxShadow: `0 4px 20px ${toast.color}30`,
            maxWidth: 360,
          }}
        >
          {toast.msg}
        </div>
      )}

      {/* ── Header ── */}
      <div
        style={{
          background: "linear-gradient(180deg,#fff 0%,#f0f2f8 100%)",
          borderBottom: "1px solid #d8ddf0",
          padding: "24px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: ".2em",
                color: "#3d5afe",
                marginBottom: 4,
              }}
            >
              DEADLINE INTELLIGENCE SYSTEM
            </div>
            <h1
              style={{
                fontFamily: "Syne,sans-serif",
                fontSize: 28,
                fontWeight: 800,
                color: "#1a2040",
                letterSpacing: "-.02em",
              }}
            >
              DUETRACK <span style={{ color: "#3d5afe" }}>PRO</span>
              <span
                style={{
                  fontSize: 12,
                  background: "#eef1ff",
                  color: "#3d5afe",
                  border: "1px solid #c5cfff",
                  borderRadius: 6,
                  padding: "2px 8px",
                  marginLeft: 10,
                  verticalAlign: "middle",
                  fontFamily: "DM Mono,monospace",
                  fontWeight: 400,
                }}
              >
                v10
              </span>
            </h1>
            <div style={{ fontSize: 11, color: "#8a94b8", marginTop: 4 }}>
              🇲🇾 Malaysia · 🇭🇰 Hong Kong
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { label: "TOTAL", val: stats.total, c: "#3d5afe" },
              { label: "🇲🇾 MY", val: stats.my, c: "#cc0001" },
              { label: "🇭🇰 HK", val: stats.hk, c: "#de2910" },
              { label: "⚠️ DUE 30D", val: urgentCount, c: "#e6a800" },
              { label: "✓ DONE", val: stats.done, c: "#00a87a" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  textAlign: "center",
                  background: "#fff",
                  border: "1px solid #d8ddf0",
                  borderRadius: 8,
                  padding: "8px 14px",
                  minWidth: 65,
                  boxShadow: "0 1px 4px rgba(0,0,0,.06)",
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: s.c,
                    fontFamily: "Syne,sans-serif",
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: ".1em",
                    color: "#8a94b8",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "24px 32px" }}>
        {/* ── Controls ── */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            marginBottom: 24,
            alignItems: "center",
          }}
        >
          <input
            placeholder="Search name, director, ID…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ flex: "1 1 180px", width: "auto" }}
          />
          <select
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
            style={{ width: "auto" }}
          >
            <option value="All">🌏 All Countries</option>
            <option value="MY">🇲🇾 Malaysia</option>
            <option value="HK">🇭🇰 Hong Kong</option>
          </select>
          <select
            value={filterCat}
            onChange={(e) => setFilterCat(e.target.value)}
            style={{ width: "auto" }}
          >
            {CATS.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={{ width: "auto" }}
          >
            {["All", "pending", "done"].map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ width: "auto" }}
          >
            <option value="name">Sort: Name</option>
            <option value="country">Sort: Country</option>
            <option value="tax">Sort: Tax Due</option>
            <option value="audit">Sort: Audit Due</option>
          </select>
          <input
            ref={importRef}
            type="file"
            accept=".csv"
            onChange={importCSV}
            style={{ display: "none" }}
          />
          <button
            className="btn"
            onClick={() => importRef.current.click()}
            style={{
              background: "#fff7e6",
              color: "#e6a800",
              border: "1px solid #ffe0a0",
              padding: "9px 14px",
              whiteSpace: "nowrap",
            }}
          >
            📤 IMPORT
          </button>
          <button
            className="btn"
            onClick={exportCSV}
            style={{
              background: "#e6faf4",
              color: "#00a87a",
              border: "1px solid #99e0cc",
              padding: "9px 14px",
              whiteSpace: "nowrap",
            }}
          >
            📥 EXPORT
          </button>
          <button
            className="btn"
            onClick={() => {
              setShowForm(true);
              setEditId(null);
              setForm(EMPTY);
            }}
            style={{
              background: "#3d5afe",
              color: "#fff",
              padding: "9px 16px",
              whiteSpace: "nowrap",
            }}
          >
            + ADD
          </button>
        </div>

        {/* ── Form ── */}
        {showForm && (
          <div
            style={{
              background: "#fff",
              border: "1px solid #d0d8f0",
              borderRadius: 12,
              padding: 24,
              marginBottom: 24,
              animation: "fadeIn .2s ease",
              boxShadow: "0 4px 16px rgba(0,0,0,.08)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                letterSpacing: ".15em",
                color: "#3d5afe",
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              {editId ? "✏️ EDIT COMPANY" : "➕ ADD NEW COMPANY"}
            </div>

            {/* Country toggle */}
            <div style={{ marginBottom: 16 }}>
              <Label>Country *</Label>
              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                {["MY", "HK"].map((ct) => (
                  <button
                    key={ct}
                    className="btn"
                    onClick={() => setForm((p) => ({ ...p, country: ct }))}
                    style={{
                      padding: "8px 20px",
                      fontSize: 13,
                      background:
                        form.country === ct ? COUNTRY_CFG[ct].color : "#f0f2f8",
                      color: form.country === ct ? "#fff" : "#8a94b8",
                      border: `1px solid ${
                        form.country === ct ? COUNTRY_CFG[ct].color : "#d0d8f0"
                      }`,
                      borderRadius: 6,
                    }}
                  >
                    {COUNTRY_CFG[ct].flag} {COUNTRY_CFG[ct].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Company info */}
            <div
              style={{
                background: "#f8f9ff",
                border: "1px solid #e8eaff",
                borderRadius: 8,
                padding: 16,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: ".15em",
                  color: "#3d5afe",
                  fontWeight: 600,
                  marginBottom: 14,
                }}
              >
                🏢 COMPANY INFORMATION
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                  gap: 12,
                }}
              >
                <Field label="Company Name *">
                  <input
                    placeholder="e.g. Petronas Sdn Bhd"
                    value={form.name}
                    onChange={f("name")}
                  />
                </Field>
                <Field label="Identification No">
                  <input
                    placeholder={
                      form.country === "HK"
                        ? "e.g. HK-2045678"
                        : "e.g. 197401000289"
                    }
                    value={form.identificationNo}
                    onChange={f("identificationNo")}
                  />
                </Field>
                <Field label="Director Name">
                  <input
                    placeholder="e.g. Tan Sri Ahmad"
                    value={form.director}
                    onChange={f("director")}
                  />
                </Field>
                <Field label="Incorporation Date">
                  <input
                    type="date"
                    value={form.incorporationDate}
                    onChange={f("incorporationDate")}
                  />
                </Field>
                <Field label="Category / Industry">
                  <input
                    placeholder="e.g. Banking, Telecom"
                    value={form.category}
                    onChange={f("category")}
                  />
                </Field>
                <Field label="Status">
                  <select value={form.status} onChange={f("status")}>
                    <option value="pending">Pending</option>
                    <option value="done">Done</option>
                  </select>
                </Field>
              </div>
            </div>

            {/* Due dates */}
            <div
              style={{
                background: "#f8fff9",
                border: "1px solid #d0f0e0",
                borderRadius: 8,
                padding: 16,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: ".15em",
                  color: "#00a87a",
                  fontWeight: 600,
                  marginBottom: 14,
                }}
              >
                📅 DUE DATES
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                  gap: 12,
                }}
              >
                <Field label="Tax Due Date" color="#00a87a">
                  <input
                    type="date"
                    value={form.taxDueDate}
                    onChange={f("taxDueDate")}
                  />
                </Field>
                <Field label="Audit Due Date" color="#00a87a">
                  <input
                    type="date"
                    value={form.auditDueDate}
                    onChange={f("auditDueDate")}
                  />
                </Field>
                {form.country === "HK" && (
                  <Field label="Annual Return Due Date (HK)" color="#de2910">
                    <input
                      type="date"
                      value={form.annualReturnDueDate}
                      onChange={f("annualReturnDueDate")}
                    />
                  </Field>
                )}
              </div>
            </div>

            {/* Fees */}
            <div
              style={{
                background: "#fffbf0",
                border: "1px solid #ffe8a0",
                borderRadius: 8,
                padding: 16,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: ".15em",
                  color: "#e6a800",
                  fontWeight: 600,
                  marginBottom: 14,
                }}
              >
                💰 PROFESSIONAL FEES (RM)
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
                  gap: 12,
                }}
              >
                <Field label="CoSec Fee (RM)">
                  <input
                    type="number"
                    placeholder="e.g. 3500"
                    value={form.cosecFee}
                    onChange={f("cosecFee")}
                  />
                </Field>
                <Field label="Audit Fee (RM)">
                  <input
                    type="number"
                    placeholder="e.g. 85000"
                    value={form.auditFee}
                    onChange={f("auditFee")}
                  />
                </Field>
                <Field label="Tax Fee (RM)">
                  <input
                    type="number"
                    placeholder="e.g. 42000"
                    value={form.taxFee}
                    onChange={f("taxFee")}
                  />
                </Field>
                <Field label="Other Fee (RM)">
                  <input
                    type="number"
                    placeholder="e.g. 12000"
                    value={form.otherFee}
                    onChange={f("otherFee")}
                  />
                </Field>
                <Field label="Total (Auto-calculated)">
                  <div
                    style={{
                      background: "#fff8e0",
                      border: "1px solid #ffe0a0",
                      borderRadius: 6,
                      padding: "9px 12px",
                      fontSize: 13,
                      color: "#996e00",
                      fontWeight: 700,
                    }}
                  >
                    RM{" "}
                    {(
                      (Number(form.cosecFee) || 0) +
                      (Number(form.auditFee) || 0) +
                      (Number(form.taxFee) || 0) +
                      (Number(form.otherFee) || 0)
                    ).toLocaleString("en-MY")}
                  </div>
                </Field>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <button
                className="btn"
                onClick={saveForm}
                style={{
                  background: "#3d5afe",
                  color: "#fff",
                  padding: "10px 24px",
                  fontSize: 13,
                }}
              >
                💾 SAVE
              </button>
              <button
                className="btn"
                onClick={() => setShowForm(false)}
                style={{
                  background: "#f0f2f8",
                  color: "#3d5afe",
                  border: "1px solid #d0d8f0",
                  padding: "10px 18px",
                  fontSize: 13,
                }}
              >
                CANCEL
              </button>
            </div>
          </div>
        )}

        <div
          style={{
            fontSize: 11,
            letterSpacing: ".12em",
            color: "#8a94b8",
            marginBottom: 14,
          }}
        >
          SHOWING {filtered.length} OF {companies.length} COMPANIES
        </div>

        {/* ── Cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(360px,1fr))",
            gap: 14,
          }}
        >
          {filtered.map((c) => {
            const cc = COUNTRY_CFG[c.country] || COUNTRY_CFG.MY;
            const expanded = expandId === c.id;
            return (
              <div
                key={c.id}
                className="card"
                style={{
                  background: "#fff",
                  border: `1px solid ${cc.border}`,
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,.06)",
                  opacity: c.status === "done" ? 0.6 : 1,
                }}
              >
                {/* Country banner */}
                <div
                  style={{
                    background: cc.bg,
                    borderBottom: `1px solid ${cc.border}`,
                    padding: "8px 14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      color: cc.color,
                      fontWeight: 600,
                      letterSpacing: ".06em",
                    }}
                  >
                    {cc.flag} {cc.label}
                  </div>
                  {c.status === "done" && (
                    <div
                      style={{
                        fontSize: 9,
                        background: "#e8faf4",
                        color: "#00a87a",
                        border: "1px solid #99e0cc",
                        borderRadius: 4,
                        padding: "2px 8px",
                        letterSpacing: ".1em",
                      }}
                    >
                      ✓ DONE
                    </div>
                  )}
                </div>

                <div style={{ padding: 14 }}>
                  {/* Company name + ID */}
                  <div style={{ marginBottom: 10 }}>
                    <div
                      style={{
                        fontFamily: "Syne,sans-serif",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#1a2040",
                      }}
                    >
                      {c.name}
                    </div>
                    <div
                      style={{ fontSize: 10, color: "#8a94b8", marginTop: 2 }}
                    >
                      <span style={{ color: "#3d5afe" }}>
                        {c.identificationNo || "No ID"}
                      </span>{" "}
                      · {c.category}
                    </div>
                  </div>

                  {/* Director + Incorporated */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 8,
                      background: "#f5f7ff",
                      border: "1px solid #e0e5ff",
                      borderRadius: 6,
                      padding: "8px 10px",
                      marginBottom: 12,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 9,
                          letterSpacing: ".1em",
                          color: "#8a94b8",
                        }}
                      >
                        👤 DIRECTOR
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#1a2040",
                          fontWeight: 500,
                          marginTop: 2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {c.director || "—"}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 9,
                          letterSpacing: ".1em",
                          color: "#8a94b8",
                        }}
                      >
                        🏛 INCORPORATED
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#1a2040",
                          fontWeight: 500,
                          marginTop: 2,
                        }}
                      >
                        {fmt(c.incorporationDate)}
                      </div>
                    </div>
                  </div>

                  {/* Due dates */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        c.country === "HK" ? "1fr 1fr 1fr" : "1fr 1fr",
                      gap: 8,
                      marginBottom: 12,
                    }}
                  >
                    <DuePill label="📋 TAX DUE" date={c.taxDueDate} />
                    <DuePill label="🔍 AUDIT DUE" date={c.auditDueDate} />
                    {c.country === "HK" && (
                      <DuePill
                        label="📁 ANNUAL RETURN"
                        date={c.annualReturnDueDate}
                      />
                    )}
                  </div>

                  {/* Fee summary */}
                  <div
                    style={{
                      background: "#fffbf0",
                      border: "1px solid #ffe8a0",
                      borderRadius: 6,
                      padding: "8px 10px",
                      marginBottom: 12,
                      cursor: "pointer",
                    }}
                    onClick={() => setExpandId(expanded ? null : c.id)}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 9,
                          letterSpacing: ".1em",
                          color: "#8a94b8",
                        }}
                      >
                        💰 TOTAL FEES
                      </div>
                      <div style={{ fontSize: 9, color: "#e6a800" }}>
                        {expanded ? "▲ HIDE" : "▼ BREAKDOWN"}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 15,
                        fontFamily: "Syne,sans-serif",
                        fontWeight: 700,
                        color: "#e6a800",
                        marginTop: 2,
                      }}
                    >
                      {fmtMYR(totalFees(c))}
                    </div>
                    {expanded && (
                      <div
                        style={{
                          marginTop: 10,
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: 6,
                          animation: "fadeIn .15s ease",
                        }}
                      >
                        {[
                          ["CoSec Fee", c.cosecFee],
                          ["Audit Fee", c.auditFee],
                          ["Tax Fee", c.taxFee],
                          ["Other Fee", c.otherFee],
                        ].map(([lbl, val]) => (
                          <div
                            key={lbl}
                            style={{
                              background: "#fff8e0",
                              borderRadius: 4,
                              padding: "6px 8px",
                            }}
                          >
                            <div style={{ fontSize: 9, color: "#8a94b8" }}>
                              {lbl}
                            </div>
                            <div
                              style={{
                                fontSize: 12,
                                color: "#1a2040",
                                fontWeight: 500,
                                marginTop: 1,
                              }}
                            >
                              {fmtMYR(val)}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div style={{ display: "flex", gap: 6 }}>
                    {c.status !== "done" && (
                      <button
                        className="btn"
                        onClick={() => markDone(c.id)}
                        style={{
                          background: "#e8faf4",
                          color: "#00a87a",
                          border: "1px solid #00a87a40",
                          padding: "6px 10px",
                          flex: 1,
                        }}
                      >
                        ✓ DONE
                      </button>
                    )}
                    <button
                      className="btn"
                      onClick={() => openEdit(c)}
                      style={{
                        background: "#eef1ff",
                        color: "#3d5afe",
                        border: "1px solid #c5cfff",
                        padding: "6px 10px",
                        flex: 1,
                      }}
                    >
                      ✏️ EDIT
                    </button>
                    <button
                      className="btn"
                      onClick={() => deleteEntry(c.id)}
                      style={{
                        background: "#fff0f3",
                        color: "#ff2d55",
                        border: "1px solid #ff2d5530",
                        padding: "6px 10px",
                      }}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 0",
              color: "#8a94b8",
              fontSize: 13,
              letterSpacing: ".1em",
            }}
          >
            NO ENTRIES MATCH YOUR FILTERS
          </div>
        )}
      </div>
    </div>
  );
}
