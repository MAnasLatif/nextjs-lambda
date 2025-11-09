# ⚠️ IAM Permissions Required for Deployment

## Current Status

Your AWS credentials are configured, but the IAM user `manaslatif` is missing required permissions to deploy Lambda functions using Serverless Framework.

## 🔐 Required IAM Permissions

Your IAM user needs the following AWS permissions to deploy:

### 1. Lambda Permissions

- `lambda:CreateFunction`
- `lambda:UpdateFunctionCode`
- `lambda:UpdateFunctionConfiguration`
- `lambda:GetFunction`
- `lambda:DeleteFunction`
- `lambda:AddPermission`
- `lambda:CreateFunctionUrlConfig`
- `lambda:GetFunctionUrlConfig`

### 2. CloudWatch Logs Permissions

- `logs:CreateLogGroup`
- `logs:DeleteLogGroup`
- `logs:DescribeLogGroups`
- `logs:PutRetentionPolicy`

### 3. IAM Permissions

- `iam:CreateRole`
- `iam:PutRolePolicy`
- `iam:GetRole`
- `iam:PassRole`
- `iam:DeleteRole`
- `iam:DeleteRolePolicy`

### 4. CloudFormation Permissions

- `cloudformation:CreateStack`
- `cloudformation:UpdateStack`
- `cloudformation:DeleteStack`
- `cloudformation:DescribeStacks`
- `cloudformation:DescribeStackEvents`
- `cloudformation:DescribeStackResource`
- `cloudformation:DescribeStackResources`
- `cloudformation:GetTemplate`
- `cloudformation:ValidateTemplate`

### 5. S3 Permissions

- `s3:CreateBucket`
- `s3:PutObject`
- `s3:GetObject`
- `s3:ListBucket`

## 📋 Quick Fix: Use AWS Managed Policies

The easiest solution is to attach these AWS managed policies to your IAM user:

1. **AWSLambda_FullAccess** - For Lambda functions
2. **CloudWatchLogsFullAccess** - For CloudWatch Logs
3. **IAMFullAccess** - For creating IAM roles
4. **AmazonS3FullAccess** - For S3 deployment bucket
5. **AWSCloudFormationFullAccess** - For CloudFormation stacks

## 🔧 How to Add Permissions

### Via AWS Console:

1. Go to: https://console.aws.amazon.com/iam/
2. Click "Users" → Select `manaslatif`
3. Click "Add permissions" → "Attach policies directly"
4. Search and select the policies listed above
5. Click "Add permissions"

### Via AWS CLI (if you have admin access):

```bash
aws iam attach-user-policy --user-name manaslatif --policy-arn arn:aws:iam::aws:policy/AWSLambda_FullAccess
aws iam attach-user-policy --user-name manaslatif --policy-arn arn:aws:iam::aws:policy/CloudWatchLogsFullAccess
aws iam attach-user-policy --user-name manaslatif --policy-arn arn:aws:iam::aws:policy/IAMFullAccess
aws iam attach-user-policy --user-name manaslatif --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess
aws iam attach-user-policy --user-name manaslatif --policy-arn arn:aws:iam::aws:policy/AWSCloudFormationFullAccess
```

## 📝 Custom IAM Policy (Minimal Permissions)

If you prefer minimal permissions, create a custom policy with this JSON:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "LambdaPermissions",
      "Effect": "Allow",
      "Action": ["lambda:*"],
      "Resource": "*"
    },
    {
      "Sid": "CloudWatchLogsPermissions",
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "logs:DeleteLogGroup",
        "logs:DescribeLogGroups",
        "logs:PutRetentionPolicy"
      ],
      "Resource": "arn:aws:logs:*:*:*"
    },
    {
      "Sid": "IAMPermissions",
      "Effect": "Allow",
      "Action": [
        "iam:CreateRole",
        "iam:PutRolePolicy",
        "iam:GetRole",
        "iam:PassRole",
        "iam:DeleteRole",
        "iam:DeleteRolePolicy",
        "iam:AttachRolePolicy",
        "iam:DetachRolePolicy"
      ],
      "Resource": "arn:aws:iam::*:role/*"
    },
    {
      "Sid": "CloudFormationPermissions",
      "Effect": "Allow",
      "Action": ["cloudformation:*"],
      "Resource": "*"
    },
    {
      "Sid": "S3Permissions",
      "Effect": "Allow",
      "Action": ["s3:*"],
      "Resource": [
        "arn:aws:s3:::nextjs-lambda-deployment-*",
        "arn:aws:s3:::nextjs-lambda-deployment-*/*"
      ]
    }
  ]
}
```

## ✅ After Adding Permissions

Once the permissions are added:

1. **No need to reconfigure AWS CLI** - credentials remain the same
2. **Run deployment again**:

   ```bash
   cd /Users/manaslatif/Documents/Zubair/nextjs-lambda
   serverless deploy
   ```

3. **You should see**:

   ```
   ✔ Service deployed to stack nextjs-aws-lambda-dev

   endpoint: https://your-url.lambda-url.us-east-1.on.aws
   functions:
     app: nextjs-aws-lambda-dev-app
   ```

## 🆘 Need Help?

If you don't have access to add these permissions yourself:

1. Contact your AWS account administrator
2. Share this document with them
3. Request the policies listed above

## 🔗 Current Configuration

- **AWS Account**: 420747712829
- **IAM User**: manaslatif
- **Region**: us-east-1
- **Deployment Bucket**: nextjs-lambda-deployment-1762642299

---

**Status**: ⏳ Waiting for IAM permissions to be added  
**Next**: After permissions are added, run `serverless deploy`
