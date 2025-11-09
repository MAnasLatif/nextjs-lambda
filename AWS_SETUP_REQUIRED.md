# ⚠️ AWS Configuration Required

## You're Almost There! 🎯

Your code is on GitHub, and you're ready to deploy to AWS Lambda. However, AWS credentials need to be configured first.

## 🔑 Step 1: Get AWS Credentials

### Option A: If you have an AWS Account

1. **Go to AWS IAM Console**: https://console.aws.amazon.com/iam/
2. **Navigate to Users**:
   - Click "Users" in the left sidebar
   - Select your username (or create a new IAM user)
3. **Go to Security Credentials**:
   - Click the "Security credentials" tab
4. **Create Access Key**:
   - Scroll to "Access keys"
   - Click "Create access key"
   - Choose "Command Line Interface (CLI)"
   - Check the confirmation box
   - Click "Next" and then "Create access key"
5. **Download Credentials**:
   - Save the **Access Key ID** and **Secret Access Key**
   - ⚠️ You won't be able to see the secret key again!

### Option B: If you DON'T have an AWS Account

1. **Sign up for AWS**: https://aws.amazon.com/free/
2. **Free Tier includes**:
   - 1,000,000 Lambda requests per month (FREE)
   - 400,000 GB-seconds compute time (FREE)
   - This project will easily stay within free tier!
3. **After signup**, follow Option A to create access keys

## 🔧 Step 2: Configure AWS CLI

Run this command in your terminal:

```bash
aws configure
```

You'll be prompted for 4 values:

```
AWS Access Key ID [None]: AKIA................  # Your access key
AWS Secret Access Key [None]: ................  # Your secret key
Default region name [None]: us-east-1           # Recommended region
Default output format [None]: json              # Recommended format
```

### Example Configuration Session

```bash
$ aws configure
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: us-east-1
Default output format [None]: json
```

## ✅ Step 3: Verify Configuration

After configuring, verify it works:

```bash
aws sts get-caller-identity
```

You should see output like:

```json
{
  "UserId": "AIDAI...",
  "Account": "123456789012",
  "Arn": "arn:aws:iam::123456789012:user/YourUsername"
}
```

## 🚀 Step 4: Deploy to AWS Lambda

Once AWS is configured, deploy your app:

```bash
cd /Users/manaslatif/Documents/Zubair/nextjs-lambda
serverless deploy
```

Expected output:

```
Deploying nextjs-lambda-app to stage dev (us-east-1)

✔ Service deployed to stack nextjs-lambda-app-dev (45s)

endpoint: https://abc123xyz456.lambda-url.us-east-1.on.aws
functions:
  app: nextjs-lambda-app-dev-app (52 MB)
```

## 📋 Required IAM Permissions

Your AWS user needs these permissions to deploy:

- `AWSLambdaFullAccess` - To create Lambda functions
- `AmazonS3FullAccess` - To upload deployment packages
- `CloudFormationFullAccess` - To manage infrastructure
- `IAMFullAccess` - To create Lambda execution roles

You can attach these policies in the IAM console:

1. Go to Users → Your User
2. Click "Add permissions"
3. Choose "Attach policies directly"
4. Search and attach the policies above

## 💰 Cost Information

**AWS Lambda Free Tier (Always Free)**:

- 1,000,000 requests per month
- 400,000 GB-seconds of compute time per month

**This demo project**: Will use approximately:

- ~10-50 requests during testing
- ~1-5 MB memory × ~1-2 seconds per request
- **Total cost**: $0.00 (well within free tier)

## 🔍 Troubleshooting

### "Unable to locate credentials"

**Solution**: Run `aws configure` with valid credentials

### "Access Denied" errors

**Solution**: Ensure your IAM user has the required permissions listed above

### "User not authorized"

**Solution**: Your AWS user needs Lambda, S3, CloudFormation, and IAM permissions

## 📚 Quick Command Reference

```bash
# Configure AWS
aws configure

# Verify configuration
aws sts get-caller-identity

# Deploy to Lambda
serverless deploy

# View logs
serverless logs -f app --tail

# Remove deployment
serverless remove
```

## 🎯 After Deployment

Once deployed successfully, you'll have:

1. ✅ **GitHub Repository**: https://github.com/MAnasLatif/nextjs-lambda
2. ✅ **Live Lambda URL**: https://your-id.lambda-url.us-east-1.on.aws
3. ✅ **Two Working Pages**:
   - Home: `/`
   - About: `/about`

## ⚡ What To Do NOW

1. **Run**: `aws configure`
2. **Enter your AWS credentials** (Access Key ID and Secret Access Key)
3. **Then run**: `serverless deploy`
4. **Copy and share** your Lambda URL!

---

**Status**: ⏳ Waiting for AWS credentials configuration  
**Next**: Run `aws configure` to set up your AWS credentials, then `serverless deploy`
