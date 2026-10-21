// Values a portfolio of positions at the latest quotes, with a 30-day volatility.
import { dailyCloses, latestQuote } from "./tickerline.ts";

export interface Position {
  symbol: string;
  shares: number;
}

export interface Valuation {
  symbol: string;
  value: number;
  currency: string;
  asOf: string;
  volatility: number;
}

/** Standard deviation of daily returns. */
export function volatility(closes: number[]): number {
  const returns = closes.slice(1).map((c, i) => c / closes[i]! - 1);
  if (returns.length === 0) return 0;
  const mean = returns.reduce((a, b) => a + b, 0) / returns.length;
  return Math.sqrt(returns.reduce((a, r) => a + (r - mean) ** 2, 0) / returns.length);
}

export async function value(positions: Position[]): Promise<Valuation[]> {
  return Promise.all(
    positions.map(async (p) => {
      const q = await latestQuote(p.symbol);
      return {
        symbol: q.symbol,
        value: Math.round(q.price * p.shares * 100) / 100,
        currency: q.currency,
        asOf: q.timestamp,
        volatility: volatility(await dailyCloses(p.symbol, 30)),
      };
    }),
  );
}
