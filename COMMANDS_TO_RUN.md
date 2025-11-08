# 🚀 EXECUTE THESE COMMANDS

## Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `nextjs-lambda`
3. Description: "Next.js on AWS Lambda - Serverless Framework Demo"
4. Set to: **Public** ✅
5. Do NOT initialize with README
6. Click "Create repository"

## Step 2: Push to GitHub

```bash
cd /Users/manaslatif/Documents/Zubair/nextjs-lambda

# Replace YOUR_GITHUB_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/nextjs-lambda.git

# Push the code
git push -u origin main
```

**Example** (if username is "manaslatif"):

```bash
git remote add origin https://github.com/manaslatif/nextjs-lambda.git
git push -u origin main
```

## Step 3: Setup AWS (If Not Already Done)

Check if AWS is configured:

```bash
aws sts get-caller-identity
```

If you see an error, configure AWS:

```bash
aws configure
```

Enter your:

- AWS Access Key ID: `AKIA...`
- AWS Secret Access Key: `...`
- Default region: `us-east-1`
- Default output format: `json`

## Step 4: Deploy to AWS Lambda

```bash
cd /Users/manaslatif/Documents/Zubair/nextjs-lambda

# Install Serverless Framework globally (if needed)
npm install -g serverless

# Deploy!
serverless deploy
```

## Step 5: Get Your URLs

After deployment completes, you'll see:

```
endpoint: https://xxxxxxxxxx.lambda-url.us-east-1.on.aws
```

**Test your URLs:**

- Home: `https://xxxxxxxxxx.lambda-url.us-east-1.on.aws/`
- About: `https://xxxxxxxxxx.lambda-url.us-east-1.on.aws/about`

## Step 6: Update README with Live URL

```bash
# Open README.md and update the Lambda Function URL line
# Then:
git add README.md
git commit -m "Add live Lambda URL"
git push
```

## ✅ DONE!

You now have:

1. ✅ Public GitHub repository
2. ✅ Live AWS Lambda function
3. ✅ Two working URLs to share

## 📤 Share These:

**GitHub Repository:**

```
https://github.com/YOUR_USERNAME/nextjs-lambda
```

**Live Application:**

```
https://your-url.lambda-url.us-east-1.on.aws
```

## 🔧 Useful Commands

View deployment info:

```bash
serverless info
```

View logs:

```bash
serverless logs -f app --tail
```

Remove from AWS (cleanup):

```bash
serverless remove
```

---

**That's it!** Follow these commands in order and you'll have everything deployed. 🎉
