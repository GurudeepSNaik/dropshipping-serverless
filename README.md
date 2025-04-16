
# 🛍️ Dropshipping Lambda Backend

This is a Serverless project using AWS Lambda, written in TypeScript, and bundled with esbuild.

## 📦 Scripts

### ▶️ Invoke Lambda Functions Locally

We use a custom dynamic script to invoke any Lambda function locally with input data.

#### ✅ Usage

```bash
npm run invoke <functionName> <jsonPayload>
```

#### 🧪 Example

```bash
npm run invoke createSalesOrder '{"id":"12345"}'
```

> 🔁 You can replace `createSalesOrder` with any other function name defined in `serverless.yml`.

---

## 📂 Project Structure

```
.
├── src/
│   └── handlers/
│       └── sales/
│           └── createSalesOrder.ts
│   └── services/
│   └── utils/
├── scripts/
│   └── invoke.js        # Dynamic invoke script
├── serverless.yml
├── tsconfig.json
├── package.json
└── README.md
```

## 🚀 Deploy

```bash
npx serverless deploy
```

## 🔧 Build

```bash
npm run build
```
