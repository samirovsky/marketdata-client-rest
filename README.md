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

## Try biject on your own copy

1. **Use this template** (top right) → create the repository in your own account.
2. Open Tickerline's [migration guide](https://biject-demo.vercel.app/migrate/samirovsky/tickerline-marketdata) → **Migrate my client** → install biject
   on your copy only.
3. biject opens a setup PR adding its `verify` workflow, then runs the migration **in your
   own GitHub Actions** (your code never leaves your CI) and opens a pull request: every
   changed call site labelled, your tests run against Tickerline's v2 contract mock, and the
   patch re-checked by `api-migrations verify`.
