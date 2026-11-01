# marketdata-client-rest

A portfolio valuation service on the Market Data **REST** API (v1), in TypeScript with no
dependencies (Node 22.6+).

```sh
npm test           # values a position and checks volatility against the live API
npm start          # prints a valuation of a sample book
```

`src/marketdata.ts` is the API client. When Market Data releases v2, biject (installed on this
repository) moves the base URL and the candles endpoint, adapts the renamed fields, runs the
tests against the v2 contract mock and opens a PR.

## Try biject on your own copy

1. **Use this template** (top right) → create the repository in your own account.
2. [Install biject](https://biject-demo.vercel.app/migrate/samirovsky/marketdata) on your copy
   only. That's the whole setup.
3. biject runs the migration **in your own GitHub Actions** (your code never leaves your CI)
   and opens a pull request: every changed call site labelled, your tests run against the v2
   contract mock.
