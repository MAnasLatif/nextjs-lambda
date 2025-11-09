#!/bin/bash

# Professional Next.js deployment script for AWS S3 + CloudFront

set -e

BUCKET_NAME="nextjs-lambda-website-${RANDOM}"
REGION="us-east-1"

echo "🚀 Building Next.js application..."
npm run build

echo "📦 Creating S3 bucket: $BUCKET_NAME"
aws s3 mb s3://$BUCKET_NAME --region $REGION

echo "🌐 Configuring bucket for website hosting..."
aws s3 website s3://$BUCKET_NAME \
  --index-document index.html \
  --error-document 404.html

echo "📤 Uploading files to S3..."
aws s3 sync out/ s3://$BUCKET_NAME --delete

echo "🔓 Making bucket publicly readable..."
aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy '{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::'$BUCKET_NAME'/*"
  }]
}'

WEBSITE_URL="http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"

echo ""
echo "✅ Deployment successful!"
echo ""
echo "🌐 Website URL: $WEBSITE_URL"
echo "📦 S3 Bucket: $BUCKET_NAME"
echo ""
echo "To add CloudFront CDN, run:"
echo "  aws cloudfront create-distribution --origin-domain-name $BUCKET_NAME.s3-website-$REGION.amazonaws.com"
echo ""
