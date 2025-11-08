# Next.js on AWS Lambda with Serverless FrameworkThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

A production-ready Next.js 15 application deployed on AWS Lambda using the Serverless Framework. This project demonstrates how to run a modern Next.js app with TypeScript, Tailwind CSS, and the App Router in a serverless environment.## Getting Started

## 🚀 Live DemoFirst, run the development server:

**Lambda Function URL:** _(Will be provided after deployment)_```bash

npm run dev

## 📋 Features# or

yarn dev

- ✅ **Next.js 15** - Latest version with App Router# or

- ✅ **TypeScript** - Full type safetypnpm dev

- ✅ **Tailwind CSS** - Modern utility-first CSS framework# or

- ✅ **Serverless Framework** - Infrastructure as Codebun dev

- ✅ **AWS Lambda** - Pay-per-use serverless compute```

- ✅ **Function URLs** - Direct HTTP access to Lambda functions

- ✅ **Two Sample Pages** - Home and About pagesOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ ArchitectureYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This application uses:This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- **Next.js Standalone Output** - Optimized for serverless deployment

- **Express.js** - HTTP server wrapper for Lambda compatibility## Learn More

- **serverless-http** - Adapter to run Express apps in AWS Lambda

- **Lambda Function URL** - Direct public endpoint (no API Gateway needed)To learn more about Next.js, take a look at the following resources:

## 📦 Prerequisites- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Before deploying, ensure you have:

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

1. **Node.js** (v18 or higher)

2. **AWS Account** with appropriate permissions## Deploy on Vercel

3. **AWS CLI** configured with credentials:

   ````bashThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

   aws configure

   ```Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

   ````

4. **Serverless Framework** installed globally:
   ```bash
   npm install -g serverless
   ```

## 🛠️ Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   cd nextjs-lambda
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the Next.js application:
   ```bash
   npm run build
   ```

## 🚀 Deployment

### Deploy to AWS Lambda

1. Make sure your AWS credentials are configured:

   ```bash
   aws sts get-caller-identity
   ```

2. Deploy using Serverless Framework:

   ```bash
   serverless deploy
   ```

3. After deployment, you'll receive a Function URL that looks like:

   ```
   https://xxxxxxxxxx.lambda-url.us-east-1.on.aws/
   ```

4. Visit the URL to see your deployed application!

### Deployment Output

After running `serverless deploy`, you'll see:

```
✔ Service deployed to stack nextjs-lambda-app-dev (XXs)

endpoint: https://xxxxxxxxxx.lambda-url.us-east-1.on.aws
functions:
  app: nextjs-lambda-app-dev-app (XX MB)
```

## 🏃‍♂️ Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
nextjs-lambda/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Home page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── public/                  # Static assets
├── handler.js               # Lambda function handler
├── serverless.yml           # Serverless Framework configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies
└── README.md               # This file
```

## 🔧 Configuration

### serverless.yml

Key configuration options:

```yaml
provider:
  runtime: nodejs20.x # Node.js version
  region: us-east-1 # AWS region
  memorySize: 1024 # Lambda memory (MB)
  timeout: 30 # Timeout (seconds)

functions:
  app:
    handler: handler.handler # Lambda handler
    url: true # Enable Function URL
```

### next.config.ts

Important settings for Lambda:

```typescript
const nextConfig: NextConfig = {
  output: 'standalone',       // Required for Lambda
  images: {
    unoptimized: true,        # Disable image optimization
  },
};
```

## 💰 Cost Estimation

With AWS Lambda, you pay only for what you use:

- **Free Tier**: 1M requests/month + 400,000 GB-seconds compute
- **After Free Tier**: ~$0.20 per 1M requests
- **Example**: 10,000 requests/month = FREE

## 🔄 Updates & Redeployment

To update your application:

1. Make your changes
2. Rebuild: `npm run build`
3. Redeploy: `serverless deploy`

## 🗑️ Cleanup

To remove all AWS resources:

```bash
serverless remove
```

This will delete the Lambda function and all associated resources.

## 📊 Monitoring

View logs:

```bash
serverless logs -f app --tail
```

Or use AWS CloudWatch console to view detailed logs and metrics.

## 🔍 Troubleshooting

### Common Issues

1. **Deployment fails**

   - Check AWS credentials: `aws sts get-caller-identity`
   - Verify IAM permissions for Lambda and CloudFormation

2. **Function times out**

   - Increase `timeout` in `serverless.yml`
   - Check Lambda logs for errors

3. **Cold starts**
   - First request may be slow (2-3 seconds)
   - Subsequent requests are fast (<100ms)
   - Consider using Lambda provisioned concurrency for production

## 🌟 Features Comparison

| Feature    | Traditional EC2 | AWS Lambda       |
| ---------- | --------------- | ---------------- |
| Cost       | Always running  | Pay per use      |
| Scaling    | Manual          | Automatic        |
| Management | Full control    | Fully managed    |
| Cold start | None            | 1-3 seconds      |
| Best for   | High traffic    | Variable traffic |

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Serverless Framework](https://www.serverless.com/framework/docs)
- [AWS Lambda](https://docs.aws.amazon.com/lambda/)
- [Lambda Function URLs](https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 👨‍💻 Author

Created as a demonstration of Next.js deployment on AWS Lambda.

---

**Note**: Make sure to update the Lambda Function URL in this README after deployment!
