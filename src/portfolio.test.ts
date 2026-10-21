import { test } from "node:test";
import assert from "node:assert/strict";
import { value, volatility } from "./portfolio.ts";

test("volatility of a flat series is zero", () => {
  assert.equal(volatility([10, 10, 10]), 0);
  assert.ok(volatility([10, 11, 9, 12]) > 0);
});

test("a position is valued at the latest quote", async () => {
  const [v] = await value([{ symbol: "TLX", shares: 10 }]);
  assert.equal(v!.symbol, "TLX");
  assert.ok(v!.value > 0);
  assert.match(v!.currency, /^(USD|EUR)$/);
  assert.ok(!Number.isNaN(Date.parse(v!.asOf)));
  assert.ok(v!.volatility >= 0);
});
