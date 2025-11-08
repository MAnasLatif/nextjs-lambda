# Publishing to GitHub and Deploying to AWS Lambda

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository settings:
   - **Name**: `nextjs-lambda` (or your preferred name)
   - **Description**: "Next.js application deployed on AWS Lambda with Serverless Framework"
   - **Visibility**: Public ✅
   - **DO NOT** initialize with README (we already have one)
4. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Set the remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/nextjs-lambda.git

# Verify the remote
git remote -v

# Push to GitHub
git push -u origin main
```

Example (replace with your actual username):
```bash
git remote add origin https://github.com/manaslatif/nextjs-lambda.git
git push -u origin main
```

## Step 3: Configure AWS Credentials

If you haven't configured AWS CLI yet:

```bash
aws configure
```

You'll be prompted for:
- **AWS Access Key ID**: Your AWS access key
- **AWS Secret Access Key**: Your secret key
- **Default region**: `us-east-1` (or your preferred region)
- **Default output format**: `json`

### Getting AWS Credentials

1. Go to [AWS IAM Console](https://console.aws.amazon.com/iam/)
2. Click "Users" → Select your user (or create one)
3. Go to "Security credentials" tab
4. Click "Create access key"
5. Choose "Command Line Interface (CLI)"
6. Download and save the credentials securely

### Required IAM Permissions

Your AWS user needs these permissions:
- `AWSLambdaFullAccess`
- `AmazonS3FullAccess` (for deployment artifacts)
- `CloudFormationFullAccess`
- `IAMFullAccess` (to create Lambda execution role)

## Step 4: Deploy to AWS Lambda

```bash
# Install Serverless Framework globally (if not already installed)
npm install -g serverless

# Verify serverless is installed
serverless --version

# Deploy to AWS
serverless deploy
```

Expected output:
```
Deploying nextjs-lambda-app to stage dev (us-east-1)

✔ Service deployed to stack nextjs-lambda-app-dev (45s)

endpoint: https://abc123xyz.lambda-url.us-east-1.on.aws
functions:
  app: nextjs-lambda-app-dev-app (52 MB)
```

## Step 5: Test Your Deployment

1. Copy the **endpoint URL** from the deployment output
2. Open it in your browser
3. You should see your Next.js application running!
4. Test both pages:
   - Home: `https://your-url.lambda-url.us-east-1.on.aws/`
   - About: `https://your-url.lambda-url.us-east-1.on.aws/about`

## Step 6: Update README with Live URL

Update the README.md file with your actual Lambda URL:

```bash
# Edit README.md and replace:
**Lambda Function URL:** *(Will be provided after deployment)*

# With your actual URL:
**Lambda Function URL:** https://your-url.lambda-url.us-east-1.on.aws
```

Then commit and push:
```bash
git add README.md
git commit -m "Add deployed Lambda URL to README"
git push
```

## Repository URL

After completing these steps, share these URLs:

- **GitHub Repository**: `https://github.com/YOUR_USERNAME/nextjs-lambda`
- **Live Application**: `https://your-url.lambda-url.us-east-1.on.aws`

## Monitoring and Management

### View Logs
```bash
serverless logs -f app --tail
```

### View Deployment Info
```bash
serverless info
```

### Update Deployment
```bash
npm run build
serverless deploy
```

### Remove from AWS (cleanup)
```bash
serverless remove
```

## Troubleshooting

### Issue: "AWS Credentials not found"
**Solution**: Run `aws configure` with valid credentials

### Issue: "Insufficient permissions"
**Solution**: Ensure IAM user has required permissions (see above)

### Issue: "Deployment package too large"
**Solution**: Already optimized, but you can add more patterns to `serverless.yml` exclude list

### Issue: "Function times out"
**Solution**: Increase timeout in `serverless.yml`:
```yaml
provider:
  timeout: 60  # Increase from 30 to 60 seconds
```

## Cost Information

AWS Lambda Free Tier (always free):
- 1M requests per month
- 400,000 GB-seconds compute time

**For this project**: Likely FREE for testing and moderate use!

## Next Steps

1. ✅ Customize the pages (edit `app/page.tsx` and `app/about/page.tsx`)
2. ✅ Add more pages as needed
3. ✅ Redeploy: `npm run build && serverless deploy`
4. ✅ Monitor usage in AWS CloudWatch
5. ✅ Share your GitHub repo and Lambda URL!

## Support

If you encounter issues:
1. Check the [Troubleshooting](#troubleshooting) section
2. Review AWS CloudWatch logs
3. Verify AWS credentials and permissions
4. Check the GitHub repository issues

---

**Ready to deploy?** Follow the steps above and you'll have your Next.js app running on AWS Lambda in minutes!
