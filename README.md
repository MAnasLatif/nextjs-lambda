# Next.js on AWS Lambda

A Next.js 15 application deployed on AWS Lambda using the Serverless Framework.

## 🔗 Links

- **GitHub**: [https://github.com/MAnasLatif/nextjs-lambda](https://github.com/MAnasLatif/nextjs-lambda)
- **Live Demo**: [https://mtms7xe4ayr5ypd6t4clpe3sdm0ifqff.lambda-url.us-east-1.on.aws/](https://mtms7xe4ayr5ypd6t4clpe3sdm0ifqff.lambda-url.us-east-1.on.aws/)

## 🚀 Features

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- AWS Lambda deployment
- Serverless Framework
- Lambda Function URL (no API Gateway)

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
```

## 🚀 Deploy to AWS Lambda

```bash
serverless deploy
```

## 🗑️ Remove from AWS

```bash
serverless remove
```

## 📁 Project Structure

```
nextjs-lambda/
├── app/                 # Next.js App Router
│   ├── page.tsx        # Home page
│   ├── about/
│   │   └── page.tsx    # About page
│   └── layout.tsx      # Root layout
├── handler.js          # Lambda function handler
├── serverless.yml      # Serverless configuration
├── next.config.ts      # Next.js configuration
└── package.json        # Dependencies
```

## 📄 License

MIT
