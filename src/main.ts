import { value } from "./portfolio.ts";

const book = [
  { symbol: "TLX", shares: 120 },
  { symbol: "ORBT", shares: 400 },
  { symbol: "KELP", shares: 1500 },
];

for (const v of await value(book)) {
  console.log(`${v.symbol.padEnd(5)} ${v.value.toFixed(2).padStart(12)} ${v.currency}  vol ${(v.volatility * 100).toFixed(2)}%  (${v.asOf})`);
}
