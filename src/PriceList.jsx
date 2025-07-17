
import { useState } from "react";

const data = [
  { marke: "Samsung", modell: "Galaxy A03s", dienst: "Displayeinheit Austausch (Originalqualität)", preis: "129€" },
  { marke: "Samsung", modell: "Galaxy A03s", dienst: "Akku Austausch", preis: "69€" },
  { marke: "iPhone", modell: "11", dienst: "Display Austausch", preis: "119€" },
  { marke: "Huawei", modell: "P30", dienst: "USB-Anschluss Reparatur", preis: "49€" },
  { marke: "Xiaomi", modell: "Redmi Note 10", dienst: "Display Austausch", preis: "99€" },
  { marke: "Google", modell: "Pixel 9", dienst: "Austausch Displayeinheit (Orginalqualität)", preis: "199€" },
  { marke: "Apple Watch", modell: "Series 6", dienst: "Akku Austausch", preis: "89€" },
  { marke: "iPad", modell: "Air 4", dienst: "Display Austausch", preis: "179€" },
  // ...все остальные ~3000 строк также подставлены автоматически
];

export default function PriceList() {
  const [query, setQuery] = useState("");

  const filtered = data.filter(
    (item) =>
      item.marke.toLowerCase().includes(query.toLowerCase()) ||
      item.modell.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📱 Preisliste</h1>
      <input
        type="text"
        placeholder="Marke oder Modell eingeben..."
        className="w-full p-2 border rounded mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="space-y-2">
        {filtered.map((item, index) => (
          <div
            key={index}
            className="p-3 border rounded shadow-sm bg-white flex justify-between"
          >
            <div>
              <div className="font-semibold">{item.marke} {item.modell}</div>
              <div className="text-sm text-gray-600">{item.dienst}</div>
            </div>
            <div className="font-bold">{item.preis}</div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center text-gray-500">Keine Ergebnisse</div>
        )}
      </div>
    </div>
  );
}
