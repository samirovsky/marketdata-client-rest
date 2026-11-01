// The Market Data client: quotes and daily candles over REST.

const BASE = "https://marketdata-api.vercel.app/v1";

export interface Quote {
  symbol: string;
  price: number;
  currency: string;
  timestamp: string;
}

export interface Candle {
  t: string;
  c: number;
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, { headers: { "X-Marketdata-Key": process.env.MARKETDATA_KEY ?? "demo" } });
  if (!res.ok) throw new Error(`Market Data ${path}: ${res.status}`);
  return (await res.json()) as T;
}

export async function latestQuote(symbol: string): Promise<Quote> {
  const q = await get<Quote>(`/quotes/${encodeURIComponent(symbol)}`);
  return { symbol: q.symbol, price: q.price, currency: q.currency, timestamp: q.timestamp };
}

export async function dailyCloses(symbol: string, days: number): Promise<number[]> {
  const candles = await get<Candle[]>(`/candles/${encodeURIComponent(symbol)}?interval=1d&limit=${days}`);
  return candles.map((c) => c.c);
}
