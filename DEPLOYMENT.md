# Quick Deployment Guide

## Step-by-Step Deployment

### 1. Build the Application

```bash
npm run build
```

### 2. Verify AWS Credentials

```bash
aws sts get-caller-identity
```

You should see your AWS account information. If not, run:

```bash
aws configure
```

### 3. Deploy to AWS Lambda

```bash
serverless deploy
```

This will:

- Package your Next.js application
- Create/update Lambda function
- Create Function URL
- Deploy to AWS

### 4. Access Your Application

After deployment, you'll see output like:

```
endpoint: https://abcd1234.lambda-url.us-east-1.on.aws
```

Copy this URL and open it in your browser!

## Updating the Application

1. Make changes to your code
2. Rebuild: `npm run build`
3. Redeploy: `serverless deploy`

## Removing from AWS

To clean up all resources:

```bash
serverless remove
```

## Testing Locally

Before deploying, test locally:

```bash
npm run dev
```

Visit http://localhost:3000

## Common Commands

| Command                  | Description          |
| ------------------------ | -------------------- |
| `npm run dev`            | Run locally          |
| `npm run build`          | Build for production |
| `serverless deploy`      | Deploy to AWS        |
| `serverless logs -f app` | View logs            |
| `serverless info`        | Show deployment info |
| `serverless remove`      | Delete from AWS      |

## Troubleshooting

**Issue**: Permission denied during deployment
**Solution**: Ensure your AWS user has Lambda and CloudFormation permissions

**Issue**: Function times out
**Solution**: Increase timeout in `serverless.yml` (currently 30s)

**Issue**: Package too large
**Solution**: Already optimized with Next.js standalone output

## Cost

AWS Lambda Free Tier includes:

- 1,000,000 requests per month
- 400,000 GB-seconds of compute time

This project easily fits within free tier for moderate usage!
