# marketdata-client-rest

A portfolio valuation service on the Tickerline market data **REST** API (v1), in
TypeScript with no dependencies (Node 22.6+).

```sh
npm test           # values a position and checks volatility against the live API
npm start          # prints a valuation of a sample book
```

`src/tickerline.ts` is the API client. When Tickerline releases v2, **Migrate my client**
on its migration guide installs biject on this repository; biject moves the base URL and
the candles endpoint, adapts the renamed fields, runs the tests against Tickerline's
contract mock and opens a PR.
